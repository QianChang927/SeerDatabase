package com.robot.core.mode.components
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ModuleManager;
   import flash.display.InteractiveObject;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   
   public class ShowMultiBuyPanelComponent extends EventComponent
   {
       
      
      private var _obj:Object;
      
      private var _func:Function;
      
      public function ShowMultiBuyPanelComponent(param1:InteractiveObject, param2:Object, param3:Function = null)
      {
         super();
         this._obj = param2;
         this._func = param3;
         super.addClickEvent(param1,this.onBuy);
      }
      
      private function onBuy(param1:MouseEvent) : void
      {
         EventManager.addEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,this.onCloseBuyPanel);
         ModuleManager.showModule(ClientConfig.getAppModule("MultiBuyPanel"),"",this._obj);
      }
      
      private function onCloseBuyPanel(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,this.onCloseBuyPanel);
         if(this._func != null)
         {
            this._func();
         }
      }
   }
}
