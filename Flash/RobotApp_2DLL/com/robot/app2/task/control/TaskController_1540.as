package com.robot.app2.task.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class TaskController_1540
   {
      
      public static const BUFFER_RECORD_NUM:int = 681;
      
      public static const TASK_ID:int = 1540;
      
      private static const MAP_LOCAL_ID:int = 10304;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1540()
      {
         super();
      }
      
      public static function initTask10304(param1:BaseMapProcess) : void
      {
         _map = param1;
         taskMc.gotoAndStop(7);
         MapListenerManager.add(_map.btnLevel["clickMc"],startTask,"贾斯汀");
      }
      
      private static function startTask(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MapListenerManager.remove(_map.btnLevel["clickMc"],false);
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(getTaskArr(1),function():void
         {
            MapManager.changeMap(102);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               TasksManager.complete(TASK_ID,0);
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               SocketConnection.send(1022,86058350);
            });
         });
      }
      
      public static function destroy() : void
      {
         TaskDiaLogManager.single.destroy();
         _map = null;
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
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["海盗？！！发生了什么事？难道飞船和太空站的其他地方遭到偷袭了？"],["不是不是"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["现在还没有发现海盗的踪迹。如果它说的没错，海盗会在今天偷袭飞船和太空站，破坏周年庆典！站长，快通知大家吧！"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["它？它是谁？不会又是派特博士吧……哈哈，难道它最近又迷上夜观星象预测未来了？"],["不是博士，是迪恩！"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我遇到了一只奇怪的精灵叫派吉它有一个神奇的道具叫光年……"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BITEDAREN,["你们休想通知其它人！这一次，我誓要让这艘可恶的飞船在热闹的气氛中，无声无息地灭亡！"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BITEDAREN,["你的太空站已经被包围了。贾斯汀，这一次，不会再有什么人挡在你身前了。哈哈，你必死无疑！"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task1540_1",true]);
               _loc14_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["迪恩，你……你果然没死……可是……笨蛋！为什么又要帮我挡住……"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["别再说话了！迪恩，我不会再让你离开赛尔号，绝不！" + MainManager.actorInfo.formatNick + "，马上去找机械师茜茜！"],["我马上去！"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task1540_2",false]);
               _loc2_ = new Array(_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_);
         }
         return _loc2_;
      }
      
      private static function get taskMc() : MovieClip
      {
         if(_map == null)
         {
            return null;
         }
         return _map.depthLevel["taskMc"];
      }
   }
}
