package com.robot.app2.control.starTreasure
{
   import com.protobuf.clientproto.cli_pb_team_game_proto_frtd_out;
   import com.protobuf.clientproto.cli_pb_team_game_proto_notice_out;
   import com.protobuf.commonproto.AnswerGameInfo;
   import com.protobuf.commonproto.DeliciousSoupRiceGameInfo;
   import com.protobuf.commonproto.WhacAMoleGameInfo;
   import com.protobuf.commonproto.game_treasure_info;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   
   public class StarTreasureSmallGameManger
   {
      
      private static var _taskArr3:Array = [{
         "taskname":"快速猜数字",
         "getNum":4,
         "appName":"StarTreasureTeamQuickNumbersPanel"
      },{
         "taskname":"趣味抢答",
         "getNum":4,
         "appName":"StarTreasureTeamGameInterestingAnswerPanel"
      },{
         "taskname":"美味煲仔饭",
         "getNum":5,
         "appName":5001
      }];
      
      private static var _taskArr4:Array = [{
         "taskname":"组队来挖宝",
         "getNum":3,
         "appName":5002
      },{
         "taskname":"欢乐打地鼠",
         "getNum":3,
         "appName":"StarTreasureTeamGameHitHamsterPanel"
      }];
      
      private static var _instance:com.robot.app2.control.starTreasure.StarTreasureSmallGameManger;
      
      private static var _updateInfo;
      
      public static var _curGameInfo;
       
      
      public function StarTreasureSmallGameManger()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app2.control.starTreasure.StarTreasureSmallGameManger
      {
         if(!com.robot.app2.control.starTreasure.StarTreasureSmallGameManger._instance)
         {
            com.robot.app2.control.starTreasure.StarTreasureSmallGameManger._instance = new com.robot.app2.control.starTreasure.StarTreasureSmallGameManger();
         }
         return com.robot.app2.control.starTreasure.StarTreasureSmallGameManger._instance;
      }
      
      public function enterGame(param1:cli_pb_team_game_proto_notice_out) : void
      {
         ModuleManager.hideAllModule();
         _updateInfo = param1 as cli_pb_team_game_proto_notice_out;
         if(param1.eventIdx == 4)
         {
            if(_updateInfo.actionResult == 1)
            {
               _curGameInfo = _updateInfo.treasureInfo as game_treasure_info;
            }
            else if(_updateInfo.actionResult == 2)
            {
               _curGameInfo = _updateInfo.wcaGameInfos as WhacAMoleGameInfo;
            }
            if(typeof _taskArr4[_updateInfo.actionResult - 1].appName == "string")
            {
               if(_curGameInfo != null)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule(_taskArr4[_updateInfo.actionResult - 1].appName),"正在打开....",_curGameInfo);
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule(_taskArr4[_updateInfo.actionResult - 1].appName),"正在打开....");
               }
            }
            else
            {
               MapManager.changeMap(_taskArr4[_updateInfo.actionResult - 1].appName);
            }
         }
         else if(param1.eventIdx == 3)
         {
            if(_updateInfo.actionResult == 1)
            {
               _curGameInfo = null;
            }
            else if(_updateInfo.actionResult == 2)
            {
               _curGameInfo = _updateInfo.answerGameInfos as AnswerGameInfo;
            }
            else if(_updateInfo.actionResult == 3)
            {
               _curGameInfo = _updateInfo.deliciousGameInfos as DeliciousSoupRiceGameInfo;
            }
            if(typeof _taskArr3[_updateInfo.actionResult - 1].appName == "string")
            {
               if(_curGameInfo != null)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule(_taskArr3[_updateInfo.actionResult - 1].appName),"正在打开....",_curGameInfo);
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule(_taskArr3[_updateInfo.actionResult - 1].appName),"正在打开....");
               }
            }
            else
            {
               MapManager.changeMap(_taskArr3[_updateInfo.actionResult - 1].appName);
            }
         }
      }
      
      public function reBackToGame(param1:cli_pb_team_game_proto_frtd_out) : void
      {
         ModuleManager.hideAllModule();
         _updateInfo = param1 as cli_pb_team_game_proto_notice_out;
         if(_updateInfo.eventIdx == 4)
         {
            if(_updateInfo.actionResult == 1)
            {
               _curGameInfo = _updateInfo.treasureInfo as game_treasure_info;
            }
            else if(_updateInfo.actionResult == 2)
            {
               _curGameInfo = _updateInfo.wcaGameInfos as WhacAMoleGameInfo;
            }
            if(typeof _taskArr4[_updateInfo.actionResult - 1].appName == "string")
            {
               if(_curGameInfo != null)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule(_taskArr4[_updateInfo.actionResult - 1].appName),"正在打开....",_curGameInfo);
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule(_taskArr4[_updateInfo.actionResult - 1].appName),"正在打开....");
               }
            }
            else
            {
               MapManager.changeMap(_taskArr4[_updateInfo.actionResult - 1].appName);
            }
         }
         else if(_updateInfo.eventIdx == 3)
         {
            if(_updateInfo.actionResult == 1)
            {
               _curGameInfo = null;
            }
            else if(_updateInfo.actionResult == 2)
            {
               _curGameInfo = _updateInfo.answerGameInfos as AnswerGameInfo;
            }
            else if(_updateInfo.actionResult == 3)
            {
               _curGameInfo = _updateInfo.deliciousGameInfos as DeliciousSoupRiceGameInfo;
            }
            if(typeof _taskArr3[_updateInfo.actionResult - 1].appName == "string")
            {
               if(_curGameInfo != null)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule(_taskArr3[_updateInfo.actionResult - 1].appName),"正在打开....",_curGameInfo);
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule(_taskArr3[_updateInfo.actionResult - 1].appName),"正在打开....");
               }
            }
            else
            {
               MapManager.changeMap(_taskArr3[_updateInfo.actionResult - 1].appName);
            }
         }
      }
      
      public function get gameInfo() : *
      {
         return _curGameInfo;
      }
      
      public function set gameInfo(param1:*) : void
      {
         _curGameInfo = param1;
      }
   }
}
