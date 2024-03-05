package com.robot.app.task.control
{
   import com.robot.app.mapProcess.MapProcess_455;
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   
   public class TaskController_1859
   {
      
      public static const TASK_ID:uint = 1859;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1859()
      {
         super();
      }
      
      public static function start() : void
      {
         TasksManager.accept(TASK_ID,function(param1:Boolean):void
         {
            startPro();
         });
      }
      
      public static function startPro() : void
      {
         var taskMod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TUORUISI,[MainManager.actorInfo.formatNick + "，最近黯夜广场突然发生了一件很奇怪的事情，搞的我们都十分害怕"],["什么事情？"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TUORUISI,["你看到那团会飞的火焰了吗，它成天在这里飞来飞去，而且还会说话，一直阴魂不散，搞的我们人心惶惶。"],["这么奇怪？让我来会会他！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[animationContainer,2,"animation2"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PANDUOSI,["谁这么讨厌，用水枪喷我，妨碍我点亮这个漆黑的地方！"],["原来是个精灵！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哈哈哈哈，你好搞笑，就你这么一点火光还想点亮黯夜广场！？"],["尽然敢小看我！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[animationContainer,3,"animation3"]);
         TaskDiaLogManager.single.playStory([taskMod1,mod2,mod3,mod4,mod5,mod6],function():void
         {
            NpcDialog.show(NPC.PANDUOSI,["怎么样，看到我的厉害了吧！小看我的人都要付出代价！接受我的挑战吧！"],["打就打，怕你不成！","让我再准备一下！"],[function():void
            {
               TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
               {
                  MapProcess_455(_map).playerStaticScene();
                  FightBossController.fightBoss("潘多斯",2);
               });
            },function():void
            {
               TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
               {
                  MapProcess_455(_map).playerStaticScene();
               });
            }]);
         });
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      protected static function getAnimation(param1:uint) : MovieClip
      {
         animationContainer.gotoAndStop(param1);
         return animationContainer["animation" + String(param1)] as MovieClip;
      }
      
      public static function get animationContainer() : MovieClip
      {
         return MapManager.currentMap.controlLevel["animationContainer"] as MovieClip;
      }
   }
}
