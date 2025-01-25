package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   
   public class NewYearsDaySpiritPageantS3Panel extends ActivityModel
   {
      protected var m_BossIndex:int;
      
      private var itemcount:int = 0;
      
      private var lastItemNum:int = -1;
      
      public function NewYearsDaySpiritPageantS3Panel()
      {
         super();
         resUrl = "2018/1229/NewYearsDaySpiritPageantS3Panel";
         configUrl = "2018/1229/NewYearsDaySpiritPageant";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this.itemcount = getValue("ItemCount");
         this.m_BossIndex = getValue("bossIndex");
         this._setUI();
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         if(data != null)
         {
            this.lastItemNum = data as int;
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var temp:int = 0;
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               PetManager.cureAllFree();
               break;
            case "go":
               if(this.m_BossIndex != this.lastItemNum)
               {
                  hide();
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     ModuleManager.showAppModule("NewYearsDaySpiritPageantS1Panel",1);
                  });
                  FightManager.fightNoMapBoss("",14976 + this.lastItemNum);
               }
               else
               {
                  hide();
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     ItemManager.updataeItems(1718881,1718881,function():void
                     {
                        var inum:int = int(ItemManager.getNumByID(1718881));
                        var winSign:* = 1;
                        if(inum != itemcount)
                        {
                           winSign = 2;
                        }
                        ModuleManager.showAppModule("NewYearsDaySpiritPageantS1Panel",winSign);
                     });
                  });
                  FightManager.fightNoMapBoss("",14976 + this.lastItemNum);
               }
               break;
            case "oneoky":
               temp = this.m_BossIndex;
               doAction("BuyItem").then(function():void
               {
                  doAction("FlgeReq",2 + lastItemNum).then(function():void
                  {
                     if(temp != lastItemNum)
                     {
                        hide();
                        ModuleManager.showAppModule("NewYearsDaySpiritPageantS1Panel",1);
                     }
                     else
                     {
                        hide();
                        ModuleManager.showAppModule("NewYearsDaySpiritPageantS1Panel",2);
                     }
                  });
               });
         }
      }
      
      private function _setUI() : void
      {
         if(this.lastItemNum == 1)
         {
            _ui["mc"].gotoAndStop(1);
         }
         else if(this.lastItemNum == 2)
         {
            _ui["mc"].gotoAndStop(2);
         }
         else if(this.lastItemNum == 3)
         {
            _ui["mc"].gotoAndStop(4);
         }
         else
         {
            _ui["mc"].gotoAndStop(3);
         }
      }
   }
}

