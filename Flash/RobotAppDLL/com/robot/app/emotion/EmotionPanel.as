package com.robot.app.emotion
{
   import com.robot.app.action.ActorActionManager;
   import com.robot.core.behavior.ChatBehavior;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class EmotionPanel extends Sprite
   {
       
      
      private var _panel:Sprite;
      
      public function EmotionPanel()
      {
         var _loc2_:EmotionListItem = null;
         super();
         this._panel = UIManager.getSprite("emotionPanel");
         addChild(this._panel);
         var _loc1_:int = 0;
         while(_loc1_ < 23)
         {
            _loc2_ = new EmotionListItem(_loc1_);
            _loc2_.x = 4 + (_loc2_.width + 2) * int(_loc1_ % 4);
            _loc2_.y = 2 + (_loc2_.height + 2) * int(_loc1_ / 4);
            _loc2_.addEventListener(MouseEvent.CLICK,this.onItemClick);
            addChild(_loc2_);
            _loc1_++;
         }
         ActorActionManager.showMenu(this._panel as MovieClip);
      }
      
      public function show() : void
      {
         x = 55;
         y = 169.65;
         LevelManager.toolsLevel.addChild(this);
      }
      
      private function stageClick(param1:MouseEvent) : void
      {
         if(hitTestPoint(MainManager.getStage().mouseX,MainManager.getStage().mouseY,true) == false)
         {
            this.hide();
         }
      }
      
      public function hide() : void
      {
         DisplayUtil.removeForParent(this,false);
         MainManager.getStage().removeEventListener(MouseEvent.CLICK,this.stageClick);
      }
      
      private function onItemClick(param1:MouseEvent) : void
      {
         var _loc2_:EmotionListItem = param1.currentTarget as EmotionListItem;
         MainManager.actorModel.execBehavior(new ChatBehavior("$" + _loc2_.id));
         this.hide();
      }
   }
}
