package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
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
   import org.taomee.utils.DisplayUtil;
   
   public class DarkGodEnvoy_PurpleDragonController
   {
      
      private static const PRE_TASK_BUFF:int = 679;
      
      private static const TARGET_MAP:int = 92;
      
      private static var _taskMc:MovieClip;
      
      private static var _inStory:Boolean;
      
      private static var _map:BaseMapProcess;
       
      
      public function DarkGodEnvoy_PurpleDragonController()
      {
         super();
      }
      
      public static function initEquip(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         MapListenerManager.add(map.depthLevel["darkGod"],function():void
         {
            SocketConnection.send(1022,86058478);
            checkPreTask();
         },"紫龙的锤炼");
      }
      
      private static function checkPreTask() : void
      {
         if(BufferRecordManager.getMyState(PRE_TASK_BUFF))
         {
            MapManager.changeMap(TARGET_MAP);
         }
         else
         {
            NpcDialog.show(NPC.SEER,["白鹰和金狮已经出现，相信接下来的两位神使会更加强大，天降异象 神兽异动这句话的背后到底蕴藏着怎样的秘密呢！"],["再次前往暗黑圣堂！"],[function():void
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
         ResourceManager.getResource(ClientConfig.getAppRes("activeMc/darkGodEnvoy_PurpleDragonStory"),function(param1:DisplayObject):void
         {
            _taskMc = param1 as MovieClip;
            MapManager.currentMap.btnLevel.addChild(_taskMc);
            _taskMc.x = 0;
            _taskMc.y = 0;
            if(_inStory)
            {
               _taskMc.buttonMode = true;
               _taskMc.addEventListener(MouseEvent.CLICK,startPreTask);
            }
            else if(BufferRecordManager.getMyState(PRE_TASK_BUFF))
            {
               initNPC();
            }
            else
            {
               DisplayUtil.removeForParent(_taskMc);
            }
         });
      }
      
      private static function initNPC() : void
      {
         _taskMc.addEventListener(Event.FRAME_CONSTRUCTED,function(param1:Event):void
         {
            var e:Event = param1;
            if(_taskMc.currentFrame != 4)
            {
               return;
            }
            _taskMc.removeEventListener(Event.FRAME_CONSTRUCTED,arguments.callee);
            MapListenerManager.add(_taskMc["mc4"]["lion"],function():void
            {
               SocketConnection.send(1022,86058475);
               NpcDialog.show(NPC.JINSHI,["我会帮助你提升自己的终极实力，在这里你将体验和白鹰截然不同的锤炼，加油吧！"],["挑战四大神使—金狮！","让我在准备一下！"],[function():void
               {
                  SocketConnection.send(1022,86058476);
                  ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_GoldenLionMainPanel"));
               },function():void
               {
                  SocketConnection.send(1022,86058477);
               }]);
            },"金狮的锤炼");
            MapListenerManager.add(_taskMc["mc4"]["hawk"],function():void
            {
               SocketConnection.send(1022,86058267);
               NpcDialog.show(NPC.BAIYING,["哼哼…小子让我看看你的实力是不是和你所说的一样强大！"],["挑战四大神使—白鹰！","让我再准备一下！"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_WhiteHawkMainPanel"));
               }]);
            },"白鹰四重挑战");
            MapListenerManager.add(_taskMc["mc4"]["dragon"],function():void
            {
               SocketConnection.send(1022,86058475);
               NpcDialog.show(NPC.JINSHI,["既然你是暗黑之身挑中的人选，如果你有足够的胆识，那就接受我们的考验吧！"],["挑战四大神使—紫光龙王！","让我再准备一下！"],[function():void
               {
                  SocketConnection.send(1022,86058476);
                  ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_PurpleDragonMainPanel"));
               },function():void
               {
                  SocketConnection.send(1022,86058477);
               }]);
            },"紫龙的锤炼");
         });
         try
         {
            _taskMc.gotoAndStop(4);
         }
         catch(error:Error)
         {
         }
      }
      
      private static function startPreTask(param1:MouseEvent) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86058473);
         _taskMc.removeEventListener(MouseEvent.CLICK,startPreTask);
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.DIALOG,[NPC.JINSHI,[MainManager.actorInfo.formatNick + "你终于回来了，怎么样？是不是我的实力要远远高于白鹰！哈哈哈！"],["金狮你别得意！"]]],[TaskStoryPlayer.DIALOG,[NPC.BAIYING,["你别以为自己是四大神使里最强大的，难道你不记得上次你败给紫光龙王的事情了吗？"],["白鹰…不准提这件事情！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["哦~~~想不到你堂堂金狮也会有失败的时候，我还以为你很强呢！"],["不是这样的！"]]],[TaskStoryPlayer.CARTOON,["cartoon/darkGodEnvoy_purpleDragon"]],[TaskStoryPlayer.DIALOG,[NPC.JINSHI,["白鹰…紫光龙王的强大相信你也一定有所了解吧！"],["恩，这点金狮说的没错！"]]],[TaskStoryPlayer.DIALOG,[NPC.BAIYING,[MainManager.actorInfo.formatNick + "可是暗黑之神挑中的传承者，最然你这段时间有所变强，但是一旦你遇到紫光龙王，你就会知道什么才叫实力！"],["不会吧！紫光龙王有这么强吗！"]]],[TaskStoryPlayer.DIALOG,[NPC.JINSHI,["千万不要轻敌哦！当时我也觉得这家伙没什么强大的，但是当你真正和他交战的时候，你就知道他的可怕之处了！"],["听上去好恐怖的感觉？！"]]],[TaskStoryPlayer.MAP_MOVIE,[_taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.ZILONG,["想不到你们都已经苏醒了，被暗黑之神挑中的人选在哪里？"],["是我…就是我！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZILONG,["什么…竟然是你！！！如此弱小…"],["喂…你可别小看我哦！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["有本事的话，我们过两招啊！虽然你是四大神使之一，但我可是暗黑之王挑中的人选，我的使命是击败你们！"],["不错…还挺有骨气的！"]]],[TaskStoryPlayer.MAP_MOVIE,[_taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.ZILONG,["既然你是暗黑之王挑中的人选，如果你有足够的胆识，那就接受我们的考验吧！"],["紫光龙王你就等着吧！！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            _inStory = false;
            BufferRecordManager.setMyState(PRE_TASK_BUFF,true);
            SocketConnection.send(1022,86058474);
            if(ToolBarController.panel.panelIsShow)
            {
               KTool.showMapAllPlayerAndMonster();
            }
            ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_PurpleDragonMainPanel"));
            initNPC();
         };
         storyPlayer.start();
      }
      
      public static function fightPurpleDragon() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         PetFightModel.mode = PetFightModel.SINGLE_MODE;
         if(MainManager.actorModel.isClothPurpleDragon)
         {
            FightManager.fightWithBoss("紫龙",15);
         }
         else
         {
            FightManager.fightWithBoss("紫龙",14);
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
      
      public static function destroy() : void
      {
         if(_taskMc != null)
         {
            _taskMc.removeEventListener(MouseEvent.CLICK,startPreTask);
            DisplayUtil.removeForParent(_taskMc);
            _taskMc = null;
         }
         if(_map)
         {
            _map = null;
         }
      }
   }
}
