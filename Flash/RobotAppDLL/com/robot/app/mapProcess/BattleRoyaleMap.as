package com.robot.app.mapProcess
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.battleRoyale.BattleFightManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class BattleRoyaleMap extends BaseMapProcess
   {
      
      private static var _isShow:Boolean;
       
      
      public function BattleRoyaleMap()
      {
         super();
      }
      
      override protected function init() : void
      {
         _isShow = UserManager.isShow;
         UserManager.isShow = true;
         MapManager.currentMap.showAllUser();
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         BattleFightManager.setup(this);
      }
      
      override public function destroy() : void
      {
         UserManager.isShow = _isShow;
         if(UserManager.isShow)
         {
            MapManager.currentMap.showAllUser();
         }
         else
         {
            MapManager.currentMap.hideAllUser();
         }
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         BattleFightManager.destroy();
      }
   }
}
