package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.utils.getDefinitionByName;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_31 extends BaseMapProcess
   {
       
      
      private var _unknowMC:MovieClip;
      
      public function MapProcess_31()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._unknowMC = conLevel["unknow_mc"];
         DisplayUtil.removeForParent(this._unknowMC);
         this._unknowMC = null;
         getDefinitionByName("com.robot.app2.control.ToothFairyController").initMap31(this);
         getDefinitionByName("com.robot.app2.mapProcess.control.RealHelkStarChaseSipaiController").initMap31(this);
         getDefinitionByName("com.robot.app2.mapProcess.control.CallMysteriousAncientSageController").initMap31(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.ToothFairyController").destroy();
         getDefinitionByName("com.robot.app2.mapProcess.control.RealHelkStarChaseSipaiController").destroyMap31();
         getDefinitionByName("com.robot.app2.mapProcess.control.CallMysteriousAncientSageController").destroyMap31();
      }
   }
}
