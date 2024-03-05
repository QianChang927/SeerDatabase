package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class PetFightSkinSkillReplaceXMLInfo
   {
      
      private static var xmlClass:Class = PetFightSkinSkillReplaceXMLInfo_xmlClass;
      
      private static var xl:XML;
      
      private static var petSkills:Array;
      
      {
         setup();
      }
      
      public function PetFightSkinSkillReplaceXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         xl = XML(new xmlClass());
         parseXml();
      }
      
      public static function parseXml() : void
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         var _loc4_:HashMap = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         var _loc9_:String = null;
         petSkills = [];
         var _loc1_:XMLList = xl.item;
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = {};
            _loc3_.skinid = int(_loc2_.@skinid);
            _loc3_.petid = int(_loc2_.@petid);
            _loc4_ = new HashMap();
            _loc5_ = _loc2_.skill;
            for each(_loc6_ in _loc5_)
            {
               _loc7_ = int(_loc6_.@id);
               _loc8_ = int(_loc6_.@replaceId);
               _loc9_ = String(_loc6_.@action);
               _loc4_.add(_loc7_,_loc6_);
            }
            _loc3_.skills = _loc4_;
            petSkills.push(_loc3_);
         }
      }
      
      public static function getReplaceSkill(param1:int, param2:int, param3:int = 0) : int
      {
         var _loc6_:HashMap = null;
         var _loc4_:int = param2;
         var _loc5_:Object;
         if((_loc5_ = getSkinObj(param1,param3)) != null)
         {
            if((_loc6_ = _loc5_.skills).containsKey(param2))
            {
               _loc4_ = int(_loc6_.getValue(param2).@replaceId);
            }
         }
         return _loc4_;
      }
      
      public static function getReplaceAction(param1:int, param2:int, param3:int = 0) : String
      {
         var _loc6_:HashMap = null;
         var _loc4_:String = "";
         var _loc5_:Object;
         if((_loc5_ = getSkinObj(param1,param3)) != null)
         {
            if((_loc6_ = _loc5_.skills).containsKey(param2))
            {
               _loc4_ = String(_loc6_.getValue(param2).@action);
            }
         }
         return _loc4_;
      }
      
      public static function needReplace(param1:int, param2:int) : Boolean
      {
         if(param1 == 0 && param2 == 0)
         {
            return false;
         }
         var _loc3_:Boolean = false;
         return getSkinObj(param1,param2) != null;
      }
      
      public static function getSkinObj(param1:int, param2:int) : Object
      {
         var _loc3_:Object = null;
         if(param1 == 0 && param2 == 0)
         {
            return _loc3_;
         }
         var _loc4_:int = 0;
         while(_loc4_ < petSkills.length)
         {
            if(petSkills[_loc4_].skinid == param1 && param1 != 0 || petSkills[_loc4_].petid == param2 && param2 != 0)
            {
               return petSkills[_loc4_];
            }
            _loc4_++;
         }
         return _loc3_;
      }
      
      public static function getSkinSkills(param1:int, param2:int) : HashMap
      {
         var _loc3_:HashMap = null;
         var _loc4_:HashMap = null;
         var _loc6_:Array = null;
         var _loc7_:int = 0;
         if(param1 == 0 && param2 == 0)
         {
            return _loc3_;
         }
         var _loc5_:int = 0;
         while(_loc5_ < petSkills.length)
         {
            if(petSkills[_loc5_].skinid == param1 && param1 != 0 || petSkills[_loc5_].petid == param2 && param2 != 0)
            {
               _loc6_ = (_loc4_ = petSkills[_loc5_].skills).getKeys();
               _loc3_ = new HashMap();
               _loc7_ = 0;
               while(_loc7_ < _loc6_.length)
               {
                  _loc3_.add(_loc6_[_loc7_],int(_loc4_.getValue(_loc6_[_loc7_]).@replaceId));
                  _loc7_++;
               }
               return _loc3_;
            }
            _loc5_++;
         }
         return _loc3_;
      }
   }
}
