package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   
   public class WelfareActivitiesOnLaborDayExchangePanel extends ActivityModel
   {
      private var _indexArr:Array;
      
      private var _countArr:Array;
      
      private var subValue:Array;
      
      private var _curValue:int;
      
      public function WelfareActivitiesOnLaborDayExchangePanel()
      {
         this._indexArr = [1,5,5,5,5,5,5];
         this._countArr = [250,75,25,15,75,15,45];
         this.subValue = [];
         super();
         resUrl = "2021/0430/WelfareActivitiesOnLaborDayExchangePanel";
         configUrl = "2021/0430/welfareActivitiesOnLaborDay";
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("0928东辉的委托","进入信任奖励界面","2023运营活动");
      }
      
      override protected function updatePanel() : void
      {
         this.subValue = getValue("subValue");
         this._curValue = getValue("curValue");
         _mainUI.numTxt.text = String(this._curValue);
         for(var i:int = 1; i <= 7; i++)
         {
            _ui["txtCount_" + i].mouseEnabled = false;
            _ui["numTx_" + i].text = this.subValue[i - 1] + "/" + this._indexArr[i - 1];
            if(this.subValue[i - 1] >= this._indexArr[i - 1])
            {
               _ui["flagMc_" + i].visible = true;
               CommonUI.setEnabled(_ui["exchangeBtn_" + i],false);
            }
            else
            {
               _ui["flagMc_" + i].visible = false;
               CommonUI.setEnabled(_ui["exchangeBtn_" + i],true);
            }
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "closeBtn":
               hide();
               ModuleManager.showAppModule("WelfareActivitiesOnLaborDayMainPanel");
               break;
            case "exchangeBtn_" + index:
               if(this._curValue >= this._countArr[index - 1])
               {
                  sendCmd(41285,[6,index],function():void
                  {
                     refresh();
                  });
               }
               else
               {
                  Alarm2.show("友情点数不足，无法兑换！");
               }
         }
      }
   }
}

