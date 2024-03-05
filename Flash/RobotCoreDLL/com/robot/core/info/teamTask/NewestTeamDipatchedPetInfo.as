package com.robot.core.info.teamTask
{
   import flash.utils.ByteArray;
   
   public class NewestTeamDipatchedPetInfo
   {
       
      
      private var _petID:uint;
      
      private var _catchTime:uint;
      
      private var _level:uint;
      
      public function NewestTeamDipatchedPetInfo(param1:ByteArray)
      {
         super();
         this._catchTime = param1.readUnsignedInt();
         this._petID = param1.readUnsignedInt();
         this._level = param1.readUnsignedInt();
      }
      
      public function get catchTime() : uint
      {
         return this._catchTime;
      }
      
      public function get petID() : uint
      {
         return this._petID;
      }
      
      public function get level() : uint
      {
         return this._level;
      }
   }
}
