package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetCheckAlarmAction extends BaseAction
   {
       
      
      public function PetCheckAlarmAction(param1:*)
      {
         super(param1);
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var defer:Deferred = null;
         var str:String = null;
         var hasPet:Boolean = false;
         var args:* = param1;
         defer = new Deferred();
         str = String(_data["value"]);
         hasPet = true;
         PetManager.upDate(function():void
         {
            var i:int = 0;
            if(args == null)
            {
               args = _data["pets"];
            }
            if(args && args is Array)
            {
               i = 1;
               while(i <= (args as Array).length)
               {
                  if(PetManager.getBagPetsById(args[i - 1]).length <= 0)
                  {
                     hasPet = false;
                     break;
                  }
                  i++;
               }
            }
            else if(args && args is int)
            {
               if(PetManager.getBagPetsById(args).length <= 0)
               {
                  hasPet = false;
               }
            }
            else
            {
               hasPet = false;
            }
            if(!hasPet)
            {
               Alarm.show(str,function():void
               {
                  defer.reject(null);
                  PetBagControllerNew.showByBuffer();
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
