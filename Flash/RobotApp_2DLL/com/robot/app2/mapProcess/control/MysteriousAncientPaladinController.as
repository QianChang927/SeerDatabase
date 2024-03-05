package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class MysteriousAncientPaladinController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function MysteriousAncientPaladinController()
      {
         super();
      }
      
      public static function initMap1094(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var _loc3_:DisplayObject = null;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            StatManager.sendStat2014("0710真正的赫尔卡星，神秘的上古游侠","进入场景的",StatManager.RUN_ACT_2015);
            if(!BitBuffSetClass.getState(22804))
            {
               _loc3_ = MapManager.currentMap.depthLevel.getChildByName("ancient_paladin_1094");
               CommonUI.addYellowArrow(MapManager.currentMap.depthLevel,_loc3_.x - 15,_loc3_.y - 120);
            }
         });
      }
      
      public static function destroyMap1094() : void
      {
         _map = null;
      }
      
      public static function playPre1094(param1:Function) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getActiveUrl("mysterious_ancient_paladin_movie"),function(param1:MovieClip):void
         {
            var mod1:TaskMod = null;
            var mod2:TaskMod = null;
            var mod3:TaskMod = null;
            var mc:MovieClip = param1;
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["不好，第三只赫尔卡星的远古守卫也被召唤出来了！"],["据说是上古时期一直守护着赫尔卡星的上古剑圣！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["连上古剑圣都被召唤出来了，奥古斯特应该还有更大的阴谋！"],["不知道上古剑圣有没有被它控制？"]);
            var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOGUSITE,["哈哈哈哈！这三个守卫都是我计划的一部分！"],["大家小心！"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,2,"mc2"]);
            var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOGUSITE,["又收复了一个，上古贤者，来来来，赶紧实施我们的下一个计划！"],["遵命！"]);
            var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["所以说上古贤者就是奥古斯特召唤其它守卫的关键！"],["可恶，但是我们的能力不能与其抗衡！"]);
            var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAOSAIER,["我们先看看奥古斯特接下来要干什么！"],["对，大家不要轻举妄动，静观其变！"]);
            var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,3,"mc3"]);
            var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANG_GU_ZHAN_MO,["哈哈哈哈，看来我们的第四位兄弟也要登场了！"],["真是太可恶了！"]);
            var mod11:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,4,"mc4"]);
            var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOGUSITE,["终于召唤齐了四个远古守卫，离我的计划还剩最后一步了！"],["真是太可恶了！"]);
            var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAOSAIER,["大家都小心点！一场恶战不可避免！"],["是！我们齐心协力，一定能够阻止奥古斯特的阴谋！"]);
            var mod14:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,5,"mc5"]);
            NpcController.npcVisible = false;
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            MapManager.currentMap.depthLevel.visible = false;
            _map.conLevel.addChild(mc);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14],function():void
            {
               NpcController.npcVisible = true;
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               MapManager.currentMap.depthLevel.visible = true;
               fun();
               _map.conLevel.removeChild(mc);
               mc = null;
               CommonUI.removeYellowArrowForMapObject();
            });
         });
      }
   }
}
