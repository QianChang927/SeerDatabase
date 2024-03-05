package com.robot.core.group.fightInfo.readyToFight
{
   import flash.utils.IDataInput;
   
   public class GroupReadyToFightInfo
   {
       
      
      private var _model:uint;
      
      private var _readyFtGroupOneInfo:com.robot.core.group.fightInfo.readyToFight.ReadyToFightGroupInfo;
      
      private var _readyFtGroupTwoInfo:com.robot.core.group.fightInfo.readyToFight.ReadyToFightGroupInfo;
      
      public function GroupReadyToFightInfo(param1:IDataInput = null)
      {
         super();
         this._model = param1.readUnsignedInt();
         this._readyFtGroupOneInfo = new com.robot.core.group.fightInfo.readyToFight.ReadyToFightGroupInfo(param1);
         this._readyFtGroupTwoInfo = new com.robot.core.group.fightInfo.readyToFight.ReadyToFightGroupInfo(param1);
      }
      
      public function get model() : uint
      {
         return this._model;
      }
      
      public function get readyFtGroupOneInfo() : com.robot.core.group.fightInfo.readyToFight.ReadyToFightGroupInfo
      {
         return this._readyFtGroupOneInfo;
      }
      
      public function get readyFtGroupTwoInfo() : com.robot.core.group.fightInfo.readyToFight.ReadyToFightGroupInfo
      {
         return this._readyFtGroupTwoInfo;
      }
   }
}
