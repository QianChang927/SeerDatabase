package com.robot.module.app
{
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.utils.CommonUI;
   
   public class PumpkinGuessLevel extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      private var sumPlayTime:Array;
      
      private var hasCompletedArr:Array;
      
      private var SplayTime:Array;
      
      public function PumpkinGuessLevel()
      {
         this.sumPlayTime = [10,20,30,10,20,30,10,20,30];
         super();
         resUrl = "2024/1101/PumpkinGuessLevel";
         configUrl = "2024/1101/PumpkinGuessConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         var j:int = 0;
         super.show();
         CommonUI.setEnabled(ui.btn_1_3,false);
         CommonUI.setEnabled(ui.btn_2_3,false);
         CommonUI.setEnabled(ui.btn_3_3,false);
         for(var i:int = 1; i <= 3; i++)
         {
            for(j = 1; j <= 3; j++)
            {
               if(Boolean(ui["sign_" + i + "_" + j]))
               {
                  ui["sign_" + i + "_" + j].mouseEnabled = ui["sign_" + i + "_" + j].mouseChildren = false;
                  ui["sign_" + i + "_" + j].gotoAndStop(1);
               }
            }
         }
      }
      
      private function onStart() : void
      {
         var buffId:int = 0;
         if(!this.isStart)
         {
            this.isStart = true;
            buffId = 24512;
            if(BitBuffSetClass.getState(buffId) == 0)
            {
               DialogControl.showAllDilogs(164,1).then(function():void
               {
                  BitBuffSetClass.setState(buffId,1);
               });
               return;
            }
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
         var index:int = 0;
         var index2:int = 0;
         if(!this.isStart)
         {
            return;
         }
         btnName = e.target.name;
         index = int(btnName.split("_")[1]);
         index2 = 0;
         if(btnName.split("_").length >= 3)
         {
            index2 = int(btnName.split("_")[2]);
         }
         switch(btnName)
         {
            case "close":
               ModuleManager.showAppModule("PumpkinGuessEnter");
               this.hide();
               break;
            case "btn_" + index + "_" + index2:
               doAction("StartGame",(index2 - 1) * 3 + index).then(function():void
               {
                  ModuleManager.showAppModule("PumpkinGuessGame",[index,index2,SplayTime[(index - 1) * 3 + index2 - 1],sumPlayTime[(index - 1) * 3 + index2 - 1]]);
                  hide();
               });
         }
      }
      
      override public function hide() : void
      {
         this.hasCompletedArr = null;
         this.SplayTime = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         this.hasCompletedArr = getValue("hasCompletedArr");
         this.SplayTime = getValue("SplayTime");
      }
      
      private function updateDisplay() : void
      {
         var j:int = 0;
         for(var i:int = 1; i <= 3; i++)
         {
            for(j = 1; j <= 3; j++)
            {
               if(this.hasCompletedArr[(i - 1) * 3 + j - 1] == 1)
               {
                  CommonUI.setEnabled(ui["btn_" + i + "_" + j],false);
                  ui["sign_" + i + "_" + j].gotoAndStop(2);
               }
               if(Boolean(ui["txtPlay_" + i + "_" + j]))
               {
                  ui["txtPlay_" + i + "_" + j].text = this.SplayTime[(i - 1) * 3 + j - 1] + "/" + this.sumPlayTime[(i - 1) * 3 + j - 1];
               }
            }
         }
      }
   }
}

