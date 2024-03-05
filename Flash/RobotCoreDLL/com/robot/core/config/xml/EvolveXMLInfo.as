package com.robot.core.config.xml
{
   import org.taomee.debug.DebugTrace;
   
   public class EvolveXMLInfo
   {
      
      private static var xmlcls:Class = EvolveXMLInfo_xmlcls;
      
      private static var xml:XML;
       
      
      public function EvolveXMLInfo()
      {
         super();
      }
      
      private static function getXMLData() : XML
      {
         if(xml == null)
         {
            xml = new XML(new xmlcls());
         }
         return xml;
      }
      
      public static function getEvolveID() : Array
      {
         var _loc3_:XML = null;
         var _loc1_:Array = new Array();
         var _loc2_:XMLList = EvolveXMLInfo.getXMLData().elements("Evolve");
         for each(_loc3_ in _loc2_)
         {
            _loc1_.push(Number(_loc3_.@ID));
         }
         if(_loc1_.length <= 0)
         {
            DebugTrace.show("EvolveXMLInfo Class getEvolveID method \t 没有进化类型！");
            return null;
         }
         return _loc1_;
      }
      
      public static function getMonToIDs(param1:Number) : Array
      {
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc7_:Object = null;
         var _loc2_:Array = new Array();
         var _loc3_:XMLList = EvolveXMLInfo.getXMLData().elements("Evolve");
         for each(_loc4_ in _loc3_)
         {
            if(Number(_loc4_.@ID) == param1)
            {
               _loc5_ = _loc4_.elements("Branch");
               for each(_loc6_ in _loc5_)
               {
                  (_loc7_ = new Object()).MonTo = Number(_loc6_.@MonTo);
                  _loc7_.EvolvItem = Number(_loc6_.@EvolvItem);
                  _loc7_.EvolvItemCount = Number(_loc6_.@EvolvItemCount);
                  _loc2_.push(_loc7_);
               }
            }
         }
         if(_loc2_.length <= 0)
         {
            DebugTrace.show("EvolveXMLInfo Class getMonToIDs method \t 没有匹配进化类型！");
            return null;
         }
         return _loc2_;
      }
      
      public static function getEvolveItem(param1:Number, param2:Number) : Number
      {
         return 0;
      }
      
      public static function getEvolveCount(param1:Number, param2:Number) : Number
      {
         return 0;
      }
   }
}
