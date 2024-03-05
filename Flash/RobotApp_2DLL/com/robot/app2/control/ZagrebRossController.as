package com.robot.app2.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ZagrebRossController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1181;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _icon:MovieClip;
      
      private static var tips:String;
      
      private static var _fun:Function;
      
      private static var _taskMc:MovieClip;
       
      
      public function ZagrebRossController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip = null) : void
      {
         _icon = param1;
         _icon.addEventListener(MouseEvent.CLICK,onClickIcon);
         tips = "萨格罗斯暴走再次开启";
         ToolTipManager.add(param1,"萨格罗斯暴走再次开启");
         _icon.gotoAndStop(2);
      }
      
      public static function onClickIcon(param1:Event) : void
      {
         StatManager.sendStat2014("主界面icon",tips,"主界面icon");
         ModuleManager.showModule(ClientConfig.getAppModule("ZagrebRossXuanChuangPanel"));
      }
      
      public static function setUp() : void
      {
         LocalMsgController.addLocalMsg("DeathBlueSkyPlutoYaibaXiaoxinfengPanel",0,false,null,null,1);
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 1025)
         {
            MapManager.changeMap(1025);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            });
         }
         else if(!isTaskDone)
         {
            startPlay();
         }
         else
         {
            openPanel();
         }
      }
      
      public static function startPlay(param1:Function = null) : void
      {
         var fun:Function = param1;
         _fun = fun;
         _map = MapManager.currentMap;
         if(!isTaskDone)
         {
            KTool.hideMapAllPlayerAndMonster();
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_1022_deathBlueSkyPlutoYaiba"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map.controlLevel.addChild(taskMc);
               taskMc.x = 120;
               startPreTask();
            });
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
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_ZagrebRoss",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            DisplayUtil.removeForParent(taskMc);
            _taskMc = null;
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               if(_fun == null)
               {
                  openPanel();
               }
               else
               {
                  _fun();
               }
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ZagrebRossMainPanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
