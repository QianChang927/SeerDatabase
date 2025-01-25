package com.robot.module.app
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.utils.CommonUI;
   
   public class ChangLanCompleteMainPanel extends ActivityModel
   {
      private var lastState:int = -1;
      
      private var fightNum:int;
      
      private var hasWeaken:Boolean;
      
      private var hasWinNum:int;
      
      public function ChangLanCompleteMainPanel()
      {
         super();
         _configUrl = "2018/0930/ChangLanComplete";
         resUrl = "2018/0930/ChangLanCompleteMainPanel";
         StatManager.sendStat2014("0930沧岚强化","打开活动主面板","2018运营活动");
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         if(data != null && data is int)
         {
            this.lastState = data as int;
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var index:int = 0;
         var name:String = null;
         index = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               hide();
               break;
            case "btn_" + index:
               name = getValue("modules")[index];
               hide();
               ModuleManager.showAppModule(name);
               break;
            case "btn":
               index = int(e.target.parent.name.split("_")[1]);
               name = getValue("modules")[index];
               hide();
               ModuleManager.showAppModule(name);
               break;
            case "onekey":
               doAction("firstPet1").then(function():Promise
               {
                  return doAction("mainBuyOnekey");
               }).then(refresh);
               break;
            case "award":
               doAction("firstPet1").then(function():Promise
               {
                  return doAction("mainGet");
               }).then(refresh);
               break;
            case "petInfo":
               KTool.showPetInfoPanel(getValue("petId"));
               break;
            case "plus":
               doAction("mainPlus").then(refresh);
               break;
            case "bag":
               ModuleManager.showAppModule("ADPetBagPanelNew");
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "fight":
               if(this.fightNum > 0)
               {
                  if(this.hasWinNum == 0 || this.hasWeaken)
                  {
                     StatManager.sendStat2014("0930沧岚强化","挑战削弱后怒涛沧岚" + int(this.hasWinNum + 1),"2018运营活动");
                     name = getValue("modules")[0];
                     doAction("mainFight").then(function():void
                     {
                        if(FightManager.isWin)
                        {
                           ModuleManager.showAppModule(name,hasWinNum);
                        }
                        else
                        {
                           ModuleManager.showAppModule(name);
                        }
                     });
                     hide();
                  }
                  else
                  {
                     this.updateSubPanel();
                  }
               }
               else
               {
                  doAction("numTips").then(function():Promise
                  {
                     return doAction("mainPlus");
                  }).then(refresh);
               }
               break;
            case "fight_1":
               name = getValue("modules")[0];
               StatManager.sendStat2014("0930沧岚强化","挑战怒涛沧岚" + int(this.hasWinNum + 1),"2018运营活动");
               doAction("mainFight").then(function():void
               {
                  if(FightManager.isWin)
                  {
                     ModuleManager.showAppModule(name,hasWinNum);
                  }
                  else
                  {
                     ModuleManager.showAppModule(name);
                  }
               });
               hide();
               break;
            case "onekey_1":
               doAction("mainBuyOnekey1" + int(this.hasWinNum)).then(function():Promise
               {
                  return doAction("mainOnekey1",hasWinNum);
               }).then(refresh);
               break;
            case "onekey_2":
               index = this.hasWeaken ? 4 + this.hasWinNum : 1 + this.hasWinNum;
               doAction("mainBuyOnekey2" + index).then(function():Promise
               {
                  lastState = hasWinNum;
                  return doAction("mainOnekey2",index);
               }).then(refresh);
               break;
            case "subClose":
               refresh();
         }
      }
      
      override protected function updatePanel() : void
      {
         _ui["subPanel"].visible = false;
         var subState:Array = getValue("subState");
         var hasCompleteSub:Boolean = true;
         var hasPet:Boolean = Boolean(getValue("hasPet"));
         this.hasWinNum = getValue("hasWinNum");
         this.fightNum = getValue("mainFightNum");
         this.hasWeaken = getValue("hasWeaken");
         if(hasPet)
         {
            _ui["flag"].gotoAndStop(1);
            _ui["flag"].visible = true;
         }
         else if(this.hasWeaken)
         {
            _ui["flag"].gotoAndStop(2);
            _ui["flag"].visible = true;
         }
         else
         {
            _ui["flag"].visible = false;
         }
         CommonUI.setEnabled(_ui["onekey"],!hasPet,hasPet);
         for(var i:int = 1; i <= 4; i++)
         {
            if(subState[i - 1] != 0)
            {
               _ui["btnGroup_" + i].gotoAndStop(subState[i - 1] + 1);
               _ui["flag_" + i].visible = true;
            }
            else
            {
               hasCompleteSub = false;
               _ui["btnGroup_" + i].gotoAndStop(1);
               _ui["flag_" + i].visible = false;
            }
            CommonUI.setEnabled(_ui["btnGroup_" + i],!hasPet && this.hasWinNum < 4,hasPet || this.hasWinNum >= 4);
         }
         _ui["txt_1"].text = this.hasWinNum + "/4";
         if(hasPet)
         {
            _ui["btnGroup"].gotoAndStop(4);
         }
         else if(this.hasWinNum >= 4)
         {
            _ui["btnGroup"].gotoAndStop(3);
         }
         else if(hasCompleteSub)
         {
            _ui["btnGroup"].gotoAndStop(2);
         }
         else
         {
            _ui["btnGroup"].gotoAndStop(1);
         }
         if(this.lastState != -1)
         {
            if(this.lastState == this.hasWinNum)
            {
               doAction("mainTips1");
            }
            else if(this.hasWinNum == 4)
            {
               doAction("mainTips3");
            }
            else if(this.lastState < this.hasWinNum)
            {
               doAction("mainTips2");
            }
            this.lastState = -1;
         }
         _ui["txt_2"].text = this.fightNum;
         CommonUI.setEnabled(_ui["plus"],this.fightNum <= 0,this.fightNum > 0);
      }
      
      protected function updateSubPanel() : void
      {
         _ui["subPanel"].visible = true;
         StatManager.sendStat2014("0930沧岚强化","打开适应性强化弹框第" + this.hasWinNum + "帧","2018运营活动");
         _ui["subPanel"]["mc"].gotoAndStop(this.hasWinNum);
      }
   }
}

