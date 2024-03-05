package com.robot.app2.control.jsControl.command
{
   import com.robot.core.manager.MapManager;
   import flash.utils.getDefinitionByName;
   
   public class Command6V6 extends BaseCommand
   {
       
      
      public function Command6V6(param1:* = null)
      {
         super(param1);
      }
      
      override public function excute() : void
      {
         MapManager.changeMapWithCallback(1095,function():void
         {
            var _loc1_:* = getDefinitionByName("com.robot.app2.control.PeakJihad2016Controller");
            _loc1_.on6v6Click();
         });
      }
   }
}
