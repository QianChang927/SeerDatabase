package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class ProvPetController
   {
       
      
      public function ProvPetController()
      {
         super();
      }
      
      public static function showProcPanel() : void
      {
         if(!MainManager.actorModel.nono)
         {
            Alarm.show("只有带上你的NoNo才能来鉴定精灵哦！");
            return;
         }
         if(PetManager.length <= 0)
         {
            Alarm.show("你的背包中没有精灵可以鉴定哦！");
            return;
         }
         ModuleManager.showModule(ClientConfig.getAppModule("AssessorChoicePanel2013"));
         SocketConnection.send(1022,86053472);
      }
      
      public static function provPet(param1:uint) : void
      {
         PetManager.provPet(param1);
      }
      
      public static function destroy() : void
      {
      }
   }
}
