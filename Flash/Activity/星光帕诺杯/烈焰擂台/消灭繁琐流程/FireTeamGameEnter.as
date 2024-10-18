package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   
   public class FireTeamGameEnter extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      private var cntCoin:int;
      
      private var teamIdx:int;
      
      private var State:int;
      
      public function FireTeamGameEnter()
      {
         super();
         resUrl = "2024/1018/FireTeamGameEnter";
         configUrl = "2024/1018/FireTeamGameConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         ui.txtCoin.text = "";
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
               ModuleManager.showAppModule("XingGuangPaNuoBeiS1Panel");
               this.hide();
               break;
            case "btnGoto":
               if(this.teamIdx == 0)
               {
                  StatManager.sendStat2014("1018消灭繁琐流程","没有抽取队伍而出现弹窗提示","2024运营活动");
                  Alarm.show("您还没有进行帕诺杯分队，请前往分队！",function():*
                  {
                     ModuleManager.showAppModule("XingGuangPaNuoBeiMainPanel");
                     hide();
                  });
                  return;
               }
               ModuleManager.showAppModule("ChaosReunionS1Panel");
               this.hide();
               break;
            case "btnStore":
               ModuleManager.showAppModule("FireTeamGameStore");
               this.hide();
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
      
      private function updateData() : void
      {
         this.cntCoin = getValue("cntCoin");
         this.State = getValue("State");
         this.teamIdx = getValue("teamIdx");
      }
      
      private function updateDisplay() : void
      {
         var Direction:* = undefined;
         var failTime:* = undefined;
         var curPos:* = undefined;
         var m_count:* = undefined;
         ui.txtCoin.text = this.cntCoin;
         if(this.State != 1)
         {
            Direction = getValue("Direction");
            failTime = getValue("failTime");
            curPos = getValue("CurPos");
            m_count = getValue("Count");
            if(curPos == 0 && m_count == 0 && Direction == 0)
            {
               ui.mcBtn.gotoAndStop(1);
            }
            else
            {
               ui.mcBtn.gotoAndStop(2);
            }
         }
         else
         {
            ui.mcBtn.gotoAndStop(1);
            CommonUI.setEnabled(ui.mcBtn,this.State != 1);
         }
      }
   }
}

