package com.robot.app.info
{
   import flash.utils.IDataInput;
   
   public class GaiyaEffectInfo
   {
       
      
      public var defEffectID:uint;
      
      public var effects:Array;
      
      public function GaiyaEffectInfo(param1:IDataInput = null)
      {
         var _loc2_:uint = 0;
         var _loc3_:int = 0;
         super();
         if(param1)
         {
            this.defEffectID = param1.readUnsignedInt();
            _loc2_ = uint(param1.readUnsignedInt());
            this.effects = [];
            _loc3_ = 0;
            while(_loc3_ < _loc2_)
            {
               this.effects[_loc3_] = param1.readUnsignedInt();
               _loc3_++;
            }
         }
      }
   }
}
