package com.robot.core.manager
{
   import com.robot.core.config.xml.StatFilterXMLInfo;
   import com.robot.core.net.SocketConnection;
   import org.taomee.stat.StatisticsManager;
   
   public class StatManager
   {
      
      public static const USER_CHARACTER:String = "用户个性";
      
      public static const RUN_ACT:String = "2014运营活动";
      
      public static const MAIN_TASK:String = "2014主线";
      
      public static const SYSTEM:String = "系统";
      
      public static const PAY_ANTIAO:String = "大按条";
      
      public static const PAY_MONTH:String = "包月";
      
      public static const TIME_NEWS:String = "时报";
      
      public static const VIP:String = "VIP";
      
      public static const RUN_ACT_2015:String = "2015运营活动";
      
      {
         initialize();
      }
      
      public function StatManager()
      {
         super();
      }
      
      private static function initialize() : void
      {
         StatisticsManager.setup(2);
      }
      
      public static function sendNormalStat(param1:uint) : void
      {
         SocketConnection.send(1022,param1);
      }
      
      public static function sendStat2014(param1:String, param2:String, param3:String = "") : void
      {
         if(StatFilterXMLInfo.checkExcluded(param1,param2,param3))
         {
            return;
         }
         if(param3 == "")
         {
            StatisticsManager.sendHttpStat(param1,param2,null,MainManager.actorID);
         }
         else
         {
            StatisticsManager.sendHttpStat(param3,param1,param2,MainManager.actorID);
         }
      }
      
      public static function sendTodayRegStat(param1:uint) : void
      {
         if(MainManager.actorInfo.isRegToday)
         {
            sendNormalStat(param1);
         }
      }
      
      public static function sendPetStat(param1:uint, param2:uint = 100) : void
      {
         if(MainManager.actorInfo.petMaxLev < param2)
         {
            sendNormalStat(param1);
         }
      }
   }
}
