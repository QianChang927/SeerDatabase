package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alarm2;
   
   public class ConfrontVariationELanS2Panel extends ActivityModel
   {
      private var lastItemNum:int = -1;
      
      public function ConfrontVariationELanS2Panel()
      {
         super();
         resUrl = "2024/1108/ConfrontVariationELanS2Panel";
         configUrl = "2024/1108/ConfrontVariationELan";
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         if(data != null)
         {
            this.lastItemNum = data as int;
         }
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         _ui["mc"].gotoAndStop(this.lastItemNum);
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("ConfrontVariationELanS1Panel");
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "startBtn":
               if(this.lastItemNum == 1)
               {
                  hide();
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     ModuleManager.showAppModule("ConfrontVariationELanS1Panel");
                  });
                  FightManager.fightNoMapBoss("",18691);
               }
               else
               {
                  hide();
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     if(!FightManager.isWin)
                     {
                        Alarm2.show("小心，不要大意！");
                        ModuleManager.showAppModule("ConfrontVariationELanS1Panel");
                     }
                     else
                     {
                        Alarm2.show("成功击退变异鳄兰！");
                        ModuleManager.showAppModule("ConfrontVariationELanMainPanel");
                     }
                  });
                  FightManager.fightNoMapBoss("",18692);
               }
               break;
            case "onekey":
               if(this.lastItemNum == 1)
               {
                  doAction("buy1").then(function():void
                  {
                     doAction("FlgeReq1",3).then(function():void
                     {
                        hide();
                        ModuleManager.showAppModule("ConfrontVariationELanS1Panel");
                     });
                  });
               }
               else
               {
                  doAction("buy2").then(function():void
                  {
                     doAction("FlgeReq1",4).then(function():void
                     {
                        Alarm2.show("成功击退变异鳄兰！",function():void
                        {
                           hide();
                           ModuleManager.showAppModule("ConfrontVariationELanMainPanel");
                        });
                     });
                  });
               }
         }
      }
   }
}

