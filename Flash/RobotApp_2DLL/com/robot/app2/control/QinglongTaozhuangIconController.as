package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class QinglongTaozhuangIconController
   {
      
      private static var _icon:MovieClip;
       
      
      public function QinglongTaozhuangIconController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         _icon = param1;
         _icon.addEventListener(MouseEvent.CLICK,onClickIcon);
         ToolTipManager.add(_icon,"龙族秘史！青龙套装签到送！");
      }
      
      public static function onClickIcon(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DragonSecretHistoryDragonSuitSignSentPanel"));
      }
   }
}
