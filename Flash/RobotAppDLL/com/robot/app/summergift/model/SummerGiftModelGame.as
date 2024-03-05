package com.robot.app.summergift.model
{
   public class SummerGiftModelGame
   {
      
      public static const FIGHT_TYPE_FIGHT:int = 1;
      
      public static const FIGHT_TYPE_MODULE:int = 2;
      
      public static const FIGHT_TYPE_MOVIE:int = 3;
       
      
      public var gameId:int;
      
      public var mcName:String;
      
      public var flagComp:String;
      
      public var tips:String;
      
      public var statusFlag:int;
      
      public var frame:int;
      
      public var special:int;
      
      public var skipItem:int;
      
      public var finishItem:int;
      
      public var dailyIdProcess:int;
      
      public var dailyIdCdTime:int;
      
      public var maxVal:int;
      
      public var rewardStatus:int;
      
      public var actGo:int;
      
      public var cdType:int;
      
      public var actBack:int;
      
      public var actFight:int;
      
      public var armType:int;
      
      public var steps:Array;
      
      public function SummerGiftModelGame()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : SummerGiftModelGame
      {
         var _loc3_:XML = null;
         if(!param1)
         {
            return null;
         }
         var _loc2_:SummerGiftModelGame = new SummerGiftModelGame();
         _loc2_.gameId = param1.attribute("id");
         _loc2_.mcName = param1.attribute("mcname");
         _loc2_.flagComp = param1.attribute("flag");
         _loc2_.tips = param1.attribute("tips");
         _loc2_.statusFlag = param1.attribute("statusflag");
         _loc2_.frame = param1.attribute("frame");
         _loc2_.special = param1.attribute("special");
         _loc2_.skipItem = param1.attribute("skipitem");
         _loc2_.finishItem = param1.attribute("finishitem");
         _loc2_.dailyIdProcess = param1.attribute("dailyidprocess");
         _loc2_.dailyIdCdTime = param1.attribute("dialyidcdtime");
         _loc2_.maxVal = param1.attribute("maxval");
         _loc2_.rewardStatus = param1.attribute("rewardstatus");
         _loc2_.actGo = param1.attribute("actgo");
         _loc2_.cdType = param1.attribute("cdtype");
         _loc2_.actBack = param1.attribute("actback");
         _loc2_.actFight = param1.attribute("actfight");
         _loc2_.armType = param1.attribute("armtype");
         _loc2_.steps = new Array();
         for each(_loc3_ in param1.child("steps"))
         {
            _loc2_.steps.push(SummerGiftModelStep.ReadXml(_loc3_));
         }
         return _loc2_;
      }
   }
}
