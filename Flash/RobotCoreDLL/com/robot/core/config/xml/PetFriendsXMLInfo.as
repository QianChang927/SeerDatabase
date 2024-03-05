package com.robot.core.config.xml
{
   import com.robot.core.info.skillEffectInfo.EffectInfoManager;
   import org.taomee.ds.HashMap;
   
   public class PetFriendsXMLInfo
   {
      
      private static var xmlClass:Class = PetFriendsXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var _xml:XML;
      
      {
         setup();
      }
      
      public function PetFriendsXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         _dataMap = new HashMap();
         _xml = XML(new xmlClass());
         var _loc1_:XMLList = _xml.elements("Friendship");
         for each(_loc2_ in _loc1_)
         {
            _dataMap.add(_loc2_.@PetID.toString() + "_" + _loc2_.@FriendID.toString(),_loc2_);
         }
      }
      
      public static function getFriendPetIDs(param1:int) : Array
      {
         var _loc3_:int = 0;
         var _loc4_:String = null;
         var _loc2_:Array = [];
         for each(_loc4_ in _dataMap.getKeys())
         {
            _loc3_ = int(_loc4_.split("_")[0]);
            if(param1 == _loc3_)
            {
               _loc2_.push(int(_loc4_.split("_")[1]));
            }
         }
         return _loc2_;
      }
      
      public static function getAffectedEffects(param1:int, param2:int) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:Array = null;
         var _loc7_:Array = null;
         var _loc8_:int = 0;
         var _loc9_:int = 0;
         var _loc10_:int = 0;
         var _loc11_:int = 0;
         var _loc3_:Array = [];
         var _loc4_:String = param1 + "_" + param2;
         if(_dataMap.containsKey(_loc4_))
         {
            _loc5_ = _dataMap.getValue(_loc4_);
            _loc6_ = String(_loc5_.@EffectID).split(";");
            _loc7_ = String(_loc5_.@EffectArgs).split(";");
            _loc11_ = 0;
            while(_loc11_ < _loc6_.length)
            {
               if((_loc8_ = int(_loc6_[_loc11_])) == 2)
               {
                  _loc10_ = int(_loc7_[_loc11_].split(",")[1]);
                  if(_loc3_.indexOf(_loc10_) == -1)
                  {
                     _loc3_.push(_loc10_);
                  }
               }
               else if(_loc8_ == 3)
               {
                  _loc10_ = int(_loc7_[_loc11_]);
                  if(_loc3_.indexOf(_loc10_) == -1)
                  {
                     _loc3_.push();
                  }
               }
               _loc11_++;
            }
         }
         return _loc3_;
      }
      
      public static function getAffectedSkills(param1:int, param2:int) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:Array = null;
         var _loc7_:Array = null;
         var _loc8_:int = 0;
         var _loc9_:int = 0;
         var _loc10_:int = 0;
         var _loc11_:int = 0;
         var _loc12_:Array = null;
         var _loc3_:Array = [];
         var _loc4_:String = param1 + "_" + param2;
         if(_dataMap.containsKey(_loc4_))
         {
            _loc5_ = _dataMap.getValue(_loc4_);
            _loc6_ = String(_loc5_.@EffectID).split(";");
            _loc7_ = String(_loc5_.@EffectArgs).split(";");
            _loc11_ = 0;
            while(_loc11_ < _loc6_.length)
            {
               if((_loc8_ = int(_loc6_[_loc11_])) == 1)
               {
                  if((_loc12_ = _loc7_[_loc11_].split(",")).length > 1)
                  {
                     _loc10_ = int(_loc12_[1]);
                  }
                  else
                  {
                     _loc10_ = int(_loc12_[0]);
                  }
                  if(_loc3_.indexOf(_loc10_) == -1)
                  {
                     _loc3_.push(_loc10_);
                  }
               }
               _loc11_++;
            }
         }
         return _loc3_;
      }
      
      public static function getEffectDesc(param1:int, param2:int) : String
      {
         var _loc3_:String = param1 + "_" + param2;
         var _loc4_:XML;
         if(_loc4_ = _dataMap.getValue(_loc3_))
         {
            return _loc4_.@Desc.toString();
         }
         return "";
      }
      
      public static function getFriendAllDesc(param1:int, param2:int) : String
      {
         var _loc5_:int = 0;
         var _loc6_:Array = null;
         var _loc7_:Array = null;
         var _loc8_:uint = 0;
         var _loc9_:String = null;
         var _loc10_:String = null;
         var _loc11_:uint = 0;
         var _loc12_:uint = 0;
         var _loc13_:String = null;
         if(!isFriendPet(param1,param2))
         {
            return "";
         }
         var _loc3_:Array = getAffectedSkills(param1,param2);
         var _loc4_:Array = [];
         for each(_loc5_ in _loc3_)
         {
            _loc6_ = SkillXMLInfo.getFriendSideEffects(_loc5_);
            _loc7_ = SkillXMLInfo.getFriendSideEffectArgs(_loc5_);
            _loc8_ = 0;
            _loc9_ = "";
            for each(_loc10_ in _loc6_)
            {
               if(_loc10_ != "")
               {
                  _loc11_ = uint(1000000 + uint(_loc10_));
                  _loc12_ = EffectInfoManager.getArgsNum(uint(_loc10_));
                  _loc13_ = EffectInfoManager.getInfo(uint(_loc10_),_loc7_.slice(_loc8_,_loc8_ + _loc12_));
                  _loc8_ += _loc12_;
                  _loc9_ += "\r" + _loc13_;
               }
            }
            _loc4_.push(_loc9_);
         }
         _loc3_ = getAffectedEffects(param1,param2);
         for each(_loc5_ in _loc3_)
         {
            _loc4_.push(PetEffectXMLInfo.getDescByIdx(_loc5_));
         }
         return _loc4_.join("\r\r");
      }
      
      public static function isFriendPet(param1:int, param2:int) : Boolean
      {
         var _loc3_:String = param1 + "_" + param2;
         return _dataMap.containsKey(_loc3_);
      }
   }
}
