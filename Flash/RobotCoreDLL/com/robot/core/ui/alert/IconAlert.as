package com.robot.core.ui.alert
{
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.UIManager;
   import flash.display.DisplayObject;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.text.TextFormatAlign;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class IconAlert
   {
       
      
      public function IconAlert()
      {
         super();
      }
      
      public static function show(param1:String, param2:uint, param3:Function = null, param4:Function = null, param5:Boolean = true) : Sprite
      {
         var txt:TextField;
         var sprite:Sprite = null;
         var icon:Sprite = null;
         var applyBtn:SimpleButton = null;
         var cancelBtn:SimpleButton = null;
         var apply:Function = null;
         var cancel:Function = null;
         var onLoadIcon:Function = null;
         var str:String = param1;
         var itemID:uint = param2;
         var applyFun:Function = param3;
         var cancelFun:Function = param4;
         var showCancel:Boolean = param5;
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
            EventManager.dispatchEvent(new DynamicEvent(RobotEvent.CLOSE_ICON_ALERT,itemID));
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
            EventManager.dispatchEvent(new DynamicEvent(RobotEvent.CLOSE_ICON_ALERT,itemID));
         };
         onLoadIcon = function(param1:DisplayObject):void
         {
            param1.x = param1.width / 2;
            icon.addChild(param1);
         };
         sprite = UIManager.getSprite("AlertMC");
         var bgmc:Sprite = sprite["bgMc"];
         DisplayUtil.removeForParent(sprite["tag"]);
         bgmc.addEventListener(MouseEvent.MOUSE_DOWN,function():void
         {
            sprite.startDrag();
         });
         bgmc.addEventListener(MouseEvent.MOUSE_UP,function():void
         {
            sprite.stopDrag();
         });
         icon = new Sprite();
         icon.mouseChildren = icon.mouseEnabled = false;
         sprite.addChild(icon);
         DisplayUtil.align(icon,new Rectangle(40,60,265 - 48,90),AlignType.TOP_CENTER);
         LevelManager.topLevel.addChild(sprite);
         DisplayUtil.align(sprite,null,AlignType.MIDDLE_CENTER);
         LevelManager.closeMouseEvent();
         txt = sprite["txt"];
         txt.autoSize = TextFormatAlign.CENTER;
         txt.width = 265;
         txt.htmlText = str;
         DisplayUtil.align(txt,new Rectangle(40,60,265,90),AlignType.BOTTOM_CENTER);
         applyBtn = sprite["applyBtn"];
         cancelBtn = sprite["cancelBtn"];
         applyBtn.addEventListener(MouseEvent.CLICK,apply);
         cancelBtn.addEventListener(MouseEvent.CLICK,cancel);
         if(!showCancel)
         {
            cancelBtn.visible = false;
            applyBtn.x += 75;
         }
         ResourceManager.getResource(ItemXMLInfo.getIconURL(itemID),onLoadIcon);
         return sprite;
      }
   }
}
