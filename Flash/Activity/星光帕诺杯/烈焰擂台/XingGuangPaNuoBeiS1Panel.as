package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   
   public class XingGuangPaNuoBeiS1Panel extends ActivityModel
   {
      private var gotoMap:Array;
      
      public function XingGuangPaNuoBeiS1Panel()
      {
         this.gotoMap = ["ElfBattle2024MainPanel","WorldBossBingPaNuoMainPanel","FireTeamGameEnter"];
         super();
         resUrl = "2024/1011/XingGuangPaNuoBeiS1Panel";
         configUrl = "2024/1011/XingGuangPaNuoBei";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
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

