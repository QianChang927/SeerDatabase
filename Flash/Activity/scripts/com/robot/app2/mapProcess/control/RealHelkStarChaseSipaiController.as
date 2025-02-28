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
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class RealHelkStarChaseSipaiController
   {
      
      private static var _map1:BaseMapProcess;
      
      private static var _map2:BaseMapProcess;
       
      
      public function RealHelkStarChaseSipaiController()
      {
         super();
      }
      
      public static function initMap30(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map1 = map;
         if(!BitBuffSetClass.getState(22770))
         {
            playPreFor30(function():void
            {
               BitBuffSetClass.setState(22770,1);
            });
         }
      }
      
      public static function initMap31(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            if(!BitBuffSetClass.getState(22770))
            {
               MapManager.changeMap(30);
               return;
            }
            _map2 = map;
            if(!BitBuffSetClass.getState(22771))
            {
               playPreFor31(function():void
               {
                  BitBuffSetClass.setState(22771,1);
               });
            }
         });
      }
      
      private static function playPreFor30(param1:Function) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getActiveUrl("real_helk_star_map_30"),function(param1:MovieClip):void
         {
            var mod2:TaskMod = null;
            var mod3:TaskMod = null;
            var mod4:TaskMod = null;
            var mc:MovieClip = param1;
            var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["快看，好像有谁在追赶艾吉！"],["这么凶残的精灵是谁？"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["看样子也像是奥古斯特的手下。"],["又是奥古斯特的手下！"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAOSAIER,["你们看它又是拿剑，又是拿枪，胸口还藏有大炮！"],["艾吉小心炮弹！"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,2,"mc2"]);
            var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["好你这个可恶的小精灵，竟然这么凶残，看我好好教训你！"],["阿铁打等等，我们先去看看艾吉怎么样了。"]);
            var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["艾吉好像受伤不轻…"],["那个威力巨大的炮弹好像把艾吉打进赫尔卡星遗迹里面了！"]);
            var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAOSAIER,["我们先去赫尔卡星遗迹吧！"],["说不定还会有其它的发现！"]);
            NpcController.npcVisible = false;
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            MapManager.currentMap.depthLevel.visible = false;
            _map1.conLevel.addChild(mc);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8],function():void
            {
               NpcController.npcVisible = true;
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               MapManager.currentMap.depthLevel.visible = true;
               fun();
               _map1.conLevel.removeChild(mc);
               mc = null;
               MapManager.changeMap(31);
            });
         });
      }
      
      private static function playPreFor31(param1:Function) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getActiveUrl("real_helk_star_map_31"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["大事不妙，不知道奥古斯特又有什么阴谋！"],["赫尔卡星已经被它弄成这样了！"]);
            var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["我们一起下去看个究竟！"],["别！"]);
            var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAOSAIER,["这下面究竟怎样我们一无知晓，这样下去毕竟凶多吉少！"],["对！眼下最重要的先来治疗艾吉，并将赫尔卡星恢复原样吧！"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,2,"mc2"]);
            NpcController.npcVisible = false;
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            MapManager.currentMap.depthLevel.visible = false;
            _map2.conLevel.addChild(mc);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5],function():void
            {
               NpcController.npcVisible = true;
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               MapManager.currentMap.depthLevel.visible = true;
               fun();
               _map2.conLevel.removeChild(mc);
               mc = null;
               ModuleManager.showAppModule("RealHelkStarChaseSipaiPanel");
            });
         });
      }
      
      public static function destroyMap30() : void
      {
         _map1 = null;
      }
      
      public static function destroyMap31() : void
      {
         _map2 = null;
      }
   }
}
