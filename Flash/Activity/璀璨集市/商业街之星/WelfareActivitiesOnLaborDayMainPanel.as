package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   
   public class WelfareActivitiesOnLaborDayMainPanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _surplusNum:int;
      
      private var _rongyuNum:int;
      
      private var _reuqireNumArr:Array;
      
      private var _curValue:int;
      
      public function WelfareActivitiesOnLaborDayMainPanel()
      {
         super();
         resUrl = "2021/0430/WelfareActivitiesOnLaborDayMainPanel";
         configUrl = "2021/0430/welfareActivitiesOnLaborDay";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("0928东辉的委托","进入活动主界面","2023运营活动");
         _mainUI.tipsMc.visible = false;
         if(BitBuffSetClass.getState(24474) == 0)
         {
            DialogControl.showAllDilogs(145,1).then(function():void
            {
               BitBuffSetClass.setState(24474,1);
            });
         }
         StatManager.sendStat2014("0430劳动节福利活动","打开劳动节福利活动面板","2021运营活动");
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
               ModuleManager.showAppModule("NationalDayActivityGoToMapPanel");
               break;
            case "exchangeBtn_" + index:
               if(this._rongyuNum >= this._reuqireNumArr[index])
               {
                  sendCmd(this._commdId,[6,index + 1],function():void
                  {
                     refresh();
                  });
               }
               else
               {
                  Alarm2.show("所需荣誉点不足！");
               }
               break;
            case "close":
               _mainUI.tipsMc.visible = false;
               break;
            case "chooseBtn":
               StatManager.sendStat2014("0430劳动节福利活动","打开了游戏面板","2021运营活动");
               sendCmd(this._commdId,[7,index1 + 1],function():void
               {
                  hide();
                  ModuleManager.showAppModule("WelfareActivitiesOnLaborDayGamePanel");
               });
               break;
            case "startBtn":
               _mainUI.tipsMc.visible = true;
               break;
            case "goonBtn":
               this.hide();
               ModuleManager.showAppModule("WelfareActivitiesOnLaborDayGamePanel");
               break;
            case "getBtn":
               this.hide();
               ModuleManager.showAppModule("WelfareActivitiesOnLaborDayExchangePanel");
         }
      }
      
      override protected function updatePanel() : void
      {
         this._commdId = getValue("comId")[0];
         this._reuqireNumArr = getValue("reuqireNumArr");
         this._curValue = getValue("curValue");
         var forever_107803:int = int(getValue("forever_107803"));
         this._rongyuNum = KTool.subByte(forever_107803,0,16);
         _mainUI.num1.text = String(this._curValue);
         var daily_12729:int = int(getValue("daily_12729"));
         var zhuanhuaNum:uint = uint(getValue("daily_207054"));
         this._surplusNum = 5 - zhuanhuaNum;
         _mainUI.surplusNumTx.text = String(this._surplusNum) + "/5";
         for(var i:int = 1; i < 5; i++)
         {
            if(BitUtils.getBit(forever_107803,23 + i) > 0)
            {
               _mainUI.tipsMc["btnMc_" + i].gotoAndStop(1);
            }
            else
            {
               _mainUI.tipsMc["btnMc_" + i].gotoAndStop(2);
            }
         }
         var daily_12730:int = int(getValue("daily_12730"));
         var curPlayerIndex:int = int(KTool.subByte(daily_12730,0,4));
         if(curPlayerIndex > 0)
         {
            _mainUI.btnMc.gotoAndStop(2);
         }
         else
         {
            _mainUI.btnMc.gotoAndStop(1);
            if(zhuanhuaNum == 5)
            {
               CommonUI.setEnabled(_ui["btnMc"]["startBtn"],false);
            }
            else
            {
               CommonUI.setEnabled(_ui["btnMc"]["startBtn"],true);
            }
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

