package com.robot.core.config.xmlInfo
{
   public class PetSkinType
   {
       
      
      public var id:int;
      
      public var type:int;
      
      public var lifeTime:int;
      
      public function PetSkinType()
      {
         super();
      }
      
      public function get toString() : String
      {
         if(this.type == 1)
         {
            return this.lifeTime + "天";
         }
         if(this.type == 2)
         {
            return "永久";
         }
         return "";
      }
   }
}
