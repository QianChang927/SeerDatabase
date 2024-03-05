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
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 57
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
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
