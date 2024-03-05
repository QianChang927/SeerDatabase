package com.robot.app2.control.newSeer2020
{
   import com.robot.core.manager.MainManager;
   import flash.display.Sprite;
   import flash.geom.Rectangle;
   
   public class NewSeerMaskUi extends Sprite
   {
       
      
      public function NewSeerMaskUi()
      {
         super();
      }
      
      public function drawMask(param1:Array, param2:Number = 0.001) : void
      {
         var _loc4_:Array = null;
         var _loc5_:Rectangle = null;
         this.graphics.clear();
         this.graphics.beginFill(0,param2);
         this.graphics.drawRect(0,0,MainManager.getStageWidth(),MainManager.getStageHeight());
         var _loc3_:int = 0;
         while(_loc3_ < param1.length)
         {
            _loc4_ = param1[_loc3_].split(",");
            _loc5_ = new Rectangle(int(_loc4_[0]),int(_loc4_[1]),int(_loc4_[2]),int(_loc4_[3]));
            this.graphics.drawRect(_loc5_.x,_loc5_.y,_loc5_.width,_loc5_.height);
            _loc3_++;
         }
         this.graphics.endFill();
      }
   }
}
