package com.robot.core.config.xml
{
   import com.robot.core.info.fightCard.FightCardSimpleInfo;
   import org.taomee.ds.HashMap;
   
   public class FightCardSimpleXMLInfo
   {
      
      private static var _xmlClass:Class = FightCardSimpleXMLInfo__xmlClass;
      
      private static var _xml:XML;
      
      private static var _card:HashMap;
       
      
      public function FightCardSimpleXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc2_:XML = null;
         _xml = XML(new _xmlClass());
         _card = new HashMap();
         var _loc1_:XMLList = _xml.descendants("item");
         for each(_loc2_ in _loc1_)
         {
            if(_card.containsKey(uint(_loc2_.@id)) == false)
            {
               _card.add(uint(_loc2_.@id),new FightCardSimpleInfo(_loc2_));
            }
         }
      }
      
      public static function destory() : void
      {
         _xml = null;
         _card = null;
      }
      
      public static function getClassNum() : uint
      {
         return uint(_xml.children().length());
      }
      
      public static function getPetCard(param1:uint) : Array
      {
         var temp:Array = null;
         var array:Array = null;
         var xml:XML = null;
         var list:XMLList = null;
         var card:XML = null;
         var id:uint = param1;
         temp = [];
         array = [];
         xml = _xml.children().(@id == id.toString())[0];
         list = xml.petCard[0].children();
         for each(card in list)
         {
            if(temp.indexOf(uint(card.@petId)) == -1)
            {
               temp.push(uint(card.@petId));
               array.push(uint(card.@id));
            }
         }
         return array;
      }
      
      public static function getFightCard(param1:uint) : Array
      {
         var array:Array = null;
         var xml:XML = null;
         var list:XMLList = null;
         var card:XML = null;
         var id:uint = param1;
         array = [];
         xml = _xml.children().(@id == id.toString())[0];
         list = xml.fightCard[0].children();
         for each(card in list)
         {
            array.push(uint(card.@id));
         }
         return array;
      }
      
      public static function getCardInfo(param1:uint) : FightCardSimpleInfo
      {
         return _card.getValue(param1);
      }
   }
}
