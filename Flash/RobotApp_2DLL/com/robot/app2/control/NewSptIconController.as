package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class NewSptIconController
   {
      
      private static var _icon:MovieClip;
       
      
      public function NewSptIconController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         _icon = param1;
         _icon.buttonMode = true;
         _icon.addEventListener(MouseEvent.ROLL_OVER,onRollOver);
         _icon.addEventListener(MouseEvent.ROLL_OUT,onRollOut);
      }
      
      private static function onRollOver(param1:MouseEvent) : void
      {
         _icon.gotoAndStop(2);
         ToolTipManager.add(_icon["icon_0"],"勇者之路");
         ToolTipManager.add(_icon["icon_1"],"勇者历险");
         _icon["icon_0"].addEventListener(MouseEvent.CLICK,onClick);
         _icon["icon_1"].addEventListener(MouseEvent.CLICK,onClick);
      }
      
      private static function onRollOut(param1:MouseEvent) : void
      {
         _icon.gotoAndStop(1);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         _loc2_.removeEventListener(MouseEvent.CLICK,onClick);
         _icon.gotoAndStop(1);
         if(_loc2_.name == "icon_0")
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NewSptMainPanel"),"正在打开...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SptChallengeChoicePanel"),"正在打开...");
         }
      }
      
      public static function onClickNull(param1:MovieClip) : void
      {
      }
      
      public static function destory() : void
      {
         _icon.removeEventListener(MouseEvent.ROLL_OVER,onRollOver);
         _icon.removeEventListener(MouseEvent.ROLL_OUT,onRollOut);
      }
   }
}
