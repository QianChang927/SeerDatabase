package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.PetEffectXMLInfo;
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.Event;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class PetPropClass_300054
   {
       
      
      private var petInfo:PetInfo;
      
      public function PetPropClass_300054(param1:PetPropInfo)
      {
         super();
         this.petInfo = param1.petInfo;
         SocketConnection.addCmdListener(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,this.onChange);
         SocketConnection.mainSocket.addEventListener(SocketErrorEvent.ERROR,this.onError);
         SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
      }
      
      private function onChange(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,this.onChange);
         SocketConnection.mainSocket.removeEventListener(SocketErrorEvent.ERROR,this.onError);
         PetManager.addEventListener(PetEvent.UPDATE_INFO,this.onUpdate);
         PetManager.upDate();
         EventManager.dispatchEvent(new Event("after_300054"));
      }
      
      private function onUpdate(param1:PetEvent) : void
      {
         var _loc3_:PetEffectInfo = null;
         var _loc5_:PetEffectInfo = null;
         var _loc6_:String = null;
         var _loc7_:String = null;
         PetManager.removeEventListener(PetEvent.UPDATE_INFO,this.onUpdate);
         var _loc2_:PetInfo = PetManager.getPetInfo(this.petInfo.catchTime);
         var _loc4_:uint = 0;
         while(_loc4_ < _loc2_.effectList.length)
         {
            if(!((_loc5_ = _loc2_.effectList[_loc4_] as PetEffectInfo).effectID == 177 || _loc5_.effectID == 287))
            {
               if(_loc5_.status == 1 || _loc5_.status == 4)
               {
                  if((_loc6_ = String(PetEffectXMLInfo.getEffect(_loc5_.effectID,_loc5_.args))).length <= "这四个字".length && _loc6_.length > 0)
                  {
                     if(!(_loc5_.effectID > 400 && _loc5_.effectID <= 420))
                     {
                        _loc3_ = _loc5_;
                     }
                     break;
                  }
               }
            }
            _loc4_++;
         }
         if(_loc3_ != null)
         {
            _loc7_ = String(PetEffectXMLInfo.getEffect(_loc3_.effectID,_loc3_.args));
            Alarm.show("精灵的特性变为了" + _loc7_);
         }
      }
      
      private function onError(param1:SocketErrorEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,this.onChange);
         SocketConnection.mainSocket.removeEventListener(SocketErrorEvent.ERROR,this.onError);
      }
   }
}
