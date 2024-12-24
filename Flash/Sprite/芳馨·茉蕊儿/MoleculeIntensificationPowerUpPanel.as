package com.robot.module.app
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.utils.CommonUI;
   
   public class MoleculeIntensificationPowerUpPanel extends ActivityModel
   {
      private var showTips:Boolean = false;
      
      public function MoleculeIntensificationPowerUpPanel()
      {
         super();
         _configUrl = "2018/0404/MoleculeIntensification";
         resUrl = "2018/0404/MoleculeIntensificationPowerUpPanel";
         StatManager.sendStat2014("0404茉蕊儿强化","打开能力提升面板","2018运营活动");
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         this.showTips = data != null;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var name:String = null;
         var curLevel:int = 0;
         var exchangeItem:Function = function(index:int):void
         {
            var needItem:int = int(getValue("powerUpNeedItems")[index - 1]);
            if(getValue("powerUpItem") >= needItem)
            {
               doAction("firstPet").then(function():Promise
               {
                  return doAction("powerUpExchange",index);
               }).then(refresh);
            }
            else
            {
               doAction("powerUpTips1").then(function():Promise
               {
                  return doAction("powerUpBuyItem");
               }).then(refresh);
            }
         };
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               name = getValue("modules")[0];
               hide();
               ModuleManager.showAppModule(name);
               break;
            case "bag":
               ModuleManager.showAppModule("ADPetBagPanelNew");
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "fight":
               curLevel = int(getValue("powerUpLevel"));
               name = getValue("modules")[4];
               doAction("powerUpFight",curLevel + 1).then(function():void
               {
                  if(Boolean(FightManager.isWin) && curLevel == 9)
                  {
                     ModuleManager.showAppModule(name,1);
                  }
                  else
                  {
                     ModuleManager.showAppModule(name);
                  }
               });
               hide();
               break;
            case "plus_1":
               doAction("powerUpBuyItem").then(refresh);
               break;
            case "exchange_" + index:
               exchangeItem(index);
         }
      }
      
      override protected function updatePanel() : void
      {
         var itemNum:int = int(getValue("powerUpItem"));
         _ui["txt_1"].text = itemNum;
         var state:Array = getValue("powerUpState");
         for(var i:int = 1; i <= 3; i++)
         {
            if(state[i - 1] == 1)
            {
               _ui["flag_" + i].visible = true;
               CommonUI.setEnabled(_ui["exchange_" + i],false,true);
            }
            else
            {
               _ui["flag_" + i].visible = false;
               CommonUI.setEnabled(_ui["exchange_" + i],true,false);
            }
         }
         var curLevel:int = int(getValue("powerUpLevel"));
         curLevel++;
         _ui["txt_2"].text = curLevel + "/10";
         _ui["mc"].gotoAndStop(curLevel);
         if(curLevel > 1)
         {
            _ui["btnGroup"].gotoAndStop(2);
         }
         else
         {
            _ui["btnGroup"].gotoAndStop(1);
         }
         var awardNum:int = int(getValue("powerUpAwardNum")[curLevel - 1]);
         _ui["txt_3"].text = "x" + awardNum;
         var leftNum:int = int(getValue("powerUpFightNum"));
         _ui["txt_4"].text = leftNum;
         if(leftNum <= 0 && curLevel == 1)
         {
            _ui["flag"].visible = true;
            CommonUI.setEnabled(_ui["btnGroup"],false,true);
         }
         else
         {
            _ui["flag"].visible = false;
            CommonUI.setEnabled(_ui["btnGroup"],true,false);
         }
         if(this.showTips)
         {
            this.showTips = false;
            doAction("powerUpTips2");
         }
      }
   }
}

