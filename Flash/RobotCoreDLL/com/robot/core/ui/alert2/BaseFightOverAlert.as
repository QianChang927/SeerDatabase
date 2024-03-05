package com.robot.core.ui.alert2
{
   public class BaseFightOverAlert implements IFightOverAlert
   {
       
      
      public function BaseFightOverAlert()
      {
         super();
      }
      
      public function setup(param1:Object = null) : void
      {
      }
      
      public function show() : void
      {
      }
      
      public function close() : void
      {
         FightOverAlertManager.showNext();
      }
   }
}
