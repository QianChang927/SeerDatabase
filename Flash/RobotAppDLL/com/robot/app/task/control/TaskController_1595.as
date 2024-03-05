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
   
   public class TaskController_1595
   {
      
      public static const TASK_ID:uint = 1595;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      public static const MAP_LOCAL_ID1:int = 10319;
      
      public static const MAP_LOCAL_ID2:int = 10320;
      
      public static const MAP_LOCAL_ID3:int = 10321;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1595()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "几经波折，战神联盟终于打败了库贝萨，这段宇宙危机可以告一段落了。"],["船长，太好了！","不关我们的事吧……"],[function():void
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
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["除了库贝萨，上古一族还有很多余孽，不彻底清除始终是个隐患……"],["船长，剩下的就交给我们吧！"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["你们去天蛇星查看一下，看看情况怎么样了，能不能给战神联盟帮什么忙。"],["非常乐意！"]);
               _loc2_ = [_loc3_,_loc4_];
               break;
            case 2:
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["是战神联盟！库贝萨呢？"],["他早就溜了。"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["他已经被我们打回第一形态，再也没有能力危害宇宙了。"],["没想到库贝萨也会有今天。"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["你们都是我的敌人，是你们杀死了我哥哥！"],["你搞错了吧！"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["少主你弄错了吧，杀死天蛇星盟主的是库贝萨！我们是你的朋友！"],["等等，好像有点不对劲。"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["是你，鲁伊斯，刚刚发生了什么？"],["我们正是追踪那个黑影而来。"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUYISI,["缪斯心中的仇恨还没消散，所以才被那个黑影有机可乘，整个宇宙最近诡异的能量波动都应该和他有关。"],["听起来很严重。"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["刚才突然不知道怎么了，心中只有复仇的念头，刚刚发生了什么？"],["还好现在没事了。"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["那究竟是什么东西？"],["看起来很可怕了！"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DELAITAN,["我们一路追踪来看，它似乎可以附身到精灵身上，一旦精灵有些负面的邪念，就会操控精灵的意志。"],["我们要赶紧查看一下。"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们也赶紧跟上去看看吧！"],["恩，赶快！"]);
               _loc2_ = [_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_];
               break;
            case 3:
               _loc19_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc20_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["又是一只超进化精灵，他看起来比赤西格更加狂躁，我的担心果然应验了。"],["他到底怎么了？"]);
               _loc21_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DIWALA,["你们这些入侵者，我要把你们赶出这里。"],["我们不是入侵者。"]);
               _loc22_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DIWALA,["我这是怎么了？"],["你刚刚被那个黑影控制了。"]);
               _loc24_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["这个黑影到底是什么？"],["这次它逃不掉了。"]);
               _loc25_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["我们赶紧追上去，不能让它跑了。"],["慢点，我感觉不对。"]);
               _loc27_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["我从它的身上感觉到了远古系的气息，说不定与库贝萨有关，不要轻易上当。"],["远古系？难道是上古一族。"]);
               _loc28_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["我只从它身上感受到了强烈的邪恶气息，既然是上古一族，那就一起清除掉吧，我们走！"],["战神联盟，小心！"]);
               _loc29_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1595_1",false]);
               _loc2_ = [_loc19_,_loc20_,_loc21_,_loc22_,_loc23_,_loc24_,_loc25_,_loc26_,_loc27_,_loc28_,_loc29_];
               break;
            case 4:
               _loc30_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc31_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["又是那道黑影，它跑到哪里去了？"],["对，就是你们追踪的那个黑影。"]);
               _loc32_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["最近那个黑影经常从那扇门里跑出来，四处作乱，伟大的战神联盟，你们快去看看吧！"],["我们去看看！"]);
               _loc33_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1595_2",true]);
               _loc34_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc35_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["我感受到了，你身上有远古系的气息，你就是那个黑影！"],["知道得太晚了。"]);
               _loc36_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["把你们引过来可真费了不少力气，不过现在总算大功告成了，哈哈哈哈！"],["那四个黑影是什么？！"]);
               _loc37_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc38_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["啊！这是战神盖亚的复制品！简直近乎完美！"],["一看就是冒牌货！"]);
               _loc39_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["就凭你也想驾驭我们？可笑。"],["你说什么？"]);
               _loc40_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc41_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1595_3",true]);
               _loc2_ = [_loc30_,_loc31_,_loc32_,_loc33_,_loc34_,_loc35_,_loc36_,_loc37_,_loc38_,_loc39_,_loc40_,_loc41_];
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
