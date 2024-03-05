package com.robot.app.im.ui
{
   import com.robot.core.config.xml.PlayerStatusInfo;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.UIManager;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.filters.GlowFilter;
   import flash.text.TextField;
   
   public class IMListStatusItem extends Sprite
   {
       
      
      private var _mainUI:Sprite;
      
      private var _info:UserInfo;
      
      private var _playId:uint;
      
      protected var _txt:TextField;
      
      protected var _clickBtn:SimpleButton;
      
      public function IMListStatusItem()
      {
         super();
         buttonMode = true;
         this._mainUI = this.getMainUI();
         this._txt = this._mainUI["txt"];
         this._clickBtn = this._mainUI["clickBtn"];
         addChild(this._mainUI);
      }
      
      protected function getMainUI() : Sprite
      {
         return UIManager.getSprite("IMListStatusItem");
      }
      
      public function setInfo(param1:UserInfo, param2:uint) : void
      {
         this._info = param1;
         if(this._info == null)
         {
            return;
         }
         if(param2 != 0)
         {
            this._playId = param2;
            this._txt.text = PlayerStatusInfo.getPlayName(param2) + "进行中...";
            this._txt.textColor = 16711680;
         }
         else
         {
            this._playId = param2;
            this._txt.text = "当前玩家正在休息中";
            this._txt.textColor = 3355647;
         }
         addEventListener(MouseEvent.ROLL_OVER,this.onOver);
         addEventListener(MouseEvent.ROLL_OUT,this.onOut);
         this._clickBtn.visible = false;
         this._clickBtn.mouseEnabled = false;
      }
      
      public function get info() : UserInfo
      {
         return this._info;
      }
      
      public function clear() : void
      {
         this._info = null;
         this._txt.text = "";
         this._clickBtn.visible = false;
         removeEventListener(MouseEvent.ROLL_OVER,this.onOver);
         removeEventListener(MouseEvent.ROLL_OUT,this.onOut);
      }
      
      private function onOver(param1:MouseEvent) : void
      {
         this.filters = [new GlowFilter(16776960,1,20,20,2,1,false,false)];
      }
      
      private function onOut(param1:MouseEvent) : void
      {
         this.filters = [];
      }
   }
}
