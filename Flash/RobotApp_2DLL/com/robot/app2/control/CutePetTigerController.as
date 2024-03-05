package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm2;
   import flash.geom.Point;
   
   public class CutePetTigerController
   {
      
      private static const SKILL_LIST:Array = [[11125,23746,23745,16795],[11125,23745,23746,20527],[11125,10527,16798,11125],[11125,23745,23746,20527],[16797,23745,23746,20527],[10527,23747,16798,11125],[23745,23746,20527,16799]];
      
      private static const BOSS_LIST:Array = [196,197,198,199,200,201,202];
      
      private static const NAME_LIST:Array = ["特里奥","嘉文特","思科瑞","防御史莱姆"];
      
      private static var _round:uint;
      
      public static var NewGame:Boolean = false;
      
      public static var MAPNum:uint;
      
      public static var NPCPoint:Point;
      
      public static var MAPPoint:Point;
      
      public static var MARK_LIST:Array;
       
      
      public function CutePetTigerController()
      {
         super();
      }
      
      public static function fightBoss(param1:uint, param2:Array) : void
      {
         _round = param1;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOver);
         if(param1 > 0 && Boolean(param2[param1 - 1]))
         {
            FightManager.tryFight(BOSS_LIST[param1 + 3],SKILL_LIST[param1 + 3]);
         }
         else
         {
            FightManager.tryFight(BOSS_LIST[param1],SKILL_LIST[param1]);
         }
      }
      
      public static function startGameFight() : void
      {
         NewGame = false;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,gameFightOver);
         FightManager.fightNoMapBoss("迷宫怪物",3189);
      }
      
      private static function fightOver(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOver);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID && _round == 3)
         {
            Alarm2.show("恭喜你击败了白小虎的战团！快去领取白小虎吧！",function():void
            {
               ModuleManager.showAppModule("CutePetTigerGetPanel");
            });
         }
         else
         {
            ModuleManager.showAppModule("CutePetTigerFightPanel");
         }
      }
      
      private static function gameFightOver(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,gameFightOver);
         ModuleManager.showAppModule("CutePetMazeGamePanel");
      }
   }
}
