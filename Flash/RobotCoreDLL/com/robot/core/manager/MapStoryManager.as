package com.robot.core.manager
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.CommandID;
   import com.robot.core.behavior.ChangeClothBehavior;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.loading.Loading;
   import flash.display.DisplayObject;
   import flash.events.Event;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class MapStoryManager
   {
      
      public static var ON_MAP_STORY_START:String = "MapStoryManager.ON_MAP_STORY_START";
      
      public static var ON_MAP_STORY_Quit:String = "MapStoryManager.ON_MAP_STORY_Quit";
      
      public static var ON_STORY_PUSH:String = "MapStoryManager.ON_STORY_PUSH";
      
      public static var IsInStory:Boolean = false;
      
      public static var CurStoryType:int;
      
      public static var StoryProgress:int;
      
      public static var originClothArr:Array = null;
      
      {
         setUp();
      }
      
      public function MapStoryManager()
      {
         super();
      }
      
      public static function setUp() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         updateProgress();
      }
      
      public static function updateProgress() : Promise
      {
         var deferred:Deferred = null;
         var num:int = 0;
         deferred = new Deferred();
         var foreverArr:Array = [105807];
         var paramArr:ByteArray = new ByteArray();
         for each(num in foreverArr)
         {
            paramArr.writeInt(num);
         }
         SocketConnection.sendByQueue(CommandID.GET_MULTI_FOREVER,[foreverArr.length,paramArr],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = new Array();
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedInt());
               _loc5_++;
            }
            StoryProgress = int(_loc4_[0] >> 8 * 0 & 127);
            deferred.resolve(null);
         });
         return deferred.promise;
      }
      
      private static function onMapChange(param1:*) : void
      {
         if(IsInStory)
         {
            startStory();
         }
      }
      
      public static function startStory(param1:int = 0) : void
      {
         var _loc2_:Class = null;
         CurStoryType = param1;
         updateProgress();
         _loc2_ = getDefinitionByName("com.robot.app.toolBar.ToolBarController") as Class;
         _loc2_["showOrHideAllUser"](false);
         _loc2_.panel["setIconLevel"](false);
         _loc2_["getpanelUi"]().visible = false;
         _loc2_["hideEmail"]();
         _loc2_ = getDefinitionByName("com.robot.app2.control.SeerBoxIconController") as Class;
         _loc2_["UI"].visible = false;
         _loc2_ = getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl") as Class;
         _loc2_["hideOrShowAllObjects"](false);
         if(IsInStory == false)
         {
            EventManager.dispatchEvent(new Event(MapStoryManager.ON_MAP_STORY_START));
         }
         IsInStory = true;
         ModuleManager.hideAllModule();
         ModuleManager.showAppModule("VirtualToolbarforMapStory",null,Loading.NO_ALL);
         _loc2_ = getDefinitionByName("com.robot.app.panel.MapNamePanel") as Class;
         _loc2_["hide"]();
      }
      
      public static function quitStory() : void
      {
         var _loc1_:Class = null;
         if(IsInStory == false)
         {
            return;
         }
         _loc1_ = getDefinitionByName("com.robot.app.toolBar.ToolBarController") as Class;
         _loc1_["showOrHideAllUser"](true);
         _loc1_.panel["setIconLevel"](true);
         _loc1_["getpanelUi"]().visible = true;
         _loc1_["hideEmail"]();
         _loc1_ = getDefinitionByName("com.robot.app2.control.SeerBoxIconController") as Class;
         _loc1_["UI"].visible = true;
         _loc1_ = getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl") as Class;
         _loc1_["hideOrShowAllObjects"](true);
         if(IsInStory == true)
         {
            EventManager.dispatchEvent(new Event(MapStoryManager.ON_MAP_STORY_Quit));
         }
         IsInStory = false;
         ModuleManager.hideAllModule();
         _loc1_ = getDefinitionByName("com.robot.app.panel.MapNamePanel") as Class;
         _loc1_["show"]();
         recoverSeerEquip();
      }
      
      public static function dialog(param1:int, param2:int, param3:Function = null) : void
      {
         var activityId:int = param1;
         var id:int = param2;
         var callback:Function = param3;
         var cls:Class = getDefinitionByName("com.robot.app2.control.DialogControl") as Class;
         cls["showAllDilogs"](activityId,id).then(function(param1:int):void
         {
            if(callback != null)
            {
               callback(param1);
            }
         });
      }
      
      public static function dialogToNextStep(param1:int, param2:int, param3:Function = null) : void
      {
         var activityId:int = param1;
         var id:int = param2;
         var callback:Function = param3;
         var cls:Class = getDefinitionByName("com.robot.app2.control.DialogControl") as Class;
         cls["showAllDilogs"](activityId,id).then(function(param1:int):void
         {
            var va:int = param1;
            pushNextStep().then(function():void
            {
               if(callback != null)
               {
                  callback(va);
               }
            });
         });
      }
      
      public static function pushNextStep() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         ++StoryProgress;
         SocketConnection.sendWithPromise(45850,[26,1]).then(function():void
         {
            var num:int = 0;
            var foreverArr:Array = [105807];
            var paramArr:ByteArray = new ByteArray();
            for each(num in foreverArr)
            {
               paramArr.writeInt(num);
            }
            SocketConnection.sendByQueue(CommandID.GET_MULTI_FOREVER,[foreverArr.length,paramArr],function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               _loc2_.position = 0;
               var _loc3_:int = int(_loc2_.readUnsignedInt());
               var _loc4_:Array = new Array();
               var _loc5_:int = 0;
               while(_loc5_ < _loc3_)
               {
                  _loc4_.push(_loc2_.readUnsignedInt());
                  _loc5_++;
               }
               deferred.resolve(_loc4_);
               StoryProgress = int(_loc4_[0] >> 8 * 0 & 127);
            });
         });
         EventManager.dispatchEvent(new Event(MapStoryManager.ON_STORY_PUSH));
         return deferred.promise;
      }
      
      public static function playerMoveToMc(param1:DisplayObject, param2:Function = null) : void
      {
         if(param1 == null)
         {
         }
         var _loc3_:Point = param1.localToGlobal(new Point(0,0));
         playerMoveToPos(_loc3_,param2);
      }
      
      public static function playerMoveToPos(param1:Point, param2:Function = null) : void
      {
         var onGotoEnter:Function = null;
         var dp:Point = param1;
         var callback:Function = param2;
         onGotoEnter = function(param1:RobotEvent):void
         {
            if(Point.distance(MainManager.actorModel.pos,new Point(dp.x,dp.y)) < 40)
            {
               MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onGotoEnter);
               if(callback != null)
               {
                  callback();
               }
            }
         };
         var dist:Number = new Point(MainManager.actorModel.sprite.x - dp.x,MainManager.actorModel.sprite.y - dp.y).length;
         dp.x += (MainManager.actorModel.sprite.x - dp.x) / dist * 45;
         dp.y += (MainManager.actorModel.sprite.y - dp.y) / dist * 45;
         MainManager.actorModel.walkAction(dp);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onGotoEnter);
         if(Point.distance(MainManager.actorModel.pos,new Point(dp.x,dp.y)) > 40.1)
         {
            MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onGotoEnter);
         }
         else if(callback != null)
         {
            callback();
         }
      }
      
      public static function playerPos(param1:Number, param2:Number) : void
      {
         MainManager.actorModel.pos = new Point(param1,param2);
      }
      
      public static function changeSeerEquip(param1:Array) : void
      {
         originClothArr = MainManager.actorInfo.clothes;
         var _loc2_:* = [];
         var _loc3_:int = 0;
         while(_loc3_ < param1.length)
         {
            _loc2_.push(new PeopleItemInfo(param1[_loc3_],0));
            _loc3_++;
         }
         var _loc4_:ChangeClothBehavior;
         (_loc4_ = new ChangeClothBehavior(_loc2_)).isNet = false;
         MainManager.actorModel.execBehavior(_loc4_);
         if(0 != MainManager.actorInfo.mountId)
         {
            MountManager.changeMount(0);
         }
      }
      
      public static function recoverSeerEquip() : void
      {
         if(originClothArr == null)
         {
            return;
         }
         var _loc1_:ChangeClothBehavior = new ChangeClothBehavior(originClothArr);
         _loc1_.isNet = false;
         MainManager.actorModel.execBehavior(_loc1_);
      }
   }
}
