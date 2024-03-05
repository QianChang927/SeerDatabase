package com.robot.app.task.control
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1312
   {
      
      public static const TASK_ID:uint = 1312;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1312()
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
         NpcDialog.show(NPC.SHIPER,["我接到卫兵的情报，恶灵兽那边有不得了的举动！事情似乎和纳斯琪有关，赛尔，你怎么看？"],["船长大人！恶灵兽那边有什么情报呀？","我先去准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               startPro();
            });
         }]);
      }
      
      public static function startPro() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1312_1"),function():void
         {
            NpcDialog.show(NPC.SHIPER,["这就是全部的过程了！如你所见，恶灵兽不知道做了什么，纳斯琪现在变的极其危险！"],["这可麻烦了！"],[function():void
            {
               NpcDialog.show(NPC.SHIPER,["不错，纳斯琪一直是恶灵三巨头中最狡猾的一个，现在实力大增，恶灵兽如虎添翼啊！"],["恶灵兽真难对付！"],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["抗击邪恶，是每个正义的赛尔义不容辞的责任！这件事，相信贾斯汀一定有他的见解，你速速去请教他一下吧！"],null,null,false,function():void
                  {
                     MapManager.changeMap(11224);
                  });
               }]);
            }]);
         },false);
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
      }
   }
}
