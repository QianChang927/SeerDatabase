package com.robot.core.info.pet
{
   import flash.utils.IDataInput;
   
   public class OtherPeoplePetInfo
   {
       
      
      public var SKILL_NUM:int = 5;
      
      public var catchTime:uint;
      
      public var useflag:uint;
      
      public var id:uint;
      
      public var level:uint;
      
      public var dv:uint;
      
      public var nature:uint;
      
      public var hp:uint;
      
      public var maxHp:uint;
      
      public var maxhp_adj:uint;
      
      public var atk:uint;
      
      public var atk_adj:uint;
      
      public var sp_atk:uint;
      
      public var spatk_adj:uint;
      
      public var def:uint;
      
      public var def_adj:uint;
      
      public var sp_def:uint;
      
      public var spdef_adj:uint;
      
      public var spd:uint;
      
      public var spd_adj:uint;
      
      public var evlistArray:Array;
      
      public var skillArray:Array;
      
      public var move_itemArray:Array;
      
      public var activated_sp_movesArray:Array;
      
      public var mintmarksArray:Array;
      
      public var common_slot_activated:uint;
      
      public var skinId:uint;
      
      public function OtherPeoplePetInfo(param1:IDataInput)
      {
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         this.evlistArray = [];
         this.skillArray = [];
         this.move_itemArray = [];
         this.activated_sp_movesArray = [];
         this.mintmarksArray = [];
         super();
         if(param1 == null)
         {
            return;
         }
         this.catchTime = param1.readUnsignedInt();
         this.useflag = param1.readUnsignedInt();
         this.id = param1.readUnsignedInt();
         this.level = param1.readUnsignedInt();
         this.dv = param1.readUnsignedInt();
         this.nature = param1.readUnsignedInt();
         this.hp = param1.readUnsignedInt();
         this.maxHp = param1.readUnsignedInt();
         this.maxhp_adj = param1.readUnsignedInt();
         this.atk = param1.readUnsignedInt();
         this.atk_adj = param1.readUnsignedInt();
         this.sp_atk = param1.readUnsignedInt();
         this.spatk_adj = param1.readUnsignedInt();
         this.def = param1.readUnsignedInt();
         this.def_adj = param1.readUnsignedInt();
         this.sp_def = param1.readUnsignedInt();
         this.spdef_adj = param1.readUnsignedInt();
         this.spd = param1.readUnsignedInt();
         this.spd_adj = param1.readUnsignedInt();
         var _loc2_:int = 0;
         while(_loc2_ < 6)
         {
            this.evlistArray.push(param1.readByte());
            _loc2_++;
         }
         var _loc3_:int = int(param1.readUnsignedInt());
         var _loc4_:int = 0;
         while(_loc4_ < 5)
         {
            _loc7_ = int(param1.readUnsignedInt());
            _loc8_ = int(param1.readUnsignedInt());
            if(_loc4_ < _loc3_)
            {
               this.skillArray.push({
                  "moveID":_loc7_,
                  "pp":_loc8_
               });
            }
            _loc4_++;
         }
         var _loc5_:int = 0;
         while(_loc5_ < 6)
         {
            this.activated_sp_movesArray.push(param1.readUnsignedInt());
            _loc5_++;
         }
         var _loc6_:int = 0;
         while(_loc6_ < 3)
         {
            this.mintmarksArray.push(param1.readUnsignedInt());
            _loc6_++;
         }
         this.common_slot_activated = param1.readUnsignedInt();
         this.skinId = param1.readUnsignedInt();
      }
   }
}
