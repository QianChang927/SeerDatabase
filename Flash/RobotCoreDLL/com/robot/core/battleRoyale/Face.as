package com.robot.core.battleRoyale
{
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.UIManager;
   import com.robot.core.skeleton.ClothPreview;
   import flash.display.DisplayObjectContainer;
   import flash.display.Sprite;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   import org.taomee.utils.DisplayUtil;
   
   public class Face
   {
       
      
      private var _clothPrev:Object;
      
      private var _faceMc:Sprite;
      
      public function Face(param1:DisplayObjectContainer, param2:UserInfo, param3:uint, param4:Point = null)
      {
         super();
         if(!this._faceMc)
         {
            this._faceMc = this.getFaceBg();
         }
         var _loc5_:Class = getDefinitionByName("com.robot.app.bag.BagClothPreview") as Class;
         this._clothPrev = new _loc5_(this._faceMc,null,ClothPreview.MODEL_SHOW);
         this._clothPrev.changeColor(param2.color);
         this._clothPrev.showCloths(param2.clothes);
         this._clothPrev.showDoodle(param2.texture);
         this.setSize(param3);
         if(!param4)
         {
            this._faceMc.x = 20;
            this._faceMc.y = 10;
         }
         else
         {
            this._faceMc.x = param4.x;
            this._faceMc.y = param4.y;
         }
         param1.addChild(this._faceMc);
      }
      
      public function setScale(param1:Number) : void
      {
         if(param1 < 0)
         {
            param1 = 0;
         }
         if(!this._faceMc)
         {
            this._faceMc = this.getFaceBg();
         }
         this._faceMc.scaleX = this._faceMc.scaleY = param1;
      }
      
      public function setSize(param1:uint) : void
      {
         var _loc2_:Number = NaN;
         if(this._faceMc.height > this._faceMc.width)
         {
            _loc2_ = param1 / this._faceMc.height;
         }
         else
         {
            _loc2_ = param1 / this._faceMc.width;
         }
         this._faceMc.scaleX = this._faceMc.scaleY = _loc2_;
      }
      
      public function destroy() : void
      {
         if(this._faceMc)
         {
            DisplayUtil.removeForParent(this._faceMc);
            this._faceMc = null;
         }
         this._clothPrev = null;
      }
      
      private function getFaceBg() : Sprite
      {
         var _loc1_:Sprite = UIManager.getSprite("ComposeMC");
         _loc1_.mouseEnabled = false;
         _loc1_.mouseChildren = false;
         return _loc1_;
      }
   }
}
