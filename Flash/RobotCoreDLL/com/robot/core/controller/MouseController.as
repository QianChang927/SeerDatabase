package com.robot.core.controller
{
   import com.robot.core.event.MapEvent;
   import com.robot.core.group.manager.GroupManager;
   import com.robot.core.group.manager.GroupMouseManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.MapConfig;
   import com.robot.core.mode.MapModel;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import org.taomee.utils.MovieClipUtil;
   
   public class MouseController
   {
      
      public static var CanMove:Boolean = true;
      
      private static var _mouseTxt:TextField;
      
      private static var lastPos:Point = new Point(0,0);
       
      
      public function MouseController()
      {
         super();
      }
      
      public static function addMouseEvent() : void
      {
         if(MapManager.currentMap)
         {
            MapManager.currentMap.spaceLevel.addEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
         }
         LevelManager.stage.addEventListener(MouseEvent.MOUSE_MOVE,onMouseMove);
      }
      
      public static function removeMouseEvent() : void
      {
         MapManager.currentMap.spaceLevel.removeEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
         LevelManager.stage.removeEventListener(MouseEvent.MOUSE_MOVE,onMouseMove);
      }
      
      private static function showMouseXY() : void
      {
         if(_mouseTxt == null)
         {
            _mouseTxt = new TextField();
            _mouseTxt.autoSize = TextFieldAutoSize.LEFT;
            _mouseTxt.mouseEnabled = false;
            LevelManager.stage.addChild(_mouseTxt);
         }
      }
      
      private static function upDateTxt() : void
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         _loc1_ = LevelManager.stage.mouseX;
         _loc2_ = LevelManager.stage.mouseY;
         _mouseTxt.x = _loc1_ + 15;
         _mouseTxt.y = _loc2_ + 5;
         _mouseTxt.text = MainManager.actorInfo.mapID.toString() + " / " + _loc1_.toString() + "," + _loc2_.toString();
      }
      
      private static function onMouseDown(param1:MouseEvent) : void
      {
         var _loc2_:Point = null;
         var _loc3_:MovieClip = null;
         _loc2_ = new Point(param1.currentTarget.mouseX,param1.currentTarget.mouseY);
         _loc3_ = UIManager.getMovieClip("Effect_MouseDown");
         _loc3_.mouseEnabled = false;
         _loc3_.mouseChildren = false;
         MovieClipUtil.playEndAndRemove(_loc3_);
         _loc3_.x = _loc2_.x;
         _loc3_.y = _loc2_.y;
         var _loc5_:DisplayObjectContainer;
         var _loc4_:MapModel;
         if(_loc5_ = (_loc4_ = MapManager.currentMap).root)
         {
            if(_loc5_.scrollRect)
            {
               _loc3_.x -= _loc5_.scrollRect.x;
               _loc3_.y -= _loc5_.scrollRect.y;
            }
         }
         LevelManager.mapLevel.addChild(_loc3_);
         if(Math.abs(_loc2_.x - lastPos.x) <= 5 && Math.abs(_loc2_.y - lastPos.y) <= 5)
         {
            return;
         }
         lastPos.x = _loc2_.x;
         lastPos.y = _loc2_.y;
         MapConfig.delEnterFrame();
         if(Boolean(MainManager.actorInfo.groupInfo) && GroupManager.isInGroup)
         {
            if(MainManager.actorInfo.groupInfo.leaderID == MainManager.actorID)
            {
               GroupMouseManager.openMouseEvent();
               MainManager.actorModel.walkAction(_loc2_);
            }
            else
            {
               GroupMouseManager.closeMouseEvent();
            }
         }
         else
         {
            MainManager.actorModel.walkAction(_loc2_);
         }
         LevelManager.stage.focus = LevelManager.stage;
         MapManager.dispatchEvent(new MapEvent(MapEvent.MAP_MOUSE_DOWN,MapManager.currentMap));
      }
      
      private static function onMouseMove(param1:MouseEvent) : void
      {
         param1.updateAfterEvent();
      }
   }
}
