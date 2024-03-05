package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1676
   {
      
      public static const TASK_ID:uint = 1676;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1676()
      {
         super();
      }
      
      public static function initTaskForMap944(param1:BaseMapProcess) : void
      {
         SocketConnection.send(1022,86060626);
         _map = param1;
         var _loc2_:int = int(TasksManager.getTaskStatus(TASK_ID));
         if(_loc2_ != TasksManager.COMPLETE)
         {
            if(_loc2_ == TasksManager.UN_ACCEPT)
            {
               TasksManager.accept(TASK_ID);
               SocketConnection.send(1022,86061060);
            }
            showStoryMC();
         }
         else
         {
            removeStoryMc();
         }
      }
      
      private static function showStoryMC() : void
      {
         playPreStory();
      }
      
      private static function playPreStory() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         SimpleButton(_map.btnLevel["btnMYXX"]).visible = false;
         SimpleButton(_map.btnLevel["btnYanMo"]).visible = false;
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
            {
               SocketConnection.send(1022,86061061);
               removeStoryMc();
               KTool.showMapAllPlayerAndMonster();
               SimpleButton(_map.btnLevel["btnMYXX"]).visible = true;
               SimpleButton(_map.btnLevel["btnYanMo"]).visible = true;
               DisplayUtil.removeForParent(taskMC);
            });
         });
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:int = 0;
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc1_ + 1,"mc"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YANMO,["站起来！就你这样，谈什么击败恶灵兽！"],null);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOYANXINGXING,["师傅……我…………师傅放心，我不会让您失望的。我一定会通过您的特训！"],null);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YANMO,["我手中的烈焰纹章，能够全面提升你的各项能力。但是，只有当你具备足够的资格，我才会把它送给你。加油吧，小猴子。"],null);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc1_ + 2,"mc"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOYANXINGXING,[MainManager.actorInfo.nick + "，如果你能帮助我顺利完成特训，你就能拥有一个更加强大的战斗伙伴。我们一起加油吧~"],["嗯！好朋友当然要一起迎接挑战！"]);
         return [_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_];
      }
      
      private static function removeStoryMc() : void
      {
         DisplayUtil.removeForParent(taskMC);
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.btnLevel["mcTask_1675"];
      }
      
      public static function destory() : void
      {
         _map = null;
      }
   }
}
