package com.robot.app.extFun
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.FitmentInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.mode.IExtFun;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class ExtFun_10 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      private var _info:FitmentInfo;
      
      private var _panel:AppModel;
      
      public function ExtFun_10()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1;
         this._info = param2 as FitmentInfo;
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         if(this._panel == null)
         {
            this._panel = ModuleManager.getModule(ClientConfig.getAppModule("PetFitmentJNPanel"),"正在打开精灵发现纪念册....");
         }
         this._panel.init(this._info);
         this._panel.show();
      }
      
      public function destory() : void
      {
         if(this._panel)
         {
            this._panel.destroy();
            this._panel = null;
         }
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
         this._info = null;
      }
   }
}
