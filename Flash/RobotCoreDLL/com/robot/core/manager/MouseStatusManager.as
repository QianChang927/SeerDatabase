package com.robot.core.manager
{
   import flash.display.DisplayObject;
   import flash.display.Stage;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.ui.Mouse;
   
   public class MouseStatusManager
   {
      
      private static var stg:Stage;
      
      private static var mosCikFun:Function;
      
      private static var mosMovFun:Function;
       
      
      public function MouseStatusManager()
      {
         super();
      }
      
      public static function setMosStatus(param1:DisplayObject, param2:Function = null, param3:Function = null, param4:Boolean = false) : void
      {
         stg = MainManager.getStage();
         mosCikFun = param2;
         mosMovFun = param3;
         if(!param4)
         {
            Mouse.hide();
         }
         if(param1)
         {
            param1.addEventListener(Event.ENTER_FRAME,onEntFrame);
         }
      }
      
      private static function onEntFrame(param1:Event) : void
      {
         if(mosCikFun != null)
         {
            if(!stg.hasEventListener(MouseEvent.CLICK))
            {
               stg.addEventListener(MouseEvent.CLICK,onMosClick);
            }
         }
         if(mosMovFun != null)
         {
            if(!stg.hasEventListener(MouseEvent.MOUSE_MOVE))
            {
               stg.addEventListener(MouseEvent.MOUSE_MOVE,onMosMove);
            }
         }
         var _loc2_:DisplayObject = param1.currentTarget as DisplayObject;
         if(_loc2_)
         {
            _loc2_.x = stg.mouseX;
            _loc2_.y = stg.mouseY;
         }
      }
      
      private static function onMosClick(param1:MouseEvent) : void
      {
         Mouse.show();
         if(stg)
         {
            stg.removeEventListener(MouseEvent.CLICK,onMosClick);
         }
         mosCikFun();
      }
      
      private static function onMosMove(param1:MouseEvent) : void
      {
         Mouse.show();
         if(stg)
         {
            stg.removeEventListener(MouseEvent.CLICK,onMosMove);
         }
         mosMovFun();
      }
   }
}
