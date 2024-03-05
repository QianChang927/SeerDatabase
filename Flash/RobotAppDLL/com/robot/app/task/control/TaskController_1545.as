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
   
   public class TaskController_1545
   {
      
      public static const TASK_ID:uint = 1545;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      public static const MAP_LOCAL_ID1:int = 10309;
      
      public static const MAP_LOCAL_ID2:int = 10308;
      
      public static const MAP_LOCAL_ID3:int = 10309;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1545()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "你来了，战神盖亚的哥哥瑞尔斯最近正在寻找盖亚，他应该还不知道战神联盟上次战败的事情。"],["战神的哥哥？瑞尔斯？","让他继续找去吧。"],[function():void
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
         var _loc37_:TaskMod = null;
         var _loc38_:TaskMod = null;
         var _loc39_:TaskMod = null;
         var _loc40_:TaskMod = null;
         var _loc41_:TaskMod = null;
         var _loc42_:TaskMod = null;
         var _loc43_:TaskMod = null;
         var _loc44_:TaskMod = null;
         var _loc45_:TaskMod = null;
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["恩，盖亚与瑞尔斯约定每年都会进行一次较量，可是这次盖亚却没有出现，所以瑞尔斯正在找他。"],["可是现在盖亚在哪里呢？"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["你们快去找到瑞尔斯，我们还需要他的力量，一起去帮助少主缪斯！"],["恩，我们这就去找他。"]);
               _loc2_ = [_loc3_,_loc4_];
               break;
            case 2:
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.RUIERSI,["盖亚会在这里吗？总感觉他好像来过这里。"],["这里怎么连个人都没有。"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.RUIERSI,["什么上古一族？我是瑞尔斯。"],["不管你是谁，出现在这里肯定不是什么好人。"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUOENSI,["让我代表正义，消灭你们这些可恶的败类！"],["喂喂喂！"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.RUIERSI,["这人好不讲道理。好，反正没找到盖亚，就和他过过招吧！"],["来吧！"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.RUIERSI,["我和弟弟盖亚最近失去了联系，连约好的较量也没有来，你们知道他去哪里了吗？"],["他现在应该在哪个地方修炼吧……"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["上次战神联盟在与上古一族的战斗中完败，现在他们应该都在一起休息，等待下一次突破吧！"],["什么？你是战神盖亚的哥哥？"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUOENSI,["真是不好意思，上古一族入侵了我的家乡塔克星，我被愤怒冲昏了头脑了。"],["没有关系，不打不相识。"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.RUIERSI,["你们就是那个什么上古一族？"],["上古一族？我们是天蛇七魔将。"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["你们很不安分啊，最近老是在这里晃悠什么。话说你长得可比你弟弟奇怪多了，跟煤场捡出来黑炭似的。"],["你说什么？"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["难道盟主遭遇到了什么危险？"],["不要跟他们纠缠，快回去看看！"]);
               _loc19_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
               _loc20_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["天蛇星到底发生了什么？他们这么紧张……"],["不知道少主缪斯现在怎么样了……"]);
               _loc21_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.RUIERSI,["好不容易找到个合适的对手，竟然跑得这么快。改日我定要与他再较量较量！"],["先不要管这些了，我们快去天蛇星看看。"]);
               _loc2_ = [_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_,_loc19_,_loc20_,_loc21_];
               break;
            case 3:
               _loc22_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANSHEXINGMENGZHU,["库贝萨，力量恢复得怎么样？"],["嗯，从来没感觉这么好过。"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["真是要感谢你，现在天蛇星是我的，你也是我的了。"],["你说什么？！"]);
               _loc24_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc25_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["快放开我哥哥！"],["哈哈，那就要看你的本事了。"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1545_1",true]);
               _loc27_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc28_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["从此以后天蛇星就是我们上古一族的了！哈哈哈哈！"],["你休想霸占天蛇星！"]);
               _loc29_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc30_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["哥哥……哥哥……"],["少主你振作啊！"]);
               _loc31_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOYESI,["萨恩德！还不快带少主走！"],["可是你怎么办？"]);
               _loc32_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc33_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGGUXIXIAOGUAI,["老大，快追！"],["算了……"]);
               _loc34_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
               _loc2_ = [_loc22_,_loc23_,_loc24_,_loc25_,_loc26_,_loc27_,_loc28_,_loc29_,_loc30_,_loc31_,_loc32_,_loc33_,_loc34_];
               break;
            case 4:
               _loc35_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,8,"mc8"]);
               _loc36_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.RUIERSI,["她一定是太过悲伤，精神已经彻底崩溃了。"],["怎么办，快救救少主！"]);
               _loc37_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUOENSI,["让我用大地神力来帮她恢复吧。"],["真的吗？快试试！"]);
               _loc38_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,9,"mc9"]);
               _loc39_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["少主，库贝萨霸占了天蛇星，你一定要带领我们重新夺回天蛇星，为盟主报仇！"],["放心吧！我一定会的！"]);
               _loc40_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,10,"mc10"]);
               _loc41_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOYESI,["少主，其实盟主做这些都是为了你，你原谅他吧！"],["什么？哥哥他……"]);
               _loc42_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOYESI,["少主，天蛇星只有你拥有瞳之神能的天赋，可是这种能力一定需要足够的仇恨才能激发出最强的力量，可是你又天性善良。"],["所以哥哥他才要这样逼我？"]);
               _loc43_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOYESI,["唤醒库贝萨确实是盟主一时失算，最后酿成了这样的恶果，但是他做这些都是为了你，为了天蛇星啊！"],["哥哥他太傻了！"]);
               _loc44_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["放心吧哥哥！我一定会替你报仇，夺回天蛇星的！"],["加油少主！打败库贝萨！"]);
               _loc45_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,11,"mc11"]);
               _loc2_ = [_loc35_,_loc36_,_loc37_,_loc38_,_loc39_,_loc40_,_loc41_,_loc42_,_loc43_,_loc44_,_loc45_];
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
      
      public static function gotoWhich(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[2]) && !param1[3])
            {
               (map.conLevel["taskMc"] as MovieClip).gotoAndStop(7);
               startState4(map);
               return;
            }
         });
      }
      
      public static function taskNow(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && !param1[1])
            {
               startState2(map);
               return;
            }
         });
      }
   }
}
