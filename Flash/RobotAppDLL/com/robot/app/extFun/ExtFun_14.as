package com.robot.app.extFun
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.mode.IExtFun;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class ExtFun_14 implements IExtFun
   {
       
      
      private var _ui:MovieClip;
      
      public function ExtFun_14()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1 as MovieClip;
         this._ui.gotoAndStop(1);
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         if(this._ui.currentFrame == 1)
         {
            this._ui.gotoAndStop(2);
            MainManager.actorModel.visible = false;
         }
         else
         {
            this._ui.gotoAndStop(1);
            MainManager.actorModel.visible = true;
         }
      }
      
      public function destory() : void
      {
         MainManager.actorModel.visible = true;
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
