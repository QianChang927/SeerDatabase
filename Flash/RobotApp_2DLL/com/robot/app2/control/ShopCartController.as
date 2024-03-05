package com.robot.app2.control
{
   import com.robot.app.buyItem.ProductAction;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ShopCartDiscountXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class ShopCartController
   {
      
      public static const PRODUCT_CANCELED:String = "productCanceled";
      
      public static const PRODUCT_NUM_CHANGED:String = "productNumChanged";
      
      public static const CART_BUY_COMPLETE:String = "cartBuyComplete";
      
      public static const CART_MAX:int = 20;
      
      private static var _productMap:HashMap = new HashMap();
       
      
      public function ShopCartController()
      {
         super();
      }
      
      public static function queryCart(param1:Function = null) : void
      {
         var func:Function = param1;
         SocketConnection.sendByQueue(CommandID.CART_QUERY_PRODUCTS,null,function(param1:SocketEvent):void
         {
            var _loc5_:int = 0;
            var _loc6_:int = 0;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            _productMap.clear();
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               _loc5_ = int(_loc2_.readUnsignedInt());
               _loc6_ = int(_loc2_.readUnsignedInt());
               _productMap.add(_loc5_,_loc6_);
               _loc4_++;
            }
            if(null != func)
            {
               func();
            }
         });
      }
      
      public static function isProductInCart(param1:int) : Boolean
      {
         return _productMap.containsKey(param1);
      }
      
      public static function setProductNum(param1:int, param2:int) : void
      {
         if(Boolean(_productMap.containsKey(param1)) && param2 >= 0)
         {
            _productMap.add(param1,param2);
         }
      }
      
      public static function getProductNum(param1:int) : int
      {
         return _productMap.getValue(param1);
      }
      
      public static function clearProduct(param1:int, param2:Function = null) : void
      {
         var pid:int = param1;
         var func:Function = param2;
         SocketConnection.sendByQueue(CommandID.CART_MODIFY_PRODUCT,[1,[pid,0]],function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            queryCart(function():void
            {
               if(null != func)
               {
                  func();
               }
               EventManager.dispatchEvent(new DynamicEvent(PRODUCT_CANCELED,pid));
            });
         });
      }
      
      public static function modifyManyProducts(param1:int, param2:int, param3:Function = null) : void
      {
         var pid:int = param1;
         var cnt:int = param2;
         var func:Function = param3;
         SocketConnection.sendByQueue(CommandID.CART_MODIFY_PRODUCT,[2,pid,cnt],function(param1:SocketEvent):void
         {
            if(null != func)
            {
               func();
            }
         });
      }
      
      public static function addManyProducts(param1:Array, param2:Function = null) : void
      {
         var pair:Array = null;
         var productArr:Array = param1;
         var func:Function = param2;
         var by:ByteArray = new ByteArray();
         by.writeUnsignedInt(productArr.length);
         for each(pair in productArr)
         {
            by.writeUnsignedInt(pair[0]);
            by.writeUnsignedInt(pair[1]);
         }
         SocketConnection.sendByQueue(CommandID.CART_ADD_PRODUCT,[by],function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            queryCart(function():void
            {
               if(null != func)
               {
                  func();
               }
               EventManager.dispatchEvent(new DynamicEvent(PRODUCT_NUM_CHANGED));
            });
         });
      }
      
      public static function buyProducts(param1:Function = null, param2:Function = null) : void
      {
         var onBuy:Function = null;
         var onCancel:Function = null;
         var func:Function = param1;
         var cancelFunc:Function = param2;
         onBuy = function(param1:*):void
         {
            removeEvents();
            if(null != func)
            {
               func();
            }
         };
         onCancel = function(param1:*):void
         {
            removeEvents();
            if(null != cancelFunc)
            {
               cancelFunc();
            }
         };
         var removeEvents:Function = function():void
         {
            EventManager.removeEventListener(RobotEvent.MONEY_BUY,onBuy);
            EventManager.removeEventListener(RobotEvent.CANCEL_MONEY_BUY,onCancel);
         };
         EventManager.addEventListener(RobotEvent.MONEY_BUY,onBuy);
         EventManager.addEventListener(RobotEvent.CANCEL_MONEY_BUY,onCancel);
         ProductAction.buyShopCart(productList,totalPrice);
      }
      
      public static function get totalProductKinds() : int
      {
         return _productMap.length;
      }
      
      public static function get allProducts() : HashMap
      {
         return _productMap;
      }
      
      public static function get totalPrice() : Number
      {
         return ShopCartDiscountXMLInfo.getTotalPrice(productList);
      }
      
      public static function get totalNum() : int
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         for each(_loc2_ in _productMap.getKeys())
         {
            _loc1_ += _productMap.getValue(_loc2_);
         }
         return _loc1_;
      }
      
      public static function get isCartFull() : Boolean
      {
         return _productMap.length >= CART_MAX;
      }
      
      public static function get productList() : Array
      {
         var arr:Array = null;
         arr = [];
         _productMap.each2(function(param1:int, param2:int):void
         {
            arr.push([param1,param2]);
         });
         return arr;
      }
   }
}
