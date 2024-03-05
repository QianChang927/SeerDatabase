package com.robot.app2.control
{
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SupremeDragonProphecyController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1257;
      
      public static const BUFFER_ID_1:uint = 1258;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var ac1:ActivityControl;
      
      private static var ac2:ActivityControl;
      
      private static var _mainUI:MovieClip;
       
      
      public function SupremeDragonProphecyController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(!isTaskDone)
         {
            startPreTask();
         }
         else
         {
            openPanel();
         }
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID);
      }
      
      private static function get isTaskDone1() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_1);
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_SupremeDragonProphecy1",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               openPanel();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      public static function startPreTaskByPanel() : void
      {
         var story:Array = null;
         var storyPlayer:TaskStoryPlayer = null;
         if(!isTaskDone1)
         {
            _isTaskPlaying = true;
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            story = [[TaskStoryPlayer.FUL_MOVIE,["task_SupremeDragonProphecy2",true]]];
            storyPlayer = new TaskStoryPlayer();
            storyPlayer.addStory(story);
            storyPlayer.storyEndCallback = function():void
            {
               storyPlayer.destory();
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               BufferRecordManager.setMyState(BUFFER_ID_1,true,function():void
               {
                  KTool.showMapPlayerAndMonster();
                  openPanel();
               });
               KTool.showMapPlayerAndMonster();
               _isTaskPlaying = false;
            };
            storyPlayer.start();
         }
         else
         {
            openPanel();
         }
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SupremeDragonProphecyMainPanel"));
      }
      
      public static function setUp() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onSystemTime);
      }
      
      private static function onSystemTime(param1:SocketEvent) : void
      {
         var event:SocketEvent = param1;
         if(getisInActiveTime())
         {
            KTool.getMultiValue([16275],function(param1:Array):void
            {
               var va:Array = param1;
               if(va[0] < 1)
               {
                  SocketConnection.addCmdListener(42000,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(42000,arguments.callee);
                     loadWidget();
                  });
                  SocketConnection.send(42000,4,0);
               }
            });
         }
      }
      
      public static function loadWidget() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("fullServiceBroadcastingPanel"),function(param1:MovieClip):void
         {
            _mainUI = param1;
            LevelManager.iconLevel.addChild(_mainUI);
            _mainUI.buttonMode = true;
            _mainUI.addEventListener(MouseEvent.CLICK,onClick);
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "closeBtn":
               if(Boolean(_mainUI) && Boolean(DisplayUtil.hasParent(_mainUI)))
               {
                  _mainUI.removeEventListener(MouseEvent.CLICK,onClick);
                  DisplayUtil.removeForParent(_mainUI);
                  _mainUI = null;
               }
               break;
            case "getRewardBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("SupremeDragonProphecyPlatesPanel"));
         }
      }
      
      private static function destroyMainUI() : void
      {
         if(Boolean(_mainUI) && Boolean(DisplayUtil.hasParent(_mainUI)))
         {
            _mainUI.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_mainUI);
            _mainUI = null;
         }
      }
      
      private static function getisInActiveTime() : Boolean
      {
         var _loc1_:Array = [new CronTimeVo("*","12-13","22-28","5","*","2015")];
         var _loc2_:Array = [new CronTimeVo("*","18-19","22-28","5","*","2015")];
         if(ac1 == null)
         {
            ac1 = new ActivityControl(_loc1_);
         }
         if(ac2 == null)
         {
            ac2 = new ActivityControl(_loc2_);
         }
         if(Boolean(ac1.isInActivityTime) || Boolean(ac2.isInActivityTime))
         {
            return true;
         }
         return false;
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
