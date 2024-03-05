package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.events.SocketEvent;
   
   public class PetPropClass_300053
   {
       
      
      private var petInfo:PetInfo;
      
      public function PetPropClass_300053(param1:PetPropInfo)
      {
         super();
         this.petInfo = param1.petInfo;
         SocketConnection.addCmdListener(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,this.onChange);
         SocketConnection.mainSocket.addEventListener(SocketErrorEvent.ERROR,this.onError);
         SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
      }
      
      private function onError(param1:SocketErrorEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,this.onChange);
         SocketConnection.mainSocket.removeEventListener(SocketErrorEvent.ERROR,this.onError);
      }
      
      private function onChange(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,this.onChange);
         SocketConnection.mainSocket.removeEventListener(SocketErrorEvent.ERROR,this.onError);
         PetManager.addEventListener(PetEvent.UPDATE_INFO,this.onUpdate);
         PetManager.upDate();
      }
      
      private function onUpdate(param1:Event) : void
      {
         PetManager.removeEventListener(PetEvent.UPDATE_INFO,this.onUpdate);
         var _loc2_:PetInfo = PetManager.getPetInfo(this.petInfo.catchTime);
         if(_loc2_ != null)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ItemPanel_300053"),"正在打开",_loc2_);
         }
      }
   }
}
