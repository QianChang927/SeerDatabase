package com.robot.core.info.fightInfo
{
   import com.robot.core.manager.MainManager;
   import flash.utils.IDataInput;
   import flash.utils.getDefinitionByName;
   
   public class FightStartInfo
   {
       
      
      private var _myInfo:com.robot.core.info.fightInfo.FightPetInfo;
      
      private var _otherInfo:com.robot.core.info.fightInfo.FightPetInfo;
      
      private var _infoArray:Array;
      
      private var _isCanAuto:Boolean;
      
      private var _isShowFightHp:Boolean;
      
      private var _autoChangePetCthTime:int;
      
      public function FightStartInfo(param1:IDataInput)
      {
         this._infoArray = [];
         super();
         this._isCanAuto = param1.readUnsignedInt() == 1;
         this._isShowFightHp = Boolean(param1.readUnsignedInt());
         var _loc2_:com.robot.core.info.fightInfo.FightPetInfo = new com.robot.core.info.fightInfo.FightPetInfo(param1);
         var _loc3_:* = getDefinitionByName("com.robot.app.fight.FightManager") as Class;
         if(_loc2_.userID == MainManager.actorInfo.userID || _loc3_.isReplay && _loc2_.userID != 0)
         {
            this._myInfo = _loc2_;
            this._otherInfo = new com.robot.core.info.fightInfo.FightPetInfo(param1);
            this._infoArray.push(this._myInfo,this._otherInfo);
         }
         else
         {
            this._otherInfo = _loc2_;
            this._myInfo = new com.robot.core.info.fightInfo.FightPetInfo(param1);
            this._infoArray.push(this._myInfo,this._otherInfo);
         }
         this._autoChangePetCthTime = this._otherInfo.requireSwitchCthTime;
      }
      
      public function get isShowFightHp() : Boolean
      {
         return this._isShowFightHp;
      }
      
      public function get isCanAuto() : Boolean
      {
         return this._isCanAuto;
      }
      
      public function get myInfo() : com.robot.core.info.fightInfo.FightPetInfo
      {
         return this._myInfo;
      }
      
      public function get otherInfo() : com.robot.core.info.fightInfo.FightPetInfo
      {
         return this._otherInfo;
      }
      
      public function get infoArray() : Array
      {
         return this._infoArray;
      }
      
      public function get autoChangePetCthTime() : int
      {
         return this._autoChangePetCthTime;
      }
   }
}
