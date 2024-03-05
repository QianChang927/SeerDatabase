package com.robot.app.sumfire
{
   public class SumGiftFireConst
   {
      
      public static const MONSTER_ID_JAGU:uint = 2446;
      
      public static const ITEM_ID_HOLY_WATER:uint = 1701960;
      
      public static const ITEM_SHOW_MAX:int = 9999;
      
      public static const XML_PATH:String = "resource/xml/sumgift_fire.xml";
      
      public static const LOCAL_DATA_NAME:String = "SummerGiftFireMovie";
      
      public static const LOCAL_DATA_NULL:int = 0;
      
      public static const LOCAL_DATA_MOVIE:int = 1;
      
      public static const LOCAL_DATA_PANEL:int = 2;
      
      public static const SYS_ID_AWAKEN:int = 1;
      
      public static const SYS_ID_RESCUE:int = 2;
      
      public static const SYS_ID_FIRE:int = 3;
      
      public static const PANEL_NAME_FIRE:String = "SummerGiftFire";
      
      public static const PANEL_NAME_AWAKEN:String = "SumGiftFireAwaken";
      
      public static const PANEL_NAME_RESCUE:String = "SumGiftFireRescue";
      
      public static const PANEL_NAME_HOLY_WATER:String = "SumGiftFireHolyWater";
      
      public static const PANEL_NAME_PET_BAG:String = "ADPetBagPanelNew";
      
      public static const PANEL_NAME_SUN_OF_DEIVL:String = "AneisiActivatePanel";
      
      public static const MAP_ID_MASTER_OF_DEIVL:int = 1019;
      
      public static const COMMAND_ID_INJECT:uint = 41516;
      
      public static const COMMAND_ID_UPGRADE:uint = 43076;
      
      public static const COMMAND_TYPE_UPGRADE:int = 99;
      
      public static const FOREVER_ID_INJECTIONS_OF_AWAKEN:uint = 1527;
      
      public static const FOREVER_ID_INJECTIONS_OF_RESCUE:uint = 1528;
      
      public static const FOREVER_ID_FIGHT_RPOC_OF_FIRE:uint = 1529;
      
      public static const DAILY_ID_FIGHT_NUM_OF_FIRE:uint = 11512;
      
      public static const DAILY_ID_FIGHT_NUM_OF_AWAKEN:uint = 11513;
      
      public static const DAILY_ID_FIGHT_NUM_OF_RESCUE:uint = 11515;
      
      public static const DAILY_ID_FIGHT_PROC_OF_RESCUE:uint = 11514;
      
      public static const BITBUF_ID_HAS_GOTTEN_FIRE:uint = 8010;
      
      public static const BITBUT_ID_HAS_WEAKENED:uint = 8009;
      
      public static const EVENT_TYPE_BUY_HOLY_WATER:String = "BuyHolyWater";
      
      public static const EVENT_TYPE_HIDE_HOLY_WATER:String = "CloseHolyWater";
       
      
      public function SumGiftFireConst()
      {
         super();
      }
      
      public static function GetModuleBySysId(param1:int) : String
      {
         switch(param1)
         {
            case SYS_ID_AWAKEN:
               return PANEL_NAME_AWAKEN;
            case SYS_ID_RESCUE:
               return PANEL_NAME_RESCUE;
            case SYS_ID_FIRE:
               return PANEL_NAME_FIRE;
            default:
               return PANEL_NAME_FIRE;
         }
      }
      
      public static function GetAllIDs() : Array
      {
         return [FOREVER_ID_INJECTIONS_OF_AWAKEN,FOREVER_ID_INJECTIONS_OF_RESCUE,FOREVER_ID_FIGHT_RPOC_OF_FIRE,DAILY_ID_FIGHT_NUM_OF_FIRE,DAILY_ID_FIGHT_NUM_OF_AWAKEN,DAILY_ID_FIGHT_NUM_OF_RESCUE,DAILY_ID_FIGHT_PROC_OF_RESCUE];
      }
      
      public static function GetBitBufIDs() : Array
      {
         return [BITBUF_ID_HAS_GOTTEN_FIRE,BITBUT_ID_HAS_WEAKENED];
      }
   }
}
