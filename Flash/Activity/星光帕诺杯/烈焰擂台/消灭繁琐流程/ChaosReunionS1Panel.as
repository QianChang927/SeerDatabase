package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.SpecAlert;
   import gs.TweenMax;
   import gs.easing.Linear;
   import org.taomee.utils.Utils;
   
   public class ChaosReunionS1Panel extends ActivityModel
   {
      private var curPos:int;
      
      private var Direction:int;
      
      private var m_count:int;
      
      private var m_state:int;
      
      private var m_curZou:int;
      
      private var _posArr:Array;
      
      private var lastItemNum:int = -1;
      
      private var lastFuel:int = -1;
      
      private var failTime:int;
      
      private var curFuel:int;
      
      private var teamIdx:int;
      
      private var isInFight:Boolean = false;
      
      public function ChaosReunionS1Panel()
      {
         this._posArr = [[53,458],[116,458],[179,458],[242,458],[305,458],[368,458],[53,402],[116,402],[179,402],[242,402],[305,402],[368,402],[53,336],[116,336],[179,336],[242,336],[305,336],[368,336],[53,280],[116,280],[179,280],[242,280],[305,280],[368,280],[53,220],[116,220],[179,220],[242,220],[305,220],[368,220],[53,155],[116,155],[179,155],[242,155],[305,155],[368,155]];
         super();
         resUrl = "2024/1018/FireTeamGameMain";
         configUrl = "2024/1018/FireTeamGameMainCfg";
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         if(data != null)
         {
            this.lastItemNum = (data as String).split("_")[0];
            this.lastFuel = (data as String).split("_")[1];
         }
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("0322混沌重聚","打开关卡1界面","2019运营活动");
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         var i:int;
         var teamName:Array = null;
         this.failTime = getValue("failTime");
         this.teamIdx = getValue("teamIdx");
         this.curPos = getValue("CurPos");
         this.Direction = getValue("Direction");
         this.m_count = getValue("Count");
         this.m_state = getValue("State");
         this.m_curZou = getValue("curzou");
         this.curFuel = this.failTime * 6 + 9;
         this.curFuel = this.curFuel >= 99 ? 99 : this.curFuel;
         this.curFuel -= this.m_count;
         _ui["numTxt"].text = this.curFuel;
         if(this.m_curZou != 0)
         {
            closeEvent();
            TweenMax.to(_ui["boss"],1,{
               "alpha":1,
               "x":this._posArr[this.m_curZou][0],
               "y":this._posArr[this.m_curZou][1],
               "scaleX":1,
               "scaleY":1,
               "onComplete":function():void
               {
                  openEvent();
                  hide();
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     if(!FightManager.isWin)
                     {
                        ModuleManager.showAppModule("ChaosReunionS1Panel",1 + "_" + curFuel);
                     }
                     else
                     {
                        ModuleManager.showAppModule("ChaosReunionS1Panel",2 + "_" + curFuel);
                     }
                  });
                  if(m_curZou >= 35)
                  {
                     FightManager.fightNoMapBoss("",18678);
                  }
                  else
                  {
                     FightManager.fightNoMapBoss("",15797);
                  }
               },
               "ease":Linear.easeOut
            });
         }
         else
         {
            _ui["boss"].x = this._posArr[this.curPos][0];
            _ui["boss"].y = this._posArr[this.curPos][1];
         }
         if(this.lastItemNum != -1)
         {
            if(this.lastItemNum == 1)
            {
               closeEvent();
               TweenMax.to(_ui["boss"],1,{
                  "alpha":1,
                  "x":this._posArr[this.curPos][0],
                  "y":this._posArr[this.curPos][1],
                  "scaleX":1,
                  "scaleY":1,
                  "onComplete":function():void
                  {
                     openEvent();
                  },
                  "ease":Linear.easeOut
               });
            }
            if(this.curPos == 0 && this.lastFuel == 1 && this.m_state != 1)
            {
               Alarm2.show("很遗憾，寻找钛然过程中燃料耗尽，返回起点补充燃料后将重新开始。");
            }
            this.lastItemNum = -1;
         }
         if(this.m_state == 1)
         {
            teamName = ["","烈焰","海啸","绿光"];
            Alarm.show(teamName[this.teamIdx] + "队星光积分+10!",function():void
            {
               Alarm.show("你找到钛然并进行了劝说，获得炽热印记*210！",function():void
               {
               });
            });
            hide();
            ModuleManager.showAppModule("FireTeamGameEnter");
            return;
         }
         for(i = 2; i <= 35; i++)
         {
            _ui["mc" + i].gotoAndStop(getValue("Pos_" + i) + 1);
         }
         if(this.Direction == 0)
         {
            _ui["mc98"].gotoAndStop(1);
            _ui["mc99"].gotoAndStop(1);
         }
         else if(this.Direction == 1)
         {
            _ui["mc98"].gotoAndStop(2);
            _ui["mc99"].visible = false;
         }
         else
         {
            _ui["mc98"].visible = false;
            _ui["mc99"].gotoAndStop(2);
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var cls:* = undefined;
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         if(btn_name == "close")
         {
            hide();
            ModuleManager.showAppModule("FireTeamGameEnter");
            return;
         }
         if(this.isInFight)
         {
            return;
         }
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("FireTeamGameEnter");
               break;
            case "fight":
               if(this.Direction == 0)
               {
                  doAction("energyTips");
               }
               else
               {
                  this.isInFight = true;
                  doAction("FlgeReq",1).then(refresh);
               }
               break;
            case "up":
               if(this.curPos == 30 || this.curPos == 31 || this.curPos == 32 || this.curPos == 33 || this.curPos == 34)
               {
                  doAction("energyTips2");
               }
               else
               {
                  doAction("FlgeReq1",1).then(refresh);
               }
               break;
            case "right":
               if(this.curPos == 5 || this.curPos == 11 || this.curPos == 17 || this.curPos == 23 || this.curPos == 29)
               {
                  doAction("energyTips2");
               }
               else
               {
                  doAction("FlgeReq1",2).then(refresh);
               }
               break;
            case "onekey":
               doAction("BuyItem").then(function():void
               {
                  doAction("FlgeReq",0).then(function():void
                  {
                     Alarm2.show("已完成！");
                     hide();
                     ModuleManager.showAppModule("ChaosReunionMainPanel");
                  });
               });
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               if(MainManager.actorInfo.superNono)
               {
                  PetManager.cureAll();
               }
               else
               {
                  cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
                  if(cls.bonusType == 1)
                  {
                     PetManager.cureAll();
                  }
                  else
                  {
                     SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
                     {
                        PetManager.cureAll();
                     });
                  }
               }
         }
      }
   }
}

