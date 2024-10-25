package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   
   public class AoTeMan_DiGuoDeYeXinS1Panel extends ActivityModel
   {
      private var forever_125148:int;
      
      private var forever_125149bytes1:int;
      
      private var forever_125149bytes2:int;
      
      private var forever_125151bytes1:int;
      
      private var forever_125151bytes2:int;
      
      private var forever_125152:int;
      
      private var forever_125153:int;
      
      private var startArr:Array;
      
      private var forever_125147:int;
      
      private var COUNTARR:Array;
      
      private var curPlay:int;
      
      private var curGongRen:int;
      
      private var curGongRen1:int;
      
      private var countNum:int;
      
      private var lastNum1:int = -1;
      
      private var lastNum2:int = -1;
      
      private var countPos:int = 0;
      
      private var curGongRenRedPos:int;
      
      private var COUNTARR1:Array;
      
      private var daily_207072:int;
      
      private var lastChNum1:int = 0;
      
      private var lastChNum2:int = 0;
      
      private var lastChNum3:int = 0;
      
      private var lastItemNum:int = -1;
      
      public function AoTeMan_DiGuoDeYeXinS1Panel()
      {
         this.startArr = [];
         this.COUNTARR = [30,60,100];
         this.COUNTARR1 = [10,20,30,50,75,100,5,120,150,15,200,300];
         super();
         resUrl = "2024/1025/AoTeMan_DiGuoDeYeXinS1Panel";
         configUrl = "2024/1025/AoTeMan_DiGuoDeYeXin";
      }
      
      override public function show() : void
      {
         super.show();
         _ui["page"].visible = false;
         _ui["aniMc"].visible = false;
         StatManager.sendStat2014("1025银河帝国的野心","打开了银河帝国的野心游戏界面","2024运营活动");
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
         this.updateData();
         this.updateDisplay();
      }
      
      private function updateData() : void
      {
         this.forever_125147 = getValue("forever_125147");
         this.forever_125148 = getValue("forever_125148");
         this.forever_125149bytes1 = getValue("forever_125149bytes1");
         this.forever_125149bytes2 = getValue("forever_125149bytes2");
         this.startArr = getValue("StartArr");
         this.forever_125151bytes1 = getValue("forever_125151bytes1");
         this.forever_125151bytes2 = getValue("forever_125151bytes2");
         this.forever_125152 = getValue("forever_125152");
         this.forever_125153 = getValue("forever_125153");
         this.daily_207072 = getValue("daily_207072");
         if(this.lastItemNum == 1)
         {
            this.lastItemNum = -1;
            _ui["page"].visible = true;
            _ui["page"]["countNum"].text = 3 - this.daily_207072;
            CommonUI.setEnabled(_ui["page"]["plus1"],this.daily_207072 == 3);
            _ui["page"]["mcc"].visible = this.daily_207072 == 3;
         }
      }
      
      private function updateDisplay() : void
      {
         var temp:int = 0;
         this.countPos = 0;
         _ui["num_1"].text = this.forever_125148;
         _ui["num_2"].text = this.forever_125149bytes1;
         _ui["num_3"].text = this.forever_125149bytes2;
         _ui["countNum"].text = this.forever_125152;
         if(this.forever_125148 > this.lastNum1 && this.lastNum1 != -1)
         {
            temp = this.forever_125148 - this.lastNum1;
            Alarm2.show("获得了" + temp + "个矿石！");
            this.lastNum1 = -1;
         }
         if(this.forever_125149bytes1 > this.lastNum2 && this.lastNum2 != -1)
         {
            Alarm2.show("获得了3个战士！");
            this.lastNum2 = -1;
         }
         if(this.forever_125152 >= 999)
         {
            CommonUI.setEnabled(_ui["plus"],false);
         }
         else
         {
            CommonUI.setEnabled(_ui["plus"],true);
         }
         this.countNum = 0;
         for(var m:int = 14; m <= 25; m++)
         {
            if(KTool.getBit(this.forever_125147,m) > 0)
            {
               ++this.countNum;
            }
         }
         if(KTool.getBit(this.forever_125153,5) > 0)
         {
            _ui["unlockMc"].visible = false;
         }
         else
         {
            _ui["unlockMc"].visible = true;
         }
         _ui["recallNum"].text = this.forever_125151bytes2 + "/10";
         this.curGongRen = 0;
         this.curGongRen1 = 0;
         for(var t:int = 1; t <= 3; t++)
         {
            if(KTool.getBit(this.forever_125151bytes1,t) > 0)
            {
               ++this.curGongRen;
               _ui["mc_" + t].gotoAndStop(1);
            }
            else
            {
               _ui["mc_" + t].gotoAndStop(2);
               if(KTool.getBit(this.forever_125153,5) > 0)
               {
                  ++this.countPos;
               }
            }
         }
         if(KTool.getBit(this.forever_125153,2) == 0)
         {
            this.curPlay = 2;
         }
         else if(KTool.getBit(this.forever_125153,3) == 0)
         {
            this.curPlay = 3;
         }
         else if(KTool.getBit(this.forever_125153,4) == 0)
         {
            this.curPlay = 4;
         }
         else
         {
            this.curPlay = 5;
         }
         for(var i:int = 1; i <= 4; i++)
         {
            if(i != 1)
            {
               if(KTool.getBit(this.forever_125153,i) > 0)
               {
                  _ui["unlockPageMc_" + i].visible = false;
               }
               else
               {
                  _ui["unlockPageMc_" + i].visible = true;
                  if(i == this.curPlay)
                  {
                     _ui["unlockPageMc_" + i].gotoAndStop(1);
                  }
                  else
                  {
                     _ui["unlockPageMc_" + i].gotoAndStop(2);
                  }
               }
            }
         }
         this.lastChNum1 = this.lastChNum2 = this.lastChNum3 = 0;
         for(var q:int = 1; q <= 4; q++)
         {
            if(KTool.getBit(this.startArr[0],q) > 0)
            {
               _ui["mcc_" + q].gotoAndStop(1);
               ++this.curGongRen1;
               ++this.lastChNum1;
            }
            else
            {
               _ui["mcc_" + q].gotoAndStop(2);
               ++this.countPos;
            }
         }
         for(var w:int = 1; w <= 4; w++)
         {
            if(KTool.getBit(this.startArr[1],w) > 0)
            {
               _ui["mcc_" + (w + 4)].gotoAndStop(1);
               ++this.curGongRen1;
               ++this.lastChNum2;
            }
            else
            {
               _ui["mcc_" + (w + 4)].gotoAndStop(2);
               if(KTool.getBit(this.forever_125153,2) > 0)
               {
                  ++this.countPos;
               }
            }
         }
         for(var e:int = 1; e <= 4; e++)
         {
            if(KTool.getBit(this.startArr[2],e) > 0)
            {
               _ui["mcc_" + (e + 8)].gotoAndStop(1);
               ++this.curGongRen1;
               ++this.lastChNum3;
            }
            else
            {
               _ui["mcc_" + (e + 8)].gotoAndStop(2);
               if(KTool.getBit(this.forever_125153,3) > 0)
               {
                  ++this.countPos;
               }
            }
         }
         for(var r:int = 1; r <= 3; r++)
         {
            if(KTool.getBit(this.startArr[3],r) > 0)
            {
               _ui["mcc_" + (r + 12)].gotoAndStop(1);
               ++this.curGongRen1;
            }
            else
            {
               _ui["mcc_" + (r + 12)].gotoAndStop(2);
               if(KTool.getBit(this.forever_125153,4) > 0)
               {
                  ++this.countPos;
               }
            }
         }
         CommonUI.setEnabled(_ui["recallBtn"],this.curGongRen > 0 || this.curGongRen1 > 0);
         this.redPos();
      }
      
      private function redPos() : void
      {
         this.curGongRenRedPos = 0;
         for(var t:int = 14; t <= 25; t++)
         {
            if(KTool.getBit(this.forever_125147,t) > 0)
            {
               ++this.curGongRenRedPos;
            }
         }
         if(this.curGongRenRedPos == 6 || this.curGongRenRedPos == 9)
         {
            if(this.curGongRenRedPos == 6)
            {
               if(this.forever_125149bytes1 >= 5)
               {
                  _ui["redPos"].visible = true;
               }
               else
               {
                  _ui["redPos"].visible = false;
               }
            }
            else if(this.forever_125149bytes1 >= 15)
            {
               _ui["redPos"].visible = true;
            }
            else
            {
               _ui["redPos"].visible = false;
            }
         }
         else if(this.curGongRenRedPos == 8 || this.curGongRenRedPos == 11)
         {
            if(this.curGongRenRedPos == 8)
            {
               if(this.forever_125148 >= 150 && this.forever_125149bytes1 >= 10)
               {
                  _ui["redPos"].visible = true;
               }
               else
               {
                  _ui["redPos"].visible = false;
               }
            }
            else if(this.forever_125148 >= 300 && this.forever_125149bytes1 >= 30)
            {
               _ui["redPos"].visible = true;
            }
            else
            {
               _ui["redPos"].visible = false;
            }
         }
         else if(this.forever_125148 >= this.COUNTARR1[this.curGongRenRedPos])
         {
            _ui["redPos"].visible = true;
         }
         else
         {
            _ui["redPos"].visible = false;
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
               ModuleManager.showAppModule("AoTeMan_DiGuoDeYeXinMainPanel");
               break;
            case "recallBtn":
               doAction("FlgeReq1",26).then(refresh);
               break;
            case "unlockBtn_" + index:
               if(this.forever_125148 >= this.COUNTARR[index - 1])
               {
                  doAction("FlgeReq1",27 + index).then(refresh);
                  Alarm2.show("解锁成功！");
               }
               else
               {
                  Alarm2.show("矿石数量不足，无法解锁！");
               }
               break;
            case "unlockPageBtn":
               if(this.forever_125148 >= 100)
               {
                  doAction("FlgeReq1",31).then(refresh);
                  Alarm2.show("解锁成功！");
               }
               else
               {
                  Alarm2.show("矿石数量不足，无法解锁！");
               }
               break;
            case "fightBtn":
               if(this.forever_125152 > 0)
               {
                  this.lastNum1 = this.forever_125148;
                  this.lastNum2 = this.forever_125149bytes1;
                  if(this.forever_125149bytes2 > 0 && this.countPos > 0)
                  {
                     doAction("alert").then(function():void
                     {
                        if(KTool.getBit(forever_125153,2) == 1 && KTool.getBit(forever_125153,3) == 0)
                        {
                           if(lastChNum2 != 4 && lastChNum1 > 0)
                           {
                              doAction("alert1").then(function():void
                              {
                                 _ui["aniMc"].visible = true;
                                 closeEvent();
                                 AnimateManager.playMcAnimate(_ui,1,"aniMc",function():void
                                 {
                                    _ui["aniMc"].visible = false;
                                    openEvent();
                                    doAction("FlgeReq1",27).then(refresh);
                                 },false,true);
                              });
                           }
                           else
                           {
                              _ui["aniMc"].visible = true;
                              closeEvent();
                              AnimateManager.playMcAnimate(_ui,1,"aniMc",function():void
                              {
                                 _ui["aniMc"].visible = false;
                                 openEvent();
                                 doAction("FlgeReq1",27).then(refresh);
                              },false,true);
                           }
                        }
                        else if(KTool.getBit(forever_125153,3) == 1)
                        {
                           if(lastChNum3 != 4 && (lastChNum1 > 0 || lastChNum2 > 0))
                           {
                              doAction("alert1").then(function():void
                              {
                                 _ui["aniMc"].visible = true;
                                 closeEvent();
                                 AnimateManager.playMcAnimate(_ui,1,"aniMc",function():void
                                 {
                                    _ui["aniMc"].visible = false;
                                    openEvent();
                                    doAction("FlgeReq1",27).then(refresh);
                                 },false,true);
                              });
                           }
                           else
                           {
                              _ui["aniMc"].visible = true;
                              closeEvent();
                              AnimateManager.playMcAnimate(_ui,1,"aniMc",function():void
                              {
                                 _ui["aniMc"].visible = false;
                                 openEvent();
                                 doAction("FlgeReq1",27).then(refresh);
                              },false,true);
                           }
                        }
                        else
                        {
                           _ui["aniMc"].visible = true;
                           closeEvent();
                           AnimateManager.playMcAnimate(_ui,1,"aniMc",function():void
                           {
                              _ui["aniMc"].visible = false;
                              openEvent();
                              doAction("FlgeReq1",27).then(refresh);
                           },false,true);
                        }
                     });
                  }
                  else if(KTool.getBit(this.forever_125153,2) == 1 && KTool.getBit(this.forever_125153,3) == 0)
                  {
                     if(this.lastChNum2 != 4 && this.lastChNum1 > 0)
                     {
                        doAction("alert1").then(function():void
                        {
                           _ui["aniMc"].visible = true;
                           closeEvent();
                           AnimateManager.playMcAnimate(_ui,1,"aniMc",function():void
                           {
                              _ui["aniMc"].visible = false;
                              openEvent();
                              doAction("FlgeReq1",27).then(refresh);
                           },false,true);
                        });
                     }
                     else
                     {
                        _ui["aniMc"].visible = true;
                        closeEvent();
                        AnimateManager.playMcAnimate(_ui,1,"aniMc",function():void
                        {
                           _ui["aniMc"].visible = false;
                           openEvent();
                           doAction("FlgeReq1",27).then(refresh);
                        },false,true);
                     }
                  }
                  else if(KTool.getBit(this.forever_125153,3) == 1)
                  {
                     if(this.lastChNum3 != 4 && (this.lastChNum1 > 0 || this.lastChNum2 > 0))
                     {
                        doAction("alert1").then(function():void
                        {
                           _ui["aniMc"].visible = true;
                           closeEvent();
                           AnimateManager.playMcAnimate(_ui,1,"aniMc",function():void
                           {
                              _ui["aniMc"].visible = false;
                              openEvent();
                              doAction("FlgeReq1",27).then(refresh);
                           },false,true);
                        });
                     }
                     else
                     {
                        _ui["aniMc"].visible = true;
                        closeEvent();
                        AnimateManager.playMcAnimate(_ui,1,"aniMc",function():void
                        {
                           _ui["aniMc"].visible = false;
                           openEvent();
                           doAction("FlgeReq1",27).then(refresh);
                        },false,true);
                     }
                  }
                  else
                  {
                     _ui["aniMc"].visible = true;
                     closeEvent();
                     AnimateManager.playMcAnimate(_ui,1,"aniMc",function():void
                     {
                        _ui["aniMc"].visible = false;
                        openEvent();
                        doAction("FlgeReq1",27).then(refresh);
                     },false,true);
                  }
               }
               else
               {
                  Alarm2.show("收取次数不足。");
               }
               break;
            case "selectBtn":
               index = int(e.target.parent.name.split("_")[1]);
               if(this.forever_125149bytes2 > 0)
               {
                  if(index <= 4)
                  {
                     doAction("FlgeReq1",110 + index).then(refresh);
                  }
                  else if(index <= 8)
                  {
                     doAction("FlgeReq1",116 + index).then(refresh);
                  }
                  else if(index <= 12)
                  {
                     doAction("FlgeReq1",122 + index).then(refresh);
                  }
                  else
                  {
                     doAction("FlgeReq1",128 + index).then(refresh);
                  }
               }
               else
               {
                  Alarm2.show("工人数量不足，无法放置！");
               }
               break;
            case "curBtn":
               index = int(e.target.parent.name.split("_")[1]);
               if(index <= 4)
               {
                  doAction("FlgeReq1",210 + index).then(refresh);
               }
               else if(index <= 8)
               {
                  doAction("FlgeReq1",216 + index).then(refresh);
               }
               else if(index <= 12)
               {
                  doAction("FlgeReq1",222 + index).then(refresh);
               }
               else
               {
                  doAction("FlgeReq1",228 + index).then(refresh);
               }
               break;
            case "noPlayBtn":
               index = int(e.target.parent.name.split("_")[1]);
               if(this.forever_125149bytes2 > 0)
               {
                  doAction("FlgeReq1",150 + index).then(refresh);
               }
               else
               {
                  Alarm2.show("工人数量不足，无法放置！");
               }
               break;
            case "playbtn":
               index = int(e.target.parent.name.split("_")[1]);
               doAction("FlgeReq1",250 + index).then(refresh);
               break;
            case "plus":
               StatManager.sendStat2014("1025银河帝国的野心","打开了挑战贝利亚获取游戏次数界面","2024运营活动");
               _ui["page"].visible = true;
               _ui["page"]["countNum"].text = 3 - this.daily_207072;
               CommonUI.setEnabled(_ui["page"]["plus1"],this.daily_207072 == 3);
               _ui["page"]["mcc"].visible = this.daily_207072 == 3;
               break;
            case "gotoBtn":
               if(this.countNum >= 12)
               {
                  Alarm2.show("你已经完成皇帝贝利亚的所有任务！");
               }
               else
               {
                  StatManager.sendStat2014("1025银河帝国的野心","打开了交付贝利亚的任务界面","2024运营活动");
                  hide();
                  ModuleManager.showAppModule("AoTeMan_DiGuoDeYeXinS3Panel");
               }
               break;
            case "closebtn":
               _ui["page"].visible = false;
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "openBtn":
               if(this.daily_207072 == 3)
               {
                  Alarm2.show("今日剩余挑战次数不足！");
               }
               else
               {
                  hide();
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     if(FightManager.isWin)
                     {
                        Alarm2.show("挑战成功！获得3次资源收取次数！");
                     }
                     else
                     {
                        Alarm2.show("挑战失败，请再接再厉！");
                     }
                     ModuleManager.showAppModule("AoTeMan_DiGuoDeYeXinS1Panel",1);
                  });
                  FightManager.fightNoMapBoss("",18679);
               }
               break;
            case "oneKey":
               doAction("buyNum1").then(function():void
               {
                  Alarm2.show("挑战成功！获得3次资源收取次数！");
                  refresh();
               });
               break;
            case "plus1":
               doAction("buyNum2").then(function():void
               {
                  _activityHelper.update().then(function():void
                  {
                     daily_207072 = getValue("daily_207072");
                     _ui["page"]["countNum"].text = 3 - daily_207072;
                     CommonUI.setEnabled(_ui["page"]["plus1"],daily_207072 == 3);
                     _ui["page"]["mcc"].visible = daily_207072 == 3;
                     refresh();
                  });
               });
         }
      }
   }
}

