package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class TypeXMLInfo
   {
      
      private static var xmlClass:Class = TypeXMLInfo_xmlClass;
      
      public static var typeInfos:HashMap;
      
      {
         setup();
      }
      
      public function TypeXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:String = null;
         var _loc6_:HashMap = null;
         var _loc7_:XML = null;
         var _loc8_:String = null;
         var _loc9_:Number = NaN;
         typeInfos = new HashMap();
         var _loc1_:XML = XML(new xmlClass());
         var _loc2_:XMLList = _loc1_.elements("Relation");
         for each(_loc3_ in _loc2_)
         {
            _loc4_ = _loc3_.elements("Opponent");
            _loc5_ = _loc3_.@type;
            _loc6_ = new HashMap();
            for each(_loc7_ in _loc4_)
            {
               _loc8_ = String(_loc7_.@type);
               _loc9_ = Number(_loc7_.@multiple);
               _loc6_.add(_loc8_,_loc9_);
            }
            typeInfos.add(_loc5_,_loc6_);
         }
      }
      
      public static function getRelation(param1:String, param2:String) : Number
      {
         return typeInfos.getValue(param1).getValue(param2);
      }
      
      public static function getRelations(param1:Array, param2:Array) : Number
      {
         var _loc3_:Number = NaN;
         if(param1.length == 1)
         {
            if(param2.length == 1)
            {
               _loc3_ = getRelation(param1[0],param2[0]);
            }
            else if(param2.length == 2)
            {
               _loc3_ = (getRelation(param1[0],param2[0]) + getRelation(param1[0],param2[1])) / 2;
            }
         }
         else if(param1.length == 2)
         {
            if(param2.length == 1)
            {
               _loc3_ = (getRelation(param1[0],param2[0]) + getRelation(param1[1],param2[0])) / 2;
            }
            else if(param2.length == 2)
            {
               _loc3_ = (getRelation(param1[0],param2[0]) + getRelation(param1[0],param2[1]) + getRelation(param1[1],param2[0]) + getRelation(param1[1],param2[1])) / 4;
            }
         }
         return _loc3_;
      }
      
      public static function getRelationsPow(param1:Array, param2:Array) : Number
      {
         var _loc3_:Number = NaN;
         var _loc4_:Number = NaN;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc7_:Number = NaN;
         var _loc8_:Number = NaN;
         var _loc9_:Number = NaN;
         var _loc10_:Number = NaN;
         if(param1.length == 1)
         {
            if(param2.length == 1)
            {
               _loc3_ = getRelation(param1[0],param2[0]);
            }
            else if(param2.length == 2)
            {
               _loc5_ = getRelation(param1[0],param2[0]);
               _loc6_ = getRelation(param1[0],param2[1]);
               _loc3_ = (getRelation(param1[0],param2[0]) + getRelation(param1[0],param2[1])) / getDivisor(getRelation(param1[0],param2[0]),getRelation(param1[0],param2[1]));
            }
         }
         else if(param1.length == 2)
         {
            if(param2.length == 1)
            {
               _loc3_ = (getRelation(param1[0],param2[0]) + getRelation(param1[1],param2[0])) / getDivisor(getRelation(param1[0],param2[0]),getRelation(param1[1],param2[0]));
            }
            else if(param2.length == 2)
            {
               _loc7_ = getRelation(param1[0],param2[0]);
               _loc8_ = getRelation(param1[1],param2[0]);
               _loc9_ = getRelation(param1[0],param2[1]);
               _loc10_ = getRelation(param1[1],param2[1]);
               _loc3_ = ((_loc7_ + _loc8_) / getDivisor(_loc7_,_loc8_) + (_loc9_ + _loc10_) / getDivisor(_loc9_,_loc10_)) / 2;
            }
         }
         return _loc3_;
      }
      
      private static function getDivisor(param1:Number, param2:Number) : Number
      {
         var _loc3_:Number = 1;
         if(param1 == 2 && param2 == 2)
         {
            _loc3_ = 1;
         }
         else if(!param1 || !param2)
         {
            _loc3_ = 4;
         }
         else
         {
            _loc3_ = 2;
         }
         return _loc3_;
      }
   }
}
