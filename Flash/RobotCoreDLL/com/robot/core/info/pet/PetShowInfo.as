package com.robot.core.info.pet
{
   import com.robot.core.manager.MainManager;
   import flash.utils.IDataInput;
   
   public class PetShowInfo
   {
       
      
      public var userID:uint;
      
      public var catchTime:uint;
      
      public var petID:uint;
      
      public var isBright:Boolean;
      
      public var abilityType:uint;
      
      public var flag:uint;
      
      public var isEatBrigh:Boolean;
      
      public var otherPetId:uint;
      
      public var otherBright:Boolean;
      
      public var otherAbilityType:uint;
      
      public var otherEatBright:Boolean;
      
      public var skinId:int;
      
      public function PetShowInfo(param1:IDataInput = null)
      {
         super();
         if(param1)
         {
            this.userID = param1.readUnsignedInt();
            this.catchTime = param1.readUnsignedInt();
            this.petID = param1.readUnsignedInt();
            this.isBright = Boolean(param1.readUnsignedInt());
            this.abilityType = param1.readUnsignedInt();
            this.flag = param1.readUnsignedInt();
            this.otherPetId = param1.readUnsignedInt();
            this.otherBright = Boolean(param1.readUnsignedInt());
            this.otherAbilityType = param1.readUnsignedInt();
            this.otherEatBright = Boolean(param1.readUnsignedInt());
            if(MainManager.actorID == this.userID)
            {
               MainManager.actorInfo.isBright = this.isBright;
            }
            this.skinId = param1.readUnsignedInt();
         }
      }
      
      public function clone() : PetShowInfo
      {
         var _loc1_:PetShowInfo = new PetShowInfo();
         _loc1_.userID = this.userID;
         _loc1_.catchTime = this.catchTime;
         _loc1_.petID = this.petID;
         _loc1_.isBright = this.isBright;
         _loc1_.abilityType = this.abilityType;
         _loc1_.flag = this.flag;
         _loc1_.isEatBrigh = this.isEatBrigh;
         _loc1_.otherPetId = this.otherPetId;
         _loc1_.otherBright = this.otherBright;
         _loc1_.otherAbilityType = this.otherAbilityType;
         _loc1_.otherEatBright = this.otherEatBright;
         return _loc1_;
      }
   }
}
