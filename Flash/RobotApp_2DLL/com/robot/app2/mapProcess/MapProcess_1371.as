package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ItemManager;
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
   
   public class MapProcess_1371 extends BaseMapProcess
   {
       
      
      private var curNum:int;
      
      private var IsBattle:int = 0;
      
      private var ItemCount:int;
      
      private var LastItemCount:int;
      
      protected var curHours:int;
      
      protected var curTime1:Date;
      
      protected var curTime:int;
      
      private var hasNum:int;
      
      private var lastPos:Point;
      
      private var objP:Point;
      
      private var objP1:Point;
      
      private var initPos:Point;
      
      private var _maxNum:int = 1000000;
      
      public function MapProcess_1371()
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
         KTool.getMultiValue([14810],function(param1:Array):void
         {
            hasNum = param1[0] & 65535;
         });
         KTool.getGlobalSubkeyValues(10019,[this.curHours],function(param1:Array):void
         {
            var _loc2_:int = 0;
            curNum = param1[0];
            if(curNum >= _maxNum)
            {
               _loc2_ = 1;
               while(_loc2_ <= 5)
               {
                  depthLevel["stone_" + _loc2_].visible = false;
                  _loc2_++;
               }
            }
         });
         ItemManager.updateItems([1719632],function():void
         {
            var _loc1_:Array = new Array();
            _loc1_[0] = ItemManager.getNumByID(1719632);
            ItemCount = _loc1_[0];
         });
         if(this.IsBattle == 1)
         {
            KTool.getPlayerInfo([1008],function(param1:Array):void
            {
               if(param1[0] == 1)
               {
                  Alarm.show("恭喜你成功拾取到了砖头，别忘了上交给阿浣哦！");
               }
               else if(param1[0] == 2)
               {
                  Alarm.show("这个精灵忘了带砖头出门，不过它送给了你一些经验券！");
               }
            });
            this.IsBattle = 0;
         }
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
                  ModuleManager.showAppModule("LaborDayThemeActivityS1Panel");
               });
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "stone_" + index:
               StatManager.sendStat2014("0430劳动节主题活动","场景中点击砖头","2019运营活动");
               this.curTime = SystemTimerManager.time;
               if(this.curNum < this._maxNum)
               {
                  if(this.hasNum < 10)
                  {
                     if(this.curTime % 3600 < 600)
                     {
                        Alarm.show("必须战胜砖头的主人才能获得砖头哦！",function():void
                        {
                           StatManager.sendStat2014("0430劳动节主题活动","砖头守护弹窗点击确定进入战斗","2019运营活动");
                           LastItemCount = ItemCount;
                           SocketConnection.sendByQueue(45752,[25,2],function(param1:*):void
                           {
                              var e:* = param1;
                              FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                              {
                                 FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                                 if(FightManager.isWin)
                                 {
                                    IsBattle = 1;
                                 }
                                 update();
                              });
                           });
                        });
                     }
                     else
                     {
                        Alarm.show("每个小时的前10分钟才是搬砖时间哟！");
                     }
                  }
                  else
                  {
                     Alarm.show("今天已经搬了太多的砖了，还是好好休息吧，明日再来！");
                  }
               }
               else
               {
                  Alarm.show("来晚了一步，砖头已经全部被搬走了，耐心的等待下一批砖头吧！");
               }
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
