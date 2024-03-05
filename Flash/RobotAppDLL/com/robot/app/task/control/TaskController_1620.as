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
   
   public class TaskController_1620
   {
      
      public static const TASK_ID:uint = 1620;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      public static const MAP_LOCAL_ID1:int = 10322;
      
      public static const MAP_LOCAL_ID2:int = 10323;
      
      public static const MAP_LOCAL_ID3:int = 10324;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1620()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "战神联盟现在受困逆界之门，无法脱身，情况万分危急！"],["船长，我们快去救他们！","不关我们的事吧……"],[function():void
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
         var _loc56_:TaskMod = null;
         var _loc57_:TaskMod = null;
         var _loc58_:TaskMod = null;
         var _loc59_:TaskMod = null;
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["那个逆界之门看起来十分蹊跷，不要轻举妄动，先去寻求龙王子哈克萨斯的帮助！"],["船长，我知道了！"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["那些复制出来的精灵也很令我担忧，只有真正的战神联盟才能解决那些危险的复制品，快去吧！"],["船长，等着我们的好消息吧！"]);
               _loc2_ = [_loc3_,_loc4_];
               break;
            case 2:
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["战神联盟！你们怎么样了？"],["不要靠近！这里很危险！"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["这个逆界之门实在是太蹊跷了，你们不要随便靠近！"],["放心雷神，我们一定会救你们出来。"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["我就说过，那个远古系的精灵很危险，这下中了他的奸计！"],["是我们大意了……"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["这个逆界之门的力量太过强大了，我们尝试了很久，都没有办法挣脱。"],["放心，我们来帮你！"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["我们上吧，集合我们四个的力量，一定可以救出战神联盟！"],["嗯，你们一定要小心！"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["怎么会这样……感觉这个东西的力量完全是我们未知的，我们根本无法控制！"],["龙王子，加油！"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DELAITAN,["我感觉逆界之门里面的能量好像被我们惊醒了，愈发地不可控制了！"],["一定要小心！"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["你们赶快离开这里，实在太危险了！"],["我们不会丢下你们的！"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["不要灰心，我们总会想到办法的。"],["对，总有办法解决。"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["什么？你是逆界之门的守护者？"],["对，我有守护逆界之门的使命。"]);
               _loc19_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["没想到博拉纳到底还是堕落了……难道至高无上的力量对他的诱惑真有这么大吗？"],["你认识那个博拉纳？！"]);
               _loc20_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["那你到底是正是邪？如果是敌人，我们现在就收拾了你。"],["敌人？我们应该算是朋友吧！"]);
               _loc21_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["是正是邪与我无关，我只有守护逆界之门的使命，不许任何人用它作恶。先不说这个了，我先把你们救出来吧。"],["你能救战神联盟出来？"]);
               _loc22_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["我们终于自由了，谢谢你迈迪文，现在可以去收拾那几个冒牌货了！"],["不用客气！"]);
               _loc24_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["尤其是那个长得像我的家伙，我一定要好好教训他，告诉他宇宙间只有一个战神，那就是我盖亚！"],["对，只有一个战神！"]);
               _loc25_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["逆界之门平静了数万年，不久前感受到了一股非常强大的能量碰撞，开始暴动不安，我守护者的使命终于来了。"],["是战神联盟与库贝萨之战？"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["迈迪文，我们一起走吧！我想你也很想去找到那个博拉纳！"],["好，我和他还有很多恩怨要解决。"]);
               _loc2_ = [_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_,_loc19_,_loc20_,_loc21_,_loc22_,_loc23_,_loc24_,_loc25_,_loc26_];
               break;
            case 3:
               _loc27_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["没想到你居然敢一路追过来。"],["我有什么不敢的。"]);
               _loc28_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["我是你们的主人，你们要听命于我！"],["哈哈，笑话。"]);
               _loc29_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["你只是一个被利用的棋子而已，我们的主人可不是你这样的小角色。"],["你说什么？"]);
               _loc30_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc31_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["可恶！他们怎么会这样强大？"],["不自量力的家伙。"]);
               _loc32_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["明白了吗？你根本没资格做我们的主人，现在我就送你去西天。"],["完了……这下麻烦了。"]);
               _loc33_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc34_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["主人？好强大的存在！难道我真的只是被利用了吗？"],["现在才明白吗？"]);
               _loc35_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHUREN,["在我驾临这个世界之前，先替我解决掉这个世界的强者，他也许还能派上些用场。"],["遵命，主人！"]);
               _loc36_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc37_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["听清楚了吗？这次先饶你一命，你可要好好为主人效力。"],["我……明白了……"]);
               _loc38_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["这个世界的强者可是有很多，你有这个实力吗？"],["哈哈，你在怀疑我？"]);
               _loc39_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["我已经感受到了目标，巅峰的对抗总会令我兴奋！"],["啊？是谁？"]);
               _loc2_ = [_loc27_,_loc28_,_loc29_,_loc30_,_loc31_,_loc32_,_loc33_,_loc34_,_loc35_,_loc36_,_loc37_,_loc38_,_loc39_];
               break;
            case 4:
               _loc40_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIZU_LINGSHOU,["我们已经近千年没有见到师父了，不知道这次师父把我们叫过来有什么事？"],["我也不清楚。"]);
               _loc41_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YANMO,["这么多年未见，一定是师父想考验一下我们的本领有没有长进！"],["对，一定是这样！"]);
               _loc42_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc43_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SANLINGSHOU_SHIFU,["徒儿们，多年不见，又进步了不少啊！"],["知道得太晚了。"]);
               _loc44_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIZU_LINGSHOU,["师父这次把我们叫过来是为了什么呢？"],["这次确实是有一件大事。"]);
               _loc45_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SANLINGSHOU_SHIFU,["一个沉睡万年的恶魔即将降临，他的奴仆们已经现世，身为灵兽，你们一定要阻止这个恶魔和他的奴仆！"],["师父，你说的是谁？"]);
               _loc46_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc47_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SANLINGSHOU_SHIFU,["你们的动作可真快，既然主动送上门了，那就别怪我不客气了。"],["口气不小！"]);
               _loc48_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["我就先替主人清除掉你们这些障碍。"],["慢，你的对手是我！"]);
               _loc49_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc50_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1620_1",true]);
               _loc51_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc52_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太棒了，不愧是战神盖亚！"],["那是当然！"]);
               _loc53_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["博拉纳，你还要执迷不悟下去吗？难道你忘了身为逆界守护者的使命？"],["什么？他也是逆界守护者？"]);
               _loc54_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["什么使命？只有你才会为了这种不知缘由的使命禁锢自己数万年，而我，只有变得更强，才能证明自己的存在。"],["哎，为什么你还是这样偏执……"]);
               _loc55_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
               _loc56_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["没想到这个家伙这么容易就解决了。"],["但是危机还没有解决。"]);
               _loc57_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SANLINGSHOU_SHIFU,["艾辛格只是先锋，真正的敌人是他背后即将降临的主人，他数万年前险些毁灭这个世界，拥有的力量不是库贝萨可以相比的。"],["什么？还有这样的事。"]);
               _loc58_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["嗯，一切的危机都来源于逆界之门，我残缺的记忆中，依稀也记得这些。"],["迈迪文，你知道些什么？"]);
               _loc59_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1620_2",false]);
               _loc2_ = [_loc40_,_loc41_,_loc42_,_loc43_,_loc44_,_loc45_,_loc46_,_loc47_,_loc48_,_loc49_,_loc50_,_loc51_,_loc52_,_loc53_,_loc54_,_loc55_,_loc56_,_loc57_,_loc58_,_loc59_];
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
