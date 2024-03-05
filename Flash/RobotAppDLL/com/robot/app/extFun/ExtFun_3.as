package com.robot.app.extFun
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.IExtFun;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class ExtFun_3 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      public function ExtFun_3()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1;
         this._ui.addEventListener(MouseEvent.ROLL_OVER,this.onOver);
         this._ui.addEventListener(MouseEvent.ROLL_OUT,this.onOut);
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
         this.onOut(null);
      }
      
      private function onOver(param1:MouseEvent) : void
      {
         this._ui["effect"].gotoAndPlay(1);
      }
      
      private function onOut(param1:MouseEvent) : void
      {
         this._ui["effect"].gotoAndStop(1);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("EggWareHousePanel",1);
      }
      
      public function destory() : void
      {
         this._ui.removeEventListener(MouseEvent.ROLL_OVER,this.onOver);
         this._ui.removeEventListener(MouseEvent.ROLL_OUT,this.onOut);
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
