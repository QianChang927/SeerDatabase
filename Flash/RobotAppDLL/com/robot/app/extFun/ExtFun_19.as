package com.robot.app.extFun
{
   import com.robot.app.mapProcess.control.HonorsHallController;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.IExtFun;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class ExtFun_19 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      public function ExtFun_19()
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
         HonorsHallController.showBadgePanel(MapManager.currentMap.id);
      }
      
      public function destory() : void
      {
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
