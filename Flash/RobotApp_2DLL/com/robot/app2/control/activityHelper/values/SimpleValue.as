package com.robot.app2.control.activityHelper.values
{
   import com.robot.app2.component.ValueUpdateWithPromiseComponent;
   import com.robot.app2.control.activityHelper.IValue;
   
   public class SimpleValue implements IValue
   {
       
      
      protected var _valueUpCom:ValueUpdateWithPromiseComponent;
      
      protected var _data;
      
      protected var _valueArr:Array;
      
      protected var _valueBitsArr:Array;
      
      public function SimpleValue(param1:ValueUpdateWithPromiseComponent, param2:*)
      {
         super();
         this._valueUpCom = param1;
         this._data = param2;
         this._valueArr = new Array();
         this._valueBitsArr = new Array();
         this.parseValues();
      }
      
      public function getValue() : *
      {
         var _loc1_:Array = new Array();
         var _loc2_:int = 1;
         while(_loc2_ <= this._valueArr.length)
         {
            _loc1_.push((this._valueUpCom.getValueById(this._valueArr[_loc2_ - 1]) & this._valueBitsArr[_loc2_ - 1]) >>> this.getStartPos(this._valueBitsArr[_loc2_ - 1]));
            _loc2_++;
         }
         if(1 == _loc1_.length)
         {
            return _loc1_[0];
         }
         if(0 == _loc1_.length)
         {
            return null;
         }
         return _loc1_;
      }
      
      protected function parseValues() : void
      {
         var _loc1_:Array = null;
         var _loc2_:Array = null;
         var _loc3_:Array = null;
         var _loc4_:Array = null;
         var _loc7_:String = null;
         var _loc8_:int = 0;
         var _loc9_:int = 0;
         var _loc10_:int = 0;
         var _loc11_:int = 0;
         var _loc5_:Array = new Array();
         var _loc6_:String = String(this._data["value"]);
         if(null == _loc6_)
         {
            return;
         }
         _loc1_ = _loc6_.split("|");
         _loc8_ = 1;
         while(_loc8_ <= _loc1_.length)
         {
            if((_loc6_ = String(_loc1_[_loc8_ - 1])).indexOf(".") != -1)
            {
               _loc6_ = String((_loc4_ = this.getStartEnd(_loc6_,"."))[0]);
               _loc7_ = String(_loc4_[1]);
            }
            if(_loc6_.indexOf("~") == -1)
            {
               _loc3_ = new Array();
               _loc2_ = this.getStartEnd(_loc6_,"-");
               _loc9_ = parseInt(_loc2_[0]);
               while(_loc9_ <= parseInt(_loc2_[1]))
               {
                  _loc10_ = _loc9_;
                  _loc3_.push(_loc10_);
                  if(_loc7_ != null)
                  {
                     _loc4_ = this.getStartEnd(_loc7_,"~");
                     this._valueArr.push(_loc10_);
                     this._valueBitsArr.push(this.getBitsLimit(_loc4_[0],_loc4_[1]));
                  }
                  else
                  {
                     this._valueArr.push(_loc10_);
                     this._valueBitsArr.push(uint.MAX_VALUE);
                  }
                  _loc9_++;
               }
            }
            else if(_loc3_ != null)
            {
               _loc4_ = this.getStartEnd(_loc6_,"~");
               _loc11_ = 1;
               while(_loc11_ <= _loc3_.length)
               {
                  this._valueArr.push(_loc3_[_loc11_ - 1]);
                  this._valueBitsArr.push(this.getBitsLimit(_loc4_[0],_loc4_[1]));
                  _loc11_++;
               }
            }
            _loc8_++;
         }
      }
      
      protected function getStartPos(param1:uint) : uint
      {
         var _loc2_:int = 0;
         while(_loc2_ < 32)
         {
            if(param1 >>> _loc2_ & 1 == 1)
            {
               return _loc2_;
            }
            _loc2_++;
         }
         return 0;
      }
      
      protected function getStartEnd(param1:String, param2:String) : Array
      {
         var _loc3_:Array = param1.split(param2);
         if(_loc3_.length < 2)
         {
            _loc3_[1] = _loc3_[0];
         }
         return _loc3_;
      }
      
      protected function readBits(param1:uint, param2:int, param3:int) : uint
      {
         return param1 >> param2 - 1 & (1 << param3 - param2 + 1) - 1;
      }
      
      protected function getBitsLimit(param1:int, param2:int) : uint
      {
         return (1 << param2 - param1 + 1) - 1 << param1 - 1;
      }
   }
}
