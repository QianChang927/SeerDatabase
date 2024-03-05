package com.robot.core.ui.alert
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   
   public class CustomAlarm
   {
       
      
      public function CustomAlarm()
      {
         super();
      }
      
      public static function show(param1:Sprite, param2:Function = null, param3:Array = null) : void
      {
         var removeEvent:Function;
         var onClickDialog:Function = null;
         var dialog:Sprite = param1;
         var closeFun:Function = param2;
         var callBacks:Array = param3;
         if(dialog)
         {
            onClickDialog = function(param1:MouseEvent):void
            {
               var _loc3_:int = 0;
               var _loc2_:String = String(param1.target.name);
               if(_loc2_.indexOf("btnClose") == 0)
               {
                  if(dialog.parent)
                  {
                     dialog.parent.removeChild(dialog);
                     if(closeFun != null)
                     {
                        closeFun();
                     }
                     removeEvent();
                  }
               }
               else if(_loc2_.indexOf("btn_") == 0)
               {
                  _loc3_ = int(_loc2_.split("_")[1]);
                  dialog.parent.removeChild(dialog);
                  if(Boolean(callBacks) && _loc3_ < callBacks.length)
                  {
                     if(callBacks[_loc3_] != null)
                     {
                        callBacks[_loc3_]();
                     }
                  }
                  removeEvent();
               }
            };
            removeEvent = function():void
            {
               dialog.removeEventListener(MouseEvent.CLICK,onClickDialog);
               openMouseEnabled();
            };
            LevelManager.fightLevel.addChild(dialog);
            centerAlign(dialog,LevelManager.fightLevel,new Point(960 * 0.5,560 * 0.5));
            closeMouseEnabled();
            dialog.addEventListener(MouseEvent.CLICK,onClickDialog);
         }
      }
      
      private static function centerAlign(param1:DisplayObject, param2:Sprite, param3:Point) : void
      {
         var _loc6_:Number = NaN;
         var _loc4_:Rectangle;
         var _loc5_:Number = (_loc4_ = CommonUI.getVisibility(param1,param2)).x - param1.x + param1.width / 2;
         _loc6_ = _loc4_.y - param1.y + param1.height / 2;
         param1.x = param3.x - _loc5_;
         param1.y = param3.y - _loc6_;
      }
      
      private static function openMouseEnabled() : void
      {
         LevelManager.openMouseEvent();
         LevelManager.appLevel.mouseEnabled = true;
         LevelManager.appLevel.mouseChildren = true;
      }
      
      private static function closeMouseEnabled() : void
      {
         LevelManager.closeMouseEvent();
         LevelManager.appLevel.mouseEnabled = false;
         LevelManager.appLevel.mouseChildren = false;
      }
   }
}
