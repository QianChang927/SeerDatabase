package com.robot.app2.control.newSpt
{
   public class BossInfo
   {
       
      
      private var _petId:int;
      
      private var _des:String;
      
      public function BossInfo(param1:XML)
      {
         super();
         this._petId = int(param1.@pid);
         this._des = String(param1.@des);
      }
      
      public function get petId() : int
      {
         return this._petId;
      }
      
      public function get des() : String
      {
         return this._des;
      }
   }
}
