package com.robot.core.config.xml
{
   import com.robot.core.config.xmlInfo.PetSkinInfo;
   import com.robot.core.config.xmlInfo.PetSkinType;
   import com.robot.core.manager.SystemTimerManager;
   import org.taomee.ds.HashMap;
   
   public class PetSkinXMLInfo
   {
      
      private static var xmlClass:Class = PetSkinXMLInfo_xmlClass;
      
      private static var xmlClass1:Class;
      
      private static var _dataMap:HashMap = new HashMap();
      
      private static var _dataMapByPetId:HashMap = new HashMap();
      
      {
         setUp();
      }
      
      public function PetSkinXMLInfo()
      {
         super();
      }
      
      private static function setUp() : void
      {
         var _loc1_:XMLList = null;
         var _loc4_:XML = null;
         var _loc5_:PetSkinInfo = null;
         var _loc6_:Array = null;
         _dataMap = new HashMap();
         var _loc2_:Date = new Date(2023,7,5);
         var _loc3_:Date = SystemTimerManager.sysBJDate;
         if(_loc3_.time >= _loc2_.time)
         {
            _loc1_ = XML(new xmlClass()).elements("Skin");
         }
         else
         {
            _loc1_ = XML(new xmlClass1()).elements("Skin");
         }
         for each(_loc4_ in _loc1_)
         {
            _loc5_ = new PetSkinInfo(_loc4_);
            _dataMap.add(_loc5_.id,_loc5_);
            if((_loc6_ = _dataMapByPetId.getValue(_loc5_.monId)) == null)
            {
               _loc6_ = [];
               _dataMapByPetId.add(_loc5_.monId,_loc6_);
            }
            _loc6_.push(_loc5_);
         }
      }
      
      public static function getAllSkin() : Array
      {
         return _dataMap.getValues();
      }
      
      public static function getSkinInfosByPetId(param1:int) : Array
      {
         var _loc4_:int = 0;
         var _loc2_:Array = _dataMapByPetId.getValue(param1);
         var _loc3_:Array = [];
         if(_loc2_ != null)
         {
            _loc4_ = 0;
            while(_loc4_ < _loc2_.length)
            {
               _loc3_.push(_loc2_[_loc4_]);
               _loc4_++;
            }
         }
         return _loc3_;
      }
      
      public static function isPetHaveSkin(param1:int) : Boolean
      {
         return _dataMapByPetId.containsKey(param1);
      }
      
      public static function getSkinInfo(param1:int) : PetSkinInfo
      {
         return _dataMap.getValue(param1);
      }
      
      public static function getSkinPetId(param1:int, param2:int) : int
      {
         var _loc4_:PetSkinInfo = null;
         var _loc3_:int = param2;
         if(param1 != 0)
         {
            if((_loc4_ = PetSkinXMLInfo.getSkinInfo(param1)) != null && _loc4_.monId == param2)
            {
               _loc3_ = _loc4_.skinPetId;
            }
         }
         return _loc3_;
      }
      
      public static function getSubSkinName(param1:int, param2:int) : String
      {
         var _loc3_:PetSkinInfo = getSkinInfo(param1);
         var _loc4_:String = _loc3_.name;
         var _loc5_:PetSkinType;
         if((_loc5_ = _loc3_.getSkinType(param2)) != null)
         {
            _loc4_ += "(" + _loc5_.toString + ")";
         }
         return _loc4_;
      }
   }
}
