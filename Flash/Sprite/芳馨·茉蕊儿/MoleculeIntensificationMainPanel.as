package com.robot.module.app
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.utils.CommonUI;
   
   public class MoleculeIntensificationMainPanel extends ActivityModel
   {
      private var mainState:int;
      
      public function MoleculeIntensificationMainPanel()
      {
         super();
         _configUrl = "2018/0404/MoleculeIntensification";
         resUrl = "2018/0404/MoleculeIntensificationMainPanel";
         StatManager.sendStat2014("0404茉蕊儿强化","打开活动主面板","2018运营活动");
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var name:String = null;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               hide();
               break;
            case "btn_" + index:
               if(index == 1)
               {
                  index = this.mainState + 1;
               }
               name = getValue("modules")[index];
               hide();
               ModuleManager.showAppModule(name);
               break;
            case "onekey":
               doAction("mainBuy" + this.mainState).then(function():Promise
               {
                  return doAction("mainGet");
               }).then(refresh);
               break;
            case "petInfo":
               KTool.showPetInfoPanel(getValue("petId"));
               break;
            case "award":
               doAction("mainGet1").then(refresh);
         }
      }
      
      override protected function updatePanel() : void
      {
         var temp:Array = null;
         var hasPet:Boolean = Boolean(getValue("hasPet"));
         this.mainState = getValue("mainState");
         if(hasPet)
         {
            _ui["btnGroup"].gotoAndStop(3);
            CommonUI.setEnabled(_ui["onekey"],false,true);
         }
         else if(this.mainState >= 3)
         {
            _ui["btnGroup"].gotoAndStop(2);
            CommonUI.setEnabled(_ui["onekey"],false,true);
         }
         else
         {
            _ui["btnGroup"].gotoAndStop(1);
            CommonUI.setEnabled(_ui["onekey"],true,false);
         }
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
         _ui["btnGroup"]["txt"].text = curPro + "/100";
         _ui["btnGroup"]["scrollMc"].gotoAndStop(curPro);
      }
   }
}

