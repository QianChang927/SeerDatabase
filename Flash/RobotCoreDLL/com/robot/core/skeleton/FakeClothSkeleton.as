package com.robot.core.skeleton
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.ISkeletonSprite;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.Direction;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class FakeClothSkeleton extends EventDispatcher implements ISkeleton
   {
      
      private static var _currentFake:com.robot.core.skeleton.FakeClothSkeleton;
       
      
      public const HAVE_FAKE:String = "have_fake";
      
      public const CLEAR_FAKE:String = "clear_fake";
      
      private const PRE_URL:String = "fakeCloth/swf/";
      
      private var _people:ISkeletonSprite;
      
      private var _info:UserInfo;
      
      private var _skeletonMC:MovieClip;
      
      private var _fakeID:uint;
      
      private var _box:Sprite;
      
      public function FakeClothSkeleton()
      {
         super();
         this._box = new Sprite();
         this._box.buttonMode = true;
         this._box.mouseChildren = false;
         this._box.mouseEnabled = false;
      }
      
      public static function beFake() : void
      {
         if(MainManager.actorModel.pet)
         {
            if(PetXMLInfo.isFlyPet(MainManager.actorModel.pet.info.petID))
            {
               Alarm.show("你现在骑着宠物，不能伪装变身噢！");
               return;
            }
            if(Boolean(MainManager.actorModel.pet.info.petID) && MainManager.actorInfo.openTiger)
            {
               Alarm.show("你现在骑着宠物，不能伪装变身噢！");
               return;
            }
         }
         if(MainManager.actorInfo.actionType != 0)
         {
            Alarm.show("飞行模式下不能伪装变身噢！");
         }
         else
         {
            change();
            Alarm.show("你已获得全息伪装效果！");
         }
      }
      
      private static function change() : void
      {
         _currentFake = new com.robot.core.skeleton.FakeClothSkeleton();
         MainManager.actorModel.skeleton = _currentFake;
         _currentFake.fakeID = 1;
      }
      
      public static function beNormal() : void
      {
         if(_currentFake)
         {
            _currentFake.showEmpty();
         }
      }
      
      public static function get currentFake() : com.robot.core.skeleton.FakeClothSkeleton
      {
         return _currentFake;
      }
      
      public function set people(param1:ISkeletonSprite) : void
      {
         this._people = param1;
         this._people.direction = Direction.DOWN;
         this._people.sprite.addChild(this._box);
         (this._people as BasePeoleModel).addEventListener(RobotEvent.CHANGE_DIRECTION,this.onChangeDirection);
         (this._people as BasePeoleModel).addEventListener(RobotEvent.WALK_START,this.onStartWalk);
         (this._people as BasePeoleModel).addEventListener(RobotEvent.WALK_END,this.onEndWalk);
      }
      
      private function onChangeDirection(param1:Event) : void
      {
         this.changeDirection(this._people.direction);
      }
      
      private function onStartWalk(param1:RobotEvent) : void
      {
         this.changeDirection(this._people.direction);
      }
      
      private function onEndWalk(param1:RobotEvent) : void
      {
         if(this._skeletonMC)
         {
            DisplayUtil.stopAllMovieClip(this._skeletonMC);
         }
      }
      
      public function get people() : ISkeletonSprite
      {
         return this._people;
      }
      
      public function getSkeletonMC() : MovieClip
      {
         return this._skeletonMC;
      }
      
      public function destroy() : void
      {
         if(this._skeletonMC == null)
         {
            ResourceManager.cancelURL(ClientConfig.getResPath(this.PRE_URL + this._fakeID + ".swf"));
         }
         else
         {
            DisplayUtil.removeForParent(this._skeletonMC);
            DisplayUtil.removeForParent(this._box);
            this._skeletonMC = null;
         }
      }
      
      public function getBodyMC() : MovieClip
      {
         return this._skeletonMC;
      }
      
      public function set info(param1:UserInfo) : void
      {
         this._info = param1;
      }
      
      public function set fakeID(param1:uint) : void
      {
         this._fakeID = param1;
         ResourceManager.getResource(ClientConfig.getResPath(this.PRE_URL + this._fakeID + ".swf"),this.onLoadSWF,"pet");
      }
      
      private function onLoadSWF(param1:DisplayObject) : void
      {
         this._skeletonMC = param1 as MovieClip;
         this._people.clearOldSkeleton();
         this._box.addChild(this._skeletonMC);
         DisplayUtil.stopAllMovieClip(this._skeletonMC);
         EventManager.dispatchEvent(new Event("have_fake"));
      }
      
      private function showEmpty() : void
      {
         this._people.direction = Direction.DOWN;
         (this._people as BasePeoleModel).removeEventListener(RobotEvent.CHANGE_DIRECTION,this.onChangeDirection);
         (this._people as BasePeoleModel).skeleton = new EmptySkeletonStrategy();
         _currentFake.destroy();
         _currentFake = null;
         EventManager.dispatchEvent(new Event("clear_fake"));
      }
      
      public function play() : void
      {
      }
      
      public function stop() : void
      {
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
   }
}
