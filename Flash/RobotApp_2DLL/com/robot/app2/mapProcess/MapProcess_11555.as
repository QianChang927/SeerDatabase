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
   
   public class MapProcess_11555 extends BaseMapProcess
   {
       
      
      public function MapProcess_11555()
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
            var md1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOLAN,["魔誓者在冥域各处发动战争，四大冥王虽然组织了抵抗，但是他们很强，四大冥王已经支撑不住了。"],["魔誓者到底是为了什么进攻冥域？"]);
            var md2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOLAN,["我也不太清楚，不过魔誓者一直在向修罗大殿进发，他们的目标应该在修罗大殿里。"],["……"]);
            var md3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOLAN,["现在，魔誓者已经攻占了修罗大殿，情况已经十分危急了。所以我才会逃出冥域来求救。"],["好，我这就去请示船长前往冥域！"]);
            md1.isNewDialog_1 = true;
            md2.isNewDialog_1 = true;
            md3.isNewDialog_1 = true;
            TaskDiaLogManager.single.playStory([md1,md2,md3],function():void
            {
               mc = null;
               LevelManager.iconLevel.visible = true;
               KTool.showMapAllPlayerAndMonster();
               ToolBarController.panel.show();
               SocketConnection.sendByQueue(43741,[1,3],function():void
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
