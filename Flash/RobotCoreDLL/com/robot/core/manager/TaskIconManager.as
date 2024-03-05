package com.robot.core.manager
{
   import com.robot.core.event.MapEvent;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.filters.DropShadowFilter;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   import org.taomee.utils.DisplayUtil;
   
   public class TaskIconManager
   {
      
      public static const LEFT:String = "left";
      
      public static const RIGHT:String = "right";
      
      public static const LEFT_SIDE:String = "left_side";
      
      public static const RIGHT_SIDE:String = "right_side";
      
      public static const LEFT_BAR:String = "left_bar";
      
      public static const RIGHT_BAR:String = "right_bar";
      
      private static const LEFT_START_POINT:Point = new Point(2,2);
      
      private static const RIGHT_START_POINT:Point = new Point(906,2);
      
      private static const LEFT_SIDE_START_POINT:Point = new Point(2,60);
      
      private static const RIGHT_SIDE_START_POINT:Point = new Point(906,60);
      
      private static const LEFT_BAR_START_POINT:Point = new Point(2 + 57,60);
      
      private static const RIGHT_BAR_START_POINT:Point = new Point(906 - 57,60);
      
      private static const BOX_WIDTH:int = 55;
      
      private static const BOX_MARGIN:int = 2;
      
      private static var _all:HashMap = new HashMap();
      
      private static var _left:Array = [];
      
      private static var _right:Array = [];
      
      private static var _leftSide:Array = [];
      
      private static var _rightSide:Array = [];
      
      private static var _leftBar:Array = [];
      
      private static var _rightBar:Array = [];
      
      private static var _filter:DropShadowFilter = new DropShadowFilter(5,45,0,0.6);
      
      private static var alignList:Array = [LEFT,RIGHT,LEFT_SIDE,RIGHT_SIDE,LEFT_BAR,RIGHT_BAR];
      
      private static var startPointList:Array = [LEFT_START_POINT,RIGHT_START_POINT,LEFT_SIDE_START_POINT,RIGHT_SIDE_START_POINT,LEFT_BAR_START_POINT,RIGHT_BAR_START_POINT];
      
      private static var iconList:Array = [_left,_right,_leftSide,_rightSide,_leftBar,_rightBar];
       
      
      public function TaskIconManager()
      {
         super();
      }
      
      public static function hideAll() : void
      {
         _all.eachKey(function(param1:DisplayObject):void
         {
            DisplayUtil.removeForParent(param1,false);
         });
      }
      
      public static function showAll() : void
      {
         _all.eachKey(function(param1:DisplayObject):void
         {
            LevelManager.iconLevel.addChild(param1);
         });
      }
      
      public static function addIcon(param1:DisplayObject, param2:String, param3:int = -1, param4:Array = null) : void
      {
         var addToIconLevel:Function;
         var direction:int = 0;
         var info:Info = null;
         var icon:DisplayObject = param1;
         var align:String = param2;
         var index:int = param3;
         var exMapList:Array = param4;
         if(_all.containsKey(icon) == false)
         {
            addToIconLevel = function():void
            {
               icon.filters = [_filter];
               icon.x = icon.y = 0;
               LevelManager.iconLevel.addChild(icon);
               info.exMapList = exMapList;
               if(index == -1)
               {
                  (iconList[direction] as Array).push(icon);
               }
               else
               {
                  --index;
                  (iconList[direction] as Array).splice(index,0,icon);
               }
               _all.add(icon,info);
               layout(iconList[direction] as Array,startPointList[direction] as Point,alignList[direction]);
               if(Boolean(exMapList) && exMapList.length > 0)
               {
                  MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMap);
                  MapManager.addEventListener(MapEvent.MAP_DESTROY,onDestroyMap);
               }
            };
            direction = alignList.indexOf(align);
            info = new Info();
            if(index == -1)
            {
               info.index = 7;
               addToIconLevel();
            }
            else if(index >= 1)
            {
               info.index = index;
               if((iconList[direction] as Array).length >= index)
               {
                  addToIconLevel();
               }
               else
               {
                  index = -1;
                  addToIconLevel();
               }
            }
         }
      }
      
      public static function getIsInActivityTime(param1:String) : Boolean
      {
         var _loc4_:CronTimeVo = null;
         var _loc5_:Array = null;
         var _loc6_:CronTimeVo = null;
         if(param1 == "")
         {
            return true;
         }
         var _loc2_:Array = param1.split(",");
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            _loc5_ = (_loc2_[_loc3_] as String).split(" ");
            _loc6_ = new CronTimeVo(_loc5_[0],_loc5_[1],_loc5_[2],_loc5_[3],_loc5_[4],_loc5_[5]);
            _loc2_[_loc3_] = _loc6_;
            _loc3_++;
         }
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function delIcon(param1:DisplayObject, param2:Boolean = true) : void
      {
         var _loc3_:int = 0;
         if(_all.containsKey(param1))
         {
            _all.remove(param1);
            DisplayUtil.removeForParent(param1,param2);
            _loc3_ = 0;
            while(_loc3_ < iconList.length)
            {
               if((iconList[_loc3_] as Array).indexOf(param1) != -1)
               {
                  (iconList[_loc3_] as Array).splice((iconList[_loc3_] as Array).indexOf(param1),1);
                  layout(iconList[_loc3_] as Array,startPointList[_loc3_] as Point,alignList[_loc3_]);
               }
               _loc3_++;
            }
         }
      }
      
      private static function layout(param1:Array, param2:Point, param3:String) : void
      {
         var i:uint;
         var num:int = 0;
         var sortByIndex:Function = null;
         var icon:DisplayObject = null;
         var info:Info = null;
         var array:Array = param1;
         var pos:Point = param2;
         var align:String = param3;
         sortByIndex = function(param1:DisplayObject, param2:DisplayObject):int
         {
            var _loc3_:int = (_all.getValue(param1) as Info).index;
            var _loc4_:int = (_all.getValue(param2) as Info).index;
            if(_loc3_ <= _loc4_)
            {
               return -1;
            }
            if(_loc3_ > _loc4_)
            {
               return 1;
            }
            return 0;
         };
         var len:uint = array.length;
         if(align == LEFT || align == RIGHT || align == LEFT_BAR || align == RIGHT_BAR)
         {
            num = pos.x;
         }
         else if(align == LEFT_SIDE || align == RIGHT_SIDE)
         {
            num = pos.y;
         }
         array.sort(sortByIndex);
         i = 0;
         while(i < len)
         {
            icon = array[i] as DisplayObject;
            if(_all.containsKey(icon))
            {
               info = _all.getValue(icon);
               if(align == LEFT || align == LEFT_BAR)
               {
                  icon.x = num;
                  icon.y = pos.y;
                  num = num + BOX_WIDTH + BOX_MARGIN;
               }
               else if(align == RIGHT || align == RIGHT_BAR)
               {
                  icon.x = num;
                  icon.y = pos.y;
                  num = num - BOX_WIDTH - BOX_MARGIN;
               }
               else if(align == LEFT_SIDE)
               {
                  icon.x = pos.x;
                  icon.y = num;
                  num = num + BOX_WIDTH + BOX_MARGIN + 12;
               }
               else if(align == RIGHT_SIDE)
               {
                  icon.x = pos.x;
                  icon.y = num;
                  num = num + BOX_WIDTH + BOX_MARGIN + 12;
               }
               if(i >= 7)
               {
                  icon.visible = false;
               }
               else
               {
                  icon.visible = true;
               }
               DebugTrace.show("名字：" + align + "---" + icon.name + "--x:" + icon.x + "---y:" + icon.y + "---第i个：" + i);
            }
            i++;
         }
      }
      
      private static function onChangeMap(param1:MapEvent) : void
      {
         var id:uint = 0;
         var i:int = 0;
         var e:MapEvent = param1;
         id = MapManager.currentMap.id;
         _all.eachKey(function(param1:DisplayObject):void
         {
            var _loc2_:Info = _all.getValue(param1);
            if(Boolean(_loc2_.exMapList) && _loc2_.exMapList.length > 0)
            {
               i = 0;
               while(i < _loc2_.exMapList.length)
               {
                  if(_loc2_.exMapList[i] == 50000 && id >= 50000 || _loc2_.exMapList[i] == id)
                  {
                     param1.visible = false;
                     break;
                  }
                  param1.visible = true;
                  ++i;
               }
            }
         });
      }
      
      private static function onDestroyMap(param1:MapEvent) : void
      {
         var _loc2_:DisplayObject = null;
         var _loc3_:Info = null;
         for each(_loc2_ in _all)
         {
            _loc3_ = _all.getValue(_loc2_);
            if(Boolean(_loc3_.exMapList) && _loc3_.exMapList.length > 0)
            {
               _loc2_.visible = true;
            }
         }
      }
   }
}

class Info
{
    
   
   public var exMapList:Array;
   
   public var index:int;
   
   public function Info()
   {
      super();
   }
}
