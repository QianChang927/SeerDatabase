package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class StrikeFromDarkJustinController
   {
      
      private static var _currentTask:Function;
      
      private static var _map:BaseMapProcess;
      
      private static var _currentMc:MovieClip;
      
      private static var _num:int;
      
      private static var _taskStep:int;
      
      private static var _firstOn:Boolean = true;
      
      private static var _shootIndex:int = -1;
      
      private static var _shootNum:int = 1;
       
      
      public function StrikeFromDarkJustinController()
      {
         super();
      }
      
      public static function clickIcon() : void
      {
         KTool.getMultiValue([8588],function(param1:Array):void
         {
            if(param1[0] < 2)
            {
               MapManager.changeMap(1177);
            }
            else
            {
               MapManager.changeMap(11186);
            }
         });
      }
      
      public static function destroy() : void
      {
         if(MapManager.currentMap.id == 11186)
         {
            _map.depthLevel["fanlidiMc"].removeEventListener(MouseEvent.CLICK,onClickFanlidi);
         }
         else if(_currentTask == task1)
         {
            switch(_taskStep)
            {
               case 0:
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
                  FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,fightOverHandler);
                  break;
               case 1:
                  _map.depthLevel["shitaiMc"].removeEventListener(MouseEvent.CLICK,onClickShitaiByOnce);
                  break;
               case 2:
                  _map.topLevel["tipMc"]["getBtn"].removeEventListener(MouseEvent.CLICK,onClickGetBtn);
                  _map.depthLevel["shitaiMc"].removeEventListener(MouseEvent.CLICK,onClickShitaiBySecond);
            }
         }
         else if(_currentTask == task2)
         {
            switch(_taskStep)
            {
               case 0:
                  _map.topLevel["tipMc"].removeEventListener(MouseEvent.CLICK,onClickTask2TipPanel);
                  break;
               case 1:
                  _map.topLevel["tipMc"].removeEventListener(MouseEvent.CLICK,onClickTask2TipPanel);
            }
         }
         if(_currentMc != null)
         {
            DisplayUtil.removeForParent(_currentMc);
            _currentMc = null;
         }
         _currentTask = null;
         _map = null;
      }
      
      public static function hideAll() : void
      {
         var _loc1_:int = 0;
         if(MapManager.currentMap.id == 1177)
         {
            _map.topLevel["tipMc"].visible = false;
            _map.topLevel["tipsMc"].visible = false;
            _map.topLevel["fog"].visible = false;
            _map.depthLevel["arrowMc"].visible = false;
            _map.depthLevel["shitaiMc"].mouseChildren = false;
            _loc1_ = 0;
            while(_loc1_ < 5)
            {
               _map.topLevel["circle_" + _loc1_].visible = false;
               _loc1_++;
            }
         }
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         hideAll();
         KTool.getMultiValue([8588],function(param1:Array):void
         {
            var a:Array = param1;
            if(a[0] < 3)
            {
               loaderMc(function():void
               {
                  switchTask(a[0]);
               });
               return;
            }
         });
      }
      
      private static function switchTask(param1:int) : void
      {
         var i:int = param1;
         switch(i)
         {
            case 0:
               _currentTask = task1;
               if(!_firstOn && _taskStep == 0)
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
                  FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,fightOverHandler);
                  return;
               }
               if(!_firstOn && _taskStep == 1)
               {
                  _map.topLevel["fog"].visible = true;
                  _map.depthLevel["arrowMc"].visible = true;
                  _map.depthLevel["shitaiMc"].addEventListener(MouseEvent.CLICK,onClickShitaiByOnce);
                  return;
               }
               if(!_firstOn && _taskStep == 2)
               {
                  _map.depthLevel["arrowMc"].visible = true;
                  _map.topLevel["fog"].visible = true;
                  _map.topLevel["fog"].alpha = 0.7;
                  _map.topLevel["tipMc"].gotoAndStop(1);
                  _map.topLevel["tipMc"].visible = true;
                  _map.topLevel["tipMc"].addEventListener(Event.ENTER_FRAME,function(param1:Event):void
                  {
                     _map.topLevel["tipMc"].removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     _map.topLevel["tipMc"]["getBtn"].addEventListener(MouseEvent.CLICK,onClickGetBtn);
                  });
                  _map.depthLevel["shitaiMc"].addEventListener(MouseEvent.CLICK,onClickShitaiBySecond);
                  buyCallback(0);
                  return;
               }
               StatManager.sendStat2014("0325暗黑贾斯汀的突袭","开始初始剧情","2016运营活动");
               break;
            case 1:
               _map.depthLevel["shitaiMc"].visible = false;
               if(!_firstOn)
               {
                  _map.topLevel["tipMc"].gotoAndStop(2);
                  _map.topLevel["tipMc"].visible = true;
                  _map.topLevel["tipsMc"].gotoAndStop(1);
                  _map.topLevel["tipsMc"].visible = true;
                  _map.topLevel["circle_4"].visible = true;
                  _shootNum = 1;
                  _map.topLevel["tipMc"].addEventListener(Event.ENTER_FRAME,function(param1:Event):void
                  {
                     _map.topLevel["tipMc"].removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     _map.topLevel["tipMc"]["shootNum"].text = _shootNum + "/5";
                  });
                  _map.topLevel["tipMc"].addEventListener(MouseEvent.CLICK,onClickTask2TipPanel);
                  return;
               }
               _currentTask = task2;
               break;
            case 2:
               if(!_firstOn)
               {
                  _map.depthLevel["fanlidiMc"].buttonMode = true;
                  _map.depthLevel["fanlidiMc"].addEventListener(MouseEvent.CLICK,onClickFanlidi);
                  return;
               }
               _currentTask = task3;
               break;
         }
         _currentTask(0);
         _firstOn = false;
      }
      
      private static function task1(param1:int) : void
      {
         var i:int = param1;
         var story:TaskStoryPlayer = new TaskStoryPlayer();
         _taskStep = i;
         hideIcon();
         switch(i)
         {
            case 0:
               story.addMapMovie([_currentMc,1,"mc_1"]);
               story.addDialog([NPC.ATIEDA,["叹息之墙终于打开，艾伯再也无法阻止我们的脚步！神殿之丘，贾斯汀站长，我们来了！"]]);
               story.addDialog([NPC.SAIXIAOXI,["可是……好像不太对，怎么啥都看不清啊？"]]);
               story.addDialog([NPC.KALULU,["洛亚神域的记载中并没有提到迷雾这件事。难道艾伯在神殿和叹息之墙之间创造了一块全新的陆地？"]]);
               story.addDialog([NPC.SAIXIAOXI,["不管如何，我们必须要通过这里，才能救出贾斯汀站长！当务之急，是驱散这些迷雾！"]]);
               story.addDialog([NPC.ATIEDA,["可是现在啥都看不清，卡璐璐，你有什么好办法吗？"]]);
               story.addDialog([NPC.KALULU,["派特博士曾经教导我，如果出现了奇怪的自然现象，可以先尝试从周围的精灵身上着手进行探测。那边有几只小精灵，我们可以试试！"],["好！"]],function():void
               {
                  _map.topLevel["fog"].visible = true;
                  showIcon();
                  ModuleManager.showAppModule("StrikeFromDarkJustinTipsPanel",1);
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
                  FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,fightOverHandler);
                  _map.topLevel["tipsMc"].gotoAndStop(2);
                  _map.topLevel["tipsMc"].visible = true;
               });
               break;
            case 1:
               story.addMapMovie([_currentMc,2,"mc_2"]);
               story.addDialog([NPC.ATIEDA,["咦，你们看，这只小精灵掉落了一颗奇怪的小珠子！"]]);
               story.addDialog([NPC.KALULU,["哇！本来陆地上有小贝壳精灵就已经很奇怪了，想不到它还会吐珍珠！我要收集好多好多珍珠，回去装点我的小基地！"]]);
               story.addDialog([NPC.SAIXIAOXI,["打住，卡璐璐，我们现在需要赶快救出站长，别浪费时间啦。再说这个也不是珍珠呀！"]]);
               story.addDialog([NPC.SAIXIAOXI,["你看，这个小珠子的周围有淡淡的雾气产生，我想，它肯定就是破除这个迷雾的关键。我们快找找，周围有没有什么东西可以利用这颗珠子！"]],function():void
               {
               });
               story.addDialog([NPC.KALULU,["咦，你看，那里有一个石台！"]]);
               story.addMapMovie([_currentMc,3,"mc_3"]);
               story.addDialog([NPC.SAIXIAOXI,["走，我们过去看看！"]],function():void
               {
                  showIcon();
                  _map.topLevel["fog"].visible = true;
                  _map.depthLevel["arrowMc"].visible = true;
                  _map.depthLevel["shitaiMc"].mouseChildren = true;
                  _map.depthLevel["shitaiMc"].addEventListener(MouseEvent.CLICK,onClickShitaiByOnce);
               });
               break;
            case 2:
               _map.depthLevel["arrowMc"].visible = false;
               _map.topLevel["fog"].visible = false;
               story.addMapMovie([_currentMc,4,"mc_4"],function():void
               {
                  _map.topLevel["fog"].visible = true;
                  _map.topLevel["fog"].alpha = 0.7;
               });
               story.addDialog([NPC.KALULU,["真的有用！雾气变淡了！"]]);
               story.addDialog([NPC.SAIXIAOXI,["卡璐璐说的没错，看来破解这片迷雾的关键就在这小小的珠子之上。从雾气的浓度来看，我们可能还需要5枚珠子，才能让迷雾完全散去。"]]);
               story.addDialog([NPC.ATIEDA,["好！那我们赶紧行动起来，再收集4枚珠子好了！"],["好!"]],function():void
               {
                  ModuleManager.showAppModule("StrikeFromDarkJustinTipsPanel",2);
                  _map.depthLevel["arrowMc"].visible = true;
                  _map.topLevel["tipMc"].visible = true;
                  _map.topLevel["tipMc"].gotoAndStop(1);
                  _map.topLevel["tipMc"].addEventListener(Event.ENTER_FRAME,function(param1:Event):void
                  {
                     _map.topLevel["tipMc"].removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     _map.topLevel["tipMc"]["getBtn"].addEventListener(MouseEvent.CLICK,onClickGetBtn);
                  });
                  _map.depthLevel["shitaiMc"].mouseChildren = true;
                  _map.depthLevel["shitaiMc"].addEventListener(MouseEvent.CLICK,onClickShitaiBySecond);
                  buyCallback(0);
                  showIcon();
               });
               break;
            case 3:
               _map.depthLevel["arrowMc"].visible = false;
               _map.topLevel["fog"].visible = false;
               _map.depthLevel["shitaiMc"].visible = false;
               story.addMapMovie([_currentMc,5,"mc_5"]);
               story.addDialog([NPC.SAIXIAOXI,["这里怎么……"]]);
               story.addDialog([NPC.KALULU,["还是叹息之墙？！"]]);
               story.addDialog([NPC.ATIEDA,["这……这不可能！我们明明集合众人之力，打开了叹息之墙，为什么我们又回到了这里！"]]);
               story.addDialog([NPC.SAIXIAOXI,["还有这奇怪的迷雾……这肯定是海盗使出的障眼法！"]]);
               story.addDialog([NPC.KALULU,["既然是障眼法，就一定有破绽。我们仔细找找，耽误的时间越久，对站长就越不利。"],["好，分头行动！"]],function():void
               {
                  _currentTask = task2;
                  task2(0);
               });
         }
         story.start();
      }
      
      private static function onClickGetBtn(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("MultiBuyPanel",{
            "productID":247043,
            "iconID":1708748,
            "exchangeID":8574,
            "callFunction":buyCallback
         });
      }
      
      private static function buyCallback(param1:int) : void
      {
         var i:int = param1;
         ItemManager.updateAndGetItemsNum([1708748],function(param1:Array):void
         {
            var a:Array = param1;
            _num = a[0];
            if(_map.topLevel["tipMc"]["numTxt"] == null)
            {
               _map.topLevel["tipMc"].addEventListener(Event.ENTER_FRAME,function(param1:Event):void
               {
                  _map.topLevel["tipMc"].removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  _map.topLevel["tipMc"]["numTxt"].text = a[0] + "/5";
               });
            }
            else
            {
               _map.topLevel["tipMc"]["numTxt"].text = a[0] + "/5";
            }
         });
      }
      
      private static function onClickShitaiBySecond(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(_num < 5)
         {
            NpcDialog.show(NPC.SAIXIAOXI,["我们需要5颗蜃气之珠才能使迷雾散去，现在还缺" + (5 - _num) + "颗珠子！"],["我这就去！"]);
         }
         else
         {
            _map.topLevel["tipMc"].visible = false;
            _map.topLevel["tipMc"]["getBtn"].removeEventListener(MouseEvent.CLICK,onClickGetBtn);
            _map.depthLevel["shitaiMc"].removeEventListener(MouseEvent.CLICK,onClickShitaiBySecond);
            KTool.doExchange(8575,function():void
            {
               task1(3);
            });
         }
      }
      
      private static function onClickShitaiByOnce(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("0325暗黑贾斯汀的突袭","触发击败野怪剧情","2016运营活动");
         _map.depthLevel["shitaiMc"].removeEventListener(MouseEvent.CLICK,onClickShitaiByOnce);
         task1(2);
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         param1.stopImmediatePropagation();
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,fightOverHandler);
         if(FightManager.isWin)
         {
            task1(1);
         }
      }
      
      private static function loaderMc(param1:Function = null) : void
      {
         var funs:Function = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate("StrikeFromDarkJustin"),function(param1:MovieClip):void
         {
            if(Boolean(_currentMc) && Boolean(_currentMc.parent))
            {
               _currentMc.parent.removeChild(_currentMc);
            }
            _currentMc = param1;
            if(funs != null)
            {
               funs();
            }
         });
      }
      
      private static function hideIcon() : void
      {
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         ToolBarController.panel.hide();
         KTool.showMapAllPlayerAndMonster(false);
         MapManager.currentMap.depthLevel.addChild(_currentMc);
      }
      
      private static function showIcon() : void
      {
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
         ToolBarController.panel.show();
         KTool.showMapAllPlayerAndMonster(true);
         MapManager.currentMap.depthLevel.removeChild(_currentMc);
      }
      
      private static function task2(param1:int) : void
      {
         var i:int = param1;
         var story:TaskStoryPlayer = new TaskStoryPlayer();
         hideIcon();
         _taskStep = i;
         switch(i)
         {
            case 0:
               story.addMapMovie([_currentMc,6,"mc_6"]);
               story.addDialog([NPC.ATIEDA,["果然，这里不是真实的叹息之墙。我清楚地记得，这个图案边上是有一个爪痕的，但是现在不见了。"]]);
               story.addMapMovie([_currentMc,7,"mc_7"]);
               story.addDialog([NPC.KALULU,["刚才那是谁？"]]);
               story.addDialog([NPC.SAIXIAOXI,["我不知道他是谁，但是我知道，他一定就是布置出这个迷境，来阻挡我们的人！"]]);
               story.addDialog([NPC.ATIEDA,["他的反应说明了一个问题，我们刚才的举动，让我们更加接近真实！"]]);
               story.addDialog([NPC.SAIXIAOXI,["所以……"]]);
               story.addDialog([NPC.KALULU,["我们继续找出这里跟真实的叹息之墙有什么区别，就能离开这里！我这里有一份叹息之墙的地图，我们可以对照一下！"]]);
               story.addDialog([NPC.ATIEDA,["如果找到了不同之处，用头部射击击中该处，就可以破解那里的幻境了！"],["让我仔细看看。"]],function():void
               {
                  _map.topLevel["tipMc"].gotoAndStop(2);
                  _map.topLevel["tipMc"].visible = true;
                  _map.topLevel["tipsMc"].gotoAndStop(1);
                  _map.topLevel["tipsMc"].visible = true;
                  _map.topLevel["circle_4"].visible = true;
                  _map.topLevel["tipMc"].addEventListener(Event.ENTER_FRAME,function(param1:Event):void
                  {
                     _map.topLevel["tipMc"].removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     _map.topLevel["tipMc"]["shootNum"].text = _shootNum + "/5";
                  });
                  _map.topLevel["tipMc"].addEventListener(MouseEvent.CLICK,onClickTask2TipPanel);
                  showIcon();
               });
               break;
            case 1:
               _map.topLevel.visible = false;
               story.addMapMovie([_currentMc,8,"mc_8"],function():void
               {
                  _map.topLevel.visible = true;
                  ++_shootNum;
                  _map.topLevel["tipMc"]["shootNum"].text = _shootNum + "/5";
                  _map.topLevel["circle_" + _shootIndex].visible = true;
                  showIcon();
                  if(_shootNum >= 5)
                  {
                     _map.topLevel["tipMc"].removeEventListener(MouseEvent.CLICK,onClickTask2TipPanel);
                     AimatController.removeEventListener(AimatEvent.PLAY_END,onAimat);
                     KTool.doExchange(8576,function():void
                     {
                        _firstOn = true;
                        task2(2);
                     });
                  }
               });
               break;
            case 2:
               _map.topLevel.visible = false;
               story.addMapMovie([_currentMc,9,"mc_9"]);
               story.addDialog([NPC.ANHEIJUSTIN,["厉害啊，厉害。想不到你们居然真的可以走到这里来。"]]);
               story.addDialog([NPC.ANHEIJUSTIN,["不过很可惜，我想艾伯大人的计划已经到达了最后一步，你们已经错过了阻挡他的最好机会！"]]);
               story.addDialog([NPC.ANHEIJUSTIN,["我就不陪你们玩了，艾伯大人现在很需要我。凡利迪，你来跟他们做做游戏吧！"]]);
               story.addDialog([NPC.FRANLIDE,["好的大人！这些小混蛋破坏了我的迷境，是时候做个清算了！"]],function():void
               {
                  showIcon();
                  MapManager.changeMap(11186);
               });
         }
         story.start();
      }
      
      private static function onClickTask2TipPanel(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var str:String = String(e.target.name);
         if(str == "oneClickBtn")
         {
            KTool.buyProductByCallback(247044,1,function():void
            {
               KTool.doExchange(8577,function():void
               {
                  _firstOn = true;
                  task2(2);
               });
            });
         }
         else if(str == "goMapBtn")
         {
            StatManager.sendStat2014("0325暗黑贾斯汀的突袭","打开地图面板","2016运营活动");
            ModuleManager.showAppModule("StrikeFromDarkJustinTipsPanel",3);
         }
         else if(str == "shootBtn")
         {
            e.stopImmediatePropagation();
            AimatController.start(0);
            AimatController.addEventListener(AimatEvent.PLAY_END,onAimat);
         }
      }
      
      private static function onAimat(param1:AimatEvent) : void
      {
         var _loc2_:AimatInfo = param1.info;
         if(_loc2_.userID != MainManager.actorID)
         {
            return;
         }
         var _loc3_:int = 0;
         while(_loc3_ < 4)
         {
            if(_map.conLevel["hitmc_" + _loc3_].hitTestPoint(_loc2_.endPos.x,_loc2_.endPos.y))
            {
               StatManager.sendStat2014("0325暗黑贾斯汀的突袭","使用头部射击击中一处幻境","2016运营活动");
               _shootIndex = _loc3_;
               task2(1);
            }
            _loc3_++;
         }
      }
      
      private static function task3(param1:int) : void
      {
         _map.depthLevel["fanlidiMc"].visible = true;
         _map.depthLevel["fanlidiMc"].buttonMode = true;
         _map.depthLevel["fanlidiMc"].addEventListener(MouseEvent.CLICK,onClickFanlidi);
         StatManager.sendStat2014("0325暗黑贾斯汀的突袭","打开挑战面板","2016运营活动");
         ModuleManager.showAppModule("StrikeFromDarkJustinFightPanel");
      }
      
      private static function onClickFanlidi(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("0325暗黑贾斯汀的突袭","打开挑战面板","2016运营活动");
         ModuleManager.showAppModule("StrikeFromDarkJustinFightPanel");
      }
   }
}
