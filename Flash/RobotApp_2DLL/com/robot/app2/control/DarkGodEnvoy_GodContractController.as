package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class DarkGodEnvoy_GodContractController
   {
      
      public static const PRE_TASK_BUFF:int = 683;
      
      private static const TARGET_MAP:int = 92;
      
      private static var _taskMc:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      private static var _isFight:Boolean;
      
      private static var _inStory:Boolean;
       
      
      public function DarkGodEnvoy_GodContractController()
      {
         super();
      }
      
      public static function initEquip(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         MapListenerManager.add(map.depthLevel["darkGod"],function():void
         {
            SocketConnection.send(1022,86058811);
            checkPreTask();
         },"四大神使聚首");
      }
      
      private static function checkPreTask() : void
      {
         if(BufferRecordManager.getMyState(PRE_TASK_BUFF))
         {
            MapManager.changeMap(TARGET_MAP);
         }
         else
         {
            SocketConnection.send(1022,86058806);
            NpcDialog.show(NPC.SUPERNONO_NEW,["主人…主人！你怎么还在这里…我刚刚在暗黑圣殿，听见三大神使正在讨论暗黑之神降临的事情！"],["真的吗？走…我们去瞧瞧！"],[function():void
            {
               _inStory = true;
               if(MapManager.currentMap.id != TARGET_MAP)
               {
                  MapManager.changeMap(TARGET_MAP);
               }
            }]);
         }
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getAppRes("activeMc/darkGodEnvoy_BatKingStory"),function(param1:DisplayObject):void
         {
            _taskMc = param1 as MovieClip;
            MapManager.currentMap.btnLevel.addChild(_taskMc);
            _taskMc.x = 0;
            _taskMc.y = 0;
            if(_inStory)
            {
               _taskMc["mc1"]["ziLong"].buttonMode = true;
               _taskMc["mc1"]["ziLong"].addEventListener(MouseEvent.CLICK,startPreTask);
            }
            else
            {
               initNPC();
            }
         });
      }
      
      private static function startPreTask(param1:MouseEvent) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var e:MouseEvent = param1;
         _taskMc["mc1"]["ziLong"].removeEventListener(MouseEvent.CLICK,startPreTask);
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.DIALOG,[NPC.ZILONG,[MainManager.actorInfo.formatNick + "经过白鹰、金狮和我紫光龙王的试炼后，你是否觉得自己的实力渐渐强大起来了？"],["这点事情难不倒我的！"]]],[TaskStoryPlayer.DIALOG,[NPC.JINSHI,["好臭屁的家伙，别以为你顺利通过了我们的试炼就可以不可一世，你别忘记四大神使还有一位没有出现呢？"],["对啊！我怎么把这个忘记了！"]]],[TaskStoryPlayer.DIALOG,[NPC.BAIYING,["一旦我们四大神使全部聚首，暗黑之神将会降临，到时候你就能体会我们强大的存在了！"],["什么！暗黑之神降临！"]]],[TaskStoryPlayer.MAP_MOVIE,[_taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.AIERPASUO,["各位好久不见，很难得大家又能准时出席啊！"],["哇！这难道就是青翼蝠王！"]]],[TaskStoryPlayer.DIALOG,[NPC.BAIYING,[MainManager.actorInfo.formatNick + "可是暗黑之神挑中的传承者，接下来你将体验青翼蝠王埃尔帕索对你的试炼！"],["你准备好了吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["哼…我早就准备好了，不管你们是四大神使还是暗黑之神，我都会击倒你们的！"],["不愧是我选中的对象！"]]],[TaskStoryPlayer.MAP_MOVIE,[_taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.HEIYING,["没错…我就是掌管死亡的神，被我选中的人，经过修炼之后同样可以掌握我的超能力！"],["哈迪斯…你这次复苏究竟是为了什么！"]]],[TaskStoryPlayer.DIALOG,[NPC.HEIYING,["哈哈哈…等你顺利通过我四大神使的试炼后，你自然就会知道的！"],["可恶…！"]]],[TaskStoryPlayer.MAP_MOVIE,[_taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["看上去好强大的样子，什么四大神使！暗黑之神哈迪斯让我看看你终极实力吧！"],["征服暗黑之神—哈迪斯！！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            _inStory = false;
            SocketConnection.send(1022,86058807);
            BufferRecordManager.setMyState(PRE_TASK_BUFF,true);
            if(ToolBarController.panel.panelIsShow)
            {
               KTool.showMapAllPlayerAndMonster();
            }
            ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_BatKingMainPanel"));
            initNPC();
         };
         storyPlayer.start();
      }
      
      private static function initNPC() : void
      {
         _taskMc.addEventListener(Event.FRAME_CONSTRUCTED,function(param1:Event):void
         {
            var e:Event = param1;
            if(_taskMc.currentFrame != 5)
            {
               return;
            }
            _taskMc.removeEventListener(Event.FRAME_CONSTRUCTED,arguments.callee);
            MapListenerManager.add(_taskMc["lion"],function():void
            {
               NpcDialog.show(NPC.JINSHI,["我会帮助你提升自己的终极实力，在这里你将体验和白鹰截然不同的锤炼，加油吧！"],["挑战四大神使—金狮！","让我在准备一下！"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_GoldenLionMainPanel"));
               },function():void
               {
               }]);
            },"金狮的锤炼");
            MapListenerManager.add(_taskMc["hawk"],function():void
            {
               SocketConnection.send(1022,86058267);
               NpcDialog.show(NPC.BAIYING,["哼哼…小子让我看看你的实力是不是和你所说的一样强大！"],["挑战四大神使—白鹰！","让我再准备一下！"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_WhiteHawkMainPanel"));
               }]);
            },"白鹰四重挑战");
            MapListenerManager.add(_taskMc["ziLong"],function():void
            {
               NpcDialog.show(NPC.ZILONG,["既然你是暗黑之身挑中的人选，如果你有足够的胆识，那就接受我们的考验吧！"],["挑战四大神使—紫光龙王！","让我再准备一下！"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_PurpleDragonMainPanel"));
               }]);
            },"紫龙的锤炼");
            MapListenerManager.add(_taskMc["anHei"],function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("godHades/NoNo1YearPanel"));
            },"暗黑之神");
            MapListenerManager.add(_taskMc["bat"],function():void
            {
               SocketConnection.send(1022,86058808);
               NpcDialog.show(NPC.AIERPASUO,["既然你是暗黑之身挑中的人选，只要你能战胜我，你才有资格接受暗黑之神的力量！"],["挑战四大神使—青翼蝠王！","让我再准备一下！"],[function():void
               {
                  SocketConnection.send(1022,86058809);
                  ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_BatKingMainPanel"));
               },function():void
               {
                  SocketConnection.send(1022,86058816);
               }]);
            },"挑战四大神使—青翼蝠王！");
         });
         _taskMc.gotoAndStop(5);
      }
      
      public static function fightBatKing(param1:uint) : void
      {
         var _loc2_:uint = 16;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         PetFightModel.mode = PetFightModel.SINGLE_MODE;
         FightManager.fightWithBoss("青翼蝠王",param1 + _loc2_);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_BatKingMainPanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
         _taskMc = null;
         TaskDiaLogManager.single.destroy();
      }
   }
}
