package com.robot.core.manager
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.ChatInfo;
   import com.robot.core.info.NewChatInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.chat.ChatPanel;
   import com.robot.core.ui.chat.ChatSetPanel;
   import com.robot.core.ui.chat.SchatPanel;
   import flash.display.MovieClip;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class ChatManager
   {
      
      private static var _instance:com.robot.core.manager.ChatManager;
      
      public static var RECEIVE_NEW_INFO:String = "receive_new_info";
      
      public static var PCHAT_NAME_CLICK:String = "pchat_name_click";
       
      
      public var allowStranger:Boolean = true;
      
      public var showSysInfoNote:Boolean;
      
      public var showBattleTeamInfoNote:Boolean;
      
      public var showFWindow:Boolean;
      
      public var allChat:Array;
      
      public var MAXNUM:int = 50;
      
      public var _showType:int;
      
      public var showBig:Boolean;
      
      private var chat0:Array;
      
      private var chat1:Array;
      
      private var chat2:Array;
      
      private var chat3:Array;
      
      private var chatPanel:ChatPanel;
      
      private var sChatPanel:SchatPanel;
      
      private var setPanel:ChatSetPanel;
      
      public function ChatManager()
      {
         super();
         this.allChat = [];
         this.chat0 = [];
         this.chat1 = [];
         this.chat2 = [];
         this.chat3 = [];
         var _loc1_:Array = this.getPchatUserIds();
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_.length)
         {
            this.chat3 = this.chat3.concat(this.getPchatInfos(int(_loc1_[_loc2_])));
            _loc2_++;
         }
         SocketConnection.addCmdListener(47341,this.chatInfoReceive);
         SocketConnection.send(47342);
         this.getChatSet();
      }
      
      public static function setup() : void
      {
         getinstance().showSchatPanel(true);
      }
      
      public static function getinstance() : com.robot.core.manager.ChatManager
      {
         if(_instance == null)
         {
            _instance = new com.robot.core.manager.ChatManager();
         }
         return _instance;
      }
      
      public function showChatPanel(param1:Boolean) : void
      {
         if(param1)
         {
            ModuleManager.hideModule(ClientConfig.getModule("NewSeerFriendMainPanel"));
            if(!this.chatPanel)
            {
               this.chatPanel = new ChatPanel();
            }
            this.chatPanel.visible = true;
            this.chatPanel.x = 185;
            this.chatPanel.y = 75;
            LevelManager.topLevel.addChild(this.chatPanel);
            if(this.sChatPanel)
            {
               this.sChatPanel.hideState = true;
            }
         }
         else if(this.chatPanel)
         {
            this.chatPanel.visible = false;
            if(this.chatPanel.parent)
            {
               this.chatPanel.parent.removeChild(this.chatPanel);
            }
         }
      }
      
      public function hideSchat() : void
      {
         if(this.sChatPanel)
         {
            this.sChatPanel.hideState = true;
         }
      }
      
      private function showSchatPanel(param1:Boolean) : void
      {
         if(param1)
         {
            if(!this.sChatPanel)
            {
               this.sChatPanel = new SchatPanel();
               this.sChatPanel.y = MainManager.getStageHeight() - this.sChatPanel.height;
            }
            this.sChatPanel.visible = false;
            LevelManager.toolsLevel.addChild(this.sChatPanel);
         }
         else if(this.sChatPanel)
         {
            this.sChatPanel.visible = false;
            if(this.sChatPanel.parent)
            {
               this.sChatPanel.parent.removeChild(this.sChatPanel);
            }
         }
      }
      
      public function showSetPanel(param1:Boolean) : void
      {
         if(param1)
         {
            if(!this.setPanel)
            {
               this.setPanel = new ChatSetPanel();
            }
            this.setPanel.visible = true;
            LevelManager.topLevel.addChild(this.setPanel);
         }
         else if(this.setPanel)
         {
            this.setPanel.visible = false;
            if(this.setPanel.parent)
            {
               this.setPanel.parent.removeChild(this.setPanel);
            }
         }
      }
      
      public function get showType() : int
      {
         return this._showType;
      }
      
      public function set showType(param1:int) : void
      {
         this._showType = param1;
      }
      
      public function savePChat(param1:int, param2:NewChatInfo) : void
      {
         var _loc4_:Object = null;
         var _loc3_:String = this.getpchat(param1);
         if(_loc3_ != "" && _loc3_ != null)
         {
            (_loc4_ = JSON.parse(_loc3_))["chats"].push(param2);
         }
         else
         {
            (_loc4_ = {})["chats"] = [param2];
         }
         if(_loc4_["chats"].length > 100)
         {
            _loc4_["chats"].shift();
         }
         var _loc5_:String = JSON.stringify(_loc4_);
         this.setItem("chat_" + MainManager.actorID + "_" + param1,_loc5_);
         this.savePchatUsers(param1);
      }
      
      private function setItem(param1:String, param2:String) : void
      {
         var _loc3_:SharedObject = SOManager.getUserSO("key");
         _loc3_.data["value"] = param2;
         _loc3_.flush();
      }
      
      private function getItem(param1:String) : String
      {
         var _loc2_:SharedObject = SOManager.getUserSO(param1);
         return String(_loc2_.data["value"]);
      }
      
      public function removePchat(param1:int) : void
      {
         var _loc3_:Array = null;
         this.setItem("chat_" + MainManager.actorID + "_" + param1,null);
         var _loc2_:String = this.getPchatUsers();
         if(_loc2_ != "" && _loc2_ != null && _loc2_ != "undefined")
         {
            _loc3_ = _loc2_.split("_");
            if(_loc3_.indexOf(param1.toString()) != -1)
            {
               _loc3_.splice(_loc3_.indexOf(param1.toString()),1);
            }
            _loc2_ = _loc3_.join("_");
            this.setItem("chatUsers",_loc2_);
         }
      }
      
      public function getpchat(param1:int) : String
      {
         var _loc2_:SharedObject = SOManager.getUserSO("chat_" + MainManager.actorID + "_" + param1);
         return _loc2_.data as String;
      }
      
      public function getPchatInfos(param1:int) : Array
      {
         var _loc4_:Object = null;
         var _loc2_:SharedObject = SOManager.getUserSO("chat_" + MainManager.actorID + "_" + param1);
         var _loc3_:String = _loc2_.data as String;
         if(_loc3_ != "" && _loc3_ != null && _loc3_ != "undefined")
         {
            return (_loc4_ = JSON.parse(_loc3_))["chats"];
         }
         return [];
      }
      
      public function getPchatUserIds() : Array
      {
         var _loc1_:String = this.getItem("chatUsers");
         if(_loc1_ != "" && _loc1_ != null && _loc1_ != "undefined")
         {
            return _loc1_.split("_");
         }
         return [];
      }
      
      public function getPchatUsers() : String
      {
         return this.getItem("chatUsers");
      }
      
      public function savePchatUsers(param1:int) : void
      {
         var _loc3_:Array = null;
         var _loc2_:String = this.getPchatUsers();
         if(_loc2_ != "" && _loc2_ != null && _loc2_ != "undefined")
         {
            _loc3_ = _loc2_.split("_");
            if(_loc3_.indexOf(param1.toString()) == -1)
            {
               _loc3_.push(param1.toString());
            }
            _loc2_ = _loc3_.join("_");
         }
         else
         {
            _loc2_ = param1.toString();
         }
         this.setItem("chatUsers",_loc2_);
      }
      
      private function chatInfoReceive(param1:SocketEvent) : void
      {
         var _loc5_:ChatInfo = null;
         var _loc2_:NewChatInfo = new NewChatInfo(param1.data as ByteArray);
         var _loc3_:Array = [this.showSysInfoNote,true,this.showBattleTeamInfoNote,this.allowStranger,true];
         var _loc4_:int;
         if((_loc4_ = _loc2_.type) == 5)
         {
            _loc4_ = 2;
         }
         if(_loc3_[_loc2_.type - 1])
         {
            this["chat" + (_loc4_ - 1)].push(_loc2_);
            if(_loc4_ == 4)
            {
               if(_loc2_.senderID == MainManager.actorID)
               {
                  this.savePChat(_loc2_.toID,_loc2_);
               }
               else
               {
                  this.savePChat(_loc2_.senderID,_loc2_);
               }
            }
            this.allChat.push(_loc2_);
         }
         if(this["chat" + (_loc4_ - 1)].length > this.MAXNUM && _loc4_ != 4)
         {
            this["chat" + (_loc4_ - 1)].shift();
         }
         if(_loc2_.type == 4 && _loc2_.senderID != MainManager.actorID)
         {
            (_loc5_ = new ChatInfo(null)).senderID = _loc2_.senderID;
            _loc5_.toID = _loc2_.toID;
            _loc5_.msg = _loc2_.msg;
            _loc5_.senderNicName = _loc2_.senderNicName;
            MessageManager.addChatInfo(_loc5_);
         }
         EventManager.dispatchEvent(new DynamicEvent(com.robot.core.manager.ChatManager.RECEIVE_NEW_INFO,_loc2_));
      }
      
      public function showPchat(param1:int, param2:String) : void
      {
         this.showChatPanel(true);
         this.chatPanel.showPchat(param1,param2);
      }
      
      public function showChatPanelToTab(param1:int) : void
      {
         this.showChatPanel(true);
         this.chatPanel.gotoTab(param1);
      }
      
      public function getContent(param1:int = 0, param2:Boolean = false) : Array
      {
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         if(param2)
         {
            return this.allChat.concat();
         }
         if(this.showType == 4)
         {
            if(param1 != 0)
            {
               _loc3_ = [];
               _loc4_ = 0;
               while(_loc4_ < this.chat3.length)
               {
                  if(this.chat3[_loc4_]["senderID"] == param1 || this.chat3[_loc4_]["toID"] == param1)
                  {
                     _loc3_.push(this.chat3[_loc4_]);
                  }
                  _loc4_++;
               }
               return _loc3_.concat();
            }
            return [];
         }
         if(this.showType == 0)
         {
            return this.allChat.concat();
         }
         return this["chat" + (this.showType - 1)].concat();
      }
      
      public function chatSet(param1:Boolean, param2:Boolean, param3:Boolean, param4:Boolean) : void
      {
         this.allowStranger = param1;
         this.showSysInfoNote = param2;
         this.showBattleTeamInfoNote = param3;
         this.showFWindow = param4;
         this.saveShatSet();
         if(!this.showFWindow)
         {
            this.hideChatIcon();
         }
      }
      
      private function getChatSet() : void
      {
         var _loc2_:Array = null;
         var _loc1_:String = this.getItem("chatSet");
         if(_loc1_ == "" || _loc1_ == null || _loc1_ == "undefined")
         {
            this.allowStranger = true;
            this.showSysInfoNote = true;
            this.showBattleTeamInfoNote = true;
            this.showFWindow = false;
         }
         else
         {
            _loc2_ = _loc1_.split("_");
            this.allowStranger = _loc2_[0] == "1";
            this.showSysInfoNote = _loc2_[1] == "1";
            this.showBattleTeamInfoNote = _loc2_[2] == "1";
            this.showFWindow = _loc2_[3] == "1";
         }
      }
      
      private function saveShatSet() : void
      {
         var _loc1_:String = this.allowStranger ? "1" : "0";
         var _loc2_:String = this.showSysInfoNote ? "1" : "0";
         var _loc3_:String = this.showBattleTeamInfoNote ? "1" : "0";
         var _loc4_:String = this.showFWindow ? "1" : "0";
         this.setItem("chatSet",_loc1_ + "_" + _loc2_ + "_" + _loc3_ + "_" + _loc4_);
      }
      
      public function showBigWin(param1:Boolean) : void
      {
         if(param1)
         {
         }
      }
      
      public function hideChat(param1:Boolean = false) : void
      {
         if(this.chatPanel)
         {
            if(param1)
            {
               this.chatPanel.visible = false;
            }
            else
            {
               this.chatPanel.visible = false;
            }
         }
      }
      
      public function showChatWithOutPar() : void
      {
      }
      
      public function showChatIcon() : void
      {
         if(!com.robot.core.manager.ChatManager.getinstance().showFWindow)
         {
            return;
         }
      }
      
      public function hideChatIcon() : void
      {
      }
      
      public function get chat() : MovieClip
      {
         return this.chatPanel;
      }
   }
}
