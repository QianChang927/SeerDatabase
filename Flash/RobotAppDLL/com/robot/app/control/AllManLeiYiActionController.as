package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.MapProcess_32;
   import com.robot.app.sptStar.LeiyiController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class AllManLeiYiActionController
   {
      
      protected static var _instance:com.robot.app.control.AllManLeiYiActionController;
       
      
      private var _taskMC:MovieClip;
      
      private var _map32:MapProcess_32;
      
      public function AllManLeiYiActionController()
      {
         super();
      }
      
      public static function get instance() : com.robot.app.control.AllManLeiYiActionController
      {
         return _instance = _instance || new com.robot.app.control.AllManLeiYiActionController();
      }
      
      public function start(param1:MapProcess_32) : void
      {
         this._map32 = param1;
         if(BufferRecordManager.getMyState(1012) == true)
         {
            MapListenerManager.add(MapManager.currentMap.depthLevel["allManBtn"],this.openPanelHandler,"");
         }
         else
         {
            StoryLoaderManager.insatnce.swfName = "map_32_0";
            StoryLoaderManager.insatnce.setloaderHandler = this.getStoryMCHanlder;
         }
      }
      
      public function fightLeiYi() : void
      {
         FightManager.fightWithBoss("雷伊",3);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
      }
      
      public function fightBiBiShu() : void
      {
         FightManager.fightOgre(805);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverBiBiShuHandler);
      }
      
      private function onFightOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
      }
      
      private function onFightOverBiBiShuHandler(param1:PetFightEvent) : void
      {
      }
      
      private function getStoryMCHanlder(param1:MovieClip) : void
      {
         this._taskMC = param1;
         this._taskMC.visible = false;
         MapListenerManager.add(MapManager.currentMap.depthLevel["allManBtn"],this.startStory,"");
      }
      
      private function startStory(param1:MouseEvent = null) : void
      {
         var event:MouseEvent = param1;
         SocketConnection.send(1022,86068047);
         NpcDialog.show(NPC.LEIYI,[MainManager.actorInfo.formatNick + "你终于来了！没想到我也受到了神域结界的反噬！你能够和0xff0000魔域仙子0xffffff一起帮助我吗？"],["我一定会帮助你的！","不好意思，妈妈喊我写作业了！"],[function():void
         {
            SocketConnection.send(1022,86068045);
            KTool.hideMapAllPlayerAndMonster();
            hideOtherBtns();
            _taskMC.visible = true;
            SocketConnection.send(1022,86067739);
            TaskDiaLogManager.single.playStory(preStroyLine,function():void
            {
               SocketConnection.send(1022,86068046);
               showOtherBtns();
               _taskMC.visible = false;
               KTool.showMapAllPlayerAndMonster();
               BufferRecordManager.setMyState(1012,true);
               MapManager.currentMap.depthLevel["allManBtn"].visible = true;
               MapListenerManager.add(MapManager.currentMap.depthLevel["allManBtn"],openPanelHandler,"全民布莱克行动！");
               ModuleManager.showModule(ClientConfig.getAppModule("AllManLeiYiPanel"));
            });
         }]);
      }
      
      private function openPanelHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86068047);
         ModuleManager.showModule(ClientConfig.getAppModule("AllManLeiYiPanel"));
      }
      
      protected function get preStroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["雷伊，你怎么样？"],["情况不妙。"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["看来战神联盟的联盟审判攻击神域天王布下的神域结界时，全部受到了能量的反噬！"],["那该怎么办？"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOYUXIANZI,["我和仙人球在这里一直帮助雷伊，可是毫无成效！"],["没关系！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,2,"mc2"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,[MainManager.actorInfo.formatNick + "，凭借你我的能力，想要让雷伊彻底恢复十分艰巨！但是魔域仙子可以！"],["我可以？"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOYUXIANZI,["可是我之前努力了很久，但是雷伊依然没有恢复的迹象！"],["所以你需要我们！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,[MainManager.actorInfo.formatNick + "让我们一起将魔域仙子培养到极品精灵，与雷伊对战，就可以消除雷伊体内的反噬能量。 "],["太棒了！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,3,"mc3"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["现在竟然还有谁敢说永不言败！大言不惭！都已经被反噬到这种地步了。"],["你是谁？"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["赫尔卡星可不是你想来就来，想走就走的！来这里做什么？"],["来看你们的笑话！"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["我就是血手——阿斯狄！来赫尔卡星当然是看你如何被反噬的能量一点点的摧毁！"],["可恶！"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,4,"mc4"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["哼！留着你们也无妨！看着曾经强大无比的雷伊，如今变得这么虚弱，真是开心！"],["可恶！"]);
         var _loc15_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们一定会帮助雷伊！他一定会强大起来，彻底击败你！ "],["那我等着！"]);
         var _loc16_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["我等着你们心目中强大的雷伊会变得有多强大！雷光之翼……哈哈！ "],["太过分了！"]);
         var _loc17_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMC,5,"mc5"]);
         var _loc18_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,[MainManager.actorInfo.formatNick + "，先帮助魔域仙子成为满级极品精灵，消除雷伊的反噬能量！ "],["好的！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_];
      }
      
      private function hideOtherBtns() : void
      {
         MapManager.currentMap.depthLevel["allManBtn"].visible = false;
         this._map32._seerModel.visible = false;
         MapManager.currentMap.animatorLevel.visible = false;
         MapManager.currentMap.topLevel.visible = false;
         if(TasksManager.getTaskStatus(130) != TasksManager.COMPLETE)
         {
            CommonUI.removeYellowExcal(this._map32._seerModel.parent);
         }
         this._map32._seerModel.pet.visible = false;
         if(LeiyiController._petMc != null)
         {
            LeiyiController._petMc.visible = false;
         }
      }
      
      private function showOtherBtns() : void
      {
         MapManager.currentMap.depthLevel["allManBtn"].visible = true;
         this._map32._seerModel.visible = true;
         MapManager.currentMap.animatorLevel.visible = true;
         if(TasksManager.getTaskStatus(130) != TasksManager.COMPLETE)
         {
            CommonUI.addYellowExcal(this._map32._seerModel.parent,this._map32._seerModel.x,this._map32._seerModel.y - (this._map32._seerModel.height + 50),1.5);
         }
         this._map32._seerModel.pet.visible = true;
         if(LeiyiController._petMc != null)
         {
            LeiyiController._petMc.visible = true;
         }
         MapManager.currentMap.topLevel.visible = true;
      }
   }
}
