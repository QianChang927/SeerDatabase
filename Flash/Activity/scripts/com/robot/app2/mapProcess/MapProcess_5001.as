package com.robot.app2.mapProcess
{
   import com.protobuf.clientproto.cli_pb_team_game_proto_in_delicious_soup_rice_game_notice_out;
   import com.protobuf.clientproto.cli_pb_team_game_proto_in_dsr_update_item_notice_out;
   import com.protobuf.clientproto.cli_pb_team_game_proto_leave_game_notice_out;
   import com.protobuf.clientproto.cli_pb_team_game_proto_notice_out;
   import com.protobuf.clientproto.cli_pb_team_game_proto_start_notice_out;
   import com.protobuf.commonproto.ArgsInfo;
   import com.protobuf.commonproto.DeliciousSoupRiceGameInfo;
   import com.protobuf.commonproto.DsrValueInfo;
   import com.protobuf.commonproto.PlayerInfo;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.component.CollectionComponet;
   import com.robot.app2.control.starTreasure.StarTreasureDataManger;
   import com.robot.app2.control.starTreasure.StarTreasureSmallGameManger;
   import com.robot.app2.control.starTreasure.StarTreasureTeamChatManger;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   
   public class MapProcess_5001 extends BaseMapProcess
   {
       
      
      private var _step:int;
      
      public var _map:MapModel;
      
      private var _isfightAllBoss:Boolean = false;
      
      private var _curIndex:int = 0;
      
      private var _itemNum:int;
      
      private var _collectionCmp:CollectionComponet;
      
      private var _surplusTime:int = 30;
      
      private var _curGameInfo:DeliciousSoupRiceGameInfo;
      
      private var _teamInfo:cli_pb_team_game_proto_start_notice_out;
      
      private var _itemNumArr:Array;
      
      private var _curUserIdIndex:int = -1;
      
      private var _curChoosIndex:int = -1;
      
      private var _useidArr:Array;
      
      private var _userNameArr:Array;
      
      private var _curShowItemType:int = 0;
      
      private var _isSend:Boolean = false;
      
      private var _itemNameArr:Array;
      
      private var _timer:int;
      
      public function MapProcess_5001()
      {
         this._itemNumArr = [0,0,0,0];
         this._itemNameArr = ["红蘑菇","白蘑菇","红辣椒","绿青椒"];
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         MapNamePanel.hide();
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this._map.topLevel.addEventListener(MouseEvent.CLICK,this.onTopClick);
         SocketConnection.addCmdListener(50307,this.noteHandlerChange);
         SocketConnection.addCmdListener(50302,this.noteHandlerOver);
         SocketConnection.addCmdListener(50303,this.leaveGameHander);
         SocketConnection.addCmdListener(50309,this.noteHandlerItemChange);
         StarTreasureTeamChatManger.setup(this._map.controlLevel["chatView"],2);
         this._curGameInfo = StarTreasureSmallGameManger.getInstance().gameInfo as DeliciousSoupRiceGameInfo;
         this._teamInfo = StarTreasureDataManger.teamInfo;
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            this._map.topLevel["tipsMc_" + _loc1_].visible = false;
            _loc1_++;
         }
         this.update();
         this.updateChatList();
      }
      
      private function updateChatList() : void
      {
         var _loc2_:PlayerInfo = null;
         var _loc1_:Array = new Array();
         for each(_loc2_ in StarTreasureDataManger.teamInfo.playerinfos)
         {
            if(_loc2_.userid != MainManager.actorInfo.userID && _loc2_.state == 1)
            {
               _loc1_.push(_loc2_.userid);
            }
         }
         StarTreasureTeamChatManger.otherUserIds = _loc1_;
      }
      
      private function noteHandlerChange(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:cli_pb_team_game_proto_in_delicious_soup_rice_game_notice_out = new cli_pb_team_game_proto_in_delicious_soup_rice_game_notice_out();
         _loc3_.mergeFrom(_loc2_);
         this._curGameInfo = _loc3_.deliciousGameInfos;
         StarTreasureSmallGameManger.getInstance().gameInfo = this._curGameInfo;
         this.update();
      }
      
      private function noteHandlerItemChange(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:cli_pb_team_game_proto_in_dsr_update_item_notice_out = new cli_pb_team_game_proto_in_dsr_update_item_notice_out();
         _loc3_.mergeFrom(_loc2_);
         this._curShowItemType = _loc3_.itemType;
         this.udpateItemType();
      }
      
      private function noteHandlerOver(param1:SocketEvent) : void
      {
         var str:String;
         var i:int;
         var data:cli_pb_team_game_proto_notice_out = null;
         var event:SocketEvent = param1;
         var sToc:ByteArray = event.data as ByteArray;
         sToc.position = 0;
         data = new cli_pb_team_game_proto_notice_out();
         data.mergeFrom(sToc);
         str = "倒计时结束！";
         i = 0;
         while(i < this._userNameArr.length)
         {
            str += "\n" + this._userNameArr[i] + ":获得第" + this._curGameInfo.dsrValueInfo.rankings[i] + "名";
            i++;
         }
         this._timer = setTimeout(function():void
         {
            if(MainManager.actorInfo.mapID == 1)
            {
               MapManager.changeMapWithCallback(1,function():void
               {
                  MapManager.changeMapWithCallback(2,function():void
                  {
                     ModuleManager.showAppModule("StarTreasureTeamModelPanel",data);
                  });
               });
            }
            else
            {
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showAppModule("StarTreasureTeamModelPanel",data);
               });
            }
         },3000);
      }
      
      private function leaveGameHander(param1:SocketEvent) : void
      {
         var _loc4_:PlayerInfo = null;
         var _loc5_:int = 0;
         var _loc6_:PlayerInfo = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:cli_pb_team_game_proto_leave_game_notice_out = new cli_pb_team_game_proto_leave_game_notice_out();
         _loc3_.mergeFrom(_loc2_);
         for each(_loc4_ in StarTreasureDataManger.teamInfo.playerinfos)
         {
            _loc5_ = 0;
            while(_loc5_ < _loc3_.players.length)
            {
               _loc6_ = _loc3_.players[_loc5_];
               if(_loc4_.userid == _loc6_.userid)
               {
                  _loc4_.state = _loc6_.state;
               }
               _loc5_++;
            }
         }
         if(this._collectionCmp)
         {
            this.updateChatList();
         }
      }
      
      private function setMouseClick(param1:Boolean) : void
      {
         conLevel.mouseChildren = param1;
         conLevel.mouseEnabled = param1;
      }
      
      private function udpateItemType() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            this._map.controlLevel["itemBtn_" + (_loc1_ + 1)].visible = false;
            _loc1_++;
         }
         if(this._curShowItemType > 0)
         {
            this._map.controlLevel["itemBtn_" + this._curShowItemType].visible = true;
         }
      }
      
      protected function onTopClick(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var cTosArgsInfo2:ArgsInfo = null;
         var timer:int = 0;
         var cTosArgsInfo:ArgsInfo = null;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         if(event.target.parent != null)
         {
            index1 = int(event.target.parent.name.split("_")[1]);
         }
         switch(str)
         {
            case "close0":
               this._map.topLevel["tipsMc_0"].visible = false;
               break;
            case "close1":
               this._map.topLevel["tipsMc_1"].visible = false;
               break;
            case "close2":
               this._map.topLevel["tipsMc_2"].visible = false;
               break;
            case "chooseMyBtn_" + index:
               if(this._isSend)
               {
                  timer = int(setTimeout(function():void
                  {
                     clearTimeout(timer);
                     _isSend = false;
                  },2000));
                  return;
               }
               this._isSend = true;
               if(this._itemNumArr[index] > 0)
               {
                  cTosArgsInfo = new ArgsInfo();
                  cTosArgsInfo.arg = [MainManager.actorID];
                  StarTreasureDataManger.doAction(303,index + 5,cTosArgsInfo).then(function(param1:Array):void
                  {
                     var _loc2_:int = int(param1[0]);
                     var _loc3_:ArgsInfo = param1[1];
                     _itemNumArr = new Array();
                     var _loc4_:int = 0;
                     while(_loc4_ < 4)
                     {
                        _itemNumArr.push(_loc3_.arg[_loc4_]);
                        _loc4_++;
                     }
                     alert(true,1);
                     update();
                  });
               }
               else
               {
                  Alarm2.show("材料数量不足！");
               }
               break;
            case "chosseOtherBtn_" + index:
               if(this._itemNumArr[index + 2] > 0)
               {
                  this._curChoosIndex = index;
                  this.alert(true,2);
               }
               else
               {
                  Alarm2.show("材料数量不足！");
               }
               break;
            case "choseeUserBtn_" + index:
               this._curUserIdIndex = index;
               this.alert(true,2);
               break;
            case "sureBtn":
               if(this._curChoosIndex < 0 && this._curUserIdIndex < 0)
               {
                  Alarm2.show("未选择材料和对象！");
                  return;
               }
               if(this._curChoosIndex < 0)
               {
                  Alarm2.show("未选择要添加的材料！");
                  return;
               }
               if(this._curUserIdIndex < 0)
               {
                  Alarm2.show("未选择要添加的对象！");
                  return;
               }
               cTosArgsInfo2 = new ArgsInfo();
               cTosArgsInfo2.arg = [this._useidArr[this._curUserIdIndex]];
               StarTreasureDataManger.doAction(303,this._curChoosIndex + 7,cTosArgsInfo2).then(function(param1:Array):void
               {
                  var _loc2_:int = int(param1[0]);
                  var _loc3_:ArgsInfo = param1[1];
                  _itemNumArr = new Array();
                  var _loc4_:int = 0;
                  while(_loc4_ < 4)
                  {
                     _itemNumArr.push(_loc3_.arg[_loc4_]);
                     _loc4_++;
                  }
                  alert(false,2);
                  update();
               });
               this._curChoosIndex = -1;
               this._curUserIdIndex = -1;
               break;
         }
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         if(event.target.parent != null)
         {
            index1 = int(event.target.parent.name.split("_")[1]);
         }
         switch(str)
         {
            case "closeBtn":
               Alert.show("你确定要提前结束本次探索吗？",function():void
               {
               });
               break;
            case "desBtn":
               this._map.topLevel["tipsMc_0"].visible = true;
               break;
            case "chickBtn_0":
               this.oncollection(0);
               break;
            case "addBtn":
               this.alert(true,1);
         }
      }
      
      private function alert(param1:Boolean, param2:int = 1) : void
      {
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         var _loc3_:int = 0;
         while(_loc3_ < 2)
         {
            this._map.topLevel["tipsMc_" + _loc3_].visible = false;
            _loc3_++;
         }
         if(param2 == 1)
         {
            _loc4_ = 0;
            while(_loc4_ < 2)
            {
               this._map.topLevel["tipsMc_" + param2]["itemNumTx_" + _loc4_].text = "" + this._itemNumArr[_loc4_];
               _loc4_++;
            }
         }
         else if(param2 == 2)
         {
            _loc5_ = 0;
            while(_loc5_ < 5)
            {
               this._map.topLevel["tipsMc_" + param2]["gouMc_" + _loc5_].visible = false;
               _loc5_++;
            }
            if(this._curChoosIndex >= 0)
            {
               this._map.topLevel["tipsMc_" + param2]["gouMc_" + this._curChoosIndex].visible = true;
            }
            if(this._curUserIdIndex >= 0)
            {
               this._map.topLevel["tipsMc_" + param2]["gouMc_" + (this._curUserIdIndex + 2)].visible = true;
            }
            _loc6_ = 0;
            while(_loc6_ < 3)
            {
               this._map.topLevel["tipsMc_" + param2]["nameTx_" + _loc6_].mouseEnabled = false;
               this._map.topLevel["tipsMc_" + param2]["useridTx_" + _loc6_].text = "" + this._useidArr[_loc6_];
               this._map.topLevel["tipsMc_" + param2]["nameTx_" + _loc6_].text = this._userNameArr[_loc6_];
               _loc6_++;
            }
            _loc7_ = 0;
            while(_loc7_ < 2)
            {
               this._map.topLevel["tipsMc_" + param2]["itemNumTx_" + _loc7_].text = "" + this._itemNumArr[_loc7_ + 2];
               _loc7_++;
            }
         }
         this._map.topLevel["tipsMc_" + param2].visible = param1;
      }
      
      public function update() : void
      {
         var _loc1_:PlayerInfo = null;
         var _loc2_:DsrValueInfo = null;
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         var _loc6_:ArgsInfo = null;
         var _loc7_:uint = 0;
         var _loc8_:uint = 0;
         var _loc9_:Boolean = false;
         this._isSend = false;
         this._useidArr = new Array();
         this._userNameArr = new Array();
         for each(_loc1_ in this._teamInfo.playerinfos)
         {
            this._useidArr.push(_loc1_.userid);
            this._userNameArr.push(_loc1_.name);
         }
         _loc2_ = this._curGameInfo.dsrValueInfo;
         _loc3_ = _loc2_.args;
         _loc4_ = 0;
         while(_loc4_ < this._useidArr.length)
         {
            _loc6_ = _loc3_[_loc4_] as ArgsInfo;
            this._map.controlLevel["mc_" + _loc4_].nameTx.text = this._userNameArr[_loc4_];
            _loc7_ = uint(KTool.subByte(_loc6_.arg[0],0,8));
            _loc8_ = uint(KTool.subByte(_loc6_.arg[0],8,8));
            _loc9_ = KTool.subByte(_loc6_.arg[0],16,4) > 0 ? true : false;
            this._map.controlLevel["mc_" + _loc4_].barMc.gotoAndStop(_loc7_ > 0 ? _loc7_ : 1);
            this._map.controlLevel["mc_" + _loc4_].flagMc.visible = _loc9_;
            if(this._useidArr[_loc4_] == MainManager.actorID && _loc9_)
            {
               this._map.controlLevel["potMc"].gotoAndStop(2);
            }
            _loc4_++;
         }
         this._curShowItemType = this._curGameInfo.itemType;
         this.udpateItemType();
         var _loc5_:int = int(SystemTimerManager.sysBJDate.time / 1000) - this._curGameInfo.time;
         this._surplusTime = 30 - _loc5_;
         if(this._surplusTime > 0)
         {
            SystemTimerManager.removeTickFun(this.onTimer);
            SystemTimerManager.addTickFun(this.onTimer);
         }
         else
         {
            SystemTimerManager.removeTickFun(this.onTimer);
         }
         if(this._collectionCmp == null)
         {
            this._collectionCmp = new CollectionComponet(this._map.controlLevel,2000,4,this.oncollection,this.onClick,"itemBtn_",true,this.oncancel);
         }
      }
      
      private function onTimer() : void
      {
         var _loc1_:int = 0;
         --this._surplusTime;
         if(this._surplusTime <= 0)
         {
            this.getTimeClockString(0);
            SystemTimerManager.removeTickFun(this.onTimer);
         }
         else
         {
            this.getTimeClockString(this._surplusTime);
            _loc1_ = (10 - this._surplusTime) * 10 * 100;
            this._map.controlLevel["timeMc"].gotoAndStop(_loc1_ > 0 ? _loc1_ : 1);
         }
      }
      
      private function getTimeClockString(param1:int) : void
      {
         this._map.controlLevel["timeTx"].text = String(param1);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         this._collectionCmp.start();
      }
      
      private function oncollection(param1:int) : void
      {
         var index:int = param1;
         var cTosArgsInfo:ArgsInfo = new ArgsInfo();
         cTosArgsInfo.arg = [MainManager.actorID];
         StarTreasureDataManger.doAction(303,index,cTosArgsInfo).then(function(param1:Array):void
         {
            var _loc5_:int = 0;
            var _loc6_:int = 0;
            var _loc7_:int = 0;
            var _loc2_:int = int(param1[0]);
            var _loc3_:ArgsInfo = param1[1];
            _itemNumArr = new Array();
            var _loc4_:int = 0;
            while(_loc4_ < 4)
            {
               _itemNumArr.push(_loc3_.arg[_loc4_]);
               _loc4_++;
            }
            if(index == 0)
            {
               if((_loc5_ = int(KTool.subByte(_loc3_.arg[4],0,4))) == 1)
               {
                  Alarm2.show("5s内不能连续对其他玩家造成破坏哦！");
               }
               else if(_loc5_ == 2)
               {
                  alert(true,2);
               }
            }
            else if((_loc6_ = int(KTool.subByte(_loc3_.arg[4],4,4))) == 1)
            {
               _loc7_ = 0;
               while(_loc7_ < 4)
               {
                  _map.controlLevel["itemBtn_" + (_loc7_ + 1)].visible = false;
                  _loc7_++;
               }
               Alarm2.show("获得1个" + _itemNameArr[index - 1] + "！");
            }
            else if(_loc6_ == 2)
            {
               Alarm2.show("采集太慢物品消失了");
            }
            else if(_loc6_ == 3)
            {
               Alarm2.show("采集太慢,被别人采走了！");
            }
            update();
         });
      }
      
      private function oncancel(param1:int) : void
      {
      }
      
      override public function destroy() : void
      {
         if(this._collectionCmp)
         {
            this._collectionCmp.destroy();
            this._collectionCmp = null;
         }
         NpcDialog.hide();
         MapNamePanel.show();
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         SystemTimerManager.removeTickFun(this.onTimer);
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         this._map.topLevel.removeEventListener(MouseEvent.CLICK,this.onTopClick);
         SocketConnection.removeCmdListener(50307,this.noteHandlerChange);
         SocketConnection.removeCmdListener(50302,this.noteHandlerOver);
         SocketConnection.removeCmdListener(50303,this.leaveGameHander);
         StarTreasureTeamChatManger.destroy();
         SocketConnection.removeCmdListener(50309,this.noteHandlerItemChange);
         clearTimeout(this._timer);
         super.destroy();
      }
   }
}
