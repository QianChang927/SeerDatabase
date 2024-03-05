package com.robot.app.task.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   
   public class TaskController_1563
   {
      
      public static const TASK_ID:uint = 1563;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      public static const MAP_LOCAL_ID1:int = 10311;
      
      public static const MAP_LOCAL_ID2:int = 10312;
      
      public static const MAP_LOCAL_ID3:int = 10313;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1563()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_" + TASK_ID),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "你来了，库贝萨已经霸占了天蛇星，再不阻止他，上古一族的卷土重来就难以遏制了！"],["船长，我们该做些什么？","让他继续找去吧。"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               SocketConnection.send(1022,84350408);
               startPro();
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TaskDiaLogManager.single.playStory(getTaskList(1),function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_1,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499584);
               if(param1)
               {
                  MapManager.changeLocalMap(MAP_LOCAL_ID1);
               }
            });
         });
      }
      
      public static function startState2(param1:BaseMapProcess = null) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TaskDiaLogManager.single.playStory(getTaskList(2),function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_2,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499584);
               if(param1)
               {
                  MapManager.changeLocalMap(MAP_LOCAL_ID2);
               }
            });
         });
      }
      
      public static function startState3(param1:BaseMapProcess = null) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TaskDiaLogManager.single.playStory(getTaskList(3),function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_3,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499584);
               if(param1)
               {
                  MapManager.changeLocalMap(MAP_LOCAL_ID3);
               }
            });
         });
      }
      
      public static function startState4(param1:BaseMapProcess = null) : void
      {
         _map = param1;
         TaskDiaLogManager.single.playStory(getTaskList(4),endTask);
      }
      
      private static function endTask() : void
      {
         KTool.showMapAllPlayerAndMonster();
         SocketConnection.send(1022,84499587);
         destroy();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",function():void
            {
               TasksManager.complete(TASK_ID,TASK_STAGE_4);
            });
         });
         MapManager.changeMap(1);
      }
      
      private static function getTaskList(param1:int = 1) : Array
      {
         var _loc2_:Array = null;
         var _loc3_:TaskMod = null;
         var _loc4_:TaskMod = null;
         var _loc5_:TaskMod = null;
         var _loc6_:TaskMod = null;
         var _loc7_:TaskMod = null;
         var _loc8_:TaskMod = null;
         var _loc9_:TaskMod = null;
         var _loc10_:TaskMod = null;
         var _loc11_:TaskMod = null;
         var _loc12_:TaskMod = null;
         var _loc13_:TaskMod = null;
         var _loc14_:TaskMod = null;
         var _loc15_:TaskMod = null;
         var _loc16_:TaskMod = null;
         var _loc17_:TaskMod = null;
         var _loc18_:TaskMod = null;
         var _loc19_:TaskMod = null;
         var _loc20_:TaskMod = null;
         var _loc21_:TaskMod = null;
         var _loc22_:TaskMod = null;
         var _loc23_:TaskMod = null;
         var _loc24_:TaskMod = null;
         var _loc25_:TaskMod = null;
         var _loc26_:TaskMod = null;
         var _loc27_:TaskMod = null;
         var _loc28_:TaskMod = null;
         var _loc29_:TaskMod = null;
         var _loc30_:TaskMod = null;
         var _loc31_:TaskMod = null;
         var _loc32_:TaskMod = null;
         var _loc33_:TaskMod = null;
         var _loc34_:TaskMod = null;
         var _loc35_:TaskMod = null;
         var _loc36_:TaskMod = null;
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["这段时间战神联盟一直在帮助妖狐进化，如果成功进化成九尾妖狐，再加上战神联盟的力量，就有信心可以战胜库贝萨了！"],["对！战神联盟战无不胜！"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["你们和少主缪斯一起去找到战神联盟，我们需要联合其他正义的精灵，尽快开始对上古一族的反击！"],["恩，我们这就去找他们。"]);
               _loc2_ = [_loc3_,_loc4_];
               break;
            case 2:
               _loc5_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUWEIYAOHU,["谢谢你们，战神联盟，我终于成功进化到最高形态了！"],["这全靠你自己的努力突破。"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["巨尾妖狐，你现在能够自由控制你体内的强大能量吗？"],["等等……感觉还有些不稳定……"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["不愧是传说中的巨尾妖狐，居然可以分支进化成三个形态！"],["可惜他现在还不能完全使用三个形态的力量。"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["巨尾妖狐，你现在感觉怎么样，只有完全掌握分支进化的三个形态，才能说是完全进化成功了。"],["我感觉前所未有的能量在我体内翻滚……"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUWEIYAOHU,["我体内好像有三股不同的能量在翻滚，每一个都想压制住其他两个，冒出头来……"],["看来你还需要试炼……"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["盖亚，你怎么样了？"],["我也不知道，奇怪……"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["也许是最近和妖狐的试炼让我的境界也发生了一些改变，我总感觉很快我会控制不住体内的能量。"],["什么？你可是战神盖亚！"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["盖亚和巨尾妖狐的状态都有些不稳定，看来我们一时还走不开……"],["为什么试炼了这么久还是不能稳定？"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["我也不清楚，只是预感到近来时间和空间的秩序都有些混乱，力量的流动诡异莫测，说不定近期会有大量的精灵超进化。"],["超进化？你是说真的吗？"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["不行，我们必须尽快对库贝萨反击，不能再拖延下去了！"],["嗯，这件事情拖不得。"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["其他的正义精灵都在五大神兽的召集下，在普罗特星集结了，你们先带领他们打响第一波反击，我们很快就会赶来！"],["好，就让我们吹响决战的号角。"]);
               _loc2_ = [_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_];
               break;
            case 3:
               _loc19_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QILIN_NEW,["你们来了，我们五大神兽已经准备好了，这次一定要库贝萨付出代价！"],["只有你们吗？"]);
               _loc20_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["除了库贝萨，其他上古一族现在也盘踞在天蛇星，我们的敌人可是更加强大了！"],["我们无所畏惧！"]);
               _loc21_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["无论怎样，这次进攻势在必行，即使拼上性命，也要和库贝萨一战！"],["少主说得好！"]);
               _loc22_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QILIN_NEW,["这下我们的力量就强大多了。"],["对，我们不是孤军奋战！"]);
               _loc24_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc25_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QILIN_NEW,["少主，请带路吧，毕竟你对天蛇星比较熟悉。"],["嗯，义不容辞！"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["有了大家的加入，这一战我们信心十足！出发，目标天蛇星！"],["决战开始了！"]);
               _loc27_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1563_1",false]);
               _loc2_ = [_loc19_,_loc20_,_loc21_,_loc22_,_loc23_,_loc24_,_loc25_,_loc26_,_loc27_];
               break;
            case 4:
               _loc28_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["库贝萨！那是我哥哥的宝座，你给我下来！"],["你哥哥？"]);
               _loc29_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["那个蠢货已经变成一块石头了，现在你们又要来送死吗？"],["谁死还不一定呢？"]);
               _loc30_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc31_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QILIN_NEW,["可恶，上古一族的数量实在是太多了。"],["得想个办法！"]);
               _loc32_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOYESI,["看我的！"],["摩耶斯，你有办法？"]);
               _loc33_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc34_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["没想到你们还有两下子，只不过还远远不够啊！"],["库贝萨，你别嚣张！"]);
               _loc35_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["库贝萨，我们之间的恩怨，就由我们来解决！"],["少主加油！"]);
               _loc36_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1563_2",true]);
               _loc2_ = [_loc28_,_loc29_,_loc30_,_loc31_,_loc32_,_loc33_,_loc34_,_loc35_,_loc36_];
         }
         return _loc2_;
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
         TaskDiaLogManager.single.destroy();
      }
      
      private static function get taskMc() : MovieClip
      {
         if(_map == null)
         {
            return null;
         }
         return _map.conLevel["taskMc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TASK_ID);
      }
   }
}
