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
   
   public class TaskController_1536
   {
      
      public static const TASK_ID:uint = 1536;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      public static const MAP_LOCAL_ID1:int = 10303;
      
      public static const MAP_LOCAL_ID2:int = 10305;
      
      public static const MAP_LOCAL_ID3:int = 10306;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1536()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "最近不少精灵感应到北斗七星殿消失了，我直觉一定和库贝萨有关！"],["消失了？那星灵王怎么样了？","也许只是一种幻觉吧。"],[function():void
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
         MapManager.changeMap(82);
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
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["这正是我担心的，星灵王身上流淌着次元一族特有的能量，千万不能被库贝萨利用！"],["船长，派我去查看一下吧！"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.CARTOON,0,null,null,["cartoon/task_1536_1"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["上次那只叫萨恩德的精灵技能实在太过诡异了，连伊泽尔也没能追上他。"],["恩，那只精灵确实十分难缠。"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + ",这次他可能还会出现，你们一定要格外小心！"],["放心吧船长！等我们好消息吧！"]);
               _loc2_ = [_loc3_,_loc4_,_loc5_,_loc6_];
               break;
            case 2:
               _loc7_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["好久不见了斯塔克。"],["库贝萨！没想到是你。"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XINGLINGWANG_SITAKE,["没想到数千年过去了，你还是这样卑鄙无耻，竟然背后偷袭！"],["哈哈，这是对我最好的赞誉。"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["库贝萨！还跟他废话什么，快点，盟主还在等我们。"],["是！"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["斯塔克，我要借你的能量一用了，听说你刚刚吸收了七大护法的能量，真是好极了！"],["什么？你要吸走我的能量？"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["好强大的力量！这种状况下居然还可以挣脱我的控制！"],["毕竟他是星灵王！"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["没想到他竟会用这种方式，他已经是个废人了，我们走吧。"],["什么？发生了什么？"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["库贝萨，你的能量恢复了吗，盟主可是很关心这个。"],["恩，我感觉好多了。"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["次元一族真是我最好的补给，吸收了曾经用来封印我的能力，我从没感觉这么好。"],["那我们赶紧走吧，盟主还在等我们。"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc2_ = [_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_];
               break;
            case 3:
               _loc18_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc19_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["星灵王，你怎么样了？"],["是库贝萨……"]);
               _loc20_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XINGLINGWANG_SITAKE,["他偷袭了我，还吸走了我的能量……"],["什么？库贝萨吸走了你的能量？"]);
               _loc21_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YIZEER,["没想到还是来晚了一步……"],["放心，情况没有想象的那么坏。"]);
               _loc22_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XINGLINGWANG_SITAKE,["我用最后的力气震断了全身经脉，他得不到我全部的能量。咳咳……”"],["星灵王！"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc24_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["星灵王！你要坚持住，我带你回去找罗杰船长！"],["咳咳……我恐怕……"]);
               _loc25_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XINGLINGWANG_SITAKE,["我恐怕坚持不住了，只可惜次元一族可能就要从宇宙中绝迹了……"],["不会的！"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc27_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEIYING,["斯塔克，没想到才多久不见你竟然沦落到这个地步。"],["你是谁？"]);
               _loc28_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEIYING,["你们这些渺小的蝼蚁，不配与我暗黑之神说话！"],["什么？！"]);
               _loc29_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc30_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["伊泽尔，你怎么样？"],["我没事……"]);
               _loc31_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YIZEER,["刚才那个家伙实力深不可测，如果我不出手，你们可能已经……以后不要这么冲动了。"],["对不起……"]);
               _loc32_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["他到底是谁呢？为什么要带走斯塔克？"],["我也不知道……"]);
               _loc33_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YIZEER,["他简直就是神一般的存在，黑暗中的闪电，有着令人不敢反抗的精神压迫力！"],["这么厉害的家伙！可惜看起来不太友善。"]);
               _loc34_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哎，斯塔克……就这样牺牲了自己……"],["真是伟大！不愧是星灵王！"]);
               _loc35_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
               _loc2_ = [_loc18_,_loc19_,_loc20_,_loc21_,_loc22_,_loc23_,_loc24_,_loc25_,_loc26_,_loc27_,_loc28_,_loc29_,_loc30_,_loc31_,_loc32_,_loc33_,_loc34_,_loc35_];
               break;
            case 4:
               _loc36_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["为什么这么多人为我受到伤害……而我什么都不能做……"],["少主，你别太自责。"]);
               _loc37_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["现在五大神兽和星灵王都不能阻止库贝萨，事情变得严重了。"],["不要太悲观，我们还有希望。"]);
               _loc38_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YIZEER,["一切的牺牲都是有意义的，正是有了前赴后继的牺牲，才能最后战胜强大的敌人"],["我们真的可以战胜上古一族吗？"]);
               _loc39_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["可是库贝萨看起来无人可挡……"],["不要丧失信心！"]);
               _loc40_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YIZEER,["黎明前的黑夜总是漫长的，但是黑夜再漫长，也不能阻止黎明的到来，要始终相信这一点。"],["说得对！"]);
               _loc41_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1536_1",true]);
               _loc2_ = [_loc36_,_loc37_,_loc38_,_loc39_,_loc40_,_loc41_];
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
