package com.robot.app2.control
{
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.zip.PreloadZipXMLController;
   import org.taomee.ds.HashMap;
   
   public class HappyNewYearToYouController
   {
      
      private static var _daysHash:HashMap;
      
      private static var _dataHash:HashMap;
      
      private static var configXml:XML;
      
      private static const XML_PATH:String = "xml/happyNewYearToYouDateList.xml";
       
      
      public function HappyNewYearToYouController()
      {
         super();
      }
      
      public static function setup() : void
      {
         _daysHash = new HashMap();
         _dataHash = new HashMap();
         var loader:SeerUrlLoader = new SeerUrlLoader("加载配置文件");
         PreloadZipXMLController.getXML("happyNewYearToYouDateList.xml",function(param1:*):void
         {
            var _loc3_:XML = null;
            configXml = new XML(param1);
            var _loc2_:XMLList = configXml.elements("day");
            for each(_loc3_ in _loc2_)
            {
               _daysHash.add(uint(_loc3_.@date),_loc3_);
            }
         });
      }
      
      public static function getValueByDateAndHour(param1:uint, param2:uint) : int
      {
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc3_:XML = _daysHash.getValue(param1);
         if(_loc3_)
         {
            _loc4_ = _loc3_.elements("child");
            for each(_loc5_ in _loc4_)
            {
               _dataHash.add(uint(_loc5_.@hour),_loc5_);
            }
            if(_loc6_ = _dataHash.getValue(param2))
            {
               return int(_loc6_.@count);
            }
            return 0;
         }
         return 0;
      }
   }
}
