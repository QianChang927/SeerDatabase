package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm2;
   
   public class AoTeMan_DiGuoDeYeXinS3Panel extends ActivityModel
   {
      private var forever_125147:int;
      
      private var curGongRen:int;
      
      private var forever_125148:int;
      
      private var forever_125149bytes1:int;
      
      private var forever_125149bytes2:int;
      
      private var COUNTARR1:Array;
      
      private var COUNTARR2:Array;
      
      public function AoTeMan_DiGuoDeYeXinS3Panel()
      {
         this.COUNTARR1 = [10,20,30,50,75,100,5,120,500,15,1000,2000];
         this.COUNTARR2 = [1,1,2,1,1,2,1,1,2,1,1,2];
         super();
         resUrl = "2024/1025/AoTeMan_DiGuoDeYeXinS3Panel";
         configUrl = "2024/1025/AoTeMan_DiGuoDeYeXin";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this.forever_125147 = getValue("forever_125147");
         this.forever_125148 = getValue("forever_125148");
         this.forever_125149bytes1 = getValue("forever_125149bytes1");
         this.forever_125149bytes2 = getValue("forever_125149bytes2");
         this.curGongRen = 0;
         for(var t:int = 14; t <= 25; t++)
         {
            if(KTool.getBit(this.forever_125147,t) > 0)
            {
               ++this.curGongRen;
            }
         }
         _ui["mc"].gotoAndStop(this.curGongRen + 1);
         if(this.curGongRen == 6 || this.curGongRen == 9)
         {
            _ui["mc_1"].gotoAndStop(2);
         }
         else if(this.curGongRen == 8 || this.curGongRen == 11)
         {
            _ui["mc_1"].gotoAndStop(3);
            if(this.curGongRen == 8)
            {
               _ui["mc_1"]["numTxt1"].text = 10;
            }
            else
            {
               _ui["mc_1"]["numTxt1"].text = 30;
            }
         }
         else
         {
            _ui["mc_1"].gotoAndStop(1);
         }
         _ui["mc_1"]["numTxt"].text = this.COUNTARR1[this.curGongRen];
         _ui["mc_2"].gotoAndStop(this.COUNTARR2[this.curGongRen]);
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("AoTeMan_DiGuoDeYeXinS1Panel");
               break;
            case "okayBtn":
               if(this.curGongRen == 6 || this.curGongRen == 9)
               {
                  if(this.curGongRen == 6)
                  {
                     if(this.forever_125149bytes1 >= 5)
                     {
                        Alarm2.show("获得了新工人！");
                        doAction("FlgeReq1",14 + this.curGongRen).then(refresh);
                     }
                     else
                     {
                        Alarm2.show("资源不足！");
                     }
                  }
                  else if(this.forever_125149bytes1 >= 15)
                  {
                     Alarm2.show("获得了新工人！");
                     doAction("FlgeReq1",14 + this.curGongRen).then(refresh);
                  }
                  else
                  {
                     Alarm2.show("资源不足！");
                  }
               }
               else if(this.curGongRen == 8 || this.curGongRen == 11)
               {
                  if(this.curGongRen == 8)
                  {
                     if(this.forever_125148 >= 500 && this.forever_125149bytes1 >= 10)
                     {
                        Alarm2.show("获得了新工人！");
                        doAction("FlgeReq1",14 + this.curGongRen).then(refresh);
                     }
                     else
                     {
                        Alarm2.show("资源不足！");
                     }
                  }
                  else if(this.forever_125148 >= 2000 && this.forever_125149bytes1 >= 30)
                  {
                     doAction("FlgeReq1",14 + this.curGongRen).then(function():void
                     {
                        Alarm2.show("你已经完成皇帝贝利亚的所有任务！");
                        hide();
                        ModuleManager.showAppModule("AoTeMan_DiGuoDeYeXinS1Panel");
                     });
                  }
                  else
                  {
                     Alarm2.show("资源不足！");
                  }
               }
               else if(this.forever_125148 >= this.COUNTARR1[this.curGongRen])
               {
                  Alarm2.show("获得了新工人！");
                  doAction("FlgeReq1",14 + this.curGongRen).then(refresh);
               }
               else
               {
                  Alarm2.show("资源不足！");
               }
         }
      }
   }
}

