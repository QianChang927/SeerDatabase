package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.controller.NewSeerTaskController;
   
   public class SeerReturn201805Controller
   {
      
      private static var onReturn:Boolean = false;
       
      
      public function SeerReturn201805Controller()
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
            if(KTool.getBit(param1[1],15) == 1 && param1[0] == 20180525)
            {
               onReturn = true;
            }
            else
            {
               onReturn = false;
            }
         });
      }
      
      public static function get IsReturn() : Boolean
      {
         return onReturn;
      }
   }
}
