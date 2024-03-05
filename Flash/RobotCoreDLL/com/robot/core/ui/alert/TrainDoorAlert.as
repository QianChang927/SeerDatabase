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
   
   public class TrainDoorAlert
   {
      
      private static var title:String;
      
      private static var apply:Function;
      
      private static var cancel:Function;
      
      private static var ui:MovieClip;
       
      
      public function TrainDoorAlert()
      {
         super();
      }
      
      public static function show(param1:String, param2:Function, param3:Function) : void
      {
         title = param1;
         apply = param2;
         cancel = param3;
         ResourceManager.getResource(ClientConfig.getActiveUrl("trainDoorAlert"),onGetMC,"TrainDoorAlert_UI");
      }
      
      private static function onGetMC(param1:DisplayObject) : void
      {
         ui = param1 as MovieClip;
         ui["txt"].text = title;
         LevelManager.closeMouseEvent();
         DisplayUtil.align(ui,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(ui);
         ui["applyBtn"].addEventListener(MouseEvent.CLICK,onClickApply);
         ui["cancelBtn"].addEventListener(MouseEvent.CLICK,onClickCancel);
      }
      
      private static function onClickApply(param1:Event) : void
      {
         if(apply != null)
         {
            apply();
         }
         destroy();
      }
      
      private static function onClickCancel(param1:Event) : void
      {
         if(cancel != null)
         {
            cancel();
         }
         destroy();
      }
      
      private static function destroy() : void
      {
         LevelManager.openMouseEvent();
         ui["applyBtn"].removeEventListener(MouseEvent.CLICK,onClickApply);
         ui["cancelBtn"].removeEventListener(MouseEvent.CLICK,onClickCancel);
         ui.parent.removeChild(ui);
         apply = null;
         cancel = null;
         ui = null;
      }
   }
}
