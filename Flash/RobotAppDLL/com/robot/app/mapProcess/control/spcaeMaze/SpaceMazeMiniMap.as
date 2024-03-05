package com.robot.app.mapProcess.control.spcaeMaze
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   import gs.easing.Back;
   import org.taomee.events.DynamicEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class SpaceMazeMiniMap
   {
      
      private static var _cache:Array;
      
      private static var _map:MovieClip;
      
      private static var _controller:com.robot.app.mapProcess.control.spcaeMaze.SpaceMazeController;
       
      
      public function SpaceMazeMiniMap()
      {
         super();
      }
      
      public static function show() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:uint = 0;
         _controller = com.robot.app.mapProcess.control.spcaeMaze.SpaceMazeController.getInstance();
         _map = MapManager.currentMap.libManager.getMovieClip("miniMap");
         if(_cache == null)
         {
            _cache = [0];
            _loc1_ = 1;
            while(_loc1_ < 17)
            {
               _cache.push(2);
               _map["room_" + _loc1_].gotoAndStop(2);
               _loc1_++;
            }
         }
         else
         {
            _loc2_ = 1;
            while(_loc2_ < 17)
            {
               _map["room_" + _loc2_].gotoAndStop(_cache[_loc2_]);
               _loc2_++;
            }
         }
         _map["arrow"].gotoAndStop(1);
         _map["arrow"].buttonMode = true;
         _map["arrow"].addEventListener(MouseEvent.CLICK,onArrowClick);
         _map["seer"].x = _map["room_" + _controller.currentRoom].x;
         _map["seer"].y = _map["room_" + _controller.currentRoom].y;
         LevelManager.appLevel.addChild(_map);
         _controller.addEventListener(com.robot.app.mapProcess.control.spcaeMaze.SpaceMazeController.CHANGE_ROOM,onChangeRoom);
      }
      
      public static function onArrowClick(param1:MouseEvent) : void
      {
         if(_map["arrow"].currentFrame == 1)
         {
            _map["arrow"].gotoAndStop(2);
            TweenLite.to(_map,0.6,{
               "x":280,
               "ease":Back.easeOut
            });
         }
         else
         {
            _map["arrow"].gotoAndStop(1);
            TweenLite.to(_map,0.6,{
               "x":0,
               "ease":Back.easeOut
            });
         }
      }
      
      public static function onChangeRoom(param1:DynamicEvent) : void
      {
         _cache[_controller.currentRoom] = 1;
         _map["room_" + _controller.currentRoom].gotoAndStop(1);
         _map["seer"].x = _map["room_" + _controller.currentRoom].x;
         _map["seer"].y = _map["room_" + _controller.currentRoom].y;
      }
      
      public static function destroy(param1:Boolean = false) : void
      {
         if(param1)
         {
            _cache = null;
         }
         if(_map)
         {
            DisplayUtil.removeForParent(_map);
            _map["arrow"].removeEventListener(MouseEvent.CLICK,onArrowClick);
            _map = null;
         }
         if(_controller)
         {
            _controller.removeEventListener(com.robot.app.mapProcess.control.spcaeMaze.SpaceMazeController.CHANGE_ROOM,onChangeRoom);
            _controller = null;
         }
      }
   }
}
