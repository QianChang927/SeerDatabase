package com.robot.core.controller
{
   import com.robot.core.config.xml.RedSysXmlInfo;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class RedSystemController
   {
      
      private static var redHash:HashMap;
      
      private static var _instance:com.robot.core.controller.RedSystemController;
      
      public static const RED_UPDATED:String = "red_updated";
       
      
      public function RedSystemController()
      {
         super();
         SocketConnection.addCmdListener(45799,this.redChangeHandle);
      }
      
      public static function get instance() : com.robot.core.controller.RedSystemController
      {
         if(_instance == null)
         {
            _instance = new com.robot.core.controller.RedSystemController();
         }
         return _instance;
      }
      
      public function updateAllRed() : void
      {
         var _loc1_:Array = RedSysXmlInfo.redIds();
         this.updateRedS(_loc1_);
      }
      
      public function updateRedS(param1:Array, param2:Function = null) : void
      {
         var byte:ByteArray;
         var i:int;
         var ids:Array = param1;
         var fun:Function = param2;
         if(ids == null)
         {
            return;
         }
         redHash = new HashMap();
         byte = new ByteArray();
         byte.position = 0;
         byte.writeUnsignedInt(ids.length);
         i = 0;
         while(i < ids.length)
         {
            byte.writeUnsignedInt(ids[i]);
            i++;
         }
         SocketConnection.sendByQueue(45798,[byte],function(param1:SocketEvent):void
         {
            var _loc5_:int = 0;
            var _loc6_:int = 0;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               _loc5_ = int(_loc2_.readUnsignedInt());
               _loc6_ = int(_loc2_.readUnsignedInt());
               redHash.add(_loc5_,_loc6_);
               _loc4_++;
            }
            EventManager.dispatchEvent(new Event(RED_UPDATED));
         });
      }
      
      private function redChangeHandle(param1:SocketEvent) : void
      {
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = int(_loc2_.readUnsignedInt());
            _loc6_ = int(_loc2_.readUnsignedInt());
            redHash.add(_loc5_,_loc6_);
            _loc4_++;
         }
         EventManager.dispatchEvent(new Event(RED_UPDATED));
      }
      
      public function sendRedClickHandle(param1:int) : void
      {
         var redid:int = param1;
         SocketConnection.sendByQueue(45800,[redid],function(param1:SocketEvent):void
         {
         });
      }
      
      public function getredHash() : HashMap
      {
         return redHash;
      }
   }
}
