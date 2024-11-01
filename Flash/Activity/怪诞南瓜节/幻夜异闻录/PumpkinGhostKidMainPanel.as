package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm2;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class PumpkinGhostKidMainPanel extends ActivityModel
   {
      private var _progress:int;
      
      private var _bit:Boolean;
      
      private var _time:int;
      
      private var result:int;
      
      public function PumpkinGhostKidMainPanel()
      {
         super();
         resUrl = "2020/1030/PumpkinGhostKidMainPanel";
         configUrl = "2020/1030/PumpkinGhostKid";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         var tempTime:int;
         var tempTime1:int;
         var tempTime2:int;
         this._time = getValue("time");
         this._progress = getValue("progress");
         this._bit = getValue("bit");
         tempTime = int(SystemTimerManager.time);
         tempTime1 = (this._time - 57600) / 86400;
         tempTime2 = (tempTime - 57600) / 86400;
         if(this._time >= 57600 && tempTime1 != tempTime2)
         {
            doAction("FlgeReq2",3).then(function(e:SocketEvent):void
            {
               result = ByteArray(e.data).readInt();
               if(result != 0)
               {
                  hide();
                  ModuleManager.showAppModule("PumpkinGhostKidS3Panel",result);
                  return;
               }
               refresh();
            });
         }
         _ui["num"].text = this._progress;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("PumpkinFestivalGoToMapPanel");
               break;
            case "receive":
               if(this._progress >= 300)
               {
                  doAction("exchange_1").then(refresh);
               }
               else
               {
                  Alarm2.show("请先获得足够的道具。");
               }
               break;
            case "onekey":
               doAction("BuyItemNum1").then(refresh);
               break;
            case "info":
               KTool.showPetInfoPanel(4138);
               break;
            case "go":
               if(this._time != 0)
               {
                  hide();
                  ModuleManager.showAppModule("PumpkinGhostKidS2Panel");
               }
               else
               {
                  hide();
                  ModuleManager.showAppModule("PumpkinGhostKidS1Panel");
               }
               break;
            case "getBtn":
               hide();
               ModuleManager.showAppModule("PumpkinGhostKidS4Panel");
         }
      }
   }
}

