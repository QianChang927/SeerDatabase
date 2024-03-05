package com.robot.app.homeToolBarPanel
{
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.RelationManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class HomeToolBarFriendPanel extends Sprite
   {
      
      private static var dataIndex:uint;
       
      
      private var _panel:MovieClip;
      
      private var array:Array;
      
      private var itemArr:Array;
      
      private var MAX_ITEM:uint = 5;
      
      private var currentDataIndex:int = -1;
      
      public function HomeToolBarFriendPanel()
      {
         var _loc3_:HomeFriendItem = null;
         this.itemArr = [];
         super();
         this._panel = UIManager.getMovieClip("ui_Home_toolBar_friend");
         this._panel["prevBtn"].addEventListener(MouseEvent.CLICK,this.prevHandler);
         this._panel["pageUpBtn"].addEventListener(MouseEvent.CLICK,this.prevHandler);
         this._panel["nextBtn"].addEventListener(MouseEvent.CLICK,this.nextHandler);
         this._panel["pageDownBtn"].addEventListener(MouseEvent.CLICK,this.nextHandler);
         this.array = RelationManager.getFriendInfos();
         var _loc1_:uint = this.array.length;
         if(_loc1_ > this.MAX_ITEM)
         {
            _loc1_ = this.MAX_ITEM;
         }
         var _loc2_:uint = 0;
         while(_loc2_ < _loc1_)
         {
            _loc3_ = new HomeFriendItem();
            _loc3_.buttonMode = true;
            _loc3_.addEventListener(MouseEvent.CLICK,this.onItemClick);
            _loc3_.x = 234 + 132 * _loc2_;
            _loc3_.y = 22;
            this.itemArr.push(_loc3_);
            this._panel.addChild(_loc3_);
            _loc2_++;
         }
      }
      
      private function onItemClick(param1:MouseEvent) : void
      {
         var _loc2_:HomeFriendItem = param1.currentTarget as HomeFriendItem;
         MapManager.changeMap(_loc2_.info.userID);
      }
      
      public function show() : void
      {
         addChild(this._panel);
         this.setInfo();
      }
      
      private function setInfo() : void
      {
         var arr:Array = null;
         var c:uint = 0;
         var i:UserInfo = null;
         var item:HomeFriendItem = null;
         if(dataIndex > this.array.length - this.MAX_ITEM)
         {
            dataIndex = 0;
         }
         if(this.currentDataIndex != dataIndex)
         {
            this.itemArr.forEach(function(param1:HomeFriendItem, param2:uint, param3:Array):void
            {
               param1.clear();
            });
            this.currentDataIndex = dataIndex;
            arr = this.array.slice(dataIndex,dataIndex + this.MAX_ITEM);
            for each(i in arr)
            {
               item = this.itemArr[c];
               item.info = i;
               item.num = dataIndex + c + 1;
               c++;
            }
         }
      }
      
      private function prevHandler(param1:MouseEvent) : void
      {
         var _loc2_:SimpleButton = param1.currentTarget as SimpleButton;
         if(_loc2_.name == "prevBtn")
         {
            if(dataIndex > 0)
            {
               --dataIndex;
            }
         }
         else if(dataIndex >= this.MAX_ITEM)
         {
            dataIndex -= this.MAX_ITEM;
         }
         else
         {
            dataIndex = 0;
         }
         this.setInfo();
      }
      
      private function nextHandler(param1:MouseEvent) : void
      {
         var _loc2_:SimpleButton = param1.currentTarget as SimpleButton;
         if(_loc2_.name == "nextBtn")
         {
            if(dataIndex < this.array.length - this.MAX_ITEM)
            {
               ++dataIndex;
            }
         }
         else if(dataIndex <= this.array.length - this.MAX_ITEM * 2)
         {
            dataIndex += this.MAX_ITEM;
         }
         else if(this.array.length > this.MAX_ITEM)
         {
            dataIndex = this.array.length - this.MAX_ITEM;
         }
         else
         {
            dataIndex = 0;
         }
         this.setInfo();
      }
      
      public function hide() : void
      {
         DisplayUtil.removeForParent(this._panel);
      }
      
      public function destroy() : void
      {
         this.hide();
         this.itemArr.forEach(function(param1:HomeFriendItem, param2:uint, param3:Array):void
         {
            param1.removeEventListener(MouseEvent.CLICK,onItemClick);
            param1.destroy();
            DisplayUtil.removeForParent(param1);
         });
         this._panel["prevBtn"].removeEventListener(MouseEvent.CLICK,this.prevHandler);
         this._panel["pageUpBtn"].removeEventListener(MouseEvent.CLICK,this.prevHandler);
         this._panel["nextBtn"].removeEventListener(MouseEvent.CLICK,this.nextHandler);
         this._panel["pageDownBtn"].removeEventListener(MouseEvent.CLICK,this.nextHandler);
         this._panel = null;
      }
   }
}
