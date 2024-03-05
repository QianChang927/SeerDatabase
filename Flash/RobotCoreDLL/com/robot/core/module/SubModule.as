package com.robot.core.module
{
   import com.robot.core.mode.components.EventComponent;
   import com.robot.core.mode.components.ToolTipComponent;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   
   public class SubModule extends Sprite
   {
       
      
      protected var _ui:MovieClip;
      
      protected var _eventCom:EventComponent;
      
      protected var _toolTipCom:ToolTipComponent;
      
      public function SubModule()
      {
         super();
         this._eventCom = new EventComponent();
         this._toolTipCom = new ToolTipComponent();
      }
      
      public function destory() : void
      {
         this._eventCom.destroy();
         this._toolTipCom.destroy();
      }
      
      public function get ui() : MovieClip
      {
         return this._ui;
      }
   }
}
