package com.robot.app2.control
{
   import com.robot.app2.systems.TimeVersionManager;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.zip.PreloadZipXMLController;
   
   public class LastestActsController
   {
      
      private static var _xml:XML;
      
      private static const XML_PATH:String = "xml/lastestActs";
       
      
      public function LastestActsController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var loader:SeerUrlLoader = new SeerUrlLoader("加载配置文件");
         TimeVersionManager.getVersionNum(function(param1:String):void
         {
            var v:String = param1;
            PreloadZipXMLController.getXML("lastestActs.xml",function(param1:*):void
            {
               _xml = new XML(param1);
            });
         });
      }
      
      public static function getPartys() : XML
      {
         return _xml.partys[0];
      }
   }
}
