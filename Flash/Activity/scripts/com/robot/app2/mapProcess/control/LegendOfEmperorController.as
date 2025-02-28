package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LegendOfEmperorController
   {
      
      private static var _taskMc:MovieClip;
      
      public static var curStep:uint;
      
      private static const _fulMovieStrs:Array = ["LegendOfEmperorFulMovie1","LegendOfEmperorFulMovie2"];
      
      private static const _mapAnimate:String = "LegendOfEmperor_Animate";
       
      
      public function LegendOfEmperorController()
      {
         super();
      }
      
      private static function loadTaskMc(param1:uint = 1) : Promise
      {
         var _deferred:Deferred = null;
         var frame:uint = param1;
         _deferred = new Deferred();
         if(_taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               _taskMc = param1;
               _taskMc.gotoAndStop(frame);
               MapManager.currentMap.topLevel.addChild(_taskMc);
               _deferred.resolve(true);
            });
         }
         else
         {
            if(_taskMc.parent == null)
            {
               MapManager.currentMap.topLevel.addChild(_taskMc);
            }
            _deferred.resolve(true);
         }
         return _deferred.promise;
      }
      
      public static function playStroy(param1:int) : void
      {
         var index:int = param1;
         loadTaskMc(index).then(function():Promise
         {
            return playStory(index);
         }).then(function():Promise
         {
            return SocketConnection.sendWithPromise(45702,[1,1 + index]);
         }).then(function():void
         {
            DisplayUtil.removeForParent(_taskMc);
            if(index < 3)
            {
               ModuleManager.showAppModule("LegendOfEmperorMainPanel");
            }
            else
            {
               _taskMc = null;
               ModuleManager.showAppModule("LegendOfEmperorAwardPanel");
            }
         });
      }
      
      private static function playStory(param1:int, param2:Boolean = true) : Promise
      {
         var _deferred:Deferred = null;
         var index:int = param1;
         var showIcon:Boolean = param2;
         _deferred = new Deferred();
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         if(_taskMc.parent == null)
         {
            MapManager.currentMap.topLevel.addChild(_taskMc);
         }
         MapNamePanel.hide();
         ToolBarController.panel.hide();
         MapManager.currentMap.topLevel.mouseChildren = true;
         MapManager.currentMap.topLevel.mouseEnabled = true;
         LevelManager.iconLevel.visible = false;
         TaskDiaLogManager.single.playStory(getStroy(index),function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            if(showIcon)
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.show();
               MapNamePanel.show();
            }
            _deferred.resolve(true);
         });
         return _deferred.promise;
      }
      
      private static function getStroy(param1:uint) : Array
      {
         var _loc2_:Array = [];
         switch(param1)
         {
            case 0:
               _loc2_.push(new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[_fulMovieStrs[0]]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,1,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["相信你已经看到了宇宙中的强光照耀，我们需要调查这异象的来源，做好准备就出发吧！奥德迪尔是大自然的睿智长者，先去风语之森问问他吧。"],["我现在就出发！"]));
               break;
            case 1:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,2,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ODEAL,["你好，赛尔！自然之风已经告诉了我你此行的目的。我听到毁灭之海的海浪在悄悄低语，也许，你找的答案在那里。"],["好的，我这就去毁灭之海，谢谢你！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,3,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.CANGLAN,["赛尔，宇宙中涌动着强光，这海渊下的废墟也仿佛受到了感召，发出响应……"],["这究竟是怎么回事？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.CANGLAN,["在整个宇宙创世之初，出现了一位千古皇帝，他英明神武，将所有星球上的生灵都统一在一起，那时没有争斗，所有生灵都在他的治下和谐共处，一派欣欣向荣的景象，直到这位皇帝突然失踪……"],["皇帝失踪了？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.CANGLAN,["是的，没有人知道皇帝为何失踪，皇帝失踪后，他定下的秩序不断崩坏，最终，宇宙陷入战乱，变成今天的样子。"],["海底呢喃的低语到底在说什么？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.CANGLAN,["这些上古的语言失传已久，我也无法听懂其中的含义。用你的录音机录下声音，说不定悲鸣之地有人能读懂。"],["好吧，我这就去。"]));
               break;
            case 2:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,4,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAD_GUARD,["你不属于这里，我也不想知道你的来意，离开这儿！"],["这里的悲鸣之声确实跟毁灭之海的声音很像，但是语调比这里要激昂多了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAD_GUARD,["你……你在听我说话吗？无视我吗？"],["尊敬的守护者，请你听听看这段声音（赛尔打开了录音机）"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAD_GUARD,["你刚才果然无视我了！嗯，这声音……皇帝即将降临，将与宿敌做最后的决战！"],["皇帝的宿敌？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAD_GUARD,["可恶，刚才无视了我，现在又听我说话了！我没有更多的信息了，你走吧！"],["额，还是要感谢你。我走啦。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAD_GUARD,["等等，这段话里并没有说出皇帝宿敌的名字，不过我想应该和弑神之境有关。"],["好，我就去弑神之境。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,5,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEADOFKINGS_ZOUS,["赛尔！你此刻出现在这里，难道你已经知道了皇帝的事情？"],["知道一点，照耀整个宇宙的光芒与皇帝有关吗？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEADOFKINGS_ZOUS,["那必定是皇帝的光辉！我们诸神曾经是皇帝部下的将官，不仅仅是我们，当时皇帝治下有许许多多能人异士，我们在皇帝的领导下管理着宇宙。"],["后来皇帝失踪了？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEADOFKINGS_ZOUS,["是的，皇帝突然失踪，我们群龙无首，陷入了无尽的斗争中，皇帝创下的和平秩序全部被打破了……"],["唉……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEADOFKINGS_ZOUS,["但我一直在寻找着皇帝的下落，期望他能够再次出现，重铸宇宙新秩序！这里是传闻中皇帝最后出现的地方，所以我一看到皇帝的光芒就感到这里来了。"],["好像这里也没什么异常……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[_fulMovieStrs[1]]));
               break;
            case 3:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,6,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["宇宙中的强光是上古时代的皇帝发出的，这次皇帝出现，将会引领我们对抗恶势力！"],["干的不错，选取你的奖励吧！"]));
         }
         return _loc2_;
      }
   }
}
