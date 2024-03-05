package com.robot.core.ui.chat
{
   import com.robot.core.info.NewChatInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import flash.display.Bitmap;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.text.TextField;
   
   public class ChatSWinItemRender extends Sprite
   {
       
      
      private var talkItem:MovieClip;
      
      public var obj:NewChatInfo;
      
      public function ChatSWinItemRender()
      {
         super();
         this.talkItem = UIManager.getMovieClip("schatItem");
         addChild(this.talkItem);
      }
      
      public function dataChanged(param1:NewChatInfo) : void
      {
         var _loc3_:String = null;
         var _loc4_:Boolean = false;
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc7_:Number = NaN;
         var _loc8_:Number = NaN;
         var _loc9_:* = null;
         var _loc10_:MovieClip = null;
         var _loc11_:Bitmap = null;
         var _loc2_:NewChatInfo = param1;
         this.obj = param1;
         if(_loc2_)
         {
            _loc3_ = param1.msg;
            _loc4_ = false;
            if(!isNaN(parseInt(_loc3_.split("#")[1])) || !isNaN(parseInt(_loc3_.split("$")[1])))
            {
               _loc4_ = true;
            }
            if(_loc4_)
            {
               if(!isNaN(parseInt(_loc3_.split("#")[1])))
               {
                  _loc5_ = parseInt(_loc3_.split("#")[1]);
               }
               else
               {
                  _loc5_ = parseInt(_loc3_.split("$")[1]);
               }
            }
            _loc6_ = int(param1["type"]);
            this.talkItem["flag"].gotoAndStop(param1.type);
            _loc7_ = 0;
            _loc8_ = 0;
            if(_loc4_)
            {
               if(isNaN(parseInt(_loc3_.split("#")[1])))
               {
                  _loc5_ = parseInt(_loc3_.split("$")[1]);
                  _loc10_ = UIManager.getMovieClip("e" + _loc5_);
                  this.talkItem["icon"].addChild(_loc10_);
                  _loc7_ = _loc10_.width;
                  _loc8_ = _loc10_.height;
               }
               else
               {
                  _loc5_ = parseInt(_loc3_.split("#")[1]);
                  _loc11_ = UIManager.getBitmap("exp_" + _loc5_);
                  _loc11_.x = -_loc11_.width / 2;
                  _loc11_.y = -_loc11_.height / 2;
                  _loc7_ = _loc11_.width;
                  _loc8_ = _loc11_.height;
                  this.talkItem["icon"].addChild(_loc11_);
               }
            }
            this.talkItem["icon"].visible = _loc4_;
            _loc9_ = "";
            if(_loc6_ == 1 || _loc6_ == 5)
            {
               _loc9_ = param1.msg;
               (this.talkItem["txt"] as TextField).htmlText = _loc9_;
            }
            else
            {
               _loc9_ = "<font color = \'#ffcc00\'>" + (_loc6_ == 1 || _loc6_ == 5 ? "" : (param1.senderID == MainManager.actorID ? "我" : param1.senderNicName) + ":") + "</font>" + "<font color = \'#ffffff\'>" + (_loc4_ ? "" : _loc3_) + "</font>";
               (this.talkItem["txt"] as TextField).htmlText = _loc9_;
               this.talkItem["icon"].x = this.talkItem["txt"].x + this.talkItem["txt"].textWidth + 10;
            }
            (this.talkItem["txt"] as TextField).width = (this.talkItem["txt"] as TextField).textWidth + 10;
            (this.talkItem["txt"] as TextField).height = (this.talkItem["txt"] as TextField).textHeight + 12;
         }
      }
   }
}
