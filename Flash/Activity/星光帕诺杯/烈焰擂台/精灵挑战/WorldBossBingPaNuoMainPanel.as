package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   
   public class WorldBossBingPaNuoMainPanel extends ActivityModel
   {
      private var curBit:int;
      
      private var sumPlay:int;
      
      private var zongNum:int;
      
      private var zongAktNum:int;
      
      private var curDayNum:int;
      
      private var curNum:int;
      
      private var curAktNum:int;
      
      private var _info:UserInfo;
      
      private var player_info1606:int;
      
      private var player_info1607:int;
      
      private var daily_bitbuf1000631:Boolean;
      
      private var daily_bitbuf1000632:Boolean;
      
      private var daily_bitbuf1000633:Boolean;
      
      private var curBtn:int = 1;
      
      private var curRankBtn:int = 1;
      
      protected var curTime:Date;
      
      protected var leftDays:int;
      
      private var curDayIndex:int;
      
      private var curToDayIndex:int;
      
      private var curPlayer:int;
      
      private var tempIndex1:int;
      
      private var tempIndex2:int;
      
      private var tempIndex3:int;
      
      private var COUNTARR:Array;
      
      private var COUNTARR1:Array;
      
      private var COUNTARR2:Array;
      
      private var isOk:int = -1;
      
      private var lastNum:int = 0;
      
      private var lastAKT:int = 0;
      
      private var lastItemNum:Array;
      
      public function WorldBossBingPaNuoMainPanel()
      {
         this.COUNTARR = [15,10,7];
         this.COUNTARR1 = ["烈焰","海啸","绿光"];
         this.COUNTARR2 = [5,30,20,20];
         this.lastItemNum = [];
         super();
         resUrl = "2024/1011/WorldBossBingPaNuoMainPanel";
         configUrl = "2024/1011/WorldBossBingPaNuo";
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("1011世界BOSS·水帕诺","进入【世界BOSS·水帕诺】活动主界面","2024运营活动");
         for(var i:int = 1; i <= 3; i++)
         {
            _ui["page_" + i].visible = false;
         }
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         if(data != null)
         {
            this.lastItemNum = data as Array;
         }
         this.isOk = this.lastItemNum[0];
         this.lastNum = this.lastItemNum[1];
         this.lastAKT = this.lastItemNum[2];
      }
      
      override protected function updatePanel() : void
      {
         this.curTime = SystemTimerManager.sysBJDate;
         this.leftDays = this.curTime.getDate() - 10;
         if(this.leftDays == 1)
         {
            this.curDayIndex = 1;
         }
         else if(this.leftDays == 2)
         {
            this.curDayIndex = 7;
            this.curToDayIndex = 1;
         }
         else if(this.leftDays == 3)
         {
            this.curDayIndex = 13;
            this.curToDayIndex = 7;
         }
         else if(this.leftDays == 4)
         {
            this.curDayIndex = 19;
            this.curToDayIndex = 13;
         }
         else if(this.leftDays == 5)
         {
            this.curDayIndex = 25;
            this.curToDayIndex = 19;
         }
         else if(this.leftDays == 6)
         {
            this.curDayIndex = 31;
            this.curToDayIndex = 25;
         }
         else if(this.leftDays == 7)
         {
            this.curDayIndex = 37;
            this.curToDayIndex = 31;
         }
         else
         {
            this.curDayIndex = 37;
            this.curToDayIndex = 37;
         }
         this.updateData();
         this.updateDisplay();
      }
      
      private function updateData() : void
      {
         this.curPlayer = getValue("curPlayer");
         this.curBit = getValue("curBit");
         this.sumPlay = getValue("sumPlay");
         this.zongNum = getValue("zongNum");
         this.zongAktNum = getValue("zongAktNum");
         this.curDayNum = getValue("curDayNum");
         this.curNum = getValue("curNum");
         this.curAktNum = getValue("curAktNum");
         this.player_info1606 = getValue("player_info1606");
         this.player_info1607 = getValue("player_info1607");
         this.daily_bitbuf1000631 = getValue("daily_bitbuf1000631");
         this.daily_bitbuf1000632 = getValue("daily_bitbuf1000632");
         this.daily_bitbuf1000633 = getValue("daily_bitbuf1000633");
         if(this.isOk == 1)
         {
            this.isOk = -1;
            _ui["page_1"].visible = true;
            _ui["page_1"]["num_1"].text = this.player_info1606;
            _ui["page_1"]["num_2"].text = this.player_info1607;
            if(this.player_info1606 == 0 || this.player_info1606 >= this.lastNum)
            {
               _ui["page_1"]["new_1"].visible = false;
            }
            else
            {
               _ui["page_1"]["new_1"].visible = true;
            }
            if(this.player_info1607 == 0 || this.player_info1607 <= this.lastAKT)
            {
               _ui["page_1"]["new_2"].visible = false;
            }
            else
            {
               _ui["page_1"]["new_2"].visible = true;
            }
         }
      }
      
      private function updateDisplay() : void
      {
         if(this.curPlayer == 0)
         {
            _ui["curMc"].visible = false;
         }
         else
         {
            _ui["curMc"].visible = true;
            _ui["curMc"].gotoAndStop(this.curPlayer);
         }
         if(this.curBtn == 1)
         {
            _ui["dayMc"].gotoAndStop(2);
            _ui["bestMc"].gotoAndStop(1);
            _ui["numTxt_1"].text = this.curNum;
            _ui["numTxt_2"].text = this.curAktNum;
         }
         else
         {
            _ui["dayMc"].gotoAndStop(1);
            _ui["bestMc"].gotoAndStop(2);
            _ui["numTxt_1"].text = this.zongNum;
            _ui["numTxt_2"].text = this.zongAktNum;
         }
         _ui["dayCount"].text = 5 - this.curDayNum + "/5";
         CommonUI.setEnabled(_ui["challengeMc"]["challengeBtn"],this.curDayNum < 5);
         _ui["getNum"].text = 5 - this.sumPlay + "/5";
         if(this.sumPlay == 5)
         {
            _ui["getMc"].gotoAndStop(3);
         }
         else if(this.daily_bitbuf1000631 == false)
         {
            _ui["getMc"].gotoAndStop(1);
            CommonUI.setEnabled(_ui["getMc"]["getBtn"],false);
         }
         else if(this.daily_bitbuf1000632 == false)
         {
            _ui["getMc"].gotoAndStop(1);
            CommonUI.setEnabled(_ui["getMc"]["getBtn"],true);
         }
         else
         {
            _ui["getMc"].gotoAndStop(2);
         }
         if(SystemTimerManager.getIsInActivity("20241018","*"))
         {
            _ui["mcccc"].visible = false;
            _ui["mccccc"].visible = false;
            _ui["dayCount"].visible = false;
            CommonUI.setEnabled(_ui["challengeMc"]["challengeBtn"],false);
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
               ModuleManager.showAppModule("XingGuangPaNuoBeiS1Panel");
               break;
            case "close_1":
               _ui["page_1"].visible = false;
               break;
            case "close_2":
               _ui["page_2"].visible = false;
               break;
            case "close_3":
               _ui["page_3"].visible = false;
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "challengeBtn":
               if(this.curPlayer == 0)
               {
                  doAction("alarm").then(function():void
                  {
                     hide();
                     ModuleManager.showAppModule("XingGuangPaNuoBeiMainPanel");
                  });
               }
               else
               {
                  hide();
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     ModuleManager.showAppModule("WorldBossBingPaNuoMainPanel",[1,zongNum,zongAktNum]);
                  });
                  FightManager.fightNoMapBoss("",18667);
               }
               break;
            case "getBtn":
               doAction("FlgeReq1",1).then(refresh);
               break;
            case "dayBtn":
               this.curBtn = 1;
               refresh();
               break;
            case "besBtn":
               this.curBtn = 2;
               refresh();
               break;
            case "pageDayBtn":
               this.curRankBtn = 1;
               this.showRankPage();
               break;
            case "lastDayBtn":
               this.curRankBtn = 2;
               this.showRankPage();
               break;
            case "taskBtn":
               this.showTaksPage();
               break;
            case "RankingBtn":
               _ui["page_3"].visible = true;
               this.showRankPage();
               break;
            case "pageBtn":
               index = int(e.target.parent.name.split("_")[1]);
               doAction("FlgeReq1",index + 1).then(function():void
               {
                  _activityHelper.update().then(function():void
                  {
                     curBit = getValue("curBit");
                     daily_bitbuf1000631 = getValue("daily_bitbuf1000631");
                     daily_bitbuf1000632 = getValue("daily_bitbuf1000632");
                     daily_bitbuf1000633 = getValue("daily_bitbuf1000633");
                     showTaksPage();
                     refresh();
                  });
                  Alarm2.show(COUNTARR1[curPlayer - 1] + "队星光积分+" + COUNTARR2[index - 1] + "！");
               });
         }
      }
      
      private function showTaksPage() : void
      {
         _ui["page_2"].visible = true;
         if(this.daily_bitbuf1000631 == true)
         {
            if(this.daily_bitbuf1000633 == true)
            {
               _ui["page_2"]["mc_1"].gotoAndStop(3);
            }
            else
            {
               _ui["page_2"]["mc_1"].gotoAndStop(2);
            }
         }
         else
         {
            _ui["page_2"]["mc_1"].gotoAndStop(1);
         }
         for(var i:int = 1; i <= 3; i++)
         {
            if(KTool.getBit(this.curBit,i) > 0)
            {
               _ui["page_2"]["mc_" + (i + 1)].gotoAndStop(3);
            }
            else if(this.zongNum <= this.COUNTARR[i - 1] && this.zongNum != 0)
            {
               _ui["page_2"]["mc_" + (i + 1)].gotoAndStop(2);
            }
            else
            {
               _ui["page_2"]["mc_" + (i + 1)].gotoAndStop(1);
            }
         }
      }
      
      private function showRankPage() : void
      {
         var i:int = 0;
         this.tempIndex1 = this.tempIndex2 = this.tempIndex3 = 0;
         if(this.curRankBtn == 1)
         {
            _ui["page_3"]["dayMc_1"].gotoAndStop(2);
            _ui["page_3"]["dayMc_2"].gotoAndStop(1);
            if(this.leftDays >= 8)
            {
               for(i = 1; i <= 3; i++)
               {
                  _ui["page_3"]["hhNum_" + i].text = "";
                  _ui["page_3"]["num_" + i].text = "";
               }
               _ui["page_3"]["mc_1"].gotoAndStop(1);
               _ui["page_3"]["mc_2"].gotoAndStop(2);
               _ui["page_3"]["mc_3"].gotoAndStop(3);
            }
            else
            {
               KTool.getGlobalSubkeyValues(285,[this.curDayIndex,this.curDayIndex + 1,this.curDayIndex + 2,this.curDayIndex + 3,this.curDayIndex + 4,this.curDayIndex + 5],function(arr:Array):void
               {
                  if(arr[1] >= arr[3] && arr[1] >= arr[5])
                  {
                     _ui["page_3"]["mc_1"].gotoAndStop(1);
                     _ui["page_3"]["num_1"].text = arr[1];
                     tempIndex1 = 1;
                     UserInfoManager.getInfo(arr[0],function(info:UserInfo):void
                     {
                        _ui["page_3"]["hhNum_1"].text = info.nick;
                     });
                  }
                  else if(arr[1] >= arr[3] || arr[1] >= arr[5])
                  {
                     _ui["page_3"]["mc_2"].gotoAndStop(1);
                     _ui["page_3"]["num_2"].text = arr[1];
                     UserInfoManager.getInfo(arr[0],function(info:UserInfo):void
                     {
                        _ui["page_3"]["hhNum_2"].text = info.nick;
                     });
                     tempIndex2 = 1;
                  }
                  else
                  {
                     _ui["page_3"]["mc_3"].gotoAndStop(1);
                     _ui["page_3"]["num_3"].text = arr[1];
                     UserInfoManager.getInfo(arr[0],function(info:UserInfo):void
                     {
                        _ui["page_3"]["hhNum_3"].text = info.nick;
                     });
                  }
                  if(arr[3] >= arr[1] && arr[3] >= arr[5])
                  {
                     if(tempIndex1 == 1)
                     {
                        if(tempIndex2 == 1)
                        {
                           _ui["page_3"]["mc_3"].gotoAndStop(2);
                           _ui["page_3"]["num_3"].text = arr[3];
                           UserInfoManager.getInfo(arr[2],function(info:UserInfo):void
                           {
                              _ui["page_3"]["hhNum_3"].text = info.nick;
                           });
                        }
                        else
                        {
                           _ui["page_3"]["mc_2"].gotoAndStop(2);
                           _ui["page_3"]["num_2"].text = arr[3];
                           tempIndex2 = 1;
                           UserInfoManager.getInfo(arr[2],function(info:UserInfo):void
                           {
                              _ui["page_3"]["hhNum_2"].text = info.nick;
                           });
                        }
                     }
                     else
                     {
                        _ui["page_3"]["mc_1"].gotoAndStop(2);
                        _ui["page_3"]["num_1"].text = arr[3];
                        tempIndex1 = 1;
                        UserInfoManager.getInfo(arr[2],function(info:UserInfo):void
                        {
                           _ui["page_3"]["hhNum_1"].text = info.nick;
                        });
                     }
                  }
                  else if(arr[3] >= arr[1] || arr[3] >= arr[5])
                  {
                     if(tempIndex2 == 1)
                     {
                        _ui["page_3"]["mc_3"].gotoAndStop(2);
                        _ui["page_3"]["num_3"].text = arr[3];
                        UserInfoManager.getInfo(arr[2],function(info:UserInfo):void
                        {
                           _ui["page_3"]["hhNum_3"].text = info.nick;
                        });
                     }
                     else
                     {
                        _ui["page_3"]["mc_2"].gotoAndStop(2);
                        _ui["page_3"]["num_2"].text = arr[3];
                        tempIndex2 = 1;
                        UserInfoManager.getInfo(arr[2],function(info:UserInfo):void
                        {
                           _ui["page_3"]["hhNum_2"].text = info.nick;
                        });
                     }
                  }
                  else
                  {
                     _ui["page_3"]["mc_3"].gotoAndStop(2);
                     _ui["page_3"]["num_3"].text = arr[3];
                     UserInfoManager.getInfo(arr[2],function(info:UserInfo):void
                     {
                        _ui["page_3"]["hhNum_3"].text = info.nick;
                     });
                  }
                  if(arr[5] >= arr[3] && arr[5] >= arr[1])
                  {
                     if(tempIndex1 == 1)
                     {
                        if(tempIndex2 == 1)
                        {
                           _ui["page_3"]["mc_3"].gotoAndStop(3);
                           _ui["page_3"]["num_3"].text = arr[5];
                           UserInfoManager.getInfo(arr[4],function(info:UserInfo):void
                           {
                              _ui["page_3"]["hhNum_3"].text = info.nick;
                           });
                        }
                        else
                        {
                           _ui["page_3"]["mc_2"].gotoAndStop(3);
                           _ui["page_3"]["num_2"].text = arr[5];
                           tempIndex2 = 1;
                           UserInfoManager.getInfo(arr[4],function(info:UserInfo):void
                           {
                              _ui["page_3"]["hhNum_2"].text = info.nick;
                           });
                        }
                     }
                     else
                     {
                        _ui["page_3"]["mc_1"].gotoAndStop(3);
                        _ui["page_3"]["num_1"].text = arr[5];
                        tempIndex1 = 1;
                        UserInfoManager.getInfo(arr[4],function(info:UserInfo):void
                        {
                           _ui["page_3"]["hhNum_1"].text = info.nick;
                        });
                     }
                  }
                  else if(arr[5] >= arr[3] || arr[5] >= arr[1])
                  {
                     if(tempIndex2 == 1)
                     {
                        _ui["page_3"]["mc_3"].gotoAndStop(3);
                        _ui["page_3"]["num_3"].text = arr[5];
                        UserInfoManager.getInfo(arr[4],function(info:UserInfo):void
                        {
                           _ui["page_3"]["hhNum_3"].text = info.nick;
                        });
                     }
                     else
                     {
                        _ui["page_3"]["mc_2"].gotoAndStop(3);
                        _ui["page_3"]["num_2"].text = arr[5];
                        tempIndex2 = 1;
                        UserInfoManager.getInfo(arr[4],function(info:UserInfo):void
                        {
                           _ui["page_3"]["hhNum_2"].text = info.nick;
                        });
                     }
                  }
                  else
                  {
                     _ui["page_3"]["mc_3"].gotoAndStop(3);
                     _ui["page_3"]["num_3"].text = arr[5];
                     UserInfoManager.getInfo(arr[4],function(info:UserInfo):void
                     {
                        _ui["page_3"]["hhNum_3"].text = info.nick;
                     });
                  }
               });
            }
         }
         else
         {
            _ui["page_3"]["dayMc_1"].gotoAndStop(1);
            _ui["page_3"]["dayMc_2"].gotoAndStop(2);
            if(this.leftDays == 1 || this.leftDays >= 9)
            {
               for(i = 1; i <= 3; i++)
               {
                  _ui["page_3"]["hhNum_" + i].text = "";
                  _ui["page_3"]["num_" + i].text = "";
               }
               _ui["page_3"]["mc_1"].gotoAndStop(1);
               _ui["page_3"]["mc_2"].gotoAndStop(2);
               _ui["page_3"]["mc_3"].gotoAndStop(3);
            }
            else
            {
               KTool.getGlobalSubkeyValues(285,[this.curToDayIndex,this.curToDayIndex + 1,this.curToDayIndex + 2,this.curToDayIndex + 3,this.curToDayIndex + 4,this.curToDayIndex + 5],function(arr:Array):void
               {
                  if(arr[1] >= arr[3] && arr[1] >= arr[5])
                  {
                     _ui["page_3"]["mc_1"].gotoAndStop(1);
                     _ui["page_3"]["num_1"].text = arr[1];
                     tempIndex1 = 1;
                     UserInfoManager.getInfo(arr[0],function(info:UserInfo):void
                     {
                        _ui["page_3"]["hhNum_1"].text = info.nick;
                     });
                  }
                  else if(arr[1] >= arr[3] || arr[1] >= arr[5])
                  {
                     _ui["page_3"]["mc_2"].gotoAndStop(1);
                     _ui["page_3"]["num_2"].text = arr[1];
                     UserInfoManager.getInfo(arr[0],function(info:UserInfo):void
                     {
                        _ui["page_3"]["hhNum_2"].text = info.nick;
                     });
                     tempIndex2 = 1;
                  }
                  else
                  {
                     _ui["page_3"]["mc_3"].gotoAndStop(1);
                     _ui["page_3"]["num_3"].text = arr[1];
                     UserInfoManager.getInfo(arr[0],function(info:UserInfo):void
                     {
                        _ui["page_3"]["hhNum_3"].text = info.nick;
                     });
                  }
                  if(arr[3] >= arr[1] && arr[3] >= arr[5])
                  {
                     if(tempIndex1 == 1)
                     {
                        if(tempIndex2 == 1)
                        {
                           _ui["page_3"]["mc_3"].gotoAndStop(2);
                           _ui["page_3"]["num_3"].text = arr[3];
                           UserInfoManager.getInfo(arr[2],function(info:UserInfo):void
                           {
                              _ui["page_3"]["hhNum_3"].text = info.nick;
                           });
                        }
                        else
                        {
                           _ui["page_3"]["mc_2"].gotoAndStop(2);
                           _ui["page_3"]["num_2"].text = arr[3];
                           tempIndex2 = 1;
                           UserInfoManager.getInfo(arr[2],function(info:UserInfo):void
                           {
                              _ui["page_3"]["hhNum_2"].text = info.nick;
                           });
                        }
                     }
                     else
                     {
                        _ui["page_3"]["mc_1"].gotoAndStop(2);
                        _ui["page_3"]["num_1"].text = arr[3];
                        tempIndex1 = 1;
                        UserInfoManager.getInfo(arr[2],function(info:UserInfo):void
                        {
                           _ui["page_3"]["hhNum_1"].text = info.nick;
                        });
                     }
                  }
                  else if(arr[3] >= arr[1] || arr[3] >= arr[5])
                  {
                     if(tempIndex2 == 1)
                     {
                        _ui["page_3"]["mc_3"].gotoAndStop(2);
                        _ui["page_3"]["num_3"].text = arr[3];
                        UserInfoManager.getInfo(arr[2],function(info:UserInfo):void
                        {
                           _ui["page_3"]["hhNum_3"].text = info.nick;
                        });
                     }
                     else
                     {
                        _ui["page_3"]["mc_2"].gotoAndStop(2);
                        _ui["page_3"]["num_2"].text = arr[3];
                        tempIndex2 = 1;
                        UserInfoManager.getInfo(arr[2],function(info:UserInfo):void
                        {
                           _ui["page_3"]["hhNum_2"].text = info.nick;
                        });
                     }
                  }
                  else
                  {
                     _ui["page_3"]["mc_3"].gotoAndStop(2);
                     _ui["page_3"]["num_3"].text = arr[3];
                     UserInfoManager.getInfo(arr[2],function(info:UserInfo):void
                     {
                        _ui["page_3"]["hhNum_3"].text = info.nick;
                     });
                  }
                  if(arr[5] >= arr[3] && arr[5] >= arr[1])
                  {
                     if(tempIndex1 == 1)
                     {
                        if(tempIndex2 == 1)
                        {
                           _ui["page_3"]["mc_3"].gotoAndStop(3);
                           _ui["page_3"]["num_3"].text = arr[5];
                           UserInfoManager.getInfo(arr[4],function(info:UserInfo):void
                           {
                              _ui["page_3"]["hhNum_3"].text = info.nick;
                           });
                        }
                        else
                        {
                           _ui["page_3"]["mc_2"].gotoAndStop(3);
                           _ui["page_3"]["num_2"].text = arr[5];
                           tempIndex2 = 1;
                           UserInfoManager.getInfo(arr[4],function(info:UserInfo):void
                           {
                              _ui["page_3"]["hhNum_2"].text = info.nick;
                           });
                        }
                     }
                     else
                     {
                        _ui["page_3"]["mc_1"].gotoAndStop(3);
                        _ui["page_3"]["num_1"].text = arr[5];
                        tempIndex1 = 1;
                        UserInfoManager.getInfo(arr[4],function(info:UserInfo):void
                        {
                           _ui["page_3"]["hhNum_1"].text = info.nick;
                        });
                     }
                  }
                  else if(arr[5] >= arr[3] || arr[5] >= arr[1])
                  {
                     if(tempIndex2 == 1)
                     {
                        _ui["page_3"]["mc_3"].gotoAndStop(3);
                        _ui["page_3"]["num_3"].text = arr[5];
                        UserInfoManager.getInfo(arr[4],function(info:UserInfo):void
                        {
                           _ui["page_3"]["hhNum_3"].text = info.nick;
                        });
                     }
                     else
                     {
                        _ui["page_3"]["mc_2"].gotoAndStop(3);
                        _ui["page_3"]["num_2"].text = arr[5];
                        tempIndex2 = 1;
                        UserInfoManager.getInfo(arr[4],function(info:UserInfo):void
                        {
                           _ui["page_3"]["hhNum_2"].text = info.nick;
                        });
                     }
                  }
                  else
                  {
                     _ui["page_3"]["mc_3"].gotoAndStop(3);
                     _ui["page_3"]["num_3"].text = arr[5];
                     UserInfoManager.getInfo(arr[4],function(info:UserInfo):void
                     {
                        _ui["page_3"]["hhNum_3"].text = info.nick;
                     });
                  }
               });
            }
         }
      }
   }
}

