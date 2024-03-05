package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class NationaltemplecardEffectXMLInfo
   {
      
      private static var xmlClass:Class = NationaltemplecardEffectXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xl:XMLList;
      
      private static var _effectName:Array = [];
      
      private static var _effectDesc:Array = [];
      
      private static var _effectConsume:Array = [];
      
      {
         setup();
      }
      
      public function NationaltemplecardEffectXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         xl = XML(new xmlClass()).elements("NationaltemplecardEffect");
         for each(_loc1_ in xl)
         {
            _effectName.push(String(_loc1_.@effectName));
            _effectDesc.push(String(_loc1_.@effectDesc));
            _effectConsume.push(int(_loc1_.@effectConsume));
         }
      }
      
      public static function get EffectName() : Array
      {
         return _effectName;
      }
      
      public static function get EffectDesc() : Array
      {
         return _effectDesc;
      }
      
      public static function get EffectConsume() : Array
      {
         return _effectConsume;
      }
   }
}
