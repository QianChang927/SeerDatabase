package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.getDefinitionByName;
   
   public class PetPropClass_300757
   {
      
      private static var _info:PetPropInfo;
       
      
      public function PetPropClass_300757(param1:PetPropInfo)
      {
         super();
         _info = param1;
         getDefinitionByName("com.robot.app2.control.ChoosPetPropertyController").init(this.sureChange);
      }
      
      private function sureChange(param1:int) : void
      {
         ModuleManager.hideModule(ClientConfig.getAppModule("ChoosPetPropertyPanel"));
         SocketConnection.send(45151,_info.petInfo.catchTime,param1,PetManager.curViewEffectIdx);
      }
   }
}
