package com.robot.app.mapProcess
{
   import com.robot.app.task.taskUtils.taskDialog.NpcTipDialog;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.ColorTransform;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.ArrayUtil;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_109 extends BaseMapProcess
   {
       
      
      private var superStone:MovieClip;
      
      private var weightLessHouse:MovieClip;
      
      private var oreGather:MovieClip;
      
      private var suitAlarm:MovieClip;
      
      private var nonoSuit:MovieClip;
      
      private var sinNum:Number = 0;
      
      private var stoneNum:uint = 0;
      
      private var stoneList:Array;
      
      private var oldSpeed:Number;
      
      private var t:uint;
      
      public function MapProcess_109()
      {
         this.stoneList = [];
         super();
      }
      
      private function createStone() : void
      {
         var _loc2_:Number = NaN;
         var _loc3_:Number = NaN;
         var _loc4_:Number = NaN;
         var _loc5_:Stone = null;
         while(this.stoneNum > 20 || this.stoneNum < 15)
         {
            this.stoneNum = Math.floor(Math.random() * 20);
         }
         var _loc1_:uint = 0;
         while(_loc1_ < this.stoneNum)
         {
            _loc2_ = this.getGaussian(40 * (_loc1_ + 1),50);
            _loc3_ = this.getGaussian(20 * (_loc1_ + 1),100);
            _loc4_ = Math.random();
            while(_loc4_ < 0.7)
            {
               _loc4_ = Math.random();
            }
            (_loc5_ = new Stone(Math.ceil(Math.random() * 5))).x = _loc2_;
            _loc5_.y = _loc3_;
            _loc5_.scaleX = _loc4_;
            _loc5_.scaleY = _loc4_;
            conLevel.addChild(_loc5_);
            _loc5_.addEventListener(Stone.CLEAR,this.onClear);
            this.stoneList.push(_loc5_);
            DebugTrace.show(_loc2_ + "   " + _loc3_ + "  " + _loc4_);
            _loc1_++;
         }
      }
      
      private function onClear(param1:Event) : void
      {
         var _loc2_:Stone = param1.currentTarget as Stone;
         _loc2_.removeEventListener(Stone.CLEAR,this.onClear);
         var _loc3_:int = this.stoneList.indexOf(_loc2_);
         if(_loc3_ != -1)
         {
            this.stoneList.splice(_loc3_,1);
         }
      }
      
      override protected function init() : void
      {
         var array:Array;
         this.oldSpeed = MainManager.actorModel.speed;
         MainManager.actorModel.speed = this.oldSpeed / 2;
         this.createStone();
         AimatController.addEventListener(AimatEvent.PLAY_END,this.onAimat);
         this.suitAlarm = MapManager.currentMap.libManager.getMovieClip("suitAlarm");
         this.superStone = this.conLevel["superStone"];
         this.weightLessHouse = this.conLevel["weightLessHouse"];
         this.oreGather = this.conLevel["oreGather"];
         array = MainManager.actorInfo.clothIDs;
         if(!ArrayUtil.arrayContainsValue(array,100054) && !ArrayUtil.arrayContainsValue(array,100110) && !ArrayUtil.arrayContainsValue(array,100158) && !ArrayUtil.arrayContainsValue(array,100167))
         {
            LevelManager.appLevel.addChild(this.suitAlarm);
            DisplayUtil.align(this.suitAlarm,null,AlignType.MIDDLE_CENTER);
            this.suitAlarm["closeBtn"].addEventListener(MouseEvent.CLICK,function():void
            {
               MapManager.changeMap(107);
            });
            return;
         }
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_END,this.onWalkEnd);
      }
      
      override public function destroy() : void
      {
         var _loc1_:Stone = null;
         MainManager.actorModel.speed = this.oldSpeed;
         LevelManager.openMouseEvent();
         if(!MainManager.actorModel.nono)
         {
            MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
         }
         for each(_loc1_ in this.stoneList)
         {
            _loc1_.removeEventListener(Stone.CLEAR,this.onClear);
         }
         if(this.suitAlarm)
         {
            DisplayUtil.removeForParent(this.suitAlarm);
         }
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat);
         SocketConnection.removeCmdListener(CommandID.NO_GRAVITY_SHIP,this.onSocketSuccessHandler);
         this.stoneList = [];
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,this.onWalkEnd);
         if(this.nonoSuit)
         {
            if(this.nonoSuit.hasEventListener(Event.ENTER_FRAME))
            {
               this.nonoSuit.removeEventListener(Event.ENTER_FRAME,this.onNonoSuitFrameHandler);
            }
         }
         if(this.weightLessHouse.hasEventListener(Event.ENTER_FRAME))
         {
            this.weightLessHouse.removeEventListener(Event.ENTER_FRAME,this.onFrameHandler("*"));
         }
      }
      
      private function onAimat(param1:AimatEvent) : void
      {
         var _loc3_:Stone = null;
         var _loc2_:AimatInfo = param1.info;
         if(_loc2_.userID != MainManager.actorID)
         {
            return;
         }
         for each(_loc3_ in this.stoneList)
         {
            if(_loc3_.hitTestPoint(_loc2_.endPos.x,_loc2_.endPos.y,true))
            {
               _loc3_.play();
               break;
            }
         }
      }
      
      public function onSuperStoneClickHandler() : void
      {
         if(!MainManager.actorInfo.superNono)
         {
            Alarm.show("你必须要带上超能NoNo哦！");
            return;
         }
         if(!MainManager.actorModel.nono)
         {
            Alarm.show("你必须要带上超能NoNo哦！");
            return;
         }
         MainManager.actorModel.hideNono();
         LevelManager.closeMouseEvent();
         this.superStone.gotoAndStop(2);
         this.t = setTimeout(this.superStonePlay,300);
      }
      
      private function superStonePlay() : void
      {
         var _loc3_:MovieClip = null;
         clearTimeout(this.t);
         var _loc1_:uint = uint(this.superStone.numChildren);
         var _loc2_:uint = 0;
         while(_loc2_ < _loc1_)
         {
            _loc3_ = this.superStone.getChildAt(_loc2_) as MovieClip;
            if(_loc3_)
            {
               if(_loc3_.name == "colorMC")
               {
                  DisplayUtil.FillColor(_loc3_,MainManager.actorInfo.nonoColor);
               }
               if(_loc3_.name == "stoneMC")
               {
                  _loc3_.addEventListener(Event.ENTER_FRAME,this.sendToServer);
               }
            }
            _loc2_++;
         }
      }
      
      private function sendToServer(param1:Event) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(_loc2_.totalFrames == _loc2_.currentFrame)
         {
            _loc2_.removeEventListener(Event.ENTER_FRAME,this.sendToServer);
            DisplayUtil.removeForParent(this.superStone);
            MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
            Stone.send(1);
            LevelManager.openMouseEvent();
         }
      }
      
      public function onWeightLessHouseClickHandler() : void
      {
         SocketConnection.addCmdListener(CommandID.NO_GRAVITY_SHIP,this.onSocketSuccessHandler);
         SocketConnection.send(CommandID.NO_GRAVITY_SHIP);
      }
      
      private function onWalk(param1:RobotEvent) : void
      {
         this.sinNum += 0.1;
         MainManager.actorModel.y += Math.sin(this.sinNum) * 20;
         MainManager.actorModel.x += Math.sin(this.sinNum) * 20;
      }
      
      private function onWalkEnd(param1:RobotEvent) : void
      {
         this.sinNum = 0;
      }
      
      private function onSocketSuccessHandler(param1:SocketEvent) : void
      {
         MainManager.actorModel.hideNono();
         LevelManager.closeMouseEvent();
         if(MainManager.actorInfo.superNono)
         {
            this.weightLessHouse.gotoAndPlay(3);
            this.weightLessHouse.addEventListener(Event.ENTER_FRAME,this.onFrameHandler("superNono"));
         }
         else
         {
            this.weightLessHouse.gotoAndPlay(2);
            this.weightLessHouse.addEventListener(Event.ENTER_FRAME,this.onFrameHandler("normalNono"));
         }
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         NonoManager.info.power = _loc3_ / 1000;
         NonoManager.info.mate = _loc4_ / 1000;
      }
      
      private function onFrameHandler(param1:String) : Function
      {
         var mcName:String = param1;
         var func:Function = function(param1:Event):void
         {
            var _loc2_:ColorTransform = null;
            if(weightLessHouse.getChildByName(mcName))
            {
               nonoSuit = (weightLessHouse.getChildByName(mcName) as MovieClip).getChildByName("nonoSuit") as MovieClip;
               _loc2_ = nonoSuit.transform.colorTransform;
               _loc2_.color = MainManager.actorInfo.nonoColor;
               nonoSuit.transform.colorTransform = _loc2_;
               nonoSuit.addEventListener(Event.ENTER_FRAME,onNonoSuitFrameHandler);
            }
         };
         return func;
      }
      
      private function onNonoSuitFrameHandler(param1:Event) : void
      {
         if(this.nonoSuit.currentFrame == this.nonoSuit.totalFrames)
         {
            this.nonoSuit.removeEventListener(Event.ENTER_FRAME,this.onNonoSuitFrameHandler);
            this.weightLessHouse.gotoAndStop(1);
            this.weightLessHouse.removeEventListener(Event.ENTER_FRAME,this.onFrameHandler("*"));
            MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
            if(this.nonoSuit.parent.name == "superNono")
            {
               NpcTipDialog.show("O(∩_∩)O  NoNo精神满满，主人，你也要加油哦！！！",null,NpcTipDialog.NONO);
            }
            else
            {
               NpcTipDialog.show("O(∩_∩)O  NoNo精神满满，主人，你也要加油哦！！！",null,NpcTipDialog.NONO_2);
            }
            LevelManager.openMouseEvent();
         }
      }
      
      public function getGaussian(param1:Number = 0, param2:Number = 1) : Number
      {
         var _loc3_:Number = Math.random();
         var _loc4_:Number = Math.random();
         return Math.sqrt(-2 * Math.log(_loc3_)) * Math.cos(2 * Math.PI * _loc4_) * param2 + param1;
      }
   }
}

import com.robot.core.CommandID;
import com.robot.core.config.xml.ItemXMLInfo;
import com.robot.core.info.task.BossMonsterInfo;
import com.robot.core.manager.LevelManager;
import com.robot.core.manager.MapManager;
import com.robot.core.net.SocketConnection;
import com.robot.core.ui.alert.Alarm;
import com.robot.core.ui.alert.ItemInBagAlert;
import flash.display.MovieClip;
import flash.display.Sprite;
import flash.events.Event;
import flash.events.MouseEvent;
import org.taomee.events.SocketEvent;
import org.taomee.utils.DisplayUtil;

class Stone extends Sprite
{
   
   public static const CLEAR:String = "clear";
    
   
   private var mc:MovieClip;
   
   private var isHited:Boolean = false;
   
   private var sub:MovieClip;
   
   public function Stone(param1:uint)
   {
      super();
      this.mc = MapManager.currentMap.libManager.getMovieClip("stone" + param1);
      this.mc["mc"].gotoAndStop(1);
      this.mc.cacheAsBitmap = true;
      addChild(this.mc);
      this.mc["light"].gotoAndStop(1);
      this.sub = this.mc["mc"];
      this.addEventListener(MouseEvent.ROLL_OVER,this.onOver);
      this.addEventListener(MouseEvent.ROLL_OUT,this.onOut);
   }
   
   public static function send(param1:uint) : void
   {
      var type:uint = param1;
      SocketConnection.addCmdListener(CommandID.HIT_STONE,function(param1:SocketEvent):void
      {
         var _loc4_:Object = null;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc7_:String = null;
         var _loc8_:* = null;
         SocketConnection.removeCmdListener(CommandID.HIT_STONE,arguments.callee);
         var _loc3_:BossMonsterInfo = param1.data as BossMonsterInfo;
         for each(_loc4_ in _loc3_.monBallList)
         {
            _loc5_ = uint(_loc4_["itemCnt"]);
            _loc6_ = uint(_loc4_["itemID"]);
            _loc7_ = String(ItemXMLInfo.getName(_loc6_));
            if(_loc6_ < 10)
            {
               _loc8_ = "恭喜你得到了" + _loc5_ + "个<font color=\'#FF0000\'>" + _loc7_ + "</font>";
               LevelManager.tipLevel.addChild(Alarm.show(_loc8_));
            }
            else
            {
               _loc8_ = _loc5_ + "个<font color=\'#FF0000\'>" + _loc7_ + "</font>已经放入了你的储存箱！";
               LevelManager.tipLevel.addChild(ItemInBagAlert.show(_loc6_,_loc8_));
            }
         }
      });
      SocketConnection.send(CommandID.HIT_STONE,type);
   }
   
   private function onOver(param1:MouseEvent) : void
   {
      this.mc["light"].gotoAndPlay(2);
   }
   
   private function onOut(param1:MouseEvent) : void
   {
      this.mc["light"].gotoAndStop(1);
   }
   
   public function play() : void
   {
      if(!this.isHited)
      {
         this.isHited = true;
         this.sub.gotoAndPlay(2);
         this.mc["light"].visible = false;
         this.sub.addEventListener(Event.ENTER_FRAME,this.onEnter);
      }
   }
   
   private function onEnter(param1:Event) : void
   {
      if(this.sub.currentFrame == this.sub.totalFrames)
      {
         this.sub.removeEventListener(Event.ENTER_FRAME,this.onEnter);
         DisplayUtil.removeForParent(this);
         dispatchEvent(new Event(CLEAR));
         send(0);
      }
   }
}
