package com.robot.app.task.petstory.app.syllabus
{
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   
   public class SyllabusBtn extends Sprite
   {
       
      
      private var _titleIndex:uint;
      
      private var _iconIndex:uint;
      
      private var _btnMC:MovieClip;
      
      private var _app:ApplicationDomain;
      
      private var _titleName:String;
      
      private var _titleMC:MovieClip;
      
      private var _iconMC:MovieClip;
      
      public function SyllabusBtn(param1:MovieClip, param2:ApplicationDomain, param3:uint, param4:uint, param5:String)
      {
         super();
         this._btnMC = param1;
         this._btnMC.buttonMode = true;
         this._btnMC.mouseChildren = false;
         this._titleIndex = param3;
         this._iconIndex = param4;
         this._app = param2;
         this._titleName = param5;
         this.initTitle();
         this.initIcon();
         this._btnMC.addEventListener(MouseEvent.CLICK,this.onMouseBtn);
      }
      
      private function initTitle() : void
      {
         this._titleMC = new (this._app.getDefinition("titleMC") as Class)() as MovieClip;
         this._titleMC.x += 63;
         this._titleMC.y += 13;
         this._titleMC.gotoAndStop(this._titleIndex);
         this._btnMC.addChild(this._titleMC);
      }
      
      private function initIcon() : void
      {
         this._iconMC = new (this._app.getDefinition("IconMC") as Class)() as MovieClip;
         this._iconMC.x += 23;
         this._iconMC.y += 13;
         this._iconMC.gotoAndStop(this._iconIndex);
         this._btnMC.addChild(this._iconMC);
      }
      
      private function onMouseBtn(param1:MouseEvent) : void
      {
         this.dispatchEvent(new MouseEvent(MouseEvent.CLICK));
      }
      
      public function clear() : void
      {
         this._btnMC.removeEventListener(MouseEvent.CLICK,this.onMouseBtn);
         if(this._iconMC)
         {
            this._btnMC.removeChild(this._iconMC);
         }
         if(this._titleMC)
         {
            this._btnMC.removeChild(this._titleMC);
         }
      }
      
      public function getTitleId() : uint
      {
         return this._titleIndex;
      }
      
      public function getTitleName() : String
      {
         return this._titleName;
      }
   }
}
