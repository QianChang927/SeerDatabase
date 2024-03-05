package com.robot.core.config.xml
{
   public class StatFilterXMLInfo
   {
      
      private static var XMLClass:Class = StatFilterXMLInfo_XMLClass;
      
      private static var DataXML:XML = XML(new XMLClass());
      
      private static var datas:Array;
      
      private static const NULL:String = "";
      
      {
         setup();
      }
      
      public function StatFilterXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:Array = null;
         datas = [];
         var _loc1_:XMLList = DataXML.descendants("Stat");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = [NULL,NULL,NULL];
            if(_loc2_.@title1)
            {
               _loc3_[0] = _loc2_.@title1.toString();
            }
            if(_loc2_.@title2)
            {
               _loc3_[1] = _loc2_.@title2.toString();
            }
            if(_loc2_.@title3)
            {
               _loc3_[2] = _loc2_.@title3.toString();
            }
            datas.push(_loc3_);
         }
      }
      
      public static function checkExcluded(param1:String, param2:String, param3:String) : Boolean
      {
         var _loc4_:Array = null;
         var _loc5_:Boolean = false;
         var _loc6_:Boolean = false;
         for each(_loc4_ in datas)
         {
            _loc5_ = true;
            _loc6_ = false;
            if(_loc4_[0] != NULL)
            {
               _loc6_ = true;
               _loc5_ &&= param3 == _loc4_[0];
            }
            if(_loc4_[1] != NULL)
            {
               _loc6_ = true;
               _loc5_ &&= param1 == _loc4_[1];
            }
            if(_loc4_[2] != NULL)
            {
               _loc6_ = true;
               _loc5_ &&= param2 == _loc4_[2];
            }
            if(_loc6_ && _loc5_)
            {
               return true;
            }
         }
         return false;
      }
   }
}
