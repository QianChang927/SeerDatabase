package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.loading.Loading;
   
   public class PumpkinGuessStore extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      private var priceArr:Array;
      
      private var limitArr:Array;
      
      private var coinCnt:int;
      
      private var limitBuyArr:Array;
      
      public function PumpkinGuessStore()
      {
         this.priceArr = [350,40,25,10,15,25];
         this.limitArr = [1,8,8,1,7,7,20];
         super();
         resUrl = "2024/1101/PumpkinGuessStore";
         configUrl = "2024/1101/PumpkinGuessConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         ui.txtCoin.text = "";
         for(var i:int = 1; i <= 6; i++)
         {
            ui["mcBuy_" + i].gotoAndStop(1);
         }
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
               ModuleManager.showAppModule("PumpkinGuessEnter");
               this.hide();
               break;
            case "btnBuy_" + index:
               if(this.coinCnt < this.priceArr[index - 1])
               {
                  Alarm.show("你的金南瓜不足！");
                  return;
               }
               doAction("BuyBuy",index).then(refresh);
               break;
            case "btnBuyGPK":
               doAction("BuyGPK").then(function():void
               {
                  var lastCoin:int = coinCnt;
                  ModuleManager.showAppModule("PumpkinGuessGotPop",[lastCoin,1],Loading.NO_ALL);
                  refresh();
               });
         }
      }
      
      override public function hide() : void
      {
         this.priceArr = null;
         this.limitBuyArr = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         this.coinCnt = getValue("coinCnt");
         this.limitBuyArr = getValue("limitBuyArr");
      }
      
      private function updateDisplay() : void
      {
         ui.txtCoin.text = this.coinCnt;
         for(var i:int = 1; i <= 7; i++)
         {
            if(Boolean(ui["mcBuy_" + i]))
            {
               if(this.limitBuyArr[i - 1] >= this.limitArr[i - 1])
               {
                  ui["mcBuy_" + i].gotoAndStop(2);
               }
            }
            if(Boolean(ui["txtLimit_" + i]))
            {
               ui["txtLimit_" + i].text = this.limitBuyArr[i - 1] + "/" + this.limitArr[i - 1];
            }
         }
      }
   }
}

