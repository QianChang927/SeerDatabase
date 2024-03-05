package com.robot.app.im.ui
{
   import com.robot.app.im.talk.TalkPanelManager;
   import com.robot.app.user.UserInfoController;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.RelationManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import org.taomee.utils.DisplayUtil;
   
   public class IMListItem extends Sprite
   {
       
      
      protected var _info:UserInfo;
      
      private var _mainUI:Sprite;
      
      protected var _txt:TextField;
      
      protected var _headMc:Sprite;
      
      protected var _faceMc:MovieClip;
      
      protected var _nonoMc:Sprite;
      
      protected var _talkMc:SimpleButton;
      
      protected var _clickBtn:SimpleButton;
      
      protected var _bgMc:Sprite;
      
      public function IMListItem()
      {
         super();
         buttonMode = true;
         this._mainUI = this.getMainUI();
         this._txt = this._mainUI["txt"];
         this._headMc = this._mainUI["headMc"];
         this._faceMc = this._mainUI["faceMc"];
         this._talkMc = this._mainUI["talkMc"];
         this._clickBtn = this._mainUI["clickBtn"];
         this._bgMc = this._mainUI["bgMc"];
         this._nonoMc = this._mainUI["nonoMc"];
         this._mainUI.mouseEnabled = false;
         this._txt.mouseEnabled = false;
         this._headMc.mouseEnabled = false;
         this._headMc.visible = false;
         this._nonoMc.visible = false;
         this._talkMc.visible = false;
         this._faceMc.mouseEnabled = false;
         this._faceMc.visible = false;
         this._bgMc.mouseEnabled = false;
         this._bgMc.visible = false;
         addChild(this._mainUI);
      }
      
      protected function getMainUI() : Sprite
      {
         return UIManager.getSprite("IMListItem");
      }
      
      public function set info(param1:UserInfo) : void
      {
         this._info = param1;
         name = this._info.userID.toString();
         if(this._info.serverID)
         {
            this._headMc.visible = true;
            DisplayUtil.FillColor(this._headMc,this._info.color);
            this._txt.textColor = 0;
            if(this._info.vip)
            {
               this._nonoMc.visible = true;
            }
         }
         else
         {
            this._headMc.visible = false;
            this._nonoMc.visible = false;
            this._txt.textColor = 10066329;
         }
         if(RelationManager.isFriend(this._info.userID))
         {
            this._talkMc.visible = true;
            this._talkMc.addEventListener(MouseEvent.CLICK,this.onTalk);
         }
         this._faceMc.visible = true;
         this._clickBtn.addEventListener(MouseEvent.CLICK,this.onClick);
         addEventListener(MouseEvent.ROLL_OVER,this.onOver);
         addEventListener(MouseEvent.ROLL_OUT,this.onOut);
         if(!this._info.hasSimpleInfo)
         {
            this._txt.text = this._info.userID.toString();
            return;
         }
         this._txt.text = this._info.nick;
      }
      
      public function get info() : UserInfo
      {
         return this._info;
      }
      
      public function clear() : void
      {
         this._info = null;
         this._txt.text = "";
         this._headMc.visible = false;
         this._talkMc.visible = false;
         this._faceMc.visible = false;
         this._nonoMc.visible = false;
         this._clickBtn.removeEventListener(MouseEvent.CLICK,this.onClick);
         removeEventListener(MouseEvent.ROLL_OVER,this.onOver);
         removeEventListener(MouseEvent.ROLL_OUT,this.onOut);
         this._talkMc.removeEventListener(MouseEvent.CLICK,this.onTalk);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         UserInfoController.show(this._info.userID);
      }
      
      private function onOver(param1:MouseEvent) : void
      {
         this._bgMc.visible = true;
      }
      
      private function onOut(param1:MouseEvent) : void
      {
         this._bgMc.visible = false;
      }
      
      protected function onTalk(param1:MouseEvent) : void
      {
         TalkPanelManager.showTalkPanel(this._info.userID);
      }
   }
}
