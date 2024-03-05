package com.robot.core.info
{
   import flash.utils.IDataInput;
   
   public class GetPlateInfo
   {
       
      
      private var _type:uint = 1;
      
      private var _count:uint = 1;
      
      public function GetPlateInfo(param1:IDataInput)
      {
         super();
         this._type = param1.readUnsignedInt();
         this._count = param1.readUnsignedInt();
      }
      
      public function get type() : uint
      {
         return this._type;
      }
      
      public function get count() : uint
      {
         return this._count;
      }
   }
}
