package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.config.xml.GoldProductXMLInfo;
   import com.robot.core.ui.alert.Alarm;
   
   public class PriceAlarmAction extends BaseAction
   {
       
      
      public function PriceAlarmAction(param1:*)
      {
         super(param1);
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var temp:int;
         var tempStr:String;
         var oldPrice:int = 0;
         var newPrice:int = 0;
         var defer:Deferred = null;
         var args:* = param1;
         if(_data["oldItemId"])
         {
            oldPrice = int(GoldProductXMLInfo.getPriceByItemID(int(_data["oldItemId"])));
         }
         if(_data["newItemId"])
         {
            newPrice = int(GoldProductXMLInfo.getPriceByItemID(int(_data["newItemId"])));
         }
         if(args is Array)
         {
            oldPrice = int(args[0]);
            newPrice = int(args[1]);
         }
         temp = oldPrice - newPrice;
         tempStr = String(_data["value"]).replace(/\$/,temp);
         defer = new Deferred();
         Alarm.show(tempStr,function():void
         {
            defer.resolve(null);
         });
         return defer.promise;
      }
   }
}
