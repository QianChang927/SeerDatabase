package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   
   public class StarMountMakeController
   {
      
      private static const BOSS:Object = {
         "10985":{
            "npc":NPC.JIDU,
            "region":5466,
            "index":1,
            "name":"玫瑰"
         },
         "10986":{
            "npc":NPC.SONGBULA,
            "region":5467,
            "index":2,
            "name":"琥珀"
         },
         "10987":{
            "npc":NPC.GULALA,
            "region":5468,
            "index":3,
            "name":"翡翠"
         }
      };
       
      
      public function StarMountMakeController()
      {
         super();
      }
      
      public static function fight() : void
      {
         var id:String = null;
         id = String(MapManager.currentMap.id.toString());
         NpcDialog.show(BOSS[id].npc,["击败我就可以获得" + BOSS[id].name + "涂料哦，你准备好挑战我了吗？每个小时的0-10分、15-25分、30-40分、45-55分，0xff0000每个时段全服限量1000份哦0xffffff！"],["我准备好了！","让我再准备一下。"],[function():void
         {
            var remain:* = SystemTimerManager.sysBJDate.minutes % 15;
            if(remain > 10)
            {
               Alarm.show("当前不是获得涂料的时间哦！过几分钟再来吧！");
               return;
            }
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               var e:PetFightEvent = param1;
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               if((e.dataObj as FightOverInfo).winnerID != MainManager.actorID)
               {
                  return;
               }
               SocketConnection.sendByQueue(47240,[5,BOSS[id].index],function(param1:*):void
               {
                  var _loc2_:* = (param1.data as ByteArray).readUnsignedInt();
                  if(_loc2_ == 1)
                  {
                     Alarm.show("很遗憾，当前时段所有的涂料均以被其他人获得了，下一个时段记得早些来哦！");
                  }
               });
            });
            FightManager.fightNoMapBoss("",BOSS[id].region);
         }]);
      }
   }
}
