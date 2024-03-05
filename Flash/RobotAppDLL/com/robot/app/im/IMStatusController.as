package com.robot.app.im
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.PlayerStatusInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class IMStatusController
   {
      
      public static var _jumpFromIMList:Boolean = false;
      
      public static var _jumpPlayId:uint;
       
      
      public function IMStatusController()
      {
         super();
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onAddArrow);
      }
      
      private static function onAddArrow(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onAddArrow);
         if(_jumpFromIMList)
         {
            if(_jumpPlayId != 0 && Boolean(PlayerStatusInfo.getArrowVisible(_jumpPlayId)))
            {
               CommonUI.addYellowArrow(MapManager.currentMap.topLevel,PlayerStatusInfo.getArrowPosX(_jumpPlayId),PlayerStatusInfo.getArrowPosY(_jumpPlayId),PlayerStatusInfo.getArrowAngle(_jumpPlayId));
            }
            _jumpFromIMList = false;
         }
      }
      
      public static function getCurrentStatus(param1:uint, param2:uint, param3:Function) : void
      {
         var id:uint = param1;
         var lastStatus:uint = param2;
         var fun:Function = param3;
         SocketConnection.addCmdListener(CommandID.PLAYERSTATUSTRACKING_GET_STATUS,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.PLAYERSTATUSTRACKING_GET_STATUS,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            if(_loc3_.length < 8)
            {
               if(fun != null)
               {
                  fun(lastStatus);
                  return;
               }
            }
            var _loc4_:uint = _loc3_.readUnsignedInt();
            var _loc5_:uint;
            if((_loc5_ = _loc3_.readUnsignedInt()) == 7 || _loc5_ == 8 || _loc5_ == 11 || _loc5_ == 15 || _loc5_ == 20)
            {
               _loc5_ = 0;
            }
            if(fun != null)
            {
               fun(_loc5_);
            }
         });
         SocketConnection.send(CommandID.PLAYERSTATUSTRACKING_GET_STATUS,id);
      }
      
      public static function destroy() : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onAddArrow);
      }
   }
}
