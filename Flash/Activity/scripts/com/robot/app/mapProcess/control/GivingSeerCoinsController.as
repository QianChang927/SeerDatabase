package com.robot.app.mapProcess.control
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CronTimeVo;
   
   public class GivingSeerCoinsController
   {
      
      public static const TIME_TXT1:String = "2015年1月23日—1月25日，每天13:00-15:00";
      
      public static const TIME_TXT2:String = "2015年1月23日-1月25日";
      
      public static var date1:CronTimeVo = new CronTimeVo("*","13-15","23-25","1","*","2015");
      
      public static var time1:CronTimeVo = new CronTimeVo("0-30","13","*","*","*","*");
      
      public static var time2:CronTimeVo = new CronTimeVo("0-30","14","*","*","*","*");
      
      public static var time3:CronTimeVo = new CronTimeVo("0-30","15","*","*","*","*");
       
      
      public function GivingSeerCoinsController()
      {
         super();
      }
      
      public static function setup() : void
      {
         StatManager.sendStat2014("赛尔豆大放送","进入活动场景","2015运营活动");
         if(date1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
         {
            NpcDialog.show(NPC.SAiERDOUPAIFA,["你好，" + MainManager.actorInfo.formatNick + "！现在是赛尔豆大放送时间！赶紧领取吧！"],["立刻领取","到处逛逛"],[function():void
            {
               ModuleManager.showAppModule("GivingSeerCoinPanel");
            }]);
         }
         else
         {
            NpcDialog.show(NPC.SAiERDOUPAIFA,["你好，" + MainManager.actorInfo.formatNick + "！" + TIME_TXT2 + "起，每天13:00—15:00每个整点就能在我这里领取赛尔豆0xff0000（每人一百万）0xffffff，记得一定要来哦！"]);
         }
      }
      
      public static function destroy() : void
      {
      }
   }
}
