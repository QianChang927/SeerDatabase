package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class DevilEvoController
   {
      
      private static var _taskMc:MovieClip;
      
      private static var _map:BaseMapProcess;
       
      
      public function DevilEvoController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         StatManager.sendStat2014("魔灵王的激变","进入禁魔之崖",StatManager.RUN_ACT);
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_1008_0"),function(param1:MovieClip):void
         {
            taskMC = param1;
            map.conLevel.addChild(taskMC);
            if(BitBuffSetClass.getState(22472))
            {
               taskMC.gotoAndStop(5);
            }
            else
            {
               taskMC.gotoAndStop(1);
            }
            taskMC.addEventListener(MouseEvent.CLICK,onClickHandler);
         });
      }
      
      public static function setDevilVisible(param1:Boolean) : void
      {
         if(taskMC)
         {
            taskMC.visible = param1;
         }
      }
      
      private static function onClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         if(_loc2_ == "btnStart")
         {
            playPreStory();
         }
         else if(_loc2_ == "btnDevil")
         {
            StatManager.sendStat2014("魔灵王的激变","点击NPC魔灵王",StatManager.RUN_ACT);
            showPanel();
         }
      }
      
      public static function clickEquip(param1:* = null) : void
      {
         if(MapManager.currentMap.id == 1008)
         {
            if(BitBuffSetClass.getState(22472))
            {
               showPanel();
            }
            else
            {
               playPreStory();
            }
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DevilEvoMsgPanel"),"正在打开");
         }
      }
      
      private static function playPreStory() : void
      {
         StatManager.sendStat2014("魔灵王的激变","参加前置任务",StatManager.RUN_ACT);
         _map.btnLevel.addChild(taskMC);
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BitBuffSetClass.setState(22472,1);
            taskMC.gotoAndStop(5);
            StatManager.sendStat2014("魔灵王的激变","完成前置任务",StatManager.RUN_ACT);
         });
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["任何人都不能阻止我的计划，魔界之门背后的勇士们，你们准备好了吗？！"],["魔灵王，住手！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["小鬼，这里不是你该来的地方，想活命的话就速速逃命去吧！当魔界之门开启的那一刻，这里就将成为我魔灵王的天下！"],["叔叔…难道你忘记还有我了吗？！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["哼哼…你的一切都是我授予的，就算现在你拥有了夜魔之神的力量，想要战胜我也没这么容易！"],["再艰难，我也不会让你祸害宇宙！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_EVO,["什么…没想到你尽然还留了一手！"],["夜魔之神，你没想到的东西还有很多！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING_EVO,["既然这样，那就让我们叔侄俩来场真正的战役吧！"],["夜魔之神，再给你最后一次机会，跟不跟随我？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_EVO,["我会以战神联盟的名义击败你的，来吧！魔灵王！"],["就拿你作为开启魔界之门的祭品吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_EVO,["0xff0000" + MainManager.actorInfo.nick + ",0xffffff我们一定不能让魔灵王开启魔界之门，我们一起努力吧！一定要击败他！"],["没问题，夜魔之神，我已经准备好了！！"]));
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
      
      private static function showPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DevilEvoSummaryPanel"),"正在打开");
      }
      
      public static function destroy() : void
      {
         _taskMc = null;
         _map = null;
      }
   }
}
