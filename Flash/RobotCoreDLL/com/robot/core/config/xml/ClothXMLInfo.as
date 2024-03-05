package com.robot.core.config.xml
{
   import com.robot.core.info.item.ClothData;
   import flash.utils.Dictionary;
   
   public class ClothXMLInfo
   {
      
      public static const DEFAULT_HEAD:uint = 100001;
      
      public static const DEFAULT_WAIST:uint = 100002;
      
      public static const DEFAULT_FOOT:uint = 100003;
      
      private static var _itemDict:Dictionary;
      
      private static var _dict:Dictionary = new Dictionary(true);
       
      
      public function ClothXMLInfo()
      {
         super();
      }
      
      public static function setup(param1:Dictionary) : void
      {
         _itemDict = param1;
      }
      
      public static function getItemInfo(param1:int) : ClothData
      {
         if(!_dict[param1])
         {
            _dict[param1] = new ClothData(_itemDict[param1]);
         }
         return _dict[param1];
      }
   }
}
