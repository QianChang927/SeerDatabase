package com.robot.app.mapProcess
{
   import com.robot.app.mapProcess.control.NinjaSpNoNoController;
   import com.robot.app.mapProcess.control.NinjaSpNoNoController_2;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_480 extends BaseMapProcess
   {
       
      
      public function MapProcess_480()
      {
         super();
      }
      
      override protected function init() : void
      {
         NinjaSpNoNoController_2.init_480(this);
      }
      
      override public function destroy() : void
      {
         NinjaSpNoNoController.instance.destory();
      }
   }
}
