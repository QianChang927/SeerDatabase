package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.TimeSpaceDoorStudyControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   
   public class TimeSpaceDoorStudyNO1MainPanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNum:int;
      
      private var _chooseTeam:Boolean = false;
      
      private var _preAppName:String = "";
      
      public function TimeSpaceDoorStudyNO1MainPanel()
      {
         super();
         resUrl = "2024/1213/TimeSpaceDoorStudyNO1MainPanel";
         configUrl = "2024/1213/timeSpaceDoorStudyNO1Config";
      }
      
      override public function init(data:Object = null) : void
      {
         this._preAppName = data as String;
      }
      
      override public function show() : void
      {
         super.show();
         if(BitBuffSetClass.getState(24544) == 0)
         {
            closeEvent();
            DialogControl.showAllDilogs(173,1).then(function():void
            {
               BitBuffSetClass.setState(24544,1);
               openEvent();
            });
         }
         StatManager.sendStat2014("1213时空之门的研究第一期","进入【时空之门的研究】主界面","2024运营活动");
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var curlv:int = 0;
         var str:String = null;
         var forever_125184:int = 0;
         var donelvNum:int = 0;
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               this.hide();
               ModuleManager.showAppModule("ComebackHeErKa1220GoToMapPanel");
               break;
            case "getBtn_" + index:
               if(BitUtils.getBit(getValue("forever_125182"),index) == 0)
               {
                  if(index < 3)
                  {
                     if(getValue("forever_125181") >= index + 1)
                     {
                        sendCmd(this._commdId,[69,index + 1],function():void
                        {
                           refresh();
                        });
                     }
                     else
                     {
                        str = index >= 3 ? "未达到启动条件，无法领取。" : "未达到破译条件，无法领取。";
                        Alarm2.show(str);
                     }
                  }
                  else
                  {
                     forever_125184 = int(getValue("forever_125184"));
                     if(forever_125184 < 3)
                     {
                        donelvNum = 0;
                     }
                     else if(forever_125184 == 3)
                     {
                        donelvNum = 1;
                     }
                     else
                     {
                        donelvNum = 2;
                     }
                     if(index - 3 < donelvNum)
                     {
                        sendCmd(this._commdId,[69,index + 1],function():void
                        {
                           refresh();
                        });
                     }
                     else
                     {
                        str = index >= 3 ? "未达到启动条件，无法领取。" : "未达到破译条件，无法领取。";
                        Alarm2.show(str);
                     }
                  }
               }
               break;
            case "playBtn":
               this.hide();
               ModuleManager.showAppModule("TimeSpaceDoorStudyNO1GamePanel");
               break;
            case "resultBtn":
               this.hide();
               ModuleManager.showAppModule("TimeSpaceDoorStudyNO1LogPanel");
               break;
            case "startBtn":
               if(getValue("forever_125181") < 3)
               {
                  Alarm2.show("需要先完成时空之门的破译才能启动。");
                  return;
               }
               curlv = int(getValue("forever_125184"));
               if(curlv < 3)
               {
                  TimeSpaceDoorStudyControl.intData(curlv);
                  if(getValue("forever_125183") == 0)
                  {
                     sendCmd(this._commdId,[69,6],function():void
                     {
                        hide();
                        ModuleManager.showAppModule("TimeSpaceDoorStudyNO2Step0Panel");
                     });
                  }
                  else
                  {
                     this.hide();
                     ModuleManager.showAppModule("TimeSpaceDoorStudyNO2Step0Panel");
                  }
               }
               else
               {
                  this.hide();
                  ModuleManager.showAppModule("TimeSpaceDoorStudyNO2Step1Panel");
               }
               break;
         }
      }
      
      override protected function updatePanel() : void
      {
         var donelvNum:int = 0;
         this._commdId = getValue("comId")[0];
         var forever_125181:int = int(getValue("forever_125181"));
         _mainUI.numTx.text = String(forever_125181) + "/3";
         var forever_125182:int = int(getValue("forever_125182"));
         var daily_bitBuff_1000638:int = int(getValue("daily_bitBuff_1000638"));
         var forever_125184:int = int(getValue("forever_125184"));
         if(forever_125184 < 3)
         {
            donelvNum = 0;
         }
         else if(forever_125184 == 3)
         {
            donelvNum = 1;
         }
         else
         {
            donelvNum = 2;
         }
         _mainUI.numTx_2.text = String(donelvNum) + "/2";
         for(var i:int = 0; i < 5; i++)
         {
            if(BitUtils.getBit(forever_125182,i) > 0)
            {
               _mainUI["getBtnMc_" + i].gotoAndStop(3);
               CommonUI.setEnabled(_mainUI["getBtnMc_" + i],false,true);
            }
            else if(i < 3)
            {
               if(forever_125181 >= i + 1)
               {
                  _mainUI["getBtnMc_" + i].gotoAndStop(2);
               }
               else
               {
                  _mainUI["getBtnMc_" + i].gotoAndStop(1);
               }
            }
            else if(i - 3 < donelvNum)
            {
               _mainUI["getBtnMc_" + i].gotoAndStop(2);
            }
            else
            {
               _mainUI["getBtnMc_" + i].gotoAndStop(1);
            }
         }
         if(forever_125181 >= 3)
         {
            _mainUI.btnMc.gotoAndStop(2);
         }
         else
         {
            _mainUI.btnMc.gotoAndStop(1);
         }
         if(donelvNum >= 2)
         {
            _mainUI.btnMc_2.gotoAndStop(2);
         }
         else
         {
            _mainUI.btnMc_2.gotoAndStop(1);
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

