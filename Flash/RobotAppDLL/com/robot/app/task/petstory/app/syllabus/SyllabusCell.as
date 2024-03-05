package com.robot.app.task.petstory.app.syllabus
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import flash.text.TextField;
   import org.taomee.effect.ColorFilter;
   import org.taomee.utils.DisplayUtil;
   
   public class SyllabusCell extends Sprite
   {
       
      
      private var _enable:Boolean = true;
      
      private var _id:uint;
      
      private var _cellMC:MovieClip;
      
      private var _shineMC:MovieClip;
      
      private var _minClose:SimpleButton;
      
      private var _txt:TextField;
      
      private var _isFull:Boolean;
      
      private var _sId:uint;
      
      private var _app:ApplicationDomain;
      
      private var _iconMC:MovieClip;
      
      public function SyllabusCell(param1:MovieClip, param2:MovieClip, param3:ApplicationDomain)
      {
         super();
         this._cellMC = param1;
         this._shineMC = param2;
         this._app = param3;
         this._minClose = new (param3.getDefinition("MinCloseBtn") as Class)() as SimpleButton;
         this._minClose.addEventListener(MouseEvent.CLICK,this.onMinCloseBtn);
         this._cellMC.mouseChildren = false;
         this._cellMC.addEventListener(MouseEvent.MOUSE_DOWN,this.onMouseDown);
         this._cellMC.buttonMode = true;
         this._txt = this._cellMC["txt"] as TextField;
         this._txt.multiline = true;
         this.clearTxt();
         this.enable = true;
      }
      
      private function onMinCloseBtn(param1:MouseEvent) : void
      {
         this.clearMinClose();
         this.clearTxt();
         this.clearIcon();
         this.dispatchEvent(new MouseEvent(MouseEvent.CLICK));
      }
      
      private function onMouseDown(param1:MouseEvent) : void
      {
         this.showShine();
         if(this._isFull)
         {
            this.showMinclose();
         }
         else
         {
            this.dispatchEvent(new MouseEvent(MouseEvent.MOUSE_DOWN));
         }
      }
      
      public function showShine() : void
      {
         this._cellMC.parent.addChild(this._shineMC);
         this._shineMC.x = this._cellMC.x;
         this._shineMC.y = this._cellMC.y;
      }
      
      private function showMinclose() : void
      {
         this._cellMC.parent.addChild(this._minClose);
         this._minClose.x = this._cellMC.x;
         this._minClose.y = this._cellMC.y;
      }
      
      private function showIcon(param1:uint) : void
      {
         this._iconMC = new (this._app.getDefinition("IconMC") as Class)() as MovieClip;
         this._iconMC.x = this._cellMC.x + 4;
         this._iconMC.y = this._cellMC.y + 3;
         this._iconMC.gotoAndStop(param1);
         this._cellMC.parent.addChild(this._iconMC);
      }
      
      public function get Id() : uint
      {
         return this._id;
      }
      
      public function set Id(param1:uint) : void
      {
         this._id = param1;
      }
      
      public function setcontext(param1:String, param2:uint) : void
      {
         this._sId = param2;
         this._txt.text = param1;
         this._isFull = true;
         this.showIcon(param2);
         this.showMinclose();
      }
      
      public function set enable(param1:Boolean) : void
      {
         if(param1)
         {
            this._cellMC.filters = [];
            this._cellMC.mouseEnabled = true;
            this._cellMC.buttonMode = true;
         }
         else
         {
            this._cellMC.filters = [ColorFilter.setGrayscale()];
            this._cellMC.mouseEnabled = false;
            this._cellMC.buttonMode = false;
         }
         this._enable = param1;
      }
      
      public function get enable() : Boolean
      {
         return this._enable;
      }
      
      public function get sId() : uint
      {
         return this._sId;
      }
      
      public function clear() : void
      {
         this.enable = false;
         this.clearTxt();
         this.clearShine();
         this.clearMinClose();
         this.clearIcon();
      }
      
      private function clearShine() : void
      {
         if(this._cellMC.parent.contains(this._shineMC))
         {
            DisplayUtil.removeForParent(this._shineMC);
         }
      }
      
      private function clearMinClose() : void
      {
         if(this._cellMC.parent.contains(this._minClose))
         {
            DisplayUtil.removeForParent(this._minClose);
         }
      }
      
      private function clearIcon() : void
      {
         if(this._iconMC)
         {
            if(this._cellMC.parent.contains(this._iconMC))
            {
               DisplayUtil.removeForParent(this._iconMC);
            }
         }
      }
      
      private function clearTxt() : void
      {
         this._txt.text = "";
         this._sId = 0;
         this._isFull = false;
      }
   }
}
