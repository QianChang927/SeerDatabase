package com.robot.app.toolBar
{
   import com.robot.app.toolBar.msgButton.IMsgButton;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.EventManager;
   
   public class ToolBarButton implements IToolBarButton
   {
       
      
      private var _btn:MovieClip;
      
      private var _msgBtn:IMsgButton;
      
      private var _data:Array;
      
      public function ToolBarButton(param1:MovieClip, param2:IMsgButton, param3:Array)
      {
         super();
         this._btn = param1;
         this._msgBtn = param2;
         this._data = param3;
         this._btn.gotoAndStop(2);
         this._btn.addEventListener(MouseEvent.MOUSE_OVER,this.onMosOver);
         this._btn.addEventListener(MouseEvent.MOUSE_OUT,this.onMosOut);
         EventManager.addEventListener("Msg_btn_click",this.removeEvent);
      }
      
      public function destroy() : void
      {
         if(this._btn)
         {
            this._btn.gotoAndStop(1);
            this._btn.removeEventListener(MouseEvent.MOUSE_OVER,this.onMosOver);
            this._btn.removeEventListener(MouseEvent.MOUSE_OUT,this.onMosOut);
         }
         EventManager.removeEventListener("Msg_btn_click",this.removeEvent);
         if(this._msgBtn)
         {
            this._msgBtn.hide();
         }
      }
      
      public function onMosOver(param1:MouseEvent = null) : void
      {
         if(this._data)
         {
            this._msgBtn.show(this._data[0],this._data[1]);
         }
      }
      
      public function onMosOut(param1:MouseEvent = null) : void
      {
         var t:uint = 0;
         var evt:MouseEvent = param1;
         t = setTimeout(function():void
         {
            _msgBtn.hide();
            clearTimeout(t);
         },2000);
         this._btn.addEventListener(MouseEvent.MOUSE_OVER,this.onMosOver);
      }
      
      private function removeEvent(param1:Event) : void
      {
         if(this._btn)
         {
            this._btn.gotoAndStop(1);
            this._btn.removeEventListener(MouseEvent.MOUSE_OVER,this.onMosOver);
            this._btn.removeEventListener(MouseEvent.MOUSE_OUT,this.onMosOut);
         }
      }
   }
}
