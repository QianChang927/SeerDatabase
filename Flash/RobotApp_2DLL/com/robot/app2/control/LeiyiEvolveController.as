package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class LeiyiEvolveController
   {
      
      private static var _taskMc:MovieClip;
      
      private static var _map:BaseMapProcess;
       
      
      public function LeiyiEvolveController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var url:String;
         var map:BaseMapProcess = param1;
         StatManager.sendStat2014("雷伊超进化","进入雷霆之境",StatManager.RUN_ACT);
         _map = map;
         url = "active_2014061911";
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_1003_0"),function(param1:MovieClip):void
         {
            param1.name = "map_1003_0";
            taskMC = param1;
            _map.btnLevel.addChild(taskMC);
            addEvent();
            if(!BitBuffSetClass.getState(22462))
            {
               taskMC.gotoAndStop(1);
            }
            else
            {
               taskMC.gotoAndStop(5);
            }
         });
      }
      
      private static function addEvent() : void
      {
         if(taskMC)
         {
            taskMC.addEventListener(MouseEvent.CLICK,onClickHandler);
         }
      }
      
      private static function removeEvent() : void
      {
         if(taskMC)
         {
            taskMC.removeEventListener(MouseEvent.CLICK,onClickHandler);
         }
      }
      
      protected static function onClickHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var name:String = String(event.target.name);
         if(name == "btnStart")
         {
            playPreStory();
         }
         else if(name == "btnLeiyi")
         {
            StatManager.sendStat2014("雷伊超进化","点击雷伊",StatManager.RUN_ACT);
            showEvoPanel();
         }
         else if(name == "btnBlack")
         {
            NpcDialog.show(NPC.BULAIKE_NEW,[MainManager.actorInfo.nick + "想见证我超进化后的实力吗？我愿意接受你的挑战！"],["立刻挑战布莱克","让我准备一下！"],[function():void
            {
               MapManager.changeMap(1002);
            }]);
         }
         else if(name == "btnKaxiusi")
         {
            NpcDialog.show(NPC.KAXIUSI_WHITE,["想了解我的超进化实力吗？大地之神超进化已经再次开启！"],["我想了解！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("KaxiusiEvoSummaryPanel"));
            }]);
         }
         else if(name == "btnGaiya")
         {
            NpcDialog.show(NPC.GAIYA,[MainManager.actorInfo.nick + "想见证我超进化后的实力吗？我愿意接受你的挑战！"],["立刻挑战盖亚","让我准备一下！"],[function():void
            {
               MapManager.changeMap(998);
            }]);
         }
         else if(name == "btnMiusi")
         {
            NpcDialog.show(NPC.MIUSI,[MainManager.actorInfo.nick + "想见证我的实力吗？我愿意接受你的挑战！"],["立刻挑战缪斯","让我准备一下！"],[function():void
            {
               MapManager.changeMap(82);
            }]);
         }
      }
      
      private static function showEvoPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LeiyiEvoSummaryPanel"),"正在努力打开面板...");
      }
      
      private static function showObtainPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BlackObtainPanel"),"正在努力打开面板...");
      }
      
      public static function onClickEquip(param1:*) : void
      {
         if(MapManager.currentMap.id == 1002)
         {
            showEvoPanel();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BlackEvoMsgPanel"));
         }
      }
      
      private static function playPreStory() : void
      {
         StatManager.sendStat2014("雷伊超进化","参加前置任务",StatManager.RUN_ACT);
         _map.depthLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            _map.depthLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            BitBuffSetClass.setState(22462,1);
            taskMC.gotoAndStop(5);
            showEvoPanel();
            StatManager.sendStat2014("雷伊超进化","完成前置任务",StatManager.RUN_ACT);
         });
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         var _loc3_:String = "active_20130913_7";
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZHANGCHIBANGLEIYI,["伙伴们，你们终于来了！如今你们都已经领悟了超进化能量的奥义，并且都能掌控这股能量，真是太好了！"],["雷神，你在这里做什么呢！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_EVO,["你们这群笨蛋，一看这架势就知道，我们的领袖雷神即将完成超进化！"],["可恶…"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_SUPER,["战神盖亚，你是在嫉妒吧！别忘记我们可是团队，我们当中每个人的实力得到提升，就会为守护宇宙多出一份力，多加一分胜算！"],["我知道…可惜我还是没机会和雷神一决高下！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_EVO,["哼哼…雷神看来我们是要做一辈子的对手了，加油吧！别让我等太久，你知道的，我脾气不是很好！"],["加油吧！雷神，我们会帮助你的！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_EVO,["什么…雷神这家伙居然有如此强大的能量，看来雷神超进化绝对不容小视！"],["来吧！雷神，激发你最强的斗志吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI_EVO,["果然成功了，我终于超进化了！我现在全身充满着能量，这种感觉真是太棒了！"],["雷神，让我来试试你的实力吧！"]));
         return _loc1_;
      }
      
      private static function set taskMC(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMC() : MovieClip
      {
         return _taskMc;
      }
      
      public static function destroy() : void
      {
         removeEvent();
         _map = null;
      }
   }
}
