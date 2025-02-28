package com.robot.app2.mapProcess.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.PetEffectXMLInfo;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class FightPowerController
   {
       
      
      public function FightPowerController()
      {
         super();
      }
      
      public static function getTotalPower(param1:Function = null) : void
      {
         var func:Function = param1;
         SocketConnection.sendWithCallback(CommandID.FIGHT_POWER_QUERY,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            if(null != func)
            {
               func(_loc2_.readUnsignedInt());
            }
         },1);
      }
      
      public static function getPetTotalPower(param1:Array, param2:Function = null) : void
      {
         var by:ByteArray;
         var tm:int = 0;
         var petArr:Array = param1;
         var func:Function = param2;
         if(petArr == null || petArr.length == 0)
         {
            return;
         }
         by = new ByteArray();
         by.writeUnsignedInt(petArr.length);
         for each(tm in petArr)
         {
            by.writeUnsignedInt(tm);
         }
         SocketConnection.sendWithCallback(CommandID.FIGHT_POWER_PET_QUERY,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:Array = new Array();
            var _loc4_:int = int(_loc2_.readUnsignedInt());
            var _loc5_:int = 0;
            while(_loc5_ < _loc4_)
            {
               _loc3_.push(_loc2_.readUnsignedInt());
               _loc5_++;
            }
            if(null != func)
            {
               func(_loc3_);
            }
         },by);
      }
      
      public static function isBestLevel(param1:PetInfo) : Boolean
      {
         return param1.level >= 100;
      }
      
      public static function isBestDv(param1:PetInfo) : Boolean
      {
         return param1.dv >= 31;
      }
      
      public static function isBestNature(param1:PetInfo) : Boolean
      {
         if(param1.attack >= param1.s_a && (param1.nature == 1 || param1.nature == 18) || param1.attack < param1.s_d && (param1.nature == 8 || param1.nature == 16))
         {
            return true;
         }
         return false;
      }
      
      public static function isBestEv(param1:PetInfo) : Boolean
      {
         var sum:int = 0;
         var info:PetInfo = param1;
         info.evArray.map(function(param1:int, param2:int, param3:Array):void
         {
            sum += param1;
         });
         return sum >= 510;
      }
      
      public static function currentEffect(param1:PetInfo) : PetEffectInfo
      {
         var _loc2_:PetEffectInfo = null;
         var _loc3_:String = null;
         for each(_loc2_ in param1.effectList)
         {
            if(_loc2_.status == 1)
            {
               if(!(_loc2_.effectID > 400 || _loc2_.effectID <= 420))
               {
                  _loc3_ = String(PetEffectXMLInfo.getEffect(_loc2_.effectID,_loc2_.args));
                  if(_loc3_.length <= 4)
                  {
                     return _loc2_;
                  }
               }
            }
         }
         return null;
      }
      
      public static function isBestEffect(param1:PetInfo) : Boolean
      {
         var _loc2_:PetEffectInfo = currentEffect(param1);
         return Boolean(_loc2_) && PetEffectXMLInfo.getStarLevel(_loc2_.effectID,_loc2_.args) >= 3;
      }
      
      public static function isMarkFull(param1:PetInfo) : Boolean
      {
         return param1.abilityMark > 0 && param1.skillMark > 0 && param1.commonMark > 0;
      }
   }
}
