package com.robot.core.config.xml
{
   import com.robot.core.zip.PreloadZipXMLController;
   import org.taomee.ds.HashMap;
   
   public class SecretTreasureCarTeamXMLInfo
   {
      
      public static var configXml:XML;
      
      private static var _fun:Function;
      
      private static var _carsHash:HashMap = new HashMap();
       
      
      public function SecretTreasureCarTeamXMLInfo()
      {
         super();
      }
      
      public static function setup(param1:Function) : void
      {
         var callBack:Function = param1;
         _fun = callBack;
         PreloadZipXMLController.getXML("secretTreasureCarTeam_config.xml",function(param1:*):void
         {
            var _loc3_:XML = null;
            configXml = new XML(param1);
            var _loc2_:XMLList = configXml.elements("car");
            for each(_loc3_ in _loc2_)
            {
               _carsHash.add(uint(_loc3_.@id),_loc3_);
            }
            if(null != _fun)
            {
               _fun();
            }
         });
      }
      
      public static function getCarInfoById(param1:int) : Object
      {
         var _loc2_:XML = _carsHash.getValue(param1);
         var _loc3_:Array = [];
         var _loc4_:Object;
         (_loc4_ = new Object()).name = _loc2_.@name;
         _loc4_.lv = _loc2_.@lv;
         _loc4_.capacity = _loc2_.@capacity;
         _loc4_.armor = _loc2_.@armor;
         _loc4_.arms = _loc2_.@arms;
         _loc4_.useProdId = _loc2_.@useProdId;
         _loc4_.oilProdId = _loc2_.@oilProdId;
         _loc4_.des = _loc2_.@des;
         return _loc4_;
      }
      
      public static function getUseProdIdById(param1:int) : int
      {
         var _loc2_:XML = _carsHash.getValue(param1);
         return _loc2_.@useProdId;
      }
      
      public static function getOilProdIdById(param1:int) : int
      {
         var _loc2_:XML = _carsHash.getValue(param1);
         return _loc2_.@oilProdId;
      }
   }
}
