package com.robot.app.ninthdragon.model
{
   public class NinthDragonRewardRequire
   {
       
      
      public var id:int;
      
      public var require:int;
      
      public var tips:String;
      
      public function NinthDragonRewardRequire()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : NinthDragonRewardRequire
      {
         var _loc2_:NinthDragonRewardRequire = new NinthDragonRewardRequire();
         _loc2_.id = param1.attribute("id");
         _loc2_.require = param1.attribute("require");
         _loc2_.tips = param1.attribute("tips");
         return _loc2_;
      }
   }
}
