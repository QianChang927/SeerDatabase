package com.robot.core.skeleton.special
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.UserInfo;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.ISkeletonSprite;
   import com.robot.core.skeleton.ISkeleton;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SpecialSkeleton implements ISkeleton
   {
       
      
      private var _url:String;
      
      private var _controller:com.robot.core.skeleton.special.SpecialSkeletonController;
      
      private var _people:ISkeletonSprite;
      
      private var _skeletonMC:MovieClip;
      
      public function SpecialSkeleton(param1:uint, param2:com.robot.core.skeleton.special.SpecialSkeletonController)
      {
         super();
         this._url = ClientConfig.getSpecialSkeleton(param1.toString());
         this._controller = param2;
      }
      
      public function set people(param1:ISkeletonSprite) : void
      {
         var i:ISkeletonSprite = param1;
         this._people = i;
         ResourceManager.getResource(this._url,function(param1:DisplayObject):void
         {
            _skeletonMC = param1 as MovieClip;
            stop();
            _people.sprite.addChild(_skeletonMC);
            _controller.dispatchEvent(new Event(com.robot.core.skeleton.special.SpecialSkeletonController.TRANSFORM_START));
         },"pet");
      }
      
      public function get people() : ISkeletonSprite
      {
         return this._people;
      }
      
      public function getSkeletonMC() : MovieClip
      {
         return this._skeletonMC;
      }
      
      public function getBodyMC() : MovieClip
      {
         return this._skeletonMC;
      }
      
      public function set info(param1:UserInfo) : void
      {
      }
      
      public function play() : void
      {
         if(this._skeletonMC)
         {
            this._skeletonMC.addEventListener(Event.ENTER_FRAME,this.onPlay);
         }
      }
      
      private function onPlay(param1:Event) : void
      {
         var _loc2_:MovieClip = this._skeletonMC.getChildAt(0) as MovieClip;
         if(_loc2_)
         {
            this._skeletonMC.removeEventListener(Event.ENTER_FRAME,this.onPlay);
            _loc2_.gotoAndPlay(2);
         }
      }
      
      public function stop() : void
      {
         if(this._skeletonMC)
         {
            this._skeletonMC.addEventListener(Event.ENTER_FRAME,this.onStop);
         }
      }
      
      private function onStop(param1:Event) : void
      {
         var _loc2_:MovieClip = this._skeletonMC.getChildAt(0) as MovieClip;
         if(_loc2_)
         {
            this._skeletonMC.removeEventListener(Event.ENTER_FRAME,this.onStop);
            _loc2_.gotoAndStop(1);
         }
      }
      
      public function changeDirection(param1:String) : void
      {
         if(this._skeletonMC)
         {
            this._skeletonMC.gotoAndStop(param1);
         }
      }
      
      public function changeCloth(param1:Array) : void
      {
      }
      
      public function takeOffCloth() : void
      {
      }
      
      public function changeColor(param1:uint, param2:Boolean = true) : void
      {
      }
      
      public function changeDoodle(param1:String) : void
      {
      }
      
      public function specialAction(param1:BasePeoleModel, param2:int) : void
      {
      }
      
      public function destroy() : void
      {
         if(this._skeletonMC)
         {
            this._skeletonMC.removeEventListener(Event.ENTER_FRAME,this.onPlay);
            this._skeletonMC.removeEventListener(Event.ENTER_FRAME,this.onStop);
            DisplayUtil.removeForParent(this._skeletonMC);
         }
         ResourceManager.cancelURL(this._url);
         this._controller = null;
         this._people = null;
         this._skeletonMC = null;
      }
   }
}
