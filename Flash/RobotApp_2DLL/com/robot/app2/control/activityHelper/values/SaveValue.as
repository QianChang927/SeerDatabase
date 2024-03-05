package com.robot.app2.control.activityHelper.values
{
   import com.robot.app2.component.ValueUpdateWithPromiseComponent;
   import com.robot.app2.control.activityHelper.IValue;
   
   public class SaveValue implements IValue
   {
       
      
      protected var _data;
      
      public function SaveValue(param1:ValueUpdateWithPromiseComponent, param2:*)
      {
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         super();
         this._data = param2;
         if(this._data["value"] is Array)
         {
            _loc4_ = 1;
            while(_loc4_ <= this._data["value"].length)
            {
               if(this._data["value"][_loc4_ - 1] is String && this._data["value"][_loc4_ - 1].match(/[^\d]+/) == null)
               {
                  this._data["value"][_loc4_ - 1] = int(this._data["value"][_loc4_ - 1]);
               }
               _loc4_++;
            }
         }
         else if(this._data["value"] is String && this._data["value"].match(/[^\d]+/) == null)
         {
            this._data["value"] = int(this._data["value"]);
         }
      }
      
      public function getValue() : *
      {
         return this._data["value"];
      }
   }
}
