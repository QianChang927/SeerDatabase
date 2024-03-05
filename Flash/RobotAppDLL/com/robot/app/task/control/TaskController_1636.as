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
   
   public class TaskController_1636
   {
      
      public static const TASK_ID:uint = 1636;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      public static const MAP_LOCAL_ID1:int = 10325;
      
      public static const MAP_LOCAL_ID2:int = 10326;
      
      public static const MAP_LOCAL_ID3:int = 10327;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1636()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "艾辛格被战神盖亚打败了，可是奇怪的逆界之门究竟有什么秘密我们还是不清楚……"],["船长，我们去调查一下吧！","不关我们的事吧……"],[function():void
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
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["现在只是出现了一个艾辛格，剩下三个不知道还拥有什么样的实力！"],["船长，我们还有战神联盟！"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["去吧，无论有什么样的危机，英勇的赛尔们都一定可以解决！"],["船长，等着我们的好消息吧！"]);
               _loc2_ = [_loc3_,_loc4_];
               break;
            case 2:
               _loc5_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["主人，这个世界的精灵太过强大了，实在出乎的我意料……"],["还敢长他人志气！"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHUREN,["失败者总会给自己找借口，以为这样就可以掩饰自己的无能吗？"],["主人，我不敢！"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.NUOYIER,["你们打够了没有，居然在主人面前放肆！"],["诺伊尔，是你！"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHUREN,["这扇逆界之门阻挡了我这么久，我还需要一点东西才能真正降临这个世界！"],["主人，你需要什么？"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHUREN,["我需要这个世界四个强者的献祭，才能解开这里的封印，是燃烧生命的血的献祭！"],["血的献祭？！"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["四个？看起来战神联盟是最好的猎物！"],["艾辛格，你说得不错。"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHUREN,["穿越空间的隔阂来重铸你们真是耗费了我不少精力，希望这次你们不要再让我失望！"],["放心吧主人！"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["主人，我也是你忠实的奴仆呢！"],["哦，对了，还有你。"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc2_ = [_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_];
               break;
            case 3:
               _loc17_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["迈迪文，你说博拉纳也是逆界守护者，这是怎么回事？"],["他确实是逆界守护者。"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["逆界之门连通着另一个世界，那个世界的生命强大无比而且本性邪恶，我们的使命就是守住逆界之门，不让他们出来。"],["另一个世界？"]);
               _loc19_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["这样说来那几个暗黑的复制品也是来自于那个世界？"],["并不完全是……"]);
               _loc20_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["另一个世界的生命降临这个世界需要足够强大的载体，而你们就是最好的载体，所以博拉纳会把你们引诱过去。"],["原来是这样……"]);
               _loc21_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc22_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["盖亚，上次是我一时大意了，这次我要一雪前耻！"],["说得好听。"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["好，这次我就让你输个心服口服！"],["来吧，战个痛快 ！"]);
               _loc24_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc25_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["槽糕！中了调虎离山之计，迈迪文居然被他们抓走了！"],["现在才明白吗？"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["哈哈，没有了迈迪文，看你们怎么揭开逆界之门的秘密！"],["太狡猾了！"]);
               _loc27_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["你们把迈迪文抓去哪里了？"],["你以为我会告诉你吗？"]);
               _loc28_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc29_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["这下糟了，他们抓走了迈迪文，一切的谜题都没有答案了！"],["情况还没有那么糟！"]);
               _loc30_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIZU_LINGSHOU,["我可以感测到他们的去向，你们赶紧追上去，还来得及！"],["好的。"]);
               _loc31_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["迈迪文救过我们，决不能就这样让他们抓走，我们走吧！"],["走，赶紧追上去！"]);
               _loc32_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIZU_LINGSHOU,["这次你们千万要小心，还记得上次博拉纳引诱你们去逆界之门吗， 我担心这次又是一个诡计。"],["这次我们一定会小心！"]);
               _loc2_ = [_loc17_,_loc18_,_loc19_,_loc20_,_loc21_,_loc22_,_loc23_,_loc24_,_loc25_,_loc26_,_loc27_,_loc28_,_loc29_,_loc30_,_loc31_,_loc32_];
               break;
            case 4:
               _loc33_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc34_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["迈迪文，我们救你出来！"],["你们不要过来！"]);
               _loc35_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["赶快走，这里有危险！"],["什么？！"]);
               _loc36_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1636_1",true]);
               _loc37_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc38_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["哈克萨斯！好强大的力量，不愧是龙王子！"],["谢谢你的赞誉。"]);
               _loc39_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["你们这群狡诈恶毒的家伙，真不该存在于这个世上！"],["是吗？口气不小。"]);
               _loc40_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["你救了他们，我看谁来救你？"],["对付你们我一人足够了！"]);
               _loc41_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc42_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["又来一个不速之客，你又是谁？"],["我是来终结你们的克星！"]);
               _loc43_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HANDISHENNIU,["我是撼地神牛!"],["又来一个自投罗网的！"]);
               _loc44_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["撼地神牛，你快带战神联盟他们走！这个地方的能量太过黑暗，不适合久战，赶紧先走！"],["那龙王子你怎么办？"]);
               _loc45_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["只要战神联盟还在，我们就有胜利的希望！"],["好的，我明白了。"]);
               _loc46_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc47_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["岂有此理，居然让他们逃了！"],["没有关系。"]);
               _loc48_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["只要龙王子还在我们手上，战神联盟一定会回来，那时我们还是可以将他们一网打尽！"],["恩，这倒也是。"]);
               _loc49_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["总有一天我们会让战神联盟从宇宙消失，等着瞧吧！"],["会有那么一天的。"]);
               _loc50_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1636_2",false]);
               _loc2_ = [_loc33_,_loc34_,_loc35_,_loc36_,_loc37_,_loc38_,_loc39_,_loc40_,_loc41_,_loc42_,_loc43_,_loc44_,_loc45_,_loc46_,_loc47_,_loc48_,_loc49_,_loc50_];
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
