package com.robot.app.control
{
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.events.Event;
   import flash.net.URLLoader;
   
   public class ShopXmlController
   {
      
      private static var _urlLoader:URLLoader;
      
      private static var _dataXml:XML;
      
      public static var PET_XML_TYPE:int = 1;
      
      public static var CLOTH_XML_TYPE:int = 2;
      
      public static var ZUO_JIA_XML_TYPE:int = 3;
      
      private static var suitData:XML = <menu>
					<item id="281" elite="1" cloths="1300310 1300311 1300312 1300313" name="黄金金牛套装"/>
					<item id="282" elite="1" cloths="1300314 1300315 1300316 1300317" name="白银金牛套装"/>
					<item id="294" elite="1" cloths="1300362 1300363 1300364 1300365" name="双子座黄金套装"/>
					<item id="295" elite="1" cloths="1300366 1300367 1300368 1300369" name="双子座白银套装"/>
					<item id="307" cloths="1300417 1300418 1300419 1300420" name="狮子座黄金套装"/>
					<item id="308" cloths="1300421 1300422 1300423 1300424" name="狮子座白银套装"/>
					<item id="218" elite="1" cloths="1300029 1300030 1300031 1300032" name="黄金白羊套装"/>
					<item id="219" elite="1" cloths="1300033 1300034 1300035 1300036" name="白银白羊套装"/>
					<item id="212" elite="1" cloths="1300006 1300007 1300008 1300009" name="黄金双鱼套装"/>
					<item id="213" elite="1" cloths="1300010 1300011 1300012 1300013" name="白银双鱼套装"/>
					<item id="298" elite="1" cloths="1300380 1300381 1300382 1300383" name="巨蟹白银套装"/>
					<item id="299" elite="1" cloths="1300384 1300385 1300386 1300387" name="巨蟹黄金套装"/>
					<item id="201" elite="1" cloths="100957 100958 100959 100960" name="黄金水瓶套装"/>
					<item id="202" elite="1" cloths="100961 100962 100963 100964" name="白银水瓶套装"/>
					</menu>;
       
      
      public function ShopXmlController()
      {
         super();
      }
      
      public static function setup() : void
      {
         PreloadZipXMLController.getXML("shop_config.xml",function(param1:*):void
         {
            _dataXml = XML(param1);
            var _loc2_:Number = getTypeProId(1,1700145);
         });
      }
      
      private static function onLoadDone(param1:Event) : void
      {
         _urlLoader.removeEventListener(Event.COMPLETE,onLoadDone);
         _dataXml = XML(_urlLoader.data);
         _urlLoader = null;
         var _loc2_:Number = getTypeProId(1,1700145);
      }
      
      public static function getTypeProId(param1:int, param2:uint) : uint
      {
         var _loc4_:XML = null;
         var _loc5_:Array = null;
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = _getTypeXml(param1);
         if(_loc3_.menu.length() == 0)
         {
            _loc6_ = 0;
            while(_loc6_ < _loc3_.item.length())
            {
               if((_loc5_ = (_loc8_ = _loc3_.item[_loc6_].@itemID).split(/\|/gi)).indexOf(param2.toString()) >= 0)
               {
                  return Number(_loc3_.item[_loc6_].@productID);
               }
               _loc6_++;
            }
            return 0;
         }
         _loc7_ = 0;
         while(_loc7_ < _loc3_.menu.length())
         {
            _loc4_ = _loc3_.menu[_loc7_];
            _loc6_ = 0;
            while(_loc6_ < _loc4_.item.length())
            {
               if((_loc5_ = (_loc8_ = _loc4_.item[_loc6_].@itemID).split(/\|/gi)).indexOf(param2.toString()) >= 0)
               {
                  return Number(_loc4_.item[_loc6_].@productID);
               }
               _loc6_++;
            }
            _loc7_++;
         }
         return 0;
      }
      
      private static function _getTypeXml(param1:int) : XML
      {
         if(param1 == PET_XML_TYPE)
         {
            return XML(_dataXml.menu[1]);
         }
         if(param1 == CLOTH_XML_TYPE)
         {
            return XML(_dataXml.menu[3]);
         }
         if(param1 == ZUO_JIA_XML_TYPE)
         {
            return XML(_dataXml.menu[3].menu[4]);
         }
         return null;
      }
      
      public static function getSuitId(param1:uint) : Number
      {
         var _loc3_:String = null;
         var _loc4_:Array = null;
         var _loc2_:int = 0;
         while(_loc2_ < suitData.item.length())
         {
            _loc3_ = suitData.item[_loc2_].@cloths;
            if((_loc4_ = _loc3_.split(/\ /gi)).indexOf(param1.toString()) >= 0)
            {
               return 1;
            }
            _loc2_++;
         }
         return 0;
      }
   }
}
