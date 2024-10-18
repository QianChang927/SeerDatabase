package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   
   public class FireTeamGameStore extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      private var cntCoin:int;
      
      private var buyTimeArr:Array;
      
      private var priceArr:Array;
      
      private var limitArr:Array;
      
      public function FireTeamGameStore()
      {
         this.priceArr = [300,80,40,48,12];
         this.limitArr = [1,3,3,5,10];
         super();
         resUrl = "2024/1018/FireTeamGameStore";
         configUrl = "2024/1018/FireTeamGameConfig";
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
         if(!this.isStart)
         {
            return;
         }
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               ModuleManager.showAppModule("FireTeamGameEnter");
               this.hide();
               break;
            case "btnBuy_" + index:
               if(this.priceArr[index - 1] > this.cntCoin)
               {
                  Alarm.show("炽热印记不足！");
                  return;
               }
               doAction("CMD",10 + index).then(refresh);
               break;
         }
      }
      
      override public function hide() : void
      {
         this.limitArr = null;
         this.buyTimeArr = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         this.buyTimeArr = getValue("buyTimeArr");
         this.cntCoin = getValue("cntCoin");
      }
      
      private function updateDisplay() : void
      {
         for(var i:int = 1; i <= 5; i++)
         {
            ui["txtLim_" + i].text = this.buyTimeArr[i - 1] + "/" + this.limitArr[i - 1];
            if(this.limitArr[i - 1] <= this.buyTimeArr[i - 1])
            {
               CommonUI.setEnabled(ui["btnBuy_" + i],false);
            }
         }
         ui.txtCoin.text = this.cntCoin;
      }
   }
}

