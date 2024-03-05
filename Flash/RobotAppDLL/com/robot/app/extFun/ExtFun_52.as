package com.robot.app.extFun
{
   import com.robot.core.SoundManager;
   import com.robot.core.mode.IExtFun;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class ExtFun_52 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      private var _isPlay:Boolean = false;
      
      public function ExtFun_52()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1;
         this.stop();
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         if(this._isPlay)
         {
            this._isPlay = false;
            SoundManager.playSound();
            if(this._ui != null)
            {
               this.stop();
            }
         }
         else
         {
            this._isPlay = true;
            SoundManager.playGameSound("ChristmasLittleApple");
            if(this._ui != null)
            {
               this.play();
            }
         }
      }
      
      private function play() : void
      {
         this._ui["audio0"].play();
         this._ui["audio1"].play();
         this._ui["note0"].visible = true;
         this._ui["note1"].visible = true;
      }
      
      private function stop() : void
      {
         if(this._ui["audio0"] != null)
         {
            this._ui["audio0"].gotoAndStop(1);
         }
         if(this._ui["audio1"] != null)
         {
            this._ui["audio1"].gotoAndStop(1);
         }
         if(this._ui["note0"] != null)
         {
            this._ui["note0"].visible = false;
         }
         if(this._ui["note1"] != null)
         {
            this._ui["note1"].visible = false;
         }
      }
      
      public function destory() : void
      {
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
