package com.robot.app.homeToolBarPanel
{
   import com.robot.app.bag.BagClothPreview;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.skeleton.ClothPreview;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import org.taomee.utils.DisplayUtil;
   
   public class HomeFriendItem extends Sprite
   {
       
      
      private var mc:MovieClip;
      
      private var _info:UserInfo;
      
      private var _showMc:Sprite;
      
      protected var clothPrev:BagClothPreview;
      
      public function HomeFriendItem()
      {
         super();
         this.mc = this.getMC();
         addChild(this.mc);
         this.mouseChildren = false;
         this.mc.gotoAndStop(1);
         this._showMc = UIManager.getSprite("ComposeMC");
         DisplayUtil.stopAllMovieClip(this._showMc,1);
         this._showMc.scaleX = this._showMc.scaleY = 0.5;
         this._showMc.x = 20;
         this._showMc.y = 18;
         this._showMc.mask = this.mc["maskMC"];
         this.mc.addChild(this._showMc);
         this.clothPrev = new BagClothPreview(this._showMc,null,ClothPreview.MODEL_SHOW);
      }
      
      protected function getMC() : MovieClip
      {
         return UIManager.getMovieClip("ui_Home_Friend_item");
      }
      
      public function set info(param1:UserInfo) : void
      {
         var _loc3_:* = undefined;
         this._info = param1;
         if(param1.nick == "")
         {
            this.mc["name_txt"].text = param1.userID.toString();
         }
         else
         {
            this.mc["name_txt"].text = param1.nick;
         }
         if(this._info.userID == MainManager.actorInfo.mapID)
         {
            this.mc.gotoAndStop(2);
            if(!(this is HomeMineItem))
            {
               this.mc["name_txt"].textColor = 0;
            }
         }
         else
         {
            this.mc.gotoAndStop(1);
            if(!(this is HomeMineItem))
            {
               this.mc["name_txt"].textColor = 16777215;
            }
         }
         this.mc["level_txt"].text = param1.petMaxLev;
         this.clothPrev.changeColor(param1.color);
         var _loc2_:Array = [];
         for each(_loc3_ in param1.clothes)
         {
            if(_loc3_ is Number)
            {
               _loc2_.push(new PeopleItemInfo(_loc3_));
            }
            else if(!(_loc3_ is PeopleItemInfo))
            {
               _loc2_.push(new PeopleItemInfo(_loc3_.id,_loc3_.level));
            }
            else
            {
               _loc2_.push(_loc3_);
            }
         }
         this.clothPrev.showCloths(_loc2_);
      }
      
      public function get info() : UserInfo
      {
         return this._info;
      }
      
      public function set num(param1:uint) : void
      {
         this.mc["num_txt"].text = param1.toString();
      }
      
      public function clear() : void
      {
         if(this.clothPrev)
         {
            this.clothPrev.destroy();
         }
         DisplayUtil.removeForParent(this._showMc);
         this._showMc = UIManager.getSprite("ComposeMC");
         DisplayUtil.stopAllMovieClip(this._showMc,1);
         this._showMc.scaleX = this._showMc.scaleY = 0.5;
         this._showMc.x = 20;
         this._showMc.y = 18;
         this._showMc.mask = this.mc["maskMC"];
         this.mc.addChild(this._showMc);
         this.clothPrev = new BagClothPreview(this._showMc,null,ClothPreview.MODEL_SHOW);
      }
      
      public function destroy() : void
      {
         this.clear();
         this._showMc = null;
         this.mc = null;
         this.clothPrev.destroy();
         this.clothPrev = null;
      }
   }
}
