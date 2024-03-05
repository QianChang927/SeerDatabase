package com.robot.app.summergift.model
{
   public class SummerGiftModelGift
   {
       
      
      public var id:int;
      
      public var name:String;
      
      public var subId:int;
      
      public var frame:int;
      
      public var actShop:int;
      
      public var actMovie:int;
      
      public var actMain:int;
      
      public var actBtnStatus:int;
      
      public var games:Array;
      
      public function SummerGiftModelGift()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : SummerGiftModelGift
      {
         var _loc3_:XML = null;
         if(!param1)
         {
            return null;
         }
         var _loc2_:SummerGiftModelGift = new SummerGiftModelGift();
         _loc2_.id = param1.attribute("grpid");
         _loc2_.name = param1.attribute("name");
         _loc2_.subId = param1.attribute("subid");
         _loc2_.frame = param1.attribute("frame");
         _loc2_.actShop = param1.attribute("shop");
         _loc2_.actMovie = param1.attribute("movie");
         _loc2_.actMain = param1.attribute("actmain");
         _loc2_.actBtnStatus = param1.attribute("actbtnstatus");
         _loc2_.games = new Array();
         for each(_loc3_ in param1.child("game"))
         {
            _loc2_.games.push(SummerGiftModelGame.ReadXml(_loc3_));
         }
         return _loc2_;
      }
   }
}
