package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class AdvancedPetPanelXMLInfo
   {
      
      private static var designXMLClass:Class = AdvancedPetPanelXMLInfo_designXMLClass;
      
      private static var designXML:XML = XML(new designXMLClass());
      
      private static var defaultDesign:XML;
      
      private static var hash:HashMap = new HashMap();
      
      {
         setup();
      }
      
      public function AdvancedPetPanelXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc3_:XML = null;
         var _loc1_:XMLList = designXML.elements("Default");
         defaultDesign = _loc1_[0];
         var _loc2_:XMLList = designXML.elements("Task");
         for each(_loc3_ in _loc2_)
         {
            hash.add(int(_loc3_.@PetID),_loc3_);
         }
      }
      
      public static function getPetCompNames(param1:int) : Array
      {
         var _loc2_:String = String(hash.getValue(param1).elements("Compone").@Name);
         return _loc2_.split("|");
      }
      
      public static function getAllPanelDesign(param1:uint) : XML
      {
         return hash.getValue(param1);
      }
      
      public static function getOldEffect(param1:uint) : int
      {
         return int(hash.getValue(param1).@OldEffID);
      }
      
      public static function getNewEffect(param1:uint) : int
      {
         return int(hash.getValue(param1).@NewEffID);
      }
      
      public static function getJump(param1:uint) : String
      {
         return hash.getValue(param1).@Jump;
      }
      
      public static function getJump2Fif(param1:uint) : String
      {
         return hash.getValue(param1).@FifthSkillJump;
      }
      
      public static function getSpecificPanelDesign(param1:int, param2:String) : XML
      {
         if(hash.containsKey(param1))
         {
            if(hash.getValue(param1).elements(param2).length() > 0)
            {
               return hash.getValue(param1).elements(param2)[0];
            }
         }
         return defaultDesign.elements(param2)[0];
      }
      
      public static function getSpecificPanelDesignDetail(param1:int, param2:String, param3:String) : XML
      {
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         if(hash.containsKey(param1))
         {
            if((_loc4_ = hash.getValue(param1)).elements(param2).length() > 0)
            {
               if((_loc5_ = _loc4_.elements(param2)[0].elements(param3)).length() > 0)
               {
                  return _loc5_[0];
               }
            }
         }
         return getDefaultDesignDetail(param2,param3);
      }
      
      private static function getDefaultDesignDetail(param1:String, param2:String) : XML
      {
         return defaultDesign.elements(param1)[0].elements(param2)[0];
      }
   }
}
