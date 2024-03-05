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
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class CallMysteriousAncientSageController
   {
      
      private static var _map1:BaseMapProcess;
      
      private static var _map2:BaseMapProcess;
       
      
      public function CallMysteriousAncientSageController()
      {
         super();
      }
      
      public static function initMap31(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map1 = map;
         if(!BitBuffSetClass.getState(22784))
         {
            playPreFor31(function():void
            {
               BitBuffSetClass.setState(22784,1);
            });
         }
      }
      
      public static function initMap1094(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            if(!BitBuffSetClass.getState(22784))
            {
               MapManager.changeMap(31);
               return;
            }
            StatManager.sendStat2014("真正的赫尔卡星，神秘的上古贤者","进入场景的",StatManager.RUN_ACT_2015);
            _map2 = map;
            if(!BitBuffSetClass.getState(22785))
            {
               playPreFor1094(function():void
               {
                  BitBuffSetClass.setState(22785,1);
               });
            }
         });
      }
      
      public static function destroyMap31() : void
      {
         _map1 = null;
      }
      
      public static function destroyMap1094() : void
      {
         _map2 = null;
      }
      
      private static function playPreFor31(param1:Function) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getActiveUrl("call_mysterious_ancient_sage_31"),function(param1:MovieClip):void
         {
            var mod1:TaskMod = null;
            var mod2:TaskMod = null;
            var mc:MovieClip = param1;
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["咦？这不是科学怪人之前要找的赫尔卡星能量吗？"],["或许我们会从中得到些线索！"]);
            var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["我们先问问艾吉知不知道！"],["艾吉，你知道奥古斯特它们去哪里了吗？"]);
            var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIJI,["快阻止它们，它们要进行试验了，实验完成的话赫尔卡星就会被毁灭了！"],["看我的！"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,2,"mc2"]);
            NpcController.npcVisible = false;
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            MapManager.currentMap.depthLevel.visible = false;
            _map1.conLevel.addChild(mc);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5],function():void
            {
               NpcController.npcVisible = true;
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               MapManager.currentMap.depthLevel.visible = true;
               fun();
               _map1.conLevel.removeChild(mc);
               mc = null;
               MapManager.changeMap(1094);
            });
         });
      }
      
      private static function playPreFor1094(param1:Function) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getActiveUrl("call_mysterious_ancient_sage_1094"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOGUSITE,["该死，赫尔卡星能量居然被你们找到了！不过也没事，我的新实验也快完成了！哈哈哈！"],["没想到赫尔卡星还有这么一个隐藏的地方。"]);
            var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["大家小心，站远点！"],["不知道奥古斯特又有什么阴谋！"]);
            var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SIPAI,["老大，快让他们见识见识我们的厉害！"],["不要大惊小怪，没见过世面的家伙！"]);
            var mod4:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["科学怪人，你要干嘛！"],["等会你就知道了！"]);
            var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIJI,["不好，奥古斯特的力量还没完全恢复，它是在用斯派的能量驱动召唤仪式！"],["算你聪明！"]);
            var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAOSAIER,["大家都小心点！一场恶战不可避免！"],["是！我们齐心协力，一定能够阻止奥古斯特的阴谋！"]);
            var mod8:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,2,"mc2"]);
            NpcController.npcVisible = false;
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            MapManager.currentMap.depthLevel.visible = false;
            _map2.conLevel.addChild(mc);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8],function():void
            {
               NpcController.npcVisible = true;
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               MapManager.currentMap.depthLevel.visible = true;
               fun();
               _map2.conLevel.removeChild(mc);
               mc = null;
               ModuleManager.showAppModule("CallMysteriousAncientSageMainPanel");
            });
         });
      }
   }
}
