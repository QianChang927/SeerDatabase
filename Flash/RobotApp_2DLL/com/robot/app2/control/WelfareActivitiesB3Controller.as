package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class WelfareActivitiesB3Controller
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static var _mapIdArr:Array;
       
      
      public function WelfareActivitiesB3Controller()
      {
         super();
      }
      
      public static function setUp() : void
      {
         if(MapManager.currentMap.id != 11205)
         {
            MapManager.changeMapWithCallback(11205,function():void
            {
               loadMc();
            });
         }
         else
         {
            loadMc();
         }
      }
      
      private static function loadMc() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_welfareActivitiesB"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map = MapManager.currentMap;
            _map.controlLevel.addChild(taskMc);
            initview();
         });
      }
      
      private static function initview() : void
      {
         if(!BufferRecordManager.getMyState(1325))
         {
            startPreTask(5);
         }
         else
         {
            taskMc.gotoAndStop(5);
            taskMc.mc5.gotoAndStop(565);
            CommonUI.addYellowArrow(taskMc["jiaSiDingMc"],80,-10,45);
            taskMc["jiaSiDingMc"].addEventListener(MouseEvent.CLICK,onJiaSiDingMcClick);
            taskMc["jiaSiDingMc"].buttonMode = true;
         }
      }
      
      private static function onJiaSiDingMcClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.JUSTIN,["你准备好，随时都可以开始！"],["来吧！（进入对战）","站长！我有钱！也一样可以支援你们！","我准备下。"],[function():void
         {
            StatManager.sendStat2014("0408福利活动B","点击挑战贾斯汀站长的BOSS","2016运营活动");
            FightManager.fightNoMapBoss("拉里特",6859,false,true,function():void
            {
               if(FightManager.isWin)
               {
                  WelfareActivitiesB3Controller.setUp();
                  startPreTask(6);
               }
               else
               {
                  WelfareActivitiesB3Controller.setUp();
               }
            });
         },function():void
         {
            KTool.buyProductByCallback(247184,1,function():void
            {
               SocketConnection.addCmdListener(45638,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(45638,arguments.callee);
                  startPreTask(6);
               });
               SocketConnection.send(45638,7,0);
            });
         }],false);
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var step:int = param1;
         CommonUI.removeYellowArrow(taskMc["jiaSiDingMc"]);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,step,"mc" + step]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(1325,true,function():void
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.visible = true;
               if(step == 5)
               {
                  initview();
               }
               if(step == 6)
               {
                  _map.controlLevel.removeChild(taskMc);
                  taskMc = null;
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("WelfareActivitiesBMainPanel"),"正在打开....");
                  });
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
   }
}
