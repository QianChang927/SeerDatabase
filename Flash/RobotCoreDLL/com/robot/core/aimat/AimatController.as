package com.robot.core.aimat
{
   import com.robot.core.config.xml.AimatXMLInfo;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.Direction;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.ds.HashSet;
   import org.taomee.manager.CursorManager;
   import org.taomee.manager.EventManager;
   
   public class AimatController
   {
      
      private static var _list:HashSet = new HashSet();
      
      private static var _aimatID:uint;
      
      private static var _itemID:uint;
      
      private static var _colding:Boolean = false;
      
      public static var continuous:int = 0;
      
      private static var _endPos:Point;
      
      private static var _instance:EventDispatcher;
       
      
      public function AimatController()
      {
         super();
      }
      
      public static function addAimat(param1:IAimat) : void
      {
         _list.add(param1);
      }
      
      public static function removeAimat(param1:IAimat) : void
      {
         _list.remove(param1);
      }
      
      public static function destroy() : void
      {
         _list.each2(function(param1:IAimat):void
         {
            param1.destroy();
            param1 = null;
         });
         _list.clear();
      }
      
      public static function setAimatID(param1:Array) : void
      {
         _aimatID = AimatXMLInfo.getAimatID(param1);
      }
      
      public static function get aimatID() : uint
      {
         return _aimatID;
      }
      
      public static function start(param1:uint, param2:Boolean = true, param3:Boolean = true) : void
      {
         var info:AimatInfo;
         var t:uint = 0;
         var itemID:uint = param1;
         var isCold:Boolean = param2;
         var lockMap:Boolean = param3;
         if(itemID == 600045)
         {
            SocketConnection.send(1022,86059575);
         }
         else if(itemID == 600043)
         {
            SocketConnection.send(1022,86059576);
         }
         else if(itemID == 600044)
         {
            SocketConnection.send(1022,86059577);
         }
         if(isCold)
         {
            if(_colding)
            {
               return;
            }
            _colding = true;
            t = setTimeout(function():void
            {
               _colding = false;
               clearTimeout(t);
            },1000);
         }
         _itemID = itemID;
         if(lockMap)
         {
            LevelManager.mapLevel.mouseChildren = false;
         }
         CursorManager.setCursor(UIManager.getSprite("Cursor_AimatSkin"));
         LevelManager.stage.addEventListener(MouseEvent.MOUSE_MOVE,onMove);
         LevelManager.mapLevel.addEventListener(MouseEvent.CLICK,onClick);
         info = new AimatInfo();
         info.id = _aimatID;
         info.userID = MainManager.actorID;
         info.startPos = MainManager.actorModel.pos.clone();
         dispatchEvent(AimatEvent.OPEN,info);
      }
      
      public static function close(param1:Point = null, param2:Boolean = true) : void
      {
         LevelManager.mapLevel.mouseChildren = true;
         CursorManager.removeCursor();
         LevelManager.stage.removeEventListener(MouseEvent.MOUSE_MOVE,onMove);
         LevelManager.mapLevel.removeEventListener(MouseEvent.CLICK,onClick);
         var _loc3_:AimatInfo = new AimatInfo();
         _loc3_.id = _aimatID;
         _loc3_.userID = MainManager.actorID;
         _loc3_.startPos = MainManager.actorModel.pos.clone();
         _loc3_.endPos = param1;
         dispatchEvent(AimatEvent.CLOSE,_loc3_);
         if(param2)
         {
            EventManager.dispatchEvent(new Event("throwThingOverEvent"));
         }
      }
      
      private static function onMove(param1:MouseEvent) : void
      {
         MainManager.actorModel.direction = Direction.getStr(MainManager.actorModel.pos,new Point(LevelManager.stage.mouseX,LevelManager.stage.mouseY));
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var _loc2_:Point = new Point(LevelManager.mapLevel.mouseX,LevelManager.mapLevel.mouseY);
         _endPos = _loc2_;
         if(continuous <= 0)
         {
            LevelManager.mapLevel.removeEventListener(MouseEvent.CLICK,onClick);
         }
         addEventListener(AimatEvent.PLAY_END,onAimatEventPlayEnd);
         MainManager.actorModel.aimatAction(_itemID,_aimatID,_loc2_);
      }
      
      private static function onAimatEventPlayEnd(param1:AimatEvent) : void
      {
         if(continuous <= 0)
         {
            removeEventListener(AimatEvent.PLAY_END,onAimatEventPlayEnd);
            close(_endPos);
         }
      }
      
      private static function getInstance() : EventDispatcher
      {
         if(_instance == null)
         {
            _instance = new EventDispatcher();
         }
         return _instance;
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         getInstance().addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         getInstance().removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:String, param2:AimatInfo) : void
      {
         getInstance().dispatchEvent(new AimatEvent(param1,param2));
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return getInstance().hasEventListener(param1);
      }
      
      public static function willTrigger(param1:String) : Boolean
      {
         return getInstance().willTrigger(param1);
      }
   }
}
