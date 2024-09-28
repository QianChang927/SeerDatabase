package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.events.Event;
   import org.taomee.manager.EventManager;
   
   public class StarCafeSocialSelectPop extends ActivityModel
   {
      private var costArr:Array;
      
      private var isStart:Boolean = false;
      
      private var paperCnt:int;
      
      private var coinCnt:int;
      
      public function StarCafeSocialSelectPop()
      {
         this.costArr = [300,500,750,1000,1250,1500];
         super();
         resUrl = "2024/0927/StarCafeSocialSelectPop";
         configUrl = "2024/0927/StarCafeConfig";
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
            ui["mc_" + i].gotoAndStop(1);
            ui["mc_" + i].txtCost.text = this.costArr[i - 1];
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
         var pName:String = null;
         var pIdx:int = 0;
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
               break;
            case "btnPublish":
               pName = e.target.parent.name;
               pIdx = int(pName.split("_")[1]);
               if(this.costArr[pIdx - 1] > this.coinCnt)
               {
                  Alarm.show("店铺资金不足！");
                  return;
               }
               doAction("Publish").then(function():void
               {
                  refresh();
                  EventManager.dispatchEvent(new Event("RefreshStarCafeSocial"));
                  hide();
               });
               break;
         }
      }
      
      override public function hide() : void
      {
         this.costArr = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         this.paperCnt = getValue("paperCnt");
         this.coinCnt = getValue("coinCnt");
      }
      
      private function updateDisplay() : void
      {
         ui.txtCoin.text = this.coinCnt;
         for(var i:int = 1; i <= 6; i++)
         {
            ui["mc_" + i].gotoAndStop(i >= this.paperCnt ? 1 : 2);
            if(i > this.paperCnt)
            {
               CommonUI.setEnabled(ui["mc_" + i],false);
            }
            else
            {
               CommonUI.setEnabled(ui["mc_" + i],true);
            }
            if(Boolean(ui["mc_" + i].txtCost))
            {
               ui["mc_" + i].txtCost.text = this.costArr[i - 1];
            }
         }
      }
   }
}

