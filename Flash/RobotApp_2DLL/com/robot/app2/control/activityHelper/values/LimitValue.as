package com.robot.app2.control.activityHelper.values
{
   import com.robot.app2.component.ValueUpdateWithPromiseComponent;
   import com.robot.core.manager.MainManager;
   
   public class LimitValue extends BaseValue
   {
       
      
      public function LimitValue(param1:ValueUpdateWithPromiseComponent, param2:*)
      {
         super(param1,param2);
      }
      
      override public function getValue() : *
      {
         var _loc1_:int = _valueUpCom.getValueById(valueId);
         if(Boolean(_data["limitVip"]) && Boolean(MainManager.actorInfo.isVip))
         {
            return _data["limitVip"] - _loc1_;
         }
         return _data["limit"] - _loc1_;
      }
   }
}
