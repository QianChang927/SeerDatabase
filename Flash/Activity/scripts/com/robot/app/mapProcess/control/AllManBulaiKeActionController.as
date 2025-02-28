package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class AllManBulaiKeActionController
   {
      
      protected static var _instance:AllManBulaiKeActionController;
       
      
      private var _taskMC:MovieClip;
      
      public function AllManBulaiKeActionController()
      {
         super();
      }
      
      public static function get instance() : AllManBulaiKeActionController
      {
         return _instance = _instance || new AllManBulaiKeActionController();
      }
      
      public function start() : void
      {
         if(BufferRecordManager.getMyState(1007) == true)
         {
            MapListenerManager.add(MapManager.currentMap.depthLevel["allManBulaikeBtn"],this.openPanelHandler,"全民布莱克行动！");
         }
         else
         {
            StoryLoaderManager.insatnce.swfName = "map_507_0";
            StoryLoaderManager.insatnce.setloaderHandler = this.getStoryMCHanlder;
         }
      }
      
      public function fightMaoQiuHandler() : void
      {
         FightManager.fightOgre(859);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverMaoQiuHandler);
      }
      
      private function onFightOverMaoQiuHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverMaoQiuHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            Alarm.show("物攻学习力提升5点！迈迪文获得10000经验。");
         }
      }
      
      public function fightJiDuHandler() : void
      {
         FightManager.fightOgre(805);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverJuDuHandler);
      }
      
      public function fightRuoHuaBoos() : void
      {
         FightManager.fightWithBoss("布莱克",2);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverRuoHuaHandler);
      }
      
      private function onFightOverRuoHuaHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverRuoHuaHandler);
      }
      
      private function onFightOverJuDuHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverJuDuHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            Alarm.show("速度学习力提升5点！迈迪文获得10000经验；");
         }
      }
      
      private function openPanelHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86067741);
         ModuleManager.showModule(ClientConfig.getAppModule("AllManBuLaiKePanel"));
      }
      
      private function getStoryMCHanlder(param1:MovieClip) : void
      {
         this._taskMC = param1;
         this._taskMC.visible = false;
         MapListenerManager.add(MapManager.currentMap.depthLevel["allManBulaikeBtn"],this.startStory,"全民布莱克行动！");
      }
      
      private function startStory(param1:MouseEvent = null) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.SUOLANTE,["最近星系能量异常，布莱克出现了弱化的情况。你愿意与我一起守护布莱克吗？"],["守护布莱克！","我没有时间！"],[function():void
         {
            KTool.hideMapAllPlayerAndMonster();
            hideOtherBtns();
            _taskMC.visible = true;
            SocketConnection.send(1022,86067739);
            TaskDiaLogManager.single.playStory(preStroyLine,function():void
            {
               SocketConnection.send(1022,86067740);
               showOtherBtns();
               _taskMC.visible = false;
               KTool.showMapAllPlayerAndMonster();
               BufferRecordManager.setMyState(1007,true);
               MapManager.currentMap.depthLevel["allManBulaikeBtn"].visible = true;
               MapListenerManager.add(MapManager.currentMap.depthLevel["allManBulaikeBtn"],openPanelHandler,"全民布莱克行动！");
               ModuleManager.showModule(ClientConfig.getAppModule("AllManBuLaiKePanel"));
            });
         }]);
      }
      
      private function hideOtherBtns() : void
      {
         MapManager.currentMap.depthLevel["allManBulaikeBtn"].visible = false;
         MapManager.currentMap.controlLevel["bulaikeNPC"].visible = false;
         MapManager.currentMap.controlLevel["suolante"].visible = false;
      }
      
      private function showOtherBtns() : void
      {
         MapManager.currentMap.depthLevel["allManBulaikeBtn"].visible = true;
         MapManager.currentMap.controlLevel["bulaikeNPC"].visible = true;
         MapManager.currentMap.controlLevel["suolante"].visible = true;
      }
      
      protected function get preStroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_NEW,["毁灭之神——莫迪西斯？"],["记性不错啊！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MODIXISI,["战神联盟的联盟审判的确能量巨大！但是只要让你们分开，就可以一个个的击败你们！"],["可笑。"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_NEW,["你未免太小看战神联盟了！就凭你？"],["来吧，布莱克！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,2,"mc2"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["没想到泰坦星系的毁灭之神——莫迪西斯竟然会如此卑鄙！"],["是迈迪文。"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["迈迪文，快来帮助布莱克！"],["你们太自信了！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MODIXISI,["你们以为现在弱化的布莱克会是我的对手？ "],["那就拿出你的本事吧！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,3,"mc3"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好险！还好索兰特与迈迪文及时发出能量！迈迪文你怎么会突然出现在这里？"],["是玛法里奥。"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["是玛法里奥重塑了我！泰坦星系的能量异常，必定会引发一系列的阴谋。我们必须一一击破！"],["有道理！"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["但是现在当务之急应该先帮助布莱克。布莱克出现能量弱化，情况不容乐观！"],["是的！"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,4,"mc4"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLANTE,["布莱克的弱化是因为收到了神域结界的反噬！看来只有挑战他，才能将它受到的反噬效果消除！"],["放心吧！"]);
         var _loc15_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["有我和迈迪文在这里！一切困难都会迎刃而解！ "],["谢谢大家！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_];
      }
   }
}
