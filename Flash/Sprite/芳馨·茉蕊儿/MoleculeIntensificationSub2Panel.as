package com.robot.module.app
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.utils.CommonUI;
   
   public class MoleculeIntensificationSub2Panel extends ActivityModel
   {
      private var lastFight:int = 0;
      
      private var curState:Array;
      
      private var leftTime:int;
      
      private var mainState:int;
      
      public function MoleculeIntensificationSub2Panel()
      {
         super();
         _configUrl = "2018/0404/MoleculeIntensification";
         resUrl = "2018/0404/MoleculeIntensificationSub2Panel";
         StatManager.sendStat2014("0404茉蕊儿强化","打开第二关面板","2018运营活动");
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         this.lastFight = data as int;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var index:int = 0;
         var name:String = null;
         index = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               name = getValue("modules")[0];
               hide();
               ModuleManager.showAppModule(name);
               break;
            case "onekey":
               index = int(e.target.parent.name.split("_")[1]);
               doAction("sub2BuyOnekey" + index).then(function():Promise
               {
                  return doAction("sub2Onekey",index);
               }).then(refresh);
               break;
            case "fight":
               name = getValue("modules")[2];
               index = int(e.target.parent.name.split("_")[1]);
               doAction("sub2Fight",index).then(function():void
               {
                  ModuleManager.showAppModule(name,leftTime);
               });
               hide();
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
         var needState:Array;
         var tempLeft:int;
         var i:int;
         this.curState = getValue("sub2State");
         needState = getValue("sub2NeedState");
         tempLeft = 0;
         for(i = 1; i <= 3; i++)
         {
            tempLeft = needState[i - 1] - this.curState[i - 1];
            _ui["mc_" + i]["txt"].text = String(_ui["mc_" + i]["txt"].text).replace(/[0-9]+/,tempLeft);
            if(tempLeft == 0)
            {
               CommonUI.setEnabled(_ui["mc_" + i]["fight"],false,true);
               CommonUI.setEnabled(_ui["mc_" + i]["onekey"],false,true);
               _ui["flag_" + i].visible = true;
            }
            else
            {
               CommonUI.setEnabled(_ui["mc_" + i]["fight"],true,false);
               CommonUI.setEnabled(_ui["mc_" + i]["onekey"],true,false);
               _ui["flag_" + i].visible = false;
            }
         }
         this.leftTime = getValue("sub2TotalCirNum") - getValue("sub2FightCirNum");
         _ui["txt_1"].text = this.leftTime;
         this.mainState = getValue("mainState");
         this.showProcess();
         if(this.mainState >= 2)
         {
            doAction("sub2Tips1").then(function():void
            {
               var name:String = getValue("modules")[3];
               hide();
               ModuleManager.showAppModule(name);
            });
            return;
         }
         if(this.leftTime == 0 && this.lastFight != 0)
         {
            this.lastFight = 0;
            doAction("sub2Tips2").then(function():void
            {
               var name:String = getValue("modules")[0];
               hide();
               ModuleManager.showAppModule(name);
            });
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
   }
}

