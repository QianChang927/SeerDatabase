package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class XingLingWangController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMC:MovieClip;
       
      
      public function XingLingWangController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess, param2:Function = null) : void
      {
         /*
          * Decompilation error
          * Timeout (1 minute) was reached
          * Instruction count: 57
          */
         throw new flash.errors.IllegalOperationError("Not decompiled due to timeout");
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            DisplayUtil.removeForParent(_taskMC);
            _taskMC = null;
            _map = null;
         }
      }
   }
}
