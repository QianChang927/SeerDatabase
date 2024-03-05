package com.robot.core.config.xml
{
   import com.robot.core.info.SignIconInfo;
   import org.taomee.ds.HashMap;
   
   public class SignIconXmlInfo
   {
      
      private static var xmlClass:Class = SignIconXmlInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function SignIconXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:int = 0;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = int(uint(_loc2_.@id));
            _itemHash.add(uint(_loc2_.@id),_loc2_);
         }
      }
      
      public static function getAllSignIconInfos() : Array
      {
         var _loc4_:SignIconInfo = null;
         var _loc5_:XML = null;
         var _loc6_:String = null;
         var _loc1_:Array = [];
         var _loc2_:Array = _itemHash.getValues();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            _loc4_ = new SignIconInfo();
            _loc5_ = _loc2_[_loc3_] as XML;
            _loc4_.id = _loc5_.@id;
            _loc4_.className = _loc5_.@className;
            _loc4_.iconName = _loc5_.@dec;
            _loc4_.isShowNum = int(_loc5_.@isShowNum) > 0 ? true : false;
            _loc4_.tips = String(_loc5_.@tips);
            _loc4_.sptips = String(_loc5_.@sptips);
            _loc6_ = String(_loc5_.@Des);
            while(_loc6_.indexOf("\\n") != -1)
            {
               _loc6_ = _loc6_.replace("\\n","\n");
            }
            _loc4_.des = _loc6_;
            _loc4_.titleDes = String(_loc5_.@NumDes);
            _loc4_.spDes = String(_loc5_.@spDes);
            if(_loc4_.sptips != "")
            {
               _loc4_.sptipsHashMap = getSpHashMap(_loc4_.sptips);
            }
            if(_loc4_.spDes != "")
            {
               _loc4_.spDesHashMap = getSpHashMap(_loc4_.spDes);
            }
            _loc1_.push(_loc4_);
            _loc3_++;
         }
         return _loc1_;
      }
      
      public static function getInfoById(param1:int) : SignIconInfo
      {
         var _loc2_:XML = _itemHash.getValue(param1);
         var _loc3_:SignIconInfo = new SignIconInfo();
         _loc3_.id = _loc2_.@id;
         _loc3_.className = _loc2_.@className;
         _loc3_.isShowNum = int(_loc2_.@isShowNum) > 0 ? true : false;
         _loc3_.tips = String(_loc2_.@tips);
         _loc3_.des = String(_loc2_.@Des);
         return _loc3_;
      }
      
      public static function getSpHashMap(param1:String) : HashMap
      {
         var _loc5_:Array = null;
         var _loc2_:HashMap = new HashMap();
         var _loc3_:Array = param1.split(" ");
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_.length)
         {
            _loc5_ = _loc3_[_loc4_].split("_");
            _loc2_.add(int(_loc5_[0]),_loc5_[1]);
            _loc4_++;
         }
         return _loc2_;
      }
   }
}
