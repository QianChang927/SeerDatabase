package com.robot.core.info.fightCard
{
   public class FightCardSimpleInfo
   {
       
      
      public var id:uint;
      
      public var type:uint;
      
      public var name:String;
      
      public var blood:uint;
      
      public var damage_1:uint;
      
      public var damage_2:uint;
      
      public var damage_3:uint;
      
      public var sp:uint;
      
      public var spType:uint;
      
      public var spAttack:uint;
      
      public var spDefense:uint;
      
      public var petId:uint;
      
      public function FightCardSimpleInfo(param1:XML)
      {
         super();
         this.id = uint(param1.@id);
         this.type = uint(param1.@type);
         this.name = param1.@name;
         if(param1.hasOwnProperty("@blood"))
         {
            this.blood = uint(param1.@blood);
         }
         if(param1.hasOwnProperty("@damage_1"))
         {
            this.damage_1 = uint(param1.@damage_1);
         }
         if(param1.hasOwnProperty("@damage_2"))
         {
            this.damage_2 = uint(param1.@damage_2);
         }
         if(param1.hasOwnProperty("@damage_3"))
         {
            this.damage_3 = uint(param1.@damage_3);
         }
         if(param1.hasOwnProperty("@sp"))
         {
            this.sp = uint(param1.@sp);
         }
         if(param1.hasOwnProperty("@spType"))
         {
            this.spType = uint(param1.@spType);
         }
         if(param1.hasOwnProperty("@spAttack"))
         {
            this.spAttack = uint(param1.@spAttack);
         }
         if(param1.hasOwnProperty("@spDefense"))
         {
            this.spDefense = uint(param1.@spDefense);
         }
         if(param1.hasOwnProperty("@petId"))
         {
            this.petId = uint(param1.@petId);
         }
      }
   }
}
