package com.robot.app2.control.jsControl.command
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   
   public class HideModuleCmd extends BaseCommand
   {
       
      
      public function HideModuleCmd(param1:*)
      {
         super(param1);
      }
      
      override public function excute() : void
      {
         var _loc1_:String = this.args;
         ModuleManager.hideModule(ClientConfig.getModule(_loc1_));
      }
   }
}
