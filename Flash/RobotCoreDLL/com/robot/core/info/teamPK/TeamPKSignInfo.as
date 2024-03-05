package com.robot.core.info.teamPK
{
   import flash.utils.ByteArray;
   import flash.utils.IDataInput;
   
   public class TeamPKSignInfo
   {
       
      
      private var _sign:ByteArray;
      
      public function TeamPKSignInfo(param1:IDataInput)
      {
         this._sign = new ByteArray();
         super();
         param1.readBytes(this._sign,0,24);
      }
      
      public function get sign() : ByteArray
      {
         return this._sign;
      }
   }
}
