package com.robot.app.extFun
{
   import com.robot.app.bag.BagClothPreview;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.mode.IExtFun;
   import com.robot.core.skeleton.ClothPreview;
   import flash.display.Sprite;
   import org.taomee.utils.DisplayUtil;
   
   public class ExtFun_29 implements IExtFun
   {
       
      
      private var _faceMc:Sprite;
      
      private var _oTherClothPrev:BagClothPreview;
      
      public function ExtFun_29()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._faceMc = this.getFaceBg();
         DisplayUtil.stopAllMovieClip(this._faceMc);
         this._oTherClothPrev = new BagClothPreview(this._faceMc,null,ClothPreview.MODEL_SHOW);
         this._oTherClothPrev.changeColor(MainManager.actorInfo.color);
         this._oTherClothPrev.showDoodle(MainManager.actorInfo.texture);
         this._oTherClothPrev.showCloths(MainManager.actorInfo.clothes);
         param1.mouseEnabled = false;
         param1.mouseChildren = false;
         param1["mc"].addChild(this._faceMc);
         param1["mc"].x = -param1["mc"].width / 2;
         param1["mc"].y = -param1["mc"].height;
      }
      
      private function getFaceBg() : Sprite
      {
         var _loc1_:Sprite = UIManager.getSprite("ComposeMC");
         _loc1_.scaleX = _loc1_.scaleY = 0.5;
         return _loc1_;
      }
      
      public function destory() : void
      {
         if(this._faceMc)
         {
            DisplayUtil.removeForParent(this._faceMc);
            this._faceMc = null;
         }
         if(this._oTherClothPrev)
         {
            this._oTherClothPrev.destroy();
            this._oTherClothPrev = null;
         }
      }
   }
}
