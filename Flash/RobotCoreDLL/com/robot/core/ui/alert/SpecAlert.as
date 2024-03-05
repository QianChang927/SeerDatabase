package com.robot.core.ui.alert
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.text.TextFormatAlign;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class SpecAlert
   {
       
      
      public function SpecAlert()
      {
         super();
      }
      
      public static function show(param1:String, param2:Function = null, param3:Function = null) : Sprite
      {
         var txt:TextField;
         var sprite:Sprite = null;
         var recoverBtn:SimpleButton = null;
         var beNonoBtn:SimpleButton = null;
         var onRecover:Function = null;
         var onBeNono:Function = null;
         var str:String = param1;
         var applyFun:Function = param2;
         var cancelFun:Function = param3;
         onRecover = function(param1:MouseEvent):void
         {
            LevelManager.openMouseEvent();
            if(applyFun != null)
            {
               applyFun();
            }
            recoverBtn.removeEventListener(MouseEvent.CLICK,onRecover);
            beNonoBtn.removeEventListener(MouseEvent.CLICK,onBeNono);
            DisplayUtil.removeForParent(sprite);
            EventManager.dispatchEvent(new Event(Event.CLOSE));
         };
         onBeNono = function(param1:MouseEvent):void
         {
            var _loc2_:* = getDefinitionByName("com.robot.app.linkManager.LinkToUrlManager");
            _loc2_.linkUrl(_loc2_.LINK_TYPE_4);
            LevelManager.openMouseEvent();
            if(cancelFun != null)
            {
               cancelFun();
            }
            recoverBtn.removeEventListener(MouseEvent.CLICK,onRecover);
            beNonoBtn.removeEventListener(MouseEvent.CLICK,onBeNono);
            DisplayUtil.removeForParent(sprite);
            EventManager.dispatchEvent(new Event(Event.CLOSE));
         };
         sprite = UIManager.getSprite("RecoverMC");
         var bgmc:Sprite = sprite["bgMc"];
         bgmc.addEventListener(MouseEvent.MOUSE_DOWN,function():void
         {
            sprite.startDrag();
         });
         bgmc.addEventListener(MouseEvent.MOUSE_UP,function():void
         {
            sprite.stopDrag();
         });
         MainManager.getStage().addChild(sprite);
         DisplayUtil.align(sprite,null,AlignType.MIDDLE_CENTER);
         LevelManager.closeMouseEvent();
         txt = sprite["txt"];
         txt.autoSize = TextFormatAlign.CENTER;
         txt.width = 265;
         txt.htmlText = str;
         txt.selectable = false;
         DisplayUtil.align(txt,new Rectangle(40,60,265,90),AlignType.MIDDLE_CENTER);
         recoverBtn = sprite["recover"];
         beNonoBtn = sprite["beNono"];
         recoverBtn.addEventListener(MouseEvent.CLICK,onRecover);
         beNonoBtn.addEventListener(MouseEvent.CLICK,onBeNono);
         return sprite;
      }
   }
}
