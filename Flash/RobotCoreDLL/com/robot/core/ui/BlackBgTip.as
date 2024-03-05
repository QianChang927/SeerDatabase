package com.robot.core.ui
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import flash.display.Bitmap;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.text.TextFormat;
   import org.taomee.utils.DisplayUtil;
   
   public class BlackBgTip
   {
      
      private static const GAP:Number = 5;
      
      private static var tipMC:Sprite;
      
      private static var bgMC:Sprite;
      
      private static var iconPanel:Sprite;
      
      private static var iconTxt:TextField;
       
      
      public function BlackBgTip()
      {
         super();
      }
      
      public static function show(param1:String, param2:DisplayObject = null, param3:DisplayObjectContainer = null, param4:Number = 100) : void
      {
         var _loc7_:Number = NaN;
         var _loc8_:Bitmap = null;
         if(!tipMC)
         {
            tipMC = new Sprite();
         }
         if(!iconPanel)
         {
            iconPanel = new Sprite();
         }
         if(!iconTxt)
         {
            iconTxt = new TextField();
         }
         if(!bgMC)
         {
            bgMC = createBg();
         }
         var _loc5_:TextFormat;
         (_loc5_ = new TextFormat()).leading = 3;
         _loc5_.size = 12;
         iconTxt.autoSize = TextFieldAutoSize.LEFT;
         iconTxt.wordWrap = true;
         iconTxt.textColor = 16777215;
         iconTxt.defaultTextFormat = _loc5_;
         if(param2)
         {
            DisplayUtil.removeAllChild(iconPanel);
            _loc8_ = DisplayUtil.copyDisplayAsBmp(param2);
            iconPanel.addChild(_loc8_);
            iconTxt.width = param4 - iconPanel.width;
            iconTxt.x = iconPanel.x + GAP;
            tipMC.addChild(iconPanel);
         }
         else
         {
            iconTxt.width = param4;
         }
         iconTxt.htmlText = param1;
         tipMC.addChild(iconTxt);
         var _loc6_:Number = iconPanel.width + GAP + iconTxt.width;
         if(iconPanel.height > iconTxt.height)
         {
            _loc7_ = iconPanel.height + 5;
         }
         else
         {
            _loc7_ = iconTxt.height;
         }
         bgMC.width = _loc6_;
         bgMC.height = _loc7_;
         tipMC.addChildAt(bgMC,0);
         updatePos();
         if(param3)
         {
            param3.addChild(tipMC);
         }
         else
         {
            LevelManager.appLevel.addChild(tipMC);
         }
         tipMC.addEventListener(Event.ENTER_FRAME,enterFrameHandler);
      }
      
      public static function hide() : void
      {
         if(tipMC)
         {
            tipMC.removeEventListener(Event.ENTER_FRAME,enterFrameHandler);
            DisplayUtil.removeForParent(tipMC);
         }
      }
      
      private static function updatePos() : void
      {
         if(MainManager.getStage().mouseX + tipMC.width + 20 >= MainManager.getStageWidth())
         {
            tipMC.x = MainManager.getStageWidth() - tipMC.width - 10;
         }
         else
         {
            tipMC.x = MainManager.getStage().mouseX + 10;
         }
         if(MainManager.getStage().mouseY + tipMC.height + 20 >= MainManager.getStageHeight())
         {
            tipMC.y = MainManager.getStageHeight() - tipMC.height - 10;
         }
         else
         {
            tipMC.y = MainManager.getStage().mouseY + 10;
         }
      }
      
      private static function enterFrameHandler(param1:Event) : void
      {
         updatePos();
      }
      
      private static function createBg() : Sprite
      {
         var _loc1_:Sprite = new Sprite();
         _loc1_.graphics.clear();
         _loc1_.graphics.beginFill(0,0.8);
         _loc1_.graphics.drawRoundRect(-5,0,100,50,10,10);
         _loc1_.graphics.endFill();
         return _loc1_;
      }
   }
}
