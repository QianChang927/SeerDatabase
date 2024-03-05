package com.robot.core.mode
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcInfo;
   import com.robot.core.utils.Direction;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.filters.GlowFilter;
   import flash.geom.Point;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.net.URLRequest;
   import flash.text.TextFormat;
   import flash.utils.Timer;
   import org.taomee.events.DynamicEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class NpcModel extends BasePeoleModel implements INpcModel
   {
       
      
      private const SOUND_PATH:String = "newNpc/sound/";
      
      private var _npcInfo:NpcInfo;
      
      private var _tasks:Array;
      
      private var _allTasks:Array;
      
      private var _timer:Timer;
      
      private var _mark:MovieClip;
      
      private var _sound:Sound;
      
      private var _soundChannel:SoundChannel;
      
      private var _issceneNpc:Boolean;
      
      public function NpcModel(param1:NpcInfo, param2:Boolean = false)
      {
         var _loc3_:UserInfo = null;
         var _loc4_:uint = 0;
         var _loc5_:MovieClip = null;
         var _loc6_:TextFormat = null;
         this._npcInfo = param1;
         this._issceneNpc = param2;
         _loc3_ = new UserInfo();
         _loc3_.direction = 3;
         _loc3_.nick = this._npcInfo.npcName;
         _loc3_.color = this._npcInfo.color;
         for each(_loc4_ in this._npcInfo.clothIds)
         {
            _loc3_.clothes.push(new PeopleItemInfo(_loc4_));
         }
         super(_loc3_);
         buttonMode = true;
         mouseEnabled = true;
         clickBtn.mouseChildren = clickBtn.mouseEnabled = false;
         _loc5_ = new npc_shadow_mc();
         _loc5_.y += 20;
         addChildAt(_loc5_,0);
         _skeletonSys.getBodyMC().filters = [new GlowFilter(3355443,1,4,4)];
         _skeletonSys.getBodyMC().scaleX = _skeletonSys.getBodyMC().scaleY = 1.4;
         (_loc6_ = new TextFormat()).size = 14;
         _loc6_.color = 255;
         _nameTxt.setTextFormat(_loc6_);
         _nameTxt.y += 15;
         _nameTxt.y += this._npcInfo.nameY;
         _nameTxt.filters = [new GlowFilter(16777215,1,3,3,5)];
         if(this._npcInfo.isStop)
         {
            direction = this._npcInfo.dir;
         }
         else
         {
            this._timer = new Timer(2000);
            this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
            this._timer.start();
         }
         pos = this._npcInfo.point;
         MapManager.currentMap.depthLevel.addChild(this);
         sprite.addEventListener(MouseEvent.CLICK,this.onNpcClick);
      }
      
      public function show() : void
      {
         visible = true;
      }
      
      public function hide() : void
      {
         visible = false;
      }
      
      public function setMark(param1:uint) : void
      {
         if(this._mark)
         {
            DisplayUtil.removeForParent(this._mark);
            this._mark = null;
         }
         if(param1 == 1)
         {
            this._mark = UIManager.getMovieClip("lib_excalmatory_mark");
            this._mark.y = getBounds(this).y - 10;
            addChild(this._mark);
         }
         else if(param1 == 2)
         {
            this._mark = UIManager.getMovieClip("lib_question_mark");
            this._mark.y = getBounds(this).y - 10;
            addChild(this._mark);
         }
      }
      
      public function get npcInfo() : NpcInfo
      {
         return this._npcInfo;
      }
      
      public function set tasks(param1:Array) : void
      {
         this._tasks = param1;
      }
      
      public function get tasks() : Array
      {
         return this._tasks;
      }
      
      public function set allTasks(param1:Array) : void
      {
         this._allTasks = param1;
      }
      
      public function get allTasks() : Array
      {
         return this._allTasks;
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         if(this._timer)
         {
            this._timer.reset();
         }
         var _loc2_:Point = this._npcInfo.walkPoints[Math.floor(Math.random() * this._npcInfo.walkPoints.length)];
         while(_loc2_.x == pos.x && _loc2_.y == pos.y)
         {
            _loc2_ = this._npcInfo.walkPoints[Math.floor(Math.random() * this._npcInfo.walkPoints.length)];
         }
         _walk.execute_point(this,_loc2_,false);
      }
      
      override protected function onWalkEnd(param1:Event) : void
      {
         if(this._timer)
         {
            this._timer.reset();
            this._timer.start();
         }
         _skeletonSys.stop();
      }
      
      private function onNpcClick(param1:MouseEvent) : void
      {
         var _loc3_:uint = 0;
         if(this._soundChannel)
         {
            this._soundChannel.stop();
         }
         if(this._npcInfo.sound != 0)
         {
            _loc3_ = uint(Math.random() * this._npcInfo.sound + 1);
            this._sound = new Sound();
            this._sound.load(new URLRequest(ClientConfig.getResPath(this.SOUND_PATH + this._npcInfo.npcId + "/" + this._npcInfo.npcId + "_" + _loc3_ + ".mp3")));
            this._soundChannel = this._sound.play();
         }
         if(this._timer)
         {
            this._timer.reset();
         }
         _walk.stop();
         var _loc2_:uint = uint(Direction.getIndex(MainManager.actorModel.pos,pos));
         if(_loc2_ < 4)
         {
            _loc2_ += 4;
         }
         else
         {
            _loc2_ -= 4;
         }
         direction = Direction.LIST[_loc2_];
         MainManager.actorModel.walkAction(pos);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
      }
      
      private function onWalkEnter(param1:RobotEvent) : void
      {
         if(Point.distance(pos,MainManager.actorModel.pos) < 60)
         {
            if(this._timer)
            {
               this._timer.reset();
               this._timer.start();
            }
            MainManager.actorModel.stop();
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
            MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
            if(!this._issceneNpc)
            {
               NpcController.dispatchEvent(new DynamicEvent(NpcController.NPC_CLICK,this));
            }
         }
      }
      
      private function onMapClick(param1:MapEvent) : void
      {
         if(this._timer)
         {
            this._timer.reset();
            this._timer.start();
         }
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
      }
      
      override public function destroy() : void
      {
         super.destroy();
         this._npcInfo = null;
         sprite.removeEventListener(MouseEvent.CLICK,this.onNpcClick);
         if(this._timer)
         {
            this._timer.reset();
            this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
            this._timer = null;
         }
         if(this._soundChannel)
         {
            this._soundChannel.stop();
            this._soundChannel = null;
            this._sound = null;
         }
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
      }
   }
}
