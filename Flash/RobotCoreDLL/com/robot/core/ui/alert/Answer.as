package com.robot.core.ui.alert
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.UIManager;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.events.TextEvent;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.text.TextFormatAlign;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class Answer
   {
       
      
      public function Answer()
      {
         super();
      }
      
      public static function show(param1:String, param2:Function = null, param3:Function = null) : Sprite
      {
         var txt:TextField;
         var sprite:Sprite = null;
         var applyBtn:SimpleButton = null;
         var cancelBtn:SimpleButton = null;
         var apply:Function = null;
         var cancel:Function = null;
         var str:String = param1;
         var applyFun:Function = param2;
         var cancelFun:Function = param3;
         apply = function(param1:MouseEvent):void
         {
            LevelManager.openMouseEvent();
            if(applyFun != null)
            {
               applyFun();
            }
            applyBtn.removeEventListener(MouseEvent.CLICK,apply);
            cancelBtn.removeEventListener(MouseEvent.CLICK,cancel);
            DisplayUtil.removeForParent(sprite);
         };
         cancel = function(param1:MouseEvent):void
         {
            LevelManager.openMouseEvent();
            if(cancelFun != null)
            {
               cancelFun();
            }
            applyBtn.removeEventListener(MouseEvent.CLICK,apply);
            cancelBtn.removeEventListener(MouseEvent.CLICK,cancel);
            DisplayUtil.removeForParent(sprite);
         };
         sprite = UIManager.getSprite("AnswerMC");
         var bgmc:Sprite = sprite["bgMc"];
         bgmc.addEventListener(MouseEvent.MOUSE_DOWN,function():void
         {
            sprite.startDrag();
         });
         bgmc.addEventListener(MouseEvent.MOUSE_UP,function():void
         {
            sprite.stopDrag();
         });
         LevelManager.appLevel.addChild(sprite);
         DisplayUtil.align(sprite,null,AlignType.MIDDLE_CENTER);
         LevelManager.closeMouseEvent();
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
         cancelBtn = sprite["cancelBtn"];
         applyBtn.addEventListener(MouseEvent.CLICK,apply);
         cancelBtn.addEventListener(MouseEvent.CLICK,cancel);
         return sprite;
      }
   }
}
