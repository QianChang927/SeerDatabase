package com.robot.app.task.taskUtils.manage
{
   import com.robot.app.task.taskUtils.taskDialog.PlayTask;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.net.URLLoader;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TaskDiaLogManager
   {
      
      public static const DIALOG:uint = 1;
      
      public static const MAP_MOVIE:uint = 2;
      
      public static const DLG_MOVIE:uint = 3;
      
      public static const FUL_MOVIE:uint = 4;
      
      public static const CARTOON:uint = 5;
      
      public static const ACT_MOVIE:uint = 6;
      
      public static const MAP_UNION_FRAME_MOVIE:uint = 12;
      
      public static const MAP_MOVIE_STATIC_VIEW:uint = 13;
      
      public static const MULTI_ANSWER_DIALOG:uint = 14;
      
      public static const CONTROL_SENCE:uint = 7;
      
      private static var _single:com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
      
      public static var currentId:String = "";
       
      
      private var _dataXml:XML = null;
      
      private var _mapLocalId:int;
      
      private var _mapId:int;
      
      private var _currentState:int = 0;
      
      private var _playTask:PlayTask;
      
      private var _map:BaseMapProcess;
      
      private var _endPlayTask:Function;
      
      private var _taskId:int;
      
      private var _loader:URLLoader;
      
      private var _isLoad:Boolean;
      
      private var _isComRemove:Boolean;
      
      private var _url:String;
      
      private const _resourceUrl:String = "resource/mapAnimate/";
      
      private var _mapMc:MovieClip;
      
      public function TaskDiaLogManager()
      {
         super();
      }
      
      public static function get single() : com.robot.app.task.taskUtils.manage.TaskDiaLogManager
      {
         if(_single == null)
         {
            _single = new com.robot.app.task.taskUtils.manage.TaskDiaLogManager();
         }
         return _single;
      }
      
      public function setData(param1:int, param2:int, param3:int, param4:BaseMapProcess) : void
      {
         this._taskId = param1;
         this._mapLocalId = param2;
         this._mapId = param3;
         this._map = param4;
         this._currentState = 0;
      }
      
      public function playStory(param1:Array, param2:Function = null, param3:String = "", param4:Boolean = false, param5:Boolean = true) : void
      {
         this._isLoad = param4;
         this._isComRemove = param5;
         if(this._playTask == null)
         {
            this._playTask = new PlayTask();
         }
         this._playTask.addStory(param1);
         this._endPlayTask = param2;
         if(!param4)
         {
            this._playTask.playStory(this._endHandler);
         }
         else
         {
            this._url = param3;
            if(this._mapMc)
            {
               DisplayUtil.removeForParent(this._mapMc);
            }
            this._loadHanlder();
         }
      }
      
      private function _loadHanlder() : void
      {
         LevelManager.root.mouseEnabled = false;
         LevelManager.root.mouseChildren = false;
         ResourceManager.getResource(this._resourceUrl + this._url + ".swf",function(param1:MovieClip):void
         {
            var _loc3_:TaskMod = null;
            LevelManager.root.mouseEnabled = true;
            LevelManager.root.mouseChildren = true;
            _mapMc = param1;
            MapManager.currentMap.depthLevel.addChild(_mapMc);
            var _loc2_:int = 0;
            while(_loc2_ < _playTask.storyQueue.length)
            {
               _loc3_ = _playTask.storyQueue[_loc2_];
               if(_loc3_.mcArr != null && _loc3_.type == MAP_MOVIE)
               {
                  _loc3_.mcArr[0] = _mapMc;
               }
               _loc2_++;
            }
            _playTask.playStory(_endHandler);
         },"movie");
      }
      
      private function _endHandler() : void
      {
         if(this._isComRemove && Boolean(this._mapMc))
         {
            DisplayUtil.removeForParent(this._mapMc);
            this._isComRemove = false;
            this._mapMc = null;
         }
         if(this._endPlayTask != null)
         {
            this._endPlayTask();
         }
         this._endPlayTask = null;
      }
      
      private function get taskMc() : MovieClip
      {
         return this._map.conLevel["taskMc"];
      }
      
      public function get mapMc() : MovieClip
      {
         return this._mapMc;
      }
      
      public function removeMapMc() : void
      {
         if(this._mapMc)
         {
            DisplayUtil.removeForParent(this._mapMc);
         }
         this._isComRemove = false;
         this._mapMc = null;
      }
      
      public function destroy() : void
      {
         this.removeMapMc();
         if(this._playTask != null)
         {
            this._playTask.dispose();
            this._playTask = null;
         }
         this._map = null;
         this._endPlayTask = null;
         this._dataXml = null;
         _single = null;
      }
   }
}
