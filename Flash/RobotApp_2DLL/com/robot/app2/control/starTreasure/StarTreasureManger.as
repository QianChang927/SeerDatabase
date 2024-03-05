package com.robot.app2.control.starTreasure
{
   import com.protobuf.clientproto.cli_pb_team_game_proto_frtd_out;
   import com.protobuf.clientproto.room_ivit_notice_out;
   import com.protobuf.clientproto.room_ivit_rsp_out;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app.user.UserInfoController;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.ui.alert.Answer;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.events.TextEvent;
   import flash.utils.getDefinitionByName;
   
   public class StarTreasureManger
   {
      
      private static var array:Array = [];
      
      private static var iconMC:Sprite;
       
      
      public function StarTreasureManger()
      {
         super();
      }
      
      public static function add(param1:room_ivit_notice_out) : void
      {
         array.push(param1);
         checkLength();
      }
      
      private static function next() : room_ivit_notice_out
      {
         var _loc1_:room_ivit_notice_out = array.shift() as room_ivit_notice_out;
         checkLength();
         return _loc1_;
      }
      
      private static function checkLength() : void
      {
         var _loc1_:Class = null;
         if(!iconMC)
         {
            iconMC = ToolBarController.getpanelUi();
         }
         if(array.length > 0)
         {
            iconMC["friendBtn"].addEventListener(MouseEvent.CLICK,showInviteAnswer,false,2);
            iconMC["uiDot"].visible = true;
            iconMC["uiDot"]["NewMaiIconMcl"].gotoAndStop(6);
         }
         else
         {
            iconMC["friendBtn"].removeEventListener(MouseEvent.CLICK,showInviteAnswer);
            _loc1_ = getDefinitionByName("com.robot.app2.control.SeerBoxIconController") as Class;
            _loc1_["updateDot"]();
         }
      }
      
      private static function showInviteAnswer(param1:MouseEvent) : void
      {
         var type:uint;
         var data:room_ivit_notice_out = null;
         var str:String = null;
         var acceptInvite:Function = null;
         var rejectInvite:Function = null;
         var cls:Class = null;
         var event:MouseEvent = param1;
         acceptInvite = function():void
         {
            StarTreasureDataManger.handleRoomInvite(data,1).then(function(param1:room_ivit_rsp_out):void
            {
               ModuleManager.showAppModule("StarTreasureTeamRoomPanel",param1.roomInfo);
            });
         };
         rejectInvite = function():void
         {
            StarTreasureDataManger.handleRoomInvite(data,0);
         };
         event.stopImmediatePropagation();
         if(iconMC)
         {
            iconMC["uiDot"].removeEventListener(MouseEvent.CLICK,showInviteAnswer);
            cls = getDefinitionByName("com.robot.app2.control.SeerBoxIconController") as Class;
            iconMC["uiDot"].visible = false;
            iconMC["uiDot"]["NewMaiIconMcl"].gotoAndStop(4);
            cls["updateDot"]();
         }
         data = next();
         type = uint(data.mode);
         str = String(data.roomid);
         UserInfoManager.getInfo(data.userid,function(param1:UserInfo):void
         {
            var info:UserInfo = param1;
            var sprite:Sprite = Answer.show("<a href=\'event:\'><font color=\'#ff0000\'>" + info.nick + "(" + data.userid + ")</font></a>邀请你进入星辰宝藏组队房间，是否接受？\r\r<font color=\'#ff0000\'>房间号：" + str + "。</font>",acceptInvite,rejectInvite);
            sprite.addEventListener(TextEvent.LINK,function():void
            {
               UserInfoController.show(data.userid);
            });
         });
      }
      
      public static function offlineReconnection() : void
      {
         KTool.getMultiValue([109362,109363,105308],function(param1:Array):void
         {
            var va:Array = param1;
            StarTreasureDataManger.upateRoom(va[0],va[1]).then(function(param1:int):void
            {
               if(param1 != 1)
               {
                  if(va[2] > 0)
                  {
                     recoverTeam();
                  }
                  else
                  {
                     ModuleManager.hideAllModule();
                     ModuleManager.showAppModule("StarTreasureTeamRoomPanel");
                  }
               }
            });
         });
      }
      
      public static function recoverTeam() : void
      {
         StarTreasureDataManger.recoverTeamData().then(function(param1:cli_pb_team_game_proto_frtd_out):void
         {
            if(param1.eventIdx == 1)
            {
               ModuleManager.hideAllModule();
               ModuleManager.showAppModule("StarTreasureTeamModelPanel");
            }
            else if(param1.eventIdx > 1)
            {
               StarTreasureSmallGameManger.getInstance().reBackToGame(param1);
            }
         });
      }
   }
}
