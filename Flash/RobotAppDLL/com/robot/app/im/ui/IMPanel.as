package com.robot.app.im.ui
{
   import com.robot.app.im.IMController;
   import com.robot.app.im.IMStatusController;
   import com.robot.app.im.ui.tab.IIMTab;
   import com.robot.app.im.ui.tab.TabBlack;
   import com.robot.app.im.ui.tab.TabFight;
   import com.robot.app.im.ui.tab.TabFriend;
   import com.robot.app.im.ui.tab.TabOnline;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.popup.AddFriendPanel;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.uic.UIPanel;
   import com.robot.core.uic.UIScrollBar;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.ds.HashMap;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class IMPanel extends UIPanel
   {
      
      private static const LIST_LENGTH:int = 8;
       
      
      private var _titleMc:MovieClip;
      
      private var _txt:TextField;
      
      private var _addBtn:SimpleButton;
      
      private var _nonoBtn:SimpleButton;
      
      private var _tabFriend:MovieClip;
      
      private var _tabBlack:MovieClip;
      
      private var _tabNewly:MovieClip;
      
      private var _tabOnline:MovieClip;
      
      private var _tabFight:MovieClip;
      
      private var _tabIns:MovieClip;
      
      private var _tabList:HashMap;
      
      private var _currentTab:IIMTab;
      
      private var _listCon:Sprite;
      
      private var _listData:Array;
      
      private var _scrollBar:UIScrollBar;
      
      private var _dialogMc:MovieClip;
      
      private var p:com.robot.app.im.ui.MyInstructorPanel;
      
      public function IMPanel()
      {
         var _loc3_:IMListItemNew = null;
         this._listData = [];
         super(UIManager.getSprite("IMMC"));
         this._titleMc = _mainUI["titleMc"];
         this._txt = _mainUI["txt"];
         this._addBtn = _mainUI["addBtn"];
         this._nonoBtn = _mainUI["nonoBtn"];
         if(MainManager.actorInfo.vip == 1 || MainManager.actorInfo.vip == 3)
         {
            ToolTipManager.add(this._nonoBtn,"你是超能NoNo用户，可以拥有200个好友哦！");
         }
         else
         {
            ToolTipManager.add(this._nonoBtn,"拥有更多好友");
         }
         var _loc1_:Sprite = _mainUI["tabPanel"];
         this._tabFriend = _mainUI["tabFriend"];
         this._tabOnline = _mainUI["tabOnline"];
         this._tabBlack = _mainUI["tabBlack"];
         this._tabFight = _mainUI["tabFight"];
         this._tabIns = _mainUI["tabIns"];
         this._tabIns.buttonMode = true;
         this._titleMc.mouseEnabled = false;
         this._txt.mouseEnabled = false;
         this._scrollBar = new UIScrollBar(_mainUI["barBall"],_mainUI["barBg"],LIST_LENGTH,_mainUI["upBtn"],_mainUI["downBtn"]);
         this._scrollBar.wheelObject = this;
         this._listCon = new Sprite();
         this._listCon.x = 22;
         this._listCon.y = 60;
         _mainUI.addChild(this._listCon);
         var _loc2_:int = 0;
         while(_loc2_ < LIST_LENGTH)
         {
            _loc3_ = new IMListItemNew();
            _loc3_.y = _loc3_.height * _loc2_;
            _loc3_.x = 4;
            this._listCon.addChild(_loc3_);
            _loc2_++;
         }
         this._tabList = new HashMap();
         this._tabList.add(this._tabFriend,new TabFriend(1,this._tabFriend,this._listCon,this.refreshItem));
         this._tabList.add(this._tabOnline,new TabOnline(3,this._tabOnline,this._listCon,this.refreshItem));
         this._tabList.add(this._tabBlack,new TabBlack(4,this._tabBlack,this._listCon,this.refreshItem));
         this._tabList.add(this._tabFight,new TabFight(5,this._tabFight,this._listCon,this.refreshFightItem));
         this._currentTab = this._tabList.getValue(this._tabFriend);
         this._titleMc.gotoAndStop(this._currentTab.index);
      }
      
      public function show() : void
      {
         var t1:uint = 0;
         IMController._onlineIM = false;
         _show();
         LevelManager.appLevel.addChild(this);
         DisplayUtil.align(this,null,AlignType.MIDDLE_RIGHT,new Point(-10,0));
         this._currentTab.show();
         IMStatusController.setup();
         if(this._titleMc)
         {
            DisplayUtil.removeForParent(this._titleMc);
         }
         addChild(this._titleMc);
         if(!BufferRecordManager.getState(MainManager.actorInfo,447))
         {
            t1 = setTimeout(function():void
            {
               var t2:* = undefined;
               clearTimeout(t1);
               if(IMController._onlineIM)
               {
                  _dialogMc = UIManager.getMovieClip("DialogMC");
                  _dialogMc.buttonMode = true;
                  _dialogMc.x = x + 155;
                  _dialogMc.y = y + 7;
                  LevelManager.appLevel.addChild(_dialogMc);
                  _dialogMc.addEventListener(MouseEvent.CLICK,onDialogMcClick);
                  t2 = setTimeout(function():void
                  {
                     clearTimeout(t2);
                     if(_dialogMc)
                     {
                        _dialogMc.removeEventListener(MouseEvent.CLICK,onDialogMcClick);
                        BufferRecordManager.setState(MainManager.actorInfo,447,true,function():void
                        {
                           DisplayUtil.removeForParent(_dialogMc);
                           _dialogMc = null;
                        });
                     }
                  },4000);
               }
            },1000);
         }
      }
      
      private function onDialogMcClick(param1:Event) : void
      {
         var e:Event = param1;
         this._dialogMc.removeEventListener(MouseEvent.CLICK,this.onDialogMcClick);
         BufferRecordManager.setState(MainManager.actorInfo,447,true,function():void
         {
            if(_dialogMc)
            {
               DisplayUtil.removeForParent(_dialogMc);
               _dialogMc = null;
            }
         });
      }
      
      override public function hide() : void
      {
         super.hide();
         this._currentTab.hide();
         IMStatusController.destroy();
         if(this._titleMc)
         {
            DisplayUtil.removeForParent(this._titleMc);
         }
         if(this._dialogMc)
         {
            DisplayUtil.removeForParent(this._dialogMc);
            this._dialogMc = null;
         }
         this.hideIns();
      }
      
      override public function destroy() : void
      {
         super.destroy();
         this._titleMc = null;
         this._txt = null;
         this._addBtn = null;
         this._nonoBtn = null;
         this._listCon = null;
         this._listData = null;
         this._tabList = null;
         this._currentTab = null;
         this._scrollBar.destroy();
         this._scrollBar = null;
      }
      
      override protected function addEvent() : void
      {
         super.addEvent();
         this._addBtn.addEventListener(MouseEvent.CLICK,this.onAddFriend);
         if(MainManager.actorInfo.vip == 2 || MainManager.actorInfo.vip == 0)
         {
            this._nonoBtn.addEventListener(MouseEvent.CLICK,this.onNonoClick);
         }
         this._scrollBar.addEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
         this._tabFriend.addEventListener(MouseEvent.CLICK,this.onTabClick);
         this._tabBlack.addEventListener(MouseEvent.CLICK,this.onTabClick);
         this._tabOnline.addEventListener(MouseEvent.CLICK,this.onTabClick);
         this._tabFight.addEventListener(MouseEvent.CLICK,this.onTabClick);
         this._tabIns.addEventListener(MouseEvent.CLICK,this.onInsClick);
         ToolTipManager.add(this._addBtn,"寻找好友");
         ToolTipManager.add(this._tabFriend,"我的好友");
         ToolTipManager.add(this._tabBlack,"黑名单");
         ToolTipManager.add(this._tabOnline,"在线列表");
         ToolTipManager.add(this._tabFight,"战斗列表");
         ToolTipManager.add(this._tabIns,"教官/学员");
      }
      
      override protected function removeEvent() : void
      {
         super.removeEvent();
         this._addBtn.removeEventListener(MouseEvent.CLICK,this.onAddFriend);
         this._nonoBtn.removeEventListener(MouseEvent.CLICK,this.onNonoClick);
         this._scrollBar.removeEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
         this._tabFriend.removeEventListener(MouseEvent.CLICK,this.onTabClick);
         this._tabBlack.removeEventListener(MouseEvent.CLICK,this.onTabClick);
         this._tabOnline.removeEventListener(MouseEvent.CLICK,this.onTabClick);
         this._tabIns.removeEventListener(MouseEvent.CLICK,this.onInsClick);
         if(this._dialogMc)
         {
            this._dialogMc.removeEventListener(MouseEvent.CLICK,this.onDialogMcClick);
         }
         ToolTipManager.remove(this._addBtn);
         ToolTipManager.remove(this._nonoBtn);
         ToolTipManager.remove(this._tabFriend);
         ToolTipManager.remove(this._tabBlack);
         ToolTipManager.remove(this._tabOnline);
         ToolTipManager.remove(this._tabFight);
         ToolTipManager.remove(this._tabIns);
      }
      
      private function refreshItem(param1:Array, param2:int) : void
      {
         var _loc7_:IMListItemNew = null;
         var _loc8_:UserInfo = null;
         var _loc9_:IMListItemNew = null;
         var _loc3_:int = 0;
         while(_loc3_ < LIST_LENGTH)
         {
            (_loc7_ = this._listCon.getChildAt(_loc3_) as IMListItemNew).mouseChildren = false;
            _loc7_.mouseEnabled = false;
            _loc7_.clear();
            _loc3_++;
         }
         var _loc4_:int = int(param1.length);
         this._listData = param1;
         this._scrollBar.totalLength = _loc4_;
         this._txt.text = "(" + _loc4_.toString() + " / " + param2.toString() + ")";
         var _loc5_:int = Math.min(LIST_LENGTH,_loc4_);
         var _loc6_:int = 0;
         while(_loc6_ < _loc5_)
         {
            _loc8_ = this._listData[_loc6_ + this._scrollBar.index] as UserInfo;
            (_loc9_ = this._listCon.getChildAt(_loc6_) as IMListItemNew).info = _loc8_;
            _loc9_.mouseChildren = true;
            _loc9_.mouseEnabled = true;
            _loc6_++;
         }
      }
      
      private function refreshFightItem(param1:Array, param2:int) : void
      {
         var _loc7_:IMListItemNew = null;
         var _loc8_:UserInfo = null;
         var _loc9_:Object = null;
         var _loc10_:IMListItemNew = null;
         var _loc3_:int = 0;
         while(_loc3_ < LIST_LENGTH)
         {
            (_loc7_ = this._listCon.getChildAt(_loc3_) as IMListItemNew).mouseChildren = false;
            _loc7_.mouseEnabled = false;
            _loc7_.clear();
            _loc3_++;
         }
         var _loc4_:int = int(param1.length);
         this._listData = param1;
         this._scrollBar.totalLength = _loc4_;
         this._txt.text = "(" + _loc4_.toString() + " / " + param2.toString() + ")";
         var _loc5_:int = Math.min(LIST_LENGTH,_loc4_);
         var _loc6_:int = 0;
         while(_loc6_ < _loc5_)
         {
            _loc8_ = new UserInfo();
            _loc9_ = this._listData[_loc6_ + this._scrollBar.index] as Object;
            _loc8_.userID = _loc9_["userID"];
            _loc8_.nick = _loc9_["nick"];
            _loc8_.clothes = _loc9_["cloths"];
            _loc8_.serverID = _loc9_["serverID"];
            _loc8_.hasSimpleInfo = true;
            (_loc10_ = this._listCon.getChildAt(_loc6_) as IMListItemNew).info = _loc8_;
            _loc10_.mouseChildren = true;
            _loc10_.mouseEnabled = true;
            _loc6_++;
         }
      }
      
      private function onTabClick(param1:MouseEvent) : void
      {
         if(this._dialogMc)
         {
            DisplayUtil.removeForParent(this._dialogMc);
            this._dialogMc = null;
         }
         this._currentTab.hide();
         this._currentTab = this._tabList.getValue(param1.currentTarget);
         IMController.curTab = this._currentTab.index;
         this._titleMc.gotoAndStop(this._currentTab.index);
         this._currentTab.show();
         this.hideIns();
      }
      
      private function onInsClick(param1:MouseEvent) : void
      {
         if(this.p)
         {
            return;
         }
         this.p = new com.robot.app.im.ui.MyInstructorPanel();
         this.p.x = x;
         this.p.y = y;
         LevelManager.appLevel.addChild(this.p);
         var _loc2_:int = this._titleMc.x;
         var _loc3_:int = this._titleMc.y;
         DisplayUtil.removeForParent(this._titleMc);
         this._titleMc.x = _loc2_;
         this._titleMc.y = _loc3_;
         this.p.addChild(this._titleMc);
         this._titleMc.gotoAndStop(6);
         SocketConnection.send(1022,86050294);
      }
      
      private function hideIns() : void
      {
         if(this.p)
         {
            DisplayUtil.removeForParent(this.p);
            this.p.destroy();
            this.p = null;
         }
      }
      
      private function onScrollMove(param1:MouseEvent) : void
      {
         var _loc2_:int = 0;
         var _loc3_:IMListItemNew = null;
         var _loc4_:Object = null;
         var _loc5_:UserInfo = null;
         var _loc6_:UserInfo = null;
         if(this._titleMc.currentFrame == 5)
         {
            _loc2_ = 0;
            while(_loc2_ < LIST_LENGTH)
            {
               _loc4_ = this._listData[_loc2_ + this._scrollBar.index];
               (_loc5_ = new UserInfo()).userID = _loc4_["userID"];
               _loc5_.nick = _loc4_["nick"];
               _loc5_.clothes = _loc4_["cloths"];
               _loc5_.serverID = _loc4_["serverID"];
               _loc3_ = this._listCon.getChildAt(_loc2_) as IMListItemNew;
               _loc3_.clear();
               _loc3_.info = _loc5_;
               _loc2_++;
            }
         }
         else
         {
            _loc2_ = 0;
            while(_loc2_ < LIST_LENGTH)
            {
               _loc6_ = this._listData[_loc2_ + this._scrollBar.index] as UserInfo;
               _loc3_ = this._listCon.getChildAt(_loc2_) as IMListItemNew;
               _loc3_.clear();
               _loc3_.info = _loc6_;
               _loc2_++;
            }
         }
      }
      
      private function onAddFriend(param1:MouseEvent) : void
      {
         AddFriendPanel.show();
      }
      
      private function onNonoClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         Alert.show("必须拥有" + TextFormatUtil.getRedTxt("超能NONO") + "才能提升好友数量上限！想立刻开通吗？",function():void
         {
            LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
         });
      }
   }
}
