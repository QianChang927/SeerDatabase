package com.robot.app.mapProcess.control
{
   import com.robot.core.CommandID;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class LimitRuleController
   {
      
      public static var inFight:Boolean = false;
       
      
      public function LimitRuleController()
      {
         super();
      }
      
      public static function onStart() : void
      {
         SocketConnection.addCmdListener(CommandID.LIMIT_RULE_START,function():void
         {
            SocketConnection.removeCmdListener(CommandID.LIMIT_RULE_START,arguments.callee);
            SocketConnection.send(CommandID.ACTIVEACHIEVE,91);
            MapManager.changeMap(798);
            inFight = true;
            NonoManager.nonoGoHome();
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
            {
               if(MapManager.currentMap.id != 798)
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                  SocketConnection.addCmdListener(CommandID.LIMIT_RULE_OVER,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(CommandID.LIMIT_RULE_OVER,arguments.callee);
                     var _loc3_:ByteArray = param1.data as ByteArray;
                     _loc3_.position = 0;
                     var _loc4_:int = int(_loc3_.readUnsignedInt());
                     var _loc5_:int = int(_loc3_.readUnsignedInt());
                     Alarm.show("恭喜你获得了" + _loc4_ + "点梦幻点数和" + _loc5_ + "个赛尔豆！");
                  });
                  SocketConnection.send(CommandID.LIMIT_RULE_OVER);
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
                  inFight = false;
               }
            });
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         });
         SocketConnection.send(CommandID.LIMIT_RULE_START);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         if((param1.dataObj as FightOverInfo).winnerID != MainManager.actorID)
         {
            MapManager.changeMap(793);
            Alarm.show("非常遗憾，你失败了，想要挑战极限法则需要重新开始哦！");
         }
      }
   }
}
