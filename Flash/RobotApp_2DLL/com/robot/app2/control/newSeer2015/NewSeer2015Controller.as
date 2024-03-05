package com.robot.app2.control.newSeer2015
{
   import com.robot.app.control.BonusController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.newSeer2015.task.NewSeerProgress;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.getDefinitionByName;
   
   public class NewSeer2015Controller
   {
      
      public static const TASK_MAP:int = 10869;
      
      public static const MAIN_MAP:int = 10870;
      
      public static const PRE_TASK_BITBUF:int = 22719;
      
      public static const PRE_TASK_MAP_ANIM:String = "newseer_2015_pre_task";
      
      public static const PRE_TASK_FULL_ANIM:String = "newseer_2015_full_1";
      
      public static const PRE_TASK_OPEN_PANEL:int = 22722;
      
      public static const PROGRESS:int = 3289;
       
      
      public function NewSeer2015Controller()
      {
         super();
      }
      
      public static function start() : void
      {
         MainManager.newSeerProgress = 0;
         checkPreTask();
         ToolBarController.panel.hide();
         BonusController.addIgnore(1171);
         BonusController.addIgnore(1173);
         BonusController.addDelay(1188);
      }
      
      private static function checkPreTask() : void
      {
         if(isPreTaskDone)
         {
            KTool.changeMapWithCallBack(MAIN_MAP,startGuide);
         }
         else
         {
            KTool.changeMapWithCallBack(TASK_MAP,startPreTask);
         }
      }
      
      public static function get isPreTaskDone() : Boolean
      {
         return BitBuffSetClass.getState(PRE_TASK_BITBUF) > 0 && BitBuffSetClass.getState(PRE_TASK_OPEN_PANEL) > 0;
      }
      
      private static function startPreTask() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer2015.NewSeerPreTask").instance.start();
      }
      
      public static function startGuide() : void
      {
         NewSeerIcon.instance.init();
         NewSeerProgress.instance.toggleToolBar(false);
         NewSeerGuide.instance.update();
         ToolBarController.showOrHideAllUser(false);
         KTool.getBitSet([12908,12926],function(param1:Array):void
         {
            var va:Array = param1;
            if(va[0] == 0)
            {
               SocketConnection.sendWithCallback(CommandID.COMMAND_4548,function():void
               {
                  BonusController.showDelayBonus(1188);
               },1188,1);
            }
            if(va[1] == 0)
            {
               BonusController.addIgnore(1220);
               SocketConnection.sendWithCallback(CommandID.COMMAND_4548,function():void
               {
               },1220,1);
            }
         });
      }
   }
}
