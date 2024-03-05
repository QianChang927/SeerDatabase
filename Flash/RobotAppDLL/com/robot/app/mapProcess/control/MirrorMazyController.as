package com.robot.app.mapProcess.control
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MirrorMazyController
   {
      
      public static var _map:BaseMapProcess;
      
      private static var _rockNum:uint;
       
      
      public function MirrorMazyController()
      {
         super();
      }
      
      public static function initForMap761(param1:BaseMapProcess) : void
      {
         _map = param1;
         ToolTipManager.add(_map.conLevel["mirror"],"镜像迷阵");
         _map.conLevel["mirror"].buttonMode = true;
         _map.conLevel["mirror"].gotoAndStop(1);
         _map.conLevel["mirror"].addEventListener(MouseEvent.CLICK,onMirrorClick);
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
         SocketConnection.send(CommandID.ITEM_LIST,1200211,1200211,2);
         SocketConnection.addCmdListener(CommandID.VS_BULAIKE_MIRROE,onMirroeHandler);
      }
      
      private static function onMirrorClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         SocketConnection.send(1022,86049079);
         if(_rockNum < 3)
         {
            Alarm.show("破镜锤数量不够！");
         }
         else
         {
            AnimateManager.playMcAnimate(_map.conLevel["mirror"],2,"mc",function():void
            {
               _map.conLevel["mirror"].gotoAndStop(1);
               SocketConnection.send(CommandID.VS_BULAIKE_MIRROE);
            });
         }
      }
      
      private static function onMirroeHandler(param1:SocketEvent) : void
      {
         _rockNum -= 3;
      }
      
      private static function onItemCountHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ != 0)
         {
            _loc2_.readUnsignedInt();
            _rockNum = _loc2_.readUnsignedInt();
         }
         else
         {
            _rockNum = 0;
         }
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         SocketConnection.removeCmdListener(CommandID.VS_BULAIKE_MIRROE,onMirroeHandler);
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
         if(_map.conLevel["mirror"])
         {
            ToolTipManager.remove(_map.conLevel["mirror"]);
            _map.conLevel["mirror"].removeEventListener(MouseEvent.CLICK,onMirrorClick);
         }
         _map = null;
      }
   }
}
