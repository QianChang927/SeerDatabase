package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class SdkPayManager
   {
      
      private static var xmlClass:Class = SdkPayManager_xmlClass;
      
      private static var items:Array;
      
      private static var _xml:XML;
      
      {
         setup();
      }
      
      public function SdkPayManager()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         _xml = XML(new xmlClass());
         items = [];
         var _loc1_:XMLList = _xml.item;
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = {};
            _loc3_.productID = int(_loc2_.@productID);
            _loc3_.name = String(_loc2_.@name);
            _loc3_.id = int(_loc2_.@id);
            _loc3_.type = int(_loc2_.@type);
            _loc3_.money = int(_loc2_.@money);
            _loc3_.quantity = String(_loc2_.@quantity);
            items.push(_loc3_);
         }
      }
      
      public static function buyDiamond(param1:int, param2:Function = null) : void
      {
         var item:Object = null;
         var productId:int = param1;
         var fun:Function = param2;
         item = getItem(productId);
         if(item == null)
         {
            Alarm.show("没有对应道具！");
            return;
         }
         SocketConnection.sendWithPromise(CommandID.GET_PAY_SIGN,[productId,1]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:String = _loc2_.readUTFBytes(64);
            var _loc4_:String = _loc2_.readUTFBytes(32);
            var _loc5_:String = _loc2_.readUTFBytes(32);
            TaomeeSdkManager.instance.buyDiamond(productId,_loc3_,_loc4_,_loc5_,item,fun);
         });
      }
      
      public static function getItem(param1:int) : Object
      {
         var _loc2_:Object = null;
         var _loc3_:int = 0;
         while(_loc3_ < items.length)
         {
            if(items[_loc3_].id == param1)
            {
               _loc2_ = items[_loc3_];
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
   }
}
