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
   
   public class TaskController_1675
   {
      
      public static const TASK_ID:uint = 1675;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      public static const MAP_LOCAL_ID1:int = 10333;
      
      public static const MAP_LOCAL_ID2:int = 10334;
      
      public static const MAP_LOCAL_ID3:int = 10335;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1675()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "战神联盟被暗黑魔君擒获，即将进行血的献祭，这个邪恶的仪式顺利进行之后恶魔就将降临，形势万分危急！"],["船长，我们快去看看吧！","不关我们的事吧……"],[function():void
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
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["迈迪文他们正在想办法反击，救出战神联盟，你们快去助他们一臂之力！"],["恩，我们马上就去！"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["去吧，这次的敌人异常强大，而且完全是我们未知的力量，千万要小心！"],["放心吧船长！"]);
               _loc2_ = [_loc3_,_loc4_];
               break;
            case 2:
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["灵兽之尊，暗黑魔君抓走了战神联盟，准备在二十一天之后拿他们献祭，打开降临这个世界的入口！"],["什么？还有这种事情。"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["这么邪恶的仪式从未听说过，所谓我们的世界和暗黑魔君的世界到底是什么意思？"],["我也没有听说过。"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SANLINGSHOU_SHIFU,["我自认为经历过无数岁月，也从没有听说过这样的传说，看来一定是更加久远的年代，是我们无法预知的危险。"],["可是献祭迫在眉睫了！"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["波斯蒂加！为什么感觉眼前的并不是皮皮！"],["也可以这么说。"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["我来自另一个世界，神域，驾临这个世界需要一个载体，就像暗黑战神联盟那样，所以我选择了这只小精灵。"],["神域？那又是什么地方？"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["魔域？凡域？神域？这就是不同的世界吗？"],["是这个意思。"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["多年以来三个世界一直相安无事，但是最近暗黑魔君却想要入侵凡域，我们神域必须维护不同世界间的秩序！"],["你会帮助我们吗？"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["为了让你们拥有足以抗衡魔域的力量，我们确实传输了不少力量给你们，最后很多的结果就是精灵超进化。"],["原来是这样。"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["难怪最近能量的流动这样剧烈不稳定，原来都是有源头的。"],["只不过这样看起来并不够。"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["不同世界之间的隔阂非常巨大，这也是暗黑魔君久久不能降临的原因，在这里我们的力量也受到了影响，所以今天我必须亲自降临。"],["可是你还是皮皮啊……"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["不过你看起来并不像来自神域，能帮助我们打败暗黑魔君吗？"],["我说过了，这只是一个载体。"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc19_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["为什么会感到身上的力量无比地强大，从未有过这种感觉。"],["这是神域的恩赐。"]);
               _loc20_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["走吧，跟我去反转空间会会暗黑魔君，不过那里是魔域和凡域的边界，就连我的力量也会受到影响，十分危险！"],["我们不怕危险。"]);
               _loc21_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc2_ = [_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_,_loc19_,_loc20_,_loc21_];
               break;
            case 3:
               _loc22_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["快放了战神联盟，你们嚣张的日子不多了！"],["还是这样逞强。"]);
               _loc24_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YILANDI,["上次放过你们一马，居然这么不知好歹，看来这次要彻底解决你们了。"],["这次我们也要给你们好看。"]);
               _loc25_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["这也正是我所想的，你们这群卑鄙邪恶的家伙，根本不应该存在于这个世界。"],["你说对了，我们本就不属于这个世界。"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc27_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YILANDI,["你是谁？为什么知道我们主人的名字？"],["我可不光知道他的名字。"]);
               _loc28_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["快叫他出来吧，既然我都来了，他也没必要装神弄鬼了。"],["放肆，居然敢这样跟主人说话！"]);
               _loc29_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1675_1",true]);
               _loc30_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc31_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["波斯蒂加，在这反转空间，你的力量是不可能战胜我的！"],["你的力量还是那样强大。"]);
               _loc32_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["确实，这里毕竟不是神域，不过你不是也一样吗？这个世界也不属于你，你还是回到你的魔域去吧！"],["这个世界马上就是我的了！"]);
               _loc33_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["不久我就能用血的献祭打通逆界之门，真正降临凡域了，到时候你们谁能阻止我？总有一天，连神域也会是我的！"],["你的野心居然这么大！"]);
               _loc34_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc35_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YILANDI,["主人，刚才那个波斯蒂加是谁？感觉又多了一个强敌！"],["你们不需要知道。"]);
               _loc36_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["他是属于我的对手，你们只需要确保献祭顺利进行，让我降临凡域，一切都不是问题，明白吗？"],["主人，明白！"]);
               _loc2_ = [_loc22_,_loc23_,_loc24_,_loc25_,_loc26_,_loc27_,_loc28_,_loc29_,_loc30_,_loc31_,_loc32_,_loc33_,_loc34_,_loc35_,_loc36_];
               break;
            case 4:
               _loc37_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["波斯蒂加，刚刚怎么了？连你也不能阻止他？"],["形势有些不利。"]);
               _loc38_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["离开了神域我的力量已经被削弱了，再加上那个地方离魔域很近，我无法压制索伦森的力量。"],["原来是这样。"]);
               _loc39_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["看来阻止索伦森还是要靠自己，我们的世界应该由我们自己拯救！"],["你说得很对。"]);
               _loc40_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc41_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHAERDUN,["虽然我不是什么神宠，但是我也想尽一份力，不能看着我们的世界被破坏！"],["恩，我们就需要你这样的勇气！"]);
               _loc42_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["可是我们的力量还是太弱了，光靠勇气是不够的，到底怎样才能打败索伦森呢？"],["不要妄自菲薄。"]);
               _loc43_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc44_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["我的力量在这个世界没有办法完全施展，我只能尽力帮助你们，就像你说的，命运其实掌握在你们自己手里。"],["恩，那我们需要做什么呢？"]);
               _loc45_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["对了，索伦森反复提到逆界之门，那一定是解决问题的关键！"],["逆界之门？"]);
               _loc46_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc2_ = [_loc37_,_loc38_,_loc39_,_loc40_,_loc41_,_loc42_,_loc43_,_loc44_,_loc45_,_loc46_];
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
