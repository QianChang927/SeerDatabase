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
   
   public class TaskController_1652
   {
      
      public static const TASK_ID:uint = 1652;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      public static const MAP_LOCAL_ID1:int = 10328;
      
      public static const MAP_LOCAL_ID2:int = 10329;
      
      public static const MAP_LOCAL_ID3:int = 10330;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1652()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "战神联盟被暗黑战神联盟重伤不醒，龙王子哈克萨斯被俘，形势万分危急！"],["船长，我们快去看看吧！","不关我们的事吧……"],[function():void
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
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["现在只是出现了一个艾辛格，剩下三个不知道还拥有什么样的实力！"],["船长，我们还有战神联盟！"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["灵兽之尊是三灵兽的师父，掌控着宇宙间最原始三元素的力量，一定有办法重生战神联盟！"],["对，我们不是孤军奋战！"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["去吧，首先一定先救醒战神联盟！"],["船长，等着我们的好消息吧！"]);
               _loc2_ = [_loc3_,_loc4_,_loc5_];
               break;
            case 2:
               _loc6_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SANLINGSHOU_SHIFU,["战神联盟？！这是怎么回事？"],["他们受了重伤。"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["他们被暗黑战神联盟重伤，一直昏迷不醒，灵兽之尊，你掌控着宇宙间最原始三元素的力量，快救救他们！"],["我先来看看。"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SANLINGSHOU_SHIFU,["竟然伤得这么严重，看来需要多花些工夫了。"],["灵兽之尊，全靠你了！"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YANMO,["师父，难道你准备打开自己身上的封印？"],["没错，看来只能这样了。"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SANLINGSHOU_SHIFU,["这次事件非同小可，为了重生战神联盟，我只能解开封印在自己身上的力量了，希望能够帮助战神联盟！"],["师父，小心啊！"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YANMO,["师父，可是这样可能会耗尽你的精力的！封印不能随便打开啊！"],["我别无选择了。"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["谢谢你灵兽之尊，我们终于恢复了！"],["不用和我客气。"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SANLINGSHOU_SHIFU,["只是为了治愈你们，我耗尽了精力，近期恐怕要修养一阵子了……"],["恩，你好好修养。"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["伙伴们，我们去救回龙王子吧！万一龙王子因为我们而遇害，那就追悔莫及了！"],["是要去救龙王子。"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["暗黑战神联盟说不定又在设计等着我们去，战神联盟你们刚刚伤愈，一定要小心啊!"],["这个我明白。"]);
               _loc19_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc2_ = [_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_,_loc19_];
               break;
            case 3:
               _loc20_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc21_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELAIAO,["你们果然又回来了，真是不明白你们，明知道回来是死路一条，还非要为了所谓的义气恩情回来，难道就真的这么不顾惜自己性命吗？"],["你们怎么能理解？"]);
               _loc22_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["不过话说回来，如果不是这样，我们还要多费些工夫，今天就和你们战神联盟做个了结吧！"],["来吧！"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["这也正是我所想的，你们这群卑鄙邪恶的家伙，根本不应该存在于这个世界。"],["你说对了，我们本就不属于这个世界。"]);
               _loc24_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc25_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YILANDI,["你们三个动作实在太慢了，主人都等得不耐烦了！"],["事情有些棘手。"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["没想到主人竟然把你派来了，这下是真的不给他们留活路了……"],["终于全部现身了。"]);
               _loc27_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["盖亚，我现在总算理解你们的心情了，整天看着自己的冒牌货在眼前晃，真是一种煎熬。"],["冒牌货？你们太自大了！"]);
               _loc28_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1652_1",true]);
               _loc29_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc30_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["糟了！这个暗黑雷伊居然拥有这样强大的力量！"],["现在才明白吗？"]);
               _loc31_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YILANDI,["哈哈，战神联盟终于落入我们手里了，主人一定会很高兴的！"],["你们要对战神联盟做什么？"]);
               _loc32_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["你们应该庆幸，我们的目标只有战神联盟，对你们没有兴趣，回去准备好迎接我们主人的降临吧！"],["岂有此理！"]);
               _loc33_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc34_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["他们把战神联盟带到哪里去了？"],["我也不清楚。"]);
               _loc35_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["正如他们所说，他们的目的只有战神联盟，看来他们的阴谋就快实现了，这可不妙！"],["我们赶紧追上去。"]);
               _loc36_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["事不宜迟，我们赶紧追上去看看，到底会发生什么。"],["走，赶紧追上去！"]);
               _loc2_ = [_loc20_,_loc21_,_loc22_,_loc23_,_loc24_,_loc25_,_loc26_,_loc27_,_loc28_,_loc29_,_loc30_,_loc31_,_loc32_,_loc33_,_loc34_,_loc35_,_loc36_];
               break;
            case 4:
               _loc37_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc38_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIMOJUN,["很好，足够强大的精灵，很适合作为祭品。"],["祭品？！"]);
               _loc39_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["难道他们要拿战神联盟献祭？"],["嘘！别出声！"]);
               _loc40_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YILANDI,["主人，我们什么时候进行血的献祭呢，我们都在期待着您的降临，这个世界也在等待着您！"],["不要着急！"]);
               _loc41_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIMOJUN,["二十一天之后会是这两个世界运行最接近的时候，在那时进行献祭成功的几率最大，在这之前一定不要出什么意外，明白吗？"],["明白了主人！"]);
               _loc42_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc43_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["糟了，战神联盟即将被献祭，那个强大的主人就会驾临，怎么阻止这一切？"],["不要着急！"]);
               _loc44_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["我们势单力薄，趁他们没发现，我们先回去，反正还有二十一天时间，我们先去召集足够强大的盟友！"],["嗯，只能暂时先撤了。"]);
               _loc45_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAKESASI,["战神联盟暂时应该没有危险，我们先撤，小心，别被他们发现！"],["嗯，明白！"]);
               _loc46_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
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
