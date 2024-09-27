package com.robot.module.app.MainLineAdventure
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.AchieveXMLInfo;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.userItem.CountermarkInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.ui.itemTip.CountermarkItemGrid;
   import com.robot.core.ui.itemTip.CountermarkItemTip;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.text.TextFormat;
   import flash.ui.Mouse;
   import flash.ui.MouseCursor;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MLGoodIcon extends Sprite
   {
      private var _id:int;
      
      private var _width:Number;
      
      private var _offset:Array;
      
      private var _addTipType:int;
      
      private var _isButtonMouse:Boolean;
      
      private var counter:CountermarkItemGrid;
      
      private var tipMc:MovieClip;
      
      private const edge:int = 5;
      
      private var specifiedParent:MovieClip = null;
      
      private var showCountId:int;
      
      private var showTO:int;
      
      public function MLGoodIcon(id:int, width:Number = 40, offset:Array = null, goodType:int = 1, addTipType:int = 1, isButtonMouse:Boolean = false, args:Object = null)
      {
         var icon:DisplayObject = null;
         var url:String = null;
         var achieveInfo:XML = null;
         var achieveIcon:int = 0;
         super();
         this._id = id;
         this._width = width;
         this._isButtonMouse = isButtonMouse;
         this._addTipType = addTipType;
         if(offset == null)
         {
            this._offset = [0,0];
         }
         else
         {
            this._offset = offset;
         }
         switch(goodType)
         {
            case 1:
               url = ItemXMLInfo.getIconURL(this._id);
               icon = KTool.getIcon(url,width,new Point(this._offset[0],this._offset[1]));
               addChild(icon);
               if(addTipType > 0)
               {
                  this.addTip(ItemXMLInfo.getName(this._id));
               }
               break;
            case 222:
               ResourceManager.getResource(ClientConfig.getResPath("item/doodle/icon/" + id + ".swf"),this.onLoaded);
               break;
            case 2:
               ResourceManager.getResource(CountermarkXMLInfo.getIconURL(id),function(icon:MovieClip):void
               {
                  addChild(icon);
                  icon.x = 2;
                  icon.y = 5;
               });
               this._addTipType = 4;
               break;
            case 10:
               achieveInfo = AchieveXMLInfo.getRule(id,args as uint);
               if(achieveInfo == null)
               {
                  return;
               }
               achieveIcon = int(achieveInfo.@proicon);
               ResourceManager.getResource(ClientConfig.getResPath("achieve/icon/" + achieveIcon + ".swf"),function(o:*):void
               {
                  onLoaded(o);
                  o.x = _offset[0] / 2 - 4;
                  o.y = _offset[1] / 2 - 2;
                  o.scaleX *= 0.99;
                  o.scaleY *= 0.99;
                  addTip("称号：" + achieveInfo.@title);
               },"icon");
               break;
            default:
               return;
         }
      }
      
      private function onLoaded(o:DisplayObject) : void
      {
         addChild(o);
         var scaleMult:Number = this._width / o.width;
         o.scaleX *= scaleMult;
         o.scaleY *= scaleMult;
         if(this._offset != null)
         {
            o.x += this._offset[0];
            o.y += this._offset[1];
         }
      }
      
      private function addTip(str:String) : void
      {
         var txt:TextField = null;
         var mytf:TextFormat = null;
         var shape:Shape = null;
         if(this._addTipType == 1 || this._addTipType == 3)
         {
            this.tipMc = new MovieClip();
            txt = new TextField();
            txt.text = str;
            mytf = new TextFormat();
            mytf.size = 14;
            mytf.color = 16777215;
            txt.autoSize = TextFieldAutoSize.LEFT;
            txt.selectable = false;
            if(str.length >= 7)
            {
               txt.wordWrap = true;
               if(txt.width > 120)
               {
                  txt.width = 125;
               }
               mytf.size = 13;
            }
            txt.setTextFormat(mytf);
            this.tipMc.addChild(txt);
            shape = new Shape();
            shape = new Shape();
            shape.graphics.beginFill(0,0.7);
            shape.graphics.drawRect(txt.x - this.edge,txt.y - this.edge,txt.width + 2 * this.edge,txt.height + this.edge * 2);
            shape.graphics.endFill();
            this.tipMc.addChildAt(shape,0);
            this.tipMc.visible = false;
            this.tipMc.mouseEnabled = this.tipMc.mouseChildren = false;
            this.tipMc.x = this._offset[0] - this.tipMc.width / 2 + this._width / 2;
            this.tipMc.y = this._width * 2 - this._offset[1];
         }
         this.addEventListener(MouseEvent.MOUSE_OVER,this.showTip);
         this.addEventListener(MouseEvent.MOUSE_OUT,this.hideTip);
      }
      
      private function removeTipEvent() : void
      {
         if(!this.hasEventListener(MouseEvent.MOUSE_OVER))
         {
            this.removeEventListener(MouseEvent.MOUSE_OVER,this.showTip);
         }
         if(!this.hasEventListener(MouseEvent.MOUSE_OUT))
         {
            this.removeEventListener(MouseEvent.MOUSE_OUT,this.hideTip);
         }
         if(Boolean(this.specifiedParent))
         {
            if(!this.specifiedParent.hasEventListener(MouseEvent.MOUSE_OVER))
            {
               this.specifiedParent.removeEventListener(MouseEvent.MOUSE_OVER,this.showTip);
            }
            if(!this.specifiedParent.hasEventListener(MouseEvent.MOUSE_OUT))
            {
               this.specifiedParent.removeEventListener(MouseEvent.MOUSE_OUT,this.hideTip);
            }
         }
         if(this.hasEventListener(Event.ENTER_FRAME))
         {
         }
         this.removeEventListener(Event.ENTER_FRAME,this.addTip2Top);
      }
      
      private function addTip2Parent() : void
      {
         if(Boolean(this.parent.parent.parent))
         {
            this.tipMc.x = this.parent.parent.x - this.tipMc.width / 2 + this._offset[0];
            this.tipMc.y = this.parent.parent.y + 35;
            this.parent.parent.parent.addChild(this.tipMc);
         }
         else
         {
            this.tipMc.x = this.parent.x;
            this.tipMc.y = this.parent.y + 45;
            this.parent.parent.addChild(this.tipMc);
         }
      }
      
      private function addTip2Top(e:* = null) : void
      {
         if(this.tipMc == null)
         {
            return;
         }
         var p:Point = this.localToGlobal(new Point(0,0));
         LevelManager.appLevel.addChild(this.tipMc);
         this.tipMc.x = p.x - this.tipMc.width / 2 + this._offset[0];
         this.tipMc.y = p.y + 45;
         if(this.hasEventListener(Event.ENTER_FRAME))
         {
         }
         this.addEventListener(Event.ENTER_FRAME,this.addTip2Top);
      }
      
      public function removeTipParent() : void
      {
         DisplayUtil.removeForParent(this.tipMc,false);
      }
      
      public function setParent(p:MovieClip) : void
      {
         this.removeTipEvent();
         this.specifiedParent = p;
         this.specifiedParent.addChild(this);
         this.specifiedParent.addEventListener(MouseEvent.MOUSE_OVER,this.showTip);
         this.specifiedParent.addEventListener(MouseEvent.MOUSE_OUT,this.hideTip);
      }
      
      private function showTip(e:*) : void
      {
         var info:SingleItemInfo = null;
         var markInfo:* = undefined;
         switch(this._addTipType)
         {
            case 1:
               if(this.tipMc.parent == null)
               {
                  this.addTip2Parent();
               }
               this.tipMc.visible = true;
               break;
            case 2:
               info = ItemManager.getCollectionInfo(this._id);
               if(info == null)
               {
                  info = new SingleItemInfo();
                  info.itemID = this._id;
                  info.itemNum = 0;
               }
               ItemInfoTip.show(info,false,MainManager.getStage());
               break;
            case 3:
               this.addTip2Top();
               this.tipMc.visible = true;
               break;
            case 4:
               markInfo = new CountermarkInfo();
               markInfo.adjArray = CountermarkXMLInfo.getBaseAttriValue(this._id);
               markInfo.markID = this._id;
               CountermarkItemTip.showObject({
                  "info":markInfo,
                  "grid":e.target
               });
         }
         if(this._isButtonMouse)
         {
            Mouse.cursor = MouseCursor.BUTTON;
         }
      }
      
      private function hideTip(e:*) : void
      {
         switch(this._addTipType)
         {
            case 1:
               this.tipMc.visible = false;
               break;
            case 2:
               ItemInfoTip.hide();
               break;
            case 3:
               this.tipMc.visible = false;
               break;
            case 4:
               CountermarkItemTip.destroy();
         }
         if(this._isButtonMouse)
         {
            Mouse.cursor = MouseCursor.AUTO;
         }
         if(this.hasEventListener(Event.ENTER_FRAME))
         {
         }
         this.removeEventListener(Event.ENTER_FRAME,this.addTip2Top);
      }
      
      public function destory() : void
      {
         this.removeTipEvent();
         if(Boolean(this.tipMc))
         {
            DisplayUtil.removeForParent(this.tipMc);
         }
         if(Boolean(this.specifiedParent))
         {
            DisplayUtil.removeAllChild(this.specifiedParent);
         }
         if(Boolean(this.counter))
         {
            this.counter.destroy();
         }
      }
   }
}

