package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   
   public class StarCafeStoryEnter extends ActivityModel
   {
      private var unlockArr:Array;
      
      private var isStart:Boolean = false;
      
      private var completedArr:Array;
      
      public function StarCafeStoryEnter()
      {
         this.unlockArr = [true,true,false,false,false,false];
         super();
         resUrl = "2024/0927/StarCafeStoryEnter";
         configUrl = "2024/0927/StarCafeEnter";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         var curTime:Number = Number(SystemTimerManager.sysBJDate.time);
         this.unlockArr[2] = curTime - new Date("09/29/2024").time > 0;
         this.unlockArr[3] = curTime - new Date("10/01/2024").time > 0;
         this.unlockArr[4] = curTime - new Date("10/03/2024").time > 0;
         this.unlockArr[5] = curTime - new Date("10/05/2024").time > 0;
         super.show();
         ui["mcBtn_" + 0].gotoAndStop(2);
      }
      
      private function onStart() : void
      {
         if(!this.isStart)
         {
            this.isStart = true;
         }
      }
      
      override protected function updatePanel() : void
      {
         this.updateData();
         this.onStart();
         this.updateDisplay();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var pName:String = null;
         var pIdx:int = 0;
         if(!this.isStart)
         {
            return;
         }
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               ModuleManager.showAppModule("StarCafeMainPanel");
               break;
            case "btnMemory":
               pName = e.target.parent.name;
               pIdx = int(pName.split("_")[1]);
               ModuleManager.showAppModule("AMultiStory",pIdx);
               switch(pIdx)
               {
                  case 0:
                     StatManager.sendStat2014("0927星缘咖啡厅内置剧情","回顾剧情《再次从零开始的咖啡厅》","2024运营活动");
                     break;
                  case 1:
                     StatManager.sendStat2014("0927星缘咖啡厅内置剧情","回顾剧情《经营咖啡店的必要会议》","2024运营活动");
                     break;
                  case 2:
                     StatManager.sendStat2014("0927星缘咖啡厅内置剧情","回顾剧情《正牌店长与代理店长》","2024运营活动");
                     break;
                  case 3:
                     StatManager.sendStat2014("0927星缘咖啡厅内置剧情","回顾剧情《采购员的烦恼》","2024运营活动");
                     break;
                  case 4:
                     StatManager.sendStat2014("0927星缘咖啡厅内置剧情","回顾剧情《其他的可能性》","2024运营活动");
                     break;
                  case 5:
                     StatManager.sendStat2014("0927星缘咖啡厅内置剧情","回顾剧情《都市传说与传说》","2024运营活动");
               }
               this.hide();
               break;
            case "btnGoto":
               pName = e.target.parent.name;
               pIdx = int(pName.split("_")[1]);
               ModuleManager.showAppModule("AMultiStory",pIdx);
               switch(pIdx)
               {
                  case 0:
                     StatManager.sendStat2014("0927星缘咖啡厅内置剧情","回顾剧情《再次从零开始的咖啡厅》","2024运营活动");
                     break;
                  case 1:
                     StatManager.sendStat2014("0927星缘咖啡厅内置剧情","开始剧情《经营咖啡店的必要会议》","2024运营活动");
                     break;
                  case 2:
                     StatManager.sendStat2014("0927星缘咖啡厅内置剧情","开始剧情《正牌店长与代理店长》","2024运营活动");
                     break;
                  case 3:
                     StatManager.sendStat2014("0927星缘咖啡厅内置剧情","开始剧情《采购员的烦恼》","2024运营活动");
                     break;
                  case 4:
                     StatManager.sendStat2014("0927星缘咖啡厅内置剧情","开始剧情《其他的可能性》","2024运营活动");
                     break;
                  case 5:
                     StatManager.sendStat2014("0927星缘咖啡厅内置剧情","开始剧情《都市传说与传说》","2024运营活动");
               }
               this.hide();
         }
      }
      
      override public function hide() : void
      {
         this.completedArr = null;
         this.unlockArr = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         this.completedArr = getValue("completedArr");
      }
      
      private function updateDisplay() : void
      {
         for(var i:int = 1; i <= 5; i++)
         {
            if(Boolean(ui["mcBtn_" + i]))
            {
               if(Boolean(this.unlockArr[i]))
               {
                  if(this.completedArr[i - 1] == 0)
                  {
                     ui["mcBtn_" + i].gotoAndStop(1);
                  }
                  else
                  {
                     ui["mcBtn_" + i].gotoAndStop(2);
                  }
               }
               else
               {
                  ui["mcBtn_" + i].gotoAndStop(3);
               }
            }
         }
      }
   }
}

