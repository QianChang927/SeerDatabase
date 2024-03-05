package com.robot.core.info.fightInfo
{
   public class PetWarInfo
   {
       
      
      private var _myPetA:Array;
      
      private var _otherPetA:Array;
      
      private var _myClothArr:Array;
      
      private var _otherClothArr:Array;
      
      private var _userAList:Array;
      
      private var _userBList:Array;
      
      public function PetWarInfo()
      {
         super();
      }
      
      public function get userAList() : Array
      {
         return this._userAList;
      }
      
      public function set userAList(param1:Array) : void
      {
         this._userAList = param1;
      }
      
      public function get userBList() : Array
      {
         return this._userBList;
      }
      
      public function set userBList(param1:Array) : void
      {
         this._userBList = param1;
      }
      
      public function get myClothArr() : Array
      {
         return this._myClothArr;
      }
      
      public function set myClothArr(param1:Array) : void
      {
         this._myClothArr = param1;
      }
      
      public function get otherClothArr() : Array
      {
         return this._otherClothArr;
      }
      
      public function set otherClothArr(param1:Array) : void
      {
         this._otherClothArr = param1;
      }
      
      public function get myPetA() : Array
      {
         return this._myPetA;
      }
      
      public function set myPetA(param1:Array) : void
      {
         this._myPetA = param1;
      }
      
      public function set otherPetA(param1:Array) : void
      {
         this._otherPetA = param1;
      }
      
      public function get otherPetA() : Array
      {
         return this._otherPetA;
      }
   }
}
