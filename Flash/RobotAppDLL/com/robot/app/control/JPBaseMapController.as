package com.robot.app.control
{
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.MapModel;
   import flash.display.MovieClip;
   
   public class JPBaseMapController
   {
       
      
      protected var PREV_TASK_ID:uint;
      
      protected var BUFFER_ID:uint;
      
      protected var _curMap:MapModel;
      
      public function JPBaseMapController()
      {
         super();
      }
      
      public function start() : void
      {
         this._curMap = MapManager.currentMap;
         this.addEvents();
      }
      
      public function addEvents() : void
      {
      }
      
      public function removeEvents() : void
      {
      }
      
      public function depose() : void
      {
         this.removeEvents();
      }
      
      protected function get prevStroy() : Array
      {
         return [];
      }
      
      public function get animationMC() : MovieClip
      {
         return this._curMap.animatorLevel as MovieClip;
      }
   }
}
