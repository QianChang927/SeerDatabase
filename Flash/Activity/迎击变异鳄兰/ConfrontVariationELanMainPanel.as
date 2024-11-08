package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   
   public class ConfrontVariationELanMainPanel extends ActivityModel
   {
      private var forever_105782:int;
      
      private var daily_11896:int;
      
      private var daily_11897:int;
      
      private var forever_105782byte2:int;
      
      public function ConfrontVariationELanMainPanel()
      {
         super();
         resUrl = "2024/1108/ConfrontVariationELanMainPanel";
         configUrl = "2024/1108/ConfrontVariationELan";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this.forever_105782 = getValue("forever_105782");
         this.forever_105782byte2 = getValue("forever_105782byte2");
         this.daily_11896 = getValue("daily_11896");
         this.daily_11897 = getValue("daily_11897");
         this.updateDisplay();
      }
      
      private function updateDisplay() : void
      {
         if(KTool.getBit(this.daily_11897,9) > 0)
         {
            _ui["mc1"].gotoAndStop(3);
         }
         else if(this.daily_11896 == 0)
         {
            _ui["mc1"].gotoAndStop(1);
         }
         else
         {
            _ui["mc1"].gotoAndStop(2);
         }
         if(this.forever_105782byte2 == 0)
         {
            _ui["aniMc"].gotoAndStop(1);
         }
         else
         {
            _ui["aniMc"].gotoAndStop(this.forever_105782byte2 + 1);
         }
         for(var i:int = 1; i <= 5; i++)
         {
            if(KTool.getBit(this.forever_105782,i) > 0)
            {
               _ui["flag_" + i].visible = true;
               _ui["mcc_" + i].gotoAndStop(1);
            }
            else
            {
               _ui["flag_" + i].visible = false;
               if(this.forever_105782byte2 >= i)
               {
                  _ui["mcc_" + i].gotoAndStop(2);
               }
               else
               {
                  _ui["mcc_" + i].gotoAndStop(1);
               }
            }
         }
         if(KTool.getBit(this.forever_105782,6) > 0)
         {
            _ui["mc2"].gotoAndStop(3);
         }
         else if(this.forever_105782byte2 >= 3)
         {
            _ui["mc2"].gotoAndStop(2);
         }
         else
         {
            _ui["mc2"].gotoAndStop(1);
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
               break;
            case "getBtn_" + index:
               if(KTool.getBit(this.forever_105782,index) == 0)
               {
                  if(this.forever_105782byte2 >= index)
                  {
                     doAction("FlgeReq1",20 + index).then(refresh);
                  }
               }
               break;
            case "getBtn":
               doAction("FlgeReq1",2).then(refresh);
               break;
            case "gotoBtn":
               doAction("FlgeReq1",1).then(function():void
               {
                  hide();
                  ModuleManager.showAppModule("ConfrontVariationELanS1Panel");
               });
               break;
            case "goonBtn":
               hide();
               ModuleManager.showAppModule("ConfrontVariationELanS1Panel");
         }
      }
   }
}

