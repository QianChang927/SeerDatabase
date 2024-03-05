package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   
   public class TitanVenControl
   {
      
      private static var checkRecord:Array = [];
       
      
      public function TitanVenControl()
      {
         super();
      }
      
      public static function checkRandomReward(param1:int) : void
      {
         var index:int = param1;
         if(checkRecord.indexOf(index) != -1)
         {
            return;
         }
         checkRecord.push(index);
         KTool.getMultiValue([14327 + index]).then(function(param1:Array):void
         {
            var _loc2_:int = int(param1[0]);
            if(_loc2_ != 0)
            {
            }
         });
      }
   }
}
