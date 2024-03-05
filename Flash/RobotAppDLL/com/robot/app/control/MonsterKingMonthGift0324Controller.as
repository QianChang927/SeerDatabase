package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.XMLEvent;
   import com.robot.core.net.XMLLoader;
   
   public class MonsterKingMonthGift0324Controller
   {
      
      private static var _loader:XMLLoader;
      
      private static var _hander:Function;
      
      private static var _xml:XML;
      
      private static var _xmlList:XMLList;
      
      private static var _dialogItemsArr:Array;
       
      
      public function MonsterKingMonthGift0324Controller()
      {
         super();
      }
      
      public static function setup(param1:Function = null) : void
      {
         _hander = param1;
         _loader = new XMLLoader();
         _loader.addEventListener(XMLEvent.COMPLETE,onLoadXMLComplete);
         _loader.load(ClientConfig.getAppResource("2017/0414/MonsterKingMonthGift0324XmlConfig",".xml"));
      }
      
      private static function onLoadXMLComplete(param1:XMLEvent) : void
      {
         var _loc2_:XML = null;
         _xml = XML(param1.data);
         _xmlList = _xml.elements("dialog");
         _dialogItemsArr = [];
         for each(_loc2_ in _xmlList)
         {
            _dialogItemsArr.push(_loc2_);
         }
         _loader.removeEventListener(XMLEvent.COMPLETE,onLoadXMLComplete);
         _loader = null;
         if(_hander != null)
         {
            _hander();
         }
      }
      
      private static function getXmlById(param1:uint) : XML
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmlList)
         {
            if(_loc2_.@id == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public static function getDialogById(param1:uint) : Array
      {
         var _loc3_:Object = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc2_:Array = new Array();
         var _loc4_:XML;
         if(_loc4_ = getXmlById(param1))
         {
            _loc5_ = _loc4_.elements("question");
            for each(_loc6_ in _loc5_)
            {
               _loc3_ = new Object();
               _loc3_.q = String(_loc6_.@q);
               _loc3_.a = String(_loc6_.@a);
               _loc3_.npc = int(_loc6_.@npc);
               _loc2_.push(_loc3_);
            }
         }
         return _loc2_;
      }
   }
}
