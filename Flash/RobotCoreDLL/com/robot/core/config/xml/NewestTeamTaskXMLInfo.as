package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class NewestTeamTaskXMLInfo
   {
      
      private static var xmlClass:Class = NewestTeamTaskXMLInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHashMap:HashMap;
      
      {
         setup();
      }
      
      public function NewestTeamTaskXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         _xml = XML(new xmlClass());
         var _loc1_:XMLList = _xml.elements("item");
         _itemHashMap = new HashMap();
         for each(_loc2_ in _loc1_)
         {
            _itemHashMap.add(uint(_loc2_.@id),_loc2_);
         }
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc2_:XML = _itemHashMap.getValue(param1);
         if(_loc2_)
         {
            return String(_loc2_.@TeamTaskName);
         }
         return "";
      }
      
      public static function getStar(param1:uint) : int
      {
         var _loc2_:XML = _itemHashMap.getValue(param1);
         if(_loc2_)
         {
            return int(_loc2_.@TeamTaskStar);
         }
         return 0;
      }
      
      public static function getDesc(param1:uint) : String
      {
         var _loc3_:String = null;
         var _loc2_:XML = _itemHashMap.getValue(param1);
         if(_loc2_)
         {
            _loc3_ = String(_loc2_.@TeamTaskDescription);
            while(_loc3_.indexOf("\\n") != -1)
            {
               _loc3_ = _loc3_.replace("\\n","\n");
            }
            return _loc3_;
         }
         return "";
      }
      
      public static function getDispatchTime(param1:uint) : int
      {
         var _loc2_:XML = _itemHashMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@TeamTaskDispatchTime);
         }
         return 0;
      }
      
      public static function getNeedPetNum(param1:uint) : int
      {
         var _loc2_:XML = _itemHashMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@TeamTaskNeedPetNum);
         }
         return 0;
      }
      
      public static function getRecommendPets(param1:uint) : Array
      {
         var _loc3_:Array = null;
         var _loc4_:String = null;
         var _loc5_:int = 0;
         var _loc2_:XML = _itemHashMap.getValue(param1);
         if(_loc2_)
         {
            _loc3_ = [];
            _loc3_ = (_loc4_ = String(_loc2_.@TeamTaskRecommendPets)).split("_");
            _loc5_ = 0;
            while(_loc5_ < _loc3_.length)
            {
               _loc3_[_loc5_] = int(_loc3_[_loc5_]);
               _loc5_++;
            }
            return _loc3_;
         }
         return null;
      }
      
      public static function getBaseReward(param1:uint) : Array
      {
         var _loc3_:Array = null;
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc6_:int = 0;
         var _loc7_:Object = null;
         var _loc8_:String = null;
         var _loc2_:XML = _itemHashMap.getValue(param1);
         if(_loc2_)
         {
            _loc3_ = [];
            _loc3_ = (_loc4_ = String(_loc2_.@TeamTaskBaseReward)).split(";");
            _loc5_ = [];
            _loc6_ = 0;
            while(_loc6_ < _loc3_.length)
            {
               _loc7_ = new Object();
               _loc8_ = String(_loc3_[_loc6_]);
               _loc7_.itemId = int(_loc8_.split("/")[0]);
               _loc7_.outputNum = int(_loc8_.split("/")[1]);
               _loc5_.push(_loc7_);
               _loc6_++;
            }
            return _loc5_;
         }
         return null;
      }
      
      public static function getExtraReward(param1:uint) : Array
      {
         var _loc3_:Array = null;
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc6_:int = 0;
         var _loc7_:Object = null;
         var _loc8_:String = null;
         var _loc2_:XML = _itemHashMap.getValue(param1);
         if(_loc2_)
         {
            _loc3_ = [];
            _loc3_ = (_loc4_ = String(_loc2_.@TeamTaskExtraReward)).split(";");
            _loc5_ = [];
            _loc6_ = 0;
            while(_loc6_ < _loc3_.length)
            {
               _loc7_ = new Object();
               _loc8_ = String(_loc3_[_loc6_]);
               _loc7_.itemId = int(_loc8_.split("/")[0]);
               _loc7_.outputNum = int(_loc8_.split("/")[1]);
               _loc5_.push(_loc7_);
               _loc6_++;
            }
            return _loc5_;
         }
         return null;
      }
   }
}
