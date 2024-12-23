package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CommonUI;
   
   public class WinterGiftExchangeMainPanel extends ActivityModel
   {
      private var forever_140001:int;
      
      private var forever_140002:int;
      
      private var daily_210500:int;
      
      public function WinterGiftExchangeMainPanel()
      {
         super();
         resUrl = "2024/1220/WinterGiftExchangeMainPanel";
         configUrl = "2024/1220/WinterGiftExchange";
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("1220冬日礼物交换","打开活动主面板","2024运营活动");
         _ui["page"].visible = false;
         sendCmd(45900,[3,1],function():void
         {
            sendCmd(45900,[3,2],function():void
            {
            });
         });
      }
      
      override protected function updatePanel() : void
      {
         this.forever_140001 = getValue("forever_140001");
         this.forever_140002 = getValue("forever_140002");
         this.daily_210500 = getValue("daily_210500");
         KTool.getGlobalValues(289,[1],function(arr:Array):void
         {
            _ui["allNum"].text = arr[0];
         });
         this.updateDisplay();
      }
      
      private function updateDisplay() : void
      {
         _ui["personNum"].text = this.forever_140001;
         if(KTool.getBit(this.daily_210500,2) == 0)
         {
            _ui["mc2"].gotoAndStop(1);
         }
         else
         {
            _ui["mc2"].gotoAndStop(2);
            CommonUI.setEnabled(_ui["mc2"]["mccc"],false);
            if(SystemTimerManager.getIsInActivity("20241227","*"))
            {
               _ui["mc2"]["tips"].visible = false;
            }
         }
         if(KTool.getBit(this.daily_210500,1) == 0)
         {
            _ui["mc1"].gotoAndStop(1);
         }
         else
         {
            _ui["mc1"].gotoAndStop(2);
            CommonUI.setEnabled(_ui["mc1"]["mccc"],false);
            if(SystemTimerManager.getIsInActivity("20241227","*"))
            {
               _ui["mc1"]["tips"].visible = false;
            }
         }
         if(this.forever_140002 != 0)
         {
            _ui["mc"].gotoAndStop(3);
         }
         else if(this.forever_140001 >= 50)
         {
            _ui["mc"].gotoAndStop(2);
         }
         else
         {
            _ui["mc"].gotoAndStop(1);
         }
         if(SystemTimerManager.getIsInActivity("2024122311","*"))
         {
            _ui["treeMc"].gotoAndStop(3);
         }
         else if(SystemTimerManager.getIsInActivity("2024122118","*"))
         {
            _ui["treeMc"].gotoAndStop(2);
         }
         else
         {
            _ui["treeMc"].gotoAndStop(1);
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               break;
            case "getBtn":
               doAction("FlgeReq1",5).then(refresh);
               break;
            case "receiveBtn":
               doAction("FlgeReq1",4).then(refresh);
               break;
            case "packageBtn":
               hide();
               ModuleManager.showAppModule("WinterGiftExchangeS1Panel");
               break;
            case "lookBtn":
               _ui["page"].visible = true;
               break;
            case "pageClose":
               _ui["page"].visible = false;
         }
      }
   }
}

