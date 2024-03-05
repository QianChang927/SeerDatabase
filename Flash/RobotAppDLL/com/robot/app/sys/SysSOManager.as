package com.robot.app.sys
{
   import com.robot.core.manager.SOManager;
   import flash.net.SharedObject;
   
   public class SysSOManager
   {
       
      
      public function SysSOManager()
      {
         super();
      }
      
      public static function freshLastSys(param1:uint) : void
      {
         var _loc4_:uint = 0;
         var _loc2_:SharedObject = SOManager.getUserSO(SOManager.LAST_SYS);
         var _loc3_:Array = _loc2_.data["arr"] as Array;
         if(_loc3_ != null)
         {
            _loc4_ = 0;
            while(_loc4_ < _loc3_.length)
            {
               if(uint(_loc3_[_loc4_]) == param1)
               {
                  _loc3_.splice(_loc4_,1);
                  break;
               }
               _loc4_++;
            }
         }
         else
         {
            _loc3_ = new Array();
         }
         _loc3_.push(param1);
         while(_loc3_.length > 4)
         {
            _loc3_.shift();
         }
         _loc2_.data["arr"] = _loc3_;
         SOManager.flush(_loc2_);
      }
   }
}
