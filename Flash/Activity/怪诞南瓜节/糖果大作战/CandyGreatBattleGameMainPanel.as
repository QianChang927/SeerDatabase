package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm2;
   
   public class CandyGreatBattleGameMainPanel extends ActivityModel
   {
      private var forever_125155:int;
      
      private var forever_125156byte1:int;
      
      protected var curTime:Date;
      
      protected var leftDays:int;
      
      private var forever_125157:int;
      
      public function CandyGreatBattleGameMainPanel()
      {
         super();
         resUrl = "2024/1101/CandyGreatBattleGameMainPanel";
         configUrl = "2024/1101/CandyGreatBattleGame";
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("1101糖果大作战","进入【糖果大作战】主界面","2024运营活动");
      }
      
      override protected function updatePanel() : void
      {
         this.forever_125155 = getValue("forever_125155");
         this.forever_125156byte1 = getValue("forever_125156byte1");
         this.forever_125157 = getValue("forever_125157");
         this.curTime = SystemTimerManager.sysBJDate;
         this.leftDays = this.curTime.getDate();
         _ui["numTxt"].text = this.forever_125156byte1 + "/8";
         if(this.forever_125156byte1 == 8)
         {
            _ui["mc"].gotoAndStop(3);
         }
         else if(this.forever_125156byte1 >= this.leftDays)
         {
            _ui["mc"].gotoAndStop(4);
         }
         else if(this.forever_125157 == 0)
         {
            _ui["mc"].gotoAndStop(1);
         }
         else
         {
            _ui["mc"].gotoAndStop(2);
         }
         if(this.forever_125156byte1 < 1)
         {
            _ui["ani"].gotoAndStop(1);
         }
         else
         {
            _ui["ani"].gotoAndStop(this.forever_125156byte1);
         }
         for(var i:int = 1; i <= 8; i++)
         {
            if(KTool.getBit(this.forever_125155,i) > 0)
            {
               _ui["flag_" + i].visible = true;
               _ui["mc_" + i].gotoAndStop(2);
            }
            else
            {
               _ui["flag_" + i].visible = false;
               if(i <= this.forever_125156byte1)
               {
                  _ui["mc_" + i].gotoAndStop(2);
               }
               else
               {
                  _ui["mc_" + i].gotoAndStop(1);
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
               hide();
               ModuleManager.showAppModule("PumpkinFestivalGoToMapPanel");
               break;
            case "goBtn":
               doAction("FlgeReq1",0).then(function():void
               {
                  hide();
                  ModuleManager.showAppModule("CandyGreatBattleGameS1Panel");
               });
               break;
            case "goonBtn":
               hide();
               ModuleManager.showAppModule("CandyGreatBattleGameS1Panel");
               break;
            case "getBtn_" + index:
               if(KTool.getBit(this.forever_125155,index) == 0)
               {
                  if(this.forever_125156byte1 >= index)
                  {
                     doAction("FlgeReq1",index).then(refresh);
                  }
                  else
                  {
                     Alarm2.show("你还没有完成委托，无法领取！ ");
                  }
               }
         }
      }
   }
}

