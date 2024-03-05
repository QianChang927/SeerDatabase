package com.robot.app.extFun
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.IExtFun;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class ExtFun_42 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      public function ExtFun_42()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1;
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("CalculatePanel"),"正在加载....");
      }
      
      public function destory() : void
      {
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
