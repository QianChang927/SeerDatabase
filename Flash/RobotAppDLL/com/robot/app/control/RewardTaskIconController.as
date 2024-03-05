package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class RewardTaskIconController
   {
       
      
      public function RewardTaskIconController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         param1.addEventListener(MouseEvent.CLICK,onClick);
         param1.buttonMode = true;
         param1.gotoAndStop(1);
         ToolTipManager.add(param1,"做悬赏任务领钻石奖励");
      }
      
      protected static function onClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("WantedTaskPanel"));
      }
   }
}
