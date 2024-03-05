package com.robot.app.extFun
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.IExtFun;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class ExtFun_4 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      public function ExtFun_4()
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
         ModuleManager.showModule(ClientConfig.getBookModule("XitaPictureBook"),"正在打开西塔珍贵的回忆图册....");
      }
      
      public function destory() : void
      {
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
