package com.robot.core.utils
{
   import com.robot.core.manager.SystemTimerManager;
   
   public class CronTimeVoPlus
   {
       
      
      private var vo:com.robot.core.utils.CronTimeVo;
      
      private var endVo:com.robot.core.utils.CronTimeVo;
      
      private var start:Number;
      
      private var end:Number;
      
      public function CronTimeVoPlus(param1:String, param2:String, param3:String, param4:String, param5:String, param6:String = "*")
      {
         var _loc7_:Array = null;
         var _loc8_:Array = null;
         var _loc9_:Date = null;
         var _loc10_:Date = null;
         super();
         if(param3.indexOf("-") > 0 && param4.indexOf("-") > 0)
         {
            _loc7_ = param4.split("-");
            _loc8_ = param3.split("-");
            this.vo = new com.robot.core.utils.CronTimeVo(param1,param2,"*","*",param5,param6);
            this.endVo = new com.robot.core.utils.CronTimeVo(param1,param2,_loc8_[1],_loc7_[1],param5,param6);
            _loc9_ = new Date(SystemTimerManager.sysBJDate.fullYear,int(_loc7_[0]) - 1,int(_loc8_[0]));
            _loc10_ = new Date(SystemTimerManager.sysBJDate.fullYear,int(_loc7_[1]) - 1,int(_loc8_[1]));
            this.start = _loc9_.time;
            this.end = _loc10_.time + 24 * 60 * 60 * 1000;
         }
         else
         {
            this.vo = new com.robot.core.utils.CronTimeVo(param1,param2,param3,param4,param5,param6);
         }
      }
      
      public function isTimeActive(param1:Date = null) : Boolean
      {
         if(param1 == null)
         {
            param1 = SystemTimerManager.sysBJDate;
         }
         return this.isActive(param1);
      }
      
      public function isActive(param1:Date) : Boolean
      {
         if(this.start > 0)
         {
            if(this.vo.isActive(param1))
            {
               if(param1.time > this.start && param1.time < this.end)
               {
                  return true;
               }
            }
            return false;
         }
         return this.vo.isActive(param1);
      }
      
      public function checkTimeHit(param1:Date) : int
      {
         if(this.start > 0)
         {
            if(Boolean(this.endVo) && this.endVo.checkTimeHit(param1) == com.robot.core.utils.CronTimeVo.PAST)
            {
               return com.robot.core.utils.CronTimeVo.PAST;
            }
            if(param1.time > this.start && param1.time < this.end)
            {
               if(this.vo.isActive(param1))
               {
                  return com.robot.core.utils.CronTimeVo.HIT;
               }
            }
            return com.robot.core.utils.CronTimeVo.INCOMING;
         }
         return this.vo.checkTimeHit(param1);
      }
      
      public function dispose() : void
      {
         this.vo = null;
         this.endVo = null;
      }
   }
}
