package com.robot.core.ui.chat
{
   import com.robot.core.info.NewChatInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import flash.display.Bitmap;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.text.TextField;
   
   public class ChatBWinItemRender extends Sprite
   {
       
      
      private var talkItem:MovieClip;
      
      private var maxWidth:Number;
      
      private var _strMsg:String;
      
      public function ChatBWinItemRender()
      {
         super();
      }
      
      public function destroy() : void
      {
         if(this.talkItem)
         {
            if(this.talkItem.parent)
            {
               this.talkItem.parent.removeChild(this.talkItem);
            }
            this.talkItem = null;
         }
      }
      
      public function dataChanged(param1:NewChatInfo, param2:Number) : void
      {
         var _loc3_:NewChatInfo = null;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc6_:String = null;
         var _loc7_:Boolean = false;
         var _loc8_:int = 0;
         var _loc9_:Number = NaN;
         var _loc10_:Number = NaN;
         var _loc11_:MovieClip = null;
         var _loc12_:Bitmap = null;
         _loc3_ = param1;
         if(_loc3_)
         {
            this.maxWidth = param2;
            if((_loc5_ = _loc4_ = _loc3_.type) == 5)
            {
               _loc5_ = 2;
            }
            switch(_loc4_)
            {
               case 1:
               case 5:
                  this._strMsg = _loc3_.msg;
                  this.talkItem = UIManager.getMovieClip("sysTalkItem");
                  (this.talkItem["txt"] as TextField).width = param2 - 16;
                  (this.talkItem["txt"] as TextField).htmlText = _loc3_.msg;
                  this.talkItem["bg"].height = this.talkItem["txt"].textHeight + 20;
                  this.talkItem["bg"].width = (this.talkItem["txt"] as TextField).textWidth + 8;
                  this.talkItem["flag"].gotoAndStop(_loc5_);
                  break;
               default:
                  this._strMsg = _loc3_.msg;
                  _loc6_ = _loc3_.msg;
                  _loc7_ = false;
                  if(!isNaN(parseInt(_loc6_.split("#")[1])) || !isNaN(parseInt(_loc6_.split("$")[1])))
                  {
                     _loc7_ = true;
                  }
                  _loc9_ = 0;
                  _loc10_ = 0;
                  if(_loc3_.senderID == MainManager.actorID)
                  {
                     this.talkItem = UIManager.getMovieClip("myTalkItem");
                     addChild(this.talkItem);
                  }
                  else
                  {
                     this.talkItem = UIManager.getMovieClip("otherTalkItem");
                     addChild(this.talkItem);
                  }
                  this.talkItem["txt"].width = param2 - 76;
                  this.talkItem["txt"].text = _loc3_.msg;
                  this.talkItem["txt"].width = this.talkItem["txt"].textWidth + 10;
                  this.talkItem["txt"].height = this.talkItem["txt"].textHeight + 14;
                  if(_loc7_)
                  {
                     if(isNaN(parseInt(_loc6_.split("#")[1])))
                     {
                        _loc8_ = parseInt(_loc6_.split("$")[1]);
                        _loc11_ = UIManager.getMovieClip("e" + _loc8_);
                        this.talkItem["icon"].addChild(_loc11_);
                        _loc10_ = _loc11_.width;
                        _loc9_ = _loc11_.height;
                     }
                     else
                     {
                        _loc8_ = parseInt(_loc6_.split("#")[1]);
                        _loc12_ = UIManager.getBitmap("exp_" + _loc8_);
                        _loc12_.x = -_loc12_.width / 2;
                        _loc12_.y = -_loc12_.height / 2;
                        _loc10_ = _loc12_.width;
                        _loc9_ = _loc12_.height;
                        this.talkItem["icon"].addChild(_loc12_);
                     }
                  }
                  this.talkItem["icon"].visible = _loc7_;
                  this.talkItem["txt"].visible = !_loc7_;
                  this.talkItem["bg"].width = (this.talkItem["txt"] as TextField).textWidth + 16;
                  this.talkItem["bg"].height = (this.talkItem["txt"] as TextField).textHeight + 20;
                  if(_loc7_)
                  {
                     this.talkItem["bg"].height = 46;
                     this.talkItem["bg"].width = 46;
                  }
                  this.talkItem["flag"].gotoAndStop(_loc5_);
                  if(_loc3_.senderID == MainManager.actorID)
                  {
                     this.talkItem["rName"].text = MainManager.actorInfo.nick;
                     this.talkItem["bg"].x = this.maxWidth - 65 - this.talkItem["bg"].width;
                     this.talkItem["txt"].x = this.talkItem["bg"].x + 8;
                     this.talkItem["icon"].x = this.talkItem["bg"].x + this.talkItem["bg"].width - 23;
                     this.talkItem["head"].x = this.maxWidth - 30;
                     this.talkItem["flag"].x = this.talkItem["head"].x - 57;
                     this.talkItem["rName"].width = this.talkItem["rName"].textWidth + 5;
                     this.talkItem["rName"].x = this.talkItem["flag"].x - 35 - this.talkItem["rName"].width;
                  }
                  else
                  {
                     this.talkItem["rName"].text = _loc3_.senderNicName;
                     this.talkItem["rName"].width = this.talkItem["rName"].textWidth + 5;
                  }
            }
            if(_loc3_.senderID != MainManager.actorID)
            {
               this.talkItem.name = _loc3_.senderID.toString();
            }
         }
      }
      
      public function get strMsg() : String
      {
         return this._strMsg;
      }
   }
}
