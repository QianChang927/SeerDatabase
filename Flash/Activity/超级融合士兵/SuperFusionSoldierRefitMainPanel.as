package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   
   public class SuperFusionSoldierRefitMainPanel extends ActivityModel
   {
      private var daily_11922:int;
      
      private var forever_105816:int;
      
      private var forever_105816byte1:int;
      
      private var daily_11923:int;
      
      private var count:int;
      
      private var getNum:Array;
      
      private var getArrInfo:Array;
      
      public function SuperFusionSoldierRefitMainPanel()
      {
         this.getNum = [2,4,6,8,10];
         this.getArrInfo = [];
         super();
         resUrl = "2024/1227/SuperFusionSoldierRefitMainPanel";
         configUrl = "2024/1227/SuperFusionSoldierRefit";
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("1227超级融合士兵","进入【超级融合士兵】活动主界面","2024运营活动");
      }
      
      override protected function updatePanel() : void
      {
         this.daily_11922 = getValue("daily_11922");
         this.daily_11923 = getValue("daily_11923");
         this.forever_105816byte1 = getValue("forever_105816byte1");
         this.forever_105816 = getValue("forever_105816");
         this.getArrInfo = getValue("getArrInfo");
         this.updateDisplay();
      }
      
      private function updateDisplay() : void
      {
         var i:int;
         var k:int;
         this.count = 0;
         _ui["numTxt"].text = 3 - this.daily_11922 + "/3";
         _ui["countNum"].text = this.forever_105816byte1 + "/10";
         for(i = 1; i <= 5; i++)
         {
            if(KTool.getBit(this.forever_105816,i + 8) > 0)
            {
               ++this.count;
               _ui["getMc_" + i].gotoAndStop(3);
            }
            else if(this.forever_105816byte1 >= this.getNum[i - 1])
            {
               ++this.count;
               _ui["getMc_" + i].gotoAndStop(2);
            }
            else
            {
               _ui["getMc_" + i].gotoAndStop(1);
            }
         }
         if(this.count == 0)
         {
            _ui["aniMc"].gotoAndStop(1);
         }
         else
         {
            _ui["aniMc"].gotoAndStop(this.count);
         }
         for(k = 1; k <= 10; k++)
         {
            _ui["mc_" + k].gotoAndStop(this.getArrInfo[k - 1]);
         }
         if(this.forever_105816byte1 == 10)
         {
            _ui["mccc"].gotoAndStop(2);
         }
         else
         {
            _ui["mccc"].gotoAndStop(1);
            if(this.daily_11922 == 3 && KTool.getBit(this.daily_11923,25) == 0)
            {
               CommonUI.setEnabled(_ui["mccc"]["gotoBtn"],false);
            }
            else
            {
               CommonUI.setEnabled(_ui["mccc"]["gotoBtn"],true);
            }
         }
         if(this.daily_11922 == 3 && KTool.getBit(this.daily_11923,25) == 0)
         {
            CommonUI.setEnabled(_ui["plus"],true);
         }
         else
         {
            CommonUI.setEnabled(_ui["plus"],false);
         }
         if(BitBuffSetClass.getState(24555) == 0)
         {
            DialogControl.showAllDilogs(175,1).then(function():void
            {
               BitBuffSetClass.setState(24555,1);
            });
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
               ModuleManager.showAppModule("QianNianHeErKaZhiMiGoToMapPanel");
               break;
            case "plus":
               doAction("buyNum1").then(refresh);
               break;
            case "gotoBtn":
               if(this.forever_105816byte1 < 10)
               {
                  if(KTool.getBit(this.daily_11923,25) > 0)
                  {
                     hide();
                     ModuleManager.showAppModule("SuperFusionSoldierRefitS1Panel");
                  }
                  else if(this.daily_11922 >= 3)
                  {
                     Alarm2.show("今日融合次数不足！");
                  }
                  else
                  {
                     doAction("FlgeReq1",1).then(function():void
                     {
                        hide();
                        ModuleManager.showAppModule("SuperFusionSoldierRefitS1Panel");
                     });
                  }
               }
               else
               {
                  Alarm2.show("已经融合了足够多的超级士兵了！");
               }
               break;
            case "getRewardBtn_" + index:
               if(KTool.getBit(this.forever_105816,index + 8) == 0)
               {
                  if(this.forever_105816byte1 >= this.getNum[index - 1])
                  {
                     doAction("FlgeReq1",30 + index).then(refresh);
                  }
                  else
                  {
                     Alarm2.show("未达到融合进度要求，无法领取。");
                  }
               }
         }
      }
   }
}

