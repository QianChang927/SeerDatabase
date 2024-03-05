package com.robot.core.info.fightInfo
{
   public class PetFightModel
   {
      
      public static const SINGLE_MODE:uint = 1;
      
      public static const MULTI_MODE:uint = 2;
      
      public static const PET_MELEE:uint = 3;
      
      public static const DARK_FIGHT:uint = 4;
      
      public static const PET_TOPLEVEL:uint = 5;
      
      public static const PET_ELMENT_FIGHT:uint = 6;
      
      public static const FIGHT_DEMON_SPACE:uint = 7;
      
      public static const BATTLE_LAB:uint = 8;
      
      public static const LUCKY_BATTLE:uint = 9;
      
      public static const FIGHT_ARENA:uint = 10;
      
      public static const CORE_FIGHT:uint = 11;
      
      public static const IMAGE_FIGHT:uint = 12;
      
      public static const TOP_WAR_BEYOND:uint = 13;
      
      public static const HIGHER_FIGHT:uint = 14;
      
      public static const GOLDEN_PALACE_FIGHT:uint = 15;
      
      public static const FANTASY_PET_MELEE:uint = 16;
      
      public static const REFRACTIVE_MAGIC:uint = 17;
      
      public static const PET_MELEE_FIGHT_BOSS:uint = 18;
      
      public static const PET_TRY_FIGHT:uint = 19;
      
      public static const PET_TOPLEVEL_NEW:uint = 20;
      
      public static const CATCH_LENNY_GAME:uint = 21;
      
      public static const PEAK_JIHAD_FREE:uint = 22;
      
      public static const PEAK_JIHAD_3V3:uint = 23;
      
      public static const GOBLINKING_BATTLE:uint = 24;
      
      public static const DOOM_FIGHT:uint = 25;
      
      public static const SHOW_ROUND:uint = 26;
      
      public static const PEAK_JIHAD_6V6:uint = 27;
      
      public static const PEAK_JIHAD_FREE_PLAN:uint = 28;
      
      public static const PEAK_JIHAD_6V6_JJ:uint = 29;
      
      public static const WIZARDKING_BIGFIGHT:uint = 30;
      
      public static const QINGLONG_COMPLELETE_FIGHT:uint = 83;
      
      public static const PEAK_JIHAD_FIGHT_WITH_FIGURE:uint = 87;
      
      public static const PEAK_JIHAD_BIG_MELEE:uint = 88;
      
      public static const PEAK_JIHAD_LIMIT_AC:uint = 999;
      
      public static const FIGHT_WITH_NPC:uint = 0;
      
      public static const FIGHT_WITH_BOSS:uint = 1;
      
      public static const FIGHT_WITH_PLAYER:uint = 2;
      
      public static var mode:uint = MULTI_MODE;
      
      public static var _type:uint;
      
      public static var _status:uint;
      
      private static var _enemyName:String = "";
      
      private static var _enemyId:int = 0;
      
      public static var defaultNpcID:uint;
      
      public static var isInit:Boolean = true;
      
      public static var canEscape:Boolean = true;
       
      
      public function PetFightModel()
      {
         super();
      }
      
      public static function get enemyName() : String
      {
         return _enemyName;
      }
      
      public static function set enemyName(param1:String) : void
      {
         _enemyName = param1;
      }
      
      public static function get enemyId() : int
      {
         return _enemyId;
      }
      
      public static function set enemyId(param1:int) : void
      {
         _enemyId = param1;
      }
      
      public static function get type() : int
      {
         return _type;
      }
      
      public static function set type(param1:int) : void
      {
         _type = param1;
      }
      
      public static function get status() : int
      {
         return _status;
      }
      
      public static function set status(param1:int) : void
      {
         _status = param1;
      }
   }
}
