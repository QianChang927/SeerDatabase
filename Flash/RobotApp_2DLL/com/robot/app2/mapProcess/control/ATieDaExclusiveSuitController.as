package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class ATieDaExclusiveSuitController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function ATieDaExclusiveSuitController()
      {
         super();
      }
      
      public static function initMap107(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function destroyMap107() : void
      {
         _map = null;
      }
      
      public static function startMake(param1:Function) : void
      {
         var fun:Function = param1;
         if(MapManager.currentMap.id == 107)
         {
            playPre(fun);
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            playPre(fun);
         });
         MapManager.changeMap(107);
      }
      
      private static function playPre(param1:Function) : void
      {
         var fun:Function = param1;
         if(BitBuffSetClass.getState(22909))
         {
            fun();
            return;
         }
         KTool.hideMapAllPlayerAndMonster();
         NpcController.npcVisible = false;
         LevelManager.iconLevel.visible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         ResourceManager.getResource(ClientConfig.getActiveUrl("a_tie_da_exclusive_suit_pre"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["肖恩博士，你找我来有什么事情呀？"]);
            var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["你知道的，我们即将进入新的星域了。"]);
            var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["我们对新的星域一无所知，只有将状态调整到巅峰，才有可能面对未知的危险。"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["事情总会向着最坏的方向发展，面对未知，我们需要做好万全的准备。"]);
            var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,2,"mc2"]);
            var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["唉，你总是这样子。"]);
            var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["不过你不用担心，通过一些从星际之门中游离出来的物质，我已经研究出了一种新型战甲。"]);
            var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,3,"mc3"]);
            var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["更强！更坚固！更锋锐！"]);
            var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["还有一点最重要的，也是你最需要的……自动充电的新月双刀！"]);
            var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["噢噢噢噢噢真是太酷了！快给我换上吧博士！"]);
            var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["帮你换上没问题，但是由于材料缺乏，我现在暂时无法将它制造出来。"]);
            var mod14:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["博士，缺什么材料你尽管说！我来帮你搞定！"]);
            var mod15:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["那你去星际之门，帮我收集一些新星之殒吧！这些材料给你，用它可以制造出用于收集的机器。"]);
            var mod16:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["好的博士，你就等着我满载而归吧！"]);
            _map.conLevel.addChild(mc);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14,mod15,mod16],function():void
            {
               _map.conLevel.removeChild(mc);
               KTool.showMapAllPlayerAndMonster();
               NpcController.npcVisible = true;
               LevelManager.iconLevel.visible = true;
               MapObjectControl.hideOrShowAllObjects(true);
               BitBuffSetClass.setState(22909,1);
               fun();
            });
         });
      }
      
      public static function finishCollection() : void
      {
         if(MapManager.currentMap.id == 107)
         {
            playFinishMovie();
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            playFinishMovie();
         });
         MapManager.changeMap(107);
      }
      
      private static function playFinishMovie() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         NpcController.npcVisible = false;
         LevelManager.iconLevel.visible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         ResourceManager.getResource(ClientConfig.getActiveUrl("a_tie_da_exclusive_suit_stuff_over"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["博士，材料我全帮你弄到了，快帮我打造我的超级战甲吧！"]);
            var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["很好，现在只要将这些东西组合起来，我们就能获得第一件U-2000型新月战甲了！"]);
            var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["好激动，我们快开始吧！"]);
            _map.conLevel.addChild(mc);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4],function():void
            {
               _map.conLevel.removeChild(mc);
               KTool.showMapAllPlayerAndMonster();
               NpcController.npcVisible = true;
               LevelManager.iconLevel.visible = true;
               MapObjectControl.hideOrShowAllObjects(true);
               ModuleManager.showAppModule("ATieDaExclusiveSuitMakePanel");
            });
         });
      }
   }
}
