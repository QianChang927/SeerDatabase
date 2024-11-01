package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alarm2;
   
   public class CandyGreatBattleGameS1Panel extends ActivityModel
   {
      private var forever_125156byte1:int;
      
      private var forever_125156byte2:int;
      
      private var forever_125156byte3:int;
      
      private var forever_125157:int;
      
      private var StartArr:Array;
      
      private var getOkayArr:Array;
      
      private var countNum:Array;
      
      private var isPlayAni:Boolean = true;
      
      private var lastItemNum:int = -1;
      
      public function CandyGreatBattleGameS1Panel()
      {
         this.StartArr = [];
         this.getOkayArr = [];
         this.countNum = [2,2,2,2,3,3,3,3];
         super();
         resUrl = "2024/1101/CandyGreatBattleGameS1Panel";
         configUrl = "2024/1101/CandyGreatBattleGame";
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         if(data != null)
         {
            this.lastItemNum = data as int;
         }
      }
      
      override public function show() : void
      {
         super.show();
         _ui["aniMc"].visible = false;
         for(var k:int = 1; k <= 8; k++)
         {
            _ui["aniMcc_" + k].visible = false;
         }
      }
      
      override protected function updatePanel() : void
      {
         this.forever_125156byte1 = getValue("forever_125156byte1");
         this.forever_125156byte2 = getValue("forever_125156byte2");
         this.forever_125156byte3 = getValue("forever_125156byte3");
         this.StartArr = getValue("StartArr");
         this.getOkayArr = getValue("getOkayArr");
         this.forever_125157 = getValue("forever_125157");
         if(this.lastItemNum != -1)
         {
            this.lastItemNum = -1;
            this.isPlayAni = false;
         }
         this.updateDisplay();
         _ui["countNum"].text = this.forever_125156byte3 + "/" + this.countNum[this.forever_125156byte1];
      }
      
      private function updateDisplay() : void
      {
         var i:int;
         var k:int = 0;
         var c:int = 0;
         var j:int = 0;
         _ui["numTxt"].text = this.forever_125156byte2;
         for(i = 1; i <= 10; i++)
         {
            _ui["mc_" + i].gotoAndStop(this.getOkayArr[i - 1]);
         }
         if(this.StartArr[7] != 0)
         {
            for(k = 1; k <= 8; k++)
            {
               _ui["mcNum_" + k].visible = true;
               _ui["mcNum_" + k].gotoAndStop(this.StartArr[k - 1]);
            }
            if(this.isPlayAni == true)
            {
               this.isPlayAni = false;
               closeEvent();
               _ui["aniMcc_1"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_1",function():void
               {
                  _ui["aniMcc_1"].visible = false;
               },false,true);
               _ui["aniMcc_2"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_2",function():void
               {
                  _ui["aniMcc_2"].visible = false;
               },false,true);
               _ui["aniMcc_3"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_3",function():void
               {
                  _ui["aniMcc_3"].visible = false;
               },false,true);
               _ui["aniMcc_4"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_4",function():void
               {
                  _ui["aniMcc_4"].visible = false;
               },false,true);
               _ui["aniMcc_5"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_5",function():void
               {
                  _ui["aniMcc_5"].visible = false;
               },false,true);
               _ui["aniMcc_6"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_6",function():void
               {
                  _ui["aniMcc_6"].visible = false;
               },false,true);
               _ui["aniMcc_7"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_7",function():void
               {
                  _ui["aniMcc_7"].visible = false;
               },false,true);
               _ui["aniMcc_8"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_8",function():void
               {
                  _ui["aniMcc_8"].visible = false;
                  openEvent();
               },false,true);
            }
         }
         else if(this.StartArr[5] != 0)
         {
            for(c = 1; c <= 3; c++)
            {
               _ui["mcNum_" + c].gotoAndStop(this.StartArr[c - 1]);
            }
            _ui["mcNum_4"].visible = false;
            _ui["mcNum_5"].visible = false;
            _ui["mcNum_6"].visible = true;
            _ui["mcNum_7"].visible = true;
            _ui["mcNum_8"].visible = true;
            _ui["mcNum_6"].gotoAndStop(this.StartArr[3]);
            _ui["mcNum_7"].gotoAndStop(this.StartArr[4]);
            _ui["mcNum_8"].gotoAndStop(this.StartArr[5]);
            if(this.isPlayAni == true)
            {
               this.isPlayAni = false;
               closeEvent();
               _ui["aniMcc_1"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_1",function():void
               {
                  _ui["aniMcc_1"].visible = false;
               },false,true);
               _ui["aniMcc_2"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_2",function():void
               {
                  _ui["aniMcc_2"].visible = false;
               },false,true);
               _ui["aniMcc_3"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_3",function():void
               {
                  _ui["aniMcc_3"].visible = false;
               },false,true);
               _ui["aniMcc_6"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_6",function():void
               {
                  _ui["aniMcc_6"].visible = false;
               },false,true);
               _ui["aniMcc_7"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_7",function():void
               {
                  _ui["aniMcc_7"].visible = false;
               },false,true);
               _ui["aniMcc_8"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_8",function():void
               {
                  _ui["aniMcc_8"].visible = false;
                  openEvent();
               },false,true);
            }
         }
         else
         {
            for(j = 1; j <= 3; j++)
            {
               _ui["mcNum_" + j].gotoAndStop(this.StartArr[j - 1]);
            }
            _ui["mcNum_4"].visible = false;
            _ui["mcNum_5"].visible = false;
            _ui["mcNum_6"].visible = false;
            _ui["mcNum_7"].visible = true;
            _ui["mcNum_8"].visible = true;
            _ui["mcNum_7"].gotoAndStop(this.StartArr[3]);
            _ui["mcNum_8"].gotoAndStop(this.StartArr[4]);
            if(this.isPlayAni == true)
            {
               this.isPlayAni = false;
               closeEvent();
               _ui["aniMcc_1"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_1",function():void
               {
                  _ui["aniMcc_1"].visible = false;
               },false,true);
               _ui["aniMcc_2"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_2",function():void
               {
                  _ui["aniMcc_2"].visible = false;
               },false,true);
               _ui["aniMcc_3"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_3",function():void
               {
                  _ui["aniMcc_3"].visible = false;
               },false,true);
               _ui["aniMcc_7"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_7",function():void
               {
                  _ui["aniMcc_7"].visible = false;
               },false,true);
               _ui["aniMcc_8"].visible = true;
               AnimateManager.playMcAnimate(_ui,1,"aniMcc_8",function():void
               {
                  _ui["aniMcc_8"].visible = false;
                  openEvent();
               },false,true);
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
               ModuleManager.showAppModule("CandyGreatBattleGameMainPanel");
               break;
            case "clockwiseBtn":
               if(this.forever_125156byte2 > 0)
               {
                  doAction("alert").then(function():void
                  {
                     closeEvent();
                     _ui["aniMc"].visible = true;
                     doAction("FlgeReq1",9).then(refresh);
                     AnimateManager.playMcAnimate(_ui["aniMc"],1,"mc2",function():void
                     {
                     },false,true);
                     AnimateManager.playMcAnimate(_ui["aniMc"],1,"mc1",function():void
                     {
                        openEvent();
                        _ui["aniMc"].visible = false;
                     },false,true);
                  });
               }
               else
               {
                  Alarm2.show("旋转次数不足，请先前往获取。");
               }
               break;
            case "anticlockwiseBtn":
               if(this.forever_125156byte2 > 0)
               {
                  doAction("alert1").then(function():void
                  {
                     closeEvent();
                     _ui["aniMc"].visible = true;
                     doAction("FlgeReq1",10).then(refresh);
                     AnimateManager.playMcAnimate(_ui["aniMc"],1,"mc2",function():void
                     {
                     },false,true);
                     AnimateManager.playMcAnimate(_ui["aniMc"],1,"mc1",function():void
                     {
                        openEvent();
                        _ui["aniMc"].visible = false;
                     },false,true);
                  });
               }
               else
               {
                  Alarm2.show("旋转次数不足，请先前往获取。");
               }
               break;
            case "getBtn":
               if(this.forever_125156byte2 >= 98)
               {
                  Alarm2.show("旋转次数已经达到上限。");
               }
               else
               {
                  hide();
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     if(!FightManager.isWin)
                     {
                        Alarm2.show("挑战失败，请再接再厉！");
                     }
                     ModuleManager.showAppModule("CandyGreatBattleGameS1Panel",1);
                  });
                  FightManager.fightNoMapBoss("",18690);
               }
               break;
            case "fightBtn_" + index:
               hide();
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  if(!FightManager.isWin)
                  {
                     Alarm2.show("挑战失败，请再接再厉！");
                  }
                  ModuleManager.showAppModule("CandyGreatBattleGameS1Panel",1);
               });
               FightManager.fightNoMapBoss("",18679 + index);
               break;
            case "submitBtn":
               doAction("FlgeReq1",11).then(function():void
               {
                  var TEMP:int = 0;
                  TEMP = int(getValue("forever_125156byte3"));
                  _activityHelper.update().then(function():void
                  {
                     forever_125157 = getValue("forever_125157");
                     forever_125156byte3 = getValue("forever_125156byte3");
                     if(forever_125157 == 0)
                     {
                        Alarm2.show("恭喜你，完成了糖果盒的摆放委托！");
                        hide();
                        ModuleManager.showAppModule("CandyGreatBattleGameMainPanel");
                     }
                     else if(forever_125156byte3 > TEMP)
                     {
                        Alarm2.show("恭喜你完成了" + (forever_125156byte3 - TEMP) + "个糖果盒的摆放！");
                        isPlayAni = true;
                        refresh();
                     }
                     else
                     {
                        Alarm2.show("当前糖果盒还不符合目标糖果盒的颜色摆放哦！");
                        refresh();
                     }
                  });
               });
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
         }
      }
   }
}

