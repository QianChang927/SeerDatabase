package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm2;
   
   public class ConfrontVariationELanS1Panel extends ActivityModel
   {
      private var daily_11896:int;
      
      private var daily_11897:int;
      
      private var daily_11897byte3:int;
      
      private var daily_11897byte4:int;
      
      private var StartArr:Array;
      
      public function ConfrontVariationELanS1Panel()
      {
         this.StartArr = [];
         super();
         resUrl = "2024/1108/ConfrontVariationELanS1Panel";
         configUrl = "2024/1108/ConfrontVariationELan";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this.daily_11896 = getValue("daily_11896");
         this.daily_11897 = getValue("daily_11897");
         this.daily_11897byte3 = getValue("daily_11897byte3");
         this.daily_11897byte4 = getValue("daily_11897byte4");
         this.StartArr = getValue("StartArr");
         this.updateDisplay();
      }
      
      private function updateDisplay() : void
      {
         var k:int = 0;
         var j:* = undefined;
         _ui["mc"].gotoAndStop(1);
         for(var i:int = 1; i <= 8; i++)
         {
            if(KTool.getBit(this.daily_11897,i) > 0)
            {
               _ui["mc_" + i].visible = false;
               _ui["markMc_" + i].visible = false;
            }
            else
            {
               _ui["mc_" + i].visible = true;
               _ui["markMc_" + i].visible = true;
               _ui["mc_" + i].gotoAndStop(1);
               if(this.daily_11897byte4 + 1 == i)
               {
                  _ui["mc_" + i].gotoAndStop(2);
               }
            }
         }
         if(this.daily_11897byte4 != 9)
         {
            _ui["mc"].gotoAndStop(2);
         }
         if(this.daily_11897byte4 != 9)
         {
            for(k = 1; k <= 8; k++)
            {
               if(k == this.daily_11897byte4 + 1)
               {
                  _ui["markMc_" + k].visible = true;
               }
               else
               {
                  _ui["markMc_" + k].visible = false;
               }
            }
         }
         if(this.daily_11897byte3 >= 3)
         {
            _ui["bossMc"].visible = true;
            _ui["bossMc"].gotoAndStop(1);
            _ui["markMc"].visible = true;
            _ui["mc"].gotoAndStop(3);
            for(j = 1; j <= 8; j++)
            {
               _ui["mc_" + j].visible = false;
               _ui["markMc_" + j].visible = false;
            }
         }
         else
         {
            _ui["bossMc"].visible = false;
            _ui["markMc"].visible = false;
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var index:int = 0;
         var btn_name:String = e.target.name;
         index = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("ConfrontVariationELanMainPanel");
               break;
            case "smallBtn":
               index = int(e.target.parent.name.split("_")[1]);
               if(KTool.getBit(this.daily_11897,index) == 0 && this.daily_11897byte4 == 9)
               {
                  if(this.StartArr[index - 1] == 1)
                  {
                     doAction("FlgeReq1",10 + index).then(function():void
                     {
                        _activityHelper.update().then(function():void
                        {
                           daily_11897byte3 = getValue("daily_11897byte3");
                           if(daily_11897byte3 >= 3)
                           {
                              Alarm2.show("经过精心的翻找之后，成功收集了许多光合能量 。",function():void
                              {
                                 _ui["bossMc"].visible = true;
                                 _ui["bossMc"].gotoAndStop(2);
                                 closeEvent();
                                 AnimateManager.playMcAnimate(_ui["bossMc"],2,"mcAni",function():void
                                 {
                                    openEvent();
                                    refresh();
                                 },false,true);
                              });
                           }
                           else
                           {
                              Alarm2.show("经过精心的翻找之后，成功收集了许多光合能量 。 ");
                              refresh();
                           }
                        });
                     });
                  }
                  else if(this.StartArr[index - 1] == 2)
                  {
                     _ui["mc_" + index].gotoAndStop(3);
                     closeEvent();
                     AnimateManager.playMcAnimate(_ui["mc_" + index],3,"aniMc",function():void
                     {
                        openEvent();
                        doAction("FlgeReq1",10 + index).then(function():void
                        {
                           refresh();
                        });
                     },false,true);
                  }
                  else
                  {
                     Alarm2.show("这里的能量似乎已经流失了，再去其他地方找找吧。 ");
                     doAction("FlgeReq1",10 + index).then(function():void
                     {
                        refresh();
                     });
                  }
               }
               break;
            case "bigBtn":
               hide();
               ModuleManager.showAppModule("ConfrontVariationELanS2Panel",1);
               break;
            case "bossBtn":
               hide();
               ModuleManager.showAppModule("ConfrontVariationELanS2Panel",2);
         }
      }
   }
}

