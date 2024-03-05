package com.robot.core.info.skillEffectInfo
{
   import com.robot.core.config.xml.SkillXMLInfo;
   
   public class Effect_65 extends AbstractEffectInfo
   {
       
      
      public function Effect_65()
      {
         super();
         _argsNum = 3;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合内，" + SkillXMLInfo.petTypeNameCN(uint(param1[1])) + "系技能威力为" + param1[2] + "倍";
      }
   }
}
