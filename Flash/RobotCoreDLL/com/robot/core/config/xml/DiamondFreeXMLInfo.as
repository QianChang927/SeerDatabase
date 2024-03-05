package com.robot.core.config.xml
{
   import com.robot.core.CommandID;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class DiamondFreeXMLInfo
   {
      
      private static var xmlClass:Class = DiamondFreeXMLInfo_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
       
      
      public function DiamondFreeXMLInfo()
      {
         super();
      }
      
      public static function getItemXML(param1:uint) : XML
      {
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc2_:XMLList = xml.descendants("Item");
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.@ID == param1.toString())
            {
               return _loc4_;
            }
         }
         return null;
      }
      
      public static function gainDiamond(param1:uint, param2:Function = null) : Boolean
      {
         var item:XML = null;
         var itemID:uint = param1;
         var callback:Function = param2;
         item = getItemXML(itemID);
         if(item == null)
         {
            if(callback != null)
            {
               callback.call(null,0);
            }
            return false;
         }
         if(item.hasOwnProperty("@ForeverKey"))
         {
            SocketConnection.sendByQueue(CommandID.GET_FOREVER_VALUE,[int(item.@ForeverKey)],function(param1:SocketEvent):void
            {
               var val:int;
               var bit:int;
               var result:Boolean;
               var e:SocketEvent = param1;
               var ret:ByteArray = e.data as ByteArray;
               ret.position = 0;
               val = ret.readInt();
               bit = int(item.@ForeverBitPos);
               result = Boolean((val & 1 << bit - 1) >> bit - 1);
               if(result)
               {
                  Alarm.show("已经领取过了！不能再领取！",function():void
                  {
                     if(callback != null)
                     {
                        callback.call(null,0);
                     }
                  });
               }
               else if(item.hasOwnProperty("@IsGlobal") && item.@IsGlobal == "1")
               {
                  SocketConnection.sendWithCallback2(CommandID.DIAMOND_SYSTEM_GET_GLOBAL_NUM,function(param1:SocketEvent):void
                  {
                     var val1:int;
                     var val2:int;
                     var e1:SocketEvent = param1;
                     var ret1:ByteArray = e1.data as ByteArray;
                     ret1.position = 0;
                     val1 = ret1.readInt();
                     val2 = ret1.readInt();
                     if(val2 >= item.@GlobalLimit)
                     {
                        Alarm.show("钻石已经被领光了！不能再领取！",function():void
                        {
                           if(callback != null)
                           {
                              callback.call(null,0);
                           }
                        });
                     }
                     else
                     {
                        sendGainCommand(int(item.@ID),callback);
                     }
                  },[int(item.@GlobalKey),int(item.@ID)]);
               }
               else
               {
                  sendGainCommand(int(item.@ID),callback);
               }
            });
         }
         else if(item.hasOwnProperty("@IsGlobal") && item.@IsGlobal == "1")
         {
            SocketConnection.sendWithCallback2(CommandID.DIAMOND_SYSTEM_GET_GLOBAL_NUM,function(param1:SocketEvent):void
            {
               var val3:int;
               var val4:int;
               var e4:SocketEvent = param1;
               var ret4:ByteArray = e4.data as ByteArray;
               ret4.position = 0;
               val3 = ret4.readInt();
               val4 = ret4.readInt();
               if(val4 >= item.@GlobalLimit)
               {
                  Alarm.show("钻石已经被领光了！不能再领取！",function():void
                  {
                     if(callback != null)
                     {
                        callback.call(null,0);
                     }
                  });
               }
               else
               {
                  sendGainCommand(int(item.@ID),callback);
               }
            },[int(item.@GlobalKey),int(item.@ID)]);
         }
         else
         {
            sendGainCommand(int(item.@ID),callback);
         }
         return true;
      }
      
      private static function sendGainCommand(param1:int, param2:Function = null) : void
      {
         var itemID:int = param1;
         var func:Function = param2;
         SocketConnection.sendWithCallback2(CommandID.DIAMOND_SYSTEM_GET_FREE_DIAMOND,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = _loc2_.readInt();
            DebugTrace.show("领取到的钻石数量:" + _loc3_);
            EventManager.dispatchEvent(new DynamicEvent(RobotEvent.DIAMOND_BUY));
            if(func != null)
            {
               func.call(null,_loc3_);
            }
         },[itemID]);
      }
   }
}
