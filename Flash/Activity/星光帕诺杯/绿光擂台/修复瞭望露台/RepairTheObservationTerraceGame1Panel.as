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
   
   public class RepairTheObservationTerraceGame1Panel extends ActivityModel
   {
      private var state:int;
      
      private var BossIndex:int;
      
      private var Hjcount:int;
      
      private var lastItemNum:int = -1;
      
      public function RepairTheObservationTerraceGame1Panel()
      {
         super();
         resUrl = "2024/1025/RepairTheObservationTerraceGame1Panel";
         configUrl = "2024/1025/repairTheObservationTerraceConfig";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1025修补逃生舱","打开修复材料面板","2019运营活动");
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
         var teamNameArr:Array = getValue("teamNameArr");
         var forever_108523:int = int(getValue("forever_108523"));
         this.state = getValue("State");
         this.BossIndex = getValue("bossIndex");
         this.Hjcount = getValue("HJcount");
         _ui["numTxt"].text = this.Hjcount + "/10";
         if(this.Hjcount == 0)
         {
            _ui["mc3"].gotoAndStop(1);
         }
         else
         {
            _ui["mc3"].gotoAndStop(1 + this.Hjcount);
         }
         if(this.BossIndex == 0)
         {
            _ui["mc1"].gotoAndStop(2);
            _ui["mc4"].gotoAndStop(1);
         }
         else
         {
            _ui["mc1"].gotoAndStop(1);
            _ui["mc1"]["mc2"].gotoAndStop(this.BossIndex);
            _ui["mc4"].gotoAndStop(2);
         }
         if(this.lastItemNum != -1 && KTool.getBit(this.state,8) == 0)
         {
            if(this.Hjcount > this.lastItemNum)
            {
               Alarm2.show("挑战成功，获得了" + (this.Hjcount - this.lastItemNum) + "个合金！");
            }
            this.lastItemNum = -1;
         }
         if(KTool.getBit(this.state,8) == 1)
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
            case "search":
               StatManager.sendStat2014("0412修补逃生舱","在修复材料面板点击搜索精灵","2019运营活动");
               doAction("FlgeReq",3).then(refresh);
               break;
            case "battle":
               if(this.BossIndex == 1)
               {
                  StatManager.sendStat2014("0412修补逃生舱","与多塔338进入战斗","2019运营活动");
               }
               else if(this.BossIndex == 2)
               {
                  StatManager.sendStat2014("0412修补逃生舱","与卡桑1195进入战斗","2019运营活动");
               }
               else if(this.BossIndex == 3)
               {
                  StatManager.sendStat2014("0412修补逃生舱","与莫特1793进入战斗","2019运营活动");
               }
               else if(this.BossIndex == 4)
               {
                  StatManager.sendStat2014("0412修补逃生舱","与合金赛伯斯特1484进入战斗","2019运营活动");
               }
               else
               {
                  StatManager.sendStat2014("0412修补逃生舱","与伽丘3062进入战斗","2019运营活动");
               }
               hide();
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  ModuleManager.showAppModule("RepairTheObservationTerraceGame1Panel",Hjcount);
               });
               FightManager.fightNoMapBoss("",15944 + this.BossIndex);
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

