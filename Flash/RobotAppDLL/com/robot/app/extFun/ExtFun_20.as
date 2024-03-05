package com.robot.app.extFun
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.IExtFun;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class ExtFun_20 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      public function ExtFun_20()
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
         ModuleManager.showModule(ClientConfig.getAppModule("HomeRecordPanel"),"正在打开光辉战绩....",MapManager.currentMap.id);
      }
      
      public function destory() : void
      {
         ModuleManager.destroy(ClientConfig.getAppModule("HomeRecordPanel"));
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
