package com.robot.app2.control
{
   import com.robot.core.manager.SystemTimerManager;
   
   public class SuperNoNoAugPartyController
   {
      
      public static var getTime:uint = 10 * 60;
      
      public static var timesWishComplete:uint;
      
      public static var todayWishTimes:uint;
      
      public static var isGetPetBonisi:uint;
      
      public static var isWaitingWished:Boolean;
      
      public static var selectedId:int = 0;
      
      public static const allRewardsTxtArr:Array = [[1,"十万赛尔豆"],[2,"十万经验券"],[3,"免费改造个体"],[4,"免费改造性格"],[5,"免费改造特性"],[6,"注入50点学习力"],[7,"30乐园代币"],[8,"魔焰猩猩刻印"],[9,"丽莎布布刻印"],[10,"鲁斯王刻印"],[11,"船长画像Ω"],[12,"上等体力药剂*20"],[13,"致命能量珠Ω"],[14,"初级永久体力合剂"],[15,"状态解除剂*1"],[16,"战神联盟弱化券*5"]];
       
      
      public function SuperNoNoAugPartyController()
      {
         super();
      }
      
      public static function getRemainTime() : uint
      {
         return getTime;
      }
      
      public static function startCountDownHandler() : void
      {
         getTime = 10 * 60;
         SystemTimerManager.addTickFun(countDownTimerHandler);
      }
      
      private static function countDownTimerHandler() : void
      {
         if(getTime <= 0)
         {
            getTime = 0;
            SystemTimerManager.removeTickFun(countDownTimerHandler);
         }
         else
         {
            --getTime;
         }
      }
   }
}
