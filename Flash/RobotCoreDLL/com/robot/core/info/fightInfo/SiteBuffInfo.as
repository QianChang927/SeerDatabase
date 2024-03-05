package com.robot.core.info.fightInfo
{
   import flash.utils.IDataInput;
   
   public class SiteBuffInfo
   {
       
      
      public var _siteBuffId:int;
      
      public var _siteBuffTurn:int;
      
      public function SiteBuffInfo(param1:IDataInput)
      {
         super();
         this._siteBuffId = param1.readUnsignedShort();
         this._siteBuffTurn = param1.readUnsignedByte();
      }
      
      public function get siteBuffId() : int
      {
         return this._siteBuffId;
      }
      
      public function get siteBuffTurn() : int
      {
         return this._siteBuffTurn;
      }
   }
}
