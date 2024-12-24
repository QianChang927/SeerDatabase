package com.robot.module.app
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   
   public class MoleculeIntensificationSub1Panel extends ActivityModel
   {
      private var curState:int = 0;
      
      private var mainState:int;
      
      public function MoleculeIntensificationSub1Panel()
      {
         super();
         _configUrl = "2018/0404/MoleculeIntensification";
         resUrl = "2018/0404/MoleculeIntensificationSub1Panel";
         StatManager.sendStat2014("0404茉蕊儿强化","打开第一关面板","2018运营活动");
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var name:String = null;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               name = getValue("modules")[0];
               hide();
               ModuleManager.showAppModule(name);
               break;
            case "onekey":
               doAction("sub1BuyOnekey" + int(this.curState + 1)).then(function():Promise
               {
                  return doAction("sub1Onekey",curState + 1);
               }).then(refresh);
               break;
            case "fight":
               name = getValue("modules")[1];
               doAction("sub1Fight",this.curState + 1).then(function():void
               {
                  ModuleManager.showAppModule(name);
               });
               hide();
               break;
            case "showTipsPanel":
               this.showTipsPanel();
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
      
      override protected function updatePanel() : void
      {
         var i:int;
         _ui["subPanel"].visible = false;
         this.curState = getValue("sub1State");
         for(i = 1; i <= 3; i++)
         {
            if(i <= this.curState)
            {
               _ui["hp_" + i].gotoAndStop(1);
            }
            else
            {
               _ui["hp_" + i].gotoAndStop(2);
            }
         }
         _ui["mc"].gotoAndStop(this.curState + 1);
         this.mainState = getValue("mainState");
         this.showProcess();
         if(this.mainState >= 1)
         {
            doAction("sub1Full").then(function():Promise
            {
               BitBuffSetClass.setState(23575,1);
               return doAction("sub1Tips1");
            }).then(function():void
            {
               var name:String = getValue("modules")[2];
               hide();
               ModuleManager.showAppModule(name);
            });
            return;
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
            curPro = 60 + KTool.getUint1Num(getValue("sub3State")) * 8;
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
      }
   }
}

