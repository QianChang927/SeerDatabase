package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   
   public class ChristmasWinterGamesController2
   {
      
      private static const BUFFER:uint = 935;
      
      private static var _instance:com.robot.app2.control.ChristmasWinterGamesController2;
       
      
      private var _taskMC:MovieClip;
      
      public function ChristmasWinterGamesController2()
      {
         super();
      }
      
      public static function get instance() : com.robot.app2.control.ChristmasWinterGamesController2
      {
         return _instance = _instance || new com.robot.app2.control.ChristmasWinterGamesController2();
      }
      
      public function start() : void
      {
         StoryLoaderManager.insatnce.swfName = "map_964_0";
         StoryLoaderManager.insatnce.setloaderHandler = this.getStoryMCHanlder;
      }
      
      private function getStoryMCHanlder(param1:MovieClip) : void
      {
         this._taskMC = param1;
         if(BufferRecordManager.getMyState(BUFFER) == false)
         {
            this.startPreStroy();
         }
         else
         {
            this._taskMC.visible = false;
            ModuleManager.showModule(ClientConfig.getAppModule("adown/WinterGamesGuidePanel"));
         }
      }
      
      private function startPreStroy() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(this.stroyLine,function():void
         {
            _taskMC.visible = false;
            BufferRecordManager.setMyState(BUFFER,true);
            KTool.showMapAllPlayerAndMonster();
            ModuleManager.showModule(ClientConfig.getAppModule("adown/WinterGamesGuidePanel"));
         });
      }
      
      private function get stroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active201312045698"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["想必大家都还记得，我们为什么要不断的挑战自己！我们亲爱的圣诞老人被雪夜魔王抓走了！我们必须营救圣诞老人！"],["我要营救圣诞老人！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["恭喜大家能够通过速度挑战，接下来将是更加困难，更加残酷的耐力挑战！希望能够选拔出最优秀的赛尔去营救圣诞老人！"],["我们需要欢乐的圣诞节！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["是的！没有谁能够破坏我们的和谐！没有了圣诞老人，我们将失去欢乐的圣诞节"],["我们不能允许！"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIDIKAILI,["感谢大家！不过接下来将由我考验大家的耐力！这将是一项艰难的任务！请大家做好充分的准备！"],["我从来不怕困难！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["只要大家通过耐力的考验，就有机会获得我为大家准备的绝版精灵以及大量的经验券！让你成为精灵大师！"],["太棒啦！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["请大家加油！圣诞老人还在远方等待着我们前去解救！"],["放心吧，船长！"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,3,"mc3"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["可恶！我贾斯汀绝对不能忍受这种挑衅！"],["且慢！"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["既然雪野魔王胆敢这般挑衅，定是已经备下了天罗地网！我们不能上当。待我们实力充足，一举歼灭雪野魔王，解救圣诞老人！"],["我们要解救圣诞老人！"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,4,"mc4"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_];
      }
      
      private function get taskMC() : MovieClip
      {
         return this._taskMC as MovieClip;
      }
   }
}
