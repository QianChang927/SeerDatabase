package com.robot.app.task.taskUtils.manage
{
   import com.robot.core.manager.MapManager;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class StoryLoaderManager
   {
      
      private static var _instance:com.robot.app.task.taskUtils.manage.StoryLoaderManager;
       
      
      private const _resourceUrl:String = "resource/mapAnimate/";
      
      private var _swfName:String;
      
      private var _callBackFun:Function;
      
      public function StoryLoaderManager()
      {
         super();
      }
      
      public static function get insatnce() : com.robot.app.task.taskUtils.manage.StoryLoaderManager
      {
         return _instance = _instance || new com.robot.app.task.taskUtils.manage.StoryLoaderManager();
      }
      
      public function set swfName(param1:String) : void
      {
         this._swfName = param1;
      }
      
      public function set setloaderHandler(param1:Function) : void
      {
         var value:Function = param1;
         this._callBackFun = value;
         ResourceManager.getResource(this._resourceUrl + this._swfName + ".swf",function(param1:MovieClip):void
         {
            MapManager.currentMap.controlLevel.addChild(param1);
            _callBackFun(param1);
         },"movie");
      }
   }
}
