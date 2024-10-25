package com.robot.module.app
{
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   
   public class RepairTheObservationTerraceGame2Panel extends ActivityModel
   {
      private var ItemCount:int;
      
      private var state_4:int;
      
      private var state:int;
      
      private var lastItemNum:int = -1;
      
      public function RepairTheObservationTerraceGame2Panel()
      {
         super();
         resUrl = "2024/1025/RepairTheObservationTerraceGame2Panel";
         configUrl = "2024/1025/repairTheObservationTerraceConfig";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1025修补逃生舱","打开修复能手面板","2019运营活动");
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
         this.ItemCount = getValue("ItemCount1");
         this.state_4 = getValue("state_4");
         this.state = getValue("State");
         _ui["mc1"].visible = false;
         _ui["numTxt2"].visible = false;
         _ui["numTxt"].text = this.ItemCount;
         _ui["numTxt1"].text = "载入成功概率" + this.state_4 * 10 + "%";
         _ui["mc2"].gotoAndStop(this.state_4 * 10);
         if(this.lastItemNum != -1)
         {
            if(this.state_4 > this.lastItemNum)
            {
               Alarm2.show("载入失败，成功概率增加10%！");
            }
            this.lastItemNum = -1;
         }
         if(KTool.getBit(this.state,9) == 1)
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
            case "Copy":
               this.playAnimation();
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "btn_1":
               StatManager.sendStat2014("0412修补逃生舱","与派鲁基达073进入战斗","2019运营活动");
               if(this.ItemCount >= 1)
               {
                  doAction("FlgeReq",5).then(function():void
                  {
                     hide();
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
                     {
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                        ModuleManager.showAppModule("RepairTheObservationTerraceGame2Panel",state_4);
                     });
                  });
               }
               else
               {
                  doAction("energyTips1");
               }
         }
      }
      
      private function playAnimation() : void
      {
         _ui["mc1"].visible = true;
         closeEvent();
         _ui["numTxt2"].visible = true;
         AnimateManager.playMcAnimate(_ui,1,"mc1",this.stopPlaying);
      }
      
      private function stopPlaying() : void
      {
         _ui["mc1"].visible = false;
         _ui["numTxt2"].visible = false;
         openEvent();
         doAction("FlgeReq",4).then(refresh);
      }
   }
}

