package com.robot.core.config.xml
{
   import com.robot.core.manager.SystemTimerManager;
   import org.taomee.ds.HashMap;
   
   public class NewGiftPackXmlInfo
   {
      
      private static var xmlClass:Class = NewGiftPackXmlInfo_xmlClass;
      
      private static var xmlClass1:Class = NewGiftPackXmlInfo_xmlClass1;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _gifts:HashMap;
      
      {
         setup();
      }
      
      public function NewGiftPackXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         _xml = XML(new xmlClass());
         if(SystemTimerManager.splitVersion2022(true) == 1)
         {
            _xml = XML(new xmlClass1());
         }
         _gifts = new HashMap();
         var _loc1_:XMLList = _xml.gift;
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = {};
            _loc3_.id = int(_loc2_.@id);
            _loc3_.type = int(_loc2_.@type);
            _loc3_.title = String(_loc2_.@title);
            _loc3_.picture = String(_loc2_.@picture);
            _loc3_.sort = int(_loc2_.@sort);
            _loc3_.start = String(_loc2_.@start);
            _loc3_.end = String(_loc2_.@end);
            _loc3_.mouseClickFunc = String(_loc2_.@mouseClickFunc);
            _loc3_.tag = int(_loc2_.@Tag);
            _gifts.add(_loc3_.id,_loc3_);
         }
      }
      
      public static function getAllGifts() : Array
      {
         var _loc4_:Date = null;
         var _loc5_:Date = null;
         var _loc1_:Array = _gifts.getValues();
         _loc1_.sortOn("sort",Array.NUMERIC);
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc4_ = SystemTimerManager.get0DateByStr(_loc1_[_loc3_].start);
            _loc5_ = SystemTimerManager.get0DateByStr(_loc1_[_loc3_].end);
            if(_loc1_[_loc3_].start == "" || _loc1_[_loc3_].end == "" || SystemTimerManager.sysBJDate.time >= _loc4_.time && SystemTimerManager.sysBJDate.time < _loc5_.time)
            {
               _loc2_.push(_loc1_[_loc3_]);
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function getAllGiftId() : Array
      {
         var _loc4_:Date = null;
         var _loc5_:Date = null;
         var _loc1_:Array = _gifts.getValues();
         _loc1_.sortOn("sort",Array.NUMERIC);
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc4_ = SystemTimerManager.get0DateByStr(_loc1_[_loc3_].start);
            _loc5_ = SystemTimerManager.get0DateByStr(_loc1_[_loc3_].end);
            if(_loc1_[_loc3_].start == "" || _loc1_[_loc3_].end == "" || SystemTimerManager.sysBJDate.time >= _loc4_.time && SystemTimerManager.sysBJDate.time < _loc5_.time)
            {
               _loc2_.push(_loc1_[_loc3_].id);
            }
            _loc3_++;
         }
         return _loc2_;
      }
   }
}
