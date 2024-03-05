package com.robot.core.group.fightInfo.fighting.skill
{
   import flash.utils.IDataInput;
   
   public class GpFtSkillHurtInfo
   {
       
      
      private var _isGank:Boolean = false;
      
      private var _attackSkillHurtInfo:com.robot.core.group.fightInfo.fighting.skill.SkillHurtInfo;
      
      private var _attackedSkillHurtInfo:com.robot.core.group.fightInfo.fighting.skill.SkillHurtInfo;
      
      public function GpFtSkillHurtInfo(param1:IDataInput = null)
      {
         super();
         this._isGank = Boolean(param1.readUnsignedByte());
         this._attackSkillHurtInfo = new com.robot.core.group.fightInfo.fighting.skill.SkillHurtInfo(param1);
         this._attackedSkillHurtInfo = new com.robot.core.group.fightInfo.fighting.skill.SkillHurtInfo(param1);
      }
      
      public function get isGank() : Boolean
      {
         return this._isGank;
      }
      
      public function get attackSkillHurtInfo() : com.robot.core.group.fightInfo.fighting.skill.SkillHurtInfo
      {
         return this._attackSkillHurtInfo;
      }
      
      public function get attackedSkillHurtInfo() : com.robot.core.group.fightInfo.fighting.skill.SkillHurtInfo
      {
         return this._attackedSkillHurtInfo;
      }
   }
}
