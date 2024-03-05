package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.utils.Dictionary;
   
   public class BoerDuoEvolutionController
   {
      
      private static var dic:Dictionary = new Dictionary(true);
      
      {
         dic["boerduo"] = {
            "name":"波尔多",
            "region":1
         };
         dic["boersa"] = {
            "name":"波尔萨",
            "region":2
         };
      }
      
      public function BoerDuoEvolutionController()
      {
         super();
      }
      
      public static function startFight(param1:String) : void
      {
         var name:String = param1;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var info:FightOverInfo;
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            info = e.dataObj as FightOverInfo;
            switch(name)
            {
               case "boerduo":
                  if(info.winnerID == MainManager.actorID)
                  {
                     NpcDialog.show(NPC.BOERDUO,["谢谢你帮助我历练，我感到变得更强了！"],["不用客气！"],[function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("BoErDuoEvolutionPanel"));
                     }]);
                  }
                  else
                  {
                     NpcDialog.show(NPC.BOERDUO,["你的实力还不够啊，我需要强者来帮助我历练！"],["我会继续努力。"]);
                  }
                  break;
               case "boersa":
                  if(info.winnerID == MainManager.actorID)
                  {
                     NpcDialog.show(NPC.BOERSA,["谢谢你的帮助，我终于可以完美掌握现在的力量了！"],["恭喜你了波尔萨！"],[function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("BoErDuoEvolutionPanel"));
                     }]);
                  }
                  else
                  {
                     NpcDialog.show(NPC.BOERSA,["我的进化形态力量很不稳定，看来你的实力不足以让我顺利进化……"],["让我再试试。"],[function():void
                     {
                     }]);
                  }
            }
         });
         FightManager.fightWithBoss(dic[name].name,dic[name].region);
      }
      
      private static function get taskMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["taskmc"];
      }
      
      public static function start() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 49
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
   }
}
