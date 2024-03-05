package com.robot.app.control
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   
   public class SimisiVsNadikeController
   {
      
      private static const PREV_TASK_ID:uint = 733;
      
      private static var _instance:com.robot.app.control.SimisiVsNadikeController;
       
      
      private var _curMap:BaseMapProcess;
      
      public function SimisiVsNadikeController()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.control.SimisiVsNadikeController
      {
         return _instance = _instance || new com.robot.app.control.SimisiVsNadikeController();
      }
      
      public function startUp(param1:BaseMapProcess) : void
      {
         this._curMap = param1;
         this.addEvents();
      }
      
      private function addEvents() : void
      {
      }
      
      private function removeEvents() : void
      {
      }
      
      protected function get animationMC() : MovieClip
      {
         return null;
      }
      
      public function depose() : void
      {
         _instance = null;
         this.removeEvents();
      }
   }
}
