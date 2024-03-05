package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   
   public class MapProcess_11553 extends BaseMapProcess
   {
       
      
      public function MapProcess_11553()
      {
         super();
      }
      
      override protected function init() : void
      {
         var mc:MovieClip;
         super.init();
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         ToolBarController.panel.hide();
         mc = this.conLevel as MovieClip;
         AnimateManager.playMcAnimate(mc,1,"mc",function():void
         {
            var md1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["船长请放心，我一定查明真相！经过了这么多场大战，我的实力已经突飞猛进，可以独当一面了。"],["嗯，你去吧，保持警惕！"]);
            md1.isNewDialog_1 = true;
            TaskDiaLogManager.single.playStory([md1],function():void
            {
               mc = null;
               LevelManager.iconLevel.visible = true;
               KTool.showMapAllPlayerAndMonster();
               ToolBarController.panel.show();
               SocketConnection.sendByQueue(43741,[1,1],function():void
               {
                  ModuleManager.showAppModule("TheNewsFromMinyuMainPanel");
               });
            });
         });
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
