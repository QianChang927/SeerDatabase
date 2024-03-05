package com.robot.app.task.petstory.app.visit
{
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.system.ApplicationDomain;
   import org.taomee.effect.ColorFilter;
   
   public class AbstractCell extends Sprite
   {
       
      
      protected var _mc:MovieClip;
      
      protected var _enable:Boolean;
      
      protected var _app:ApplicationDomain;
      
      public function AbstractCell(param1:ApplicationDomain, param2:Object = null)
      {
         super();
      }
      
      public function set enable(param1:Boolean) : void
      {
         if(param1)
         {
            this._mc.filters = [];
            this._mc.mouseEnabled = true;
            this._mc.buttonMode = true;
         }
         else
         {
            this._mc.filters = [ColorFilter.setGrayscale()];
            this._mc.mouseEnabled = false;
            this._mc.buttonMode = false;
         }
         this._enable = param1;
      }
      
      public function get enable() : Boolean
      {
         return this._enable;
      }
   }
}
