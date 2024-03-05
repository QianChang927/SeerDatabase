package com.robot.app.task.taskscollection
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class Task1337
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _status:uint;
       
      
      public function Task1337()
      {
         super();
      }
      
      public static function initFor360(param1:BaseMapProcess) : void
      {
         _map = param1;
         _status = TasksManager.getTaskStatus(1337);
         if(_status != TasksManager.COMPLETE)
         {
            step0();
         }
      }
      
      private static function step0() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            NpcDialog.show(NPC.NONO,["克洛斯星？主人，我们怎么又回来了？……咦？有罗杰船长的视频通话消息！"],["罗杰船长？"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("newseer_full_2013_2"),function():void
               {
                  TasksManager.complete(1337,0);
                  MapManager.changeMap(360);
               });
            }]);
         });
         MapManager.changeMap(358);
      }
   }
}
