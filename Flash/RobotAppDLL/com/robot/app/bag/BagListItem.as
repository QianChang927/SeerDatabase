package com.robot.app.bag
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.text.TextField;
   import org.taomee.effect.ColorFilter;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BagListItem extends Sprite
   {
       
      
      private var _info:SingleItemInfo;
      
      private var _con:Sprite;
      
      private var _txt:TextField;
      
      private var _count:MovieClip;
      
      private var _obj:DisplayObject;
      
      private var _hasPrev:Boolean;
      
      private var _isCanOverdueBuy:Boolean;
      
      public function BagListItem(param1:Sprite)
      {
         super();
         mouseChildren = false;
         addChild(param1);
         this._con = param1["mc"];
         this._txt = param1["num_txt"];
         this._count = param1["count"];
      }
      
      public function setInfo(param1:SingleItemInfo, param2:Boolean = false, param3:Boolean = false) : void
      {
         if(this._info)
         {
            ResourceManager.cancel(ItemXMLInfo.getIconURL(this._info.itemID,this._info.itemLevel),this.onLoad);
            if(this._obj)
            {
               DisplayUtil.removeForParent(this._obj);
               this._obj = null;
            }
         }
         this._info = param1;
         this._hasPrev = param2;
         this._isCanOverdueBuy = param3;
         if(this._info)
         {
            if(this._info.itemNum == 0)
            {
               this.clear();
            }
            else
            {
               this.mouseEnabled = true;
               if(this._txt)
               {
                  this._txt.visible = true;
                  this._txt.text = this._info.itemNum.toString();
               }
               if(this._count)
               {
                  this._count.visible = true;
                  KTool.showScore(this._count,this._info.itemNum);
               }
               if(this._info.leftTime == 0)
               {
                  this._con.filters = [ColorFilter.setGrayscale()];
                  this.mouseEnabled = this._isCanOverdueBuy;
               }
               ResourceManager.getResource(ItemXMLInfo.getIconURL(this._info.itemID,this._info.itemLevel),this.onLoad);
            }
         }
      }
      
      public function get info() : SingleItemInfo
      {
         return this._info;
      }
      
      public function set text(param1:String) : void
      {
         var _loc2_:uint = uint(param1);
         if(_loc2_ > 1)
         {
            if(this._txt)
            {
               this._txt.visible = true;
               this._txt.text = this._info.itemNum.toString();
            }
            if(this._count)
            {
               this._count.visible = true;
               KTool.showScore(this._count,this._info.itemNum);
            }
         }
         else
         {
            if(this._txt)
            {
               this._txt.visible = false;
            }
            if(this._count)
            {
               this._count.visible = false;
            }
         }
      }
      
      private function onLoad(param1:DisplayObject) : void
      {
         this._obj = param1;
         this._obj.scaleX = this._obj.scaleY = 0.9;
         this._con.addChild(this._obj);
         if(BagShowType.currType == BagShowType.SUIT)
         {
            if(this._hasPrev)
            {
               this._obj.alpha = 0.4;
            }
         }
      }
      
      public function clear() : void
      {
         if(this._info)
         {
            ResourceManager.cancel(ItemXMLInfo.getIconURL(this._info.itemID,this._info.itemLevel),this.onLoad);
         }
         if(this._con)
         {
            this._con.filters = [];
            this.mouseEnabled = true;
         }
         if(this._txt)
         {
            this._txt.visible = false;
         }
         if(this._count)
         {
            this._count.visible = false;
         }
         if(this._obj)
         {
            DisplayUtil.removeForParent(this._obj);
            this._obj = null;
         }
         this._info = null;
      }
   }
}
