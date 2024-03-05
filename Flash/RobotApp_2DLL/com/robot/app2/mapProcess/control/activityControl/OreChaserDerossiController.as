package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   
   public class OreChaserDerossiController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function OreChaserDerossiController()
      {
         super();
      }
      
      public static function initForMap688(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         (_map.depthLevel["derossi"] as MovieClip).mouseEnabled = false;
         (_map.depthLevel["derossi"] as MovieClip).mouseChildren = false;
         MapListenerManager.add(_map.btnLevel["derossiBtn"],function():void
         {
            SocketConnection.send(1022,86056193);
            ModuleManager.showModule(ClientConfig.getAppModule("OreChaserDerossiMainPanel"));
         },"德罗西");
      }
      
      public static function startFight() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         SocketConnection.send(CommandID.ORECHASER_DEROSSI_FIGHT);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID != MainManager.actorID)
         {
            NpcDialog.show(NPC.DELUOXI,[MainManager.actorInfo.formatNick + "，你真是太弱了，快去收集点我喜爱的矿石吧，说不定我会放你一马哦！"],["好的，马上就去！"]);
         }
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
