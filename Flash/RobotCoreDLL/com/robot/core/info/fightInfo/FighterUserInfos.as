package com.robot.core.info.fightInfo
{
   import com.robot.core.info.pet.PetInfo;
   
   public class FighterUserInfos
   {
       
      
      private var _myInfo:com.robot.core.info.fightInfo.FighterUserInfo;
      
      private var _otherInfo:com.robot.core.info.fightInfo.FighterUserInfo;
      
      private var _allPetID:Array;
      
      private var _allSkillID:Array;
      
      private var _allPetCatch:Array;
      
      public function FighterUserInfos()
      {
         this._allPetID = [];
         this._allSkillID = [];
         this._allPetCatch = [];
         super();
      }
      
      public function get myInfo() : com.robot.core.info.fightInfo.FighterUserInfo
      {
         return this._myInfo;
      }
      
      public function set myInfo(param1:com.robot.core.info.fightInfo.FighterUserInfo) : void
      {
         this._myInfo = param1;
      }
      
      public function get otherInfo() : com.robot.core.info.fightInfo.FighterUserInfo
      {
         return this._otherInfo;
      }
      
      public function set otherInfo(param1:com.robot.core.info.fightInfo.FighterUserInfo) : void
      {
         this._otherInfo = param1;
      }
      
      public function get allPetID() : Array
      {
         if(Boolean(this.myInfo) && Boolean(this.otherInfo))
         {
            this._allPetID = this.myInfo.petIDArr.concat(this.otherInfo.petIDArr);
         }
         return this._allPetID;
      }
      
      public function get allSkillID() : Array
      {
         if(Boolean(this.myInfo) && Boolean(this.otherInfo))
         {
            this._allSkillID = this.myInfo.petSkillIDArr.concat(this.otherInfo.petSkillIDArr);
         }
         return this._allSkillID;
      }
      
      public function get allPetCatch() : Array
      {
         if(Boolean(this.myInfo) && Boolean(this.otherInfo))
         {
            this._allPetCatch = this.myInfo.petCatchArr.concat(this.otherInfo.petCatchArr);
         }
         return this._allPetCatch;
      }
      
      public function getPetInfo(param1:uint, param2:Boolean = true) : PetInfo
      {
         var _loc3_:PetInfo = null;
         if(param2)
         {
            _loc3_ = this.myInfo.getPetInfo(param1);
            if(_loc3_ != null)
            {
               return _loc3_;
            }
            _loc3_ = this.otherInfo.getPetInfo(param1);
            if(_loc3_ != null)
            {
               return _loc3_;
            }
         }
         else
         {
            _loc3_ = this.otherInfo.getPetInfo(param1);
            if(_loc3_ != null)
            {
               return _loc3_;
            }
         }
         return null;
      }
   }
}
