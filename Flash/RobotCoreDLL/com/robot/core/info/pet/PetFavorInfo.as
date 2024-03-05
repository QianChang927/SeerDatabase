package com.robot.core.info.pet
{
   public class PetFavorInfo
   {
      
      public static var SUMARG:Array;
       
      
      public var level:int;
      
      public var name:String;
      
      public var totalConsume:int;
      
      public var needConsume:int;
      
      public var needItem:int;
      
      public var needcnt:int;
      
      public var arg:Array;
      
      public var nextFavorInfo:com.robot.core.info.pet.PetFavorInfo;
      
      public function PetFavorInfo(param1:XML, param2:com.robot.core.info.pet.PetFavorInfo = null)
      {
         super();
         this.level = int(param1.@ID);
         this.name = String(param1.@Name);
         this.totalConsume = int(param1.@TotalConsume);
         this.needItem = int(param1.@NeedItem);
         this.needcnt = int(param1.@NeedCnt);
         this.arg = String(param1.@Args).split(" ");
         if(param2 == null)
         {
            this.nextFavorInfo = this;
            this.needConsume = 0;
         }
         else
         {
            this.nextFavorInfo = param2;
            this.needConsume = param2.totalConsume - this.totalConsume;
         }
         if(this.level == 5)
         {
            SUMARG = this.arg;
         }
      }
      
      public function restFavor(param1:int) : int
      {
         return param1 - this.totalConsume;
      }
      
      public function isMaxLevel() : Boolean
      {
         return this.nextFavorInfo == this;
      }
   }
}
