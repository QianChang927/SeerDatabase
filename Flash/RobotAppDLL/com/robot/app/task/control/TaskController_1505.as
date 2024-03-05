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
   
   public class TaskController_1505
   {
      
      public static const TASK_ID:uint = 1505;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      public static const MAP_LOCAL_ID:int = 10298;
      
      public static const MAP_ID:int = 93;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1505()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + ",不久之前上古魔尊在和谱尼的对决受到了重创，相信最近一段时间，上古一族不会有什么破坏性的举动！"],["没错，这正是我们反击的机会！","反正他们不敢进攻我们了！"],[function():void
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
                  MapManager.changeLocalMap(MAP_LOCAL_ID);
               }
            });
         });
      }
      
      private static function startState_2() : void
      {
         TaskDiaLogManager.single.playStory(getTaskArr(2),function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_2,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499584);
               if(param1)
               {
                  startState_3();
               }
            });
         });
      }
      
      private static function startState_3() : void
      {
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
      
      private static function startState_4() : void
      {
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
         MapManager.changeMap(MAP_ID);
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TASK_ID);
      }
      
      public static function initForMap10298(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
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
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && !param1[1])
            {
               KTool.hideMapAllPlayerAndMonster();
               startState_2();
            }
            else if(Boolean(param1[1]) && !param1[2])
            {
               KTool.hideMapAllPlayerAndMonster();
               startState_3();
            }
            else if(Boolean(param1[2]) && !param1[3])
            {
               KTool.hideMapAllPlayerAndMonster();
               startState_4();
            }
            else
            {
               destroy();
            }
         });
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
         var _loc8_:TaskMod = null;
         var _loc9_:Array = null;
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
         var _loc31_:Array = null;
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
         var _loc46_:TaskMod = null;
         var _loc47_:TaskMod = null;
         var _loc48_:TaskMod = null;
         var _loc49_:TaskMod = null;
         var _loc50_:TaskMod = null;
         var _loc51_:TaskMod = null;
         var _loc52_:TaskMod = null;
         var _loc53_:TaskMod = null;
         var _loc54_:TaskMod = null;
         var _loc55_:TaskMod = null;
         var _loc56_:Array = null;
         var _loc57_:TaskMod = null;
         var _loc58_:TaskMod = null;
         var _loc59_:TaskMod = null;
         var _loc60_:TaskMod = null;
         var _loc61_:TaskMod = null;
         var _loc62_:TaskMod = null;
         var _loc63_:TaskMod = null;
         var _loc64_:TaskMod = null;
         var _loc65_:TaskMod = null;
         var _loc66_:TaskMod = null;
         var _loc67_:TaskMod = null;
         var _loc68_:TaskMod = null;
         var _loc69_:TaskMod = null;
         var _loc70_:TaskMod = null;
         var _loc71_:TaskMod = null;
         var _loc72_:Array = null;
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["说的没错，据我们对米斯特瑞星的了解，上古魔尊一定藏于星球的最深处，同时我们还勘测到另一股强大的能量！"],["事不宜迟！船长下命令吧！"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["赛尔先锋队肩负着维护宇宙和平的重任，我们是不会退缩的！虽然对手非常强大，但是我们坚信最后的胜利属于赛尔号！"],["可是…"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.CARTOON,0,null,null,["cartoon/task_1505_1"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + ",我给你一个艰巨的任务，不管怎样一定要保证少主缪斯的安全！"],["恩恩，记得…记得！"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["好了，赶快出发吧！相信这次探险一定会遇到艰难险阻的！"],["船长，等我们的好消息吧！"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1505_1",false]);
               _loc2_ = _loc9_ = new Array(_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_);
               break;
            case 2:
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["大家看，这家伙真的在这里，而且看上去伤的不轻啊！"],["这家伙在里面干嘛呢！"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["这家伙的皮还真厚啊！难道他就不怕这些滚烫的岩浆吗？"],["要不我们趁现在就…"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["阿铁打，别冲动，这家伙看上去好似在疗伤，说不定等你一靠近，就直接被他抓住了！"],["卡璐璐说的有道理！"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["等等泽拉斯…除了上古魔尊外，这里还有其他的精灵能量感应，而且这股能量来自的正是天蛇星！"],["难道又是他们！"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["你…哥哥…真的是你吗？"],["什么…这就是天蛇星盟主的真面目？"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZELASI,["少主…虽然他是你的哥哥，但是你要知道天蛇星有今天这样的局面，都是他一手造成的，他是天蛇星的罪人…是罪魁祸首！"],["泽拉斯…你在这里太碍事了！"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc19_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZELASI,["萨恩德...为什么你要做这样的决定，少主对你的恩情你都抛之脑后了吗？"],["不好意思，我从不感情用事！"]);
               _loc20_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JIELUOLI,["等等…盟主还是让我来吧！之前我没有完成任务，这次就算是我自己戴罪立功吧！"],["鹰眼…你说的是真的吗？"]);
               _loc21_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JIELUOLI,["那当然，上次就是“愚人”泽拉斯坏了我的好事，既然在这里能够相遇，我可不会错过！"],["好吧，那就交给你了！"]);
               _loc22_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JIELUOLI,["少主…泽拉斯…让我们在这里做个了断吧！"],["鹰眼…你果然狡猾！"]);
               _loc24_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZELASI,["少主…鹰眼就交给我吧！让我用锋利无比的爪牙撕碎他！"],["鹰眼…看来你已经决定了！"]);
               _loc25_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JIELUOLI,["对不起了….少主！"],["你这叛徒…"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
               _loc27_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZELASI,["鹰眼…难道你…"],["时间不多，听我说完！"]);
               _loc28_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JIELUOLI,["这里的温度还不够热，你们看到那两块石头嘛？只要破坏了，让整个领域充满了熔岩，焰皇就会出现了！"],["快…攻击我！"]);
               _loc29_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,7,"mc7"]);
               _loc30_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANSHEXINGMENGZHU,["蠢货…这点小事都办不好！要你何用！"],["盟主救我！"]);
               _loc2_ = _loc31_ = new Array(_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_,_loc19_,_loc20_,_loc21_,_loc22_,_loc23_,_loc24_,_loc25_,_loc26_,_loc27_,_loc28_,_loc29_,_loc30_);
               break;
            case 3:
               _loc32_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,8,"mc8"]);
               _loc33_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["看来是一定要我亲自动手了，多多得罪了！能够和我成为对手也是你们的荣幸！"],["赛小息…靠你们了！"]);
               _loc34_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,[MainManager.actorInfo.formatNick + ",赛小息，你们听着，这是我们唯一的机会，我和泽拉斯会吸引他们的注意力，你们务必要破坏机关！"],["队长…我们的任务来了！"]);
               _loc35_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["恩恩…是该我们出场的时候了！" + MainManager.actorInfo.formatNick + ",你保护卡璐璐，阿铁打准备好你的斩月双刀吧！"],["哈哈…我早准备好了！."]);
               _loc36_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,9,"mc9"]);
               _loc37_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["阿铁打，趁他们还没有发现我们，赶紧啊！"],["恩恩，我们开始吧！"]);
               _loc38_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,10,"mc10"]);
               _loc39_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANSHEXINGMENGZHU,["他们想干什么…不能让这些熔岩摧毁库贝萨...鹰眼杰洛里快点阻止他们！"],["遵命！！盟主！"]);
               _loc40_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["加油啊！阿铁打，我们要用尽所有的力量！"],["我在使劲啊！就快成功了！"]);
               _loc41_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,11,"mc11"]);
               _loc42_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANSHEXINGMENGZHU,["还好…库贝萨终于苏醒了！哼哼…这次看你们往哪里逃！"],["赛小息快回来！"]);
               _loc43_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,12,"mc12"]);
               _loc44_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANSHEXINGMENGZHU,["接受死亡的恐惧吧！上古魔尊干掉你面前的所有敌人，整个宇宙都是属于我们的！"],["大家小心！"]);
               _loc45_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1505_3",true]);
               _loc46_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANSHEXINGMENGZHU,["库贝萨你对付焰皇吧！其他对手交给我们，我一个人就能搞定了！"],["库贝萨我来挑战你！！"]);
               _loc47_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1505_2",false]);
               _loc48_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,13,"mc13"]);
               _loc49_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANSHEXINGMENGZHU,["好了…接下来是属于我的世界，让你们尝尝瞳之神能的终极奥义吧！"],["幻影瞳之神能！"]);
               _loc50_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["大家注意，千万不要被幻影瞳之神能的能量照射到，否则你们就会丧失自我！"],["大家一定要注意！"]);
               _loc51_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,14,"mc14"]);
               _loc52_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JIELUOLI,["啊~~~~少主，今天我鹰眼把你多年的恩情全部还给你，你快走吧！"],["鹰眼！！！你居然…"]);
               _loc53_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANSHEXINGMENGZHU,["鹰眼…你知道你在做什么吗？放弃抵抗吧！回到我的身边！"],["快走啊！少主！战神联盟你们也是！"]);
               _loc54_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANSHEXINGMENGZHU,["哼哼…看你能抵御多久…"],["鹰眼我们一起走！"]);
               _loc55_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,15,"mc15"]);
               _loc2_ = _loc56_ = new Array(_loc32_,_loc33_,_loc34_,_loc35_,_loc36_,_loc37_,_loc38_,_loc39_,_loc40_,_loc41_,_loc42_,_loc43_,_loc44_,_loc45_,_loc46_,_loc47_,_loc48_,_loc49_,_loc50_,_loc51_,_loc52_,_loc53_,_loc54_,_loc55_);
               break;
            case 4:
               _loc57_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZELASI,["少主…我们还是听鹰眼的话吧！这个仇我们一定回报的！"],["可是…"]);
               _loc58_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANSHEXINGMENGZHU,["你们就这样走了吗？难道你们想让鹰眼落在我的手里吗？你们应该知道如何惩罚背叛天蛇星的叛徒！"],["哥哥…你为什么会变成这样！"]);
               _loc59_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANSHEXINGMENGZHU,["哈哈哈…愚蠢的妹妹…我已经不想再重复了，整个宇宙应该属于勇者和充满智慧结合体所统治！"],["而我正是这个结合体！"]);
               _loc60_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,16,"mc16"]);
               _loc61_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["不管你是天蛇星盟主也好…是我亲生哥哥也好！我一定要亲手干掉你…你给我记住，这是我缪斯对你的承诺！"],["哼哼…很好，继续憎恨吧！"]);
               _loc62_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANSHEXINGMENGZHU,["我会在天蛇星等着你…萨恩德把鹰眼杰洛里给我带走！"],["是，遵命！"]);
               _loc63_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["鹰眼是我害了你…"],["走吧！少主！"]);
               _loc64_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,17,"mc17"]);
               _loc65_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,[MainManager.actorInfo.formatNick + ",我们快去看看赛小息吧！"],["恩恩…"]);
               _loc66_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,18,"mc18"]);
               _loc67_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["小息…你没事吧！看来我们低估了天蛇星盟主的实力，这场战役我们敌人越来越强了！"],["我们先回赛尔号！"]);
               _loc68_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["恩恩…大家都有不同程度的伤势，还是先回飞船修整一下！"],["恩恩…大家一起动身吧！！"]);
               _loc69_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你们先走吧！我想在这里等焰皇回来呢！"],["好吧！你自己小心点！"]);
               _loc70_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,19,"mc19"]);
               _loc71_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["焰皇…你的出现是我们的转机吗？天蛇星盟主难道真的可以称霸宇宙吗？"],["我想一定不会是这样的结局！"]);
               _loc2_ = _loc72_ = new Array(_loc57_,_loc58_,_loc59_,_loc60_,_loc61_,_loc62_,_loc63_,_loc64_,_loc65_,_loc66_,_loc67_,_loc68_,_loc69_,_loc70_,_loc71_);
         }
         return _loc2_;
      }
   }
}
