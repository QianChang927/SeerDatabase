package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class MysteriousAncientWarmongerController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function MysteriousAncientWarmongerController()
      {
         super();
      }
      
      public static function initMap1094(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         StatManager.sendStat2014("0626真正的赫尔卡星，神秘的上古战魔","进入场景的",StatManager.RUN_ACT_2015);
         _map = map;
         if(!BitBuffSetClass.getState(22792))
         {
            playPre(function():void
            {
               BitBuffSetClass.setState(22792,1);
            });
         }
      }
      
      public static function destroyMap1094() : void
      {
         _map = null;
      }
      
      private static function playPre(param1:Function) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getActiveUrl("mysterious_ancient_warmonger_movie"),function(param1:MovieClip):void
         {
            var mod2:TaskMod = null;
            var mod3:TaskMod = null;
            var mod4:TaskMod = null;
            var mc:MovieClip = param1;
            var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["赫尔卡星的远古守卫？"],["据说是上古时期一直守护着赫尔卡星的上古贤者！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["咦？那它怎么会被科学怪人召唤出来了呢？"],["这里面一定有什么阴谋！"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIJI,["召唤远古守卫只是奥古斯特计划的一部分！"],["大家小心！"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,2,"mc2"]);
            var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOGUSITE,["上古贤者，来来来，赶紧实施我们的下一个计划！"],["遵命！"]);
            var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["怎么上古贤者也开始听科学怪人的话了？"],["是上古贤者被奥古斯特控制了！"]);
            var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["可恶，不知道奥古斯特又有什么计划！"],["大家不要轻举妄动，静观其变！"]);
            var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,3,"mc3"]);
            var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIJI,["这下不妙了，上古贤者一旦被奥古斯特控制，其它的远古守卫也在所难免！"],["真是太可恶了！"]);
            var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAOSAIER,["大家都小心点！一场恶战不可避免！"],["是！我们齐心协力，一定能够阻止奥古斯特的阴谋！"]);
            var mod12:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,4,"mc4"]);
            NpcController.npcVisible = false;
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            MapManager.currentMap.depthLevel.visible = false;
            _map.conLevel.addChild(mc);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12],function():void
            {
               NpcController.npcVisible = true;
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               MapManager.currentMap.depthLevel.visible = true;
               fun();
               _map.conLevel.removeChild(mc);
               mc = null;
               ModuleManager.showAppModule("MysteriousAncientWarmongerMainPanel");
            });
         });
      }
   }
}
