package com.robot.app2.control.starTreasure
{
   import com.protobuf.clientproto.cli_pb_team_game_proto_start_notice_out;
   import com.protobuf.clientproto.match_room_info;
   import com.protobuf.commonproto.PlayerInfo;
   import com.protobuf.commonproto.room_player_info;
   import com.robot.app.im.talk.TEmotionPanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.behavior.ChatBehavior;
   import com.robot.core.event.ChatEvent;
   import com.robot.core.info.ChatInfo;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MessageManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.uic.UIScrollBar;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.ui.Keyboard;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class StarTreasureTeamChatManger
   {
      
      private static var _mainUI:MovieClip;
      
      private static var _index:int = 0;
      
      private static var _inputTxt:TextField;
      
      private static var _wordTxt:TextField;
      
      private static var _otherUserIds:Array;
      
      private static var _isShowQuickReply:Boolean = false;
      
      private static var _isCanGetMyMsg:Boolean = false;
      
      private static var _emotionPanel:TEmotionPanel;
      
      private static var _exp1:MovieClip;
      
      private static var _exp2:MovieClip;
      
      private static var _exp3:MovieClip;
      
      private static var _outTime1:uint;
      
      private static var _outTime2:uint;
      
      private static var _outTime3:uint;
      
      private static var _expMcArr:Array = new Array();
      
      private static var _outTimeArr:Array = new Array();
      
      private static var _pointArr:Array = [new Point(72,200),new Point(285,200),new Point(498,200)];
      
      private static const EXP_MAX_TIME:int = 2000;
      
      private static var _roomInfo:match_room_info;
      
      private static var _teamInfo:cli_pb_team_game_proto_start_notice_out;
      
      private static var _scrollBar:UIScrollBar;
      
      private static var _curQuickReplyIndex:int = -1;
      
      private static var _quickReplyArr:Array = ["快点儿吧，我等到花儿也谢了~","还让不让我行动了~","你抽的数字也太好了！","不要走，决战到天亮@@","和你们合作真是太愉快了~~","下次再玩吧，我要走了！","11111","22222","33333","谢谢你~0~","交个朋友~0~","不如试试投票退出","干得漂亮！","我拒绝","我同意","老铁666"];
      
      private static var _type:int;
      
      private static var _isSend:Boolean = false;
       
      
      public function StarTreasureTeamChatManger()
      {
         super();
      }
      
      public static function setup(param1:MovieClip, param2:int) : void
      {
         _mainUI = param1;
         _type = param2;
         _inputTxt = _mainUI["writeTx"];
         _inputTxt.text = "";
         _inputTxt.maxChars = 130;
         _wordTxt = _mainUI["msgMc"]["readTxt"];
         _wordTxt.text = "";
         _inputTxt.text = "";
         _mainUI.addEventListener(MouseEvent.CLICK,onPanelClick);
         if(_type == 1)
         {
            _roomInfo = StarTreasureDataManger.roomInfo;
         }
         else
         {
            _teamInfo = StarTreasureDataManger.teamInfo;
         }
         update();
         _scrollBar = new UIScrollBar(_mainUI.quickReplyList.slider,_mainUI.quickReplyList.track,2,_mainUI.quickReplyList.upArrow,_mainUI.quickReplyList.downArrow,false);
         _scrollBar.wheelObject = _mainUI.txlist;
         _scrollBar.addEventListener(MouseEvent.MOUSE_MOVE,onScrollMove);
         _scrollBar.totalLength = Math.ceil(16 / 2);
         onScrollMove(null);
      }
      
      public static function set otherUserIds(param1:Array) : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         if(_type == 1)
         {
            _roomInfo = StarTreasureDataManger.roomInfo;
            CommonUI.setEnabled(_mainUI["exprssionBtn"],true,false);
         }
         else
         {
            _teamInfo = StarTreasureDataManger.teamInfo;
            CommonUI.setEnabled(_mainUI["exprssionBtn"],false,true);
         }
         for each(_loc2_ in _otherUserIds)
         {
            if(param1.indexOf(_loc2_) < 0)
            {
               _loc3_ = _otherUserIds.indexOf(_loc2_);
               _otherUserIds.splice(_loc3_,1);
               MessageManager.removeEventListener(ChatEvent.TALK + _loc2_.toString(),onData);
            }
         }
         if(_otherUserIds == null)
         {
            _otherUserIds = param1;
            for each(_loc4_ in param1)
            {
               MessageManager.addEventListener(ChatEvent.TALK + _loc4_.toString(),onData);
            }
         }
         else
         {
            for each(_loc5_ in param1)
            {
               if(_otherUserIds.indexOf(_loc5_) < 0)
               {
                  _otherUserIds.push(_loc5_);
                  MessageManager.addEventListener(ChatEvent.TALK + _loc5_.toString(),onData);
               }
            }
         }
         if(_otherUserIds.length == 0)
         {
            CommonUI.setEnabled(_mainUI["exprssionBtn"],false,true);
         }
      }
      
      public static function get otherUserIds() : Array
      {
         return _otherUserIds;
      }
      
      private static function initMsg() : void
      {
         var _loc2_:ChatInfo = null;
         var _loc1_:Array = MessageManager.getChatInfo(MainManager.actorInfo.userID);
         if(_loc1_ != null)
         {
            _wordTxt.text = "";
            for each(_loc2_ in _loc1_)
            {
               wordChange(_loc2_);
            }
            _wordTxt.scrollV = _wordTxt.maxScrollV;
         }
      }
      
      private static function wordChange(param1:ChatInfo) : void
      {
         var info:ChatInfo = param1;
         UserInfoManager.getInfo(info.senderID,function(param1:UserInfo):void
         {
            var _loc2_:MovieClip = null;
            var _loc3_:Array = null;
            var _loc4_:int = 0;
            var _loc5_:room_player_info = null;
            var _loc6_:int = 0;
            var _loc7_:PlayerInfo = null;
            if(info.msg.substr(0,1) == "#")
            {
               if(info.isRead)
               {
                  return;
               }
               info.isRead = true;
               _loc2_ = UIManager.getMovieClip("e" + info.msg.substring(1,info.msg.length));
               if(_loc2_)
               {
                  _loc2_.mouseChildren = false;
                  _loc2_.mouseEnabled = false;
                  if(_type == 1)
                  {
                     _loc3_ = _roomInfo.players;
                     _loc4_ = 0;
                     while(_loc4_ < _loc3_.length)
                     {
                        if((_loc5_ = _loc3_[_loc4_] as room_player_info).userid == info.senderID)
                        {
                           removeExp(_loc5_.headid - 1);
                           addExp(_loc2_,_loc5_.headid - 1);
                        }
                        _loc4_++;
                     }
                  }
                  else if(_type == 2)
                  {
                     _loc3_ = _teamInfo.playerinfos;
                     _loc6_ = 0;
                     while(_loc6_ < _loc3_.length)
                     {
                        if((_loc7_ = _loc3_[_loc6_] as PlayerInfo).userid == info.senderID)
                        {
                           removeExp(_loc3_.indexOf(_loc7_));
                           addExp(_loc2_,_loc3_.indexOf(_loc7_));
                        }
                        _loc6_++;
                     }
                  }
                  return;
               }
            }
            if(info.senderID == MainManager.actorInfo.userID)
            {
               if(_isCanGetMyMsg)
               {
                  TextFormatUtil.appSenderFormatText(_wordTxt,"我" + ": ",true);
                  TextFormatUtil.appDefaultFormatText(_wordTxt,info.msg + "\n",16777215);
                  _isCanGetMyMsg = false;
               }
            }
            else
            {
               TextFormatUtil.appSenderFormatText(_wordTxt,param1.nick + ": ",false);
               TextFormatUtil.appDefaultFormatText(_wordTxt,info.msg + "\n",16777215);
            }
            _wordTxt.scrollV = _wordTxt.maxScrollV;
            info.isRead = true;
         });
      }
      
      private static function onInputTxtClick(param1:MouseEvent) : void
      {
         _inputTxt.text = "";
         _curQuickReplyIndex = -1;
      }
      
      public static function onPanelClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         var _loc3_:int = int(KTool.getIndex(param1.target));
         var _loc4_:int = int(KTool.getIndex(param1.target.parent));
         var _loc5_:int = int(KTool.getIndex(param1.target.parent.parent));
         switch(_loc2_)
         {
            case "showMsgBtn":
               _isShowQuickReply = true;
               update();
               break;
            case "hideMsgBtn":
               _isShowQuickReply = false;
               update();
               break;
            case "sendBtn":
               if(otherUserIds.length == 0 && _inputTxt.text != "")
               {
                  onePeopleShowTx();
                  return;
               }
               if(_isShowQuickReply)
               {
                  if(_curQuickReplyIndex >= 0)
                  {
                     onSendMsg(_inputTxt.text);
                  }
                  else
                  {
                     Alarm2.show("请先选择你要发送的快捷用语！");
                  }
               }
               else
               {
                  onSendMsg(_inputTxt.text);
               }
               break;
            case "exprssionBtn":
               onEmotion();
               break;
            case "cheakBtn":
               _curQuickReplyIndex = _scrollBar.index * 2 + _loc4_;
               _inputTxt.text = _quickReplyArr[_curQuickReplyIndex];
               _isShowQuickReply = false;
               update();
         }
      }
      
      private static function onePeopleShowTx() : void
      {
         TextFormatUtil.appSenderFormatText(_wordTxt,"我" + ": ",true);
         TextFormatUtil.appDefaultFormatText(_wordTxt,_inputTxt.text + "\n",16777215);
         _wordTxt.scrollV = _wordTxt.maxScrollV;
      }
      
      private static function onEmotion() : void
      {
         if(_emotionPanel == null)
         {
            _emotionPanel = new TEmotionPanel(0,otherUserIds);
         }
         _emotionPanel.userIDArr = otherUserIds;
         if(DisplayUtil.hasParent(_emotionPanel))
         {
            _emotionPanel.hide();
         }
         else
         {
            _emotionPanel.show(_mainUI["exprssionBtn"]);
         }
      }
      
      private static function onSendMsg(param1:String) : void
      {
         var _loc2_:int = 0;
         for each(_loc2_ in otherUserIds)
         {
            MainManager.actorModel.execBehavior(new ChatBehavior(param1,_loc2_));
         }
         if(_curQuickReplyIndex < 0)
         {
            _inputTxt.text = "";
         }
         _isCanGetMyMsg = true;
      }
      
      private static function onKeyDown(param1:KeyboardEvent) : void
      {
         if(param1.keyCode == Keyboard.ENTER)
         {
            _isSend = true;
            _inputTxt.multiline = false;
            _inputTxt.removeEventListener(KeyboardEvent.KEY_DOWN,onKeyDown);
         }
      }
      
      private static function onKeyUp(param1:KeyboardEvent) : void
      {
         if(param1.keyCode == Keyboard.ENTER)
         {
            _inputTxt.multiline = true;
            _inputTxt.addEventListener(KeyboardEvent.KEY_DOWN,onKeyDown);
            if(!_isSend)
            {
               return;
            }
            _isSend = false;
            if(_inputTxt.text != "")
            {
               onSendMsg(_inputTxt.text);
            }
         }
      }
      
      private static function onData(param1:ChatEvent) : void
      {
         wordChange(param1.info);
      }
      
      public static function update() : void
      {
         _mainUI.quickReplyList.visible = _isShowQuickReply;
         _mainUI.btnMc.gotoAndStop(_isShowQuickReply ? 1 : 2);
      }
      
      private static function addExp(param1:MovieClip, param2:int) : void
      {
         var _expMC:MovieClip = null;
         var mc:MovieClip = param1;
         var index:int = param2;
         _expMcArr[index] = mc;
         _expMC = _expMcArr[index] as MovieClip;
         if(_expMcArr[index])
         {
            _expMC.x = _pointArr[index].x;
            _expMC.y = _pointArr[index].y;
            _expMC.scaleX = _expMC.scaleY = 3;
            _mainUI.addChild(_expMC);
            _outTimeArr[index] = setTimeout(function():void
            {
               DisplayUtil.removeForParent(_expMC);
               _expMC = null;
            },EXP_MAX_TIME);
         }
      }
      
      private static function removeExp(param1:int) : void
      {
         clearTimeout(_outTimeArr[param1]);
         var _loc2_:MovieClip = _expMcArr[param1] as MovieClip;
         if(_loc2_)
         {
            DisplayUtil.removeForParent(_loc2_);
            _loc2_ = null;
         }
      }
      
      private static function onScrollMove(param1:MouseEvent) : void
      {
         updatList();
      }
      
      private static function updatList() : void
      {
         var _loc2_:MovieClip = null;
         var _loc3_:int = 0;
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            _loc2_ = _mainUI.quickReplyList["mc_" + _loc1_];
            _loc2_.tx.mouseEnabled = false;
            _loc3_ = _scrollBar.index * 2 + _loc1_;
            if(_loc3_ < _quickReplyArr.length)
            {
               _loc2_.visible = true;
               _loc2_.tx.text = _quickReplyArr[_loc3_];
            }
            else
            {
               _loc2_.visible = false;
            }
            _loc1_++;
         }
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         _scrollBar.removeEventListener(MouseEvent.MOUSE_MOVE,onScrollMove);
         if(_mainUI != null)
         {
            _mainUI.removeEventListener(MouseEvent.CLICK,onPanelClick);
         }
         for each(_loc1_ in _otherUserIds)
         {
            MessageManager.removeEventListener(ChatEvent.TALK + _loc1_.toString(),onData);
         }
         _mainUI = null;
         _inputTxt = null;
         _wordTxt = null;
         _isShowQuickReply = false;
         _isCanGetMyMsg = false;
         _otherUserIds = null;
         _emotionPanel = null;
      }
   }
}
