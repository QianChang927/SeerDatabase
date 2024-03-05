package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.controller.MapController;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.group.manager.GroupManager;
   import com.robot.core.manager.map.config.MapConfig;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class MapManager
   {
      
      public static const TOWER_MAP:uint = 500;
      
      public static const FRESH_TRIALS:uint = 600;
      
      public static const ID_MAX:uint = 49999;
      
      public static const TYPE_MAX:uint = 200;
      
      public static const defaultID:uint = 1;
      
      public static const defaultRoomStyleID:uint = 500001;
      
      public static const defaultArmStyleID:uint = 800001;
      
      public static var currentMap:MapModel;
      
      public static var styleID:uint;
      
      public static var initPos:Point;
      
      public static var prevMapID:uint;
      
      public static var isInMap:Boolean;
      
      private static var _mapType:uint;
      
      public static var DESTROY_SWITCH:Boolean = true;
      
      private static var _leaveCheackFun:Function;
      
      public static var SpecialState:uint = 0;
      
      private static var _eventInstance:EventDispatcher;
      
      private static var _mapController:MapController;
      
      public static var isInitMap:Boolean = true;
      
      private static var _appArrow:MovieClip;
      
      private static var targetMap:int;
      
      {
         setup();
      }
      
      public function MapManager()
      {
         super();
      }
      
      public static function setup() : void
      {
         _eventInstance = new EventDispatcher();
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightClose);
      }
      
      public static function get mapEventController() : EventDispatcher
      {
         return _eventInstance = _eventInstance || new EventDispatcher();
      }
      
      public static function getMapController() : MapController
      {
         return _mapController = _mapController || new MapController();
      }
      
      private static function onFightClose(param1:PetFightEvent) : void
      {
         if(DESTROY_SWITCH == false)
         {
            SocketConnection.send(CommandID.LIST_MAP_PLAYER);
         }
      }
      
      public static function get mapType() : uint
      {
         return _mapType;
      }
      
      public static function getResMapID(param1:uint) : uint
      {
         if(param1 > MapManager.ID_MAX)
         {
            return styleID;
         }
         return param1;
      }
      
      public static function setLeaveCheckFun(param1:Function) : void
      {
         _leaveCheackFun = param1;
      }
      
      public static function changeMap(param1:int, param2:int = 0, param3:uint = 0) : void
      {
         var _loc5_:uint = 0;
         var _loc6_:BasePeoleModel = null;
         if(param1 == 96)
         {
            param1 = 1;
            Alarm.show("场景未开放");
         }
         if(param1 == 485 || param1 == 480 || param1 == 495)
         {
            param1 = int(MainManager.actorInfo.mapID);
            Alarm.show("地图已下架！");
         }
         var _loc4_:int;
         if((_loc4_ = MapXMLInfo.getReplaceMapId(param1)) != 0)
         {
            param1 = _loc4_;
         }
         if(NewSeerTaskController.isNewSeer)
         {
            if((param1 < 11066 || param1 > 11131) && param1 != 11052 && param1 != 1224 && param1 != 1221 && param1 != 1272 && param1 != 1344)
            {
               param1 = 1224;
            }
         }
         else if(param1 == 1224)
         {
            Alarm.show("您已经完成了新兵训练任务，这里不再适合你啦！");
            MapManager.changeMap(1);
            return;
         }
         if(param1 > 10000 && param1 < 50000)
         {
            changeLocalMap(param1);
            return;
         }
         if(_leaveCheackFun != null && !_leaveCheackFun())
         {
            return;
         }
         _leaveCheackFun = null;
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         _mapType = param3;
         MapConfig.delEnterFrame();
         if(currentMap && param1 == currentMap.id && NewSeerTaskController.isNewSeerTaskADone2016 && !NewSeerTaskController.isNewSeerTaskBDone2016)
         {
            MapManager.dispatchEvent(new MapEvent("mapnoneedswitch"));
         }
         if(!GroupManager.isInGroup)
         {
            getMapController().changeMap(param1,param2,param3);
         }
         else if(MainManager.actorInfo.groupInfo && param1 > 0 && param1 < 1000)
         {
            if(MainManager.actorInfo.groupInfo.leaderID == MainManager.actorID)
            {
               for each(_loc5_ in MainManager.actorInfo.groupInfo.memberList)
               {
                  if((_loc6_ = UserManager.getUserModel(_loc5_)) == null && param1 != 431)
                  {
                     Alarm.show("队友还没有到达，你还不能换地图！");
                     return;
                  }
               }
               getMapController().changeMap(param1,param2,param3);
            }
            else
            {
               Alarm.show("组队过程中不能自己换地图！");
            }
         }
         else
         {
            Alarm.show("组队时无法进入小屋和战队基地！");
         }
      }
      
      public static function changeLocalMap(param1:uint, param2:Boolean = false) : void
      {
         if(_leaveCheackFun != null && !_leaveCheackFun())
         {
            return;
         }
         _leaveCheackFun = null;
         if(param2)
         {
            getMapController().changeLocalMap(param1);
            return;
         }
         if(!GroupManager.isInGroup)
         {
            getMapController().changeLocalMap(param1);
         }
         else if(MainManager.actorInfo.groupInfo)
         {
            if(MainManager.actorInfo.groupInfo.leaderID == MainManager.actorID)
            {
               getMapController().changeLocalMap(param1);
            }
            else
            {
               Alarm.show("组队过程中是不能自己换地图哦！");
            }
         }
      }
      
      public static function refMap(param1:Boolean = true, param2:Boolean = true) : void
      {
         if(DESTROY_SWITCH)
         {
            getMapController().refMap(param1,param2);
         }
      }
      
      public static function destroy() : void
      {
         if(DESTROY_SWITCH)
         {
            getMapController().destroy();
         }
      }
      
      public static function getObjectsPointRect(param1:Point, param2:Number = 10, param3:Array = null) : Array
      {
         var _loc6_:Array = null;
         var _loc8_:DisplayObject = null;
         var _loc9_:Class = null;
         if(!isInMap)
         {
            return _loc6_;
         }
         var _loc4_:DisplayObjectContainer;
         var _loc5_:int = (_loc4_ = currentMap.depthLevel).numChildren;
         _loc6_ = [];
         var _loc7_:int = 0;
         while(_loc7_ < _loc5_)
         {
            _loc8_ = _loc4_.getChildAt(_loc7_);
            if(param3 == null)
            {
               if(Point.distance(new Point(_loc8_.x,_loc8_.y),param1) < param2)
               {
                  _loc6_.push(_loc8_);
               }
            }
            else
            {
               for each(_loc9_ in param3)
               {
                  if(_loc8_ is _loc9_)
                  {
                     if(Point.distance(new Point(_loc8_.x,_loc8_.y),param1) < param2)
                     {
                        _loc6_.push(_loc8_);
                     }
                     break;
                  }
               }
            }
            _loc7_++;
         }
         return _loc6_;
      }
      
      public static function getObjectPoint(param1:Point, param2:Array = null) : DisplayObject
      {
         var _loc6_:DisplayObject = null;
         var _loc7_:Class = null;
         if(!isInMap)
         {
            return null;
         }
         var _loc3_:DisplayObjectContainer = currentMap.depthLevel;
         var _loc4_:int;
         var _loc5_:int = _loc4_ = _loc3_.numChildren - 1;
         while(_loc5_ >= 0)
         {
            _loc6_ = _loc3_.getChildAt(_loc5_);
            if(param2 == null)
            {
               if(_loc6_.hitTestPoint(param1.x,param1.y))
               {
                  return _loc6_;
               }
            }
            else
            {
               for each(_loc7_ in param2)
               {
                  if(_loc6_ is _loc7_)
                  {
                     if(_loc6_.hitTestPoint(param1.x,param1.y))
                     {
                        return _loc6_;
                     }
                     break;
                  }
               }
            }
            _loc5_--;
         }
         return null;
      }
      
      public static function addAppArrowListener(param1:uint, param2:Number, param3:Number, param4:uint) : void
      {
         if(_appArrow == null)
         {
            _appArrow = UIManager.getMovieClip("Arrows_UI");
            _appArrow.mouseChildren = false;
            _appArrow.mouseEnabled = false;
         }
         _appArrow.x = param2;
         _appArrow.y = param3;
         _appArrow.rotation = param4;
         if(MapManager.currentMap.id == param1)
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchComplete);
            _appArrow["mc"].gotoAndPlay(1);
            LevelManager.appLevel.addChild(_appArrow);
            _appArrow.parent.setChildIndex(_appArrow,0);
         }
         else
         {
            targetMap = param1;
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchComplete);
         }
      }
      
      private static function onMapSwitchComplete(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchComplete);
         if(MapManager.currentMap.id == targetMap && Boolean(_appArrow))
         {
            _appArrow["mc"].gotoAndPlay(1);
            LevelManager.appLevel.addChild(_appArrow);
            _appArrow.parent.setChildIndex(_appArrow,0);
         }
         targetMap = 0;
      }
      
      public static function removeAppArrow() : void
      {
         if(_appArrow)
         {
            DisplayUtil.removeForParent(_appArrow);
         }
      }
      
      public static function changeMapWithCallback(param1:int, param2:Function = null) : void
      {
         var mapid:int = param1;
         var backFun:Function = param2;
         if(currentMap.id != mapid)
         {
            addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:* = null):void
            {
               removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               if(backFun != null)
               {
                  backFun();
               }
            });
            changeMap(mapid);
         }
         else if(backFun != null)
         {
            backFun();
         }
      }
      
      public static function get isSwitching() : Boolean
      {
         return getMapController().isSwitching;
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         _eventInstance.addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         _eventInstance.removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:Event) : void
      {
         if(hasEventListener(param1.type))
         {
            _eventInstance.dispatchEvent(param1);
         }
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return _eventInstance.hasEventListener(param1);
      }
      
      public static function willTrigger(param1:String) : Boolean
      {
         return _eventInstance.willTrigger(param1);
      }
   }
}
