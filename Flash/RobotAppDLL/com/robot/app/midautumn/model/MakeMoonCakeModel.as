package com.robot.app.midautumn.model
{
   public class MakeMoonCakeModel
   {
       
      
      public var id:int;
      
      public var materials:Array;
      
      public var product:int;
      
      public var timesGetReward:int;
      
      public var effectSwf:String;
      
      public var exchange:int;
      
      public var name:String;
      
      public function MakeMoonCakeModel()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : MakeMoonCakeModel
      {
         if(null == param1)
         {
            return null;
         }
         var _loc2_:MakeMoonCakeModel = new MakeMoonCakeModel();
         _loc2_.id = param1.attribute("id");
         _loc2_.materials = String(param1.attribute("material")).split(",");
         _loc2_.product = param1.attribute("product");
         _loc2_.timesGetReward = param1.attribute("getrewardtimes");
         _loc2_.effectSwf = param1.attribute("effect");
         _loc2_.exchange = param1.attribute("exchange");
         _loc2_.name = param1.attribute("name");
         return _loc2_;
      }
   }
}
