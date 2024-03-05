package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   
   public class MapProcess_11554 extends BaseMapProcess
   {
       
      
      public function MapProcess_11554()
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
            mc = null;
            LevelManager.iconLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            ToolBarController.panel.show();
            SocketConnection.sendByQueue(43741,[1,2],function():void
            {
               ModuleManager.showAppModule("TheNewsFromMinyuMainPanel");
            });
         });
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
