package com.robot.app.sumlight
{
   public class SumGiftLightConst
   {
      
      public static const XML_URL:String = "resource/xml/sumgift_light.xml";
      
      public static const LOCAL_DATA_NAME:String = "SummerGiftLightMovie";
      
      public static const LOCAL_DATA_NULL:int = 0;
      
      public static const LOCAL_DATA_MOVIE:int = 1;
      
      public static const LOCAL_DATA_PANEL:int = 2;
      
      public static const PANEL_NAME_STONE_PREVIE:String = "SummerGiftPreview";
      
      public static const PANEL_NAME_STONE:String = "SummerGiftLight";
      
      public static const PANEL_NAME_SIGN:String = "SumGiftLightSign";
      
      public static const PANEL_NAME_PET_BAG:String = "ADPetBagPanelNew";
      
      public static const PANEL_NAME_PET_EXP:String = "ExpAdmPanel";
      
      public static const COMMAND_ID_STONE:uint = 42502;
      
      public static const COMMAND_TYPE_EVOLVE:int = 11;
      
      public static const COMMAND_TYPE_SIGN:int = 12;
      
      public static const COMMAND_ID_UPGRADE:uint = 43076;
      
      public static const COMMAND_TYPE_UPGRADE:int = 92;
      
      public static const BOSS_NUM_PER:int = 5;
      
      public static const DAILY_TYPE_FIGHT_NUM:int = 16176;
      
      public static const FOREVER_TYPE_FIGHT_PROCESS:int = 6102;
      
      public static const INITIALIZE_STEP_NULL:int = 0;
      
      public static const INITIALIZE_STEP_ALL:int = 1;
      
      public static const ALARM_TYPE_SUCC:int = 0;
      
      public static const ALARM_TYPE_NULL:int = 1;
      
      public static const ALARM_TYPE_MODULE:int = 2;
      
      public static const MONSTER_ID_JAGU:uint = 2446;
      
      public static const STAT_TITLE:String = "豆龙分支进化";
      
      public static const STAT_STYLE_OPEN:String = "打开光翼豆龙主面板";
      
      public static const STAT_STYLE_FIGHT:String = "挑战BOSS：bossId = ";
      
      public static const STAT_STYLE_FINISH:String = "一键完成：stepId = ";
      
      public static const STAT_STYLE_WIN:String = "战胜：bossId = ";
      
      public static const STAT_STYLE_REQUIRE:String = "请求进化光翼豆龙";
      
      public static const STAT_STYLE_SUCCESSFUL:String = "光翼豆龙进化成功";
      
      public static const STAT_STYLE_BUY_STONE:String = "购买光翼豆龙";
      
      public static const STAT_STYLE_SIGN:String = "打开光翼豆龙签到面板";
      
      public static const STAT_STYLE_GET_REWARD:String = "领取签到奖励，奖励ID:";
      
      public static const STAT_STYLE_REPLENISH:String = "补签";
       
      
      public function SumGiftLightConst()
      {
         super();
      }
      
      public static function GetSignRewardCommandType(param1:int) : int
      {
         return param1 + 12;
      }
   }
}
