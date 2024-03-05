package com.robot.app2.mapProcess
{
   import com.protobuf.clientproto.cli_pb_team_game_proto_in_answer_game_notice_out;
   import com.protobuf.clientproto.cli_pb_team_game_proto_leave_game_notice_out;
   import com.protobuf.clientproto.cli_pb_team_game_proto_notice_out;
   import com.protobuf.clientproto.cli_pb_team_game_proto_start_notice_out;
   import com.protobuf.commonproto.*;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
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
   import com.robot.core.ui.alert.Alert;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class MapProcess_11905 extends BaseMapProcess
   {
       
      
      private var _step:int;
      
      public var _map:MapModel;
      
      private var _isfightAllBoss:Boolean = false;
      
      private var _curIndex:int = 0;
      
      private var _itemNum:int;
      
      private var _surplusTime:int = 10;
      
      private var _curGameInfo:WhacAMoleGameInfo;
      
      private var _teamInfo:cli_pb_team_game_proto_start_notice_out;
      
      private var _itemNumArr:Array;
      
      private var _useidArr:Array;
      
      public function MapProcess_11905()
      {
         this._itemNumArr = [];
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         SocketConnection.addCmdListener(50306,this.noteHandlerChange);
         SocketConnection.addCmdListener(50302,this.noteHandlerUpdate);
         SocketConnection.addCmdListener(50303,this.leaveGameHander);
         StarTreasureTeamChatManger.setup(this._map.controlLevel["chatView"],2);
         this._curGameInfo = StarTreasureSmallGameManger.getInstance().gameInfo as WhacAMoleGameInfo;
         this._teamInfo = StarTreasureDataManger.teamInfo;
         this.update();
         var _loc1_:int = 0;
         while(_loc1_ < 12)
         {
            this._map.controlLevel["petMc_" + _loc1_].addEventListener(MouseEvent.CLICK,this.onPetClick);
            _loc1_++;
         }
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
         var _loc3_:cli_pb_team_game_proto_in_answer_game_notice_out = new cli_pb_team_game_proto_in_answer_game_notice_out();
         _loc3_.mergeFrom(_loc2_);
         this._curGameInfo = _loc3_.WhacAMoleGameInfo;
         this.update();
      }
      
      private function noteHandlerUpdate(param1:SocketEvent) : void
      {
         var data:cli_pb_team_game_proto_notice_out = null;
         var event:SocketEvent = param1;
         var sToc:ByteArray = event.data as ByteArray;
         sToc.position = 0;
         data = new cli_pb_team_game_proto_notice_out();
         data.mergeFrom(sToc);
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
         this.updateChatList();
      }
      
      private function setMouseClick(param1:Boolean) : void
      {
         conLevel.mouseChildren = param1;
         conLevel.mouseEnabled = param1;
      }
      
      protected function onPetClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var str:String = String(event.currentTarget.name);
         var index:int = int(str.split("_")[1]);
         StarTreasureDataManger.doAction(402,index + 1).then(function(param1:Array):void
         {
            var _loc2_:int = int(param1[0]);
            var _loc3_:ArgsInfo = param1[1];
            var _loc4_:Boolean = _loc3_.arg[0] == 1 ? true : false;
         });
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "closeBtn":
               Alert.show("你确定要提前结束本次探索吗？",function():void
               {
               });
               break;
            case "desBtn":
               this._map.controlLevel["tipsMc_"].visible = true;
               break;
            case "close":
               this._map.controlLevel["tipsMc_"].visible = false;
         }
      }
      
      public function update() : void
      {
         var _loc1_:PlayerInfo = null;
         var _loc2_:int = 0;
         var _loc11_:uint = 0;
         var _loc12_:uint = 0;
         var _loc13_:uint = 0;
         var _loc14_:uint = 0;
         var _loc15_:uint = 0;
         var _loc16_:uint = 0;
         var _loc17_:* = null;
         this._map.controlLevel["mc_" + _loc2_].nameTx.text = "";
         this._useidArr = new Array();
         for each(_loc1_ in this._teamInfo.playerinfos)
         {
            if(_loc1_.userid != MainManager.actorInfo.userID && _loc1_.state == 1)
            {
               this._map.controlLevel["mc_" + _loc2_].nameTx.text = _loc1_.name;
               this._useidArr.push(_loc1_.userid);
            }
         }
         _loc2_ = 0;
         while(_loc2_ < 12)
         {
            if(_loc2_ < 8)
            {
               _loc11_ = uint(KTool.subByte(this._curGameInfo.mapArgs.arg[0],_loc2_ * 4,4));
               _loc12_ = uint(KTool.subByte(this._curGameInfo.args[0],_loc2_ * 4,4));
            }
            else
            {
               _loc11_ = uint(KTool.subByte(this._curGameInfo.mapArgs.arg[1],(_loc2_ - 8) * 4,4));
               _loc12_ = uint(KTool.subByte(this._curGameInfo.args[1],(_loc2_ - 8) * 4,4));
            }
            this._map.controlLevel["holeMc_" + _loc2_].gotoAndStop(_loc11_);
            if(_loc12_ > 0)
            {
               this._map.controlLevel["petMc_" + _loc2_].gotoAndStop(_loc12_);
               this._map.controlLevel["petMc_" + _loc2_].visible = true;
            }
            else
            {
               this._map.controlLevel["petMc_" + _loc2_].visible = false;
            }
            _loc2_++;
         }
         var _loc3_:RuleInfo = this._curGameInfo.RuleInfo;
         var _loc4_:Array = _loc3_.rules;
         var _loc5_:Array = ["红","黄","蓝"];
         var _loc6_:Array = ["只可以","不可以","可以"];
         var _loc7_:Array = ["红","黄","蓝","黑"];
         var _loc8_:Array = ["红","黄","蓝"];
         var _loc9_:int = 0;
         while(_loc9_ < this._useidArr.length)
         {
            _loc13_ = uint(KTool.subByte(_loc4_[_loc9_],0,4));
            this._map.controlLevel["mc_" + _loc9_].gotoAndStop(_loc13_);
            _loc14_ = uint(KTool.subByte(_loc4_[_loc9_],4,4));
            _loc15_ = uint(KTool.subByte(_loc4_[_loc9_],8,4));
            _loc16_ = uint(KTool.subByte(_loc4_[_loc9_],12,4));
            _loc17_ = _loc5_[_loc13_ - 1] + "色玩家" + _loc6_[_loc14_ - 1] + "打" + _loc7_[_loc15_ - 1] + "色地洞的" + _loc8_[_loc16_ - 1] + "色果果";
            if(this._useidArr[_loc9_] == MainManager.actorID)
            {
               this._map.controlLevel["ruleTx"].text = _loc17_;
            }
            _loc9_++;
         }
         var _loc10_:int = int(SystemTimerManager.sysBJDate.time / 1000) - this._curGameInfo.time;
         this._surplusTime = 10 - _loc10_;
         if(this._surplusTime > 0)
         {
            SystemTimerManager.removeTickFun(this.onTimer);
            SystemTimerManager.addTickFun(this.onTimer);
         }
         else
         {
            SystemTimerManager.removeTickFun(this.onTimer);
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
      
      override public function destroy() : void
      {
         NpcDialog.hide();
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         var _loc1_:int = 0;
         while(_loc1_ < 12)
         {
            this._map.controlLevel["petMc_" + _loc1_].removeEventListener(MouseEvent.CLICK,this.onPetClick);
            _loc1_++;
         }
         super.destroy();
      }
   }
}
