package com.robot.app.midautumn.model
{
   public class MidAutumnGiftConfig
   {
       
      
      public var activateTime:int;
      
      public var getMaterialCDTime:int;
      
      public var activateBigReward:int;
      
      public var cookieBossId:int;
      
      public var maxPlayTimes:int;
      
      public var curDate:String;
      
      public var plyCdTime:int;
      
      public var bonusReward:int;
      
      public var bonusMaterial:int;
      
      public function MidAutumnGiftConfig()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : MidAutumnGiftConfig
      {
         var _loc2_:MidAutumnGiftConfig = new MidAutumnGiftConfig();
         _loc2_.activateTime = param1.attribute("activatetime");
         _loc2_.getMaterialCDTime = param1.attribute("getmaterialcd");
         _loc2_.activateBigReward = param1.attribute("activatebigrwd");
         _loc2_.cookieBossId = param1.attribute("cookieboss");
         _loc2_.maxPlayTimes = param1.attribute("maxply");
         _loc2_.curDate = param1.attribute("date");
         _loc2_.plyCdTime = param1.attribute("playcdtime");
         _loc2_.bonusReward = param1.attribute("bonusreward");
         _loc2_.bonusMaterial = param1.attribute("bonusmaterial");
         return _loc2_;
      }
   }
}
