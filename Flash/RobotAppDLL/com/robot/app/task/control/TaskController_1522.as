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
   
   public class TaskController_1522
   {
      
      public static const TASK_ID:uint = 1522;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      public static const MAP_LOCAL_ID1:int = 10300;
      
      public static const MAP_LOCAL_ID2:int = 10301;
      
      public static const MAP_LOCAL_ID3:int = 10302;
      
      public static const MAP_ID:int = 929;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1522()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "连战神联盟和少主缪斯也战败了，难道真的没有人可以对抗库贝萨了吗？"],["船长，不要失去信心，正义必胜！","反正他们不敢进攻我们了！"],[function():void
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
         TaskDiaLogManager.single.playStory(getTaskArr(1),function():void
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
      
      public static function startState_2(param1:BaseMapProcess = null) : void
      {
         var map:BaseMapProcess = param1;
         if(map != null)
         {
            _map = map;
            if(!_map)
            {
               return;
            }
            if(taskState != TasksManager.ALR_ACCEPT)
            {
               destroy();
               return;
            }
            KTool.hideMapAllPlayerAndMonster();
         }
         TaskDiaLogManager.single.playStory(getTaskArr(2),function():void
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
      
      public static function startState_3_1(param1:BaseMapProcess = null) : void
      {
         var map:BaseMapProcess = param1;
         if(map != null)
         {
            _map = map;
            if(!_map)
            {
               return;
            }
            if(taskState != TasksManager.ALR_ACCEPT)
            {
               destroy();
               return;
            }
            KTool.hideMapAllPlayerAndMonster();
         }
         TaskDiaLogManager.single.playStory(getTaskArr(100),function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            });
            MapManager.changeLocalMap(MAP_LOCAL_ID3);
         });
      }
      
      public static function startState_3(param1:BaseMapProcess = null) : void
      {
         var map:BaseMapProcess = param1;
         if(map != null)
         {
            _map = map;
            if(!_map)
            {
               return;
            }
            if(taskState != TasksManager.ALR_ACCEPT)
            {
               destroy();
               return;
            }
            KTool.hideMapAllPlayerAndMonster();
         }
         TaskDiaLogManager.single.playStory(getTaskArr(3),function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_3,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499584);
               if(param1)
               {
                  startState_4();
               }
            });
         });
      }
      
      public static function startState_4(param1:BaseMapProcess = null) : void
      {
         if(param1 != null)
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
            KTool.hideMapAllPlayerAndMonster();
         }
         TaskDiaLogManager.single.playStory(getTaskArr(4),endTask);
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
         MapManager.changeMap(724);
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TASK_ID);
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
      
      private static function getTaskArr(param1:int = 1) : Array
      {
         var _loc2_:Array = null;
         var _loc3_:TaskMod = null;
         var _loc4_:TaskMod = null;
         var _loc5_:TaskMod = null;
         var _loc6_:TaskMod = null;
         var _loc7_:TaskMod = null;
         var _loc8_:Array = null;
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
         var _loc21_:Array = null;
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
         var _loc40_:Array = null;
         var _loc41_:TaskMod = null;
         var _loc42_:TaskMod = null;
         var _loc43_:TaskMod = null;
         var _loc44_:TaskMod = null;
         var _loc45_:TaskMod = null;
         var _loc46_:TaskMod = null;
         var _loc47_:TaskMod = null;
         var _loc48_:TaskMod = null;
         var _loc49_:Array = null;
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["说的没错，可是还有谁能对抗库贝萨呢？"],["大家都再仔细想想！"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.CARTOON,0,null,null,["cartoon/task_1522_1"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["小息，说得对，星际守护兽的力量一定可以对抗库贝萨！"],["恩恩，我们去找他们吧！"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + ",神兽们居住在普罗特星，不过神兽们的性情可不好捉摸，你们一定要谨慎，不要说话冒犯了他们，知道吗？"],["放心吧船长！"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1522_2",false]);
               _loc2_ = _loc8_ = new Array(_loc3_,_loc4_,_loc5_,_loc6_,_loc7_);
               break;
            case 2:
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["大家看，他们真的在这里，怎么看起来无精打采的！"],["我们快去叫醒他们！"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["赛小息，你忘了船长的嘱咐吗，千万小心，别冒犯了他们！"],["放心，我心里有数！"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["原来是这样。那请问麒麟还要多久才能出来呢？"],["这可说不准。"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZHUQUE,["少则十天半月，多则一年半载吧。"],["什么？这么久？"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QILIN_NEW,["你们好吵啊，而且，竟然敢踩在我的背上。"],["对不起……不知道您喜欢睡在地上……"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["真是对不起，实在是事态紧急，只能出此下策了……"],["好了，下次注意点。"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QILIN_NEW,["真是一群勇敢的赛尔，不过对抗库贝萨，光靠勇气是不够的。"],["嗯，所以我们才来找您啊。"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["麒麟，原来你一直都在听啊？"],["那当然了。"]);
               _loc19_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QILIN_NEW,["最近宇宙海盗一直在捣乱，如果不试探一下你们，怎么能放心呢。"],["原来是这样。"]);
               _loc20_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc2_ = _loc21_ = new Array(_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_,_loc19_,_loc20_);
               break;
            case 100:
               _loc22_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["你是谁？上古一族的爪牙？"],["什么上古一族？我是后羿。"]);
               _loc24_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YIZEER,["我的徒弟鹰眼杰洛里发出了信号说他遇到了危险，我感觉他就在这附近。"],["原来是杰洛里的师父！"]);
               _loc25_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["杰洛里上次战斗中为救少主缪斯受伤，被上古一族带走了。"],["什么？他受伤了？"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YIZEER,["杰洛里现在在哪里？"],["我想应该就在库贝萨那里。"]);
               _loc27_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["我们正要去找他算账！"],["走！我跟你们一起。"]);
               _loc2_ = new Array(_loc22_,_loc23_,_loc24_,_loc25_,_loc26_,_loc27_);
               break;
            case 3:
               _loc28_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["快看！库贝萨在那里！"],["小心！他周围好像有些奇怪的东西在保护他！"]);
               _loc29_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QILIN_NEW,["那是一个用特殊能量布置下来的结界，一旦靠近就会被强大的能量反弹回来。"],["啊？那怎么办？"]);
               _loc30_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QILIN_NEW,["看来能量的来源都是来自墙上那个神秘的符号，破坏了那个符号，应该就能解除这个结界"],["神秘的符号？"]);
               _loc31_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["可是那个符号太远了，又不能靠近，怎么办？"],["赶快想想办法！"]);
               _loc32_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YIZEER,["小小把戏，根本入不了我的法眼，看我的！"],["后羿，你有办法？"]);
               _loc33_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc34_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["盟主早就预料到你们会来打扰库贝萨修炼，特地派我在这里看守"],["果然很狡猾！"]);
               _loc35_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YIZEER,["你也是天蛇七魔将？那你一定知道杰洛里的下落了？"],["对！杰洛里在哪里？"]);
               _loc36_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["杰洛里？那个不识时务的家伙，说不定早就被盟主……哈哈"],["你说什么？说清楚一点！"]);
               _loc37_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["想救出杰洛里？先要问问我同不同意。"],["好狂妄的家伙！"]);
               _loc38_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YIZEER,["好，我就替杰洛里教训一下你这个不讲情义的同伴！"],["放马过来吧！"]);
               _loc39_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc2_ = _loc40_ = new Array(_loc28_,_loc29_,_loc30_,_loc31_,_loc32_,_loc33_,_loc34_,_loc35_,_loc36_,_loc37_,_loc38_,_loc39_);
               break;
            case 4:
               _loc41_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["快看！库贝萨苏醒了！"],["看起来他的能量恢复得差不多了。"]);
               _loc42_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["又是你们，来打扰我修炼，这次还带了几个新帮手。"],["库贝萨，这次我们不会放过你的！"]);
               _loc43_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QILIN_NEW,["库贝萨，你觉悟吧！我们星际守护兽是不会允许你在宇宙胡作非为的！"],["星际守护兽？听起来很厉害的样子。"]);
               _loc44_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["没有人可以阻止我们上古一族的崛起，不管你们是星际神兽还是什么。"],["那就让你尝尝我们的厉害！"]);
               _loc45_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1522_3",true]);
               _loc46_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["嗯，我一定回去报告给罗杰船长！"],["麒麟，你们怎么样？"]);
               _loc47_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QILIN_NEW,["还好，我们需要回普罗特星修养一阵子了。"],["你们一定要好好休息！"]);
               _loc48_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc2_ = _loc49_ = new Array(_loc41_,_loc42_,_loc43_,_loc44_,_loc45_,_loc46_,_loc47_,_loc48_);
         }
         return _loc2_;
      }
   }
}
