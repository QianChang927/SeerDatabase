package com.robot.app.im.ui.tab
{
   import com.robot.core.CommandID;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class TabFight implements IIMTab
   {
       
      
      private var _index:int;
      
      private var _fun:Function;
      
      private var _ui:MovieClip;
      
      private var _con:Sprite;
      
      private var _isInfo:Boolean = true;
      
      private var _curPKList:Array;
      
      private var _pkLen:uint;
      
      private var _cur:uint;
      
      public function TabFight(param1:int, param2:MovieClip, param3:Sprite, param4:Function)
      {
         super();
         this._index = param1;
         this._ui = param2;
         this._ui.gotoAndStop(1);
         this._con = param3;
         this._fun = param4;
      }
      
      public function get index() : int
      {
         return this._index;
      }
      
      public function set index(param1:int) : void
      {
         this._index = param1;
      }
      
      public function show() : void
      {
         this._ui.mouseEnabled = false;
         if(this._ui.parent)
         {
            this._ui.parent.addChild(this._ui);
            this._ui.gotoAndStop(2);
         }
         this.getCurPKList();
      }
      
      public function getCurPKList() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_CUR_PK_USERS,this.onGetCurPK);
         SocketConnection.send(CommandID.GET_CUR_PK_USERS);
      }
      
      private function onGetCurPK(param1:SocketEvent) : void
      {
         var _loc4_:int = 0;
         var _loc6_:uint = 0;
         SocketConnection.removeCmdListener(CommandID.GET_CUR_PK_USERS,this.onGetCurPK);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 0)
         {
            this._fun([],20);
            return;
         }
         var _loc5_:Array = [];
         _loc4_ = 0;
         while(_loc4_ < _loc3_)
         {
            _loc6_ = _loc2_.readUnsignedInt();
            _loc5_.push(_loc6_);
            _loc4_++;
         }
         this._pkLen = _loc5_.length;
         this._curPKList = [];
         this._cur = 0;
         SocketConnection.addCmdListener(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,this.onGetIDInfo);
         _loc4_ = 0;
         while(_loc4_ < _loc5_.length)
         {
            SocketConnection.send(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,_loc5_[_loc4_]);
            _loc4_++;
         }
      }
      
      private function onGetIDInfo(param1:SocketEvent) : void
      {
         var _loc7_:int = 0;
         var _loc9_:uint = 0;
         var _loc10_:uint = 0;
         var _loc11_:ByteArray = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:String = _loc2_.readUTFBytes(16);
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:Array = [];
         _loc7_ = 0;
         while(_loc7_ < _loc5_)
         {
            _loc9_ = _loc2_.readUnsignedInt();
            _loc10_ = _loc2_.readUnsignedInt();
            _loc6_.push(new PeopleItemInfo(_loc9_,_loc10_));
            _loc7_++;
         }
         var _loc8_:Object = {
            "userID":_loc3_,
            "nick":_loc4_,
            "cloths":_loc6_,
            "serverID":0
         };
         this._curPKList.push(_loc8_);
         ++this._cur;
         if(this._cur >= this._pkLen)
         {
            SocketConnection.removeCmdListener(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,this.onGetIDInfo);
            SocketConnection.addCmdListener(CommandID.SEE_ONLINE,this.onSeeOnline);
            (_loc11_ = new ByteArray()).position = 0;
            _loc11_.writeUnsignedInt(this._curPKList.length);
            _loc7_ = 0;
            while(_loc7_ < this._curPKList.length)
            {
               _loc11_.writeUnsignedInt(this._curPKList[_loc7_]["userID"]);
               _loc7_++;
            }
            SocketConnection.send(CommandID.SEE_ONLINE,_loc11_);
         }
      }
      
      private function onSeeOnline(param1:SocketEvent) : void
      {
         var _loc4_:int = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         SocketConnection.removeCmdListener(CommandID.SEE_ONLINE,this.onSeeOnline);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         _loc4_ = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = _loc2_.readUnsignedInt();
            _loc6_ = _loc2_.readUnsignedInt();
            if(this.getObjByID(_loc5_)["userID"] == _loc5_)
            {
               this.getObjByID(_loc5_)["serverID"] = _loc6_;
            }
            _loc4_++;
         }
         this._curPKList.sort(this.sortFun);
         this._fun(this._curPKList,20);
      }
      
      private function sortFun(param1:Object, param2:Object) : int
      {
         if(param1["serverID"] == 0 && param2["serverID"] != 0)
         {
            return 1;
         }
         if(param1["serverID"] != 0 && param2["serverID"] == 0)
         {
            return -1;
         }
         return 0;
      }
      
      public function hide() : void
      {
         this._ui.mouseEnabled = true;
         if(this._ui.parent)
         {
            this._ui.parent.addChild(this._ui);
            this._ui.gotoAndStop(1);
         }
      }
      
      private function getObjByID(param1:uint) : Object
      {
         var _loc2_:Object = null;
         for each(_loc2_ in this._curPKList)
         {
            if(_loc2_["userID"] == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
   }
}
