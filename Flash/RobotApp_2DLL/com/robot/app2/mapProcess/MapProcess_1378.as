package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class MapProcess_1378 extends BaseMapProcess
   {
       
      
      private var curNum:int;
      
      private var IsBattle:int = 0;
      
      private var ItemCount:int;
      
      private var LastItemCount:int;
      
      protected var curHours:int;
      
      protected var curTime1:Date;
      
      protected var curTime:int;
      
      protected var Item_1:int;
      
      protected var Item_2:int;
      
      protected var Item_3:int;
      
      protected var Item_4:int;
      
      protected var Item_5:int;
      
      private var hasNum:int;
      
      private var lastPos:Point;
      
      private var objP:Point;
      
      private var objP1:Point;
      
      private var initPos:Point;
      
      public function MapProcess_1378()
      {
         super();
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         depthLevel.addEventListener(MouseEvent.CLICK,this.onConClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         var e:* = param1;
         this.curTime1 = SystemTimerManager.sysBJDate;
         this.curHours = this.curTime1.getHours();
         this.curTime = SystemTimerManager.time;
         KTool.getMultiValue([18689],function(param1:Array):void
         {
            hasNum = param1[0];
         });
         KTool.getGlobalSubkeyValues(10020,[(this.curHours + 1) * 10 + 1,(this.curHours + 1) * 10 + 2,(this.curHours + 1) * 10 + 3,(this.curHours + 1) * 10 + 4,(this.curHours + 1) * 10 + 5],function(param1:Array):void
         {
            var _loc2_:int = 0;
            var _loc3_:int = 0;
            curNum = param1[0] + param1[1] + param1[2] + param1[3] + param1[4];
            Item_1 = param1[0];
            Item_2 = param1[1];
            Item_3 = param1[2];
            Item_4 = param1[3];
            Item_5 = param1[4];
            if(param1[0] < 995000 || param1[1] < 2000 || param1[2] < 1500 || param1[3] < 1000 || param1[4] < 500)
            {
               _loc2_ = 1;
               while(_loc2_ <= 5)
               {
                  depthLevel["cake_" + _loc2_].visible = true;
                  _loc2_++;
               }
            }
            else
            {
               _loc3_ = 1;
               while(_loc3_ <= 5)
               {
                  depthLevel["cake_" + _loc3_].visible = false;
                  _loc3_++;
               }
            }
         });
      }
      
      public function onConClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               KTool.changeMapWithCallBack(1,function():void
               {
                  ModuleManager.showAppModule("SmallCakeMainPanel");
               });
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cake_" + index:
               this.curTime = SystemTimerManager.time;
               this.curTime1 = SystemTimerManager.sysBJDate;
               this.curHours = this.curTime1.getHours();
               KTool.getGlobalSubkeyValues(10020,[(this.curHours + 1) * 10 + 1,(this.curHours + 1) * 10 + 2,(this.curHours + 1) * 10 + 3,(this.curHours + 1) * 10 + 4,(this.curHours + 1) * 10 + 5],function(param1:Array):void
               {
                  var va:Array = param1;
                  if(va[0] < 995000 || va[1] < 2000 || va[2] < 1500 || va[3] < 1000 || va[4] < 500)
                  {
                     if(hasNum < 10)
                     {
                        if(curTime % 3600 < 600)
                        {
                           Alarm.show("必须战胜蛋糕的主人才能获得蛋糕哦！",function():void
                           {
                              StatManager.sendStat2014("0614小蛋糕","点击场景内蛋糕进入战斗","2019运营活动");
                              SocketConnection.sendByQueue(42383,[8,1],function(param1:*):void
                              {
                                 var e:* = param1;
                                 FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                                 {
                                    FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                                    if(FightManager.isWin)
                                    {
                                       update();
                                       ModuleManager.showAppModule("SmallCakeS1Panel");
                                    }
                                    else
                                    {
                                       update();
                                    }
                                 });
                              });
                           });
                        }
                        else
                        {
                           Alarm.show("每个小时的前10分钟才是寻找小蛋糕时间哟！");
                        }
                     }
                     else
                     {
                        Alarm.show("今天已经拿了太多小蛋糕了，还是好好休息吧，明日再来！");
                     }
                  }
                  else
                  {
                     Alarm.show("你来晚了一步，蛋糕已经全部被拿走了，耐心的等待下一批蛋糕吧！");
                  }
               });
               break;
            case "cure":
               PetManager.cureAllFree();
         }
      }
      
      public function onWalkEnter(param1:RobotEvent) : void
      {
         var _loc2_:Point = null;
         var _loc3_:Number = NaN;
         _loc2_ = MainManager.actorModel.pos;
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
         depthLevel.removeEventListener(MouseEvent.CLICK,this.onConClick);
         ToolBarController.panel.visible = true;
      }
   }
}
