package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1621
   {
      
      private static var _map:BaseMapProcess;
      
      private static const TASK_ID:int = 1621;
      
      private static const BUF_ID:uint = 710;
       
      
      public function Task1621()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.btnLevel["mcTask1621"];
      }
      
      public static function initForMap10314(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var state:int = int(TasksManager.getTaskStatus(TASK_ID));
         if(state == TasksManager.COMPLETE)
         {
            destroy();
         }
         else
         {
            if(!BufferRecordManager.getMyState(BUF_ID))
            {
               destroy();
               return;
            }
            hideOthers();
            if(state == TasksManager.UN_ACCEPT)
            {
               TasksManager.accept(TASK_ID);
               SocketConnection.send(1022,86060074);
            }
            AnimateManager.playMcAnimate(taskMc,2,"mc",function():void
            {
               showOthers();
               MainManager.isFighting = true;
               TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
               {
                  SocketConnection.send(1022,86060075);
                  destroy();
                  openBonus();
               });
            });
         }
      }
      
      private static function openBonus() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ScrewBonus"),"正在打开...",true);
      }
      
      private static function hideOthers() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         if(_map.conLevel["draw"])
         {
            _map.conLevel["draw"].visible = false;
         }
         if(_map.conLevel["diyage2"])
         {
            _map.conLevel["diyage2"].visible = false;
         }
      }
      
      private static function showOthers() : void
      {
         KTool.showMapAllPlayerAndMonster();
         _map.depthLevel.visible = true;
         if(_map.conLevel["draw"])
         {
            _map.conLevel["draw"].visible = true;
         }
         if(_map.conLevel["diyage2"])
         {
            _map.conLevel["diyage2"].visible = true;
         }
      }
      
      public static function destroy() : void
      {
         MainManager.isFighting = false;
         if(_map)
         {
            DisplayUtil.removeForParent(taskMc);
         }
         _map = null;
      }
   }
}
