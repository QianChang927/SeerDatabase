package com.robot.core.config.xml
{
   public class HonorsHallSyssXMLInfo
   {
      
      private static var xmlClass:Class = HonorsHallSyssXMLInfo_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
       
      
      public function HonorsHallSyssXMLInfo()
      {
         super();
      }
      
      public static function getName(param1:uint) : String
      {
         return getXml(param1).@Name;
      }
      
      public static function getHardLv(param1:uint) : String
      {
         return getXml(param1).@Hard;
      }
      
      public static function getRecAch(param1:uint) : String
      {
         return getXml(param1).@Ach;
      }
      
      public static function getSysCon(param1:uint) : String
      {
         return getXml(param1).@Con;
      }
      
      public static function getSysInfo(param1:uint) : Array
      {
         var _loc2_:XML = getXml(param1);
         return [_loc2_.@Kind,_loc2_.@Frame,_loc2_.@Map,_loc2_.@Hard,_loc2_.@Ach,_loc2_.@Con,param1,[_loc2_.@ArrowX,_loc2_.@ArrowY,_loc2_.@Rotation]];
      }
      
      public static function getLevelStars(param1:uint, param2:uint) : int
      {
         var _loc5_:XML = null;
         var _loc3_:XML = getXml(param1);
         var _loc4_:XMLList = _loc3_.descendants("Rule");
         for each(_loc5_ in _loc4_)
         {
            if(_loc5_.@Lv == param2.toString())
            {
               return int(_loc5_.@Rec);
            }
         }
         return 0;
      }
      
      private static function getXml(param1:uint) : XML
      {
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc2_:XMLList = xml.descendants("System");
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.@ID == param1.toString())
            {
               _loc3_ = _loc4_;
               break;
            }
         }
         return _loc3_;
      }
   }
}
