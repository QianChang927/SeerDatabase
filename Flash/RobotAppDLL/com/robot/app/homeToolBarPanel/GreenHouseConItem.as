package com.robot.app.homeToolBarPanel
{
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.UIManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GreenHouseConItem extends Sprite
   {
       
      
      public var _id:uint;
      
      private var _item:MovieClip;
      
      public function GreenHouseConItem()
      {
         super();
         this._item = UIManager.getMovieClip("ui_Home_seed_con");
         addChild(this._item);
         this._item["bg"].gotoAndStop(1);
         buttonMode = true;
         mouseEnabled = false;
         mouseChildren = false;
         addEventListener(MouseEvent.CLICK,this.onClick);
         addEventListener(MouseEvent.MOUSE_OUT,this.onOut);
         addEventListener(MouseEvent.MOUSE_OVER,this.onOver);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         dispatchEvent(new Event("itemClick"));
      }
      
      private function onOut(param1:MouseEvent) : void
      {
         this._item["bg"].gotoAndStop(1);
      }
      
      private function onOver(param1:MouseEvent) : void
      {
         this._item["bg"].gotoAndStop(2);
      }
      
      public function setInfo(param1:uint, param2:uint) : void
      {
         var id:uint = param1;
         var num:uint = param2;
         mouseEnabled = false;
         mouseChildren = false;
         this._item["bg"].gotoAndStop(1);
         this._item["txt"].text = "";
         if(this._item["con"].numChildren > 0)
         {
            this._item["con"].removeChildAt(0);
         }
         if(id == 0 || num == 0)
         {
            return;
         }
         this._id = id;
         ResourceManager.getResource(ItemXMLInfo.getIconURL(id),function(param1:DisplayObject):void
         {
            var _loc2_:MovieClip = null;
            if(param1)
            {
               _loc2_ = param1 as MovieClip;
               if(_loc2_.width > _loc2_.height)
               {
                  _loc2_.scaleX = _loc2_.scaleY = 50 / _loc2_.width;
               }
               else
               {
                  _loc2_.scaleX = _loc2_.scaleY = 50 / _loc2_.height;
               }
               _item["con"].addChild(_loc2_);
               _item["txt"].text = num.toString();
               mouseEnabled = true;
               mouseChildren = true;
               ToolTipManager.add(_item,ItemXMLInfo.getName(id));
            }
         },"item");
      }
      
      public function destroy() : void
      {
         removeEventListener(MouseEvent.CLICK,this.onClick);
         removeEventListener(MouseEvent.MOUSE_OUT,this.onOut);
         removeEventListener(MouseEvent.MOUSE_OVER,this.onOver);
         ToolTipManager.remove(this._item);
         DisplayUtil.removeForParent(this);
         this._item = null;
      }
   }
}
