package com.robot.app.spt
{
   import com.robot.app.ParseSocketError;
   import com.robot.app.cmd.CoreFightCmdListener;
   import com.robot.app.fight.FightManager;
   import com.robot.app.group.manager.GroupFightInviteManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.group.manager.GroupManager;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.Event;
   
   public class FightBossController
   {
      
      private static const ERROR_CODES:Array = [10033,15502,11069,11021,11011,11009,11048,10010,11026,11059,11035,11027,11028,13045,13083,13085,11038,15153];
      
      private static var _isWin:Boolean = false;
       
      
      public function FightBossController()
      {
         super();
      }
      
      public static function fightBoss(param1:String, param2:uint = 0, param3:uint = 0) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SptBossInfoPanel"),"正在打开",{
            "bossName":param1,
            "index":param2,
            "gIndex":param3
         });
      }
      
      public static function startFight(param1:String, param2:uint = 0, param3:uint = 0) : void
      {
         _isWin = false;
         var _loc4_:int = 0;
         while(_loc4_ < ERROR_CODES.length)
         {
            ParseSocketError.addErrorListener(ERROR_CODES[_loc4_],onEHandler);
            _loc4_++;
         }
         if(GroupManager.isInGroup)
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onGOHandler);
            GroupFightInviteManager.fightWithBoss(param1,param3);
         }
         else
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onOHandler);
            FightManager.fightWithBoss(param1,param2);
         }
      }
      
      private static function onEHandler(param1:Event) : void
      {
         removeEvent();
      }
      
      private static function onOHandler(param1:PetFightEvent) : void
      {
         var _loc2_:Object = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID != MainManager.actorID && CoreFightCmdListener._type == 0)
         {
            Alarm.show("赶快邀请你的好友来，一同击败强大的BOSS吧！");
         }
         removeEvent();
      }
      
      private static function removeEvent() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onGOHandler);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onOHandler);
         var _loc1_:int = 0;
         while(_loc1_ < ERROR_CODES.length)
         {
            ParseSocketError.removeErrorListener(ERROR_CODES[_loc1_],onEHandler);
            _loc1_++;
         }
      }
      
      private static function onGOHandler(param1:PetFightEvent) : void
      {
         removeEvent();
      }
   }
}
