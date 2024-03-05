package com.robot.core.info.userItem
{
   public class CountermarkType
   {
      
      public static const MARK_IS_COMMON_ABLITY:int = 0;
      
      public static const MARK_IS_SKILL:int = 1;
      
      public static const MARK_IS_UNIVERSAL:int = 3;
      
      public static const MARK_IS_PIECE:int = 4;
      
      public static const MARK_IS_QUAN_XIAO:int = 55;
      
      public static const HOLE_IS_ABILITY:int = 0;
      
      public static const HOLE_IS_SKILL:int = 1;
      
      public static const HOLE_IS_COMMON:int = 2;
      
      public static const POS_IS_BAG:int = 0;
      
      public static const POS_IS_WILD:int = 1;
      
      public static const POS_IS_STORAGE:int = 2;
       
      
      public function CountermarkType()
      {
         super();
      }
      
      public static function isAbilityMark(param1:int) : Boolean
      {
         return param1 == MARK_IS_COMMON_ABLITY || param1 == MARK_IS_UNIVERSAL;
      }
      
      public static function isSkillMark(param1:int) : Boolean
      {
         return param1 == MARK_IS_SKILL;
      }
   }
}
