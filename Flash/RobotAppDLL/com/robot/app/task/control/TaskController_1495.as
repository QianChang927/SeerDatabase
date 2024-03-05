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
   
   public class TaskController_1495
   {
      
      public static const TASK_ID:uint = 1495;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      public static const MAP_LOCAL_ID:int = 10296;
      
      public static const MAP_LOCAL_ID_TWO:int = 10297;
      
      public static const MAP_ID:int = 89;
      
      private static var _map:BaseMapProcess;
      
      private static var _comTask:Function;
       
      
      public function TaskController_1495()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + ",上古一族的身影已经在太空站附近，看来上古魔尊库贝萨很快就会抵达这里…"],["让他们尝尝贾斯汀站长的威力！","守卫赛尔号，是我的责任！"],[function():void
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
            TasksManager.complete(TaskController_1495.TASK_ID,TaskController_1495.TASK_STAGE_1,function(param1:Boolean):void
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
            TasksManager.complete(TaskController_1495.TASK_ID,TaskController_1495.TASK_STAGE_2,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499584);
               if(param1)
               {
                  MapManager.changeLocalMap(MAP_LOCAL_ID_TWO);
               }
            });
         });
      }
      
      private static function startState_3() : void
      {
         TaskDiaLogManager.single.playStory(getTaskArr(3),function():void
         {
            TasksManager.complete(TaskController_1495.TASK_ID,TaskController_1495.TASK_STAGE_3,function(param1:Boolean):void
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
               TasksManager.complete(TASK_ID,TASK_STAGE_4,_comTask);
            });
         });
         MapManager.changeMap(MAP_ID);
      }
      
      public static function comTask(param1:Function) : void
      {
         _comTask = param1;
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
      }
      
      private static function getTaskArr(param1:int = 1) : Array
      {
         var _loc2_:Array = null;
         var _loc3_:TaskMod = null;
         var _loc4_:TaskMod = null;
         var _loc5_:TaskMod = null;
         var _loc6_:Array = null;
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
         var _loc24_:Array = null;
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
         var _loc46_:TaskMod = null;
         var _loc47_:Array = null;
         var _loc48_:TaskMod = null;
         var _loc49_:TaskMod = null;
         var _loc50_:TaskMod = null;
         var _loc51_:TaskMod = null;
         var _loc52_:TaskMod = null;
         var _loc53_:TaskMod = null;
         var _loc54_:TaskMod = null;
         var _loc55_:TaskMod = null;
         var _loc56_:TaskMod = null;
         var _loc57_:TaskMod = null;
         var _loc58_:TaskMod = null;
         var _loc59_:TaskMod = null;
         var _loc60_:TaskMod = null;
         var _loc61_:TaskMod = null;
         var _loc62_:TaskMod = null;
         var _loc63_:TaskMod = null;
         var _loc64_:TaskMod = null;
         var _loc65_:TaskMod = null;
         var _loc66_:Array = null;
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["船长…那我得赶去太空站，此时此刻贾斯汀站长一定需要帮手！我已经做好和站长并肩奋战的准备了！"],["一定要击退上古一族！"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SOLIDMAN,["报告船长！太空站陷入上古一族的围攻，贾斯汀站长正在奋力迎战！"],["时间不多了！我们这就赶去！"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1495_1",false]);
               _loc2_ = _loc6_ = new Array(_loc3_,_loc4_,_loc5_);
               break;
            case 2:
               _loc7_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["什么！！！上古魔尊—库贝萨！你…竟然解除封印…"],["哈哈哈，谱尼…你的能量是我最喜欢的！"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["怎么会这样！难道圣灵系和次元系联手也不能消灭你这个宇宙恶霸吗？"],["消灭我们，你也未必太小看我了！"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["哼哼…不妨告诉你！这次我会带领上古一族称霸宇宙，你们谁都阻止不了我，包括你和星灵王在内！"],["谱尼…今天就是你破灭的日子！"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["不好…谱尼有危险！看来是该我们上的时候了！"],["等等…小息你看！"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["库贝萨…你以为就这样的程度就算是战胜我了？那你也未必太小看我的能力了！"],["谱尼…你的实力我很了解！"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["哇…谱尼果然是最强的存在，太厉害了！库贝萨，我劝你还是快点离开这里，谱尼可不是好惹的，担心自己的小命吧！"],["愚蠢的机器人！"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,[MainManager.actorInfo.formatNick + ",赶快带着赛小息他们离开这里，库贝萨由我对付就可以了！"],["谱尼…你太天真了！"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["你就不担心太空站的安全吗？如果你和我在这里决战，所有的一切都会被我们的能力威慑所摧毁！"],["哈哈哈…来深井之地找我吧！"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc19_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["看来这次赴约我是一定要去了！赛小息，太空站就交给你们！"],["谱尼…你真的要离开这里吗？"]);
               _loc20_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["是的！为了整个宇宙的安危，也为了圣灵系和次元系一族的尊严！"],["放心吧！孩子们，我不会有事的！"]);
               _loc21_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc22_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["这样下去可不行…我们要兵分两路，阿铁打你和卡璐璐去帮助贾斯汀站长消灭剩余的上古一族！" + MainManager.actorInfo.formatNick + "和我去追赶谱尼！"],["大家一定要小心啊！"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,[MainManager.actorInfo.formatNick + ",你们两个答应我…一定要安全返回赛尔号！"],["恩恩，放心吧！"]);
               _loc2_ = _loc24_ = new Array(_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_,_loc19_,_loc20_,_loc21_,_loc22_,_loc23_);
               break;
            case 3:
               _loc25_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["库贝萨...让我们在这里结束一切的恩怨吧！"],["谱尼你果然还是来了！"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["别急…谱尼！你欠我的，我要你慢慢还给我！"],["谱尼…我们来帮助你！！"]);
               _loc27_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc28_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["库贝萨…你好卑鄙，居然找了帮手！不过别以为人多实力就越强，我谱尼可不是一般的对手！"],["那是…"]);
               _loc29_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["库贝萨…天蛇星盟主果然神机妙算，特意派我们来帮助你！谱尼…你就慢慢享受吧！"],["队长…局势对我们不利啊！"]);
               _loc30_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["恩…这个时候如果加上少主缪斯或者战神联盟的话，我想我们的局势就不会这样了！"],["但是现在就我们俩！"]);
               _loc31_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc32_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["哈哈哈…什么战神联盟，不过就是那群虾兵蟹将而已！"],["谱尼你需要他们的帮助吗？"]);
               _loc33_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["战神联盟，你们快走！这是圣灵系和上古一族之间的事情，我不想把你们牵连进来，宇宙需要你们！"],["谱尼…这话我不认同！"]);
               _loc34_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZHANGCHIBANGLEIYI,["只要宇宙出现邪恶势力，那就是我们战神联盟的敌人，不分你我！让我们一起战斗吧！"],["哈哈哈哈…."]);
               _loc35_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc36_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["哼哼…别以为你们击败了鹰眼和斯吉亚就可以忽视我们天蛇星其他魔将的存在，我们可是天蛇星最强的战士哦！"],["别逼我们动手哦！"]);
               _loc37_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIHEIYING,["萨恩德这里就交给你了！希望下次见到你的时候，会有好消息带给我们！"],["黑色的家伙，有本事现出原形！"]);
               _loc38_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIHEIYING,["哼哼…见到我真面目的人，一般都是那些没有生命迹象的！"],["嚣张的家伙！"]);
               _loc39_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc40_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["库贝萨…不要浪费时间！千年前的恩怨，让我们今天在这里全部算清吧！"],["今天不是你死就是我亡！"]);
               _loc41_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["那我就解决战神联盟吧！他们拖着无力的身躯，很难有什么作为！"],["战神联盟，干脆你们叫战败联盟吧！"]);
               _loc42_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["队长…你不是有派特博士新研制的战神正能量吗？快拿出来给战神联盟啊！说不定可以帮助到他们！"],["对啊！战神联盟接着！"]);
               _loc43_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1495_2",true]);
               _loc44_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["谱尼万岁！传说无敌！太棒了，这下库贝萨知道疼了吧！"],["太不可思议了！"]);
               _loc45_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAENDE,["居然…居然可以伤到库贝萨！谱尼果然厉害！"],["我看还是先走为妙！"]);
               _loc46_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["谱尼你给我记住，我们的恩怨一定会了清的！"],["孩子们，你们尽情的吸收能量吧！"]);
               _loc2_ = _loc47_ = new Array(_loc25_,_loc26_,_loc27_,_loc28_,_loc29_,_loc30_,_loc31_,_loc32_,_loc33_,_loc34_,_loc35_,_loc36_,_loc36_,_loc37_,_loc38_,_loc39_,_loc40_,_loc41_,_loc42_,_loc43_,_loc44_,_loc45_,_loc46_);
               break;
            case 4:
               _loc48_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
               _loc49_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["库贝萨，你本身就不该出现，别想着复仇！圣灵系和次元系一定会再次站出来，阻止你…击败你！"],["哼哼，有本事就来吧！"]);
               _loc50_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUBEISA,["等我恢复百分百的能量，不要说圣灵系和次元系，就算我以一敌百都不是问题！"],["谱尼，下次就没这么走运了！"]);
               _loc51_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,7,"mc7"]);
               _loc52_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["看来我该去和星灵王交代这一些了，圣灵系和次元系必须再次联手，这里就交给你们了！"],["恩恩，加油啊！谱尼！"]);
               _loc53_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,8,"mc8"]);
               _loc54_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZHANGCHIBANGLEIYI,["战神联盟，我们赶快前往太空站吧！说不定贾斯汀还在和上古一族纠缠呢！"],["恩恩，这就走！"]);
               _loc55_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZHANGCHIBANGLEIYI,[MainManager.actorInfo.formatNick + ",你们一定要想办法摧毁这里的一切，不能让上古一族吸收太多的能量！"],["恩恩，知道了！"]);
               _loc56_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,9,"mc9"]);
               _loc57_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + ",看我们的了，抓紧时间啊！"],["好嘞！队长！"]);
               _loc58_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,10,"mc10"]);
               _loc59_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["这…这不是先锋队长吗？你怎么来了，你的头不疼了吗？"],["多谢关心！"]);
               _loc60_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAIPUTE,["这还得谢谢合金赛伯斯特，是他拯救了我！现在我已经加入X战队，我就是X战队的第五人！"],["太棒了！先锋队长真厉害！"]);
               _loc61_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAIPUTE,["你们回去告诉赛尔号船长罗杰，先锋队长回来了！我将为正义和和平付出自己的一切！"],["恩恩，知道了！"]);
               _loc62_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,11,"mc11"]);
               _loc63_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["太好了，我一定要把这个消息告诉船长，上古一族已经遭到谱尼的挫败，这正是我们剿灭它们最佳的时机！"],["队长，你先走吧！我稍后就回来！"]);
               _loc64_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,12,"mc12"]);
               _loc65_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["这真是好不容易的胜利啊！一旦库贝萨恢复元气，它一定会再次向谱尼和星灵王提出挑战的！"],["在这之前，一定要消灭它们！"]);
               _loc2_ = _loc66_ = new Array(_loc48_,_loc49_,_loc50_,_loc51_,_loc52_,_loc53_,_loc54_,_loc55_,_loc56_,_loc57_,_loc58_,_loc59_,_loc60_,_loc61_,_loc62_,_loc63_,_loc64_,_loc65_);
         }
         return _loc2_;
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
      
      public static function initForMap10296(param1:BaseMapProcess) : void
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
   }
}
