package com.robot.app.midautumn
{
   public class MidAutumnGiftConst
   {
      
      public static const XML_URL:String = "xml/midautumn_gift.xml";
      
      public static const PANEL_NAME_MAIN:String = "MidAutumnGiftMain";
      
      public static const PANEL_NAME_MOONCAKE:String = "MakeMoonCakePanel";
      
      public static const PANEL_NAME_REWARD:String = "GetRewardPanel";
      
      public static const COMMAND_ID_GET_COOKIE:uint = 44075;
      
      public static const COMMAND_TYPE_GET_ONLINE_REWARD:int = 1;
      
      public static const COMMAND_TYPE_SYNC_ONLINE_TIME:int = 2;
      
      public static const COMMAND_TYPE_GET_MATERIAL:int = 3;
      
      public static const COMMAND_TYPE_GET_REWARD:int = 4;
      
      public static const COMMAND_TYPE_GET_BIG_REWARD:int = 5;
      
      public static const DAILY_ONLINE_TIME:uint = 10542;
      
      public static const DAILY_GET_REWARD_TIMES:uint = 10543;
      
      public static const DAILY_GET_MATERIAL_TIMES:uint = 10544;
      
      public static const DAILY_HAVE_PLAYED_COOKIES:uint = 10545;
      
      public static const DAILY_HAVE_GOTTEN_BIG_REWARD:uint = 10546;
      
      public static const FOREVER_HAVE_GOTTEN_COOKIE:uint = 983;
      
      public static const FOREVER_PLAY_COOKIE_CD:uint = 986;
      
      public static const FOREVER_LEFT_TIMES_OF_REWARD:uint = 985;
      
      public static const ITEM_ID_MATERIAL_CRUST:int = 1702055;
      
      public static const ITEM_ID_MATERIAL_SWEETENED:int = 1702056;
      
      public static const ITEM_ID_MATERIAL_MEAT_FLOSS:int = 1702057;
      
      public static const ITEM_ID_MATERIAL_COCONUT:int = 1702058;
      
      public static const ITEM_ID_MATERIAL_FIVE_KERNEL:int = 1702059;
      
      public static const UI_MOVIE_COLLECT_MATERIAL:String = "makeMoonCakeSucc";
      
      public static const OPEN_FROM_NULL:int = 0;
      
      public static const OPEN_FROM_WIN:int = 1;
      
      public static const OPEN_FROM_LOSE:int = 2;
      
      public static const OPEN_FROM_TIRED:int = 3;
      
      public static const LOCAL_DATA_NAME:String = "MidAutumnGiftRewardLogs";
      
      public static const LOCAL_DATA_MOVIE:String = "MidAutumnGiftPlayedMovie";
       
      
      public function MidAutumnGiftConst()
      {
         super();
      }
      
      public static function GetBigRewardID(param1:int) : int
      {
         return param1 << 8;
      }
      
      public static function GetMaterialID(param1:int) : int
      {
         return param1 << 16;
      }
   }
}
