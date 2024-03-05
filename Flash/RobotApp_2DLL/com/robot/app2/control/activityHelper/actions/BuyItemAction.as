package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   
   public class BuyItemAction extends BaseAction
   {
       
      
      public function BuyItemAction(param1:*)
      {
         super(param1);
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var deferred:Deferred = null;
         var args:* = param1;
         var buyNum:int = int(_data["num"]);
         if(args != null && args.num != null)
         {
            buyNum = int(args.num);
         }
         if(buyNum == 0)
         {
            deferred = new Deferred();
            if(Boolean(_data["productID"]) && Boolean(_data["itemID"]))
            {
               if(_data["exchangeID"] == null)
               {
                  _data["exchangeID"] = 0;
               }
               ModuleManager.showAppModule("MultiBuyPanel",{
                  "productID":_data["productID"],
                  "iconID":_data["itemID"],
                  "exchangeID":_data["exchangeID"],
                  "callFunction":function(param1:int):void
                  {
                     deferred.resolve(param1);
                  }
               });
            }
            else
            {
               deferred.reject("data have not productID | itemID | exchangeID entry");
            }
            return deferred.promise;
         }
         return KTool.buyProductWithPromise(_data["productID"],buyNum,false,true).then(function():Promise
         {
            if(_data.exchangeID != null)
            {
               return KTool.doExchange(_data["exchangeID"]);
            }
            if(_data.cmdId != null)
            {
               return SocketConnection.sendWithPromise(int(_data.cmdId),_data.args);
            }
            return Deferred.resolve(null);
         });
      }
   }
}
