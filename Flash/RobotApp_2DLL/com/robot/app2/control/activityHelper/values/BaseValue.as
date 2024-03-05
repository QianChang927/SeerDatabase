package com.robot.app2.control.activityHelper.values
{
   import com.robot.app2.component.ValueUpdateWithPromiseComponent;
   import com.robot.app2.control.activityHelper.IValue;
   
   public class BaseValue implements IValue
   {
       
      
      protected var _valueUpCom:ValueUpdateWithPromiseComponent;
      
      protected var _data;
      
      public function BaseValue(param1:ValueUpdateWithPromiseComponent, param2:*)
      {
         super();
         this._valueUpCom = param1;
         this._data = param2;
      }
      
      public function getValue() : *
      {
         var _loc2_:Array = null;
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         var _loc1_:String = String(this._data["sourceType"]);
         if(this.valueId)
         {
            if(_loc1_)
            {
               return this._valueUpCom.getValue(this.valueId,_loc1_);
            }
            return this._valueUpCom.getValueById(this.valueId);
         }
         if(this.valueIds)
         {
            _loc2_ = this.valueIds;
            _loc3_ = [];
            _loc4_ = 0;
            while(_loc4_ < _loc2_.length)
            {
               if(_loc1_)
               {
                  _loc3_.push(this._valueUpCom.getValue(_loc2_[_loc4_],_loc1_));
               }
               else
               {
                  _loc3_.push(this._valueUpCom.getValueById(_loc2_[_loc4_]));
               }
               _loc4_++;
            }
            return _loc3_;
         }
         return null;
      }
      
      protected function get valueId() : uint
      {
         return this._data["valueId"];
      }
      
      protected function get valueIds() : Array
      {
         var _loc1_:Array = null;
         var _loc2_:String = null;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:int = 0;
         if(this._data["valueIds"] is String)
         {
            _loc1_ = [];
            _loc2_ = String(this._data["valueIds"]);
            _loc3_ = parseInt(_loc2_.split("-")[0]);
            _loc4_ = parseInt(_loc2_.split("-")[1]);
            _loc5_ = int(_loc3_);
            while(_loc5_ <= _loc4_)
            {
               _loc1_.push(_loc5_);
               _loc5_++;
            }
         }
         else if(this._data["valueIds"] is Array)
         {
            _loc1_ = this._data["valueIds"];
         }
         return _loc1_;
      }
   }
}
