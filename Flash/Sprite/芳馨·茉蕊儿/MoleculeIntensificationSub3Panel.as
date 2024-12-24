package com.robot.module.app
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   
   public class MoleculeIntensificationSub3Panel extends ActivityModel
   {
      private var lastFightBoss:int = -2;
      
      private var lastBitState:int = 0;
      
      private var bigState:int = 0;
      
      private var curState:int = 0;
      
      private var needEnergy:int = 0;
      
      private var leftTime:int;
      
      private var mainState:int;
      
      public function MoleculeIntensificationSub3Panel()
      {
         super();
         _configUrl = "2018/0404/MoleculeIntensification";
         resUrl = "2018/0404/MoleculeIntensificationSub3Panel";
         StatManager.sendStat2014("0404茉蕊儿强化","打开第三关面板","2018运营活动");
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         if(data is Array)
         {
            this.lastFightBoss = data[0];
            this.lastBitState = data[1];
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var index:int = 0;
         var name:String = null;
         var temp:int = 0;
         index = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               name = getValue("modules")[0];
               hide();
               ModuleManager.showAppModule(name);
               break;
            case "onekey":
               if(this.leftTime >= getValue("sub3TotalTime"))
               {
                  doAction("sub3Tips3");
                  break;
               }
               index = this.needEnergy < 100 ? 1 : 2;
               doAction("sub3BuyOnekey" + index).then(function():Promise
               {
                  lastFightBoss = index == 1 ? -1 : curState;
                  lastBitState = bigState;
                  return doAction("sub3Onekey",index);
               }).then(refresh);
               break;
            case "fight":
               if(this.leftTime >= getValue("sub3TotalTime"))
               {
                  doAction("sub3Tips3");
               }
               else
               {
                  name = getValue("modules")[3];
                  doAction("sub3Fight",this.needEnergy < 100 ? 1 : 2).then(function():void
                  {
                     if(FightManager.isWin)
                     {
                        ModuleManager.showAppModule(name,[needEnergy < 100 ? -1 : curState,bigState]);
                     }
                     else
                     {
                        ModuleManager.showAppModule(name);
                     }
                  });
                  hide();
               }
               break;
            case "btn":
               index = int(e.target.parent.name.split("_")[1]);
               temp = int(KTool.getUint1Num(this.curState));
               if(index == 5 && temp != 4)
               {
                  doAction("sub3Tips2");
               }
               else
               {
                  doAction("sub3BuyItem" + temp).then(function():Promise
                  {
                     lastBitState = bigState;
                     lastFightBoss = curState;
                     return doAction("sub3Onekey1",index);
                  }).then(refresh);
               }
               break;
            case "showTipsPanel":
               if(this.leftTime >= getValue("sub3TotalTime"))
               {
                  doAction("sub3Tips3");
               }
               else
               {
                  this.showTipsPanel();
               }
               break;
            case "bag":
               ModuleManager.showAppModule("ADPetBagPanelNew");
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "subClose":
               refresh();
         }
      }
      
      public function playAni(index:int) : Promise
      {
         _ui["mc_" + index].visible = true;
         return AnimateManager.playMcAnimateWithPromis(_ui["mc_" + index],3,"mc");
      }
      
      override protected function updatePanel() : void
      {
         var i:int;
         var temp:int = 0;
         _ui["subPanel"].visible = false;
         _ui["ani"].gotoAndStop(1);
         this.curState = getValue("sub3State");
         this.needEnergy = getValue("sub3HasEnergy");
         this.leftTime = getValue("sub3LeftTime");
         this.bigState = getValue("sub3BigState");
         _ui["txt_2"].text = this.bigState;
         if(this.needEnergy < 100)
         {
            _ui["btnGroup_1"].gotoAndStop(1);
            _ui["btnGroup_2"].gotoAndStop(1);
            _ui["mc"].gotoAndStop(1);
            _ui["btnGroup_2"]["txt"].text = this.needEnergy + "%";
         }
         else
         {
            _ui["btnGroup_1"].gotoAndStop(2);
            _ui["btnGroup_2"].gotoAndStop(2);
            _ui["mc"].gotoAndStop(2);
         }
         temp = getValue("sub3TotalTime") - this.leftTime - getValue("sub3Start");
         if(temp > 0)
         {
            _ui["txt_1"].text = temp;
         }
         else
         {
            _ui["txt_1"].text = 0;
         }
         this.mainState = getValue("mainState");
         this.showProcess();
         if(this.lastFightBoss >= 0)
         {
            temp = this.curState - this.lastFightBoss;
            this.lastFightBoss = -2;
            if(this.bigState > this.lastBitState)
            {
               this.playAni(5).then(function():Promise
               {
                  return doAction("sub3Tips8");
               }).then(refresh);
            }
            else if(temp > 0)
            {
               temp = Math.log(temp) / Math.LN2 + 1;
               this.playAni(temp).then(function():Promise
               {
                  return doAction("sub3Tips6");
               }).then(refresh);
            }
            else
            {
               this.playAni(5).then(function():Promise
               {
                  return AnimateManager.playMcAnimateWithPromis(_ui,1,"ani");
               }).then(function():Promise
               {
                  return doAction("sub3Tips7");
               }).then(refresh);
            }
            return;
         }
         for(i = 1; i <= 5; i++)
         {
            if(KTool.getBit(this.curState,i) == 1)
            {
               _ui["mc_" + i].visible = false;
            }
            else if(this.needEnergy < 100)
            {
               _ui["mc_" + i].gotoAndStop(2);
               _ui["mc_" + i].visible = true;
            }
            else
            {
               _ui["mc_" + i].visible = true;
               _ui["mc_" + i].gotoAndStop(1);
            }
         }
         if(this.mainState >= 3)
         {
            doAction("sub3Tips1").then(function():void
            {
               var name:String = getValue("modules")[0];
               hide();
               ModuleManager.showAppModule(name);
            });
            return;
         }
         if(this.lastFightBoss == -1 && this.needEnergy >= 100)
         {
            this.lastFightBoss = -2;
            doAction("sub3Tips4");
         }
         else if(this.lastFightBoss == -1)
         {
            this.lastFightBoss = -2;
            doAction("sub3Tips5");
         }
      }
      
      public function showProcess() : void
      {
         var temp:Array = null;
         var curPro:int = 0;
         if(this.mainState == 3)
         {
            curPro = 100;
         }
         else if(this.mainState == 2)
         {
            curPro = 60 + getValue("sub3BigState") * 10;
         }
         else if(this.mainState == 1)
         {
            temp = getValue("sub2State");
            curPro = 30 + temp[0] + temp[1] + temp[2] * 5;
         }
         else
         {
            curPro = getValue("sub1State") * 10;
         }
         _ui["txt"].text = curPro + "/100";
         _ui["scrollMc"].gotoAndStop(curPro);
      }
      
      private function showTipsPanel() : void
      {
         _ui["subPanel"].visible = true;
         if(this.needEnergy < 100)
         {
            _ui["subPanel"]["mc"].gotoAndStop(1);
         }
         else
         {
            _ui["subPanel"]["mc"].gotoAndStop(2);
         }
      }
   }
}

