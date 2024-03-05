package com.robot.app2.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_11312 extends BaseMapProcess
   {
       
      
      public function MapProcess_11312()
      {
         super();
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.OnlineToGetWinsPostigaCollectionController").destroy();
         super.destroy();
      }
      
      override protected function init() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.OnlineToGetWinsPostigaCollectionController").setup(this);
         super.init();
      }
   }
}
