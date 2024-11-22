package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   
   public class BigShotRideSuitMainPanel extends ActivityModel
   {
      private var forever_124299:int;
      
      private var itemNum:int;
      
      private var daily_203162:int;
      
      public function BigShotRideSuitMainPanel()
      {
         super();
         resUrl = "2024/1122/BigShotRideSuitMainPanel";
         configUrl = "2024/1122/BigShotRideSuit";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this.forever_124299 = getValue("forever_124299");
         this.daily_203162 = getValue("daily_203162");
         this.itemNum = getValue("itemNum");
         if(!SystemTimerManager.getIsInActivity("2024112910","*"))
         {
            _ui["timeMc"].gotoAndStop(1);
         }
         else
         {
            _ui["timeMc"].gotoAndStop(2);
         }
         this.updateDisplay();
         if(BitBuffSetClass.getState(24522) == 0)
         {
            BitBuffSetClass.setState(24522,1);
            Alert.show("完成剧情《云霄星异动》后参与活动体验更加，是否前往完成主线任务？",function():void
            {
               hide();
               ModuleManager.showAppModule("MapStorySeriesGuide");
            });
         }
      }
      
      private function updateDisplay() : void
      {
         if(this.daily_203162 < 4)
         {
            _ui["mc"].gotoAndStop(1);
         }
         else
         {
            _ui["mc"].gotoAndStop(2);
         }
         _ui["numTxt"].text = this.itemNum;
         for(var i:int = 1; i <= 4; i++)
         {
            if(KTool.getBit(this.forever_124299,i) > 0)
            {
               _ui["flagBtn_" + i].visible = false;
            }
            else
            {
               _ui["flagBtn_" + i].visible = true;
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
               ModuleManager.showAppModule("MapStorySeriesGuide");
               break;
            case "gotoBtn":
               hide();
               ModuleManager.showAppModule("BigShotRideSuitS1Panel");
               break;
            case "plus":
               doAction("Buy_1").then(refresh);
               break;
            case "flagBtn_" + index:
               if(index == 2)
               {
                  if(this.itemNum >= 2)
                  {
                     doAction("FlgeReq1",index).then(refresh);
                  }
                  else
                  {
                     Alarm2.show("空气晶核不足！");
                  }
               }
               else if(this.itemNum >= 1)
               {
                  doAction("FlgeReq1",index).then(refresh);
               }
               else
               {
                  Alarm2.show("空气晶核不足！");
               }
         }
      }
   }
}

