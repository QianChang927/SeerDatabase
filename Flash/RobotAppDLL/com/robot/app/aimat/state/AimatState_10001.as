package com.robot.app.aimat.state
{
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.IActionSprite;
   import flash.display.MovieClip;
   import flash.filters.ColorMatrixFilter;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.MovieClipUtil;
   
   public class AimatState_10001 extends BaseAimatState
   {
       
      
      private var _obj:IActionSprite;
      
      private var _maoyan:MovieClip;
      
      private var _diaozha:MovieClip;
      
      public function AimatState_10001()
      {
         super();
      }
      
      override public function execute(param1:IActionSprite, param2:AimatInfo) : void
      {
         var _loc4_:MovieClip = null;
         this._obj = param1;
         var _loc3_:Array = [0.6,1.2,0.1,0,-263,0.6,1.2,0.16,0,-263,0.6,1.2,0.16,0,-263,0,0,0,1,0];
         if(this._obj.sprite is BasePeoleModel)
         {
            (_loc4_ = BasePeoleModel(this._obj.sprite).skeleton.getSkeletonMC()).filters = [new ColorMatrixFilter(_loc3_)];
            this._maoyan = UIManager.getMovieClip("state_10001");
            this._maoyan.y = -this._obj.hitRect.height;
            this._maoyan.mouseEnabled = false;
            this._maoyan.mouseChildren = false;
            this._obj.sprite.addChildAt(this._maoyan,0);
         }
         else
         {
            this._obj.sprite.filters = [new ColorMatrixFilter(_loc3_)];
         }
      }
      
      override public function destroy() : void
      {
         var _loc1_:MovieClip = null;
         var _loc2_:MovieClip = null;
         if(this._obj is BasePeoleModel)
         {
            if(this._maoyan)
            {
               DisplayUtil.removeForParent(this._maoyan);
               this._maoyan = null;
            }
            _loc1_ = BasePeoleModel(this._obj.sprite).skeleton.getSkeletonMC();
            if(_loc1_ != null)
            {
               _loc1_.filters = [];
            }
            _loc2_ = UIManager.getMovieClip("state_10001_1");
            if(_loc2_ != null && this._obj != null)
            {
               _loc2_.x = this._obj.sprite.x;
               _loc2_.y = this._obj.sprite.y;
               MovieClipUtil.playEndAndRemove(_loc2_);
               MapManager.currentMap.depthLevel.addChild(_loc2_);
            }
         }
         else if(this._obj != null && this._obj.sprite != null)
         {
            this._obj.sprite.filters = [];
         }
         this._obj = null;
      }
   }
}
