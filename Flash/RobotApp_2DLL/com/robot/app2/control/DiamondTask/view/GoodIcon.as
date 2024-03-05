package com.robot.app2.control.DiamondTask.view
{
   import com.robot.core.config.ClientConfig;
   import flash.display.DisplayObject;
   import flash.display.Sprite;
   import org.taomee.manager.ResourceManager;
   
   public class GoodIcon extends Sprite
   {
       
      
      private var _scale:Number;
      
      private var _offset:Array;
      
      public function GoodIcon(param1:int, param2:Number = 1, param3:Array = null)
      {
         super();
         this._scale = param2;
         this._offset = param3;
         ResourceManager.getResource(ClientConfig.getResPath("item/doodle/icon/" + param1 + ".swf"),this.onLoaded);
      }
      
      private function onLoaded(param1:DisplayObject) : void
      {
         addChild(param1);
         param1.scaleX *= this._scale;
         param1.scaleY *= this._scale;
         if(this._offset != null)
         {
            param1.x += this._offset[0];
            param1.y += this._offset[1];
         }
      }
   }
}
