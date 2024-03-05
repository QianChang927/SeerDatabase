package com.robot.app.im.talk
{
   import com.robot.app.emotion.EmotionListItem;
   import com.robot.core.behavior.ChatBehavior;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import flash.display.DisplayObject;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.PopUpManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TEmotionPanel extends Sprite
   {
       
      
      private var _panel:Sprite;
      
      private var _userID:uint;
      
      private var _userIDArr:Array;
      
      public function TEmotionPanel(param1:uint, param2:Array = null)
      {
         var _loc4_:EmotionListItem = null;
         super();
         this._userID = param1;
         this._panel = UIManager.getSprite("Panel_Background_4");
         this._panel.mouseChildren = false;
         this._panel.mouseEnabled = false;
         this._panel.cacheAsBitmap = true;
         this._panel.width = 300;
         this._panel.height = 118;
         this._panel.alpha = 0.6;
         addChild(this._panel);
         var _loc3_:int = 0;
         while(_loc3_ < 23)
         {
            (_loc4_ = new EmotionListItem(_loc3_)).x = 6 + (_loc4_.width + 2) * int(_loc3_ / 3);
            _loc4_.y = 6 + (_loc4_.height + 2) * int(_loc3_ % 3);
            addChild(_loc4_);
            _loc4_.addEventListener(MouseEvent.CLICK,this.onItemClick);
            _loc3_++;
         }
      }
      
      public function show(param1:DisplayObject) : void
      {
         PopUpManager.showForDisplayObject(this,param1,PopUpManager.TOP_RIGHT,true,new Point(-30,0));
      }
      
      public function hide() : void
      {
         DisplayUtil.removeForParent(this);
      }
      
      public function set userIDArr(param1:Array) : void
      {
         this._userIDArr = param1;
      }
      
      private function onItemClick(param1:MouseEvent) : void
      {
         var _loc3_:int = 0;
         var _loc2_:EmotionListItem = param1.currentTarget as EmotionListItem;
         if(this._userIDArr != null && this._userID == 0)
         {
            for each(_loc3_ in this._userIDArr)
            {
               MainManager.actorModel.execBehavior(new ChatBehavior("#" + _loc2_.id,_loc3_));
            }
         }
         else
         {
            MainManager.actorModel.execBehavior(new ChatBehavior("#" + _loc2_.id,this._userID));
         }
         this.hide();
      }
   }
}
