package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1506;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1506
   {
      
      private static const MAP_ID:int = 91;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1506()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1506mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1506.TASK_ID);
      }
      
      public static function initForMap91(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(!_map)
         {
            return;
         }
         if(taskState != TasksManager.ALR_ACCEPT)
         {
            destroy();
            return;
         }
         TaskController_1506.start();
      }
      
      public static function startState_1() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _map.conLevel["cinkid"].visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.PAIJI,["你说你要去迪恩为贾斯汀牺牲的前一天，我们就来啦。这里风景很不错么，没想到竟藏着一段这么悲壮的往事……"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["迪恩是为了抵挡海盗的陨石导弹袭击才遇难的，那是在一片浩渺的太空……这里哪里像太空了！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["我是在问你是谁……突然出现吓死机器人了好不好？哎？长得还挺可爱的呢，这么阴森奇怪的地方还会有这么阳光的精灵，跟我回赛尔号吧~"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.PAIJI,["暴脾气的辛基德？这个名字好耳熟……天呐！" + MainManager.actorInfo.formatNick + "，我们要见到传说中隐居在机械迷城的武器大师了！"],["我怎么没听过它的传说…"]]],[TaskStoryPlayer.DIALOG,[NPC.PAIJI,["那是当然~ 辛基德是…嗯，没算错的话，应该是赛尔历99年时横空出世的天才，它在武器研发方面…"],["等一下！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.PAIJI,["这你可不能怪我，一定是你没有表达清楚！嗯…不过，也有可能，是我的光年电梯出故障了…"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.XINJIDE,["我最不喜欢工作时被打扰！刚才是谁在这里吵吵闹闹……简直比那只奇怪的粽子还啰嗦！"],["…好凶…对不起，我们，我们不是故意的…"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.PAIJI,["铁皮？我没有铁皮，我不是机器人！放开我放开我，我只是一只可怜又可爱的小精灵，你拆它就好了！"],["……"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["别拆我别拆我！我们不是故意打扰到你的！我只是想救回我的朋友才不小心闯进来的！ "],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.XINJIDE,["哈哈哈，真是巧合。你所说的朋友，竟然就是那个破破烂烂、从天而降的机器人！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.XINJIDE,["岂止见过。如果不是遇到我这个神通广大的武器大师，它只能作为一堆粉身碎骨的废铁，躺在废墟里了。"],["粉身碎骨？"]]],[TaskStoryPlayer.FUL_MOVIE,["active_20130607_6",true]],[TaskStoryPlayer.DIALOG,[NPC.XINJIDE,["我耗尽身上的0xff0000X合金装甲0xffffff，才终于将那一堆废铜烂铁重新组装了起来。放心，你的朋友已经没事了。"],["好感人…"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["我就知道迪恩不会这么轻易离开我们的！迪恩现在在哪里？赛尔号正在举行起航四周年庆典，如果它能回去，一定是个天大的惊喜！"],null]],[TaskStoryPlayer.DIALOG,[NPC.XINJIDE,["哈哈，这我就不知道了。成功重生后，它就离开这里了。我们素不相识，我可不关心它去哪里了。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["辛基德，那个黑影一定跟迪恩有关。谢谢你告诉我们这么多，再见了，谢谢你救了迪恩。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.FUL_MOVIE,["task_1506_2",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1506.TASK_ID,0,function(param1:Boolean):void
            {
               _map.conLevel["cinkid"].visible = true;
               destroy();
            });
         };
         storyPlayer.start();
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            DisplayUtil.removeForParent(taskMc);
            _map = null;
         }
      }
   }
}
