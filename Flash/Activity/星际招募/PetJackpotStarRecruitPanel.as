package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetJackPotShopXmlInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import flash.utils.ByteArray;
   import flash.utils.Endian;
   
   public class PetJackpotStarRecruitPanel extends ActivityModel
   {
      private var _commdId:int = 45788;
      
      private var _itemNum:int;
      
      private var _gailvAllNum:int;
      
      private var _surplusTime:int;
      
      private var _shopkindsArr:Array;
      
      private var _limitItemNum:int;
      
      public function PetJackpotStarRecruitPanel()
      {
         super();
         resUrl = "update/petJackpot/PetJackpotStarRecruitPanel";
         configUrl = "update/petJackpot/petJackpotConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         if(!ActivityTimeControl.getIsinTime(288) && !ActivityTimeControl.getIsinTime(289))
         {
            _mainUI.gotoOtherBtnMc.visible = false;
            _mainUI.shopBtn.visible = false;
            _mainUI.timeTx.visible = false;
         }
         _mainUI.playMc.visible = false;
         _mainUI.freeMultipleBtn.visible = false;
         this._shopkindsArr = PetJackPotShopXmlInfo.getBuleShopkinds();
         var tmpitem:int = int(ItemManager.getNumByID(2500003));
         this._limitItemNum = tmpitem;
         if(this._limitItemNum > 0)
         {
            StatManager.sendStat2014("星际招募","玩家在拥有【限时·星际密令】的情况下，进入【星际招募】主面板","限时道具更新");
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               this.hide();
               if(Boolean(ActivityTimeControl.getIsinTime(288)) || Boolean(ActivityTimeControl.getIsinTime(289)))
               {
                  ModuleManager.showAppModule("PetJackpotMainPanel");
               }
               break;
            case "singleBtn":
               if(this._itemNum > 0 || this._limitItemNum > 0)
               {
                  sendCmd(this._commdId,[3,this.getSendValue(1,1)],function():void
                  {
                     _mainUI.playMc.visible = true;
                     CommonUI.setEnabled(_mainUI,false,false);
                     AnimateManager.playMcAnimate(_mainUI,1,"playMc",function():void
                     {
                        hide();
                        ModuleManager.showAppModule("PetJackpotStarRecruitCardPanel",true);
                     },false,true);
                  });
               }
               else
               {
                  Alarm2.show("所需物品不足！");
               }
               break;
            case "multipleBtn":
               if(this._itemNum >= 10 || this._limitItemNum >= 10)
               {
                  sendCmd(this._commdId,[3,this.getSendValue(1,2)],function():void
                  {
                     _mainUI.playMc.visible = true;
                     CommonUI.setEnabled(_mainUI,false,false);
                     AnimateManager.playMcAnimate(_mainUI,1,"playMc",function():void
                     {
                        hide();
                        ModuleManager.showAppModule("PetJackpotStarRecruitCardPanel",true);
                     },false,true);
                  });
               }
               else
               {
                  Alarm2.show("所需物品不足！");
               }
               break;
            case "buyBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("MultiBuyPanel"),"",{
                  "productID":258504,
                  "iconID":1723167,
                  "callFunction":this.afterBuy
               });
               break;
            case "ruleBtn":
               this.hide();
               ModuleManager.showAppModule("PetJackpotRuleDecStarPanel","PetJackpotStarRecruitPanel");
               break;
            case "supplyBtn":
               if(this._shopkindsArr.length == 0)
               {
                  Alarm2.show("商店暂未开启，敬请期待！");
                  return;
               }
               this.hide();
               ModuleManager.showAppModule("PetJackpotEnergySupplyStarPanel","PetJackpotStarRecruitPanel");
               break;
            case "gotoOtherBtn":
               this.hide();
               ModuleManager.showAppModule("PetJackpotVientianeRecruitPanel");
               break;
            case "shopBtn":
               this.hide();
               ModuleManager.showAppModule("PetJackpotShopPanel","PetJackpotStarRecruitPanel");
               break;
            case "freeMultipleBtn":
               sendCmd(this._commdId,[3,this.getSendValue(1,2)],function():void
               {
                  _mainUI.playMc.visible = true;
                  CommonUI.setEnabled(_mainUI,false,false);
                  AnimateManager.playMcAnimate(_mainUI,1,"playMc",function():void
                  {
                     hide();
                     ModuleManager.showAppModule("PetJackpotStarRecruitCardPanel",true);
                  },false,true);
               });
         }
      }
      
      private function afterBuy(num:int) : void
      {
         sendCmd(this._commdId,[11,num],function():void
         {
            refresh();
         });
      }
      
      private function getSendValue(choice0:int, choice1:int, choice2:int = 0, choice3:int = 0) : uint
      {
         var ba:ByteArray = new ByteArray();
         ba.endian = Endian.LITTLE_ENDIAN;
         ba.writeByte(choice0);
         ba.writeByte(choice1);
         ba.writeByte(choice2);
         ba.writeByte(choice3);
         ba.position = 0;
         return ba.readUnsignedInt();
      }
      
      override protected function updatePanel() : void
      {
         var curGailv:Number;
         var playAllNum_0:int;
         var passTime:int;
         var curState:int;
         var state:uint;
         var freeNum:int = int(getValue("freeNum"));
         if(freeNum == 0 && Boolean(ActivityTimeControl.getIsinTime(347)))
         {
            _mainUI.freeTips.visible = true;
            _mainUI.freeMultipleBtn.visible = true;
            _mainUI.singleBtnMc.visible = false;
            _mainUI.multipleBtnMc.visible = false;
            _mainUI.reqireMc.visible = false;
            _mainUI.reqireMc_1.visible = false;
         }
         else
         {
            _mainUI.freeTips.visible = false;
            _mainUI.freeMultipleBtn.visible = false;
            _mainUI.singleBtnMc.visible = true;
            _mainUI.multipleBtnMc.visible = true;
            _mainUI.reqireMc.visible = true;
            _mainUI.reqireMc_1.visible = true;
         }
         ItemManager.updateLimititem(function():void
         {
            var num:Array = new Array();
            num[0] = ItemManager.getNumByID(2500003);
            _limitItemNum = num[0];
            if(_mainUI != null)
            {
               _mainUI.itemNumTx_2.text = String(_limitItemNum);
               if(_limitItemNum > 0)
               {
                  _mainUI.reqireMc.gotoAndStop(2);
                  _mainUI.singleBtnMc.gotoAndStop(2);
               }
               else
               {
                  _mainUI.reqireMc.gotoAndStop(1);
                  _mainUI.singleBtnMc.gotoAndStop(1);
               }
               if(_limitItemNum >= 10)
               {
                  _mainUI.multipleBtnMc.gotoAndStop(2);
                  _mainUI.reqireMc_1.gotoAndStop(2);
               }
               else
               {
                  _mainUI.multipleBtnMc.gotoAndStop(1);
                  _mainUI.reqireMc_1.gotoAndStop(1);
               }
            }
         });
         this._itemNum = getValue("itemNum_0");
         _mainUI.itemNumTx.text = String(this._itemNum);
         this._gailvAllNum = getValue("gailvAllNum_0");
         curGailv = this._gailvAllNum + 1 >= 60 ? 100 : 0.5 + int((this._gailvAllNum + 1) / 20) * 0.012;
         _mainUI.gailvTx.text = String(curGailv);
         KTool.showScore(_mainUI.upNumMc,20 - this._gailvAllNum % 20,0,true);
         playAllNum_0 = int(getValue("playAllNum_0"));
         KTool.showScore(_mainUI.numMc,60 - playAllNum_0,0,true);
         passTime = (SystemTimerManager.time - ActivityTimeControl.getStartData(287).time / 1000) % (7 * 86400);
         this._surplusTime = 7 * 86400 - passTime;
         if(this._surplusTime > 0)
         {
            SystemTimerManager.addTickFun(this.onTimer);
         }
         else
         {
            SystemTimerManager.removeTickFun(this.onTimer);
         }
         curState = int(getValue("curState"));
         state = uint(KTool.subByte(curState,0,8));
         if(state > 0)
         {
            this.hide();
            ModuleManager.showAppModule("PetJackpotStarRecruitCardPanel");
         }
      }
      
      private function onTimer() : void
      {
         --this._surplusTime;
         if(this._surplusTime <= 0)
         {
            this.updatePanel();
         }
         else
         {
            this.getTimeClockString(this._surplusTime);
         }
      }
      
      private function getTimeClockString(second:int) : void
      {
         var str:String = null;
         var hours:int = 0;
         var minutes:int = 0;
         var seconds:int = 0;
         var days:int = second / 86400;
         if(days > 0)
         {
            hours = (second - days * 86400) / 3600;
            minutes = (second - days * 86400 - hours * 3600) / 60;
            seconds = second - days * 86400 - hours * 3600 - minutes * 60;
            str = days + "天" + hours + "时" + minutes + "分";
         }
         else
         {
            hours = second / 3600;
            minutes = (second - hours * 3600) / 60;
            seconds = second - hours * 3600 - minutes * 60;
            str = hours + "时" + minutes + "分" + seconds + "秒";
         }
         _mainUI.timeTx.text = str;
      }
      
      override public function hide() : void
      {
         SystemTimerManager.removeTickFun(this.onTimer);
         super.hide();
      }
   }
}

