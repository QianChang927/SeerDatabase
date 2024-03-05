package com.robot.app.control
{
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.utils.Dictionary;
   
   public class ResistanceSysController
   {
      
      private static var _instance:com.robot.app.control.ResistanceSysController;
      
      private static var _hurt:Dictionary;
      
      private static var _resistance:Dictionary;
       
      
      private var configXml:XML;
      
      public function ResistanceSysController()
      {
         var loader:SeerUrlLoader;
         var url:String;
         super();
         loader = new SeerUrlLoader("加载配置文件");
         url = "xml/resistance.xml";
         PreloadZipXMLController.getXML("resistance.xml",function(param1:*):void
         {
            configXml = new XML(param1);
            parsexml();
         });
      }
      
      public static function get instance() : com.robot.app.control.ResistanceSysController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.ResistanceSysController();
         }
         return _instance;
      }
      
      public static function getResistanceByLevel(param1:int, param2:int) : Object
      {
         if(param1 == 0 && Boolean(_hurt))
         {
            return _hurt[param2];
         }
         if(param1 == 1 && Boolean(_resistance))
         {
            return _resistance[param2];
         }
         return new Object();
      }
      
      public static function getResistanceBypecent(param1:int, param2:int) : Object
      {
         var _loc3_:Object = null;
         var _loc4_:Object = null;
         if(param1 == 0 && Boolean(_hurt))
         {
            for each(_loc3_ in _hurt)
            {
               if(_loc3_.present == param2)
               {
                  return _loc3_;
               }
            }
         }
         else if(param1 == 1 && Boolean(_resistance))
         {
            for each(_loc4_ in _resistance)
            {
               if(_loc4_.present == param2)
               {
                  return _loc4_;
               }
            }
         }
         return new Object();
      }
      
      private function parsexml() : void
      {
         var _loc2_:Object = null;
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc1_:XMLList = this.configXml.hurt;
         _hurt = new Dictionary();
         _resistance = new Dictionary();
         for each(_loc3_ in _loc1_)
         {
            _loc2_ = new Object();
            _loc2_.lev = int(_loc3_.@level);
            _loc2_.present = int(_loc3_.@present);
            _loc2_.need = int(_loc3_.@need);
            _hurt[_loc2_.lev] = _loc2_;
         }
         _loc1_ = this.configXml.resistance;
         for each(_loc4_ in _loc1_)
         {
            _loc2_ = new Object();
            _loc2_.lev = int(_loc4_.@level);
            _loc2_.present = int(_loc4_.@present);
            _loc2_.need = int(_loc4_.@need);
            _resistance[_loc2_.lev] = _loc2_;
         }
      }
   }
}
