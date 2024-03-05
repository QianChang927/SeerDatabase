package com.robot.app2.control.activityHelper.actions
{
   public class ActionsMap
   {
      
      public static const ACTIONS_MAP = {
         "cmd":SendCmdAction,
         "buy":BuyItemAction,
         "fullMv":PlayFullMovieAction,
         "exchange":ExchangeAction,
         "alert":AlertAction,
         "send":SendAction,
         "fight":FightAction,
         "tryFight":VirtualFightAction,
         "sendfight":SendFightAction,
         "alarm":AlarmAction,
         "priceAlarm":PriceAlarmAction,
         "petfirst":PetFirtsBagAction,
         "superEvo":SuperEvoAction,
         "talks":PlayTalksAction,
         "petCheckAlarm":PetCheckAlarmAction,
         "itemCheck":ItemCheckAlertAction
      };
       
      
      public function ActionsMap()
      {
         super();
      }
   }
}
