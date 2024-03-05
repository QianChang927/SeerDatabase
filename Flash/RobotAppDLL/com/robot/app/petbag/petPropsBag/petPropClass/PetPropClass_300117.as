package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   
   public class PetPropClass_300117
   {
       
      
      private var petInfo:PetInfo;
      
      private var _info:PetPropInfo;
      
      public function PetPropClass_300117(param1:PetPropInfo)
      {
         super();
         this._info = param1;
         this.petInfo = this._info.petInfo;
         this.turnOffabilityMark();
      }
      
      private function turnOffabilityMark() : void
      {
         if(this.petInfo.abilityMark)
         {
            SocketConnection.addCmdListener(CommandID.USE_COUNTERMARK,this.turnOffskillMark);
            SocketConnection.send(CommandID.USE_COUNTERMARK,this.petInfo.catchTime,0,0,0);
         }
         else
         {
            this.turnOffskillMark(null);
         }
      }
      
      private function turnOffskillMark(param1:Event) : void
      {
         SocketConnection.removeCmdListener(CommandID.USE_COUNTERMARK,this.turnOffskillMark);
         if(this.petInfo.skillMark)
         {
            SocketConnection.addCmdListener(CommandID.USE_COUNTERMARK,this.turnOffcommonMark);
            SocketConnection.send(CommandID.USE_COUNTERMARK,this.petInfo.catchTime,1,0,0);
         }
         else
         {
            this.turnOffcommonMark(null);
         }
      }
      
      private function turnOffcommonMark(param1:Event) : void
      {
         SocketConnection.removeCmdListener(CommandID.USE_COUNTERMARK,this.turnOffcommonMark);
         if(this.petInfo.commonMark)
         {
            SocketConnection.addCmdListener(CommandID.USE_COUNTERMARK,this.useItem);
            SocketConnection.send(CommandID.USE_COUNTERMARK,this.petInfo.catchTime,2,0,0);
         }
         else
         {
            this.useItem(null);
         }
      }
      
      private function useItem(param1:Event) : void
      {
         SocketConnection.removeCmdListener(CommandID.USE_COUNTERMARK,this.useItem);
         SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,this._info.petInfo.catchTime,this._info.itemId);
      }
   }
}
