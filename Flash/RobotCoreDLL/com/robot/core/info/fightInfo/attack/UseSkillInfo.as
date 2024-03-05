package com.robot.core.info.fightInfo.attack
{
   import flash.utils.IDataInput;
   
   public class UseSkillInfo
   {
       
      
      private var _firstAttackInfo:com.robot.core.info.fightInfo.attack.AttackValue;
      
      private var _secondAttackInfo:com.robot.core.info.fightInfo.attack.AttackValue;
      
      public function UseSkillInfo(param1:IDataInput)
      {
         super();
         this._firstAttackInfo = new com.robot.core.info.fightInfo.attack.AttackValue(param1);
         this._secondAttackInfo = new com.robot.core.info.fightInfo.attack.AttackValue(param1);
      }
      
      public function get firstAttackInfo() : com.robot.core.info.fightInfo.attack.AttackValue
      {
         return this._firstAttackInfo;
      }
      
      public function get secondAttackInfo() : com.robot.core.info.fightInfo.attack.AttackValue
      {
         return this._secondAttackInfo;
      }
   }
}
