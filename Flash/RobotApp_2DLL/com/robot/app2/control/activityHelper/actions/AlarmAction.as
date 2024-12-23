package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.ui.alert.Alarm;
   
   public class AlarmAction extends BaseAction
   {
       
      
      public function AlarmAction(param1:*)
      {
         super(param1);
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var defer:Deferred = null;
         var i:int = 0;
         var args:* = param1;
         defer = new Deferred();
         var str:String = String(_data["value"]);
         if(args != null)
         {
            if(args is Array)
            {
               i = 1;
               while(i <= (args as Array).length)
               {
                  str = str.replace(/\$/,args[i - 1]);
                  i++;
               }
            }
            else
            {
               str = str.replace(/\$/,args);
            }
         }
         Alarm.show(str,function():void
         {
            defer.resolve(null);
         });
         return defer.promise;
      }
   }
}
