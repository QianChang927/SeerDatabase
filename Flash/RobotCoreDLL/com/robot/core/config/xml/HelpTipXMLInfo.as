package com.robot.core.config.xml
{
   public class HelpTipXMLInfo
   {
      
      private static var helpTipXMLClass:Class = HelpTipXMLInfo_helpTipXMLClass;
      
      private static var helpTipXML:XML = XML(new helpTipXMLClass());
      
      {
         setup();
      }
      
      public function HelpTipXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
      }
      
      public static function getHelpTipXML(param1:uint) : XML
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = helpTipXML.descendants("item");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@id == param1.toString())
            {
               return _loc3_;
            }
         }
         return null;
      }
      
      public static function getHelpTipDesc(param1:uint) : String
      {
         var _loc3_:XML = null;
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc2_:XMLList = helpTipXML.descendants("item");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@id == param1.toString())
            {
               if((_loc4_ = String(_loc3_.@tips)) == "")
               {
                  _loc4_ = String(_loc3_.@html);
               }
               return (_loc5_ = _loc4_.split("\\n")).join("\n");
            }
         }
         return "";
      }
   }
}
