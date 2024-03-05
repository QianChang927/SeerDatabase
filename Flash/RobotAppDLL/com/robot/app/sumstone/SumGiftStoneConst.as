package com.robot.app.sumstone
{
   public class SumGiftStoneConst
   {
      
      public static const XML_URL:String = "resource/xml/sumgift_stone.xml";
      
      public static const LOCAL_DATA_NAME:String = "SummerGiftStoneMovie";
      
      public static const LOCAL_DATA_NULL:int = 0;
      
      public static const LOCAL_DATA_MOVIE:int = 1;
      
      public static const LOCAL_DATA_PANEL:int = 2;
      
      public static const PANEL_NAME_STONE:String = "SummerGiftStone";
      
      public static const PANEL_NAME_SIGN:String = "SummerGiftSign";
      
      public static const PANEL_NAME_PET_BAG:String = "ADPetBagPanelNew";
      
      public static const PANEL_NAME_PET_EXP:String = "ExpAdmPanel";
      
      public static const COMMAND_ID_STONE:uint = 42502;
      
      public static const COMMAND_TYPE_EVOLVE:int = 1;
      
      public static const COMMAND_TYPE_SIGN:int = 2;
      
      public static const COMMAND_ID_UPGRADE:uint = 43076;
      
      public static const COMMAND_TYPE_UPGRADE:int = 91;
      
      public static const BOSS_NUM_PER:int = 5;
      
      public static const DAILY_TYPE_FIGHT_NUM:int = 16512;
      
      public static const FOREVER_TYPE_FIGHT_PROCESS:int = 6514;
      
      public static const FOREVER_TYPE_SIGN_DAYS:int = 6515;
      
      public static const FOREVER_TYPE_REWARD_STATUS:int = 6517;
      
      public static const INITIALIZE_STEP_NULL:int = 0;
      
      public static const INITIALIZE_STEP_STONE:int = 1;
      
      public static const INITIALIZE_STEP_SIGN:int = 2;
      
      public static const ALARM_TYPE_SUCC:int = 0;
      
      public static const ALARM_TYPE_NULL:int = 1;
      
      public static const ALARM_TYPE_MODULE:int = 2;
      
      public static const MONSTER_ID_JAGU:uint = 2446;
      
      public static const STAT_TITLE:String = "豆龙分支进化";
      
      public static const STAT_STYLE_OPEN:String = "打开主面板";
      
      public static const STAT_STYLE_FIGHT:String = "挑战BOSS：bossId = ";
      
      public static const STAT_STYLE_FINISH:String = "一键完成：stepId = ";
      
      public static const STAT_STYLE_WIN:String = "战胜：bossId = ";
      
      public static const STAT_STYLE_REQUIRE:String = "请求进化岩石豆龙";
      
      public static const STAT_STYLE_SUCCESSFUL:String = "岩石豆龙进化成功";
      
      public static const STAT_STYLE_BUY_STONE:String = "购买岩石豆龙";
      
      public static const STAT_STYLE_SIGN:String = "打开签到面板";
      
      public static const STAT_STYLE_GET_REWARD:String = "领取签到奖励，奖励ID:";
      
      public static const STAT_STYLE_REPLENISH:String = "补签";
       
      
      public function SumGiftStoneConst()
      {
         super();
      }
      
      public static function GetSignRewardCommandType(param1:int) : int
      {
         return param1 + 2;
      }
   }
}
