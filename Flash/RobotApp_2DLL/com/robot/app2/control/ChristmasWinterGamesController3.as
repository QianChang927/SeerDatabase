package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class ChristmasWinterGamesController3
   {
      
      private static const BUFFER:uint = 958;
      
      private static var _instance:com.robot.app2.control.ChristmasWinterGamesController3;
       
      
      private var _taskMC:MovieClip;
      
      public function ChristmasWinterGamesController3()
      {
         super();
      }
      
      public static function get instance() : com.robot.app2.control.ChristmasWinterGamesController3
      {
         return _instance = _instance || new com.robot.app2.control.ChristmasWinterGamesController3();
      }
      
      public function start() : void
      {
         StoryLoaderManager.insatnce.swfName = "map_964_1";
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
         MapManager.currentMap.depthLevel.visible = false;
         TaskDiaLogManager.single.playStory(this.stroyLine,function():void
         {
            _taskMC.visible = false;
            MapManager.currentMap.depthLevel.visible = true;
            BufferRecordManager.setMyState(BUFFER,true);
            KTool.showMapAllPlayerAndMonster();
            ModuleManager.showModule(ClientConfig.getAppModule("adown/WinterGamesGuidePanel"));
         });
      }
      
      private function get stroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["马上就要到圣诞节啦！圣诞老人还在雪夜魔王手里！"],["是的！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TANGMI,["我们正在抓紧时间选拔出最优秀的赛尔去营救圣诞老人！ "],["圣诞老人需要我们！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["经过速度挑战、耐力挑战之后，我们即将进入最考验赛尔的智慧挑战！谁能胜出谁就是最优秀的赛尔！ "],["我一定是最优秀的！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIDIKAILI,["为了激励大家的斗志，我们特别邀请了运动大师们前来助阵！接下来将是一项艰难的任务！请大家做好充分的准备！"],["我从来不怕困难！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["只要大家通过三项考验，取得足够的积分，就能够获得为大家准备的绝版精灵以及大量的经验券！让你成为精灵大师！"],["太棒啦！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["请大家加油！我们即将前往解决圣诞老人！积分达到2500，还能达成成就“冬季运动员大师”"],["放心吧，船长！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,3,"mc3"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["竟然敢公然挑衅？可恶！"],["贾斯汀！"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LAIKENING,["你如果足够强大！那么就带领你的赛尔号与我比一比！"],["我们不会怕你！"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,4,"mc4"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["贾斯汀！你怎么样？"],["没事！"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["不过雪夜魔王实力的确强大！我们不可小觑！勇敢地赛尔们，加油吧！"],["我们会努力的！"]);
         var _loc15_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,5,"mc5"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_];
      }
      
      private function get taskMC() : MovieClip
      {
         return this._taskMC as MovieClip;
      }
      
      public function destroy() : void
      {
         DisplayUtil.removeForParent(this._taskMC);
         this._taskMC = null;
      }
   }
}
