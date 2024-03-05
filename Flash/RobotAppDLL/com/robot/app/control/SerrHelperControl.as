package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class SerrHelperControl
   {
      
      private static var _icon:MovieClip;
       
      
      public function SerrHelperControl()
      {
         super();
      }
      
      public static function setUp() : void
      {
         _icon = UIManager.getMovieClip("seer_helper");
         ToolTipManager.add(_icon,"赛尔助手");
         TaskIconManager.addIcon(_icon,TaskIconManager.RIGHT);
         _icon.addEventListener(MouseEvent.CLICK,function(param1:*):void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("seerhelper/SeerHelperPanel"));
         });
      }
   }
}
