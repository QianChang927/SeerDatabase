package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.VipController201408;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.UserEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.events.Event;
   import org.taomee.manager.EventManager;
   
   public class VIPExclusiveMall2024MainPanel extends ActivityModel
   {
      private var _commdId:int = 45771;
      
      private var _itemNum:int;
      
      private var _requireArr:Array;
      
      private var _isCanGet:Boolean = false;
      
      private var _curPage:int = 1;
      
      private var _bitCount:int;
      
      private var _getItemCount:int;
      
      private var getState:int;
      
      private var playerInfo:int;
      
      private var COUNTITEMARR:Array;
      
      private var forever_125164:int;
      
      public function VIPExclusiveMall2024MainPanel()
      {
         this.COUNTITEMARR = [20,40,60,80,150];
         super();
         resUrl = "2024/1115/VIPExclusiveMall2024MainPanel";
         configUrl = "2024/1115/VIPExclusiveMall2024";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         sendCmdWithPromise(45771,[28,8]);
         StatManager.sendStat2014("1118VIP周年庆主题活动-VIP返利","进入活动主界面","2022运营活动");
         EventManager.addEventListener(UserEvent.VIP_INFO_CHANGED,this.updateVipInfo);
      }
      
      private function updateVipInfo(e:Event) : void
      {
         refresh();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var index:int = 0;
         var btnName:String = e.target.name;
         index = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               this.hide();
               ModuleManager.showAppModule("Vip15thCollectionPanel");
               break;
            case "curBtn_" + index:
               this._curPage = index;
               refresh();
               break;
            case "getBtn":
               if(this._isCanGet)
               {
                  sendCmdWithPromise(this._commdId,[28,11]).then(refreshPanel);
               }
               else
               {
                  Alarm2.show("没有奖励可以领取，请先充值！");
               }
               break;
            case "lvGetBtn_" + index:
               sendCmdWithPromise(this._commdId,[28,index + 1]).then(refreshPanel);
               Alarm2.show("恭喜你，获得了" + this.COUNTITEMARR[index] + "点VIP点数。");
               break;
            case "btn_" + index:
               sendCmdWithPromise(this._commdId,[28,index + 6]).then(refreshPanel);
               break;
            case "exchangeBtn_" + index:
               if(this._itemNum >= this._requireArr[index].requireNum)
               {
                  sendCmdWithPromise(this._commdId,[29,index + 1]).then(refreshPanel);
               }
               else
               {
                  Alarm2.show("所需VIP点数不足！");
               }
               break;
            case "getTwoBtn_" + index:
               return;
            case "getNum_" + index:
               if(index == 1)
               {
                  if(this._itemNum >= 4)
                  {
                     sendCmdWithPromise(this._commdId,[29,index + 6]).then(refreshPanel);
                     Alarm2.show("兑换成功！");
                  }
                  else
                  {
                     Alarm2.show("所需VIP点数不足！");
                  }
               }
               else if(this._itemNum >= 40)
               {
                  sendCmdWithPromise(this._commdId,[29,index + 6]).then(refreshPanel);
                  Alarm2.show("兑换成功！");
               }
               else
               {
                  Alarm2.show("所需VIP点数不足！");
               }
               break;
            case "gotoBtn":
               StatManager.sendStat2014("1118VIP周年庆主题活动-VIP返利","点击纯源能量页签的【前往】按钮","2022运营活动");
               this.hide();
               ModuleManager.showAppModule("PropRecoveryS1Panel");
               break;
            case "vipBtn":
               StatManager.sendStat2014("1118VIP周年庆主题活动-VIP返利","点击【前往充值】按钮","2022运营活动");
               this.hide();
               ModuleManager.showAppModule("NewVIPEquityPanel");
               break;
            case "gotoBtn":
               this.hide();
               ModuleManager.showModule(ClientConfig.getAppModule("SiLingSheSyncytiumMainPanel"),"正在打开....");
               break;
            case "close":
               _mainUI["page"].visible = false;
               break;
            case "lookBtn_" + index:
               if(index == 1)
               {
                  _mainUI["page"].visible = true;
                  _mainUI["page"]["mc"].gotoAndStop(1);
               }
               else
               {
                  _mainUI["page"].visible = true;
                  _mainUI["page"]["mc"].gotoAndStop(2);
               }
               break;
            case "getBtn_" + index:
               if(index == 1)
               {
                  sendCmdWithPromise(this._commdId,[28,index + 5]).then(refreshPanel);
                  Alarm2.show("恭喜你，获得了200点VIP点数。");
               }
               else
               {
                  doAction("alert1").then(function():void
                  {
                     sendCmdWithPromise(_commdId,[28,index + 5]).then(refreshPanel);
                     if(playerInfo >= 600)
                     {
                        Alarm2.show("恭喜你，获得了600点VIP点数。");
                     }
                     else
                     {
                        Alarm2.show("恭喜你，获得了" + playerInfo + "点VIP点数。");
                     }
                  });
               }
               break;
            case "getNoNoBtn":
               if(this._itemNum >= 10)
               {
                  sendCmdWithPromise(this._commdId,[28,14]).then(refreshPanel);
               }
               else
               {
                  Alarm2.show("所需VIP点数不足！");
               }
         }
      }
      
      override protected function updatePanel() : void
      {
         var i:int = 0;
         var num1:uint = 0;
         this.forever_125164 = getValue("forever_125164");
         var num:Array = new Array();
         num[0] = this.forever_125164;
         this._itemNum = num[0];
         _mainUI.itemNumTx.text = String(this._itemNum);
         this.getState = getValue("getState");
         this._bitCount = getValue("bitCount");
         this._getItemCount = getValue("getItemCount");
         this.playerInfo = getValue("playerInfo");
         this._requireArr = getValue("requireArr");
         var exchangeNum:int = int(getValue("exchangeNum"));
         for(i = 0; i < 6; i++)
         {
            _mainUI["mcPage"]["requireNumTx_" + i].text = "" + this._requireArr[i].requireNum;
            num1 = uint(KTool.subByte(exchangeNum,i * 4,4));
            _mainUI["mcPage"]["leftNumTx_" + i].text = "" + (this._requireArr[i].maxNum - num1) + "/" + this._requireArr[i].maxNum;
            if(num1 >= this._requireArr[i].maxNum)
            {
               _mainUI["mcPage"]["flagExchange_" + i].visible = true;
               CommonUI.setEnabled(_mainUI["mcPage"]["exchangeBtn_" + i],false,true);
            }
            else
            {
               _mainUI["mcPage"]["flagExchange_" + i].visible = false;
            }
         }
         _mainUI["mcPage"]["leftNumTx_10"].text = 150 - this._getItemCount + "/150";
         if(150 - this._getItemCount <= 0)
         {
            _mainUI["mcPage"]["flagExchange_10"].visible = true;
            CommonUI.setEnabled(_mainUI["mcPage"]["getNum_1"],false);
         }
         else
         {
            _mainUI["mcPage"]["flagExchange_10"].visible = false;
            CommonUI.setEnabled(_mainUI["mcPage"]["getNum_1"],true);
         }
         if(150 - this._getItemCount <= 9)
         {
            _mainUI["mcPage"]["flagExchange_11"].visible = true;
            CommonUI.setEnabled(_mainUI["mcPage"]["getNum_2"],false);
         }
         else
         {
            _mainUI["mcPage"]["flagExchange_11"].visible = false;
            CommonUI.setEnabled(_mainUI["mcPage"]["getNum_2"],true);
         }
         var unlockState:int = int(getValue("unlockState"));
         for(i = 0; i < 5; i++)
         {
            _mainUI["flaglv_" + i].visible = false;
            if(BitUtils.getBit(unlockState,i) > 0)
            {
               if(BitUtils.getBit(this.getState,i) > 0)
               {
                  _mainUI["flaglv_" + i].visible = true;
                  CommonUI.setEnabled(_mainUI["lvGetBtn_" + i],false,true);
               }
               else
               {
                  CommonUI.setEnabled(_mainUI["lvGetBtn_" + i],true,false);
               }
            }
            else
            {
               CommonUI.setEnabled(_mainUI["lvGetBtn_" + i],false,true);
            }
         }
         var vipMonthNum:int = int(getValue("vipMonthNum"));
         var useMonthNum:int = int(getValue("useMonthNum"));
         this._isCanGet = vipMonthNum - useMonthNum > 0 ? true : false;
         this.showVip();
      }
      
      private function showVip() : void
      {
         if(MainManager.actorInfo.isVip)
         {
            _mainUI.leftNumTx.text = "" + this.playerInfo;
            _mainUI.vipLvMc.gotoAndStop(MainManager.actorInfo.vipLevel + 1);
            if(this.playerInfo > 0)
            {
               if(BitUtils.getBit(this.getState,5) > 0)
               {
                  _mainUI["flagGet_1"].visible = true;
                  CommonUI.setEnabled(_mainUI["getBtn_1"],false);
               }
               else
               {
                  _mainUI["flagGet_1"].visible = false;
                  CommonUI.setEnabled(_mainUI["getBtn_1"],true);
               }
               if(BitUtils.getBit(this.getState,6) > 0)
               {
                  _mainUI["flagGet_2"].visible = true;
                  CommonUI.setEnabled(_mainUI["getBtn_2"],false);
               }
               else
               {
                  _mainUI["flagGet_2"].visible = false;
                  CommonUI.setEnabled(_mainUI["getBtn_2"],true);
               }
            }
            else
            {
               _mainUI["flagGet_1"].visible = false;
               CommonUI.setEnabled(_mainUI["getBtn_1"],false);
               _mainUI["flagGet_2"].visible = false;
               CommonUI.setEnabled(_mainUI["getBtn_2"],false);
            }
         }
         else
         {
            _mainUI.leftNumTx.text = "" + this.playerInfo;
            _mainUI.vipLvMc.gotoAndStop(1);
            _mainUI["flagGet_1"].visible = false;
            CommonUI.setEnabled(_mainUI["getBtn_1"],false);
            _mainUI["flagGet_2"].visible = false;
            CommonUI.setEnabled(_mainUI["getBtn_2"],false);
         }
      }
      
      private function getLeftDay() : int
      {
         var time:Number = VipController201408.vipEndTime * 1000 - SystemTimerManager.sysBJDate.time;
         return time / (1000 * 60 * 60 * 24) >= 0 ? time / (1000 * 60 * 60 * 24) : 0;
      }
      
      override public function hide() : void
      {
         EventManager.removeEventListener(UserEvent.VIP_INFO_CHANGED,this.updateVipInfo);
         super.hide();
      }
   }
}

