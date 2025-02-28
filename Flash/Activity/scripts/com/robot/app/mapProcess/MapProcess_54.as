package com.robot.app.mapProcess
{
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.control.KeLaiFenSptController;
   import com.robot.app.task.taskscollection.Task565;
   import com.robot.app.task.taskscollection.Task605;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   
   public class MapProcess_54 extends BaseMapProcess
   {
       
      
      private var xllMineral:MovieClip;
      
      private var lnyMineral:MovieClip;
      
      private var ogdMineral:MovieClip;
      
      public function MapProcess_54()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.lnyMineral = conLevel["lnyMineralMC"];
         this.xllMineral = conLevel["xllMineralMC"];
         this.ogdMineral = conLevel["ogdMineralMC"];
         Task605.initTask_54(this);
         Task565.initTask_0(this);
         KeLaiFenSptController.getInstance().init(this);
      }
      
      override public function destroy() : void
      {
         OgreController.isShow = true;
         Task565.destory();
         Task605.destroy();
      }
      
      public function onGatherLny() : void
      {
         EnergyController.exploit(14);
      }
      
      public function onGatherXll() : void
      {
         EnergyController.exploit(15);
      }
      
      public function onGatherOgd() : void
      {
         EnergyController.exploit(16);
      }
      
      public function exploitOre() : void
      {
         EnergyController.exploit(17);
      }
      
      public function onDoorClick() : void
      {
         Task565.endTask_0();
      }
   }
}
