package com.robot.core.ui.item
{
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.Sprite;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ItemContainer extends DisplayObjectContainer
   {
       
      
      private var _url:String = "";
      
      private var _bgMc:Sprite;
      
      private var _linkName:String = "";
      
      private var _itemMc:DisplayObject;
      
      public function ItemContainer(param1:Sprite, param2:String = "", param3:String = "")
      {
         super();
         this._bgMc = param1;
         addChild(this._bgMc);
         this._url = param2;
         this._linkName = param3;
         if(this._url != "" && this._linkName != "")
         {
            this.show(this._url,this._linkName);
         }
      }
      
      public function show(param1:String, param2:String) : void
      {
         this.cancel(this._url);
         this._url = param1;
         this._linkName = param2;
         if(this._url != "" && this._linkName != "")
         {
            ResourceManager.getResource(this._url,this.onLoadComHandler,this._linkName);
         }
      }
      
      public function clear() : void
      {
         this.cancel(this._url);
         this.removeOldItem();
      }
      
      public function destroy() : void
      {
         this.clear();
         this.removeBg();
      }
      
      public function changeBg() : void
      {
      }
      
      private function cancel(param1:String) : void
      {
         if(param1 != "")
         {
            ResourceManager.cancelURL(param1);
         }
      }
      
      private function removeOldItem() : void
      {
         if(this._itemMc)
         {
            DisplayUtil.removeForParent(this._itemMc);
            this._itemMc = null;
         }
      }
      
      private function removeBg() : void
      {
         if(this._bgMc)
         {
            DisplayUtil.removeForParent(this._bgMc);
            this._bgMc = null;
         }
      }
      
      private function onLoadComHandler(param1:DisplayObject) : void
      {
         this.removeOldItem();
         this._itemMc = param1;
         addChild(this._itemMc);
      }
   }
}
