package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetJackpotXmlInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class PetJackpotMainPanel extends ActivityModel
   {
      private var _commdId:int = 45788;
      
      private var _curIndex:int;
      
      private var _requireNumArr:Array;
      
      private var _canGetNumArr:Array;
      
      private var _surplusTime:int;
      
      private var _curPage:int = 0;
      
      private var _curPetIndex:int = -1;
      
      private var _curPetId:int;
      
      private var _appNameArr:Array;
      
      public function PetJackpotMainPanel()
      {
         this._appNameArr = ["PetJackpotStarRecruitPanel","PetJackpotVientianeRecruitPanel"];
         super();
         resUrl = "update/petJackpot/PetJackpotMainPanel";
         configUrl = "update/petJackpot/petJackpotConfig";
      }
      
      private static function getPetIcon(petId:int, iconContainer:MovieClip) : void
      {
         var icon:DisplayObject = KTool.getIcon(ClientConfig.getPetHeadPath(petId),100,new Point(0,0));
         icon.x = 0;
         icon.y = 0;
         DisplayUtil.removeAllChild(iconContainer);
         iconContainer.addChild(icon);
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         var i:int = 0;
         var obj:Object = null;
         var obj1:Object = null;
         if(!ActivityTimeControl.getIsinTime(288) && !ActivityTimeControl.getIsinTime(289))
         {
            this.hide();
            ModuleManager.showAppModule(this._appNameArr[0]);
            return;
         }
         super.show();
         _mainUI["tipsMc_" + 0].visible = false;
         _mainUI["tipsMc_" + 1].visible = false;
         var arr1:Array = PetJackpotXmlInfo.getLimitPets(1);
         var arr2:Array = PetJackpotXmlInfo.getLimitPets(2);
         for(i = 0; i < arr1.length; i++)
         {
            obj = arr1[i] as Object;
            _mainUI["tipsMc_" + 0]["headMc_" + i].petNameTx.text = PetXMLInfo.getName(obj.monsterid);
            getPetIcon(obj.monsterid,_mainUI["tipsMc_" + 0]["headMc_" + i].head.icon);
         }
         for(i = 0; i < arr2.length; i++)
         {
            obj1 = arr2[i] as Object;
            _mainUI["tipsMc_" + 0]["head1Mc_" + i].petNameTx.text = PetXMLInfo.getName(obj1.monsterid);
            getPetIcon(obj1.monsterid,_mainUI["tipsMc_" + 0]["head1Mc_" + i].head.icon);
         }
         if(ActivityTimeControl.getIsinTime(288))
         {
            _mainUI.limitMc.gotoAndStop(1);
         }
         else
         {
            _mainUI.limitMc.gotoAndStop(2);
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
               break;
            case "close_0":
               _mainUI["tipsMc_" + 0].visible = false;
               break;
            case "close_1":
               _mainUI["tipsMc_" + 1].visible = false;
               break;
            case "getBtn":
               if(!ActivityTimeControl.getIsinTime(288) && !ActivityTimeControl.getIsinTime(289))
               {
                  Alarm2.show("限定活动未开启，敬请期待！");
                  return;
               }
               this._curIndex = index1;
               this._curPetIndex = -1;
               this.showTipsMc_1();
               break;
            case "preBtn":
               --this._curPage;
               this._curPetIndex = -1;
               this.showTipsMc_1();
               break;
            case "nextBtn":
               ++this._curPage;
               this._curPetIndex = -1;
               this.showTipsMc_1();
               break;
            case "checkBtn":
               this._curPetIndex = index1 + this._curPage * 12;
               this.updateTipsMc_1();
               break;
            case "okChooseBtn":
               if(this._curPetIndex >= 0)
               {
                  sendCmd(this._commdId,[1,this._curPetId],function():void
                  {
                     refresh();
                     _mainUI["tipsMc_" + 1].visible = false;
                  });
               }
               else
               {
                  Alarm2.show("请先选中需要获得的精灵！");
               }
               break;
            case "ruleBtn":
               this.hide();
               ModuleManager.showAppModule("PetJackpotRuleDecPanel","PetJackpotMainPanel");
               break;
            case "exchangeBtn":
               this.hide();
               ModuleManager.showAppModule("PetJackpotEnergySupplyPanel","PetJackpotMainPanel");
               break;
            case "noticeBtn":
               _mainUI["tipsMc_" + 0].visible = true;
               break;
            case "gotoBtn_" + index:
               this.hide();
               ModuleManager.showAppModule(this._appNameArr[index]);
         }
      }
      
      private function updateTipsMc_1() : void
      {
         var arr:Array = null;
         var obj:Object = null;
         if(this._curIndex < 3)
         {
            arr = PetJackpotXmlInfo.getPetsByLv(3 - this._curIndex);
         }
         else if(ActivityTimeControl.getIsinTime(288))
         {
            arr = PetJackpotXmlInfo.getLimitPets(1);
         }
         else if(ActivityTimeControl.getIsinTime(289))
         {
            arr = PetJackpotXmlInfo.getLimitPets(2);
         }
         for(var i:int = 0; i < 12; i++)
         {
            CommonUI.setEnabled(_mainUI["tipsMc_" + 1]["headMc_" + i],true,false);
            obj = arr[i + this._curPage * 12] as Object;
            _mainUI["tipsMc_" + 1]["headMc_" + i].gotoAndStop(1);
            if(i + this._curPage * 12 < arr.length)
            {
               if(this._curPetIndex == i + this._curPage * 12)
               {
                  _mainUI["tipsMc_" + 1]["headMc_" + i].gotoAndStop(2);
                  this._curPetId = obj.monsterid;
               }
            }
         }
      }
      
      private function showTipsMc_1() : void
      {
         PetManager.upDate(function():void
         {
            var arr:Array = null;
            var obj:Object = null;
            if(_curIndex < 3)
            {
               arr = PetJackpotXmlInfo.getPetsByLv(3 - _curIndex);
            }
            else if(ActivityTimeControl.getIsinTime(288))
            {
               arr = PetJackpotXmlInfo.getLimitPets(1);
            }
            else if(ActivityTimeControl.getIsinTime(289))
            {
               arr = PetJackpotXmlInfo.getLimitPets(2);
            }
            CommonUI.setEnabled(_mainUI["tipsMc_" + 1].preBtn,true,false);
            CommonUI.setEnabled(_mainUI["tipsMc_" + 1].nextBtn,true,false);
            if(_curPage == 0)
            {
               CommonUI.setEnabled(_mainUI["tipsMc_" + 1].preBtn,false,true);
            }
            var maxNum:int = Math.ceil(arr.length / 12) - 1;
            maxNum = maxNum <= 0 ? 0 : maxNum;
            if(_curPage == maxNum)
            {
               CommonUI.setEnabled(_mainUI["tipsMc_" + 1].nextBtn,false,true);
            }
            for(var i:int = 0; i < 12; i++)
            {
               CommonUI.setEnabled(_mainUI["tipsMc_" + 1]["headMc_" + i],true,false);
               obj = arr[i + _curPage * 12] as Object;
               _mainUI["tipsMc_" + 1]["headMc_" + i].gotoAndStop(1);
               if(i + _curPage * 12 < arr.length)
               {
                  if(_curPetIndex == i + _curPage * 12)
                  {
                     _mainUI["tipsMc_" + 1]["headMc_" + i].gotoAndStop(2);
                     _curPetId = obj.monsterid;
                  }
                  _mainUI["tipsMc_" + 1]["headMc_" + i].visible = true;
                  _mainUI["tipsMc_" + 1]["headMc_" + i].petNameTx.text = PetXMLInfo.getName(obj.monsterid);
                  getPetIcon(obj.monsterid,_mainUI["tipsMc_" + 1]["headMc_" + i].head.icon);
                  if(PetManager.hasPetContainLove(obj.monsterid))
                  {
                     _mainUI["tipsMc_" + 1]["headMc_" + i].flagMc.visible = false;
                     if(obj.isjustone > 0)
                     {
                        CommonUI.setEnabled(_mainUI["tipsMc_" + 1]["headMc_" + i],false,true);
                        _mainUI["tipsMc_" + 1]["headMc_" + i].flagMc.visible = true;
                     }
                  }
                  else
                  {
                     _mainUI["tipsMc_" + 1]["headMc_" + i].flagMc.visible = false;
                  }
               }
               else
               {
                  _mainUI["tipsMc_" + 1]["headMc_" + i].visible = false;
               }
            }
            _mainUI["tipsMc_" + 1].visible = true;
         });
      }
      
      override protected function updatePanel() : void
      {
         var i:int = 0;
         var getPetNum:int = 0;
         var allGetNum:int = 0;
         var canGetNum:int = 0;
         var maybeNum:int = 0;
         var addNum:int = 0;
         for(i = 0; i < 2; i++)
         {
            addNum += getValue("payNum_" + i);
         }
         _mainUI.alladdNumTx.text = String(addNum);
         var getNumArr:Array = [];
         for(i = 0; i < 4; i++)
         {
            getPetNum = int(getValue("getPetNum_" + i));
            getNumArr.push(getPetNum);
         }
         this._requireNumArr = getValue("requireNumArr");
         this._canGetNumArr = new Array();
         for(i = 0; i < 4; i++)
         {
            if(addNum % 300 != 0)
            {
               allGetNum = addNum % 300 >= this._requireNumArr[i] ? int(addNum / 300) + 1 : int(addNum / 300);
            }
            else
            {
               allGetNum = int(addNum / 300);
            }
            this._canGetNumArr.push(allGetNum - getNumArr[i]);
         }
         if(addNum >= 300)
         {
            canGetNum = 0;
            canGetNum = this._canGetNumArr[0] + this._canGetNumArr[1] + this._canGetNumArr[2] + this._canGetNumArr[3];
            if(addNum % 300 != 0)
            {
               maybeNum = addNum % 300 >= this._requireNumArr[0] ? 1 : 0;
               if(this.isHvaeRewardNotGet(addNum,0) || this.isHvaeRewardNotGet(addNum,1) || this.isHvaeRewardNotGet(addNum,2) || this.isHvaeRewardNotGet(addNum,3))
               {
                  _mainUI.barMc.gotoAndStop(300);
               }
               else
               {
                  _mainUI.barMc.gotoAndStop(addNum % 300);
               }
            }
            else
            {
               _mainUI.barMc.gotoAndStop(canGetNum > 0 ? 300 : 1);
            }
         }
         else
         {
            _mainUI.barMc.gotoAndStop(addNum);
         }
         for(i = 0; i < 4; i++)
         {
            if(this._canGetNumArr[i] == 0 && getNumArr[i] > 0 && _mainUI.barMc.currentFrame >= this._requireNumArr[i])
            {
               _mainUI.barMc["boxMc_" + i].gotoAndStop(3);
            }
            else if(_mainUI.barMc.currentFrame >= this._requireNumArr[i])
            {
               _mainUI.barMc["boxMc_" + i].gotoAndStop(2);
            }
            else
            {
               _mainUI.barMc["boxMc_" + i].gotoAndStop(1);
            }
         }
         this.updateTime();
      }
      
      private function isHvaeRewardNotGet(addNum:int, index:int) : Boolean
      {
         var maybeNum:int = addNum % 300 >= this._requireNumArr[index] ? 1 : 0;
         if(this._canGetNumArr[index] > maybeNum)
         {
            return true;
         }
         return false;
      }
      
      private function onTimer() : void
      {
         --this._surplusTime;
         if(this._surplusTime <= 0)
         {
            this.updateTime();
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
      
      private function updateTime() : void
      {
         if(ActivityTimeControl.getIsinTime(288))
         {
            this._surplusTime = ActivityTimeControl.getSurplusTime(288);
            SystemTimerManager.addTickFun(this.onTimer);
         }
         else if(ActivityTimeControl.getIsinTime(289))
         {
            this._surplusTime = ActivityTimeControl.getSurplusTime(289);
            SystemTimerManager.addTickFun(this.onTimer);
         }
         else
         {
            this.getTimeClockString(0);
            SystemTimerManager.removeTickFun(this.onTimer);
         }
      }
      
      override public function hide() : void
      {
         SystemTimerManager.removeTickFun(this.onTimer);
         super.hide();
      }
   }
}

