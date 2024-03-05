package com.robot.app2.control
{
   import com.robot.core.CommandID;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import flash.utils.IDataInput;
   import org.taomee.events.SocketEvent;
   
   public class ExpeditionController
   {
       
      
      public function ExpeditionController()
      {
         super();
      }
      
      public static function tryUpdatePetInfo(param1:int, param2:Function = null) : void
      {
         if(isPetInBag(param1))
         {
            PetManager.upDateBagPetInfo(param1,param2);
         }
         else
         {
            param2(null);
         }
      }
      
      public static function getPetInfo(param1:int, param2:Function = null) : void
      {
         var catchTime:int = param1;
         var fun:Function = param2;
         if(isPetInBag(catchTime))
         {
            PetManager.upDateBagPetInfo(catchTime,fun);
         }
         else
         {
            SocketConnection.sendWithCallback(45546,function(param1:SocketEvent):void
            {
               var _loc2_:PetInfo = new PetInfo(param1.data as IDataInput);
               if(fun != null)
               {
                  fun(_loc2_);
               }
            },catchTime);
         }
      }
      
      public static function getPetSkillInfo(param1:PetInfo, param2:Function = null) : void
      {
         var info:PetInfo = param1;
         var fun:Function = param2;
         if(info.id == 650 || info.id == 651 || info.id == 652)
         {
            PetManager.getBlackCanStudySkill(info.catchTime,fun);
         }
         else if(isPetInBag(info.catchTime))
         {
            PetManager.getCanStudySkill(info.catchTime,fun);
         }
         else
         {
            SocketConnection.sendWithCallback(45547,function(param1:SocketEvent):void
            {
               var _loc6_:uint = 0;
               var _loc2_:ByteArray = param1.data as ByteArray;
               var _loc3_:uint = _loc2_.readUnsignedInt();
               var _loc4_:Array = [];
               var _loc5_:int = 0;
               while(_loc5_ < _loc3_)
               {
                  if((_loc6_ = _loc2_.readUnsignedInt()) != 0)
                  {
                     _loc4_.push(_loc6_);
                  }
                  _loc5_++;
               }
               if(fun != null)
               {
                  fun(_loc4_);
               }
            },info.catchTime);
         }
      }
      
      public static function petLearnSkill(param1:PetInfo, param2:int, param3:int, param4:Function = null) : void
      {
         if(param1.id == 650 || param1.id == 651 || param1.id == 652)
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_BLACKPET_SKILL,param4);
            SocketConnection.send(CommandID.EXCHANGE_BLACKPET_SKILL,param1.catchTime,param2,param3,1);
         }
         else
         {
            SocketConnection.addCmdListener(CommandID.PET_SKILL_SWICTH,param4);
            SocketConnection.send(CommandID.PET_SKILL_SWICTH,param1.catchTime,1,1,param2,param3);
         }
      }
      
      public static function isPetInBag(param1:int) : Boolean
      {
         if(PetManager.getPetInfo(param1))
         {
            return true;
         }
         return false;
      }
   }
}
