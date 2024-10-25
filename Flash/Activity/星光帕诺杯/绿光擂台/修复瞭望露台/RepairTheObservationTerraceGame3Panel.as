package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.BaseModule;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import gs.TweenMax;
   import gs.easing.Linear;
   
   public class RepairTheObservationTerraceGame3Panel extends BaseModule
   {
      private var _mainUI:MovieClip;
      
      protected var m_curPosX:Number;
      
      protected var m_curPosY:Number;
      
      protected var m_nowPosX:Number;
      
      protected var m_nowPosY:Number;
      
      protected var m_curIndex:Number = 0;
      
      protected var m_Count:int = 0;
      
      protected var m_Count1:int = 0;
      
      private var m_IsClick:Boolean = false;
      
      private var m_IsOk:Boolean;
      
      private var m_IsFirst:Boolean = false;
      
      private var _OKposArr:Array;
      
      private var _curposArr:Array;
      
      private var _surplusTime:int = 90;
      
      private var _maxFrame:int = 91;
      
      private var _posArr:Array;
      
      private var _isDone:Boolean = false;
      
      public function RepairTheObservationTerraceGame3Panel()
      {
         this._OKposArr = [1,2,3,4,5,6,7,8,9,10,11,12];
         this._curposArr = [3,6,1,7,11,2,8,10,12,9,5,4];
         this._posArr = [];
         super();
         resUrl = "2024/1025/RepairTheObservationTerraceGame3Panel";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         var x:Number = NaN;
         var y:Number = NaN;
         var point:Point = null;
         this._mainUI = _ui;
         this._posArr = new Array();
         for(var i:int = 0; i < 12; i++)
         {
            x = Number(this._mainUI["print_" + this._curposArr[i]].x);
            y = Number(this._mainUI["print_" + this._curposArr[i]].y);
            point = new Point(x,y);
            this._posArr.push(point);
         }
         StatManager.sendStat2014("1025修补逃生舱","打开系统错乱面板","2019运营活动");
         this.superShow();
         this._mainUI.mc.gotoAndStop(1);
      }
      
      private function superShow() : void
      {
         eventCom.addClickEvent(this._mainUI,this.onClick);
         for(var i:int = 1; i < 13; i++)
         {
            eventCom.addClickEvent(this._mainUI["print_" + i],this.onGoBtnClick);
         }
         super.show();
      }
      
      private function onGoBtnClick(event:MouseEvent) : void
      {
         var index:int = int(event.currentTarget.name.split("_")[1]);
         if(this.m_IsClick == false)
         {
            this.m_Count = 0;
            this.m_Count1 = 0;
            this.m_curPosX = _ui["print_" + index].x;
            this.m_curPosY = _ui["print_" + index].y;
            this.m_IsClick = true;
            this.m_curIndex = index;
         }
         else
         {
            this.m_nowPosX = _ui["print_" + index].x;
            this.m_nowPosY = _ui["print_" + index].y;
            closeEvent();
            TweenMax.to(_ui["print_" + this.m_curIndex],1,{
               "alpha":1,
               "x":this.m_nowPosX,
               "y":this.m_nowPosY,
               "scaleX":1,
               "scaleY":1,
               "onComplete":function():void
               {
                  openEvent();
                  update();
               },
               "ease":Linear.easeOut
            });
            TweenMax.to(_ui["print_" + index],1,{
               "alpha":1,
               "x":this.m_curPosX,
               "y":this.m_curPosY,
               "scaleX":1,
               "scaleY":1,
               "onComplete":function():void
               {
                  openEvent();
                  update();
               },
               "ease":Linear.easeOut
            });
            this.m_IsClick = false;
         }
      }
      
      private function onClick(event:MouseEvent) : void
      {
         var index:int = int(event.target.name.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(event.target.name)
         {
            case "close":
               Alert.show("拼图进度不会保存哟，确定退出吗",function():void
               {
                  hide();
                  ModuleManager.showAppModule("RepairTheObservationTerraceMainPanel");
               });
               break;
            case "start":
               _ui["panel"].visible = false;
               this.update(this.superShow);
         }
      }
      
      private function getDone() : Boolean
      {
         var num:int = 0;
         for(var i:int = 0; i < 12; i++)
         {
            if(this._mainUI["print_" + (i + 1)].x == this._posArr[i].x && this._mainUI["print_" + (i + 1)].y == this._posArr[i].y)
            {
               num++;
            }
            else
            {
               trace("x:" + this._mainUI["print_" + (i + 1)].x + "y:" + this._mainUI["print_" + (i + 1)].y);
            }
         }
         if(num >= 12)
         {
            return true;
         }
         return false;
      }
      
      private function update(fun:Function = null) : void
      {
         if(this.m_IsFirst == false)
         {
            if(this.getDone())
            {
               sendCmd(43309,[3,6],function():void
               {
                  onSuccessAlarm();
                  hide();
                  ModuleManager.showAppModule("RepairTheObservationTerraceMainPanel");
               });
               this.m_IsFirst = true;
            }
         }
         if(KTool.getBit(10681,10) == 1)
         {
            if(!this._isDone)
            {
               this._isDone = true;
               SystemTimerManager.removeTickFun(this.onTimer);
               this.onSuccessAlarm();
               this.hide();
               ModuleManager.showAppModule("RepairTheObservationTerraceMainPanel");
               return;
            }
         }
         this._mainUI.mc.gotoAndStop(this._maxFrame - this._surplusTime);
         if(this._surplusTime > 0)
         {
            SystemTimerManager.addTickFun(this.onTimer);
         }
         else
         {
            SystemTimerManager.removeTickFun(this.onTimer);
         }
         if(fun != null)
         {
            fun();
         }
      }
      
      private function onSuccessAlarm() : void
      {
         KTool.getMultiValue([108523],function(va:Array):void
         {
            var teamNameArr:Array = ["烈焰","海啸","绿光"];
            Alarm2.show("当前负责任务已完成，共计获得团结凭证*105！");
            Alarm2.show(teamNameArr[va[0] - 1] + "队星光积分+5！");
         });
      }
      
      private function onTimer() : void
      {
         --this._surplusTime;
         if(this._surplusTime <= 0)
         {
            this.update();
            this._mainUI.timeTx.text = String(0);
            this._mainUI.mc.gotoAndStop(this._maxFrame);
            if(KTool.getBit(10681,10) == 0)
            {
               Alarm2.show("修复失败，请再接再厉！",function():void
               {
                  hide();
                  ModuleManager.showAppModule("RepairTheObservationTerraceMainPanel");
               });
            }
         }
         else
         {
            this._mainUI.timeTx.text = String(this._surplusTime);
            this._mainUI.mc.gotoAndStop(this._maxFrame - this._surplusTime);
         }
      }
      
      override public function hide() : void
      {
         this._OKposArr = null;
         this._curposArr = null;
         this._posArr = null;
         SystemTimerManager.removeTickFun(this.onTimer);
         super.hide();
      }
   }
}

