package com.robot.app2.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.controller.NewSeerTaskController;
   
   public class SeerReturnNewController
   {
      
      private static var onReturn:Boolean = false;
       
      
      public function SeerReturnNewController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         KTool.getMultiValue([101549,2791],function(param1:Array):void
         {
            if(KTool.getBit(param1[1],15) == 1 && param1[0] == 20221130)
            {
               onReturn = true;
            }
            else
            {
               onReturn = false;
            }
         });
      }
      
      public static function update() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         KTool.getMultiValue([101549,2791]).then(function(param1:Array):void
         {
            if(KTool.getBit(param1[1],15) == 1 && param1[0] == 20221130)
            {
               onReturn = true;
            }
            else
            {
               onReturn = false;
            }
            deferred.resolve(onReturn);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function get IsReturn() : Boolean
      {
         return onReturn;
      }
   }
}
