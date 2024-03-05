package com.robot.app2.control.springPetCollect
{
   public class SpringPet
   {
       
      
      public var _id:uint;
      
      public var _level:String;
      
      public var _star:uint;
      
      public var _name:String;
      
      public var _way:Object;
      
      public var _isContain:Boolean;
      
      public var _frame:int;
      
      public var _isSelected:Boolean;
      
      public function SpringPet(param1:int, param2:uint, param3:String, param4:uint, param5:String, param6:Object)
      {
         super();
         this._id = param2;
         this._way = param6;
         this._level = param3;
         this._name = param5;
         this._star = param4;
         this._frame = param1;
      }
   }
}
