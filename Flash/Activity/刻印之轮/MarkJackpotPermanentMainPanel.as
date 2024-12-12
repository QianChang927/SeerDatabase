package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   
   public class MarkJackpotPermanentMainPanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNumArr:Array;
      
      private var _reBuyNum:int = 0;
      
      private var _limitItemNum:int;
      
      public function MarkJackpotPermanentMainPanel()
      {
         super();
         resUrl = "2021/0209/MarkJackpotPermanentMainPanel";
         configUrl = "2021/0209/markJackpotConfig";
      }
      
      override public function init(data:Object = null) : void
      {
         this._reBuyNum = data as int;
      }
      
      override public function show() : void
      {
         super.show();
         ItemManager.updateLimititem(function():void
         {
            var num:Array = new Array();
            num[0] = ItemManager.getNumByID(2500004);
            _limitItemNum = num[0];
            if(_limitItemNum > 0)
            {
               StatManager.sendStat2014("浩瀚召唤","玩家在拥有【限时·浩瀚星核】的情况下，进入【浩瀚召唤】主面板","限时道具更新");
            }
         });
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
               break;
            case "btn_" + index:
               ModuleManager.showAppModule("MarkJackpotPermanentDecPanel",index);
               this.hide();
               break;
            case "singleBuyBtn":
               this.hide();
               ModuleManager.showAppModule("MarkJackpotPermanentBuyPanel",false);
               break;
            case "multipleBuyBtn":
               this.hide();
               ModuleManager.showAppModule("MarkJackpotPermanentBuyPanel",true);
               break;
            case "singleBtn":
               if(this._itemNumArr[0] > 0 || this._limitItemNum > 0)
               {
                  CommonUI.setEnabled(_mainUI,false,false);
                  AnimateManager.playMcAnimate(_mainUI,1,"playMc",function():void
                  {
                     sendCmd(_commdId,[1,1],function():void
                     {
                        ModuleManager.showAppModule("MarkJackpotPermanentResultSPanel");
                        hide();
                     });
                  },false,true);
               }
               else
               {
                  Alarm2.show("浩瀚星核数量不足！");
               }
               break;
            case "multipleBtn":
               if(this._itemNumArr[0] >= 10 || this._limitItemNum >= 10)
               {
                  CommonUI.setEnabled(_mainUI,false,false);
                  AnimateManager.playMcAnimate(_mainUI,1,"playMc",function():void
                  {
                     sendCmd(_commdId,[1,2],function():void
                     {
                        ModuleManager.showAppModule("MarkJackpotPermanentResultMPanel");
                        hide();
                     });
                  },false,true);
               }
               else
               {
                  Alarm2.show("浩瀚星核数量不足！");
               }
               break;
            case "gotoOtherBtn":
               ModuleManager.showAppModule("MarkJackpotTimeLimitMainPanel");
               this.hide();
               break;
            case "shopBtn":
               ModuleManager.showAppModule("MarkJackpotPermanentShopPanel","MarkJackpotPermanentMainPanel");
               this.hide();
         }
      }
      
      private function reBuy() : void
      {
         if(this._reBuyNum == 1)
         {
            AnimateManager.playMcAnimate(_mainUI,1,"playMc",function():void
            {
               CommonUI.setEnabled(_mainUI,false,false);
               sendCmd(_commdId,[1,1],function():void
               {
                  ModuleManager.showAppModule("MarkJackpotPermanentResultSPanel");
                  hide();
               });
            },false,true);
         }
         else if(this._reBuyNum == 10)
         {
            CommonUI.setEnabled(_mainUI,false,false);
            AnimateManager.playMcAnimate(_mainUI,1,"playMc",function():void
            {
               sendCmd(_commdId,[1,2],function():void
               {
                  ModuleManager.showAppModule("MarkJackpotPermanentResultMPanel");
                  hide();
               });
            },false,true);
         }
      }
      
      override protected function updatePanel() : void
      {
         var i:int;
         var addChouNum1:int;
         var frame:int;
         var curStates:int;
         var itemnum:int = 0;
         _mainUI.gotoOtherBtn.visible = ActivityTimeControl.getIsinTime(290);
         this._itemNumArr = new Array();
         for(i = 0; i < 2; i++)
         {
            itemnum = int(getValue("itemNum1_" + i));
            this._itemNumArr.push(itemnum);
            if(i == 1)
            {
               _mainUI["itemNumTx_" + i].text = String(itemnum) + "/1500";
            }
            else
            {
               _mainUI["itemNumTx_" + i].text = String(itemnum);
            }
         }
         ItemManager.updateLimititem(function():void
         {
            var num:Array = new Array();
            num[0] = ItemManager.getNumByID(2500004);
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
         this._commdId = getValue("comId")[0];
         addChouNum1 = int(getValue("addChouNum1"));
         _mainUI.numTx.text = String(addChouNum1);
         frame = addChouNum1 > 0 ? addChouNum1 : 1;
         _mainUI.barMc.gotoAndStop(frame);
         curStates = int(getValue("curStates"));
         if(curStates == 1)
         {
            this.hide();
            ModuleManager.showAppModule("MarkJackpotPermanentResultSPanel");
         }
         else if(curStates == 2)
         {
            this.hide();
            ModuleManager.showAppModule("MarkJackpotPermanentResultMPanel");
         }
         this.reBuy();
      }
      
      override public function hide() : void
      {
         this._itemNumArr = null;
         super.hide();
      }
   }
}

