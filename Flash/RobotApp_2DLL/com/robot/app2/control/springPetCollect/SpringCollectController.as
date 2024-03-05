package com.robot.app2.control.springPetCollect
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.newloader.SeerUrlLoader;
   
   public class SpringCollectController
   {
      
      private static var _array:Array;
      
      private static var _xml:XML;
      
      private static var XML_PATH:String = "xml/springPets.xml";
      
      private static var _pets:Array = [];
       
      
      public function SpringCollectController()
      {
         super();
      }
      
      public static function show(param1:uint) : void
      {
         var _loc2_:SpringPet = null;
         var _loc3_:int = 0;
         while(_loc3_ < _pets.length)
         {
            if((_pets[_loc3_] as SpringPet)._id == param1)
            {
               _loc2_ = _pets[_loc3_] as SpringPet;
               break;
            }
            _loc3_++;
         }
         if(_loc2_ != null)
         {
            ModuleManager.showAppModule("SpringCollectPetPanel",_loc2_);
         }
      }
      
      public static function initXml() : void
      {
         _array = [];
         var loader:SeerUrlLoader = new SeerUrlLoader("加载配置文件");
         var date:Date = SystemTimerManager.sysBJDate;
         var date1:Date = new Date(2015,1,27);
         if(date.time >= date1.time)
         {
            XML_PATH = "xml/springPets26.xml";
         }
         loader.doLoad(ClientConfig.getResPath(XML_PATH),function(param1:*):void
         {
            var _loc4_:XML = null;
            var _loc2_:XML = new XML(param1);
            var _loc3_:XMLList = _loc2_.elements("pets")[0].elements("pet");
            for each(_loc4_ in _loc3_)
            {
               _array.push(_loc4_);
            }
            initSpringPetInfo();
         });
      }
      
      private static function initSpringPetInfo() : void
      {
         var _loc2_:SpringPet = null;
         var _loc1_:int = 0;
         while(_loc1_ < _array.length)
         {
            _xml = _array[_loc1_];
            _loc2_ = new SpringPet(int(_xml.@frame),uint(_xml.@id),String(_xml.@level),uint(_xml.@star),String(_xml.@name),{
               "way":_xml.@way,
               "type":_xml.@type
            });
            _pets.push(_loc2_);
            _loc1_++;
         }
      }
      
      public static function getPets() : Array
      {
         return _pets;
      }
   }
}
