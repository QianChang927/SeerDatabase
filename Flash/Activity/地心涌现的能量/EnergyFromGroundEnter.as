package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   
   public class EnergyFromGroundEnter extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      private var taskScore:int;
      
      private var taskCnt:int;
      
      private var isStartState:int;
      
      private var GotPrizeArr1:Array;
      
      private var GotPrizeArr2:Array;
      
      private var scoreStageArr:Array;
      
      private var cntStageArr:Array;
      
      public function EnergyFromGroundEnter()
      {
         this.scoreStageArr = [200,400,600,800,1000];
         this.cntStageArr = [5,10,15,20,25];
         super();
         resUrl = "2024/1115/EnergyFromGroundEnter";
         configUrl = "2024/1115/EnergyFromGroundConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      private function onStart() : void
      {
         if(!this.isStart)
         {
            this.isStart = true;
            StatManager.sendStat2014("1115地心涌现的能量","打开了地心涌现的能量主面板","2024运营活动");
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
         var pBtnName:String = null;
         var pIndex:int = 0;
         if(!this.isStart)
         {
            return;
         }
         btnName = e.target.name;
         index = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               ModuleManager.showAppModule("Vip15thCollectionPanel");
               this.hide();
               break;
            case "btnGoto":
               StatManager.sendStat2014("1115地心涌现的能量","打开了地心涌现的能量游戏面板","2024运营活动");
               if(this.isStartState == 0)
               {
                  doAction("StartGame").then(function():void
                  {
                     ModuleManager.showAppModule("EnergyFromGroundGame");
                     hide();
                  });
               }
               else
               {
                  ModuleManager.showAppModule("EnergyFromGroundGame");
                  this.hide();
               }
               break;
            case "btnGet":
               pBtnName = e.target.parent.name;
               pIndex = int(pBtnName.split("_")[1]);
               if(pBtnName.indexOf("tsMc_") >= 0)
               {
                  SocketConnection.sendWithPromise(41950,[64,pIndex]).then(function():void
                  {
                     refresh();
                  });
               }
               else if(pBtnName.indexOf("tcMc_") >= 0)
               {
                  SocketConnection.sendWithPromise(41950,[64,5 + pIndex]).then(function():void
                  {
                     refresh();
                  });
               }
         }
      }
      
      override public function hide() : void
      {
         this.scoreStageArr = null;
         this.cntStageArr = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         this.taskScore = getValue("taskScore");
         this.taskCnt = getValue("taskCnt");
         this.isStartState = getValue("isStartState");
         this.GotPrizeArr1 = getValue("GotPrizeArr1");
         this.GotPrizeArr2 = getValue("GotPrizeArr2");
      }
      
      private function updateDisplay() : void
      {
         ui.txtScore.text = this.taskScore;
         ui.txtCnt.text = this.taskCnt;
         ui.barScore.gotoAndStop(int(100 * this.taskScore / this.scoreStageArr[4]));
         ui.barCnt.gotoAndStop(int(100 * this.taskCnt / this.cntStageArr[4]));
         for(var i:int = 1; i <= 5; i++)
         {
            ui["tsMc_" + i].visible = false;
            ui["tcMc_" + i].visible = false;
            if(this.taskScore >= this.scoreStageArr[i - 1])
            {
               ui["tsMc_" + i].visible = true;
               ui["tsMc_" + i].gotoAndStop(this.GotPrizeArr1[i - 1] == 1 ? 2 : 1);
            }
            if(this.taskCnt >= this.cntStageArr[i - 1])
            {
               ui["tcMc_" + i].visible = true;
               ui["tcMc_" + i].gotoAndStop(this.GotPrizeArr2[i - 1] == 1 ? 2 : 1);
            }
         }
      }
   }
}

