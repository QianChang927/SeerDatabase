package com.robot.app.nono.featureApp
{
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alert;
   
   public class App_700001
   {
       
      
      public function App_700001()
      {
         super();
         if(NonoManager.info.superNono)
         {
            PetManager.cureAll();
         }
         else
         {
            Alert.show("恢复体力需要花费50赛尔豆，你确定要为你的精灵们恢复体力吗？",function():void
            {
               PetManager.cureAll();
            });
         }
      }
   }
}
