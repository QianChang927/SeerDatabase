package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   
   public class ExploreAmysteryShuiYinHuS3Panel extends ActivityModel
   {
      private var stateArr:Array;
      
      private var itemCount1:int;
      
      private var itemCount2:int;
      
      private var itemCount3:int;
      
      private var countArr:Array;
      
      public function ExploreAmysteryShuiYinHuS3Panel()
      {
         this.stateArr = [];
         this.countArr = [5,2,2,2,2,2,2];
         super();
         resUrl = "2024/1213/ExploreAmysteryShuiYinHuS3Panel";
         configUrl = "2024/1213/ExploreAmysteryShuiYinHu";
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("1213探秘水银湖生命","打开限时奖励面板","2024运营活动");
      }
      
      override protected function updatePanel() : void
      {
         this.stateArr = getValue("getArr");
         this.itemCount1 = getValue("itemCount4");
         this.itemCount2 = getValue("itemCount5");
         this.itemCount3 = getValue("itemCount6");
         this.updateDisplay();
      }
      
      private function updateDisplay() : void
      {
         _ui["numTxt_1"].text = this.itemCount1;
         _ui["numTxt_2"].text = this.itemCount2;
         _ui["numTxt_3"].text = this.itemCount3;
         for(var i:int = 1; i <= 7; i++)
         {
            _ui["countNum_" + i].text = this.stateArr[i - 1] + "/" + this.countArr[i - 1];
            if(this.stateArr[i - 1] >= this.countArr[i - 1])
            {
               CommonUI.setEnabled(_ui["getBtn_" + i],false);
            }
            else
            {
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
               ModuleManager.showAppModule("ExploreAmysteryShuiYinHuMainPanel");
               break;
            case "getBtn_" + index:
               if(index == 1)
               {
                  if(this.itemCount3 >= 1)
                  {
                     doAction("FlgeReq1",4 + index).then(function():void
                     {
                        refresh();
                     });
                  }
                  else
                  {
                     Alarm2.show("兑换所需材料不足！");
                  }
               }
               else if(index <= 4)
               {
                  if(this.itemCount1 >= 1)
                  {
                     doAction("FlgeReq1",4 + index).then(function():void
                     {
                        refresh();
                     });
                  }
                  else
                  {
                     Alarm2.show("兑换所需材料不足！");
                  }
               }
               else if(this.itemCount2 >= 1)
               {
                  doAction("FlgeReq1",4 + index).then(function():void
                  {
                     refresh();
                  });
               }
               else
               {
                  Alarm2.show("兑换所需材料不足！");
               }
         }
      }
   }
}

