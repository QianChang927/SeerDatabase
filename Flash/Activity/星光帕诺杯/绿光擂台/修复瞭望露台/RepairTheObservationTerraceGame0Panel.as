package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   
   public class RepairTheObservationTerraceGame0Panel extends ActivityModel
   {
      private var state:int;
      
      private var lastItemNum:int = -1;
      
      public function RepairTheObservationTerraceGame0Panel()
      {
         super();
         resUrl = "2024/1025/RepairTheObservationTerraceGame0Panel";
         configUrl = "2024/1025/repairTheObservationTerraceConfig";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1025修补逃生舱","打开电能运转面板","2019运营活动");
         super.show();
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         if(data != null)
         {
            this.lastItemNum = data as int;
         }
      }
      
      override protected function updatePanel() : void
      {
         this.state = getValue("State");
         var teamNameArr:Array = getValue("teamNameArr");
         var forever_108523:int = int(getValue("forever_108523"));
         if(KTool.getBit(this.state,11) == 1)
         {
            _ui["flag1"].visible = true;
            CommonUI.setEnabled(_ui["btn_1"],false);
         }
         else
         {
            _ui["flag1"].visible = false;
            CommonUI.setEnabled(_ui["btn_1"],true);
         }
         if(KTool.getBit(this.state,12) == 1)
         {
            _ui["flag2"].visible = true;
            CommonUI.setEnabled(_ui["btn_2"],false);
         }
         else
         {
            _ui["flag2"].visible = false;
            CommonUI.setEnabled(_ui["btn_2"],true);
         }
         if(this.lastItemNum != -1)
         {
            if(this.lastItemNum == this.state)
            {
               doAction("energyTips3");
            }
            this.lastItemNum = -1;
         }
         if(KTool.getBit(this.state,6) == 1)
         {
            Alarm2.show("当前负责任务已完成，共计获得团结凭证*105！");
            Alarm2.show(teamNameArr[forever_108523 - 1] + "队星光积分+5！");
            hide();
            ModuleManager.showAppModule("RepairTheObservationTerraceMainPanel");
            return;
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
               ModuleManager.showAppModule("RepairTheObservationTerraceMainPanel");
               break;
            case "btn_" + index:
               if(index == 1)
               {
                  StatManager.sendStat2014("0412修补逃生舱","与泰瑞403进入战斗","2019运营活动");
               }
               else
               {
                  StatManager.sendStat2014("0412修补逃生舱","与狂暴电击兔1565进入战斗","2019运营活动");
               }
               hide();
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  if(FightManager.isWin)
                  {
                     ModuleManager.showAppModule("RepairTheObservationTerraceGame0Panel",state);
                  }
                  else
                  {
                     ModuleManager.showAppModule("RepairTheObservationTerraceGame0Panel");
                  }
               });
               FightManager.fightNoMapBoss("",15942 + index);
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
         }
      }
   }
}

