package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class ZhanlianSkinTaskXmlInfo
   {
      
      private static var XmlClass:Class = ZhanlianSkinTaskXmlInfo_XmlClass;
      
      private static var xml:XML;
      
      private static var talks:HashMap;
      
      private static var questions:HashMap;
      
      private static var tasks:HashMap;
      
      {
         setup();
      }
      
      public function ZhanlianSkinTaskXmlInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         xml = new XML(new XmlClass());
         parseXml();
      }
      
      private static function parseXml() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XMLList = null;
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         talks = new HashMap();
         questions = new HashMap();
         tasks = new HashMap();
         var _loc1_:XMLList = xml.dialogs[0].dialog;
         for each(_loc2_ in _loc1_)
         {
            talks.add(int(_loc2_.@id),_loc2_);
         }
         _loc3_ = xml.ques[0].q;
         for each(_loc4_ in _loc3_)
         {
            questions.add(int(_loc4_.@id),_loc4_);
         }
         _loc5_ = xml.tasks[0].task;
         for each(_loc6_ in _loc5_)
         {
            tasks.add(int(_loc6_.@id),_loc6_);
         }
      }
      
      public static function getDialogById(param1:int) : XML
      {
         return talks.getValue(param1);
      }
      
      public static function getTaskTimeOverDialog() : String
      {
         return String(xml.tasks[0].@timefail);
      }
      
      public static function getQuesById(param1:int) : XML
      {
         return questions.getValue(param1);
      }
      
      public static function getTaskById(param1:int) : XML
      {
         return tasks.getValue(param1);
      }
      
      public static function getInitDialig() : XML
      {
         return getDialogById(int(xml.init[0].@id));
      }
      
      public static function getDaylimit() : XML
      {
         return getDialogById(int(xml.daylimit[0].@id));
      }
      
      public static function getVersions() : Array
      {
         return String(xml.times[0].@value).split("|");
      }
   }
}
