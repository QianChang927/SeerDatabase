package com.robot.app2.mapProcess
{
   import com.robot.app2.control.HongbaoCollectionController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11434 extends BaseMapProcess
   {
       
      
      public function MapProcess_11434()
      {
         super();
      }
      
      override public function destroy() : void
      {
         HongbaoCollectionController.destroyNpc(this.conLevel["npcMc"]);
         super.destroy();
      }
      
      override protected function init() : void
      {
         HongbaoCollectionController.initNpc(this.conLevel["npcMc"]);
         super.init();
      }
   }
}
