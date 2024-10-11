package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   
   public class ElfBattle2024MainPanel extends ActivityModel
   {
      private var team:int;
      
      public function ElfBattle2024MainPanel()
      {
         super();
         resUrl = "2024/1011/ElfBattle2024MainPanel";
         configUrl = "2024/1011/ElfBattle2024";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1011星光·帕诺杯精灵大乱斗","打开了星光·帕诺杯精灵大乱斗集合面板","2024运营活动");
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this.team = getValue("team");
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         var pindex:int = int(e.target.parent.name.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               ModuleManager.showAppModule("XingGuangPaNuoBeiS1Panel");
               break;
            case "shop":
               this.hide();
               ModuleManager.showAppModule("ElfBattle2024ShopPanel");
               break;
            case "book":
               StatManager.sendStat2014("1011星光·帕诺杯精灵大乱斗","在主界面打开了精灵乱斗手册查看精灵图鉴","2024运营活动");
               this.hide();
               ModuleManager.showAppModule("ElfBattle2024BookPanel","ElfBattle2024MainPanel");
               break;
            case "go":
               if(this.team == 0)
               {
                  doAction("alarm").then(function():void
                  {
                     hide();
                     ModuleManager.showAppModule("XingGuangPaNuoBeiMainPanel");
                  });
                  return;
               }
               this.hide();
               ModuleManager.showAppModule("ElfBattle2024FightPanel",this.team);
               break;
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

