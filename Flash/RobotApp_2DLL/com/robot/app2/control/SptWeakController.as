package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.SystemTimerManager;
   
   public class SptWeakController
   {
      
      private static const beginDate:Date = new Date(2015,7,14);
      
      private static const stepArr:Array = [4,4,3,3];
      
      private static var _curIndex:int;
       
      
      public function SptWeakController()
      {
         super();
      }
      
      public static function get isSptWeak() : Boolean
      {
         _curIndex = SystemTimerManager.sysBJDate.date - beginDate.date;
         if(_curIndex < 0 || _curIndex > 6 || SystemTimerManager.sysBJDate.month != 7)
         {
            return false;
         }
         if(_curIndex % 2 == 0)
         {
            return true;
         }
         return false;
      }
      
      public static function get isExpeditionWeak() : Boolean
      {
         _curIndex = SystemTimerManager.sysBJDate.date - beginDate.date;
         if(_curIndex < 0 || _curIndex > 6 || SystemTimerManager.sysBJDate.month != 7)
         {
            return false;
         }
         if(_curIndex % 2 == 1)
         {
            return true;
         }
         return false;
      }
      
      public static function getDailyStep(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([13622],function(param1:Array):void
         {
            if(null != fun)
            {
               fun(param1[0]);
            }
         });
      }
      
      public static function get curDayIndex() : uint
      {
         return _curIndex / 2;
      }
   }
}
