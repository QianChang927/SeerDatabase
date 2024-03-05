package com.robot.core.mode
{
   import com.robot.core.aticon.FlyAction;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.MachXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.NonoActionEvent;
   import com.robot.core.event.NonoEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.NonoInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.DialogBox;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.nono.NonoShortcut;
   import com.robot.core.utils.Direction;
   import flash.display.Bitmap;
   import flash.display.BitmapData;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TextEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.GeomUtil;
   import org.taomee.utils.MathUtil;
   
   public class NonoModel extends com.robot.core.mode.ActionSpriteModel implements INonoModel
   {
      
      public static const MAX:int = 30;
      
      private static const ClaName:Array = ["pet","sou"];
      
      private static const SCALE:Number = 0.8;
       
      
      private var _people:com.robot.core.mode.ActionSpriteModel;
      
      private var _info:NonoInfo;
      
      private var _actionID:uint;
      
      private var _expID:uint;
      
      private var _expList:Array;
      
      private var _linesList:Array;
      
      private var _expTimeID:uint;
      
      private var _bodyMC:Sprite;
      
      private var _bodyUpColorMC:MovieClip;
      
      private var _bodyDownColorMC:MovieClip;
      
      private var _bodyChildMC:MovieClip;
      
      private var _bodyFootMC:MovieClip;
      
      private var _bodyFootMC2:MovieClip;
      
      private var _expMC:MovieClip;
      
      private var _actionMC:MovieClip;
      
      private var _sound:Sound;
      
      private var _sc:SoundChannel;
      
      private var _dirPos:Point;
      
      private var _dirSpeed:Point;
      
      private var _followTimeID:uint;
      
      private var _resPath:String = "";
      
      private var _fly:FlyAction;
      
      private var _timer:Timer;
      
      private var _bitmap:Bitmap;
      
      private var _nonoTimer:Timer;
      
      private var _enterCount:int;
      
      private var _rollDialogFlag:Boolean = false;
      
      public function NonoModel(param1:NonoInfo, param2:com.robot.core.mode.ActionSpriteModel = null)
      {
         this._dirPos = new Point();
         this._dirSpeed = new Point();
         super();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onMapSwitch);
         if(MainManager.actorID == param1.userID)
         {
            this._nonoTimer = new Timer(1800000,1);
            this._nonoTimer.addEventListener(TimerEvent.TIMER,this.onNoNoTimer);
            this._nonoTimer.start();
         }
         this.buttonMode = true;
         this._timer = new Timer(5000,1);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimerHandler);
         _speed = 3;
         this._info = param1;
         if(this._info.superStage > NonoManager.MAX)
         {
            this._info.superStage = NonoManager.MAX;
         }
         if(this._info.superStage == 0)
         {
            this._info.superStage = 1;
         }
         if(this._info.changeToPet)
         {
            this._resPath = "appearence/";
         }
         else if(this._info.superNono)
         {
            if(this._info.isExtremeNono)
            {
               this._resPath = "annual/";
            }
            else
            {
               this._resPath = "super/";
            }
         }
         else
         {
            this._resPath = "normal/";
         }
         if(param2)
         {
            this._people = param2;
            this._people.addChild(this);
            this.moveForPeople(false);
         }
         this._expList = MachXMLInfo.getExpID();
         if(this._info.changeToPet)
         {
            ResourceManager.getResource(ClientConfig.getNonoPath(this._resPath + "nonoPet" + "_" + this._info.changeToPet + ".swf"),this.onResLoad,"pet");
         }
         else if(this._info.superNono)
         {
            if(this._info.isExtremeNono)
            {
               ResourceManager.getResource(ClientConfig.getNonoPath(this._resPath + "nono.swf"),this.onResLoad,"pet");
            }
            else
            {
               ResourceManager.getResource(ClientConfig.getNonoPath(this._resPath + "nono" + "_" + this._info.superStage + ".swf"),this.onResLoad,"pet");
            }
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getNonoPath(this._resPath + "nono.swf"),this.onResLoad,"pet");
         }
         this.addEvent();
      }
      
      private function onNoNoTimer(param1:TimerEvent) : void
      {
         this.showBox("主人，现在充值VIP可以获赠极品精灵哟！");
      }
      
      private function onMapSwitch(param1:MapEvent) : void
      {
         var _loc2_:String = "空元行者";
         var _loc3_:Array = [];
         _loc3_.push(["成为2024年费VIP就可以免费获得超强年费精灵——" + _loc2_ + "哦！","<a href=\"event:module|Yearvip2024MainPanel|0\">听说成为2024年费VIP就可以免费获得超强年费精灵——" + _loc2_ + "哦！</a>"]);
         _loc3_.push(["成为2024年费VIP就可以领取价值12500钻的大礼包！","<a href=\"event:module|Yearvip2024MainPanel|0\">听说成为2024年费VIP就可以领取价值12500钻的大礼包！</a>"]);
         _loc3_.push(["成为2024年费VIP就可以享受年度尊贵特权，羡煞旁人！","<a href=\"event:module|Yearvip2024MainPanel|0\">听说成为2024年费VIP就可以享受年度尊贵特权，羡煞旁人！</a>"]);
         var _loc4_:int = int(Math.random() * _loc3_.length);
         this.showSpecilBox(_loc3_[_loc4_][0],_loc3_[_loc4_][1]);
      }
      
      private function showSpecilBox(param1:String, param2:String) : void
      {
         if(_dialogBox)
         {
            _dialogBox.destroy();
            _dialogBox = null;
         }
         _dialogBox = new DialogBox(8000);
         _dialogBox.name = "dialogBox";
         _dialogBox.buttonMode = true;
         _dialogBox.show(param1,0,-height,this,null);
         _dialogBox.mouseChildren = true;
         _dialogBox.mouseEnabled = true;
         _dialogBox.getTxt().text = "";
         _dialogBox.getTxt().htmlText = param2;
         _dialogBox.addEventListener(TextEvent.LINK,this.onClickLink,false,0,true);
         _dialogBox.addEventListener(MouseEvent.ROLL_OVER,this.onDialogRollOver,false,0,true);
      }
      
      protected function onDialogRollOver(param1:MouseEvent) : void
      {
         this._rollDialogFlag = true;
      }
      
      protected function onClickLink(param1:TextEvent) : void
      {
         var _loc2_:Array = param1.text.split("|");
         if(_dialogBox)
         {
            _dialogBox.destroy();
            _dialogBox = null;
         }
      }
      
      private function setBitmap() : void
      {
         if(this._bodyMC)
         {
            DisplayUtil.removeForParent(this._bitmap);
            this._bitmap = DisplayUtil.copyDisplayAsBmp(this._bodyMC);
         }
      }
      
      private function onTimerHandler(param1:TimerEvent) : void
      {
         if(MainManager.actorInfo.mapID > 50000)
         {
            return;
         }
         if(this._bodyMC)
         {
            addChild(this._bitmap);
            DisplayUtil.removeForParent(this._bodyMC,false);
         }
      }
      
      override public function destroy() : void
      {
         super.destroy();
         this.removeEvent();
         clearTimeout(this._expTimeID);
         clearTimeout(this._followTimeID);
         this.clearActionMC();
         this._dirPos = null;
         this._dirSpeed = null;
         this._bodyUpColorMC = null;
         this._bodyDownColorMC = null;
         this._bodyChildMC = null;
         this._bodyFootMC = null;
         this._bodyMC = null;
         DisplayUtil.removeForParent(this._bitmap);
         this._bitmap = null;
         this._timer.stop();
         this._timer.removeEventListener(TimerEvent.TIMER,this.onTimerHandler);
         if(this._nonoTimer)
         {
            this._nonoTimer.stop();
            this._nonoTimer.removeEventListener(TimerEvent.TIMER_COMPLETE,this.onNoNoTimer);
         }
         DisplayUtil.removeForParent(this);
      }
      
      public function setVisible(param1:Boolean) : void
      {
         this.visible = param1;
      }
      
      public function set people(param1:com.robot.core.mode.ActionSpriteModel) : void
      {
         this._people = param1;
         if(this._people)
         {
            this.stopAutoTime();
            this.setGear();
            y = -24;
            this._people.addChild(this);
            this.moveForPeople(false);
         }
         else
         {
            this.startAutoTime();
         }
      }
      
      public function get people() : com.robot.core.mode.ActionSpriteModel
      {
         return this._people;
      }
      
      public function get info() : NonoInfo
      {
         return this._info;
      }
      
      override public function set direction(param1:String) : void
      {
         if(param1 == null || param1 == "")
         {
            return;
         }
         _direction = param1;
         this.changedir();
      }
      
      override public function get centerPoint() : Point
      {
         _centerPoint.x = x;
         _centerPoint.y = y - 24;
         return _centerPoint;
      }
      
      override public function get hitRect() : Rectangle
      {
         _hitRect.x = x - width / 2;
         _hitRect.y = y - height;
         _hitRect.width = width;
         _hitRect.height = height;
         return _hitRect;
      }
      
      private function addEvent() : void
      {
         if(this._info.userID == MainManager.actorID)
         {
            addEventListener(MouseEvent.ROLL_OVER,this.onOver);
            addEventListener(MouseEvent.CLICK,this.onClick);
         }
         else
         {
            addEventListener(MouseEvent.CLICK,this.onClick);
         }
         EventManager.addEventListener(RobotEvent.NONO_SHORTCUT_HIDE,this.onShortcutHide);
         NonoManager.addActionListener(this._info.userID,this.onNonoEvent);
         if(this._people)
         {
            this._people.addEventListener(RobotEvent.CHANGE_DIRECTION,this.onPeopleDir);
            this._people.addEventListener(RobotEvent.WALK_START,this.onPeopleWalkStart);
            this._people.addEventListener(RobotEvent.WALK_END,this.onPeopleWalkEnd);
            if(this._info.superNono && this._info.userID == MainManager.actorID)
            {
               this._people.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
            }
         }
         else
         {
            addEventListener(RobotEvent.WALK_START,this.onWalkStart);
            addEventListener(RobotEvent.WALK_END,this.onWalkEnd);
         }
      }
      
      private function removeEvent() : void
      {
         removeEventListener(Event.ENTER_FRAME,this.onMoveDir);
         removeEventListener(MouseEvent.ROLL_OVER,this.onOver);
         removeEventListener(MouseEvent.CLICK,this.onClick);
         EventManager.removeEventListener(RobotEvent.NONO_SHORTCUT_HIDE,this.onShortcutHide);
         NonoManager.removeActionListener(this._info.userID,this.onNonoEvent);
         if(this._people)
         {
            this._people.removeEventListener(RobotEvent.CHANGE_DIRECTION,this.onPeopleDir);
            this._people.removeEventListener(RobotEvent.WALK_START,this.onPeopleWalkStart);
            this._people.removeEventListener(RobotEvent.WALK_END,this.onPeopleWalkEnd);
            if(this._info.superNono && this._info.userID == MainManager.actorID)
            {
               this._people.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
            }
         }
         else
         {
            removeEventListener(RobotEvent.WALK_START,this.onWalkStart);
            removeEventListener(RobotEvent.WALK_END,this.onWalkEnd);
         }
      }
      
      private function onResLoad(param1:DisplayObject) : void
      {
         var o:DisplayObject = param1;
         this._bodyMC = o as Sprite;
         this._bodyMC.scaleX = SCALE;
         this._bodyMC.scaleY = SCALE;
         this._bodyMC.addEventListener(RobotEvent.FRAME_CONSTRUCTED,function():void
         {
            if(Boolean(_info.changeToPet) && Boolean(_bodyMC))
            {
               _bodyMC.removeEventListener(RobotEvent.FRAME_CONSTRUCTED,arguments.callee);
               (_bodyMC as MovieClip).gotoAndStop(direction);
            }
            else if(_bodyMC)
            {
               _bodyMC.removeEventListener(RobotEvent.FRAME_CONSTRUCTED,arguments.callee);
               _bodyUpColorMC = _bodyMC.getChildByName("color_1") as MovieClip;
               if(_bodyUpColorMC)
               {
                  DisplayUtil.FillColor(_bodyUpColorMC,_info.color);
                  _bodyUpColorMC.gotoAndStop(direction);
               }
               _bodyDownColorMC = _bodyMC.getChildByName("color_2") as MovieClip;
               if(_bodyDownColorMC)
               {
                  DisplayUtil.FillColor(_bodyDownColorMC,_info.color);
                  _bodyDownColorMC.gotoAndStop(direction);
               }
               _bodyChildMC = _bodyMC.getChildByName("body") as MovieClip;
               _bodyChildMC.gotoAndStop(direction);
               _bodyFootMC = _bodyMC.getChildByName("foot") as MovieClip;
               if(_bodyFootMC)
               {
                  _bodyFootMC.gotoAndStop(direction);
               }
               _bodyFootMC2 = _bodyMC.getChildByName("foot_2") as MovieClip;
               if(_bodyFootMC2)
               {
                  _bodyFootMC2.gotoAndStop(direction);
               }
            }
         });
         addChild(this._bodyMC);
         if(this._people == null)
         {
            this.startAutoTime();
         }
         else
         {
            this.onPeopleWalkEnd();
         }
         this.setBitmap();
         this._timer.start();
      }
      
      private function setGear() : void
      {
         this.clearActionMC();
         this._actionID = 0;
         if(this._bodyMC)
         {
            addChild(this._bodyMC);
         }
         this._timer.reset();
         this._timer.start();
      }
      
      private function startAutoTime() : void
      {
         if(this._actionID == 0)
         {
            if(this._info.power > 0 && Boolean(this._info.state[0]))
            {
               this._expTimeID = setTimeout(this.onExpTime,MathUtil.randomHalve(20000));
               starAutoWalk(3000);
            }
         }
      }
      
      private function stopAutoTime() : void
      {
         clearTimeout(this._expTimeID);
         stopAutoWalk();
         this.changedir(false);
      }
      
      private function clearActionMC() : void
      {
         if(this._actionMC)
         {
            this._actionMC.addFrameScript(this._actionMC.totalFrames - 1,null);
            DisplayUtil.removeForParent(this._actionMC);
            this._actionMC = null;
         }
         if(this._expMC)
         {
            this._expMC.addFrameScript(this._expMC.totalFrames - 1,null);
            DisplayUtil.removeForParent(this._expMC);
            this._expMC = null;
         }
         if(this._sound)
         {
            this._sound = null;
         }
         if(this._sc)
         {
            this._sc.stop();
            this._sc = null;
         }
      }
      
      private function fillColor(param1:MovieClip) : void
      {
         var mc:MovieClip = param1;
         mc.addEventListener(RobotEvent.FRAME_CONSTRUCTED,function(param1:Event):void
         {
            var _loc5_:MovieClip = null;
            if(mc == null)
            {
               return;
            }
            mc.removeEventListener(RobotEvent.FRAME_CONSTRUCTED,arguments.callee);
            var _loc3_:uint = uint(mc.numChildren);
            var _loc4_:uint = 0;
            while(_loc4_ < _loc3_)
            {
               if(_loc5_ = mc.getChildAt(_loc4_) as MovieClip)
               {
                  if(_loc5_.name.substr(0,6) == "color_")
                  {
                     DisplayUtil.FillColor(_loc5_,_info.color);
                  }
               }
               _loc4_++;
            }
         });
      }
      
      private function onResAction(param1:Array) : void
      {
         var _loc2_:int = 0;
         this.clearActionMC();
         if(param1.length == 0)
         {
            return;
         }
         this._actionMC = param1[0] as MovieClip;
         if(this._actionMC)
         {
            this._actionMC.scaleX = SCALE;
            this._actionMC.scaleY = SCALE;
            this.fillColor(this._actionMC);
            addChild(this._actionMC);
            this.stopAutoTime();
            this._actionMC.addFrameScript(this._actionMC.totalFrames - 1,this.onActionScript);
            this._actionMC.gotoAndPlay(1);
            if(this._bodyMC)
            {
               DisplayUtil.removeForParent(this._bitmap,false);
               DisplayUtil.removeForParent(this._bodyMC,false);
            }
            if(param1.length >= 2)
            {
               _loc2_ = MachXMLInfo.getActionSouLoops(this._actionID);
               if(_loc2_ > 0)
               {
                  this._sound = param1[1] as Sound;
                  if(this._sound)
                  {
                     this._sc = this._sound.play(0,_loc2_);
                  }
               }
            }
            DepthManager.bringToTop(this);
         }
      }
      
      private function onActionScript() : void
      {
         if(!MachXMLInfo.getActionIsAutoEnd(this._actionID))
         {
            if(this._info.isExtremeNono)
            {
               DisplayUtil.stopAllMovieClip(this._actionMC);
            }
            return;
         }
         this._actionID = 0;
         NonoManager.dispatchEvent(new DynamicEvent(NonoEvent.PLAY_COMPLETE,this._actionID));
         if(this._bodyMC)
         {
            addChild(this._bodyMC);
         }
         this.clearActionMC();
         this.startAutoTime();
      }
      
      private function onResExp(param1:Array) : void
      {
         var _loc2_:uint = 0;
         this.clearActionMC();
         if(param1.length == 0)
         {
            return;
         }
         this._expMC = param1[0] as MovieClip;
         if(this._expMC)
         {
            this._expMC.scaleX = SCALE;
            this._expMC.scaleY = SCALE;
            this.fillColor(this._expMC);
            addChild(this._expMC);
            this.stopAutoTime();
            this.direction = Direction.DOWN;
            this._expMC.addFrameScript(this._expMC.totalFrames - 1,this.onExpScript);
            this._expMC.gotoAndPlay(1);
            if(this._bodyMC)
            {
               DisplayUtil.removeForParent(this._bitmap,false);
               DisplayUtil.removeForParent(this._bodyMC,false);
            }
            if(this._linesList.length != 0)
            {
               _loc2_ = uint(this._linesList[int(this._linesList.length * Math.random())]);
               showBox(MachXMLInfo.getLinesName(_loc2_),12);
            }
         }
         if(param1.length >= 2)
         {
            this._sound = param1[1] as Sound;
            if(this._sound)
            {
               this._sc = this._sound.play(0,1);
            }
         }
      }
      
      private function onExpTime() : void
      {
         this._expID = this._expList[int(this._expList.length * Math.random())];
         this._linesList = MachXMLInfo.getLinesIDForExp(this._expID,this._info.getPowerLevel(),this._info.getMateLevel());
         this.getExpRes();
      }
      
      private function onExpScript() : void
      {
         this.clearActionMC();
         if(this._actionID != 0)
         {
            return;
         }
         if(this._bodyMC)
         {
            addChild(this._bodyMC);
         }
         this.startAutoTime();
      }
      
      private function changedir(param1:Boolean = true) : void
      {
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:MovieClip = null;
         if(this._bodyMC)
         {
            if(this._info.changeToPet)
            {
               (this._bodyMC as MovieClip).gotoAndStop(_direction);
            }
            else
            {
               _loc2_ = uint(this._bodyMC.numChildren);
               _loc3_ = 0;
               while(_loc3_ < _loc2_)
               {
                  if((_loc4_ = this._bodyMC.getChildAt(_loc3_) as MovieClip) != this._bodyDownColorMC && _loc4_ != this._bodyUpColorMC && _loc4_ != this._bodyFootMC && _loc4_ != this._bodyChildMC)
                  {
                     _loc4_.gotoAndStop(_direction);
                  }
                  _loc3_++;
               }
               if(this._bodyUpColorMC)
               {
                  this._bodyUpColorMC.gotoAndStop(_direction);
               }
               if(this._bodyDownColorMC)
               {
                  this._bodyDownColorMC.gotoAndStop(_direction);
               }
               if(this._bodyChildMC)
               {
                  this._bodyChildMC.gotoAndStop(_direction);
               }
               if(this._bodyFootMC)
               {
                  this._bodyFootMC.gotoAndStop(_direction);
               }
               if(this._bodyFootMC2)
               {
                  this._bodyFootMC2.gotoAndStop(_direction);
               }
               if(param1)
               {
                  this.setBitmap();
               }
            }
         }
      }
      
      private function onPeopleWalkEnter(param1:Event) : void
      {
         var _loc2_:BitmapData = null;
         var _loc3_:Bitmap = null;
         var _loc4_:Point = null;
         if(this._bodyMC)
         {
            if(this._enterCount % 3 == 0)
            {
               _loc2_ = this._bitmap.bitmapData.clone();
               _loc3_ = new Bitmap(_loc2_);
               if(Boolean(this._bodyMC.parent) && Boolean(this._bodyMC.parent.parent))
               {
                  _loc3_.scaleX = _loc3_.scaleY = this._bodyMC.parent.parent.scaleX;
               }
               _loc4_ = this._bodyMC.localToGlobal(new Point());
               _loc3_.x = int(_loc4_.x + this._bitmap.x + 23 * (1 - _loc3_.scaleX));
               _loc3_.y = int(_loc4_.y + this._bitmap.y + 63 * (1 - _loc3_.scaleX));
               if(MapManager.currentMap.root.scrollRect)
               {
                  _loc3_.x += MapManager.currentMap.root.scrollRect.x;
                  _loc3_.y += MapManager.currentMap.root.scrollRect.y;
               }
               MapManager.currentMap.depthLevel.addChildAt(_loc3_,0);
               _loc3_.addEventListener(Event.ENTER_FRAME,this.onBMPEnter);
            }
            ++this._enterCount;
         }
      }
      
      private function onBMPEnter(param1:Event) : void
      {
         var _loc2_:Bitmap = param1.target as Bitmap;
         if(_loc2_.alpha <= 0)
         {
            _loc2_.bitmapData.dispose();
            _loc2_.removeEventListener(Event.ENTER_FRAME,this.onBMPEnter);
            DisplayUtil.removeForParent(_loc2_);
            _loc2_ = null;
         }
         else
         {
            _loc2_.alpha -= 0.05;
         }
      }
      
      private function onPeopleWalkStart(param1:Event = null) : void
      {
         this.showAnimate();
         clearTimeout(this._followTimeID);
         this.clearActionMC();
         if(!this._info.changeToPet)
         {
            if(this._expID)
            {
               if(this._info.superNono)
               {
                  if(this._info.isExtremeNono)
                  {
                     ResourceManager.cancel(ClientConfig.getNonoPath(this._resPath + "exp/" + this._expID.toString() + ".swf"),this.onResFollowExp);
                  }
                  else
                  {
                     ResourceManager.cancel(ClientConfig.getNonoPath(this._resPath + "exp/" + this._expID.toString() + "_" + this._info.superStage + ".swf"),this.onResFollowExp);
                  }
               }
               else
               {
                  ResourceManager.cancel(ClientConfig.getNonoPath(this._resPath + "exp/" + this._expID.toString() + ".swf"),this.onResFollowExp);
               }
               this._expID = 0;
            }
         }
         NonoShortcut.hide();
      }
      
      private function onPeopleWalkEnd(param1:Event = null) : void
      {
         this.hideAnimate();
         this._followTimeID = setTimeout(this.onFollowTime,MathUtil.randomHalve(40000));
         if(NonoManager.isBeckon)
         {
            NonoManager.isBeckon = false;
            if(!this._info.changeToPet)
            {
               if(this._info.isExtremeNono)
               {
                  ResourceManager.getResourceList(ClientConfig.getNonoPath(this._resPath + "action/6.swf"),this.onResFollowAction,ClaName);
               }
               else
               {
                  ResourceManager.getResourceList(ClientConfig.getNonoPath(this._resPath + "action/6" + "_" + this._info.superStage + ".swf"),this.onResFollowAction,ClaName);
               }
            }
         }
      }
      
      private function showAnimate() : void
      {
         if(MainManager.actorInfo.mapID > 50000)
         {
            return;
         }
         if(this._timer)
         {
            this._timer.reset();
            this._timer.stop();
         }
         if(this._bodyMC)
         {
            DisplayUtil.removeForParent(this._bitmap,false);
            addChild(this._bodyMC);
         }
      }
      
      private function hideAnimate() : void
      {
         if(MainManager.actorInfo.mapID > 50000)
         {
            return;
         }
         if(this._timer)
         {
            this._timer.reset();
            this._timer.start();
         }
      }
      
      private function onFollowTime() : void
      {
         this._expID = this._expList[int(this._expList.length * Math.random())];
         if(!this._info.changeToPet)
         {
            if(this._info.superNono)
            {
               if(this._info.isExtremeNono)
               {
                  ResourceManager.getResource(ClientConfig.getNonoPath(this._resPath + "exp/" + this._expID.toString() + ".swf"),this.onResFollowExp,"pet");
               }
               else
               {
                  ResourceManager.getResource(ClientConfig.getNonoPath(this._resPath + "exp/" + this._expID.toString() + "_" + this._info.superStage + ".swf"),this.onResFollowExp,"pet");
               }
            }
            else
            {
               ResourceManager.getResource(ClientConfig.getNonoPath(this._resPath + "exp/" + this._expID.toString() + ".swf"),this.onResFollowExp,"pet");
            }
         }
      }
      
      private function onResFollowExp(param1:DisplayObject) : void
      {
         this.clearActionMC();
         this._expMC = param1 as MovieClip;
         this._expMC.scaleX = SCALE;
         this._expMC.scaleY = SCALE;
         this.fillColor(this._expMC);
         addChild(this._expMC);
         clearTimeout(this._followTimeID);
         this.direction = Direction.DOWN;
         this._expMC.addFrameScript(this._expMC.totalFrames - 1,this.onFollowExpScript);
         this._expMC.gotoAndPlay(1);
         if(this._bodyMC)
         {
            DisplayUtil.removeForParent(this._bitmap,false);
            DisplayUtil.removeForParent(this._bodyMC,false);
         }
      }
      
      private function onFollowExpScript() : void
      {
         this.clearActionMC();
         if(this._bodyMC)
         {
            addChild(this._bodyMC);
         }
         this.onPeopleWalkEnd();
      }
      
      private function onResFollowAction(param1:Array) : void
      {
         this.clearActionMC();
         if(param1.length == 0)
         {
            return;
         }
         this._expMC = param1[0] as MovieClip;
         if(this._expMC)
         {
            this._expMC.scaleX = SCALE;
            this._expMC.scaleY = SCALE;
            this.fillColor(this._expMC);
            addChild(this._expMC);
            clearTimeout(this._followTimeID);
            this.direction = Direction.DOWN;
            this._expMC.addFrameScript(this._expMC.totalFrames - 1,this.onFollowExpScript);
            this._expMC.gotoAndPlay(1);
            if(this._bodyMC)
            {
               DisplayUtil.removeForParent(this._bitmap,false);
               DisplayUtil.removeForParent(this._bodyMC,false);
            }
         }
         if(param1.length >= 2)
         {
            this._sound = param1[1] as Sound;
            if(this._sound)
            {
               this._sc = this._sound.play(0,1);
            }
         }
      }
      
      private function onPeopleDir(param1:DynamicEvent) : void
      {
         this.direction = param1.paramObject as String;
         this.moveForPeople();
      }
      
      private function moveForPeople(param1:Boolean = true) : void
      {
         if(this._people)
         {
            switch(this._people.direction)
            {
               case Direction.LEFT_DOWN:
               case Direction.DOWN:
               case Direction.RIGHT_DOWN:
                  this._dirPos.y = -MAX;
                  DepthManager.bringToBottom(this);
                  break;
               case Direction.UP:
               case Direction.RIGHT_UP:
               case Direction.LEFT_UP:
                  this._dirPos.y = 10;
                  DepthManager.bringToTop(this);
                  break;
               case Direction.LEFT:
               case Direction.RIGHT:
                  this._dirPos.y = 0;
                  DepthManager.bringToBottom(this);
            }
            switch(this._people.direction)
            {
               case Direction.LEFT:
               case Direction.DOWN:
               case Direction.LEFT_DOWN:
               case Direction.LEFT_UP:
                  this._dirPos.x = MAX;
                  break;
               case Direction.UP:
               case Direction.RIGHT:
               case Direction.RIGHT_DOWN:
               case Direction.RIGHT_UP:
                  this._dirPos.x = -MAX;
            }
            if(param1)
            {
               if(Math.abs(Point.distance(pos,this._dirPos)) > 4)
               {
                  this._dirSpeed = GeomUtil.angleSpeed(pos,this._dirPos);
                  this._dirSpeed.x *= 4;
                  this._dirSpeed.y *= 4;
                  addEventListener(Event.ENTER_FRAME,this.onMoveDir);
               }
            }
            else
            {
               pos = this._dirPos.clone();
            }
         }
      }
      
      private function onMoveDir(param1:Event) : void
      {
         if(Math.abs(Point.distance(pos,this._dirPos)) < 4)
         {
            removeEventListener(Event.ENTER_FRAME,this.onMoveDir);
         }
         pos = pos.subtract(this._dirSpeed);
      }
      
      private function onNonoEvent(param1:NonoActionEvent) : void
      {
         switch(param1.actionType)
         {
            case NonoActionEvent.COLOR_CHANGE:
               if(this._info.userID == MainManager.actorID)
               {
                  NonoManager.info.color = param1.data as uint;
               }
               this._info.color = param1.data as uint;
               if(this._bodyUpColorMC)
               {
                  DisplayUtil.FillColor(this._bodyUpColorMC,this._info.color);
               }
               if(this._bodyDownColorMC)
               {
                  DisplayUtil.FillColor(this._bodyDownColorMC,this._info.color);
               }
               break;
            case NonoActionEvent.NAME_CHANGE:
               this._info.nick = param1.data as String;
               break;
            case NonoActionEvent.NONO_PLAY:
               this._actionID = param1.data as uint;
               if(this._actionID == 0)
               {
                  return;
               }
               this.getActionRes();
               break;
         }
      }
      
      private function onWalkStart(param1:Event) : void
      {
         var _loc2_:MovieClip = null;
         var _loc3_:MovieClip = null;
         var _loc4_:MovieClip = null;
         var _loc5_:MovieClip = null;
         if(this._bodyMC)
         {
            if(this._bodyUpColorMC)
            {
               if(this._bodyUpColorMC.numChildren > 0)
               {
                  _loc2_ = this._bodyUpColorMC.getChildAt(0) as MovieClip;
                  if(_loc2_)
                  {
                     if(_loc2_.currentFrame == 1)
                     {
                        _loc2_.gotoAndStop(2);
                     }
                  }
               }
            }
            if(this._bodyDownColorMC)
            {
               if(this._bodyDownColorMC.numChildren > 0)
               {
                  _loc3_ = this._bodyDownColorMC.getChildAt(0) as MovieClip;
                  if(_loc3_)
                  {
                     if(_loc3_.currentFrame == 1)
                     {
                        _loc3_.gotoAndStop(2);
                     }
                  }
               }
            }
            if(this._bodyChildMC)
            {
               if(this._bodyChildMC.numChildren > 0)
               {
                  if(_loc4_ = this._bodyChildMC.getChildAt(0) as MovieClip)
                  {
                     if(_loc4_.currentFrame == 1)
                     {
                        _loc4_.gotoAndStop(2);
                     }
                  }
               }
            }
            if(this._bodyFootMC)
            {
               if(this._bodyFootMC.numChildren > 0)
               {
                  if(_loc5_ = this._bodyFootMC.getChildAt(0) as MovieClip)
                  {
                     if(_loc5_.currentFrame == 1)
                     {
                        _loc5_.gotoAndStop(2);
                     }
                  }
               }
            }
         }
      }
      
      private function onWalkEnd(param1:Event) : void
      {
         var _loc2_:MovieClip = null;
         var _loc3_:MovieClip = null;
         var _loc4_:MovieClip = null;
         var _loc5_:MovieClip = null;
         if(this._bodyMC)
         {
            if(this._bodyUpColorMC)
            {
               if(this._bodyUpColorMC.numChildren > 0)
               {
                  _loc2_ = this._bodyUpColorMC.getChildAt(0) as MovieClip;
                  if(_loc2_)
                  {
                     if(_loc2_.currentFrame == 2)
                     {
                        _loc2_.gotoAndStop(1);
                     }
                  }
               }
            }
            if(this._bodyDownColorMC)
            {
               if(this._bodyDownColorMC.numChildren > 0)
               {
                  _loc3_ = this._bodyDownColorMC.getChildAt(0) as MovieClip;
                  if(_loc3_)
                  {
                     if(_loc3_.currentFrame == 2)
                     {
                        _loc3_.gotoAndStop(1);
                     }
                  }
               }
            }
            if(this._bodyChildMC)
            {
               if(this._bodyChildMC.numChildren > 0)
               {
                  if(_loc4_ = this._bodyChildMC.getChildAt(0) as MovieClip)
                  {
                     if(_loc4_.currentFrame == 2)
                     {
                        _loc4_.gotoAndStop(1);
                     }
                  }
               }
            }
            if(this._bodyFootMC)
            {
               if(this._bodyFootMC.numChildren > 0)
               {
                  if(_loc5_ = this._bodyFootMC.getChildAt(0) as MovieClip)
                  {
                     if(_loc5_.currentFrame == 2)
                     {
                        _loc5_.gotoAndStop(1);
                     }
                  }
               }
            }
         }
      }
      
      private function getActionRes() : void
      {
         if(!this._info.changeToPet)
         {
            if(this._info.superNono)
            {
               if(this._info.isExtremeNono)
               {
                  ResourceManager.getResourceList(ClientConfig.getNonoPath(this._resPath + "action/" + this._actionID.toString() + ".swf"),this.onResAction,ClaName);
               }
               else
               {
                  ResourceManager.getResourceList(ClientConfig.getNonoPath(this._resPath + "action/" + this._actionID.toString() + "_" + this._info.superStage + ".swf"),this.onResAction,ClaName);
               }
            }
            else
            {
               ResourceManager.getResourceList(ClientConfig.getNonoPath(this._resPath + "action/" + this._actionID.toString() + ".swf"),this.onResAction,ClaName);
            }
         }
      }
      
      private function getExpRes() : void
      {
         if(!this._info.changeToPet)
         {
            if(this._info.superNono)
            {
               if(this._info.isExtremeNono)
               {
                  ResourceManager.getResourceList(ClientConfig.getNonoPath(this._resPath + "exp/" + this._expID.toString() + ".swf"),this.onResExp,ClaName);
               }
               else
               {
                  ResourceManager.getResourceList(ClientConfig.getNonoPath(this._resPath + "exp/" + this._expID.toString() + "_" + this._info.superStage + ".swf"),this.onResExp,ClaName);
               }
            }
            else
            {
               ResourceManager.getResourceList(ClientConfig.getNonoPath(this._resPath + "exp/" + this._expID.toString() + ".swf"),this.onResExp,ClaName);
            }
         }
      }
      
      private function onOver(param1:MouseEvent) : void
      {
         var _loc2_:Boolean = false;
         if(this._rollDialogFlag)
         {
            this._rollDialogFlag = false;
            return;
         }
         if(this._info.userID == MainManager.actorID)
         {
            SocketConnection.send(1022,86057865);
         }
         if(this._people == null)
         {
            _loc2_ = false;
         }
         else
         {
            _loc2_ = true;
            if(this._people.walk.isPlaying)
            {
               return;
            }
         }
         var _loc3_:Point = localToGlobal(new Point(0,-30));
         this.stopAutoTime();
      }
      
      private function onShortcutHide(param1:Event) : void
      {
         if(this._people == null)
         {
            this.startAutoTime();
         }
      }
      
      public function startPlay() : void
      {
      }
      
      public function stopPlay() : void
      {
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(this._info.userID != MainManager.actorID)
         {
            SocketConnection.send(1022,86057867);
            Alert.show("这不是你的NoNo哦，只有你自己的NoNo才会听从你的命令！是否立即打开自己的NoNo跟随系统？",function():void
            {
               SocketConnection.send(1022,86057868);
               ModuleManager.showModule(ClientConfig.getAppModule("NonoNewInfoPanel"));
            },function():void
            {
               SocketConnection.send(1022,86057869);
            });
            return;
         }
         SocketConnection.send(1022,86057866);
         ModuleManager.showAppModule("NonoNewInfoPanel");
      }
   }
}
