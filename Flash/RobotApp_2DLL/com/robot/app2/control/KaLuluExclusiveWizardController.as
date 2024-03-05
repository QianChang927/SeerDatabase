package com.robot.app2.control
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class KaLuluExclusiveWizardController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1221;
      
      private static var _map:MapModel;
      
      private static var _baseMapProcess:BaseMapProcess;
      
      private static var _widget:MovieClip;
       
      
      public function KaLuluExclusiveWizardController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 1057)
         {
            MapManager.changeMap(1057);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               _map = MapManager.currentMap;
               start();
            });
         }
         else
         {
            start();
         }
      }
      
      public static function start() : void
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
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_KaLuluExclusiveWizardController",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
               openPanel();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("KaLuluExclusiveWizardMainPanel"),"正在打开....");
      }
      
      public static function setUp() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onSystemTime);
      }
      
      private static function onSystemTime(param1:SocketEvent) : void
      {
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         var _loc3_:int = _loc2_.minutes % 30;
         if(_loc2_.minutes >= 0 && _loc2_.minutes <= 15)
         {
            if(_widget == null)
            {
               loadWidget();
            }
         }
         else
         {
            destroyWidget();
         }
      }
      
      public static function loadWidget() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("MessengerKaluluTV"),function(param1:MovieClip):void
         {
            _widget = param1;
            MapNamePanel.ChildMc = _widget;
            _widget.buttonMode = true;
            _widget.mouseChildren = false;
            _widget.addEventListener(MouseEvent.CLICK,onGo);
            updateWidget();
         });
      }
      
      private static function updateWidget() : void
      {
         MapNamePanel.autoOpenOrClose(true,2);
      }
      
      private static function onGo(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("KaLuluExclusiveWizardMainPanel"),"正在打开....");
      }
      
      private static function destroyWidget() : void
      {
         if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
         {
            _widget.removeEventListener(MouseEvent.CLICK,onGo);
            MapNamePanel.autoOpenOrClose(false);
            DisplayUtil.removeForParent(_widget);
            _widget = null;
         }
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
