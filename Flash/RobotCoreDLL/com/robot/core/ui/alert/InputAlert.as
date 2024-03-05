package com.robot.core.ui.alert
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.UIManager;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.text.TextFieldType;
   import flash.text.TextFormatAlign;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class InputAlert
   {
      
      public static var inputContent:String = "";
       
      
      public function InputAlert()
      {
         super();
      }
      
      public static function show(param1:String, param2:Function = null, param3:Function = null, param4:Boolean = false) : Sprite
      {
         var bgmc:Sprite;
         var sprite:Sprite = null;
         var txt:TextField = null;
         var inputTxt:TextField = null;
         var applyBtn:SimpleButton = null;
         var cancelBtn:SimpleButton = null;
         var apply:Function = null;
         var cancel:Function = null;
         var desTxt:String = param1;
         var applyFun:Function = param2;
         var cancelFun:Function = param3;
         var isPsw:Boolean = param4;
         apply = function(param1:MouseEvent):void
         {
            inputContent = inputTxt.text;
            LevelManager.openMouseEvent();
            applyBtn.removeEventListener(MouseEvent.CLICK,apply);
            cancelBtn.removeEventListener(MouseEvent.CLICK,cancel);
            DisplayUtil.removeForParent(sprite);
            if(inputContent == "")
            {
               Alarm.show("输入的内容不能为空噢!");
               return;
            }
            if(applyFun != null)
            {
               applyFun();
            }
            inputContent = "";
         };
         cancel = function(param1:MouseEvent):void
         {
            inputContent = inputTxt.text;
            LevelManager.openMouseEvent();
            applyBtn.removeEventListener(MouseEvent.CLICK,apply);
            cancelBtn.removeEventListener(MouseEvent.CLICK,cancel);
            DisplayUtil.removeForParent(sprite);
            if(cancelFun != null)
            {
               cancelFun();
            }
            inputContent = "";
         };
         sprite = UIManager.getSprite("InputAlertMC");
         LevelManager.stage.focus = sprite["inputTxt"];
         bgmc = sprite["bgMc"];
         bgmc.addEventListener(MouseEvent.MOUSE_DOWN,function():void
         {
            sprite.startDrag();
            LevelManager.stage.focus = sprite["inputTxt"];
         });
         bgmc.addEventListener(MouseEvent.MOUSE_UP,function():void
         {
            sprite.stopDrag();
         });
         LevelManager.topLevel.addChild(sprite);
         DisplayUtil.align(sprite,null,AlignType.MIDDLE_CENTER);
         LevelManager.closeMouseEvent();
         txt = sprite["txt"];
         txt.autoSize = TextFormatAlign.CENTER;
         txt.width = 265;
         txt.htmlText = desTxt;
         txt.mouseEnabled = false;
         DisplayUtil.align(txt,new Rectangle(40,60,265,90),AlignType.MIDDLE_CENTER);
         inputTxt = sprite["inputTxt"];
         inputTxt.autoSize = TextFormatAlign.CENTER;
         inputTxt.type = TextFieldType.INPUT;
         inputTxt.displayAsPassword = isPsw;
         inputTxt.maxChars = 25;
         inputTxt.multiline = false;
         applyBtn = sprite["applyBtn"];
         cancelBtn = sprite["cancelBtn"];
         applyBtn.addEventListener(MouseEvent.CLICK,apply);
         cancelBtn.addEventListener(MouseEvent.CLICK,cancel);
         return sprite;
      }
   }
}
