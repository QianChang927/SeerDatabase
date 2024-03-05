package com.robot.core.manager
{
   import flash.external.ExternalInterface;
   
   public class TaomeeSdkManager
   {
      
      public static var appId:String = "20230714002";
      
      private static var _instance:com.robot.core.manager.TaomeeSdkManager;
       
      
      private var _fun:Function;
      
      public function TaomeeSdkManager()
      {
         super();
         ExternalInterface.addCallback("payCallBackFun",this.payCallBackFun);
         ExternalInterface.addCallback("personalCallBackFun",this.personalCallBackFun);
         ExternalInterface.addCallback("callBcF",this.payCallBackFun);
      }
      
      public static function get instance() : com.robot.core.manager.TaomeeSdkManager
      {
         if(_instance == null)
         {
            _instance = new com.robot.core.manager.TaomeeSdkManager();
         }
         return _instance;
      }
      
      private function payCallBackFun(param1:* = null) : void
      {
         switch(param1.type)
         {
            case "success":
               if(this._fun != null)
               {
                  this._fun();
               }
         }
         this._fun = null;
      }
      
      private function personalCallBackFun(param1:* = null) : void
      {
      }
      
      public function buyDiamond(param1:int, param2:String, param3:String, param4:String, param5:Object, param6:Function = null) : void
      {
         var _loc7_:Object = {
            "appid":appId,
            "gameOrderId":param2,
            "productId":"" + param5.productID,
            "productName":param5.name,
            "uid":MainManager.actorID,
            "price":param5.money,
            "sign":param3,
            "additionalDetail":param4,
            "roleId":0,
            "serverId":MainManager.serverID
         };
         if(ExternalInterface.available)
         {
            this._fun = param6;
            ExternalInterface.call("SDKManager._instance.pay",_loc7_,"payCallBackFun");
         }
      }
      
      public function customer() : void
      {
         if(ExternalInterface.available)
         {
            ExternalInterface.call("SDKManager._instance.customer");
         }
      }
      
      public function personal() : void
      {
         if(ExternalInterface.available)
         {
            ExternalInterface.call("SDKManager._instance.personal");
         }
      }
   }
}
