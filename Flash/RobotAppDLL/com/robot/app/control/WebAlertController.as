package com.robot.app.control
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.protectSys.ProtectSystem;
   import com.robot.core.config.UpdateConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import flash.external.ExternalInterface;
   
   public class WebAlertController
   {
       
      
      public function WebAlertController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(ExternalInterface.available)
         {
            ExternalInterface.addCallback("getAlertString",getAlertString);
            if(MainManager.isNewUser)
            {
               LinkToUrlManager.getSession(function(param1:String):void
               {
                  ExternalInterface.call("confirmInitUrl","http://web.2125.com/ddt/quick.html?sid=35&gameid=106&uid=" + MainManager.actorID + "&sessionid=" + param1);
               },106);
               SystemTimerManager.addTickFun(updateJsEvent);
            }
            else
            {
               ExternalInterface.call("confirmInitLocal");
            }
         }
      }
      
      public static function getAlertString() : String
      {
         var _loc1_:* = "";
         if(MainManager.isNewUser)
         {
            if(ProtectSystem.onlineTime <= 300)
            {
               _loc1_ = "★来2125玩弹弹堂吧。\n★弹弹堂II集结号已经吹响啦！召唤旧日的勇士，神宠全面现世，全新玩法等你来体验。\n★点击“确定”，即刻开始弹弹堂！\n";
            }
            else
            {
               _loc1_ = "★你的米米号是：" + MainManager.actorID + "\n★米米号是登陆赛尔号的唯一账号，一定要记录下来哦！\n";
            }
         }
         else if(UpdateConfig.activeAlert)
         {
            _loc1_ = String(UpdateConfig.activeString);
         }
         else
         {
            _loc1_ = getDailyString();
         }
         return _loc1_;
      }
      
      private static function getDailyString() : String
      {
         var _loc1_:* = "";
         if(MainManager.actorInfo.dailyResArr[26] < 20)
         {
            _loc1_ = _loc1_ + "★" + (20 - MainManager.actorInfo.dailyResArr[26]) + "次精灵大乱斗未完成（获得大量经验）\n";
         }
         if(MainManager.actorInfo.dailyResArr[80] < 4)
         {
            _loc1_ = _loc1_ + "★" + (4 - MainManager.actorInfo.dailyResArr[80]) + "个陨石宝箱没有领取（免费获得各种奖励）\n";
         }
         if(MainManager.actorInfo.dailyResArr[171] < 2)
         {
            _loc1_ = _loc1_ + "★" + (2 - MainManager.actorInfo.dailyResArr[171]) + "次精灵修炼未使用（免费提升精灵个体值）\n";
         }
         var _loc2_:uint = 0;
         if(TasksManager.getTaskStatus(437) != TasksManager.COMPLETE)
         {
            _loc2_ += 2;
         }
         if(TasksManager.getTaskStatus(438) != TasksManager.COMPLETE)
         {
            _loc2_ += 2;
         }
         if(_loc2_ > 0)
         {
            _loc1_ = _loc1_ + "★" + _loc2_ + "个愿景石没有领取（免费获得钻石道具奖励）\n";
         }
         return _loc1_ + "★" + "12:00-15:00是三倍经验时段（训练精灵时获得的经验翻倍）\n";
      }
      
      private static function updateJsEvent() : void
      {
         if(ProtectSystem.onlineTime > 300)
         {
            if(ExternalInterface.available)
            {
               ExternalInterface.call("confirmInitLocal");
            }
            SystemTimerManager.removeTickFun(updateJsEvent);
         }
      }
   }
}
