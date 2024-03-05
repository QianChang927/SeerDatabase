package com.robot.core.info.fightInfo
{
   import flash.utils.IDataInput;
   
   public class MarkBuffInfo
   {
       
      
      public var _markBuffCnt:int;
      
      public var _markBuffArr:Array;
      
      public function MarkBuffInfo(param1:IDataInput)
      {
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         super();
         this._markBuffCnt = param1.readUnsignedByte();
         this._markBuffArr = [];
         var _loc2_:int = 0;
         while(_loc2_ < this._markBuffCnt)
         {
            _loc3_ = int(param1.readUnsignedShort());
            _loc4_ = int(param1.readUnsignedByte());
            this._markBuffArr.push({
               "id":_loc3_,
               "markNum":_loc4_
            });
            _loc2_++;
         }
      }
      
      public function updateInfo(param1:IDataInput) : void
      {
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         this._markBuffCnt = param1.readUnsignedByte();
         this._markBuffArr = [];
         var _loc2_:int = 0;
         while(_loc2_ < this._markBuffCnt)
         {
            _loc3_ = int(param1.readUnsignedShort());
            _loc4_ = int(param1.readUnsignedByte());
            this._markBuffArr.push({
               "id":_loc3_,
               "markNum":_loc4_
            });
            _loc2_++;
         }
      }
      
      public function get markBuffCnt() : int
      {
         return this._markBuffCnt;
      }
      
      public function get markBuffArr() : Array
      {
         return this._markBuffArr;
      }
   }
}
