package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   
   public class AttackTiPuSiS4Panel extends ActivityModel
   {
      private var _time:int;
      
      private var _ATK:int;
      
      private var _IsUse:int;
      
      private var _ItemNum:int;
      
      protected var passtime:int;
      
      protected var _surplusTime:int;
      
      private var tcdc:TimeCountdownComponent;
      
      public function AttackTiPuSiS4Panel()
      {
         super();
         configUrl = "2024/1025/AttackTiPuSi";
         resUrl = "2024/1025/AttackTiPuSiS4Panel";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this._time = getValue("_time");
         this._ATK = getValue("_ATK");
         this._IsUse = getValue("_IsUse");
         this._ItemNum = getValue("_ItemNum");
         _ui["numTxt"].text = this._ATK + "/30000";
         _ui["numTxts"].text = "当前拥有：" + this._ItemNum;
         if(this._ATK >= 30000)
         {
            doAction("alarm2").then(function():void
            {
               hide();
               ModuleManager.showAppModule("AttackTiPuSiMainPanel");
            });
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         switch(btn_name)
         {
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "useBtn":
               if(this._ItemNum > 0)
               {
                  doAction("FlgeReq1",5).then(refresh);
                  doAction("alarm5");
               }
               else
               {
                  doAction("alarm4");
               }
               break;
            case "gotoMst":
               hide();
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  ModuleManager.showAppModule("AttackTiPuSiS5Panel",_ATK);
               });
               FightManager.fightNoMapBoss("",18368);
               break;
            case "close":
               doAction("alert1").then(function():void
               {
                  doAction("FlgeReq1",6).then(function():void
                  {
                     hide();
                     ModuleManager.showAppModule("AttackTiPuSiMainPanel");
                  });
               });
         }
      }
   }
}

