package com.robot.module.app
{
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.Bitmap;
   import flash.display.Loader;
   import flash.events.Event;
   import flash.events.IOErrorEvent;
   import flash.net.URLRequest;
   import org.taomee.utils.DisplayUtil;
   
   public class StarCafeDrinkPanel extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      private var hasSelectArr:Array;
      
      private var isInAnim:Boolean = false;
      
      private var wordArr:Array;
      
      private var drinkArr:Array;
      
      private var lockedState:Array;
      
      private var customerId:int;
      
      private var customerTarget:int;
      
      private var restCnt1:int;
      
      private var restCnt2:int;
      
      private var drinkNameArr:Array;
      
      private var _page:*;
      
      private var _loader:Loader;
      
      private var urlStr:String;
      
      public function StarCafeDrinkPanel()
      {
         this.hasSelectArr = [0,0,0,0,0,0,0,0,0,0,0,0];
         super();
         resUrl = "2024/0927/StarCafeDrinkPanel";
         configUrl = "2024/0927/StarCafeDrinkConfig";
         this.initLoader();
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         ui.mainAnim.gotoAndStop(1);
         ui.mcRR.visible = false;
         ui.mcRR.mcScore.gotoAndStop(1);
         ui.mcRR.GoodorBad.gotoAndStop(1);
         ui.mcPage.gotoAndStop(1);
         ui.mcCustomerName.gotoAndStop(1);
         ui.mcCustomerWord.gotoAndStop(1);
         for(var i:int = 1; i <= 12; i++)
         {
            ui["select_" + i].gotoAndStop(1);
         }
         ui.mcState.gotoAndStop(1);
         this.page = 1;
      }
      
      private function onStart() : void
      {
         var buffId:int = 0;
         if(!this.isStart)
         {
            this.isStart = true;
            buffId = 24491;
            if(buffId > 0)
            {
               if(BitBuffSetClass.getState(buffId) == 0)
               {
                  DialogControl.showAllDilogs(163,3).then(function():void
                  {
                     BitBuffSetClass.setState(buffId,1);
                  });
               }
            }
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
         var drinkStr:String = null;
         var curDrinkId:int = 0;
         var pName:String = null;
         var pIdx:int = 0;
         if(!this.isStart)
         {
            return;
         }
         if(this.isInAnim)
         {
            return;
         }
         btnName = e.target.name;
         index = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               ModuleManager.showAppModule("StarCafeMainPanel");
               this.hide();
               break;
            case "btnQuitRsult":
               ui.mcRR.visible = false;
               break;
            case "btnPre":
               --this.page;
               break;
            case "btnNext":
               ++this.page;
               break;
            case "btnCommit":
               drinkStr = this.getDrinkStr();
               if(drinkStr == "")
               {
                  Alarm.show("请先选择至少一种原料。");
                  return;
               }
               curDrinkId = this.drinkArr.indexOf(drinkStr) + 1;
               if(curDrinkId <= 0)
               {
                  Alarm.show("似乎没有这种配方，再检查一下。");
                  return;
               }
               ui.mainAnim.gotoAndStop(2);
               this.isInAnim = true;
               AnimateManager.playMcAnimate(ui.mainAnim,2,"ani",function():void
               {
                  showResult(customerId <= 10,customerTarget == curDrinkId);
                  doAction("SendDrink",130 + curDrinkId).then(refresh);
                  isInAnim = false;
               },false,true);
               break;
            case "btnSelect":
               pName = e.target.parent.name;
               pIdx = int(pName.split("_")[1]);
               this.hasSelectArr[pIdx - 1] = 1;
               ui["select_" + pIdx].gotoAndStop(2);
               break;
            case "btnCancelSelect":
               pName = e.target.parent.name;
               pIdx = int(pName.split("_")[1]);
               this.hasSelectArr[pIdx - 1] = 0;
               ui["select_" + pIdx].gotoAndStop(1);
         }
      }
      
      override public function hide() : void
      {
         this._loader.contentLoaderInfo.removeEventListener(Event.COMPLETE,this.onPNGComplete);
         this._loader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR,this.errorHandler);
         this._loader = null;
         this.drinkNameArr = null;
         this.drinkArr = null;
         this.wordArr = null;
         this.hasSelectArr = null;
         this.lockedState = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         var i:int = 0;
         if(this.wordArr == null)
         {
            this.wordArr = getValue("wordArr");
         }
         if(this.drinkArr == null)
         {
            this.drinkArr = getValue("drinkArr");
         }
         this.lockedState = getValue("lockedState");
         this.customerId = getValue("customerId");
         this.customerTarget = getValue("customerTarget");
         this.restCnt1 = getValue("restCnt1");
         this.restCnt2 = getValue("restCnt2");
         this.drinkNameArr = getValue("drinkNameArr");
         if(this.customerId == 0)
         {
            this.customerId = 1;
         }
         this.hasSelectArr = [0,0,0,0,0,0,0,0,0,0,0,0];
         for(i = 1; i <= 12; i++)
         {
            ui["select_" + i].gotoAndStop(1);
         }
         var needAlarmNew:Boolean = false;
         for(i = 0; i < this.lockedState.length; i++)
         {
            if(this.lockedState[i] == 1 && BitBuffSetClass.getState(24482 + i) == 0)
            {
               BitBuffSetClass.setState(24482 + i,1);
               needAlarmNew = true;
            }
         }
         if(needAlarmNew)
         {
            Alarm.show("发现新的佐料！");
         }
         needAlarmNew = false;
      }
      
      private function updateDisplay() : void
      {
         var i:int = 0;
         if(this.restCnt1 + this.restCnt2 == 0)
         {
            ui.mcState.gotoAndStop(2);
            ui.mcState.ani.ani.gotoAndPlay(1);
            this.hideCustomer();
            for(i = 1; i <= 12; i++)
            {
               CommonUI.setEnabled(ui["select_" + i],false);
            }
            return;
         }
         var wordInfo:Array = this.wordArr[this.customerId - 1];
         ui.mcCustomerName.gotoAndStop(wordInfo[0]);
         if(this.customerId > 10)
         {
            ui.mcCustomerWord.gotoAndStop(wordInfo[1]);
         }
         else
         {
            ui.mcCustomerWord.gotoAndStop(this.customerTarget % 2 + 1);
         }
         if(Boolean(ui.mcCustomerWord.txtInfo))
         {
            ui.mcCustomerWord.txtInfo.text = this.drinkNameArr[this.customerTarget - 1];
         }
         for(i = 9; i <= 12; i++)
         {
            if(this.lockedState[i - 9] == 0)
            {
               ui["select_" + i].gotoAndStop(3);
            }
         }
         this.loadHead(this.customerId);
      }
      
      private function showResult(isNormal:Boolean, isGood:Boolean) : void
      {
         ui.mcRR.visible = true;
         if(isNormal && isGood)
         {
            ui.mcRR.mcScore.gotoAndStop(1);
         }
         else if(!isNormal && isGood)
         {
            ui.mcRR.mcScore.gotoAndStop(2);
         }
         else if(isNormal && !isGood)
         {
            ui.mcRR.mcScore.gotoAndStop(3);
         }
         else if(!isNormal && !isGood)
         {
            ui.mcRR.mcScore.gotoAndStop(4);
         }
         ui.mcRR.GoodorBad.gotoAndStop(isGood ? 1 : 2);
      }
      
      private function set page(value:int) : void
      {
         ui.btnPre.visible = true;
         ui.btnNext.visible = true;
         this._page = value;
         if(this._page <= 1)
         {
            this._page = 1;
            ui.btnPre.visible = false;
         }
         if(this._page >= 8)
         {
            this._page = 8;
            ui.btnNext.visible = false;
         }
         ui.mcPage.gotoAndStop(this._page);
      }
      
      private function get page() : *
      {
         return this._page;
      }
      
      private function getDrinkStr() : String
      {
         var str:String = "";
         for(var i:int = 0; i < this.hasSelectArr.length; i++)
         {
            if(this.hasSelectArr[i] > 0)
            {
               str += String.fromCharCode("A".charCodeAt() + i);
            }
         }
         return str;
      }
      
      private function hideCustomer() : void
      {
         ui.mcCustomerName.visible = false;
         ui.mcCustomerWord.visible = false;
         ui.iconHead.visible = false;
      }
      
      private function initLoader() : void
      {
         this._loader = new Loader();
         this._loader.contentLoaderInfo.addEventListener(Event.COMPLETE,this.onPNGComplete);
         this._loader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,this.errorHandler);
      }
      
      private function loadHead(idx:int) : void
      {
         DisplayUtil.removeAllChild(ui.iconHead);
         this.urlStr = "appRes/2024/0927/DrinkHead/" + idx + ".png";
         this._loader.load(new URLRequest(ClientConfig.getResPath(this.urlStr)));
      }
      
      private function onPNGComplete(e:Event) : void
      {
         var m_image:Bitmap = new Bitmap((e.currentTarget.content as Bitmap).bitmapData,"auto",true);
         ui.iconHead.addChild(m_image);
      }
      
      protected function errorHandler(evt:IOErrorEvent) : void
      {
         if(MainManager.isDebug)
         {
            Alarm.show("加载出错！" + this.urlStr);
         }
      }
   }
}

