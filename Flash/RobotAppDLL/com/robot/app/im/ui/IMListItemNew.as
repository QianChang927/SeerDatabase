package com.robot.app.im.ui
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.im.IMController;
   import com.robot.app.im.IMStatusController;
   import com.robot.app.im.talk.TalkPanelManager;
   import com.robot.app.user.UserInfoController;
   import com.robot.core.config.xml.PlayerStatusInfo;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.filters.GlowFilter;
   import flash.text.TextField;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.effect.ColorFilter;
   import org.taomee.utils.DisplayUtil;
   
   public class IMListItemNew extends Sprite
   {
       
      
      protected var _info:UserInfo;
      
      private var _mainUI:Sprite;
      
      protected var _txt:TextField;
      
      protected var _headMc:Sprite;
      
      protected var _faceMc:Sprite;
      
      protected var _nonoMc:Sprite;
      
      protected var _serverTxt:TextField;
      
      protected var _talkMc:SimpleButton;
      
      protected var _clickBtn:SimpleButton;
      
      protected var _fightBtn:SimpleButton;
      
      protected var _playViewBtn:SimpleButton;
      
      private var _playId:uint = 0;
      
      private var _sto:uint;
      
      private var _itemStatu:com.robot.app.im.ui.IMListStatusItem;
      
      public function IMListItemNew()
      {
         super();
         buttonMode = true;
         this._mainUI = this.getMainUI();
         this._txt = this._mainUI["txt"];
         this._headMc = this._mainUI["headMc"];
         this._faceMc = this._mainUI["faceMc"];
         this._talkMc = this._mainUI["talkMc"];
         this._clickBtn = this._mainUI["clickBtn"];
         this._nonoMc = this._mainUI["nonoMc"];
         this._serverTxt = this._mainUI["server"];
         this._fightBtn = this._mainUI["fight"];
         this._playViewBtn = this._mainUI["playView"];
         this._mainUI.mouseEnabled = false;
         this._txt.mouseEnabled = false;
         this._headMc.mouseEnabled = false;
         this._headMc.visible = false;
         this._nonoMc.visible = false;
         this._talkMc.visible = false;
         this._faceMc.mouseEnabled = false;
         this._faceMc.visible = false;
         this._fightBtn.visible = false;
         this._playViewBtn.visible = false;
         addChild(this._mainUI);
      }
      
      protected function getMainUI() : Sprite
      {
         return UIManager.getSprite("IMListItemNew");
      }
      
      public function set info(param1:UserInfo) : void
      {
         this._info = param1;
         if(this._info == null)
         {
            return;
         }
         name = this._info.userID.toString();
         if(this._info.serverID)
         {
            if(!IMController._onlineIM)
            {
               IMController._onlineIM = true;
            }
            if(IMController.curTab == 5)
            {
               this._fightBtn.visible = true;
            }
            else
            {
               this._fightBtn.visible = false;
            }
            this._headMc.visible = true;
            DisplayUtil.FillColor(this._headMc,this._info.color);
            this._txt.textColor = 0;
            if(this._info.isVip)
            {
               this._nonoMc.visible = true;
               this._nonoMc.filters = null;
            }
            if(this._info.serverID == MainManager.serverID)
            {
               this._serverTxt.text = "同服";
            }
            else
            {
               this._serverTxt.text = this._info.serverID.toString();
            }
         }
         else
         {
            this._serverTxt.text = "";
            this._txt.filters = [];
            this._serverTxt.filters = [];
            this._fightBtn.visible = false;
            if(this._info.isVip)
            {
               this._nonoMc.visible = true;
               this._nonoMc.filters = [ColorFilter.setGrayscale()];
            }
            this._headMc.visible = false;
            this._nonoMc.visible = false;
            this._txt.textColor = 10066329;
         }
         this._talkMc.visible = true;
         this._talkMc.addEventListener(MouseEvent.CLICK,this.onTalk);
         this._fightBtn.addEventListener(MouseEvent.CLICK,this.onFight);
         this._faceMc.visible = true;
         this._clickBtn.addEventListener(MouseEvent.CLICK,this.onClick);
         if(this._info.serverID)
         {
            this._clickBtn.addEventListener(MouseEvent.MOUSE_OVER,this.onPlayView);
         }
         addEventListener(MouseEvent.ROLL_OVER,this.onOver);
         addEventListener(MouseEvent.ROLL_OUT,this.onOut);
         if(!this._info.hasSimpleInfo)
         {
            this._txt.text = this._info.userID.toString();
            return;
         }
         this._txt.text = this._info.nick;
      }
      
      private function onFight(param1:Event) : void
      {
         FightManager.fightWithPlayer(this._info);
      }
      
      private function onPlayView(param1:Event) : void
      {
         var e:Event = param1;
         if(this._info)
         {
            this._clickBtn.removeEventListener(MouseEvent.MOUSE_OVER,this.onPlayView);
            this._clickBtn.removeEventListener(MouseEvent.MOUSE_OUT,this.onCancelPlayView);
            IMStatusController.getCurrentStatus(this._info.userID,this._playId,function(param1:uint):void
            {
               _playId = param1;
               if(_itemStatu == null)
               {
                  _itemStatu = new com.robot.app.im.ui.IMListStatusItem();
               }
               if(param1 != 0)
               {
                  addChild(_itemStatu);
                  _itemStatu.setInfo(_info,_playId);
                  _itemStatu.mouseChildren = false;
                  _itemStatu.mouseEnabled = false;
                  _itemStatu.x = _playViewBtn.x - 140;
                  _itemStatu.y = _playViewBtn.y - 32;
                  _playViewBtn.visible = true;
                  _playViewBtn.addEventListener(MouseEvent.CLICK,onGotoPlay);
                  _clickBtn.addEventListener(MouseEvent.MOUSE_OVER,onPlayView);
                  _clickBtn.addEventListener(MouseEvent.MOUSE_OUT,onCancelPlayView);
               }
               else
               {
                  _playViewBtn.visible = false;
                  _playViewBtn.removeEventListener(MouseEvent.CLICK,onGotoPlay);
                  _clickBtn.addEventListener(MouseEvent.MOUSE_OVER,onPlayView);
                  _clickBtn.addEventListener(MouseEvent.MOUSE_OUT,onCancelPlayView);
               }
            });
         }
      }
      
      private function onGotoPlay(param1:Event) : void
      {
         var _loc2_:uint = uint(PlayerStatusInfo.getMapId(this._playId));
         if(_loc2_ != 0 && _loc2_ != MapManager.currentMap.id)
         {
            IMStatusController._jumpFromIMList = true;
            IMStatusController._jumpPlayId = this._playId;
            MapManager.changeMap(_loc2_);
         }
      }
      
      private function onCancelPlayView(param1:Event) : void
      {
         var e:Event = param1;
         this._itemStatu.clear();
         this._sto = setTimeout(function():void
         {
            _playViewBtn.visible = false;
         },3000);
         DisplayUtil.removeForParent(this._itemStatu);
      }
      
      public function get info() : UserInfo
      {
         return this._info;
      }
      
      public function clear() : void
      {
         this._info = null;
         if(this._itemStatu)
         {
            DisplayUtil.removeForParent(this._itemStatu);
            this._itemStatu = null;
         }
         this._txt.text = "";
         this._serverTxt.text = "";
         this._headMc.visible = false;
         this._talkMc.visible = false;
         this._faceMc.visible = false;
         this._nonoMc.visible = false;
         this._fightBtn.visible = false;
         this._playViewBtn.visible = false;
         this._clickBtn.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._clickBtn.removeEventListener(MouseEvent.MOUSE_OVER,this.onPlayView);
         this._clickBtn.removeEventListener(MouseEvent.MOUSE_OUT,this.onCancelPlayView);
         this._playViewBtn.removeEventListener(MouseEvent.CLICK,this.onGotoPlay);
         removeEventListener(MouseEvent.ROLL_OVER,this.onOver);
         removeEventListener(MouseEvent.ROLL_OUT,this.onOut);
         this._talkMc.removeEventListener(MouseEvent.CLICK,this.onTalk);
         clearTimeout(this._sto);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         UserInfoController.show(this._info.userID);
      }
      
      private function onOver(param1:MouseEvent) : void
      {
         this.filters = [new GlowFilter(16776960,1,20,20,2,1,false,false)];
      }
      
      private function onOut(param1:MouseEvent) : void
      {
         this.filters = [];
      }
      
      protected function onTalk(param1:MouseEvent) : void
      {
         TalkPanelManager.showTalkPanel(this._info.userID);
      }
   }
}
