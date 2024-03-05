package com.robot.app.mapProcess
{
   import com.robot.app.control.DarkAbyssController;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.utils.CronTimeVo;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_85 extends BaseMapProcess
   {
       
      
      private var AC:ActivityControl;
      
      public function MapProcess_85()
      {
         this.AC = new ActivityControl([new CronTimeVo("*","*","24-30","7","*","2015")]);
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         SystemTimerManager.addTickFun(this.checkActivity);
      }
      
      private function checkActivity() : void
      {
         if(this.AC.isInActivityTime)
         {
            SystemTimerManager.removeTickFun(this.checkActivity);
            conLevel["taskMC"].visible = true;
            DarkAbyssController.setup(this);
         }
         else if(this.AC.isPast)
         {
            SystemTimerManager.removeTickFun(this.checkActivity);
            if(conLevel["taskMC"])
            {
               DisplayUtil.removeForParent(conLevel["taskMC"]);
            }
         }
         else
         {
            conLevel["taskMC"].visible = false;
         }
      }
      
      override public function destroy() : void
      {
         SystemTimerManager.removeTickFun(this.checkActivity);
         DarkAbyssController.destroy();
      }
   }
}
