package com.robot.module.app
{
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.xml.StarCafeGoodsXMLInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import gs.TweenLite;
   
   public class StarCafeMarketPanel extends ActivityModel
   {
      private var goodsInfo:Array;
      
      private var curDayIdx:int = 0;
      
      private var isStart:Boolean = false;
      
      private var isInAnim:Boolean = false;
      
      private var bagCnt:int;
      
      private var bagInfoArr:Array;
      
      private var hasDealMapArr:Array;
      
      private var curMapId:int = -1;
      
      private var actualMapId:int = -1;
      
      private var coinCnt:int;
      
      private var lockedState:Array;
      
      private var powerCnt:int;
      
      private var baseBagCnt:int = 5;
      
      public function StarCafeMarketPanel()
      {
         super();
         resUrl = "2024/0927/StarCafeMarketPanel";
         configUrl = "2024/0927/StarCafeConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         var i:int = 0;
         var time:* = SystemTimerManager.sysBJDate.time - new Date("09/27/2024").time;
         var day:int = int(time / 1000 / 60 / 60 / 24);
         this.goodsInfo = StarCafeGoodsXMLInfo.getDayInfos(day);
         this.curDayIdx = day % 8;
         super.show();
         ui.map.visible = false;
         ui.mcInfo_1.gotoAndStop(day % 8 + 1);
         ui.mcInfo_2.gotoAndStop((day + 1) % 8 + 1);
         ui.mcMarketName.gotoAndStop(1);
         for(i = 1; i <= 5; i++)
         {
            ui["good_" + i].mcType.gotoAndStop(1);
            ui["good_" + i].txtPrice.text = "";
         }
         ui.txtCoin.text = "";
         for(i = 1; i <= 10; i++)
         {
            ui["bag_" + i].visible = true;
            ui["bag_" + i].gotoAndStop(1);
         }
         for(i = 1; i <= 4; i++)
         {
            ui["lock_" + i].visible = true;
         }
         this.setPower(0);
         if(Boolean(ui.txtTest))
         {
            ui.txtTest.text = this.curDayIdx + 1;
         }
      }
      
      private function onStart() : void
      {
         var buffId:int = 0;
         if(!this.isStart)
         {
            this.isStart = true;
            buffId = 24490;
            if(buffId > 0)
            {
               if(BitBuffSetClass.getState(buffId) == 0)
               {
                  DialogControl.showAllDilogs(163,2).then(function():void
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
         var index:int = 0;
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
            case "goto_" + index:
               if(index == this.curMapId)
               {
                  Alarm.show("你已经在此地点。");
                  return;
               }
               TweenLite.to(_ui,0.15,{"onComplete":function():void
               {
                  curMapId = index;
                  updateDisplay();
               }});
               ui.map.visible = true;
               this.isInAnim = true;
               AnimateManager.playMcAnimate(_ui.map,3,"ani",function():void
               {
                  ui.map.visible = false;
                  isInAnim = false;
               },false,true);
               break;
            case "btnShowMap":
               ui.map.visible = true;
               this.isInAnim = true;
               AnimateManager.playMcAnimate(_ui.map,1,"ani",function():void
               {
                  ui.map.gotoAndStop(4);
                  isInAnim = false;
               },false,true);
               break;
            case "btnQuitMap":
               ui.map.visible = true;
               this.isInAnim = true;
               AnimateManager.playMcAnimate(_ui.map,2,"ani",function():void
               {
                  ui.map.visible = false;
                  isInAnim = false;
               },false,true);
               break;
            case "btnBuy":
               pName = e.target.parent.name;
               pIdx = int(pName.split("_")[1]);
               if(this.actualMapId != this.curMapId && this.powerCnt <= 0)
               {
                  Alarm.show("今日交易体力不足。");
                  return;
               }
               if(this.bagInfoArr.slice(0,this.bagCnt).indexOf(0) < 0)
               {
                  Alarm.show("背包已满，无法购买！");
                  return;
               }
               if(this.goodsInfo[this.curMapId - 1][pIdx - 1].Price > this.coinCnt)
               {
                  Alarm.show("店铺资金不足！");
                  return;
               }
               if(this.actualMapId != this.curMapId || this.powerCnt == 3)
               {
                  Alert.show("该行动需要消耗1点交易体力，是否进行交易？",function():void
                  {
                     AnimateManager.playMcAnimate(ui["p_" + powerCnt],3,"ani",function():void
                     {
                        doAction("SendDeal",60 + curMapId).then(function():void
                        {
                           doAction("SendDeal",70 + pIdx).then(refresh);
                        });
                     },false,true);
                  });
               }
               else
               {
                  doAction("SendDeal",60 + this.curMapId).then(function():void
                  {
                     doAction("SendDeal",70 + pIdx).then(refresh);
                  });
               }
               break;
            case "btnSell":
               pName = e.target.parent.name;
               pIdx = int(pName.split("_")[1]);
               if(this.actualMapId != this.curMapId && this.powerCnt <= 0)
               {
                  Alarm.show("今日交易体力不足。");
                  return;
               }
               if(this.bagInfoArr.indexOf(this.goodsInfo[this.curMapId - 1][pIdx - 1].item) < 0)
               {
                  Alarm.show("背包内无对应商品。");
                  return;
               }
               if(this.actualMapId != this.curMapId || this.powerCnt == 3)
               {
                  Alert.show("该行动需要消耗1点交易体力，是否进行交易？",function():void
                  {
                     AnimateManager.playMcAnimate(ui["p_" + powerCnt],3,"ani",function():void
                     {
                        doAction("SendDeal",60 + curMapId).then(function():void
                        {
                           doAction("SendDeal",80 + pIdx).then(refresh);
                        });
                     },false,true);
                  });
               }
               else
               {
                  doAction("SendDeal",60 + this.curMapId).then(function():void
                  {
                     doAction("SendDeal",80 + pIdx).then(refresh);
                  });
               }
               break;
            case "btnLock":
               if(150 > this.coinCnt)
               {
                  Alarm.show("店铺资金不足！");
                  return;
               }
               pName = e.target.parent.name;
               pIdx = int(pName.split("_")[1]);
               doAction("Unlock").then(refresh);
               break;
         }
      }
      
      override public function hide() : void
      {
         this.bagInfoArr = null;
         this.hasDealMapArr = null;
         this.goodsInfo = null;
         this.lockedState = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         this.bagCnt = getValue("bagCnt");
         this.bagInfoArr = getValue("bagInfoArr");
         this.hasDealMapArr = getValue("hasDealMapArr");
         if(this.curMapId <= 0)
         {
            this.curMapId = getValue("curMapId");
         }
         this.actualMapId = getValue("curMapId");
         this.coinCnt = getValue("coinCnt");
         this.lockedState = getValue("lockedState");
         this.powerCnt = getValue("curPowerCost");
         this.powerCnt = 3 - this.powerCnt;
         if(this.curMapId <= 0)
         {
            this.curMapId = 1;
         }
         if(this.actualMapId <= 0)
         {
            this.actualMapId = 1;
         }
         var needAlarmNew:Boolean = false;
         for(var i:int = 0; i < this.lockedState.length; i++)
         {
            if(this.lockedState[i] == 1 && BitBuffSetClass.getState(24492 + i) == 0)
            {
               BitBuffSetClass.setState(24492 + i,1);
               needAlarmNew = true;
            }
         }
         if(needAlarmNew)
         {
            Alarm.show("解锁了新的商品！");
         }
         needAlarmNew = false;
      }
      
      private function updateDisplay() : void
      {
         var i:int = 0;
         var isStop:Boolean = false;
         var isFirstLocked:Boolean = true;
         for(i = 1; i <= 5; i++)
         {
            if(Boolean(ui["lock_" + i]))
            {
               if(this.bagCnt - this.baseBagCnt >= i)
               {
                  ui["lock_" + i].visible = false;
               }
               else
               {
                  if(isFirstLocked)
                  {
                     isFirstLocked = false;
                     ui["lock_" + i].gotoAndStop(1);
                  }
                  else
                  {
                     ui["lock_" + i].gotoAndStop(2);
                  }
                  ui["lock_" + i].visible = true;
               }
            }
         }
         ui.txtCoin.text = this.coinCnt;
         this.setPower(this.powerCnt);
         ui.mcMarketName.gotoAndStop(this.curMapId);
         var curMarketInfo:Array = this.goodsInfo[this.curMapId - 1];
         for(i = 1; i <= 5; i++)
         {
            ui["good_" + i].mcType.gotoAndStop(curMarketInfo[i - 1].item);
            ui["good_" + i].txtPrice.text = curMarketInfo[i - 1].Price;
            isStop = curMarketInfo[i - 1].Sale == 3;
            CommonUI.setEnabled(ui["good_" + i].btnBuy,!isStop);
            CommonUI.setEnabled(ui["good_" + i].btnSell,!isStop);
            if(curMarketInfo[i - 1].Sale != 0)
            {
               ui["signUD_" + i].visible = !isStop;
               ui["signUD_" + i].gotoAndStop(3 - curMarketInfo[i - 1].Sale);
            }
            else
            {
               ui["signUD_" + i].visible = false;
            }
            ui["good_" + i].visible = true;
            if(curMarketInfo[i - 1].item >= 9)
            {
               if(this.lockedState[curMarketInfo[i - 1].item - 9] == 0)
               {
                  ui["good_" + i].visible = false;
                  ui["signUD_" + i].visible = false;
               }
            }
         }
         for(i = 1; i <= 10; i++)
         {
            ui["bag_" + i].visible = this.bagInfoArr[i - 1] > 0;
            ui["bag_" + i].gotoAndStop(this.bagInfoArr[i - 1]);
         }
      }
      
      private function setPower(value:int) : *
      {
         for(var i:int = 1; i <= 3; i++)
         {
            if(Boolean(ui["p_" + i]))
            {
               ui["p_" + i].gotoAndStop(i <= value ? 1 : 2);
            }
         }
      }
   }
}

