package com.robot.core.config.xml
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.SystemTimerManager;
   import org.taomee.ds.HashMap;
   
   public class LoginPopUpXMLInfo
   {
      
      private static var xmlClass:Class = LoginPopUpXMLInfo_xmlClass;
      
      private static var xmlTable:XML = XML(new xmlClass());
      
      private static var xmllist:XMLList;
      
      private static var _map:HashMap;
      
      {
         setup();
      }
      
      public function LoginPopUpXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         var _loc2_:Object = null;
         _map = new HashMap();
         xmllist = xmlTable.descendants("item");
         for each(_loc1_ in xmllist)
         {
            _loc2_ = {};
            _loc2_.panel = String(_loc1_.@panel);
            _loc2_.type = String(_loc1_.@type);
            _loc2_.isReturn = int(_loc1_.@isReturn) == 0 ? false : true;
            _loc2_.flushDefer = int(_loc1_.@flushDefer) == 0 ? false : true;
            _loc2_.dayOnce = int(_loc1_.@dayOnce) == 0 ? false : true;
            _loc2_.weekOnce = int(_loc1_.@weekOnce) == 0 ? false : (int(_loc1_.@weekOnce) == 1 ? true : BitBuffSetClass.getState(int(_loc1_.@weekOnce)));
            if(String(_loc1_.@end) == "*" || String(_loc1_.@end) == "" || String(_loc1_.end) == "undefined" || String(_loc1_.end) == null)
            {
               _loc2_.end = null;
            }
            else
            {
               _loc2_.end = SystemTimerManager.get0DateByStr(String(_loc1_.@end));
            }
            if(String(_loc1_.@start) == "*" || String(_loc1_.@start) == "" || String(_loc1_.start) == "undefined" || String(_loc1_.start) == null)
            {
               _loc2_.start = null;
            }
            else
            {
               _loc2_.start = SystemTimerManager.get0DateByStr(String(_loc1_.@start));
            }
            _map.add(String(_loc2_.panel),_loc2_);
         }
      }
      
      public static function getPops(param1:Boolean = false) : Array
      {
         var _loc5_:Object = null;
         var _loc6_:Boolean = false;
         var _loc2_:Array = [];
         var _loc3_:Array = _map.getValues();
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_.length)
         {
            _loc5_ = _loc3_[_loc4_];
            _loc6_ = false;
            if(param1 && _loc5_.isReturn == param1 || !param1)
            {
               if(_loc5_.end != null)
               {
                  if(SystemTimerManager.sysBJDate.time < _loc5_.end.time && (_loc5_.start == null || _loc5_.start != null && SystemTimerManager.sysBJDate.time >= _loc5_.start.time))
                  {
                     _loc6_ = true;
                  }
               }
               else if(_loc5_.start == null || _loc5_.start != null && SystemTimerManager.sysBJDate.time >= _loc5_.start.time)
               {
                  _loc6_ = true;
               }
            }
            if(_loc6_)
            {
               _loc2_.push(_loc5_);
            }
            _loc4_++;
         }
         return _loc2_;
      }
   }
}
