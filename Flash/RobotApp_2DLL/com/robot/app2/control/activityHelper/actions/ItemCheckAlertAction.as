package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.ui.alert.Alert;
   
   public class ItemCheckAlertAction extends BaseAction
   {
       
      
      public function ItemCheckAlertAction(param1:*)
      {
         super(param1);
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var defer:Deferred = null;
         var str:String = null;
         var needNum:Array = null;
         var args:* = param1;
         defer = new Deferred();
         str = String(_data["value"]);
         var checkItems:Array = [];
         needNum = [];
         if(_data["item"] is int)
         {
            checkItems.push(_data["item"]);
         }
         if(_data["num"] is int)
         {
            needNum.push(_data["num"]);
         }
         ItemManager.updateAndGetItemsNum(checkItems,function(param1:Array):void
         {
            var arr:Array = param1;
            if(arr[0] < needNum[0])
            {
               Alert.show(str,function():void
               {
                  defer.reject(null);
               });
            }
            else
            {
               defer.resolve(null);
            }
         });
         return defer.promise;
      }
   }
}
