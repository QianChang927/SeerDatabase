package com.robot.app.npc.npcClass
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.userHoldParty.PartyMapManager;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   
   public class NpcClass_106
   {
       
      
      public function NpcClass_106()
      {
         super();
      }
      
      public static function start() : void
      {
         var date:Date;
         var t:uint = 0;
         PartyMapManager.setup();
         PartyMapManager.checkTime();
         date = SystemTimerManager.sysDate;
         if(date.hours >= 22 || date.hours < 6)
         {
            NpcDialog.show(NPC.JILIGUALA,["嗨，找我有什么事情？如果想举办属于自己的派对的话，每天0xff0000 6:00--21:00 0x000000再来吧！"],["好的！"]);
         }
         else
         {
            t = setTimeout(function():void
            {
               if(Boolean(PartyMapManager.isHost) && PartyMapManager.serverID == MainManager.serverID)
               {
                  NpcDialog.show(NPC.JILIGUALA,["嗨，找我有什么事情？我可以帮你举办只属于你的派对活动哦！"],["进入我的派对！","下次再说吧。"],[function():void
                  {
                     MapManager.changeMap(28);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.JILIGUALA,["HI~我是叽里呱啦~~很高兴认识你！"],["我也是哦！"]);
               }
               clearTimeout(t);
            },1000);
         }
      }
   }
}
