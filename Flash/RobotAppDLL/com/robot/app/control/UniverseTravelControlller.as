package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class UniverseTravelControlller
   {
      
      private static var _instance:com.robot.app.control.UniverseTravelControlller;
       
      
      private var PREV_TASK_ID:uint = 1624;
      
      public function UniverseTravelControlller()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.control.UniverseTravelControlller
      {
         return _instance = _instance || new com.robot.app.control.UniverseTravelControlller();
      }
      
      public function start() : void
      {
         if(TasksManager.getTaskStatus(this.PREV_TASK_ID) != TasksManager.COMPLETE)
         {
            this.stupBtn.visible = false;
            this.animationMC.visible = true;
            KTool.hideMapAllPlayerAndMonster();
            TasksManager.accept(this.PREV_TASK_ID);
            SocketConnection.send(1022,86060039);
         }
         else
         {
            this.stupBtn.visible = true;
            this.animationMC.visible = false;
         }
         this.addEvents();
      }
      
      private function addEvents() : void
      {
         this.animationMC.buttonMode = true;
         this.animationMC.addEventListener(MouseEvent.CLICK,this.onstartStoryHandler);
         ToolTipManager.add(this.stupBtn,"史密斯超进化");
         MapListenerManager.add(this.stupBtn,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("UniversalOnePanel"));
         },"宇宙旅行团回归第一弹");
      }
      
      protected function onstartStoryHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         TaskDiaLogManager.single.playStory(this.storyLine,function():void
         {
            TasksManager.complete(PREV_TASK_ID,0,function():void
            {
               SocketConnection.send(1022,86060040);
               stupBtn.visible = true;
               animationMC.visible = false;
               KTool.showMapAllPlayerAndMonster();
               ModuleManager.showModule(ClientConfig.getAppModule("UniversalOnePanel"));
            });
         });
      }
      
      protected function get storyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,2,"mc2"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["这…这是什么情况？布鲁和格林怎么会在这里？"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,3,"mc3"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.NAMEIKE,[MainManager.actorInfo.nick + " ,这是时间转换器中保留的一段影像。这是一群宇宙中最快乐的精灵，它们的身上拥有最光明的力量。"],["最光明的力量？"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.NAMEIKE,["赛尔号是精灵的朋友，我想，你一定认识它们。"],["当然啦~ "]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,4,"mc4"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哇，想不到这里还藏着一只精灵~ 好神奇~ 纳梅克，它也是未来之门的守护者吗？……….咦？看起来有些眼熟的样子…."]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,5,"mc5"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["纳梅克！我知道了，你就是纳梅克在逆界之门留下的影像——那个大坏蛋暗黑心魔！"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,6,"mc6"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGMIJINGLING,["我知道你在寻找克制我的办法。什么宇宙中最光明的力量？哈哈，真是太可笑了。"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGMIJINGLING,["尽管找吧，我就在这里，等你来打败我。我也不希望你是个弱者，毕竟，你就是我，我就是你，不是么？"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,7,"mc7"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["纳梅克，找到宇宙旅行团的任务就交给我们了。我们一定会和你一起守护未来之门，不会让暗黑势力得逞的。"]);
         var _loc15_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["谢谢你。用时间转换器，能将过去时空中的宇宙旅行团召唤回来。如果我们能召唤回全部5只精灵，让我借助它们的力量，或许就能打败这个家伙。"]);
         var _loc16_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,8,"mc8"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_];
      }
      
      public function depose() : void
      {
         _instance = null;
         this.removeEvents();
      }
      
      private function removeEvents() : void
      {
         this.animationMC.removeEventListener(MouseEvent.CLICK,this.onstartStoryHandler);
      }
      
      protected function get stupBtn() : SimpleButton
      {
         return MapManager.currentMap.depthLevel["timerBtn"] as SimpleButton;
      }
      
      protected function get animationMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["animationMC"] as MovieClip;
      }
   }
}
