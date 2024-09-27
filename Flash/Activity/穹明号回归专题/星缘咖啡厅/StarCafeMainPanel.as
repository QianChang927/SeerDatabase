package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   
   public class StarCafeMainPanel extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      private var isInit:int;
      
      private var coinCnt:int;
      
      private var hotCnt:int;
      
      private var storyArr:Array;
      
      private var curStoryId:int;
      
      private var hasInited:Boolean = false;
      
      public function StarCafeMainPanel()
      {
         super();
         resUrl = "2024/0927/StarCafeMainPanel";
         configUrl = "2024/0927/StarCafeConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         ui.txtHot.text = "";
         ui.txtCoin.text = "";
         StatManager.sendStat2014("0927星缘咖啡厅","打开了星缘咖啡厅主面板","2024运营活动");
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
               ModuleManager.showAppModule("QiongMingHaoGoToMapPanel");
               break;
            case "goto_" + index:
               if(this.hasInited == false)
               {
                  return;
               }
               switch(index)
               {
                  case 1:
                     StatManager.sendStat2014("0927星缘咖啡厅","点击了【日常故事】按钮","2024运营活动");
                     ModuleManager.showAppModule("StarCafeStoryEnter");
                     break;
                  case 2:
                     StatManager.sendStat2014("0927星缘咖啡厅","点击了【经营指南】按钮","2024运营活动");
                     ModuleManager.showAppModule("StarCafeSocialPanel");
                     break;
                  case 3:
                     StatManager.sendStat2014("0927星缘咖啡厅","点击了【市场采购】按钮","2024运营活动");
                     ModuleManager.showAppModule("StarCafeMarketPanel");
                     break;
                  case 4:
                     StatManager.sendStat2014("0927星缘咖啡厅","点击了【餐饮时间】按钮","2024运营活动");
                     ModuleManager.showAppModule("StarCafeDrinkPanel");
                     break;
                  case 5:
                     StatManager.sendStat2014("0927星缘咖啡厅","点击了【咖语礼赠】按钮","2024运营活动");
                     ModuleManager.showAppModule("StarCafeAchievePanel");
               }
               this.hide();
               break;
         }
      }
      
      override public function hide() : void
      {
         this.storyArr = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         var i:int;
         this.isInit = getValue("isInit");
         this.coinCnt = getValue("coinCnt");
         this.hotCnt = getValue("hotCnt");
         this.storyArr = getValue("storyArr");
         if(this.isInit == 0)
         {
            doAction("Init").always(function():void
            {
               hasInited = true;
            });
         }
         else
         {
            this.hasInited = true;
         }
         this.curStoryId = 0;
         for(i = 0; i < this.storyArr.length; i++)
         {
            this.curStoryId += this.storyArr[i];
         }
      }
      
      private function updateDisplay() : void
      {
         ui.txtHot.text = this.hotCnt;
         ui.txtCoin.text = this.coinCnt;
      }
   }
}

