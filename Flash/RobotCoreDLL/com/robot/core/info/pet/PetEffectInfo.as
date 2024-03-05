package com.robot.core.info.pet
{
   import flash.utils.ByteArray;
   import flash.utils.IDataInput;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   
   public class PetEffectInfo
   {
       
      
      public var itemId:uint;
      
      public var status:uint;
      
      public var leftCount:uint;
      
      public var effectID:uint;
      
      public var param:ByteArray;
      
      public var args:String;
      
      public var args_all:HashMap;
      
      public var args_6:String;
      
      private var addArray:Array;
      
      private var levelArray:Array;
      
      public function PetEffectInfo(param1:IDataInput)
      {
         var a1:uint;
         var a2:uint;
         var a3:uint;
         var a4:uint;
         var a5:uint;
         var a6:uint;
         var a7:uint;
         var a8:uint;
         var a:Array;
         var checkAdd:Function;
         var i:int = 0;
         var j:int = 0;
         var lv:int = 0;
         var data:IDataInput = param1;
         this.addArray = [];
         this.levelArray = [];
         super();
         checkAdd = function(param1:ByteArray):uint
         {
            var _loc2_:uint = param1.readUnsignedByte();
            if(_loc2_)
            {
               return _loc2_ * 256;
            }
            return 0;
         };
         if(data == null)
         {
            return;
         }
         this.args_all = new HashMap();
         this.itemId = data.readUnsignedInt();
         this.status = data.readUnsignedByte();
         this.leftCount = data.readUnsignedByte();
         this.effectID = data.readUnsignedShort();
         a1 = uint(data.readUnsignedByte());
         a1 += checkAdd(data);
         a2 = uint(data.readUnsignedByte());
         a2 += checkAdd(data);
         a3 = uint(data.readUnsignedByte());
         a3 += checkAdd(data);
         a4 = uint(data.readUnsignedByte());
         a4 += checkAdd(data);
         a5 = uint(data.readUnsignedByte());
         a5 += checkAdd(data);
         a6 = uint(data.readUnsignedByte());
         a6 += checkAdd(data);
         a7 = uint(data.readUnsignedByte());
         a7 += checkAdd(data);
         a8 = uint(data.readUnsignedByte());
         a8 += checkAdd(data);
         a = [];
         a.push(a2);
         a.push(a3);
         a.push(a4);
         a.push(a5);
         a.push(a6);
         a.push(a7);
         a.push(a8);
         if(this.status == 3)
         {
            DebugTrace.show(a1 + " " + a2 + " " + a3 + " " + a4 + " " + a5 + " " + a6 + " " + a7 + " " + a8);
         }
         this.args_all.add(a1,a2);
         this.args_all.add(a3,a4);
         this.args_all.add(a5,a6);
         this.args_all.add(a7,a8);
         if(a2 == 0 && a3 == 0 && a4 == 0 && a5 == 0 && a6 == 0)
         {
            this.args = a1 + " " + 0;
         }
         else
         {
            this.args = a1.toString();
            i = 5;
            i = 6;
            while(i >= 0)
            {
               if(a[i] > 0)
               {
                  j = 0;
                  while(j <= i)
                  {
                     this.args += " " + a[j];
                     j++;
                  }
                  break;
               }
               i--;
            }
         }
         this.args_6 = a2 + " " + a3 + " " + a4 + " " + a5 + " " + a6 + " " + a1;
         DebugTrace.show(this.args);
         if(this.effectID == 171)
         {
            this.addArray.push(a1);
            this.addArray.push(a2);
            this.addArray.push(a3);
            this.addArray.push(a4);
            this.addArray.push(a5);
            this.addArray.push(a6);
            lv = int(a7);
            this.levelArray.push(lv % 16);
            lv -= lv % 16;
            lv /= 16;
            this.levelArray.push(lv % 16);
            lv -= lv % 16;
            lv /= 16;
            this.levelArray.push(lv % 16);
            lv = int(a8);
            this.levelArray.push(lv % 16);
            lv -= lv % 16;
            lv /= 16;
            this.levelArray.push(lv % 16);
            lv -= lv % 16;
            lv /= 16;
            this.levelArray.push(lv % 16);
         }
      }
      
      public function getTeamTechAdd(param1:int) : Array
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         if(this.effectID == 171)
         {
            _loc2_ = int(this.addArray[param1]);
            _loc3_ = int(this.levelArray[param1]);
            return [_loc2_,_loc3_];
         }
         return [0,0];
      }
      
      public function getTeamAddArray() : Array
      {
         return this.addArray;
      }
   }
}
