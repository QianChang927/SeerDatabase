package com.robot.core.info.userItem
{
   import flash.utils.IDataInput;
   
   public class CountermarkItemInfo
   {
       
      
      public var obtainTime:uint;
      
      public var itemID:uint;
      
      public var bindMonId:uint;
      
      public var bindMoveId:uint;
      
      public var attriAdj:Array;
      
      public var gemId:uint;
      
      public var installedPet:uint;
      
      public var attriIndex:Array;
      
      public function CountermarkItemInfo(param1:IDataInput = null)
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         super();
         this.obtainTime = param1.readUnsignedInt();
         this.itemID = param1.readUnsignedInt();
         this.bindMonId = param1.readUnsignedInt();
         this.bindMoveId = param1.readUnsignedInt();
         this.attriIndex = [];
         this.attriAdj = [];
         _loc2_ = 0;
         while(_loc2_ < 6)
         {
            _loc3_ = int(param1.readUnsignedInt());
            this.attriAdj.push(_loc3_);
            if(_loc3_ > 0)
            {
               this.attriIndex.push(_loc2_);
            }
            _loc2_++;
         }
         this.gemId = param1.readUnsignedInt();
         this.installedPet = param1.readUnsignedInt();
      }
      
      public function get isBindMon() : Boolean
      {
         return this.bindMonId > 0;
      }
      
      public function get isInstall() : Boolean
      {
         return this.installedPet > 0;
      }
      
      public function get isBindMove() : Boolean
      {
         return this.bindMoveId > 0;
      }
      
      public function get isBindGem() : Boolean
      {
         return this.gemId > 0;
      }
   }
}
