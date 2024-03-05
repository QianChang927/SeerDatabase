package com.robot.core.info.task
{
   import flash.utils.IDataInput;
   
   public class CateInfo
   {
       
      
      private var _id:uint;
      
      private var _count:uint;
      
      public function CateInfo(param1:IDataInput = null)
      {
         super();
         if(param1)
         {
            this._id = param1.readUnsignedInt();
            this._count = param1.readUnsignedInt();
         }
      }
      
      public function get id() : uint
      {
         return this._id;
      }
      
      public function get count() : uint
      {
         return this._count;
      }
      
      public function set id(param1:uint) : void
      {
         this._id = param1;
      }
      
      public function set count(param1:uint) : void
      {
         this._count = param1;
      }
   }
}
