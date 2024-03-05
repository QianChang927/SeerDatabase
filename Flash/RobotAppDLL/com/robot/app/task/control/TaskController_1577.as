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
   
   public class TaskController_1577
   {
      
      public static const TASK_ID:uint = 1577;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      public static const MAP_LOCAL_ID1:int = 10316;
      
      public static const MAP_LOCAL_ID2:int = 10317;
      
      public static const MAP_LOCAL_ID3:int = 10318;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1577()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "精灵联军和库贝萨的决战已经打响，不知道缪斯他们现在战况怎么样了……"],["船长，我们赛尔也要出一份力！","听起来好危险的样子……"],[function():void
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
         MapManager.changeMap(4);
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
         var _loc37_:TaskMod = null;
         var _loc38_:TaskMod = null;
         var _loc39_:TaskMod = null;
         var _loc40_:TaskMod = null;
         var _loc41_:TaskMod = null;
         var _loc42_:TaskMod = null;
         var _loc43_:TaskMod = null;
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["缺少了战神联盟的支援我有些担心，但是缪斯他们的勇气确实值得佩服。"],["嗯，勇气就是力量的源泉！"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["你们快去天蛇星查看一下战况，记住如果不能打败库贝萨也要保证安全，毕竟我们还有战神联盟没有出手。"],["船长我知道了。"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1577_1",false]);
               _loc2_ = [_loc3_,_loc4_,_loc5_];
               break;
            case 2:
               _loc6_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["少主成功了！库贝萨完蛋了！"],["不！好像没有这么简单！"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["这次你们真的激怒我了，我要让你们付出代价！"],["可恶！这样还不能击败库贝萨！"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QILIN_NEW,["缪斯已经受伤了，我们先撤退吧，没有战神联盟的力量我们无法打败库贝萨！"],["想走？没这么容易！"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAMO_LEITE,["你们先走，这里就交给我！"],["哈哈，口气不小。"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["就凭你也想阻止我？我可是你们龙族的克星。"],["可是我们龙族有守护这个世界的使命！"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["你们走吧，我自信可以拖住库贝萨！"],["那龙王子你保重了！"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc2_ = [_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_];
               break;
            case 3:
               _loc17_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["缪斯，你怎么了？"],["我们被库贝萨击败了。"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOYESI,["少主被瞳之神能的巨大力量反噬，现在好像已经失明了。"],["原来是这样。"]);
               _loc19_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["我看不见了没有什么，只是还是没有打败库贝萨，我好不甘心……"],["少主你不要这样说……"]);
               _loc20_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc21_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["你冷静一下，他是赤西西比超进化之后的赤西格，生活在火山中的善良精灵，不是坏人。"],["你是？雷神！"]);
               _loc22_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUYISI,["既然雷神这样说了，那一定是真的。我是大地之怒罗恩斯的朋友鲁伊斯，守护宇宙间的正义是我们共同的责任。"],["原来是这样。"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOYESI,["你是罗恩斯的朋友？那你一定也拥有大地神力，快帮我们治疗少主！"],["哦？我来看看！"]);
               _loc24_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc25_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太棒了，谢谢你！"],["不用客气。"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["最近宇宙中时空的秩序被一股神秘力量打乱了，很多精灵都拥有了超进化的能力。"],["那不是一件好事吗？"]);
               _loc27_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["我始终有些担忧，而且这种不稳定的状态也出现在了盖亚身上……"],["战神盖亚？"]);
               _loc28_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc29_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哇！战神盖亚超进化了！"],["我的双臂从没有感觉这样强的力量！"]);
               _loc30_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["盖亚，我真为你的突破感到高兴，我最好的战友！"],["这也是我的荣幸！"]);
               _loc31_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["库贝萨的末日到了，这次我们一定可以打败他！"],["战神联盟，出发！"]);
               _loc2_ = [_loc17_,_loc18_,_loc19_,_loc20_,_loc21_,_loc22_,_loc23_,_loc24_,_loc25_,_loc26_,_loc27_,_loc28_,_loc29_,_loc30_,_loc31_];
               break;
            case 4:
               _loc32_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["竟然又自投罗网来了，手下败将。"],["库贝萨你嚣张的日子结束了！"]);
               _loc33_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["我们战神联盟绝不会允许你继续在宇宙胡作非为！"],["哈哈，口气不小。"]);
               _loc34_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc35_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["可恶，难道战神联盟合力还是不行吗？"],["战斗还没有结束！"]);
               _loc36_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["不要失去信心，我们还有盖亚超进化的力量！"],["战神盖亚，赶快出手！"]);
               _loc37_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1577_2",true]);
               _loc38_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc39_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["各位大人大量，绕我一命吧！"],["哼，你也有今天！"]);
               _loc40_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc41_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["这次宇宙的危机总算告一段落了，缪斯，你就继续留在天蛇星吧！"],["嗯，谢谢你们的帮助！"]);
               _loc42_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["我会继承哥哥的遗愿，好好守护天蛇星的！"],["那样就好。"]);
               _loc43_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["如果需要我们的帮助，随时呼叫我们。我们战神联盟会继续守护宇宙的正义！"],["谢谢，再见战神联盟！"]);
               _loc2_ = [_loc32_,_loc33_,_loc34_,_loc35_,_loc36_,_loc37_,_loc38_,_loc39_,_loc40_,_loc41_,_loc42_,_loc43_];
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
