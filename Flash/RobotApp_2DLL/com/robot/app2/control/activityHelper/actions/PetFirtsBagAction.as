package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alert;
   
   public class PetFirtsBagAction extends BaseAction
   {
       
      
      public function PetFirtsBagAction(param1:*)
      {
         super(param1);
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var temp:int = 0;
         var defer:Deferred = null;
         var args:* = param1;
         if(_data["petid"] == null || isNaN(temp = parseInt(_data["petid"])))
         {
            return Deferred.reject("petid is void");
         }
         defer = new Deferred();
         PetManager.upDate(function():void
         {
            var tips:String = null;
            if(PetManager.isDefaultPet(temp))
            {
               return defer.resolve(null);
            }
            tips = String(_data["value"]);
            tips = "请将" + PetXMLInfo.getName(temp) + "放入出战背包首发！";
            if(tips != null)
            {
               Alert.show(tips,function():void
               {
                  ModuleManager.showAppModule("PetBag2017");
                  defer.reject("not first");
               },function():void
               {
                  defer.reject("cancel");
               });
            }
            else
            {
               defer.reject("not first");
            }
         });
         return defer.promise;
      }
   }
}
