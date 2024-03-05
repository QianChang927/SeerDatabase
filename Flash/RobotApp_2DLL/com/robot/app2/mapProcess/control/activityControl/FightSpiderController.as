package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   
   public class FightSpiderController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function FightSpiderController()
      {
         super();
      }
      
      public static function initMap108(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         if(_map == null)
         {
            return null;
         }
         return _map.depthLevel["taskMc"];
      }
      
      private static function getTaskArr(param1:int = 1) : Array
      {
         var _loc3_:TaskMod = null;
         var _loc4_:TaskMod = null;
         var _loc5_:TaskMod = null;
         var _loc2_:Array = new Array();
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["father1"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc2_.push(_loc3_,_loc4_,_loc5_);
         }
         return _loc2_;
      }
      
      public static function destroy() : void
      {
      }
   }
}
