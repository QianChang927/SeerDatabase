package com.robot.core.info
{
   import com.robot.core.manager.NonoManager;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.IDataInput;
   import org.taomee.utils.BitUtil;
   
   public class NonoInfo
   {
       
      
      public var userID:uint;
      
      public var flag:Array;
      
      public var state:Array;
      
      public var nick:String;
      
      public var superNono:Boolean;
      
      public var color:uint;
      
      public var power:Number;
      
      public var mate:Number;
      
      public var iq:uint;
      
      public var ai:uint;
      
      public var birth:Number;
      
      public var chargeTime:uint;
      
      public var func:Array;
      
      public var superEnergy:int = 0;
      
      public var superLevel:uint;
      
      public var superStage:uint;
      
      public var changeToPet:uint;
      
      public var isExtremeNono:Boolean;
      
      public var flyStyle:uint;
      
      public var point:Point;
      
      public function NonoInfo(param1:IDataInput = null)
      {
         var _loc2_:uint = 0;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc6_:uint = 0;
         var _loc7_:ByteArray = null;
         var _loc8_:int = 0;
         this.flag = [];
         this.state = [];
         this.func = [];
         super();
         if(param1)
         {
            this.userID = param1.readUnsignedInt();
            _loc2_ = uint(param1.readUnsignedInt());
            if(_loc2_ == 0)
            {
               return;
            }
            _loc3_ = 0;
            while(_loc3_ < 32)
            {
               this.flag.push(Boolean(BitUtil.getBit(_loc2_,_loc3_)));
               _loc3_++;
            }
            _loc2_ = uint(param1.readUnsignedInt());
            _loc4_ = 0;
            while(_loc4_ < 32)
            {
               this.state.push(Boolean(BitUtil.getBit(_loc2_,_loc4_)));
               _loc4_++;
            }
            this.nick = param1.readUTFBytes(16);
            this.superNono = Boolean(param1.readUnsignedInt());
            this.color = param1.readUnsignedInt();
            this.power = param1.readUnsignedInt() / 1000;
            this.mate = param1.readUnsignedInt() / 1000;
            this.iq = param1.readUnsignedInt();
            this.ai = param1.readUnsignedShort();
            this.birth = param1.readUnsignedInt() * 1000;
            this.chargeTime = param1.readUnsignedInt();
            _loc5_ = 0;
            while(_loc5_ < 20)
            {
               _loc2_ = uint(param1.readUnsignedByte());
               _loc8_ = 0;
               while(_loc8_ < 8)
               {
                  this.func.push(Boolean(BitUtil.getBit(_loc2_,_loc8_)));
                  _loc8_++;
               }
               _loc5_++;
            }
            this.superEnergy = param1.readUnsignedInt();
            this.superLevel = param1.readUnsignedInt();
            this.superStage = param1.readUnsignedInt();
            if(this.superStage > NonoManager.MAX)
            {
               this.superStage = NonoManager.MAX;
            }
            if(this.superStage == 0)
            {
               this.superStage = 1;
            }
            _loc6_ = uint(param1.readUnsignedByte());
            this.isExtremeNono = Boolean(BitUtil.getBit(_loc6_,1));
            if((_loc7_ = param1 as ByteArray).length - _loc7_.position < 4)
            {
               return;
            }
            this.changeToPet = param1.readUnsignedInt();
         }
      }
      
      public function getMateLevel() : uint
      {
         if(this.mate <= 30)
         {
            return 1;
         }
         if(this.mate >= 31 && this.mate <= 69)
         {
            return 2;
         }
         return 3;
      }
      
      public function getPowerLevel() : uint
      {
         if(this.power <= 30)
         {
            return 1;
         }
         if(this.power >= 31 && this.power <= 69)
         {
            return 2;
         }
         return 3;
      }
   }
}
