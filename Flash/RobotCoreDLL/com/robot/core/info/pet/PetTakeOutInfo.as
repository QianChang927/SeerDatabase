package com.robot.core.info.pet
{
   import flash.utils.IDataInput;
   
   public class PetTakeOutInfo
   {
       
      
      private var _homeEnergy:uint;
      
      private var _firstPetTime:uint;
      
      private var _flag:uint;
      
      private var _petInfo:com.robot.core.info.pet.PetInfo;
      
      public function PetTakeOutInfo(param1:IDataInput)
      {
         super();
         this._homeEnergy = param1.readUnsignedInt();
         this._firstPetTime = param1.readUnsignedInt();
         this._flag = param1.readUnsignedInt();
         if(this.flag != 0)
         {
            this._petInfo = new com.robot.core.info.pet.PetInfo(param1,true,true,false);
         }
      }
      
      public function get homeEnergy() : uint
      {
         return this._homeEnergy;
      }
      
      public function get firstPetTime() : uint
      {
         return this._firstPetTime;
      }
      
      public function get flag() : uint
      {
         return this._flag;
      }
      
      public function get petInfo() : com.robot.core.info.pet.PetInfo
      {
         return this._petInfo;
      }
   }
}
