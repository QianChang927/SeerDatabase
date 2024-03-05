package com.robot.core.info.teamPK
{
   import flash.utils.IDataInput;
   
   public class TeamPKBeShotInfo
   {
      
      public static const PLAYER_TO_PLAYER:uint = 1;
      
      public static const PLAYER_TO_BUILDING:uint = 2;
      
      public static const BUILDING_TO_PLAYER:uint = 3;
       
      
      private var _type:uint;
      
      private var _dmg:uint;
      
      private var _crit:uint;
      
      private var _shooter:com.robot.core.info.teamPK.ShooterInfo;
      
      private var _beShooter:com.robot.core.info.teamPK.ShooterInfo;
      
      public function TeamPKBeShotInfo(param1:IDataInput)
      {
         super();
         this._type = param1.readUnsignedInt();
         this._dmg = param1.readUnsignedInt();
         this._crit = param1.readUnsignedInt();
         this._shooter = new com.robot.core.info.teamPK.ShooterInfo(param1);
         this._beShooter = new com.robot.core.info.teamPK.ShooterInfo(param1);
      }
      
      public function get shotType() : uint
      {
         return this._type;
      }
      
      public function get damage() : uint
      {
         return this._dmg;
      }
      
      public function isCrit() : Boolean
      {
         return Boolean(this._crit);
      }
      
      public function shooter() : com.robot.core.info.teamPK.ShooterInfo
      {
         return this._shooter;
      }
      
      public function beShooer() : com.robot.core.info.teamPK.ShooterInfo
      {
         return this._beShooter;
      }
   }
}
