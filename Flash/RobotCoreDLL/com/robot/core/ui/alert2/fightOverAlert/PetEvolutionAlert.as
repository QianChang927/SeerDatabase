package com.robot.core.ui.alert2.fightOverAlert
{
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert2.BaseFightOverAlert;
   import com.robot.core.ui.alert2.IFightOverAlert;
   
   public class PetEvolutionAlert extends BaseFightOverAlert implements IFightOverAlert
   {
       
      
      private var str:String;
      
      public function PetEvolutionAlert()
      {
         super();
      }
      
      override public function setup(param1:Object = null) : void
      {
         this.str = String(param1);
      }
      
      override public function show() : void
      {
         Alarm.show(this.str,close);
      }
   }
}
