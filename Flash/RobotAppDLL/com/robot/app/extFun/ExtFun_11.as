package com.robot.app.extFun
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.mode.IExtFun;
   import flash.display.Shape;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class ExtFun_11 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      private var _mask:Shape;
      
      public function ExtFun_11()
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
         if(this._mask)
         {
            DisplayUtil.removeForParent(this._mask);
         }
         else
         {
            if(this._mask == null)
            {
               this._mask = new Shape();
               this._mask.graphics.beginFill(0,0.5);
               this._mask.graphics.drawRect(0,0,960,560);
               this._mask.graphics.endFill();
            }
            LevelManager.mapLevel.addChild(this._mask);
         }
      }
      
      public function destory() : void
      {
         if(this._mask)
         {
            DisplayUtil.removeForParent(this._mask);
            this._mask = null;
         }
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
