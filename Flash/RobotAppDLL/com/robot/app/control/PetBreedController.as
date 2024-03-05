package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.TextFormatUtil;
   import org.taomee.events.SocketEvent;
   
   public class PetBreedController
   {
       
      
      public function PetBreedController()
      {
         super();
      }
      
      public static function show() : void
      {
         if(TasksManager.getTaskStatus(1121) == TasksManager.COMPLETE)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PetBreedPanel"),"正在加载精灵培育仓....");
         }
         else
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("petBreedIntro"),function():void
            {
               SocketConnection.addCmdListener(CommandID.GET_BREED_INTRO_MOVIE_GIFT,function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  TasksManager.setTaskStatus(1121,TasksManager.COMPLETE);
                  SocketConnection.removeCmdListener(CommandID.GET_BREED_INTRO_MOVIE_GIFT,arguments.callee);
                  Alarm.show("恭喜你，1个" + TextFormatUtil.getRedTxt("精灵蛋") + "已经放入了孵蛋器！赶快去看看吧！",function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("PetBreedPanel"),"正在加载精灵培育仓....");
                  });
               });
               SocketConnection.send(CommandID.GET_BREED_INTRO_MOVIE_GIFT);
            },false);
         }
      }
   }
}
