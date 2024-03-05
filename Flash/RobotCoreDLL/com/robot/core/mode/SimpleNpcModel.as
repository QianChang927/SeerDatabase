package com.robot.core.mode
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcInfo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.net.URLRequest;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SimpleNpcModel extends Sprite implements INpcModel
   {
       
      
      private const SOUND_PATH:String = "newNpc/sound/";
      
      private var _npcInfo:NpcInfo;
      
      private var _tasks:Array;
      
      private var _allTasks:Array;
      
      private var _model:MovieClip;
      
      private var _mark:MovieClip;
      
      private var _sound:Sound;
      
      private var _soundChannel:SoundChannel;
      
      private var _issceneNpc:Boolean;
      
      public function SimpleNpcModel(param1:NpcInfo, param2:Boolean = false)
      {
         var con:Sprite = null;
         var info:NpcInfo = param1;
         var issceneNpc:Boolean = param2;
         super();
         this._npcInfo = info;
         this._issceneNpc = issceneNpc;
         x = this._npcInfo.point.x;
         y = this._npcInfo.point.y;
         buttonMode = true;
         addEventListener(MouseEvent.CLICK,this.onNpcClick);
         if(MapManager.currentMap)
         {
            MapManager.currentMap.depthLevel.addChild(this);
            DepthManager.swapDepthAll(MapManager.currentMap.depthLevel);
         }
         con = this;
         ResourceManager.getResource(ClientConfig.getResPath("newNpc/multi/" + this._npcInfo.npcId + ".swf"),function(param1:DisplayObject):void
         {
            _model = param1 as MovieClip;
            addChild(_model);
            if(_mark)
            {
               _mark.y = getBounds(con).y - 10;
               addChild(_mark);
            }
         },"item");
         MapManager.currentMap.depthLevel.addChild(this);
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
            if(this._model)
            {
               this._mark.y = getBounds(this).y - 10;
               addChild(this._mark);
            }
         }
         else if(param1 == 2)
         {
            this._mark = UIManager.getMovieClip("lib_question_mark");
            if(this._model)
            {
               this._mark.y = getBounds(this).y - 10;
               addChild(this._mark);
            }
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
      
      private function onNpcClick(param1:MouseEvent) : void
      {
         var _loc2_:uint = 0;
         if(this._npcInfo.sound != 0)
         {
            _loc2_ = uint(Math.random() * this._npcInfo.sound + 1);
            this._sound = new Sound();
            this._sound.load(new URLRequest(ClientConfig.getResPath(this.SOUND_PATH + this._npcInfo.npcId + "/" + this._npcInfo.npcId + "_" + _loc2_ + ".mp3")));
            this._soundChannel = this._sound.play();
         }
         if(this._npcInfo.isWalk)
         {
            MainManager.actorModel.walkAction(this._npcInfo.point);
            MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
            MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
         }
         else if(!this._issceneNpc)
         {
            NpcController.dispatchEvent(new DynamicEvent(NpcController.NPC_CLICK,this));
         }
      }
      
      private function onWalkEnter(param1:RobotEvent) : void
      {
         if(Point.distance(this._npcInfo.point,MainManager.actorModel.pos) < 60)
         {
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
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
      }
      
      public function destroy() : void
      {
         ResourceManager.cancelURL(ClientConfig.getResPath("newNpc/multi/" + this._npcInfo.npcId + ".swf"));
         this._npcInfo = null;
         this._model = null;
         removeEventListener(MouseEvent.CLICK,this.onNpcClick);
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
