package com.robot.app.panel
{
   import com.robot.app.mapProcess.control.ElementFightController;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import gs.TweenGroup;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class RewardPanel
   {
      
      private static const ITEM_COUNT_ARR:Array = [[[300,500,550,600,650,700,2000],[500,600,700,800,900,1000,2000],[100,150,200,250,500],[1,2,3,4,5]],[[500,600,700,800,900,1000,1500,5000],[600,700,800,900,1000,1500,3000],[200,300,400,500,1000],[1,2,3,4,8]]];
      
      private static const ITEM_ID_ARR:Array = [1,3,0,400501];
      
      private static const START_INDEX:uint = 400687;
       
      
      private var _type:int;
      
      private var _mc:MovieClip;
      
      private var _num:int;
      
      private var _index:int;
      
      private var _func:Function;
      
      private var _timer:Timer;
      
      private var _count:int;
      
      private var _arr:Array;
      
      public function RewardPanel(param1:MovieClip, param2:int, param3:int, param4:Function = null)
      {
         super();
         this._mc = param1;
         this._type = param2;
         this._num = param3;
         this._func = param4;
         this._timer = new Timer(1000);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         this._mc["closeBtn"].addEventListener(MouseEvent.CLICK,this.onClose);
      }
      
      public function show() : void
      {
         this._count = 10;
         this._mc["txt"].text = String(this._count);
         this._timer.start();
         this.initMC();
         this._mc["closeBtn"].alpha = 0.5;
         this._mc["closeBtn"].mouseEnabled = false;
         DisplayUtil.align(this._mc,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(this._mc);
      }
      
      private function initMC() : void
      {
         this._arr = [];
         var _loc1_:int = 1;
         while(_loc1_ <= this._num)
         {
            this._mc["mc_" + _loc1_].gotoAndStop(1);
            this._mc["mc_" + _loc1_].buttonMode = true;
            this._mc["mc_" + _loc1_].addEventListener(MouseEvent.CLICK,this.onMouseClick);
            this._arr.push(this._mc["mc_" + _loc1_]);
            _loc1_++;
         }
      }
      
      private function updateMC(param1:uint, param2:uint) : void
      {
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc8_:Array = null;
         var _loc9_:int = 0;
         this.updateMCHelper(param1,param2,this._mc["mc_" + this._index]);
         var _loc6_:Array = [];
         var _loc7_:Array = [];
         _loc6_.push(param1);
         _loc7_.push(param2);
         var _loc10_:int = 1;
         while(_loc10_ <= this._num)
         {
            if(_loc10_ != this._index)
            {
               if(this._type == 0)
               {
                  do
                  {
                     _loc3_ = Math.floor(Math.random() * 4);
                     _loc4_ = int(ITEM_ID_ARR[_loc3_]);
                     _loc5_ = int((_loc8_ = ITEM_COUNT_ARR[0][_loc3_])[Math.floor(Math.random() * _loc8_.length)]);
                  }
                  while((_loc9_ = _loc6_.indexOf(_loc4_)) != -1 && _loc7_[_loc9_] == _loc5_);
                  
               }
               else
               {
                  do
                  {
                     _loc3_ = Math.floor(Math.random() * 5);
                     if(_loc3_ == 4)
                     {
                        _loc4_ = START_INDEX + Math.floor(Math.random() * 16);
                        _loc5_ = 0;
                     }
                     else
                     {
                        _loc4_ = int(ITEM_ID_ARR[_loc3_]);
                        _loc5_ = int((_loc8_ = ITEM_COUNT_ARR[1][_loc3_])[Math.floor(Math.random() * _loc8_.length)]);
                     }
                  }
                  while((_loc9_ = _loc6_.indexOf(_loc4_)) != -1 && _loc7_[_loc9_] == _loc5_);
                  
               }
               _loc6_.push(_loc4_);
               if(ElementFightController.fightLevel == 3)
               {
                  _loc5_ *= 2;
               }
               _loc7_.push(_loc5_);
               this.updateMCHelper(_loc4_,_loc5_,this._mc["mc_" + _loc10_]);
            }
            _loc10_++;
         }
         this.reverseMC();
      }
      
      private function updateMCHelper(param1:uint, param2:uint, param3:MovieClip) : void
      {
         var targetFrame:uint = 0;
         var id:uint = param1;
         var count:uint = param2;
         var mc:MovieClip = param3;
         if(id >= START_INDEX)
         {
            targetFrame = uint(id - START_INDEX + 5);
         }
         else
         {
            targetFrame = uint(ITEM_ID_ARR.indexOf(id) + 1);
         }
         mc.addEventListener(Event.ENTER_FRAME,function():void
         {
            if(mc.currentFrame == mc.totalFrames)
            {
               mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               if(count > 0)
               {
                  mc["mc"]["txt"].text = String(count);
               }
               mc["mc"].gotoAndStop(targetFrame);
            }
         });
         mc.gotoAndStop(2);
      }
      
      private function reverseMC() : void
      {
         var _loc1_:MovieClip = null;
         for each(_loc1_ in this._arr)
         {
            _loc1_.gotoAndStop(1);
            _loc1_.scaleX = 1;
         }
         TweenGroup.allTo(this._arr,0.3,{
            "scaleX":0,
            "onComplete":this.reverseComplete
         });
      }
      
      private function reverseComplete() : void
      {
         var _loc1_:MovieClip = null;
         for each(_loc1_ in this._arr)
         {
            _loc1_.gotoAndStop(2);
            _loc1_.scaleX = 0;
         }
         TweenGroup.allTo(this._arr,0.3,{"scaleX":1});
      }
      
      private function restoreMC() : void
      {
         var _loc1_:int = 1;
         while(_loc1_ <= this._num)
         {
            this._mc["mc_" + _loc1_].buttonMode = false;
            this._mc["mc_" + _loc1_].removeEventListener(MouseEvent.CLICK,this.onMouseClick);
            _loc1_++;
         }
      }
      
      private function onMouseClick(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(_loc2_.name.indexOf("mc") != -1)
         {
            this._index = _loc2_.name.split("_")[1];
            this._timer.stop();
            this.restoreMC();
            this.getReward();
         }
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         --this._count;
         this._mc["txt"].text = String(this._count);
         if(this._count == 0)
         {
            this._index = 1;
            this._timer.stop();
            this.restoreMC();
            this.getReward();
         }
      }
      
      private function getReward() : void
      {
         SocketConnection.addCmdListener(CommandID.ELEMNET_FIGHT_REWARD,this.onReward);
         SocketConnection.send(CommandID.ELEMNET_FIGHT_REWARD);
         this._mc.mouseEnabled = false;
         this._mc.mouseChildren = false;
      }
      
      private function onReward(param1:SocketEvent) : void
      {
         var _loc5_:* = null;
         this._mc.mouseEnabled = true;
         this._mc.mouseChildren = true;
         this._mc["closeBtn"].visible = true;
         this._mc["closeBtn"].alpha = 1;
         this._mc["closeBtn"].mouseEnabled = true;
         SocketConnection.removeCmdListener(CommandID.ELEMNET_FIGHT_REWARD,this.onReward);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 0)
         {
            _loc5_ = "获得了" + _loc4_ + "个勋章！";
         }
         else
         {
            _loc5_ = "获得了" + _loc4_ + "个" + ItemXMLInfo.getName(_loc3_) + "！";
         }
         Alarm.show(_loc5_);
         this.updateMC(_loc3_,_loc4_);
      }
      
      private function onClose(param1:MouseEvent) : void
      {
         this.hide();
      }
      
      public function hide() : void
      {
         DisplayUtil.removeForParent(this._mc);
         if(this._func != null)
         {
            this._func();
         }
      }
      
      public function destroy() : void
      {
         SocketConnection.addCmdListener(CommandID.ELEMNET_FIGHT_REWARD,this.onReward);
         this._mc["closeBtn"].removeEventListener(MouseEvent.CLICK,this.onClose);
         this._mc.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         if(this._timer)
         {
            this._timer.stop();
            this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
            this._timer = null;
         }
      }
   }
}
