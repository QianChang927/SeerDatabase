package com.robot.core.ui.alert
{
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import flash.display.DisplayObjectContainer;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TextEvent;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.text.TextFormatAlign;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class Alarm
   {
       
      
      public function Alarm()
      {
         super();
      }
      
      public static function show(param1:String, param2:Function = null, param3:Boolean = false, param4:Boolean = false, param5:Boolean = false, param6:DisplayObjectContainer = null, param7:Boolean = false, param8:Point = null) : Sprite
      {
         var bgmc:Sprite;
         var txt:TextField;
         var sprite:Sprite = null;
         var applyBtn:SimpleButton = null;
         var JSController:* = undefined;
         var onJSEvent:Function = null;
         var apply:Function = null;
         var str:String = param1;
         var applyFun:Function = param2;
         var isColor:Boolean = param3;
         var isMouse:Boolean = param4;
         var isNONO:Boolean = param5;
         var parent:DisplayObjectContainer = param6;
         var isAddTop:Boolean = param7;
         var point:Point = param8;
         onJSEvent = function(param1:*):void
         {
            if(param1.command == "ok_btn")
            {
               apply();
            }
         };
         apply = function(param1:* = null):void
         {
            openMouseEnabled();
            if(!isMouse)
            {
               LevelManager.openMouseEvent();
            }
            applyBtn.removeEventListener(MouseEvent.CLICK,apply);
            JSController.instance.removeEventListener("JS-EVENT",onJSEvent);
            DisplayUtil.removeForParent(sprite);
            if(applyFun != null)
            {
               applyFun();
            }
            EventManager.dispatchEvent(new DynamicEvent("alarmClick",str));
            EventManager.dispatchEvent(new Event(Event.CLOSE));
         };
         if(str.indexOf("众人之力") != -1)
         {
            return null;
         }
         closeMouseEnabled();
         if(isColor)
         {
            sprite = UIManager.getSprite("AlarmMc_Orange");
         }
         else if(isNONO)
         {
            sprite = UIManager.getSprite("AlarmNONOMC");
         }
         else
         {
            sprite = UIManager.getSprite("AlarmMC");
         }
         bgmc = sprite["bgMc"];
         bgmc.addEventListener(MouseEvent.MOUSE_DOWN,function():void
         {
            if(NewSeerTaskController.isNewSeer)
            {
               return;
            }
            sprite.startDrag();
         });
         bgmc.addEventListener(MouseEvent.MOUSE_UP,function():void
         {
            sprite.stopDrag();
         });
         if(!isMouse)
         {
            LevelManager.closeMouseEvent();
         }
         if(parent == null)
         {
            if(isAddTop)
            {
               MainManager.getStage().addChildAt(sprite,MainManager.getStage().numChildren - 1);
            }
            MainManager.getStage().addChild(sprite);
         }
         else
         {
            parent.addChild(sprite);
         }
         if(point == null)
         {
            DisplayUtil.align(sprite,null,AlignType.MIDDLE_CENTER);
         }
         else
         {
            sprite.x = point.x;
            sprite.y = point.y;
         }
         txt = sprite["txt"];
         txt.autoSize = TextFormatAlign.CENTER;
         txt.width = 265;
         txt.htmlText = str;
         txt.addEventListener(TextEvent.LINK,function(param1:TextEvent):void
         {
            param1.stopImmediatePropagation();
            sprite.dispatchEvent(param1);
         });
         DisplayUtil.align(txt,new Rectangle(40,60,265,90),AlignType.MIDDLE_CENTER);
         applyBtn = sprite["applyBtn"];
         applyBtn.addEventListener(MouseEvent.CLICK,apply);
         JSController = getDefinitionByName("com.robot.app2.control.jsControl.JSController");
         JSController.instance.addEventListener("JS-EVENT",onJSEvent);
         return sprite;
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
