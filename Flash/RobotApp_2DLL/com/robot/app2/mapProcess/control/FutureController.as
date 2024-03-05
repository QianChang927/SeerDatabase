package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   
   public class FutureController
   {
      
      private static var _map:BaseMapProcess;
      
      public static const TASK_ID:int = 1553;
       
      
      public function FutureController()
      {
         super();
      }
      
      public static function initMap930(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.btnLevel["longMc"].visible = true;
         taskMc.visible = false;
         _hideDepth(true);
         MapListenerManager.add(_map.btnLevel["longMc"],_clickLong,"飞向未来  暑你第一");
      }
      
      private static function _clickLong(param1:MouseEvent) : void
      {
         playMapMovie();
      }
      
      public static function playDayFulMovie() : void
      {
         _isPlayAni(1,function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("future2"));
         });
      }
      
      private static function playMapMovie() : void
      {
         _isPlayAni(2,function():void
         {
            _map.btnLevel["longMc"].visible = false;
            taskMc.visible = true;
            AnimateManager.playMcAnimate(taskMc,8,"mc8",_openPanel);
         });
      }
      
      private static function _openPanel(param1:* = null) : void
      {
         _map.btnLevel["longMc"].visible = true;
         taskMc.visible = false;
         ModuleManager.showModule(ClientConfig.getTaskModule("SummerNotice"));
      }
      
      private static function _isPlayAni(param1:int, param2:Function = null) : void
      {
         var type:int = param1;
         var fun:Function = param2;
         SocketConnection.addCmdListener(CommandID.FUTURE_ISPLAY_ANI,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.FUTURE_ISPLAY_ANI,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            var _loc5_:int = int(_loc3_.readUnsignedInt());
            if(type == 1)
            {
               if(_loc4_)
               {
                  DebugTrace.show(1);
               }
               else
               {
                  fun();
               }
            }
            if(type == 2)
            {
               if(_loc5_)
               {
                  _openPanel(null);
               }
               else
               {
                  fun();
               }
            }
         });
         SocketConnection.send(CommandID.FUTURE_ISPLAY_ANI,type);
      }
      
      private static function _clickMcHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MapListenerManager.remove(_map.btnLevel["getTaskMc"],false);
         if(TasksManager.getTaskStatus(TASK_ID) != TasksManager.COMPLETE)
         {
            TasksManager.accept(TASK_ID);
            KTool.hideMapAllPlayerAndMonster();
            TaskDiaLogManager.single.playStory(getTaskArr(1),function():void
            {
               TasksManager.complete(TASK_ID,0,_openPanel);
               KTool.showMapAllPlayerAndMonster();
               _map.btnLevel["longMc"].visible = true;
               taskMc.visible = false;
               _hideDepth(true);
               SocketConnection.send(1022,86058878);
            });
         }
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
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["…对…对不起…我叫" + MainManager.actorInfo.formatNick + ",请问…你…是精灵吗？你不要生气，我们赛尔号是精灵的朋友。"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你一定认识龙王子哈莫雷特吧，它就是我们的好朋友。"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你看起来这么痛苦，我们才不会丢下你不管呢！究竟发生了什么？这些…这些可怕的闪电是什么？告诉我，让我帮助你！"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你怎么了？你没事吧？你看起来好痛苦的样子…我…我去找人来帮你！"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["future1",true]);
               _loc12_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你不要再说话了，我去找雷伊来救你！它是超级超级厉害的雷神，它一定能救你的！"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,7,"mc7"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我记住了，找到它的线索，藏在那些混乱的地方，打败它的关键，散落在未来…赛尔号不会坐视不管的！"]);
               _loc2_ = new Array(_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_);
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
      
      private static function _hideDepth(param1:Boolean) : void
      {
         _map.depthLevel["btn1"].visible = param1;
         _map.depthLevel["btn2"].visible = param1;
         _map.depthLevel["btn3"].visible = param1;
         _map.depthLevel["btn4"].visible = param1;
      }
   }
}
