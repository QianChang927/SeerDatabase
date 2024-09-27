package com.robot.module.app
{
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.utils.CommonUI;
   
   public class NationalDayActivityGoToMapPanel extends ActivityModel
   {
      private var gotoMap:Array;
      
      public function NationalDayActivityGoToMapPanel()
      {
         this.gotoMap = ["ShangYeJieZhanZhengMainPanel","KaKaTuoSi1DayNewMainPanel","WelfareActivitiesOnLaborDayMainPanel"];
         super();
         resUrl = "2024/0927/NationalDayActivityGoToMapPanel";
         configUrl = "2022/1216/CultivationGoToMap";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         if(!ActivityTimeControl.getIsinTime(430))
         {
            _ui["mc"].visible = true;
            CommonUI.setEnabled(_ui["go_2"],false);
         }
         else
         {
            _ui["mc"].visible = false;
            CommonUI.setEnabled(_ui["go_2"],true);
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               this.hide();
               break;
            case "go_" + index:
               ModuleManager.showAppModule(this.gotoMap[index - 1]);
               this.hide();
         }
      }
      
      override public function hide() : void
      {
         this.gotoMap = null;
         super.hide();
      }
   }
}

