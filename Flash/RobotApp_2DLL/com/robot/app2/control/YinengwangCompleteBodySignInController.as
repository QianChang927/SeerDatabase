package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.ValueUpdateWithPromiseComponent;
   import com.robot.core.manager.SystemTimerManager;
   
   public class YinengwangCompleteBodySignInController
   {
      
      private static var START_DAY:Array = [2017,3,31];
      
      private static var _valueUpCom:ValueUpdateWithPromiseComponent;
       
      
      public function YinengwangCompleteBodySignInController()
      {
         super();
      }
      
      public static function get valueUpCom() : ValueUpdateWithPromiseComponent
      {
         if(_valueUpCom == null)
         {
            _valueUpCom = new ValueUpdateWithPromiseComponent();
            _valueUpCom.forverOrDailyValueIds = [18220,18221,18222,101183,101184];
         }
         return _valueUpCom;
      }
      
      public static function get signStatusArr() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = int(_valueUpCom.getForverOrDailyValue(101183));
         var _loc3_:int = 0;
         while(_loc3_ < 14)
         {
            _loc1_.push(KTool.getBit(_loc2_,5 + _loc3_));
            _loc3_++;
         }
         return _loc1_;
      }
      
      public static function get isSignToday() : Boolean
      {
         return signStatusArr[dayIndex] != 0;
      }
      
      public static function get dayIndex() : int
      {
         var _loc1_:uint = uint(SystemTimerManager.getTimeByDate(START_DAY[0],START_DAY[1],START_DAY[2],0));
         if(SystemTimerManager.sysBJDate.time < _loc1_)
         {
            return -1;
         }
         return Math.floor((SystemTimerManager.time - _loc1_) / (60 * 60 * 24));
      }
      
      public static function get signDays() : int
      {
         var _loc1_:int = 0;
         var _loc2_:Array = signStatusArr;
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            if(_loc2_[_loc3_] > 0)
            {
               _loc1_++;
            }
            _loc3_++;
         }
         return _loc1_;
      }
      
      public static function get fightIndex() : int
      {
         var _loc1_:int = int(valueUpCom.getForverOrDailyValue(18220));
         return KTool.getByte(_loc1_,1);
      }
   }
}
