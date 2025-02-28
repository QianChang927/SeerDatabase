package com.robot.app.mapProcess
{
   import com.robot.app.mapProcess.control.ElementFightController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import org.taomee.utils.DisplayUtil;
   
   public class ElementFightMap extends BaseMapProcess
   {
       
      
      public function ElementFightMap()
      {
         super();
      }
      
      override protected function init() : void
      {
         ElementFightController.setup(this);
         DisplayUtil.removeForParent(LevelManager.iconLevel,false);
         DisplayUtil.removeForParent(LevelManager.toolsLevel,false);
      }
      
      override public function destroy() : void
      {
         ElementFightController.destroy();
         LevelManager.addLevel();
      }
   }
}
