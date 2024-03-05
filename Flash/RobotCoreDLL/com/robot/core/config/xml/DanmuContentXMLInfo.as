package com.robot.core.config.xml
{
   public class DanmuContentXMLInfo
   {
      
      private static var xmlClass:Class = DanmuContentXMLInfo_xmlClass;
      
      private static var _data:Array;
       
      
      public function DanmuContentXMLInfo()
      {
         super();
      }
      
      private static function loadXMLData(param1:Array, param2:String = "dm", param3:String = "content") : void
      {
         var _loc5_:XML = null;
         var _loc4_:XMLList = XML(new xmlClass()).elements(param2);
         for each(_loc5_ in _loc4_)
         {
            param1.push(_loc5_.attribute(param3));
         }
      }
      
      public static function get data() : Array
      {
         if(_data == null)
         {
            _data = new Array();
            loadXMLData(_data);
         }
         return _data;
      }
   }
}
