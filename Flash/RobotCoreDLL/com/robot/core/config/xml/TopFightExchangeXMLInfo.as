package com.robot.core.config.xml
{
   import flash.utils.Dictionary;
   
   public class TopFightExchangeXMLInfo
   {
      
      private static var xmlClass:Class = TopFightExchangeXMLInfo_xmlClass;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function TopFightExchangeXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new xmlClass());
         _xmllist = _xml.elements("Exchange");
      }
      
      public static function getExchangeList() : XMLList
      {
         return _xmllist;
      }
      
      public static function getDictionary() : Dictionary
      {
         var _loc5_:XML = null;
         var _loc6_:uint = 0;
         var _loc7_:Object = null;
         var _loc8_:Array = null;
         var _loc9_:XML = null;
         var _loc10_:Array = null;
         var _loc11_:int = 0;
         var _loc12_:int = 0;
         var _loc1_:Dictionary = new Dictionary();
         var _loc2_:Dictionary = new Dictionary();
         var _loc3_:Dictionary = new Dictionary();
         var _loc4_:Dictionary = new Dictionary();
         _loc1_[1] = _loc2_;
         _loc1_[2] = _loc3_;
         _loc1_[3] = _loc4_;
         for each(_loc5_ in _xmllist)
         {
            _loc6_ = uint(_loc5_.@ItemID);
            (_loc7_ = {}).itemID = _loc6_;
            _loc7_.price = uint(_loc5_.@NeedHonour);
            _loc7_.level = uint(_loc5_.@NeedLevel);
            _loc7_.exchangeID = uint(_loc5_.@ID);
            _loc8_ = [];
            if(_loc5_.@type == 1)
            {
               _loc9_ = CountermarkXMLInfo.getMap().getValue(_loc6_);
               _loc7_.name = _loc9_.@Des.toString();
               if(_loc9_.@Type == 0)
               {
                  _loc10_ = String(_loc9_.@Arg).split(" ");
                  _loc11_ = 0;
                  while(_loc11_ < _loc10_.length)
                  {
                     if(int(_loc10_[_loc11_]) > 0)
                     {
                        _loc8_.push(_loc11_ + 1);
                     }
                     _loc11_++;
                  }
                  _loc7_.group = _loc8_;
                  _loc3_[_loc6_] = _loc7_;
               }
               else
               {
                  if((_loc12_ = SkillXMLInfo.getCategory(_loc9_.@MoveID)) == 4)
                  {
                     _loc12_ = 3;
                  }
                  _loc8_.push(_loc12_);
                  _loc7_.group = _loc8_;
                  _loc2_[_loc6_] = _loc7_;
               }
            }
            else
            {
               _loc7_.name = ItemXMLInfo.getName(_loc6_);
               _loc4_[_loc6_] = _loc7_;
            }
         }
         return _loc1_;
      }
   }
}
