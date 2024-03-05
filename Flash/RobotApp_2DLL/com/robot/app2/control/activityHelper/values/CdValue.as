package com.robot.app2.control.activityHelper.values
{
   import com.robot.app2.component.ValueUpdateWithPromiseComponent;
   import com.robot.core.manager.SystemTimerManager;
   
   public class CdValue extends BaseValue
   {
       
      
      public function CdValue(param1:ValueUpdateWithPromiseComponent, param2:*)
      {
         super(param1,param2);
      }
      
      override public function getValue() : *
      {
         var _loc1_:int = 0;
         var _loc2_:int = _valueUpCom.getValueById(valueId);
         var _loc3_:int = int(_data["cd"]);
         _loc1_ = _loc2_ + _loc3_ - SystemTimerManager.time;
         return _loc1_ > 0 ? _loc1_ : 0;
      }
   }
}
