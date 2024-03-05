package com.robot.app.popup
{
   import com.robot.core.info.UserInfo;
   import org.taomee.utils.DisplayUtil;
   
   public class FollowPanel
   {
      
      private static var _instance:FollowPanelImpl;
       
      
      public function FollowPanel()
      {
         super();
      }
      
      private static function get instance() : FollowPanelImpl
      {
         if(_instance == null)
         {
            _instance = new FollowPanelImpl();
         }
         return _instance;
      }
      
      public static function show(param1:UserInfo) : void
      {
         if(DisplayUtil.hasParent(instance))
         {
            instance.destroy();
         }
         else
         {
            instance.show(param1);
         }
      }
   }
}

import com.robot.app.linkManager.LinkToUrlManager;
import com.robot.app.superParty.SPConfig;
import com.robot.core.CommandID;
import com.robot.core.config.xml.MapXMLInfo;
import com.robot.core.info.UserInfo;
import com.robot.core.manager.LevelManager;
import com.robot.core.manager.MainManager;
import com.robot.core.manager.MapManager;
import com.robot.core.manager.UIManager;
import com.robot.core.manager.map.config.MapConfig;
import com.robot.core.net.SocketConnection;
import com.robot.core.ui.alert.Alarm;
import com.robot.core.ui.alert.Alert;
import com.robot.core.utils.TextFormatUtil;
import flash.display.MovieClip;
import flash.display.SimpleButton;
import flash.display.Sprite;
import flash.events.MouseEvent;
import flash.text.TextField;
import org.taomee.manager.ToolTipManager;
import org.taomee.utils.AlignType;
import org.taomee.utils.DisplayUtil;

class FollowPanelImpl extends Sprite
{
    
   
   private var _info:UserInfo;
   
   private var _mainUI:MovieClip;
   
   private var _txt:TextField;
   
   private var _followBtn:SimpleButton;
   
   private var _inviteBtn:SimpleButton;
   
   private var _dragBtn:SimpleButton;
   
   private var _closeBtn:SimpleButton;
   
   private var _limitMap:Array;
   
   public function FollowPanelImpl()
   {
      super();
      this._mainUI = UIManager.getMovieClip("Follow_Panel");
      this._followBtn = this._mainUI["outBtn"];
      this._inviteBtn = this._mainUI["inBtn"];
      this._dragBtn = this._mainUI["dragBtn"];
      this._txt = this._mainUI["txt"];
      this._closeBtn = this._mainUI["closeBtn"];
      addChild(this._mainUI);
   }
   
   public function show(param1:UserInfo) : void
   {
      this._info = param1;
      var _loc2_:* = "";
      if(this._info.mapID > MapManager.ID_MAX)
      {
         _loc2_ = this._info.nick + "的基地";
      }
      else
      {
         _loc2_ = String(MapConfig.getName(this._info.mapID));
      }
      this._txt.htmlText = "你的好友" + this._info.nick + "(" + this._info.userID + ")目前正在" + TextFormatUtil.getRedTxt(_loc2_) + "。";
      LevelManager.closeMouseEvent();
      LevelManager.appLevel.addChild(this);
      DisplayUtil.align(this,null,AlignType.MIDDLE_CENTER);
      this._followBtn.addEventListener(MouseEvent.CLICK,this.onFollow);
      this._inviteBtn.addEventListener(MouseEvent.CLICK,this.onInvite);
      this._dragBtn.addEventListener(MouseEvent.MOUSE_DOWN,this.onDragDown);
      this._dragBtn.addEventListener(MouseEvent.MOUSE_UP,this.onDragUp);
      this._closeBtn.addEventListener(MouseEvent.CLICK,this.onClose);
      ToolTipManager.add(this._followBtn,"前往那里");
      ToolTipManager.add(this._inviteBtn,"邀请过来");
      this._limitMap = SPConfig.allIdA.slice();
      this._limitMap.push(104,318,401,403,483);
   }
   
   public function destroy() : void
   {
      this._followBtn.removeEventListener(MouseEvent.CLICK,this.onFollow);
      this._inviteBtn.removeEventListener(MouseEvent.CLICK,this.onInvite);
      this._dragBtn.removeEventListener(MouseEvent.MOUSE_DOWN,this.onDragDown);
      this._dragBtn.removeEventListener(MouseEvent.MOUSE_UP,this.onDragUp);
      this._closeBtn.removeEventListener(MouseEvent.CLICK,this.onClose);
      ToolTipManager.remove(this._followBtn);
      ToolTipManager.remove(this._inviteBtn);
      DisplayUtil.removeForParent(this);
      LevelManager.openMouseEvent();
   }
   
   private function onDragDown(param1:MouseEvent) : void
   {
      startDrag();
   }
   
   private function onDragUp(param1:MouseEvent) : void
   {
      stopDrag();
   }
   
   private function onClose(param1:MouseEvent) : void
   {
      this.destroy();
   }
   
   private function onFollow(param1:MouseEvent) : void
   {
      var e:MouseEvent = param1;
      if(!MainManager.actorInfo.isVip && (this._info.mapID == 355 || this._info.mapID == 110 || this._info.mapID == 505 || this._info.mapID == 425 || this._info.mapID == 432 || this._info.mapID == 52 || this._info.mapID == 316 || this._info.mapID == 56 || this._info.mapID == 313 || this._info.mapID == 64 || this._info.mapID == 323 || this._info.mapID == 400 || this._info.mapID == 329 || this._info.mapID == 13))
      {
         Alert.show("您的好友所在的地图只有超能NoNo可以进入，是否需要立即开通超能NoNo",function():void
         {
            LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
         });
         return;
      }
      if(this._info.mapID == 1040)
      {
         Alarm.show("您的好友正在挑战苍魂青龙，这个地图您不可以直接进入哦！");
         return;
      }
      if(this._info.mapID == 1047)
      {
         Alarm.show("您的好友正在挑战天尊白虎，这个地图您不可以直接进入哦！");
         return;
      }
      if(this._info.mapID == 1066)
      {
         Alarm.show("您的好友正在挑战炽凰朱雀，这个地图您不可以直接进入哦！");
         return;
      }
      if(this._limitMap.indexOf(this._info.mapID) == -1 && MapXMLInfo.getIsLocal(MainManager.actorInfo.mapID) == false && MapXMLInfo.getIsLocal(this._info.mapID) == false)
      {
         MapManager.changeMap(this._info.mapID);
      }
      else
      {
         Alarm.show("你不可以通过好友追踪前往那里哦！");
      }
      this.destroy();
   }
   
   private function onInvite(param1:MouseEvent) : void
   {
      if(this._info.userID > 50000 && this._info.userID < 2000000000)
      {
         if(MainManager.actorInfo.mapID == 1040)
         {
            Alarm.show("您正在挑战苍魂青龙，不可以邀请好友来这里哦！");
            return;
         }
         if(MainManager.actorInfo.mapID == 1047)
         {
            Alarm.show("您正在挑战天尊白虎，不可以邀请好友来这里哦！");
            return;
         }
         if(MainManager.actorInfo.mapID == 1066)
         {
            Alarm.show("您正在挑战炽凰朱雀，不可以邀请好友来这里哦！");
            return;
         }
         if(this._limitMap.indexOf(MainManager.actorInfo.mapID) == -1 && MapXMLInfo.getIsLocal(MainManager.actorInfo.mapID) == false && MapXMLInfo.getIsLocal(this._info.mapID) == false)
         {
            SocketConnection.send(CommandID.REQUEST_OUT,this._info.userID);
         }
         else
         {
            Alarm.show("你不可以邀请好友来这里哦！");
         }
      }
      this.destroy();
   }
}
