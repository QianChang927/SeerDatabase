package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1597
   {
      
      private static var _map:BaseMapProcess;
      
      private static const TASK_ID:uint = 1597;
       
      
      public function Task1597()
      {
         super();
      }
      
      public static function initForMap105(param1:BaseMapProcess) : void
      {
         _map = param1;
         SocketConnection.send(1022,86059984);
         var _loc2_:int = int(TasksManager.getTaskStatus(TASK_ID));
         if(_loc2_ != TasksManager.COMPLETE)
         {
            quipmentMC.visible = false;
            if(_loc2_ == TasksManager.UN_ACCEPT)
            {
               TasksManager.accept(TASK_ID);
            }
            KTool.hideMapAllPlayerAndMonster();
            showTaskProcess();
         }
         else
         {
            showIcon();
         }
      }
      
      private static function showTaskProcess() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 17
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function showIcon() : void
      {
         DisplayUtil.removeForParent(taskMC);
         quipmentMC.visible = true;
         if(quipmentMC)
         {
            quipmentMC.addEventListener(MouseEvent.CLICK,onClickOpenEvolutionPanel);
         }
      }
      
      private static function onClickOpenEvolutionPanel(param1:MouseEvent) : void
      {
         showDilkeEvolutionPanel();
      }
      
      private static function showDilkeEvolutionPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DilkeEvolutionPanel"),"正在打开...",{"callback":playEvolutionAnim});
      }
      
      private static function playEvolutionAnim() : void
      {
         if(taskMC)
         {
            _map.btnLevel.addChild(taskMC);
            AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
            {
               DisplayUtil.removeForParent(taskMC);
            });
         }
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.btnLevel["mcTask1597"];
      }
      
      private static function get quipmentMC() : SimpleButton
      {
         return _map.btnLevel["mcDilkeEqu"];
      }
      
      public static function destory() : void
      {
         if(quipmentMC)
         {
            quipmentMC.removeEventListener(MouseEvent.CLICK,onClickOpenEvolutionPanel);
         }
         _map = null;
      }
   }
}
