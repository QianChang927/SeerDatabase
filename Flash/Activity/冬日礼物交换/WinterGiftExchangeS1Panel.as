package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm2;
   
   public class WinterGiftExchangeS1Panel extends ActivityModel
   {
      private var m_randomNum1:int;
      
      private var m_randomNum2:int;
      
      private var m_randomNum3:int;
      
      private var curNum:int = 0;
      
      private var curStart:int = 1;
      
      public function WinterGiftExchangeS1Panel()
      {
         super();
         resUrl = "2024/1220/WinterGiftExchangeS1Panel";
         configUrl = "2024/1220/WinterGiftExchange";
      }
      
      override public function show() : void
      {
         super.show();
         this.m_randomNum1 = Math.ceil(Math.random() * 3);
         this.m_randomNum2 = Math.ceil(Math.random() * 3);
         this.m_randomNum3 = Math.ceil(Math.random() * 3);
      }
      
      override protected function updatePanel() : void
      {
         this.updateDisplay();
      }
      
      private function updateDisplay() : void
      {
         var i:int = 0;
         _ui["toDayMc1"].gotoAndStop(this.m_randomNum1);
         _ui["toDayMc2"].gotoAndStop(this.m_randomNum2);
         _ui["toDayMc3"].gotoAndStop(this.m_randomNum3);
         _ui["mc"].gotoAndStop(this.curStart);
         if(this.curStart >= 4)
         {
            _ui["close"].visible = false;
            if(this.m_randomNum2 == 1)
            {
               if(this.m_randomNum3 == 1)
               {
                  _ui["mc"]["mcc"].gotoAndStop(1);
               }
               else if(this.m_randomNum3 == 2)
               {
                  _ui["mc"]["mcc"].gotoAndStop(2);
               }
               else
               {
                  _ui["mc"]["mcc"].gotoAndStop(3);
               }
            }
            else if(this.m_randomNum2 == 2)
            {
               if(this.m_randomNum3 == 1)
               {
                  _ui["mc"]["mcc"].gotoAndStop(4);
               }
               else if(this.m_randomNum3 == 2)
               {
                  _ui["mc"]["mcc"].gotoAndStop(5);
               }
               else
               {
                  _ui["mc"]["mcc"].gotoAndStop(6);
               }
            }
            else if(this.m_randomNum3 == 1)
            {
               _ui["mc"]["mcc"].gotoAndStop(7);
            }
            else if(this.m_randomNum3 == 2)
            {
               _ui["mc"]["mcc"].gotoAndStop(8);
            }
            else
            {
               _ui["mc"]["mcc"].gotoAndStop(9);
            }
         }
         else
         {
            _ui["close"].visible = true;
            for(i = 1; i <= 3; i++)
            {
               if(i == this.curNum)
               {
                  _ui["mc"]["mc_" + i].gotoAndStop(2);
               }
               else
               {
                  _ui["mc"]["mc_" + i].gotoAndStop(1);
               }
            }
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               doAction("alert1").then(function():void
               {
                  hide();
                  ModuleManager.showAppModule("WinterGiftExchangeMainPanel");
               });
               break;
            case "okay_" + index:
               if(index == 1 || index == 2 || index == 3)
               {
                  if(this.curNum == 0)
                  {
                     Alarm2.show("请先选择要包装的礼物哦！");
                  }
                  else if(index == 1)
                  {
                     if(this.m_randomNum1 == this.curNum)
                     {
                        ++this.curStart;
                        this.curNum = 0;
                        refresh();
                     }
                     else
                     {
                        Alarm2.show("似乎不太符合要求，选择其他的试试吧。");
                     }
                  }
                  else if(index == 2)
                  {
                     if(this.m_randomNum2 == this.curNum)
                     {
                        ++this.curStart;
                        this.curNum = 0;
                        refresh();
                     }
                     else
                     {
                        Alarm2.show("似乎不太符合要求，选择其他的试试吧。");
                     }
                  }
                  else if(this.m_randomNum3 == this.curNum)
                  {
                     ++this.curStart;
                     this.curNum = 0;
                     refresh();
                  }
                  else
                  {
                     Alarm2.show("似乎不太符合要求，选择其他的试试吧。");
                  }
               }
               else
               {
                  Alarm2.show("礼物包装完成，节庆热度+10！");
                  doAction("FlgeReq1",3).then(function():void
                  {
                     hide();
                     ModuleManager.showAppModule("WinterGiftExchangeMainPanel");
                  });
               }
               break;
            case "getRewardBtn_" + index:
               if(this.curNum == 0)
               {
                  this.curNum = index;
               }
               else if(this.curNum == index)
               {
                  this.curNum = 0;
               }
               else
               {
                  this.curNum = index;
               }
               refresh();
         }
      }
   }
}

