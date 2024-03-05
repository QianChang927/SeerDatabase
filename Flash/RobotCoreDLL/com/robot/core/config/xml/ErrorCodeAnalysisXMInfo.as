package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class ErrorCodeAnalysisXMInfo
   {
      
      private static var xmlClass:Class = ErrorCodeAnalysisXMInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _infohashMap:HashMap;
      
      private static var _xmllist:XMLList;
       
      
      public function ErrorCodeAnalysisXMInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:XML = null;
         _xml = XML(new xmlClass());
         _infohashMap = new HashMap();
         _xmllist = _xml.elements("errorpost");
         for each(_loc1_ in _xmllist)
         {
            _infohashMap.add(uint(_loc1_.@id),_loc1_);
         }
      }
      
      public static function getInfoById(param1:int) : Object
      {
         if(_infohashMap == null)
         {
            return null;
         }
         var _loc2_:XML = _infohashMap.getValue(param1);
         if(_loc2_ == null)
         {
            return null;
         }
         var _loc3_:Object = new Object();
         _loc3_.id = int(_loc2_.@id);
         _loc3_.event = String(_loc2_.@event);
         _loc3_.txType = int(_loc2_.@txType);
         _loc3_.tx = String(_loc2_.@tx);
         return _loc3_;
      }
   }
}
