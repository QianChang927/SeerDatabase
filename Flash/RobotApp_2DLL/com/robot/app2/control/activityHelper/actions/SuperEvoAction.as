package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Promise;
   import com.robot.core.manager.PetManager;
   
   public class SuperEvoAction extends BaseAction
   {
       
      
      public function SuperEvoAction(param1:*)
      {
         super(param1);
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         return PetManager.superEvolveWithPromise(_data["value"]);
      }
   }
}
