package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.component.PlayAnimationComponent;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.INpcModel;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class QiyaSuperEvoTaskController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _index:int;
      
      private static var _count:int = 5;
      
      private static var _animatePlayer:PlayAnimationComponent;
      
      private static var _step:int;
      
      private static var _num:int;
      
      private static var _mc:MovieClip;
      
      private static var _headMc:MovieClip;
      
      private static var states:Array = ["点击回答问题1","点击回答问题2","点击回答问题3","点击回答问题4","点击回答问题5","正确回答问题1","正确回答问题2","正确回答问题3","正确回答问题4","正确回答问题5","参与找回糖果任务","参与成果保卫任务","参与圣诞鼓励任务","打开装备推送面板"];
       
      
      public function QiyaSuperEvoTaskController()
      {
         super();
      }
      
      public static function destroy() : void
      {
         if(_map != null)
         {
            _map.depthLevel.removeEventListener(MouseEvent.CLICK,onClick);
         }
         _map = null;
         if(_animatePlayer)
         {
            _animatePlayer.destroy();
            _animatePlayer = null;
         }
         if(_mc)
         {
            _mc.stop();
            DisplayUtil.removeForParent(_mc);
            _mc.removeEventListener(MouseEvent.CLICK,onMcClick);
            _mc = null;
            NpcController.removeEventListener(NpcController.NPC_CLICK,onNpc,false);
         }
         SystemTimerManager.removeTickFun(updateCD);
         SystemTimerManager.removeTickFun(updateFightCD);
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
      }
      
      private static function loadAnimate() : void
      {
         if(_animatePlayer == null)
         {
            _animatePlayer = new PlayAnimationComponent("QiyaSuperEvoTask",function():void
            {
               if(_step == 3 && MapManager.currentMap.id == 11037)
               {
                  MapManager.changeMap(1);
                  return;
               }
               if(_step == 4)
               {
                  ModuleManager.showAppModule("QiyaSuperEvoTaskPanel");
               }
               else if(_step <= 3)
               {
                  update();
               }
            },1,false);
         }
      }
      
      public static function tasksOver() : void
      {
         if(_headMc)
         {
            _headMc.removeEventListener(MouseEvent.CLICK,onClickHead);
            DisplayUtil.removeForParent(_headMc);
            _headMc = null;
            _step = 4;
            loadAnimate();
            _animatePlayer.play(4);
         }
      }
      
      private static function completeTask(param1:int, param2:int = 0) : void
      {
         var i:int = param1;
         var pro:int = param2;
         SocketConnection.sendByQueue(42218,[i,pro],function(param1:SocketEvent):void
         {
            update();
         });
      }
      
      public static function showAnimate(param1:int) : void
      {
         loadAnimate();
         _animatePlayer.play(param1);
      }
      
      private static function update() : void
      {
         KTool.getMultiValue([100348,100349,100351,100350],function(param1:Array):void
         {
            _step = param1[0];
            if(param1[0] < 3 && MapManager.currentMap.id != 11037)
            {
               return;
            }
            if(param1[0] == 4)
            {
               tasksOver();
               return;
            }
            switch(param1[0])
            {
               case 0:
                  showMapObj();
                  break;
               case 1:
                  _num = param1[1];
                  showMapObj();
                  break;
               case 2:
                  _num = param1[3];
                  taskC();
                  showMapObj();
                  break;
               case 3:
                  _num = param1[2];
                  taskD();
                  showMapObj();
            }
         });
      }
      
      private static function loadPlayerMc() : void
      {
         if(_headMc)
         {
            return;
         }
         ResourceManager.getResource(ClientConfig.getActiveUrl("QiyaSuperEvoTask"),function(param1:MovieClip):void
         {
            _headMc = param1;
            _headMc.y = -60;
            _headMc.addEventListener(MouseEvent.CLICK,onClickHead);
            MainManager.actorModel.addChild(_headMc);
         });
      }
      
      protected static function onClickHead(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("QiyaSuperEvoChristPanel");
      }
      
      private static function taskD() : void
      {
         var index:int = 0;
         loadPlayerMc();
         index = 0;
         switch(MapManager.currentMap.id)
         {
            case 4:
               index = -1;
               if(KTool.getBit(_num,1) == 1)
               {
                  return;
               }
               NpcController.addEventListener(NpcController.NPC_CLICK,onNpc,false,1999);
               break;
            case 8:
               index = -1;
               if(KTool.getBit(_num,6) == 1)
               {
                  return;
               }
               NpcController.addEventListener(NpcController.NPC_CLICK,onNpc,false,1999);
               break;
            case 5:
               index = -1;
               if(KTool.getBit(_num,2) == 1)
               {
                  return;
               }
               NpcController.addEventListener(NpcController.NPC_CLICK,onNpc,false,1999);
               break;
            case 7:
               if(KTool.getBit(_num,3) == 1)
               {
                  return;
               }
               index = 1;
               break;
            case 103:
               if(KTool.getBit(_num,4) == 1)
               {
                  return;
               }
               index = 2;
               break;
            case 332:
               if(KTool.getBit(_num,5) == 1)
               {
                  return;
               }
               index = 3;
               break;
            case 107:
               if(KTool.getBit(_num,7) == 1)
               {
                  return;
               }
               index = 5;
               break;
            case 1129:
               if(KTool.getBit(_num,8) == 1)
               {
                  return;
               }
               index = 6;
               break;
            case 1:
               if(KTool.getBit(_num,9) == 1)
               {
                  return;
               }
               index = 7;
               break;
         }
         if(index == -1)
         {
            if(_mc)
            {
               DisplayUtil.removeForParent(_mc);
            }
            return;
         }
         if(_mc)
         {
            _mc.gotoAndStop(index);
            if(_mc.mc)
            {
               CommonUI.addYellowExcal(_mc["mc" + index],0,-_mc["mc" + index].y - 10);
            }
            MapManager.currentMap.depthLevel.addChild(_mc);
            return;
         }
         ResourceManager.getResource(ClientConfig.getAppRes("mapobj/QiyaSuperEvoTask_Npc"),function(param1:MovieClip):void
         {
            _mc = param1;
            _mc.gotoAndStop(index);
            _mc.buttonMode = true;
            _mc.mouseChildren = false;
            _mc.addEventListener(MouseEvent.CLICK,onMcClick);
            if(_mc["mc" + index])
            {
               if(index != 5)
               {
                  CommonUI.addYellowExcal(_mc["mc" + index],0,-_mc["mc" + index].height + 10);
               }
               else
               {
                  CommonUI.addYellowExcal(_mc["mc" + index],0,-_mc["mc" + index].height + 70);
               }
            }
            MapManager.currentMap.depthLevel.addChild(_mc);
         });
      }
      
      protected static function onMcClick(param1:MouseEvent) : void
      {
         _mc.removeEventListener(MouseEvent.CLICK,onMcClick);
         CommonUI.removeYellowExcal(_mc["mc" + _mc.currentFrame]);
         sendState(12);
         switch(_mc.currentFrame)
         {
            case 1:
               npcDialog(NPC.SAIXIAOXI,"我感觉自己吃不掉这么多糖果….要不你在这里陪我一起吃吧？…其实主要我赶着去拿圣诞的福利…","这是给你的糖果~",3);
               break;
            case 2:
               npcDialog(NPC.KALULU,"真不好意思，让你特意给我送来圣诞的礼物….听说这次圣诞福利非常多，你都领了吗？","这是给你的糖果~",4);
               break;
            case 3:
               npcDialog(NPC.ATIEDA,"嘿嘿！我就知道崇拜我的人还是很多的~你的礼物我收下了~告诉你，我在加强我的修炼，现在强力的精灵太多了，你也要好好努力啊！","这是给你的糖果~",5);
               break;
            case 5:
               npcDialog(NPC.XIAOYI,"这里居然一个糖果都没有！气死我了！啊啊啊啊！居然有人要免费给我糖果~谢谢~….等等，这不是我从那老头身上抢来的吗？","哎呀！居然被你发现了！~",7);
               break;
            case 6:
               npcDialog(NPC.FEIXUE,"啧啧，这里一点吃的都没有….我好饿….你有糖果要给我吃吗？…不知道为什么，我感动的热泪都有些盈眶了。","别别…圣诞快乐哦~~",8);
               break;
            case 7:
               npcDialog(NPC.SHENGDAN_LAOREN,"要怎么说，我感觉你是第一个找到我的，虽然丢失了大量的糖果，但我还是想尽办法又获得了一些，无论遭遇了什么，记得快乐永存。","这是给你的糖果~",9);
         }
      }
      
      private static function onNpc(param1:DynamicEvent) : void
      {
         NpcController.removeEventListener(NpcController.NPC_CLICK,onNpc,false);
         param1.stopImmediatePropagation();
         sendState(12);
         var _loc2_:INpcModel = param1.paramObject as INpcModel;
         if(_loc2_.npcInfo.npcId == 1)
         {
            npcDialog(NPC.SHIPER,"你说特意给我带来了圣诞糖果？非常感谢你，我答应你，永远会守卫着赛尔号！","这是给你的糖果~",1);
         }
         else if(_loc2_.npcInfo.npcId == 2)
         {
            npcDialog(NPC.CICI,"非常感谢！我们现在正在加紧太空站的全面重建！相信我，一切都会好起来的！","这是给你的糖果~",6);
         }
         else if(_loc2_.npcInfo.npcId == 3)
         {
            npcDialog(NPC.DOCTOR,"这是我新发明的仪器，可以加快太空站重建的速度….哦哦！你说给我带来了圣诞节的糖果？…哈哈，也祝你节日快乐~","这是给你的糖果~",2);
         }
      }
      
      private static function npcDialog(param1:int, param2:String, param3:String, param4:int) : void
      {
         var ncpId:int = param1;
         var q:String = param2;
         var a:String = param3;
         var i:int = param4;
         NpcDialogNew_1._HasDanmu = false;
         NpcDialogNew_1.show(ncpId,[q],[a],[function():void
         {
            completeTask(3,i);
         }]);
      }
      
      private static function showMapObj() : void
      {
         var _loc1_:int = 0;
         if(MapManager.currentMap.id != 11037)
         {
            return;
         }
         _map.depthLevel["santaMc"].visible = _step == 0;
         _map.depthLevel["qiyaMc"].visible = _step >= 1;
         _map.depthLevel["qiyaMc"].mouseChildren = false;
         _map.depthLevel["qiyaMc"].buttonMode = true;
         if(_step == 1 && _count == 5)
         {
            addCandy();
         }
         else if(_step != 1)
         {
            SystemTimerManager.removeTickFun(updateCD);
            _loc1_ = 0;
            while(_loc1_ < 5)
            {
               _map.depthLevel["candyMc_" + _loc1_].visible = false;
               _loc1_++;
            }
         }
         if(_step == 2)
         {
            _map.depthLevel["qiyaMc"].x = 276;
            _map.depthLevel["qiyaMc"].y = 276;
         }
      }
      
      protected static function onClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         switch(event.target.name)
         {
            case "santaMc":
               taskA();
               break;
            case "qiyaMc":
               NpcDialogNew_1._HasDanmu = false;
               if(_step == 1)
               {
                  NpcDialogNew_1.show(NPC.KILLUA,["好好干活~你现在才收集了" + _num + "个~需要50个糖果才能完成任务哦！"],["太烦了，我要一键完成。","没事，我慢慢找，这场景还蛮好看的。"],[function():void
                  {
                     KTool.buyProductByCallback(246178,1,function():void
                     {
                        KTool.doExchange(7858,function():void
                        {
                           NpcDialogNew_1.show(NPC.KILLUA,["不错不错！真是辛苦你了！可算收集到那个老头规定的个数了~先把这些都给我吧~一会我们去分给那些重建太空站的勇士们！"],["好啊！"],[function():void
                           {
                              NpcDialogNew_1._HasDanmu = true;
                              update();
                              loadAnimate();
                              _animatePlayer.play(2);
                           }]);
                        });
                     });
                  },function():void
                  {
                     NpcDialogNew_1._HasDanmu = true;
                  }]);
               }
               else if(_step == 2)
               {
                  NpcDialogNew_1.show(NPC.KILLUA,["你只驱散了" + _num + "只柯蓝，还差" + (15 - _num) + "只！"],["好烦啊，让我快点完成吧。","嗯，我还在继续。"],[function():void
                  {
                     KTool.buyProductByCallback(246179,1,function():void
                     {
                        KTool.doExchange(7859,function():void
                        {
                           NpcDialogNew_1._HasDanmu = true;
                           loadAnimate();
                           update();
                           _animatePlayer.play(3);
                        });
                     });
                  },function():void
                  {
                     NpcDialogNew_1._HasDanmu = true;
                  }]);
               }
               else
               {
                  ModuleManager.showAppModule("QiyaSuperEvoChristPanel");
               }
         }
         if(event.target.name.indexOf("candyMc_") != -1)
         {
            sendState(10);
            event.target.visible = false;
            if(_num < 49)
            {
               taskB();
            }
            else if(_num == 49)
            {
               NpcDialogNew_1._HasDanmu = false;
               NpcDialogNew_1.show(NPC.KILLUA,["不错不错！真是辛苦你了！可算收集到那个老头规定的个数了~先把这些都给我吧~一会我们去分给那些重建太空站的勇士们！"],["好啊！"],[function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  loadAnimate();
                  completeTask(2);
                  _animatePlayer.play(2);
               }]);
            }
            else if(_num >= 50)
            {
               Alarm.show("你已经收集到足够多的糖果了，再多也装不下啦，快去找奇牙吧！");
            }
         }
      }
      
      private static function taskC() : void
      {
         addBoss();
      }
      
      private static function addBoss() : void
      {
         var _loc1_:OgreModel = new OgreModel(1);
         _loc1_.addEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
         var _loc2_:Point = new Point();
         _loc2_.x = Math.random() * 826 + 22;
         _loc2_.y = Math.random() * 150 + 340;
         _loc1_.show(94,_loc2_);
      }
      
      protected static function onClickBossHandler(param1:RobotEvent) : void
      {
         var ogre:OgreModel = null;
         var event:RobotEvent = param1;
         ogre = event.currentTarget as OgreModel;
         sendState(11);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var e:PetFightEvent = param1;
            if(FightManager.isWin)
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               ogre.removeEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
               ogre.destroy();
               KTool.getMultiValue([100350],function(param1:Array):void
               {
                  if(param1[0] < 15)
                  {
                     _num = param1[0];
                     _count = 0;
                     SystemTimerManager.addTickFun(updateFightCD);
                  }
                  else
                  {
                     loadAnimate();
                     _animatePlayer.play(3);
                     update();
                  }
               });
            }
         });
         FightManager.fightNoMapBoss("柯蓝",6234);
      }
      
      private static function updateFightCD() : void
      {
         ++_count;
         if(_count >= 5)
         {
            _count = 0;
            SystemTimerManager.removeTickFun(updateFightCD);
            addBoss();
         }
      }
      
      private static function taskB() : void
      {
         Alarm.show("你找到了一个糖果！");
         _count = _count >= 5 ? 0 : _count;
         SystemTimerManager.addTickFun(updateCD);
         completeTask(2);
      }
      
      private static function addCandy() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 5)
         {
            _map.depthLevel["candyMc_" + _loc1_].mouseChildren = false;
            _map.depthLevel["candyMc_" + _loc1_].buttonMode = true;
            if(!_map.depthLevel["candyMc_" + _loc1_].visible)
            {
               _map.depthLevel["candyMc_" + _loc1_].visible = true;
               _map.depthLevel["candyMc_" + _loc1_].x = Math.random() * 778 + 85;
               _map.depthLevel["candyMc_" + _loc1_].y = Math.random() * 106 + 344;
            }
            _loc1_++;
         }
      }
      
      private static function updateCD() : void
      {
         ++_count;
         if(_count >= 5)
         {
            _count = 0;
            SystemTimerManager.removeTickFun(updateCD);
            addCandy();
         }
      }
      
      private static function taskA() : void
      {
         NpcDialogNew_1._HasDanmu = false;
         NpcDialogNew_1.show(NPC.SHENGDAN_LAOREN,["呜呜呜呜…….我的糖果啊……又被小樱那丫头抢走了，她到底是什么时候来的，我怎么一点都没有感觉到！我的糖果……"],["老爷爷，你别着急，跟我说说怎么回事。","多大年纪了还这么爱吃甜食，你牙口可以的啊。"],[function():void
         {
            var story:* = new TaskStoryPlayer();
            story.useNewDialog = true;
            story.addDialog([NPC.SHENGDAN_LAOREN,["我是一位圣诞老人，你懂的，每年我都会为玩家送来很多圣诞福利，这次我带来了很多糖果…但是却被一个特别喜欢收集糖果的小樱全部抢走了，我的内心已经崩溃了…"],["小樱….她是不是还有一个伙伴叫小雪？"]]);
            story.addDialog([NPC.SEER,["听说这两个小精灵，一个喜欢收集糖果，一个喜欢吃糖果….你的糖果是不是已经被…..吃掉了？"],["不！！根本无法想象那个画面！那么多的糖果！"]]);
            story.addDialog([NPC.SHENGDAN_LAOREN,["如果没有糖果…我这次圣诞行动就失败了…"],["好好，您现不要太激动，我怎么帮助您呢？"]],function():void
            {
               showQuestion(1);
            });
            story.start();
         }]);
      }
      
      private static function showQuestion(param1:int) : void
      {
         var i:int = param1;
         switch(i)
         {
            case 1:
               _index = 1;
               NpcDialogNew_1.show(NPC.SHENGDAN_LAOREN,["看你的模样，似乎一时半会斗不过那个古灵精怪的小樱，容我先考考你！圣诞节是哪一天？"],["12月24日","12月25日","12月26日"],[wrongchoose,function():void
               {
                  sendState(_index);
                  sendState(5);
                  showQuestion(2);
               },wrongchoose]);
               break;
            case 2:
               _index = 2;
               NpcDialogNew_1.show(NPC.SHENGDAN_LAOREN,["圣诞节的来历是？"],["基督教纪念耶稣诞生","伊斯兰教纪念默罕默德诞生","佛教纪念释迦摩尼诞生"],[function():void
               {
                  sendState(_index);
                  sendState(6);
                  showQuestion(3);
               },wrongchoose,wrongchoose]);
               break;
            case 3:
               _index = 3;
               NpcDialogNew_1.show(NPC.SHENGDAN_LAOREN,["圣诞节孩子们最期待什么？"],["美食","新衣","玩具","以上全部都对"],[wrongchoose,wrongchoose,wrongchoose,function():void
               {
                  sendState(_index);
                  sendState(7);
                  showQuestion(4);
               }]);
               break;
            case 4:
               _index = 4;
               NpcDialogNew_1.show(NPC.SHENGDAN_LAOREN,["我的坐骑是什么？"],["滑板","飞机","麋鹿"],[wrongchoose,wrongchoose,function():void
               {
                  sendState(_index);
                  sendState(8);
                  showQuestion(5);
               }]);
               break;
            case 5:
               _index = 5;
               NpcDialogNew_1.show(NPC.SHENGDAN_LAOREN,["我这次是带着什么来的？"],["糖果","钞票","玩具"],[function():void
               {
                  sendState(9);
                  sendState(_index);
                  showQuestion(6);
               },wrongchoose,wrongchoose]);
               break;
            case 6:
               NpcDialogNew_1._HasDanmu = true;
               completeTask(1);
               loadAnimate();
               _animatePlayer.play(1);
         }
      }
      
      private static function wrongchoose() : void
      {
         NpcDialogNew_1.show(NPC.SHENGDAN_LAOREN,["这你都能答错，我也是醉了。"],["好"],[function():void
         {
            sendState(_index);
            showQuestion(_index);
         }]);
      }
      
      private static function sendState(param1:int) : void
      {
         StatManager.sendStat2014("1225奇牙超进化",states[param1],StatManager.RUN_ACT_2015);
      }
   }
}
