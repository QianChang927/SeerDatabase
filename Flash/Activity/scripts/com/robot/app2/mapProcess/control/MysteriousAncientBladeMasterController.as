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
   
   public class MysteriousAncientBladeMasterController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function MysteriousAncientBladeMasterController()
      {
         super();
      }
      
      public static function initMap1094(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         StatManager.sendStat2014("0703真正的赫尔卡星，神秘的上古剑圣","进入场景的",StatManager.RUN_ACT_2015);
         _map = map;
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var _loc3_:DisplayObject = null;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            if(!BitBuffSetClass.getState(22800))
            {
               _loc3_ = MapManager.currentMap.depthLevel.getChildByName("ancient_blade_master_1094");
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
         ResourceManager.getResource(ClientConfig.getActiveUrl("mysterious_ancient_blade_master_movie"),function(param1:MovieClip):void
         {
            var mod1:TaskMod = null;
            var mod2:TaskMod = null;
            var mod3:TaskMod = null;
            var mc:MovieClip = param1;
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["这难道是另一只赫尔卡星的远古守卫？"],["据说是守卫着赫尔卡星并且大杀四方的上古战魔！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["太好了，我们快让上古战魔来阻止科学怪人的阴谋！"],["上古战魔是敌是友我们还并不知道！"]);
            var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOGUSITE,["哈哈哈哈！等下你们就会知道了！"],["大家小心！"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,2,"mc2"]);
            var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOGUSITE,["又收复了一个，上古贤者，来来来，赶紧实施我们的下一个计划！"],["遵命！"]);
            var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["不好！只要上古贤者被奥古斯特控制了，其它守卫被它控制也是迟早的事！"],["关键是先要让上古贤者恢复意识！"]);
            var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAOSAIER,["大家一起上！快帮助上古贤者恢复意识！"],["集齐所有人的力量一定会成功的！"]);
            var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,3,"mc3"]);
            var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANG_GU_ZHAN_MO,["想要过我这一关还是等下一个世纪吧！"],["真是太可恶了！"]);
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
               CommonUI.removeYellowArrowForMapObject();
            });
         });
      }
   }
}
