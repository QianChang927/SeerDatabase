package com.robot.core.info.item
{
   public class PetFavorItemInfo
   {
       
      
      public var id:int;
      
      public var name:String;
      
      public var maxValue:int;
      
      public var itemType:int;
      
      public var limitType:int;
      
      public var limitArgs:String;
      
      public var limitPetClass:String;
      
      public var desc:String;
      
      public function PetFavorItemInfo(param1:XML)
      {
         super();
         if(param1 != null)
         {
            this.id = int(param1.@ID);
            this.name = String(param1.@Name);
            this.maxValue = int(param1.@AddValue);
            this.itemType = int(param1.@Type);
            this.limitType = int(param1.@LimitType);
            this.limitArgs = "_" + String(param1.@LimitArgs) + "_";
            this.limitPetClass = "_" + String(param1.@LimitPetClass) + "_";
            this.desc = String(param1.@Desc);
         }
      }
   }
}
