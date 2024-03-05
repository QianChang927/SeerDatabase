package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ModuleManager;
   
   public class DoubleFestivalController
   {
      
      private static const GIFTS:Array = [{
         "can":19353,
         "have":19357,
         "exch":6943
      },{
         "can":19354,
         "have":19358,
         "exch":6944
      },{
         "can":19355,
         "have":19359,
         "exch":6945
      },{
         "can":19356,
         "have":19360,
         "exch":6946
      }];
       
      
      public function DoubleFestivalController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var bs:Array = null;
         bs = [];
         GIFTS.map(function(param1:Object, param2:int, param3:Array):void
         {
            bs.push(param1.can);
            bs.push(param1.have);
         });
         KTool.getBitSet(bs,function(param1:Array):void
         {
            var _loc3_:Boolean = false;
            var _loc2_:int = 0;
            while(_loc2_ < GIFTS.length)
            {
               _loc3_ = param1[2 * _loc2_] == 1 && param1[2 * _loc2_ + 1] == 0;
               if(_loc3_)
               {
                  ModuleManager.showAppModule("DoubleFestivalPanel");
                  break;
               }
               _loc2_++;
            }
         });
      }
   }
}
