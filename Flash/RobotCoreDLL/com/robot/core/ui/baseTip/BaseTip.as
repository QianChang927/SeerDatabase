package com.robot.core.ui.baseTip
{
   import com.robot.core.manager.LevelManager;
   import flash.display.Shape;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.text.TextFormat;
   import org.taomee.utils.DisplayUtil;
   
   public class BaseTip
   {
      
      private static var con:Sprite;
      
      private static var bg:Shape;
      
      private static var txt:TextField;
       
      
      public function BaseTip()
      {
         super();
      }
      
      public static function show(param1:String = "", param2:uint = 0, param3:Number = 0.8) : void
      {
         con = new Sprite();
         txt = new TextField();
         txt.x = 5;
         txt.y = 5;
         txt.text = param1;
         txt.wordWrap = true;
         txt.autoSize = TextFieldAutoSize.LEFT;
         txt.selectable = false;
         var _loc4_:TextFormat = new TextFormat("宋体",14,16777215);
         txt.setTextFormat(_loc4_);
         bg = new Shape();
         bg.graphics.beginFill(param2,param3);
         bg.graphics.drawRoundRect(0,0,txt.width + 10,txt.height + 10,10);
         bg.graphics.endFill();
         bg.alpha = 0.85;
         con.addChild(bg);
         con.addChild(txt);
         setPosition();
         con.addEventListener(Event.ENTER_FRAME,onEnterFrame);
         con.mouseEnabled = false;
         con.mouseChildren = false;
         LevelManager.tipLevel.addChild(con);
      }
      
      public static function destroy() : void
      {
         if(con != null)
         {
            con.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
         }
         txt = null;
         bg = null;
         DisplayUtil.removeForParent(con);
         con = null;
      }
      
      private static function onEnterFrame(param1:Event) : void
      {
         setPosition();
      }
      
      private static function setPosition() : void
      {
         if(con == null)
         {
            return;
         }
         if(LevelManager.stage.mouseX + con.width + 20 >= LevelManager.stage.width)
         {
            con.x = LevelManager.stage.width - con.width - 10;
         }
         else
         {
            con.x = LevelManager.stage.mouseX + 10;
         }
         if(LevelManager.stage.mouseY + con.height + 20 >= LevelManager.stage.height)
         {
            con.y = LevelManager.stage.height - con.height - 10;
         }
         else
         {
            con.y = LevelManager.stage.mouseY - con.height / 2;
         }
         if(con.y < 0)
         {
            con.y = 0;
         }
      }
   }
}
