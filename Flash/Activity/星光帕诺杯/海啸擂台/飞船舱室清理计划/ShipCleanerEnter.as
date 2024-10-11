package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm;
   
   public class ShipCleanerEnter extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      private var teamIdx:int;
      
      private var coinCnt:int;
      
      private var sumGetCoinArr:Array;
      
      public function ShipCleanerEnter()
      {
         super();
         resUrl = "2024/1011/ShipCleanerEnter";
         configUrl = "2024/1011/ShipCleanerConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         ui.txtCnt.text = "";
         ui.btnMc.gotoAndStop(1);
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
         var btnName:String;
         var index:int;
         if(!this.isStart)
         {
            return;
         }
         btnName = e.target.name;
         index = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               ModuleManager.showAppModule("XingGuangPaNuoBeiS1Panel");
               break;
            case "btnStart":
               if(this.teamIdx == 0)
               {
                  StatManager.sendStat2014("1011飞船舱室清洁计划","没有抽取队伍而出现弹窗提示","2024运营活动");
                  Alarm.show("您还没有进行帕诺杯分队，请前往分队！",function():*
                  {
                     ModuleManager.showAppModule("XingGuangPaNuoBeiMainPanel");
                     hide();
                  });
                  return;
               }
               ModuleManager.showAppModule("ShipCleanerSelect");
               this.hide();
               break;
            case "btnShop":
               ModuleManager.showAppModule("ShipCleanerStore");
               this.hide();
         }
      }
      
      override public function hide() : void
      {
         this.sumGetCoinArr = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         var hasInit:* = undefined;
         this.teamIdx = getValue("teamIdx");
         this.coinCnt = getValue("coinCnt");
         if(this.teamIdx != 0)
         {
            hasInit = getValue("hasInit");
            if(hasInit == 0)
            {
               doAction("Init").then(refresh);
               return;
            }
         }
         this.sumGetCoinArr = getValue("sumGetCoinArr");
      }
      
      private function updateDisplay() : void
      {
         ui.txtCnt.text = this.coinCnt;
         var hasInit:* = getValue("hasInit");
         if(hasInit > 0)
         {
            if(this.sumGetCoinArr[0] + this.sumGetCoinArr[1] == 210)
            {
               ui.btnMc.gotoAndStop(2);
            }
         }
      }
   }
}

