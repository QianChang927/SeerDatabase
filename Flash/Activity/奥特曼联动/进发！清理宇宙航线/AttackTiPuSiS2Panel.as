package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   
   public class AttackTiPuSiS2Panel extends ActivityModel
   {
      private var _gameCount:int;
      
      private var lastItemNum:int = -1;
      
      public function AttackTiPuSiS2Panel()
      {
         super();
         configUrl = "2024/1025/AttackTiPuSi";
         resUrl = "2024/1025/AttackTiPuSiS2Panel";
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("0910狙击泰普斯","打开获得次数弹框","2021运营活动");
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
         this._gameCount = getValue("_count");
         _ui["numTxt"].text = this._gameCount;
         if(this.lastItemNum != -1)
         {
            Alarm2.show("恭喜你，今日行动次数+" + (this._gameCount - this.lastItemNum) + "！");
            this.lastItemNum = -1;
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
               ModuleManager.showAppModule("AttackTiPuSiS1Panel");
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "getBtn_1":
               hide();
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  if(FightManager.isWin)
                  {
                     ModuleManager.showAppModule("AttackTiPuSiS2Panel",_gameCount);
                  }
                  else
                  {
                     ModuleManager.showAppModule("AttackTiPuSiS2Panel");
                  }
               });
               FightManager.fightNoMapBoss("",18369);
               break;
            case "onekey_1":
               doAction("BuyItemNum1").then(function():void
               {
                  lastItemNum = _gameCount;
                  refresh();
               });
         }
      }
   }
}

