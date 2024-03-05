package com.robot.app.nono.featureApp
{
   import com.robot.app.panel.PetChoosePanel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ModuleManager;
   
   public class App_700016
   {
       
      
      public function App_700016()
      {
         super();
         PetChoosePanel.show(function(param1:PetInfo):void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PetSkillSortPanel"),"正在加载技能排序....",param1);
         });
      }
   }
}
