package com.robot.app2.control
{
   import org.taomee.ds.HashMap;
   
   public class PATUAssessmentRecordData
   {
      
      private static var _instance:com.robot.app2.control.PATUAssessmentRecordData;
      
      public static var _infosHashMap:HashMap;
      
      public static var _infosArray:Array;
      
      public static var _infoKeysArray:Array;
      
      public static var _randomIndex:int;
      
      public static var _rightInfo:com.robot.app2.control.PATUAssessmentRecordInfo;
      
      public static var _originData:int = 0;
      
      public static var _logArray:Array = [];
      
      public static var _leftGameNum:int = 8;
      
      public static var _curClassIndex:int;
      
      public static var _curTzIndex:int;
       
      
      public function PATUAssessmentRecordData()
      {
         super();
      }
      
      public static function initData(param1:Function) : void
      {
         var _loc4_:com.robot.app2.control.PATUAssessmentRecordInfo = null;
         var _loc5_:Array = null;
         var _loc6_:int = 0;
         var _loc7_:com.robot.app2.control.PATUAssessmentRecordInfo = null;
         _infosHashMap = new HashMap();
         while(_infosHashMap.length < 24)
         {
            (_loc4_ = new com.robot.app2.control.PATUAssessmentRecordInfo()).colour = int(Math.random() * 2 + 1);
            _loc4_.glasses = int(Math.random() * 4 + 1);
            _loc4_.helmet = int(Math.random() * 3 + 1);
            _loc4_.tail = int(Math.random() * 2 + 1);
            _loc4_.key = _loc4_.colour + _loc4_.glasses * 10 + _loc4_.helmet * 100 + _loc4_.tail * 1000;
            if((_loc5_ = _infosHashMap.getKeys()).indexOf(_loc4_.key) == -1)
            {
               _infosHashMap.add(_loc4_.key,_loc4_);
            }
         }
         var _loc2_:Array = [];
         var _loc3_:Array = _infosHashMap.getKeys();
         _infoKeysArray = [];
         while(_loc2_.length < 24)
         {
            _loc6_ = int(Math.random() * _loc3_.length);
            _loc7_ = _infosHashMap.getValue(_loc3_[_loc6_]) as com.robot.app2.control.PATUAssessmentRecordInfo;
            _loc2_.push(_loc7_);
            _infoKeysArray.push(_loc7_.key);
            _loc3_.splice(_loc6_,1);
         }
         _randomIndex = int(Math.random() * 24);
         _rightInfo = _loc2_[_randomIndex];
         _infosArray = _loc2_;
         _leftGameNum = 8;
         _originData = 0;
         _logArray = [];
         if(param1 != null)
         {
            param1(_loc2_);
         }
      }
      
      public static function destroy() : void
      {
         _infosHashMap = null;
         _infosArray = null;
         _infoKeysArray = null;
         _logArray = null;
      }
   }
}
