package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class LookForSonOfMoonController
   {
      
      private static var _step:int;
      
      private static var _attackNum:int;
      
      private static var _hurtNum:int;
      
      private static var _currentMc:MovieClip;
      
      private static var _currentBufferArr:Array = [22937,22938,22939,22940];
      
      private static var _map:MapModel;
      
      private static var _index:int;
      
      private static var _mc:MovieClip;
       
      
      public function LookForSonOfMoonController()
      {
         super();
      }
      
      public static function hideIcon() : void
      {
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         ToolBarController.panel.hide();
         KTool.showMapAllPlayerAndMonster(false);
      }
      
      public static function showIcon() : void
      {
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
         ToolBarController.panel.show();
         KTool.showMapAllPlayerAndMonster(true);
         if(Boolean(_currentMc) && Boolean(_currentMc.parent))
         {
            _currentMc.parent.removeChild(_currentMc);
         }
      }
      
      private static function loadMapMovie(param1:int, param2:Function = null) : void
      {
         var i:int = param1;
         var fun:Function = param2;
         ResourceManager.getResource(ClientConfig.getMapAnimate("LookForSonOfMoon"),function(param1:MovieClip):void
         {
            if(Boolean(_currentMc) && Boolean(_currentMc.parent))
            {
               _currentMc.parent.removeChild(_currentMc);
            }
            _currentMc = param1;
            hideIcon();
            MapManager.currentMap.topLevel.addChild(_currentMc);
            if(fun != null)
            {
               fun(i);
            }
         });
      }
      
      public static function taskProcess(param1:int) : void
      {
         var story:TaskStoryPlayer;
         var i:int = param1;
         if(_currentMc == null || _currentMc.parent == null)
         {
            loadMapMovie(i,taskProcess);
            return;
         }
         hideIcon();
         story = new TaskStoryPlayer();
         story.useNewDialog = true;
         NpcDialogNew_1._HasDanmu = false;
         switch(i)
         {
            case 0:
               story.addMapMovie([_currentMc,1,"mc0"],null,null);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["孩子们，奇牙正需要你们的帮助！"]]);
               story.addDialog([NPC.KALULU,["咦，向导先生，你怎么来了？"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["我感受到奇牙的召唤，它需要我来向你们表达想说的话。"]]);
               story.addDialog([NPC.KILLUA,["奇牙！奇牙奇牙，奇牙……"]]);
               story.addDialog([NPC.SAIXIAOXI,["奇牙在说什么？"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["奇牙说，它的月华项链在战斗中变成了碎片。那是对它来说很重要的东西，没有了月华项链，它将无法感知到月亮的力量，也就无法发挥出真正的实力。"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["奇牙想拜托你们，帮助它找回它的项链。"]]);
               story.addDialog([NPC.ATIEDA,["啊哈，原来是这样。小菜一碟，包在我们身上！"]]);
               story.addDialog([NPC.SAIXIAOXI,["那你知道去哪里找它的项链吗？泰坦星域这么大，我们可是一点眉目都没有啊！"]]);
               story.addDialog([NPC.ATIEDA,["呃，这个……"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["无妨，既然奇牙已经将我召唤到了这里，我可以顺便帮你们占卜出现在项链碎片的大致位置来，你们也就可以快速找到它了。"]]);
               story.addDialog([NPC.KALULU,["那真是太方便了！谢谢您，向导先生！"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["那我现在就开始吧！"]]);
               story.addMapMovie([_currentMc,2,"mc1"],null,null);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["从我占卜的结果来看，奇牙的项链一共碎裂出了三块碎片，其中的一块正被一只精灵随身携带着。"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["这只精灵原本就生活在泰坦星域。但是具体是哪一只精灵……恕我无能为力了。"]]);
               story.addDialog([NPC.KALULU,["没事，已经非常感谢您了，向导先生！"]]);
               story.addDialog([NPC.ATIEDA,["生活在泰坦星域的精灵嘛……范围也太大了点吧！"]]);
               story.addDialog([NPC.SAIXIAOXI,["哎？我们那天不是在临时降落的陨石星上遇到过一个芒克的营地吗？既然范围太大，不如一点一点开始！"]]);
               story.addDialog([NPC.ATIEDA,["说的有道理啊！我们可以先去问问那些芒克！"]]);
               story.addDialog([NPC.KALULU,["那就别愣着啦，奇牙，我们走！"]]);
               story.addDialog([NPC.KILLUA,["奇牙！"]],null,function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  showIcon();
                  BitBuffSetClass.setState(_currentBufferArr[0],1,function():void
                  {
                     ModuleManager.showAppModule("LookForSonOfMoonMsgPanel",{
                        "frame":1,
                        "num":0
                     });
                  });
               });
               break;
            case 1:
               story.addMapMovie([_currentMc,3,"mc2"],null,null);
               story.addDialog([NPC.ATIEDA,["怎么办，芒克说的话我们也听不懂啊。"]]);
               story.addDialog([NPC.KALULU,["向导先生，您能听懂他们的语音吗？"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["这……很抱歉，低级的芒克一般都使用芒克语进行交流，这算是一种种族语言，只有芒克们才能听得懂。"]]);
               story.addDialog([NPC.ATIEDA,["啊？那怎么办啊？"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["不过，芒克王作为较高级的精灵，是可以和我们正常沟通的。眼前这只芒克王正在沉睡之中，如果我们击败几只芒克，应该就可以将它唤醒。"]]);
               story.addDialog([NPC.ATIEDA,["啊哈，这个我拿手！"]],null,function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  showIcon();
                  BitBuffSetClass.setState(_currentBufferArr[1],1,function():void
                  {
                     KTool.doExchange(6203,function():void
                     {
                        ModuleManager.showAppModule("LookForSonOfMoonMsgPanel",{
                           "frame":2,
                           "num":0
                        });
                     });
                  });
               });
               break;
            case 2:
               story.addMapMovie([_currentMc,4,"mc3"],null,null);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["很抱歉，芒克王。我们不是有意打扰您，我们十分需要您的帮助。"]]);
               story.addDialog([NPC.ATIEDA,["主要是我们听不懂您的族人们在说些什么，嘿嘿……只能把您弄醒啦，非常抱歉！"]]);
               story.addDialog([NPC.SAIXIAOXI,["是这样的，我们有一位朋友，丢失了一样非常重要的东西。这位向导先生通过占卜发现那件东西现在正被一只生活在泰坦星域的精灵携带着。"]]);
               story.addDialog([NPC.SAIXIAOXI,["我们想问问您，您可不可以问问您的族人，最近是否有看到一件亮晶晶的东西呢？"]]);
               story.addMapMovie([_currentMc,5,"mc4"],null,null);
               story.addDialog([NPC.SAIXIAOXI,["那个……尊敬的芒克王，请问有结果了吗？"]]);
               story.addDialog([NPC.MONKEY_KING,["我的族人们说，他们都没有看到过你们所说的亮晶晶的东西。"]]);
               story.addDialog([NPC.MONKEY_KING,["可能要让你们失望了，你们要找的东西似乎并不在我们这里。"]]);
               story.addDialog([NPC.KALULU,["这样啊……好的，谢谢您，芒克王！"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["看来我们来错地方了。"]]);
               story.addDialog([NPC.ATIEDA,["这下该怎么办呀？别的地方我们一个都不熟……"]]);
               story.addDialog([NPC.MONKEY_KING,["如果你们非常着急的话，我可以给你们一个建议。在遥远的飓风星云，有一个叫作坠雷山崖的地方。我有一个叫桑博德的朋友住在那里。"]]);
               story.addDialog([NPC.SAIXIAOXI,["飓风星云？我们的飞船就在那里耶！太感谢您了！"]]);
               story.addDialog([NPC.ATIEDA,["事不宜迟，我们赶快回去吧！"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["芒克王，我们先告辞了！"]],null,function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  showIcon();
                  BitBuffSetClass.setState(_currentBufferArr[2],1,function():void
                  {
                     ModuleManager.showAppModule("LookForSonOfMoonMsgPanel",{
                        "frame":3,
                        "num":0
                     });
                  });
               });
               break;
            case 3:
               story.addMapMovie([_currentMc,6,"mc5"],null,null);
               story.addDialog([NPC.SAIXIAOXI,["你好，是芒克王推荐我们过来的，他说你是他的一个朋友，就住在此地。"]]);
               story.addDialog([NPC.SANGBODE,["哈哈，是他啊。自从他带着族人搬到遥远的陨石星带去，我跟他已经好久没有见过了呢。"]]);
               story.addDialog([NPC.SANGBODE,["你们来找我，是有什么事吗？"]]);
               story.addDialog([NPC.SAIXIAOXI,["是这样的，我们有一位朋友，丢失了一样非常重要的东西。这位向导先生通过占卜发现那件东西现在正被一只生活在泰坦星域的精灵携带着。"]]);
               story.addDialog([NPC.SAIXIAOXI,["我们想问问您，最近是否有看到一件亮晶晶的东西呢？"]]);
               story.addDialog([NPC.SANGBODE,["亮晶晶的东西啊，我前两……呃，没看到过。"]]);
               story.addDialog([NPC.ATIEDA,["他怎么说话吞吞吐吐的。"]]);
               story.addDialog([NPC.SANGBODE,["我没有看到过什么亮晶晶的东西，诸位请回吧。"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["好吧，看来我们的运气不是很好。那么请问，你……"]]);
               story.addDialog([NPC.SANGBODE,["我没有看到过！你们走吧！"]]);
               story.addMapMovie([_currentMc,7,"mc6"],null,function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  showIcon();
                  BitBuffSetClass.setState(_currentBufferArr[3],1,function():void
                  {
                     KTool.doExchange(6204,function():void
                     {
                        ModuleManager.showAppModule("LookForSonOfMoonMsgPanel",{
                           "frame":4,
                           "num":0
                        });
                     });
                  });
               });
               break;
            case 4:
               story.addMapMovie([_currentMc,8,"mc7"],null,null);
               story.addDialog([NPC.KILLUA,["奇牙奇牙！"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["不错，就是这个。"]]);
               story.addDialog([NPC.ATIEDA,["哼，你为什么要欺骗我们！"]]);
               story.addDialog([NPC.SANGBODE,["我……我发现这块碎晶很不一般，似乎拥有着月亮的能量。"]]);
               story.addDialog([NPC.SANGBODE,["许多年来，我的实力一直没有增长。我希望能通过这块碎晶，掌控自然的力量，进化成为一只飞行自然系精灵。这样，我的实力就会大幅度提升！"]]);
               story.addDialog([NPC.KALULU,["但是这是我们的东西，而且它对我们而言非常重要。"]]);
               story.addDialog([NPC.KILLUA,["奇牙奇牙！"]]);
               story.addDialog([NPC.ATIEDA,["捡到东西，当然要物归原主。你这样将别人的东西据为己有，并对失主加以欺骗，是十分没有道德的行为！"]]);
               story.addDialog([NPC.SANGBODE,["我……我错了。这块碎晶，你们拿回去吧。"]]);
               story.addDialog([NPC.SAIXIAOXI,["太好了，这样我们就找到了奇牙的第一块项链碎片。"]]);
               story.addDialog([NPC.KALULU,["还剩两块，我们要加油了！"]]);
               story.addDialog([NPC.KILLUA,["奇牙！"]]);
               story.addFulMovie(["LookForSonOfMoon",true],null,function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  showIcon();
                  destroy();
                  ModuleManager.showAppModule("LookForSonOfMoonPanel");
               });
         }
         story.start();
      }
      
      public static function fightTo(param1:String, param2:int) : void
      {
         var name:String = param1;
         var bossId:int = param2;
         Alert.show("即将进入战斗，你准备好了吗？",function():void
         {
            FightManager.fightNoMapBoss(name,bossId,false,true,function():void
            {
               getHurt(function():void
               {
                  if(bossId == 5522)
                  {
                     if(_attackNum < 5)
                     {
                        ModuleManager.showAppModule("LookForSonOfMoonMsgPanel",{
                           "frame":2,
                           "num":_attackNum
                        });
                     }
                     else
                     {
                        Alarm.show("恭喜你直接唤醒了芒克王！",function():void
                        {
                           taskProcess(2);
                        });
                     }
                  }
                  else if(_hurtNum < 15000)
                  {
                     BonusController.showDelayBonus(1575);
                     ModuleManager.showAppModule("LookForSonOfMoonMsgPanel",{
                        "frame":4,
                        "num":_hurtNum
                     });
                  }
                  else
                  {
                     Alarm.show("你狠狠地将桑博德教训了一顿！",function():void
                     {
                        taskProcess(4);
                     });
                  }
               });
            });
         });
      }
      
      public static function openMsgPanel() : void
      {
         getState(function():void
         {
            switch(_step)
            {
               case 0:
                  if(getBufferState(_currentBufferArr[_step]) == false)
                  {
                     taskProcess(0);
                  }
                  else
                  {
                     ModuleManager.showAppModule("LookForSonOfMoonMsgPanel",{
                        "frame":1,
                        "num":0
                     });
                  }
                  break;
               case 1:
                  changeMap(10991,function():void
                  {
                     ModuleManager.showAppModule("LookForSonOfMoonMsgPanel",{
                        "frame":2,
                        "num":_attackNum
                     });
                  });
                  break;
               case 2:
                  if(getBufferState(_currentBufferArr[_step]) == false)
                  {
                     taskProcess(2);
                  }
                  else
                  {
                     ModuleManager.showAppModule("LookForSonOfMoonMsgPanel",{
                        "frame":3,
                        "num":0
                     });
                  }
                  break;
               case 3:
                  changeMap(10992,function():void
                  {
                     if(getBufferState(_currentBufferArr[_step]) == false)
                     {
                        taskProcess(3);
                     }
                     else
                     {
                        ModuleManager.showAppModule("LookForSonOfMoonMsgPanel",{
                           "frame":4,
                           "num":_hurtNum
                        });
                     }
                  });
                  break;
               case 4:
                  taskProcess(4);
            }
         });
      }
      
      public static function getBufferState(param1:int) : Boolean
      {
         return BitBuffSetClass.getState(param1);
      }
      
      public static function getState(param1:Function = null) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([2612,2613,2614],function(param1:Array):void
         {
            _step = param1[0];
            _attackNum = param1[1];
            _hurtNum = param1[2];
            if(func != null)
            {
               func();
            }
         });
      }
      
      public static function getHurt(param1:Function = null) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([2613,2614],function(param1:Array):void
         {
            _attackNum = param1[0];
            _hurtNum = param1[1];
            if(func != null)
            {
               func();
            }
         });
      }
      
      public static function changeMap(param1:int, param2:Function = null) : void
      {
         var mapId:int = param1;
         var func:Function = param2;
         if(MapManager.currentMap.id == mapId)
         {
            if(func != null)
            {
               func();
            }
            return;
         }
         MapManager.changeMapWithCallback(mapId,function():void
         {
            _map = MapManager.currentMap;
            if(func != null)
            {
               func();
            }
         });
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = MapManager.currentMap;
         _map.depthLevel.addEventListener(MouseEvent.CLICK,onClick);
         if(_map.id == 10992)
         {
            getHurt(function():void
            {
               if(_hurtNum >= 15000)
               {
                  _map.depthLevel["niao"].visible = false;
                  return;
               }
               _map.depthLevel["niao"].buttonMode = true;
               _map.depthLevel["niao"].mouseChildren = false;
            });
         }
         else if(_map.id == 10991)
         {
            addMapMonkey();
         }
      }
      
      private static function addMapMonkey() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("mapobj/map_10991_monkey"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            _mc = mc;
            _mc.x = 400.85;
            _mc.y = 72;
            _map.depthLevel.addChild(_mc);
            getHurt(function():void
            {
               var _loc1_:int = 0;
               while(_loc1_ < 5)
               {
                  if(_loc1_ < 5 - _attackNum)
                  {
                     _mc["monkey_" + _loc1_].visible = true;
                     _mc["monkey_" + _loc1_].buttonMode = true;
                     _mc["monkey_" + _loc1_].mouseChildren = false;
                  }
                  else
                  {
                     _mc["monkey_" + _loc1_].visible = false;
                  }
                  _loc1_++;
               }
               if(_attackNum >= 5)
               {
                  _mc["king"].gotoAndStop(2);
               }
               else
               {
                  _mc["king"].gotoAndStop(1);
               }
            });
         });
      }
      
      protected static function onClick(param1:MouseEvent) : void
      {
         if(param1.target.name.indexOf("monkey_") != -1 || param1.target.name == "niao")
         {
            if(param1.target.name.indexOf("monkey_") != -1)
            {
               _index = parseInt(param1.target.name.replace("monkey_",""));
            }
            openMsgPanel();
         }
      }
      
      public static function destroy() : void
      {
         if(_currentMc)
         {
            if(_currentMc.parent)
            {
               _currentMc.parent.removeChild(_currentMc);
            }
            _currentMc = null;
         }
         if(_map)
         {
            if(_mc)
            {
               _map.depthLevel.removeChild(_mc);
            }
            _mc = null;
            _map.depthLevel.removeEventListener(MouseEvent.CLICK,onClick);
            _map = null;
         }
      }
   }
}
