package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.FocusEvent;
   import flash.events.KeyboardEvent;
   import flash.events.TimerEvent;
   import flash.ui.Keyboard;
   import flash.utils.Timer;
   
   public class ShipCleanerGame extends ActivityModel
   {
      private var mapOrderIdx:int = 0;
      
      private var mapShowIdx:int = 0;
      
      private var animTimer:Timer;
      
      private var delayTimer:Timer;
      
      private var targetArr:Array = null;
      
      private var animIdx:int = 0;
      
      private var animTargetIdx:int = 0;
      
      private var targetPosX:Number;
      
      private var targetPosY:Number;
      
      private var animCallBack:Function;
      
      private var p3X:Number;
      
      private var p3Y:Number;
      
      private var p1X:Number;
      
      private var p1Y:Number;
      
      private var isInAnim:Boolean = false;
      
      private var isStart:Boolean = false;
      
      public var addStep:Number = 2.5;
      
      private var mapValueArr:Array;
      
      private var mapPosArr:Array;
      
      private var sumGetCoinArr:Array;
      
      private var teamIdx:int;
      
      private var coinCnt:int;
      
      private var cursor:MovieClip;
      
      private var cursorX:Number;
      
      private var cursorY:Number;
      
      private var _horizonVa:Number;
      
      private var _verticalVa:Number;
      
      public function ShipCleanerGame()
      {
         super();
         resUrl = "2024/1011/ShipCleanerGame";
         configUrl = "2024/1011/ShipCleanerConfig";
      }
      
      override public function init(data:Object = null) : void
      {
         var arr:Array = Array(data)[0];
         this.mapOrderIdx = arr[0];
         this.mapShowIdx = arr[1];
      }
      
      override public function show() : void
      {
         super.show();
         if(Boolean(ui.cursor))
         {
            this.cursor = ui.cursor;
         }
         _ui.seerAnim.gotoAndStop(1);
         ui.btnA.gotoAndStop(3);
         ui.btnD.gotoAndStop(3);
         ui.btnW.gotoAndStop(3);
         ui.btnS.gotoAndStop(3);
         ui.map.gotoAndStop(this.mapShowIdx);
         this.animTimer = new Timer(30,35);
         this.animTimer.addEventListener(TimerEvent.TIMER,this.onAnim);
         this.delayTimer = new Timer(500,1);
         this.delayTimer.addEventListener(TimerEvent.TIMER_COMPLETE,this.onAnim2);
      }
      
      private function onAnim2(e:TimerEvent) : void
      {
         this.playMoveAnim(this.cursorX,this.cursorY);
      }
      
      private function playMoveAnim(posX:Number, posY:Number) : *
      {
         this.isInAnim = true;
         this.targetPosX = posX;
         this.targetPosY = posY;
         this.cursor.gotoAndStop(1);
         this.cursor.x = 190;
         this.cursor.y = 380;
         this.cursor.scaleX = 0.6;
         this.cursor.scaleY = 0.6;
         var stepX:* = posX - this.cursor.x;
         var stepY:* = posY - this.cursor.y;
         this.p1X = this.cursor.x;
         this.p1Y = this.cursor.y;
         this.p3X = (this.targetPosX + this.cursor.x) / 2;
         this.p3Y = Math.min(this.targetPosY,this.cursor.y) - Math.abs(this.targetPosY - this.cursor.y) * (stepX / 100);
         this.p3Y = this.p3Y < -30 ? -30 : this.p3Y;
         var dist:* = Math.sqrt(stepX * stepX + stepY * stepY);
         this.animTargetIdx = dist / 800 * 30;
         this.animTargetIdx = this.animTargetIdx > 25 ? 25 : this.animTargetIdx;
         this.animTargetIdx = this.animTargetIdx < 2 ? 2 : this.animTargetIdx;
         this.animIdx = 0;
         this.animTimer.reset();
         this.animTimer.start();
      }
      
      private function onAnim(e:TimerEvent) : void
      {
         var t:Number = this.animIdx / Number(this.animTargetIdx);
         this.cursor.x = (1 - t) * (1 - t) * this.p1X + 2 * t * (1 - t) * this.p3X + t * t * this.targetPosX;
         this.cursor.y = (1 - t) * (1 - t) * this.p1Y + 2 * t * (1 - t) * this.p3Y + t * t * this.targetPosY;
         this.cursor.scaleX = t < 0.6 ? 0.6 : t;
         this.cursor.scaleY = t < 0.6 ? 0.6 : t;
         this.horizonVa = (1 - t) * this.horizonVa;
         this.verticalVa = (1 - t) * this.verticalVa;
         ++this.animIdx;
         if(this.animTargetIdx == this.animIdx)
         {
            this.cursor.x = this.targetPosX;
            this.cursor.y = this.targetPosY;
            this.animTimer.stop();
            AnimateManager.playMcAnimate(_ui.cursor,this.animCallBack == null ? 2 : 3,"ani",function():void
            {
               isInAnim = false;
               cursor.x = -130;
               cursor.y = -50;
               horizonVa = 0;
               verticalVa = 0;
            },false,true);
            if(this.animCallBack != null)
            {
               this.animCallBack();
            }
         }
      }
      
      private function onStart() : void
      {
         if(!this.isStart)
         {
            this.isStart = true;
            this.horizonVa = 0;
            this.verticalVa = 0;
            MainManager.getStage().focus = ui;
            _ui.addEventListener(FocusEvent.FOCUS_OUT,this.outHandle);
            _ui.addEventListener(KeyboardEvent.KEY_DOWN,this.onKey);
            _ui.addEventListener(KeyboardEvent.KEY_UP,this.onKey2);
         }
      }
      
      private function outHandle(e:FocusEvent) : void
      {
         LevelManager.stage.focus = _ui;
         ui.btnA.gotoAndStop(3);
         ui.btnD.gotoAndStop(3);
         ui.btnW.gotoAndStop(3);
         ui.btnS.gotoAndStop(3);
      }
      
      override protected function updatePanel() : void
      {
         this.updateData();
         this.onStart();
         this.updateDisplay();
      }
      
      private function onKey(e:KeyboardEvent) : void
      {
         var fireIdx:int = 0;
         if(this.isInAnim)
         {
            return;
         }
         switch(e.keyCode)
         {
            case Keyboard.A:
               ui.btnA.gotoAndStop(1);
               this.horizonVa -= this.addStep;
               break;
            case Keyboard.D:
               ui.btnD.gotoAndStop(1);
               this.horizonVa += this.addStep;
               break;
            case Keyboard.W:
               ui.btnW.gotoAndStop(1);
               this.verticalVa += this.addStep;
               break;
            case Keyboard.S:
               ui.btnS.gotoAndStop(1);
               this.verticalVa -= this.addStep;
               break;
            case Keyboard.SPACE:
               fireIdx = this.checkFire();
               if(fireIdx > 0)
               {
                  if(this.mapValueArr[fireIdx - 1] > 0)
                  {
                     this.animCallBack = function():void
                     {
                        doAction("CMD",mapOrderIdx * 10 + fireIdx).then(function():void
                        {
                           refresh();
                        });
                     };
                     return;
                  }
               }
               this.animCallBack = null;
         }
      }
      
      private function onKey2(e:KeyboardEvent) : void
      {
         if(this.isInAnim)
         {
            return;
         }
         switch(e.keyCode)
         {
            case Keyboard.A:
               ui.btnA.gotoAndStop(3);
               break;
            case Keyboard.D:
               ui.btnD.gotoAndStop(3);
               break;
            case Keyboard.W:
               ui.btnW.gotoAndStop(3);
               break;
            case Keyboard.S:
               ui.btnS.gotoAndStop(3);
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var pbtnName:String = null;
         if(this.isInAnim)
         {
            return;
         }
         if(!this.isStart)
         {
            return;
         }
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               ModuleManager.showAppModule("ShipCleanerEnter");
               this.hide();
               break;
            case "btnBB":
               pbtnName = e.target.parent.name;
               if(pbtnName == "btnA")
               {
                  this.horizonVa -= this.addStep / 1.5;
               }
               else if(pbtnName == "btnD")
               {
                  this.horizonVa += this.addStep / 1.5;
               }
               else if(pbtnName == "btnW")
               {
                  this.verticalVa += this.addStep / 1.5;
               }
               else if(pbtnName == "btnS")
               {
                  this.verticalVa -= this.addStep / 1.5;
               }
         }
      }
      
      override public function hide() : void
      {
         this.mapValueArr = null;
         this.mapPosArr = null;
         this.sumGetCoinArr = null;
         this.targetArr = null;
         _ui.removeEventListener(FocusEvent.FOCUS_OUT,this.outHandle);
         ui.removeEventListener(KeyboardEvent.KEY_DOWN,this.onKey);
         _ui.removeEventListener(KeyboardEvent.KEY_UP,this.onKey2);
         this.animTimer.removeEventListener(TimerEvent.TIMER,this.onAnim);
         this.delayTimer.removeEventListener(TimerEvent.TIMER_COMPLETE,this.onAnim2);
         super.hide();
      }
      
      private function updateData() : void
      {
         this.mapValueArr = getValue("mapValueArr_" + this.mapOrderIdx);
         this.mapPosArr = getValue("mapPosArr_" + this.mapOrderIdx);
         this.sumGetCoinArr = getValue("sumGetCoinArr");
         this.teamIdx = getValue("teamIdx");
         this.coinCnt = getValue("coinCnt");
      }
      
      private function updateDisplay() : void
      {
         var i:int = 0;
         var tarVa:int = 0;
         var teamName:Array = null;
         var needInitArr:Boolean = this.targetArr == null;
         if(needInitArr)
         {
            this.targetArr = [];
         }
         for(i = 1; i <= 9; i++)
         {
            if(this.mapPosArr.indexOf(i) < 0)
            {
               ui["target_" + i].visible = false;
            }
            else
            {
               ui["target_" + i].visible = true;
               if(needInitArr)
               {
                  this.targetArr.push(ui["target_" + i]);
               }
            }
         }
         for(i = 0; i < this.targetArr.length; i++)
         {
            tarVa = int(this.mapValueArr[i]);
            if(tarVa <= 0)
            {
               this.targetArr[i].visible = false;
            }
            else
            {
               this.targetArr[i].visible = true;
               if(this.mapValueArr[i] == 45 || this.mapValueArr[i] == 30 || this.mapValueArr[i] == 15 || this.mapValueArr[i] == 0)
               {
                  this.targetArr[i].gotoAndStop(this.mapValueArr[i] / 15);
               }
               else
               {
                  Alarm.show("污渍值错误 " + i + "   " + this.targetArr[i]);
               }
            }
         }
         ui.mcScore.txt.text = this.sumGetCoinArr[this.mapOrderIdx - 1];
         if(this.sumGetCoinArr[this.mapOrderIdx - 1] == 105)
         {
            if(this.sumGetCoinArr[0] + this.sumGetCoinArr[1] == 210 && this.teamIdx > 0)
            {
               teamName = ["","烈焰","海啸","绿光"];
               Alarm.show(teamName[this.teamIdx] + "队星光积分+10!",function():void
               {
                  Alarm.show("当前负责舱室已完成清洁，共计获得清洁徽章*105!",function():void
                  {
                     ModuleManager.showAppModule("ShipCleanerEnter");
                     hide();
                  });
               });
            }
            else
            {
               Alarm.show("当前负责舱室已完成清洁，共计获得清洁徽章*105!",function():void
               {
                  ModuleManager.showAppModule("ShipCleanerEnter");
                  hide();
               });
            }
         }
      }
      
      private function checkFire() : int
      {
         var step:Number;
         var i:int;
         var tar:MovieClip = null;
         var minX:Number = NaN;
         var maxX:Number = NaN;
         var minY:Number = NaN;
         var maxY:Number = NaN;
         this.cursorX = (782 - 222) * this.horizonVa / 100 + 222;
         this.cursorY = (469 - 101) * (100 - this.verticalVa) / 100 + 101;
         this.isInAnim = true;
         AnimateManager.playMcAnimate(_ui.seerAnim,2,"ani",function():void
         {
            _ui.seerAnim.gotoAndStop(1);
         },false,true);
         this.delayTimer.reset();
         this.delayTimer.start();
         step = 5;
         for(i = 0; i < this.targetArr.length; i++)
         {
            tar = this.targetArr[i];
            minX = tar.x - tar.wz.width / 2 + step;
            maxX = tar.x + tar.wz.width / 2 - step;
            minY = tar.y - tar.wz.height / 2 + step;
            maxY = tar.y + tar.wz.height / 2 - step;
            if(minX <= this.cursorX && this.cursorX <= maxX && minY <= this.cursorY && this.cursorY <= maxY)
            {
               return i + 1;
            }
         }
         return -1;
      }
      
      private function set horizonVa(value:Number) : void
      {
         this._horizonVa = this.clamp(value,1,100);
         ui.mcHor.gotoAndStop(this._horizonVa);
      }
      
      private function get horizonVa() : Number
      {
         return this._horizonVa;
      }
      
      private function set verticalVa(value:Number) : void
      {
         this._verticalVa = this.clamp(value,1,100);
         ui.mcVert.gotoAndStop(this._verticalVa);
      }
      
      private function get verticalVa() : Number
      {
         return this._verticalVa;
      }
      
      private function clamp(value:Number, a:Number, b:Number) : int
      {
         if(value < a)
         {
            return a;
         }
         if(value > b)
         {
            return b;
         }
         return int(value);
      }
   }
}

