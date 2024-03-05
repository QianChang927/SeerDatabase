package com.robot.app2.control.activityHelper.values
{
   import com.robot.app2.component.ValueUpdateWithPromiseComponent;
   import com.robot.app2.control.activityHelper.IValue;
   
   public class SimpleLimitValue implements IValue
   {
       
      
      protected var _valueUpCom:ValueUpdateWithPromiseComponent;
      
      protected var _data;
      
      protected var _value:int;
      
      protected var _valueBitsArr:Array;
      
      public function SimpleLimitValue(param1:ValueUpdateWithPromiseComponent, param2:*)
      {
         super();
         this._valueUpCom = param1;
         this._data = param2;
         this._valueBitsArr = param2["value"].split(".");
         this._value = this._valueBitsArr[0];
         if(this._valueBitsArr.length >= 2)
         {
            this._valueBitsArr = param2["value"].split(".")[1].split("~");
         }
      }
      
      public function getValue() : *
      {
         if(this._valueBitsArr.length < 2)
         {
            return int(this._data.limit) - this._valueUpCom.getValueById(this._value);
         }
         return int(this._data.limit) - (this._valueUpCom.getValueById(this._value) >>> this._valueBitsArr[0] - 1 & Math.pow(2,this._valueBitsArr[1] - this._valueBitsArr[0]) - 1);
      }
   }
}
