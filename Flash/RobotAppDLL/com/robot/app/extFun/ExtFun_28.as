package com.robot.app.extFun
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.IExtFun;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class ExtFun_28 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      public function ExtFun_28()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1;
         this._ui["mc"].gotoAndStop(1);
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playMcAnimate(this._ui["mc"],0,"",function():void
         {
            MapManager.changeMap(335);
         });
      }
      
      public function destory() : void
      {
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
