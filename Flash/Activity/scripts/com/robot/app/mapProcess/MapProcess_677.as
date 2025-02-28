package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task746;
   import com.robot.app.task.taskscollection.Task753;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_677 extends BaseMapProcess
   {
       
      
      public function MapProcess_677()
      {
         super();
      }
      
      override protected function init() : void
      {
         var m:MovieClip;
         var t:uint = 0;
         Task753.initTaskForMap677(this);
         conLevel["arrow"].visible = false;
         conLevel["task746"].visible = false;
         if(TasksManager.getTaskStatus(753) == TasksManager.COMPLETE)
         {
            Task746.initTaskFor677(this);
         }
         if(TasksManager.getTaskStatus(758) == TasksManager.COMPLETE)
         {
            if(BufferRecordManager.getState(MainManager.actorInfo,210))
            {
               conLevel["floor_3"].gotoAndStop(2);
               conLevel["crystal_3"].visible = false;
            }
            else
            {
               conLevel["crystal_3"].gotoAndStop(6);
               BufferRecordManager.setState(MainManager.actorInfo,210,true);
            }
         }
         if(TasksManager.getTaskStatus(759) == TasksManager.COMPLETE)
         {
            conLevel["floor_4"].gotoAndStop(2);
            conLevel["crystal_4"].visible = false;
         }
         if(TasksManager.getTaskStatus(760) == TasksManager.COMPLETE)
         {
            conLevel["floor_5"].gotoAndStop(2);
            conLevel["crystal_5"].visible = false;
         }
         if(TasksManager.getTaskStatus(761) == TasksManager.COMPLETE)
         {
            conLevel["floor_2"].gotoAndStop(2);
            conLevel["crystal_2"].visible = false;
         }
         if(TasksManager.getTaskStatus(762) == TasksManager.COMPLETE)
         {
            conLevel["floor_1"].gotoAndStop(2);
            conLevel["crystal_1"].visible = false;
         }
         if(TasksManager.getTaskStatus(763) == TasksManager.COMPLETE)
         {
            conLevel["floor_0"].gotoAndStop(2);
            conLevel["crystal_0"].visible = false;
            if(BufferRecordManager.getState(MainManager.actorInfo,391))
            {
               t = setTimeout(function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20120831_5"),function():void
                  {
                     BufferRecordManager.setState(MainManager.actorInfo,391,true);
                  });
                  clearTimeout(t);
               },5000);
            }
         }
         m = conLevel["finalBoss"];
         m.mouseChildren = false;
         m.buttonMode = true;
         if(TasksManager.getTaskStatus(758) == TasksManager.COMPLETE && TasksManager.getTaskStatus(759) == TasksManager.COMPLETE && TasksManager.getTaskStatus(760) == TasksManager.COMPLETE && TasksManager.getTaskStatus(761) == TasksManager.COMPLETE && TasksManager.getTaskStatus(762) == TasksManager.COMPLETE && TasksManager.getTaskStatus(763) == TasksManager.COMPLETE)
         {
            MapListenerManager.add(m,function():void
            {
               SocketConnection.send(1022,86053857);
               ModuleManager.showModule(ClientConfig.getAppModule("YiNengBossPanel"),"正在打开异能王的六重试炼....");
            },"终极挑战");
         }
         else
         {
            DisplayUtil.removeForParent(m);
         }
      }
      
      override public function destroy() : void
      {
         Task746.destroy();
         Task753.destroy();
      }
   }
}
