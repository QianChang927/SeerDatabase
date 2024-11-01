package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   
   public class PumpkinGhostKidS3Panel extends ActivityModel
   {
      private var _dayCount:int;
      
      private var lastItemNum:int;
      
      public function PumpkinGhostKidS3Panel()
      {
         super();
         resUrl = "2020/1030/PumpkinGhostKidS3Panel";
         configUrl = "2020/1030/PumpkinGhostKid";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1016主线任务","打开主线主面板","2020运营活动");
         super.show();
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         if(data != null)
         {
            this.lastItemNum = data as int;
         }
      }
      
      override protected function updatePanel() : void
      {
         var temp1:int = this.lastItemNum & 0xFF;
         var temp2:int = this.lastItemNum >> 8 & 0xFF;
         var temp3:int = this.lastItemNum >> 16 & 0xFF;
         _ui["mc"].gotoAndStop(temp1);
         _ui["num1"].text = temp2;
         _ui["num2"].text = temp3;
         _ui["num3"].text = temp3;
         this._dayCount = getValue("dayCount");
         if(this._dayCount > 3)
         {
            _ui["num2"].text = 0;
            _ui["num3"].text = 0;
         }
         else
         {
            _ui["num2"].text = temp3;
            _ui["num3"].text = temp3;
         }
         if(temp1 == 5)
         {
            _ui["endMc"].gotoAndStop(2);
         }
         else
         {
            _ui["endMc"].gotoAndStop(1);
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
            case "okay":
               hide();
               ModuleManager.showAppModule("PumpkinGhostKidMainPanel");
         }
      }
   }
}

