package com.robot.module.app
{
   import com.robot.app.control.YearVip2016Controller;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.VipMonthMonsterXMLInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.BaseModule;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   
   public class MonthlyPetIn2025Panel extends BaseModule
   {
      private var vipmonth:int;
      
      private var PET_ID:int = 0;
      
      private var MONTH_VIP_KEY:int = 0;
      
      private var MONTH_GIFT_KEY:int = 0;
      
      private var _vipCnt:int;
      
      private var _giftState:int;
      
      private var YEAR_MONTH_LIMIT:*;
      
      private var MONTH_LIMIT:*;
      
      private var _curIndex:int = 9;
      
      private var _page:int = 1;
      
      private var totalPage:int;
      
      private var txts:Array;
      
      private var _curIdx:int;
      
      public function MonthlyPetIn2025Panel()
      {
         this.YEAR_MONTH_LIMIT = [0,1,2];
         this.MONTH_LIMIT = [1,2,3];
         super();
         var curmonth:int = int(VipMonthMonsterXMLInfo.getMonthNum(this._curIndex));
         StatManager.sendStat2014("1227一月包月精灵","进入【" + curmonth + "月包月精灵】活动主界面","2024运营活动");
         resUrl = "update/monthlyPet/MonthlyPetIn2025Panel_" + curmonth;
      }
      
      override public function show() : void
      {
         this.update(this.supershow);
      }
      
      private function supershow() : void
      {
         super.show();
         _ui["sub"].visible = false;
         this.totalPage = _ui["sub"]["mc"].totalFrames - 1;
         eventCom.addClickEvent(_ui,this.clickHandle);
      }
      
      private function update(fun:Function = null, boo:Boolean = false) : void
      {
         var curmonth:int;
         this.YEAR_MONTH_LIMIT = VipMonthMonsterXMLInfo.getvipneed(this._curIndex);
         this.MONTH_LIMIT = VipMonthMonsterXMLInfo.getnotvipneed(this._curIndex);
         this.PET_ID = VipMonthMonsterXMLInfo.getPetid(this._curIndex);
         this.MONTH_VIP_KEY = VipMonthMonsterXMLInfo.getMonthVipKey(this._curIndex);
         curmonth = int(VipMonthMonsterXMLInfo.getMonthNum(this._curIndex));
         this.MONTH_GIFT_KEY = VipMonthMonsterXMLInfo.getPetForever(this._curIndex)[curmonth - 1];
         _ui.mouseChildren = _ui.mouseEnabled = false;
         KTool.getMultiValue([this.MONTH_GIFT_KEY],function(va:Array):void
         {
            KTool.getMultiValueByDB([MONTH_VIP_KEY],function(val:Array):void
            {
               var monthNeed:int = 0;
               var haveGet:Boolean = false;
               var canGet:Boolean = false;
               _giftState = va[0];
               _vipCnt = val[0];
               var needCnt:int = !!YearVip2016Controller.isYearVip ? 0 : 12 - _vipCnt;
               if(needCnt < 0)
               {
                  needCnt = 0;
               }
               for(var i:int = 0; i < 1; i++)
               {
                  monthNeed = !!YearVip2016Controller.isYearVip ? int(YEAR_MONTH_LIMIT[i]) : int(MONTH_LIMIT[i]);
                  haveGet = _giftState > i;
                  canGet = _vipCnt >= monthNeed && !haveGet;
                  _ui["btnmc_" + i].gotoAndStop(haveGet ? 2 : 1);
                  CommonUI.setEnabled(_ui["btnmc_" + i],canGet);
               }
               _ui.mouseChildren = _ui.mouseEnabled = true;
               if(fun != null)
               {
                  fun();
               }
            });
         });
      }
      
      private function clickHandle(e:MouseEvent) : void
      {
         var catchTm:int = 0;
         var v1:int = 0;
         var v2:int = 0;
         var tmpcurmonth:int = 0;
         var ename:String = e.target.name;
         var idx:int = int(ename.split("_")[1]);
         if(ename == "reward")
         {
            idx = 0;
            catchTm = 0;
            if(this._giftState > 0)
            {
               catchTm = int(KTool.getCatchTimeInBag([this.PET_ID]));
               if(catchTm == 0)
               {
                  Alert.show("请把" + PetXMLInfo.getName(this.PET_ID) + "放入出战背包！",function():void
                  {
                     PetBagControllerNew.showByBuffer();
                  });
                  return;
               }
            }
            _ui.mouseChildren = _ui.mouseEnabled = false;
            v1 = int(VipMonthMonsterXMLInfo.getMonthNum(this._curIndex));
            v2 = int(VipMonthMonsterXMLInfo.getCurrentYear(this._curIndex));
            SocketConnection.sendByQueue(42318,[idx + 1,v1,v2],function(e:*):void
            {
               update();
               _ui.mouseChildren = _ui.mouseEnabled = true;
            },function(err:*):void
            {
               _ui.mouseChildren = _ui.mouseEnabled = true;
            });
            return;
         }
         switch(ename)
         {
            case "close":
               this.hide();
               break;
            case "vip":
               YearVip2016Controller.urlToVip(this.update);
               break;
            case "year":
               this.hide();
               ModuleManager.showAppModule(YearVip2016Controller.curYearVipMainAppName);
               break;
            case "petInfoBtn":
               KTool.showPetInfoPanel(this.PET_ID);
               break;
            case "pclose":
               _ui["sub"].visible = false;
               break;
            case "tip":
               tmpcurmonth = int(VipMonthMonsterXMLInfo.getMonthNum(this._curIndex));
               StatManager.sendStat2014("1227" + tmpcurmonth + "月包月精灵","点击【查看】按钮","2024运营活动");
               this.showTip();
               break;
            case "pre":
               this.page -= 1;
               this.curIdx = this.page;
               break;
            case "next":
               this.page += 1;
               this.curIdx = this.page;
               break;
            case "pclose1":
               _ui["sub1"].visible = false;
               break;
            case "tip1":
               _ui["sub1"].visible = true;
               break;
            case "btn_" + idx:
               this.curIdx = idx;
               if(idx > 0)
               {
                  this.page = this.curIdx;
               }
         }
      }
      
      private function showTip() : void
      {
         this.curIdx = 1;
         _ui["sub"].visible = true;
         this.page = 1;
      }
      
      override public function hide() : void
      {
         this.txts = null;
         super.hide();
      }
      
      public function get page() : int
      {
         return this._page;
      }
      
      public function set page(value:int) : void
      {
         this._page = value;
         if(this.page > this.totalPage)
         {
            this._page = this.totalPage;
         }
         _ui["sub"]["mc"].gotoAndStop(this.page + 1);
         _ui["sub"]["page"].text = this.page + "/" + this.totalPage;
         _ui["sub"]["pre"].visible = this.page > 1;
         _ui["sub"]["next"].visible = this.page < this.totalPage;
      }
      
      public function get curIdx() : int
      {
         return this._curIdx;
      }
      
      public function set curIdx(value:int) : void
      {
         this._curIdx = value;
         _ui["sub"]["mc"].gotoAndStop(this.curIdx + 1);
         for(var j:int = 0; j < this.totalPage + 1; j++)
         {
            _ui["sub"]["btnmc_" + j].gotoAndStop(j == this.curIdx ? 2 : 1);
         }
         _ui["sub"]["page"].visible = this.curIdx != 0;
         _ui["sub"]["pre"].visible = this.curIdx != 0;
         _ui["sub"]["next"].visible = this.curIdx != 0;
      }
   }
}

