package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   
   public class PumpkinGhostKidS4Panel extends ActivityModel
   {
      private var _progress:int;
      
      private var _stateNum:Array;
      
      private var _COUNT:Array;
      
      private var _NEEDNUM:Array;
      
      public function PumpkinGhostKidS4Panel()
      {
         this._stateNum = [];
         this._COUNT = [9,6,12,6,6];
         this._NEEDNUM = [40,40,20,5,5];
         super();
         resUrl = "2020/1030/PumpkinGhostKidS4Panel";
         configUrl = "2020/1030/PumpkinGhostKid";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this._progress = getValue("progress");
         this._stateNum = getValue("StateNum");
         _ui["nums"].text = this._progress;
         for(var i:int = 0; i < 5; i++)
         {
            _ui["num_" + i].text = this._stateNum[i] + "/" + this._COUNT[i];
            if(this._stateNum[i] >= this._COUNT[i])
            {
               _ui["flag_" + i].visible = true;
               CommonUI.setEnabled(_ui["getBtn_" + i],false);
            }
            else
            {
               _ui["flag_" + i].visible = false;
               CommonUI.setEnabled(_ui["getBtn_" + i],true);
            }
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
               ModuleManager.showAppModule("PumpkinGhostKidMainPanel");
               break;
            case "info":
               KTool.showPetInfoPanel(4563);
               break;
            case "getBtn_" + index:
               if(this._progress >= this._NEEDNUM[index])
               {
                  doAction("FlgeReq1",index + 2).then(refresh);
               }
               else
               {
                  Alarm2.show("调查进度数量不足！调查异闻之地可获得大量调查进度！");
               }
         }
      }
   }
}

