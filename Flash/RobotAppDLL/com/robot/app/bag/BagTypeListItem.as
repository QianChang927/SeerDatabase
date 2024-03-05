package com.robot.app.bag
{
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.system.ApplicationDomain;
   import org.taomee.utils.DisplayUtil;
   
   public class BagTypeListItem extends Sprite
   {
       
      
      private var _ui:MovieClip;
      
      private var _id:int = 0;
      
      public function BagTypeListItem(param1:ApplicationDomain)
      {
         super();
         buttonMode = true;
         mouseChildren = false;
         this._ui = new (param1.getDefinition("listItem_ui") as Class)() as MovieClip;
         this._ui.gotoAndStop(1);
         addChild(this._ui);
      }
      
      override public function set width(param1:Number) : void
      {
         this._ui.width = param1;
      }
      
      override public function get width() : Number
      {
         return this._ui.width;
      }
      
      public function setInfo(param1:int, param2:String) : void
      {
         visible = true;
         this._id = param1;
         this._ui["txt"].text = param2;
      }
      
      public function get id() : int
      {
         return this._id;
      }
      
      public function set select(param1:Boolean) : void
      {
         if(param1)
         {
            this._ui.gotoAndStop(2);
         }
         else
         {
            this._ui.gotoAndStop(1);
         }
      }
      
      public function clear() : void
      {
         visible = false;
         this._id = 0;
         this._ui["txt"].text = "";
      }
      
      public function destroy() : void
      {
         DisplayUtil.removeAllChild(this);
      }
   }
}
