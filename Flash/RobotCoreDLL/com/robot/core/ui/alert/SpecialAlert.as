package com.robot.core.ui.alert
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class SpecialAlert
   {
      
      private static var title:String;
      
      private static var otherGame:Function;
      
      private static var ok:Function;
      
      private static var frame:uint;
      
      private static var ui:MovieClip;
       
      
      public function SpecialAlert()
      {
         super();
      }
      
      public static function show(param1:uint, param2:String, param3:Function, param4:Function) : void
      {
         title = param2;
         otherGame = param3;
         ok = param4;
         frame = param1;
         ResourceManager.getResource(ClientConfig.getActiveUrl("specialAlert"),onGetMC,"SpecialAlert_UI");
      }
      
      private static function onGetMC(param1:DisplayObject) : void
      {
         ui = param1 as MovieClip;
         ui["txt"].text = title;
         LevelManager.closeMouseEvent();
         DisplayUtil.align(ui,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(ui);
         ui["icon"].gotoAndStop(frame);
         ui["btn_1"].addEventListener(MouseEvent.CLICK,onClickOther);
         ui["btn_2"].addEventListener(MouseEvent.CLICK,onClickOK);
      }
      
      private static function onClickOther(param1:Event) : void
      {
         if(otherGame != null)
         {
            otherGame();
         }
         destroy();
      }
      
      private static function onClickOK(param1:Event) : void
      {
         if(ok != null)
         {
            ok();
         }
         destroy();
      }
      
      private static function destroy() : void
      {
         LevelManager.openMouseEvent();
         ui["btn_1"].removeEventListener(MouseEvent.CLICK,onClickOther);
         ui["btn_2"].removeEventListener(MouseEvent.CLICK,onClickOK);
         ui.parent.removeChild(ui);
         otherGame = null;
         ok = null;
         ui = null;
      }
   }
}
