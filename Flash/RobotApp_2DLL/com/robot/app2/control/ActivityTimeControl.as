package com.robot.app2.control
{
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.zip.PreloadZipXMLController;
   import org.taomee.ds.HashMap;
   
   public class ActivityTimeControl
   {
      
      private static var _configXml:XML;
      
      private static var _itemHash:HashMap = new HashMap();
       
      
      public function ActivityTimeControl()
      {
         super();
      }
      
      public static function setUp() : void
      {
         PreloadZipXMLController.getXML("activityTimeControl.xml",function(param1:*):void
         {
            var _loc3_:XML = null;
            _configXml = new XML(param1);
            var _loc2_:XMLList = _configXml.elements("item");
            for each(_loc3_ in _loc2_)
            {
               _itemHash.add(uint(_loc3_.@id),_loc3_);
            }
         });
      }
      
      public static function getStartTime(param1:int) : String
      {
         var _loc2_:XML = _itemHash.getValue(param1);
         if(_loc2_ != null)
         {
            return String(_loc2_.@startTime);
         }
         return "";
      }
      
      public static function getEndTime(param1:int) : String
      {
         var _loc2_:XML = _itemHash.getValue(param1);
         if(_loc2_ != null)
         {
            return String(_loc2_.@endTime);
         }
         return "";
      }
      
      public static function getNumberDay(param1:int) : int
      {
         if(getStartTime(param1) == "*")
         {
            return 0;
         }
         var _loc2_:String = getStartTime(param1);
         var _loc3_:Date = SystemTimerManager.get0DateByStr(_loc2_);
         var _loc4_:Number;
         var _loc5_:Number = ((_loc4_ = Number(SystemTimerManager.sysBJDate.time)) - _loc3_.time) * 0.001;
         return int(_loc5_ / (24 * 60 * 60) + 1);
      }
      
      public static function getSurplusTime(param1:int) : Number
      {
         if(getEndTime(param1) == "*")
         {
            return 99999;
         }
         var _loc2_:String = getEndTime(param1);
         var _loc3_:Date = SystemTimerManager.get24DateByStr(_loc2_);
         var _loc4_:Number = Number(SystemTimerManager.sysBJDate.time);
         return (_loc3_.time - _loc4_) * 0.001;
      }
      
      public static function getLeftDay(param1:int) : int
      {
         return int(getSurplusTime(param1) / (24 * 60 * 60) + 1);
      }
      
      public static function getIsinTime(param1:int) : Boolean
      {
         if(getStartTime(param1) == "*" && getEndTime(param1) != "*")
         {
            if(getLeftDay(param1) > 0)
            {
               return true;
            }
            return false;
         }
         if(getStartTime(param1) != "*" && getEndTime(param1) == "*")
         {
            if(getNumberDay(param1) > 0)
            {
               return true;
            }
            return false;
         }
         if(getStartTime(param1) != "*" && getEndTime(param1) != "*")
         {
            if(getNumberDay(param1) > 0 && getLeftDay(param1) > 0)
            {
               return true;
            }
            return false;
         }
         return true;
      }
      
      public static function getStartData(param1:int) : Date
      {
         if(getStartTime(param1) == "*")
         {
            return SystemTimerManager.sysBJDate;
         }
         var _loc2_:String = getStartTime(param1);
         return SystemTimerManager.get0DateByStr(_loc2_);
      }
      
      public static function getEndData(param1:int) : Date
      {
         if(getEndTime(param1) == "*")
         {
            return new Date(2100,6,6,6,6,6);
         }
         var _loc2_:String = getEndTime(param1);
         return SystemTimerManager.get24DateByStr(_loc2_);
      }
   }
}
