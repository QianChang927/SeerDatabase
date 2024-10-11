package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   
   public class ShipCleanerStore extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      private var gotPrizeArr:Array;
      
      private var coinCnt:int;
      
      private var teamIdx:int;
      
      private var limitArr:Array;
      
      private var priceArr:Array;
      
      public function ShipCleanerStore()
      {
         this.limitArr = [1,3,3,5,10];
         this.priceArr = [300,80,40,48,12];
         super();
         resUrl = "2024/1011/ShipCleanerStore";
         configUrl = "2024/1011/ShipCleanerConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      private function onStart() : void
      {
         if(!this.isStart)
         {
            this.isStart = true;
         }
      }
      
      override protected function updatePanel() : void
      {
         this.updateData();
         this.onStart();
         this.updateDisplay();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String;
         var index:int;
         if(!this.isStart)
         {
            return;
         }
         btnName = e.target.name;
         index = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               ModuleManager.showAppModule("ShipCleanerEnter");
               break;
            case "btnBuy_" + index:
               if(this.teamIdx == 0)
               {
                  Alarm.show("您还没有进行帕诺杯分队，请前往分队！",function():*
                  {
                     ModuleManager.showAppModule("XingGuangPaNuoBeiMainPanel");
                     hide();
                  });
                  return;
               }
               if(this.coinCnt < this.priceArr[index - 1])
               {
                  Alarm.show("徽章不足");
                  return;
               }
               doAction("CMD",30 + index).then(refresh);
               break;
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
      
      private function updateData() : void
      {
         this.gotPrizeArr = getValue("gotPrizeArr");
         this.coinCnt = getValue("coinCnt");
         this.teamIdx = getValue("teamIdx");
      }
      
      private function updateDisplay() : void
      {
         ui.txtCoin.text = this.coinCnt;
         for(var i:int = 1; i <= 5; i++)
         {
            if(this.gotPrizeArr[i - 1] >= this.limitArr[i - 1])
            {
               if(Boolean(ui["state_" + i]))
               {
                  ui["state_" + i].gotoAndStop(2);
               }
               CommonUI.setEnabled(ui["btnBuy_" + i],false);
            }
            else
            {
               if(Boolean(ui["state_" + i]))
               {
                  ui["state_" + i].gotoAndStop(1);
               }
               CommonUI.setEnabled(ui["btnBuy_" + i],true);
            }
            if(Boolean(ui["limit_" + i]))
            {
               ui["limit_" + i].text = this.gotPrizeArr[i - 1] + "/" + this.limitArr[i - 1];
            }
         }
      }
   }
}

