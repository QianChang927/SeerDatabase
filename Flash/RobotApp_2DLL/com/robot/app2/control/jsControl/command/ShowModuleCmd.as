package com.robot.app2.control.jsControl.command
{
   import com.robot.core.manager.ModuleManager;
   
   public class ShowModuleCmd extends BaseCommand
   {
       
      
      public function ShowModuleCmd(param1:* = null)
      {
         super(param1);
      }
      
      override public function excute() : void
      {
         ModuleManager.showModule(args);
      }
   }
}
