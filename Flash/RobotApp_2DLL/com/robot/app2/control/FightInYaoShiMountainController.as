package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   
   public class FightInYaoShiMountainController
   {
      
      private static var _btnIndex:uint;
      
      private static var _bossIndex:uint;
      
      private static const MAP_ID_1:int = 10515;
      
      private static const MAP_ID_2:int = 10516;
      
      private static const BOUNUS_ID:int = 537;
      
      private static const REGION:Array = [1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284];
      
      private static const FOREVER_ID:Array = [3160,3161,3162];
       
      
      public function FightInYaoShiMountainController()
      {
         super();
      }
      
      public static function preTask() : void
      {
         NpcDialog.show(NPC.AOLUONAER,[MainManager.actorInfo.formatNick + "，你敢来到妖石山挑战魔灵王！我要与你决战，让你有去无回！"],["向邪恶势力开战！","你认错人了！"],[function():void
         {
            MapManager.changeLocalMap(MAP_ID_1);
         }]);
      }
      
      public static function onClick() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FightInYaoShiMountainMainPanel"));
      }
      
      public static function dispatch(param1:int) : void
      {
         var index:int = param1;
         _btnIndex = index;
         if(MapManager.currentMap.id == MAP_ID_2)
         {
            startFightOne(index);
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            startFightOne(index);
         });
         MapManager.changeLocalMap(MAP_ID_2);
      }
      
      private static function startFightOne(param1:int) : void
      {
         var index:int = param1;
         var num:uint = uint(index + 1);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,num,"mc1_" + num]);
         TaskDiaLogManager.single.playStory([mod1],function():void
         {
            _bossIndex = 0;
            addBossListener();
         });
      }
      
      private static function addBossListener() : void
      {
         (taskMc["boss1"] as SimpleButton).addEventListener(MouseEvent.CLICK,onClickBoss);
         (taskMc["boss2"] as SimpleButton).addEventListener(MouseEvent.CLICK,onClickBoss);
         (taskMc["boss3"] as SimpleButton).addEventListener(MouseEvent.CLICK,onClickBoss);
      }
      
      private static function removeBossListener() : void
      {
         (taskMc["boss1"] as SimpleButton).removeEventListener(MouseEvent.CLICK,onClickBoss);
         (taskMc["boss2"] as SimpleButton).removeEventListener(MouseEvent.CLICK,onClickBoss);
         (taskMc["boss3"] as SimpleButton).removeEventListener(MouseEvent.CLICK,onClickBoss);
      }
      
      private static function onClickBoss(param1:MouseEvent) : void
      {
         removeBossListener();
         var _loc2_:String = param1.currentTarget.name as String;
         BonusController.addIgnore(BOUNUS_ID);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         FightManager.fightNoMapBoss("",REGION[5 * _btnIndex + _bossIndex]);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var obj:Object = null;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            obj = new Object();
            obj.boss = _bossIndex;
            obj.callback = nextFight;
            obj.type = _btnIndex;
            ModuleManager.showModule(ClientConfig.getAppModule("FightInYaoShiMountainAwardPanel"),"正在打开...",obj);
         }
         else
         {
            SocketConnection.sendWithCallback(CommandID.FIGHT_IN_YAOSHI_MOUNTAIN,function(param1:SocketEvent):void
            {
               MapManager.changeMap(990);
            },2,_btnIndex + 1);
         }
      }
      
      private static function nextFight(param1:uint) : void
      {
         var mod1:TaskMod = null;
         var mod2:TaskMod = null;
         var mod3:TaskMod = null;
         var mod4:TaskMod = null;
         var index:uint = param1;
         switch(index)
         {
            case 1:
               mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc2"]);
               TaskDiaLogManager.single.playStory([mod1],function():void
               {
                  _bossIndex = 1;
                  addBossListener();
               });
               break;
            case 2:
               mod2 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc3"]);
               TaskDiaLogManager.single.playStory([mod2],function():void
               {
                  _bossIndex = 2;
                  addBossListener();
               });
               break;
            case 3:
               mod3 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc4"]);
               TaskDiaLogManager.single.playStory([mod3],function():void
               {
                  _bossIndex = 3;
                  addBossListener();
               });
               break;
            case 4:
               mod4 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,7,"mc5"]);
               TaskDiaLogManager.single.playStory([mod4],function():void
               {
                  _bossIndex = 4;
                  addBossListener();
               });
         }
      }
      
      public static function get taskMc() : MovieClip
      {
         return MapManager.currentMap.controlLevel["animationContainer"];
      }
   }
}
