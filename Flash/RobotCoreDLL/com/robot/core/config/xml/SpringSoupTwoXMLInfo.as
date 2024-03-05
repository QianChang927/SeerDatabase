package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class SpringSoupTwoXMLInfo
   {
      
      private static var xmlClass:Class = SpringSoupTwoXMLInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemshashMap:HashMap;
      
      private static var _shop2itemshashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function SpringSoupTwoXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _xml = XML(new xmlClass());
         _itemshashMap = new HashMap();
         _xmllist = _xml.elements("SoupDrink");
         for each(_loc1_ in _xmllist)
         {
            _itemshashMap.add(uint(_loc1_.@id),_loc1_);
         }
      }
      
      public static function getQuestionDesXML(param1:int, param2:int) : Array
      {
         var _loc4_:XML = null;
         var _loc3_:Array = [];
         for each(_loc4_ in _itemshashMap.getValues())
         {
            if(_loc4_.@soupStoryID == param1)
            {
               if(_loc4_.@soupWordID == param2)
               {
                  _loc3_.push(_loc4_.@questionDes);
               }
            }
         }
         return _loc3_;
      }
      
      public static function getQuestionAnswerXML(param1:int, param2:int, param3:int) : int
      {
         var _loc5_:XML = null;
         var _loc4_:Array = [];
         for each(_loc5_ in _itemshashMap.getValues())
         {
            if(_loc5_.@soupStoryID == param1)
            {
               if(_loc5_.@soupWordID == param2)
               {
                  if(_loc5_.@questionID == param3)
                  {
                     return _loc5_.@questionAnswer;
                  }
               }
            }
         }
         return 0;
      }
      
      public static function getQuestionUnlockXML(param1:int, param2:int, param3:int) : int
      {
         var _loc5_:XML = null;
         var _loc4_:Array = [];
         for each(_loc5_ in _itemshashMap.getValues())
         {
            if(_loc5_.@soupStoryID == param1)
            {
               if(_loc5_.@soupWordID == param2)
               {
                  if(_loc5_.@questionID == param3)
                  {
                     if(_loc5_.@questionUnlock != null)
                     {
                        return _loc5_.@questionUnlock;
                     }
                  }
               }
            }
         }
         return 0;
      }
   }
}
