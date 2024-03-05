package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.sptStar.KaxiusiController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.task.taskscollection.Task616;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public class KaXiuSiActionController
   {
      
      protected static var _instance:com.robot.app.control.KaXiuSiActionController;
       
      
      private var _taskMC:MovieClip;
      
      public function KaXiuSiActionController()
      {
         super();
      }
      
      public static function get instance() : com.robot.app.control.KaXiuSiActionController
      {
         return _instance = _instance || new com.robot.app.control.KaXiuSiActionController();
      }
      
      public function start() : void
      {
         if(BufferRecordManager.getMyState(990) == false)
         {
            StoryLoaderManager.insatnce.swfName = "map_484_0";
            StoryLoaderManager.insatnce.setloaderHandler = this.getStoryMCHanlder;
            (MapManager.currentMap.controlLevel["allManBtn"] as SimpleButton).visible = false;
         }
         else
         {
            (MapManager.currentMap.controlLevel["allManBtn"] as SimpleButton).visible = true;
            MapListenerManager.add(MapManager.currentMap.controlLevel["allManBtn"],function():void
            {
               SocketConnection.send(1022,86067375);
               ModuleManager.showModule(ClientConfig.getAppModule("AllManKaXiuSiPanel"),"正在打开全民卡修斯面板");
            });
         }
      }
      
      public function fightCatchSprite() : void
      {
         FightManager.fightWithNpc(2);
      }
      
      public function fightBossSprite() : void
      {
         FightManager.fightWithBoss("卡修斯",1);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
      }
      
      private function onFightOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
      }
      
      private function getStoryMCHanlder(param1:MovieClip) : void
      {
         this._taskMC = param1;
         MapListenerManager.add(this._taskMC,this.onClickHandler,"全民卡修斯行动！巧克利超进化！");
      }
      
      private function onClickHandler(param1:MouseEvent = null) : void
      {
         this.startStory();
      }
      
      protected function addEvents() : void
      {
      }
      
      private function startStory() : void
      {
         NpcDialog.show(NPC.QIAOKELI,["怀特星已经开始全面超进化啦！只要帮助我超进化，就能够挑战0xff0000弱化25%的卡修斯！0xffffff你会帮助我吗？"],["我一定会帮助你的！","我不想帮助你！"],[function():void
         {
            SocketConnection.send(1022,86067373);
            KTool.hideMapAllPlayerAndMonster();
            (MapManager.currentMap.controlLevel["difute"] as MovieClip).visible = false;
            if(KaxiusiController.pet != null)
            {
               KaxiusiController.pet.visible = false;
            }
            if(Task616._falseNpc != null)
            {
               Task616._falseNpc.visible = false;
            }
            TaskDiaLogManager.single.playStory(preStroyLine,function():void
            {
               SocketConnection.send(1022,86067374);
               (MapManager.currentMap.controlLevel["difute"] as MovieClip).visible = true;
               if(KaxiusiController.pet != null)
               {
                  KaxiusiController.pet.visible = true;
               }
               if(Task616._falseNpc != null)
               {
                  Task616._falseNpc.visible = true;
               }
               KTool.showMapAllPlayerAndMonster();
               BufferRecordManager.setMyState(990,true);
               _taskMC.gotoAndStop(1);
               ModuleManager.showModule(ClientConfig.getAppModule("AllManKaXiuSiPanel"));
               _taskMC.visible = false;
               MapManager.currentMap.controlLevel.removeChild(_taskMC);
               (MapManager.currentMap.controlLevel["allManBtn"] as SimpleButton).visible = true;
               MapListenerManager.add(MapManager.currentMap.controlLevel["allManBtn"],function():void
               {
                  SocketConnection.send(1022,86067375);
                  ModuleManager.showModule(ClientConfig.getAppModule("AllManKaXiuSiPanel"),"正在打开全民卡修斯面板");
               });
            });
         }]);
      }
      
      protected function get preStroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,2,"mc2"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["没想到索伦森在怀特星做了这么多手脚。整个星球的能量都变得十分异常。"],["所以紧急召你回来！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DIFUTE,["据我观察，最近巧克利体内的能量变得很不稳定，我们不能眼睁睁的看着她们受折磨！"],["我一定会帮助她的。"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["算我一份！只要我们帮得上忙，有什么需要尽管说。"],["谢谢你们！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,3,"mc3"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.FUSITE,["我们没时间跟你们在这里玩射击游戏！卡修斯，告诉你，整个星球的能量都开始异动了！"],["看来是你们做的！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["你们到底想怎么样？有什么直接挑战我，不要伤害这里的精灵！"],["哈哈哈！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELEER,["还真是重情重义啊！不过可惜了，马上巧克利就会听命于我们了！"],["可恶！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,4,"mc4"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["可恶，竟然被他们给跑了！我们怎么办？巧克利真的变成我们的敌人吗？"],["我们不能坐以待毙！"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DIFUTE,["卡修斯，我们必须帮助巧克利！帮助她顺利超进化，度过难关！"],["我一定会全力以赴！"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我也会的！不能让邪恶势力的阴谋得逞！"],["谢谢你！"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,5,"mc5"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我一定会竭尽全力帮助巧克利顺利超进化。不会被邪恶的能量控制！相信我！"],["嗯！你一定可以的！"]);
         var _loc15_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,[MainManager.actorInfo.formatNick + "我相信你一定可以的！怀特星就拜托你啦！"],["放心吧！"]);
         var _loc16_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,6,"mc6"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_];
      }
   }
}
