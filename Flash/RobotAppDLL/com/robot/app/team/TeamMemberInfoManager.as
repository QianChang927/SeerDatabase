package com.robot.app.team
{
   import com.robot.core.CommandID;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.team.TeamMemberInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import flash.utils.IDataInput;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class TeamMemberInfoManager
   {
      
      private static var ins:com.robot.app.team.TeamMemberInfoManager;
      
      private static var cmdStatu:Boolean = false;
       
      
      public var teamInfoHash:HashMap;
      
      public var subInfoHash:HashMap;
      
      public var idList:Array;
      
      public var dataReady:Boolean;
      
      private var idArray:Array;
      
      public function TeamMemberInfoManager()
      {
         this.teamInfoHash = new HashMap();
         this.subInfoHash = new HashMap();
         this.idArray = [];
         super();
      }
      
      public static function get instance() : com.robot.app.team.TeamMemberInfoManager
      {
         if(!ins)
         {
            ins = new com.robot.app.team.TeamMemberInfoManager();
         }
         return ins;
      }
      
      public function getAllMembers() : void
      {
         var startID:int = 0;
         if(cmdStatu && this.dataReady == false)
         {
            return;
         }
         this.dataReady = false;
         this.idList = [];
         startID = 1;
         SocketConnection.addCmdListener(CommandID.NEW_TEAM_GET_MEMBERS_INFO,function(param1:SocketEvent):void
         {
            var _loc7_:TeamMemberInfo = null;
            cmdStatu = false;
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            var _loc5_:int = int(_loc3_.readUnsignedInt());
            var _loc6_:int = 0;
            while(_loc6_ < _loc5_)
            {
               _loc7_ = new TeamMemberInfo(_loc3_,true);
               if(idList.indexOf(_loc7_.userID) == -1)
               {
                  idList.push(_loc7_.userID);
               }
               if(subInfoHash.getValue(_loc7_.userID) == null)
               {
                  teamInfoHash.add(_loc7_.userID,_loc7_);
                  getSimpleInfo(_loc7_.userID,null,true);
               }
               else
               {
                  _loc7_.nick = (subInfoHash.getValue(_loc7_.userID) as Object).name;
                  _loc7_.loginTime = (subInfoHash.getValue(_loc7_.userID) as Object).lastLoginTime;
                  teamInfoHash.add(_loc7_.userID,_loc7_);
               }
               _loc6_++;
            }
            if(_loc5_ != 10 || _loc4_ == startID * 10)
            {
               SocketConnection.removeCmdListener(CommandID.NEW_TEAM_GET_MEMBERS_INFO,arguments.callee);
               removeDelInfo();
            }
            else
            {
               ++startID;
               SocketConnection.send(CommandID.NEW_TEAM_GET_MEMBERS_INFO,startID,10);
            }
         });
         SocketConnection.send(CommandID.NEW_TEAM_GET_MEMBERS_INFO,startID,10);
         cmdStatu = true;
      }
      
      private function removeDelInfo() : void
      {
         var _loc2_:int = 0;
         var _loc1_:uint = this.idList.length;
         if(_loc1_ > 0)
         {
            for each(_loc2_ in this.teamInfoHash.getKeys())
            {
               if(this.idList.indexOf(_loc2_) == -1)
               {
                  this.teamInfoHash.remove(_loc2_);
                  this.subInfoHash.remove(_loc2_);
               }
            }
         }
         if(this.idArray.length == 0)
         {
            this.dataReady = true;
         }
      }
      
      public function get myInfo() : TeamMemberInfo
      {
         return this.teamInfoHash.getValue(MainManager.actorInfo.userID);
      }
      
      public function set myInfo(param1:TeamMemberInfo) : void
      {
         this.teamInfoHash.add(MainManager.actorInfo.userID,param1);
      }
      
      public function getSimpleInfo(param1:int, param2:Function = null, param3:Boolean = false) : void
      {
         var userId:int = param1;
         var event:Function = param2;
         var callBySelf:Boolean = param3;
         var info:UserInfo = this.teamInfoHash.getValue(userId);
         if(Boolean(info) && Boolean(info.hasSimpleInfo))
         {
            if(event != null)
            {
               event(info);
            }
            return;
         }
         if(!callBySelf)
         {
            if(event != null)
            {
               event(new UserInfo());
            }
            return;
         }
         SocketConnection.sendByQueue(CommandID.GET_SIM_USERINFO,[userId],function(param1:SocketEvent):void
         {
            var _loc2_:UserInfo = new UserInfo();
            UserInfo.setForSimpleInfo(_loc2_,param1.data as IDataInput);
            if(idArray.indexOf(_loc2_.userID) != -1)
            {
               idArray.splice(idArray.indexOf(_loc2_.userID),1);
               if(idArray.length == 0)
               {
                  dataReady = true;
               }
               var _loc3_:UserInfo = teamInfoHash.getValue(_loc2_.userID);
               UserInfo.setForSimpleInfo(_loc3_,param1.data as IDataInput);
               if(event != null)
               {
                  event(_loc3_);
               }
               var _loc4_:Object = {
                  "name":_loc3_.nick,
                  "lastLoginTime":_loc3_.loginTime
               };
               teamInfoHash.add(_loc3_.userID,_loc3_);
               subInfoHash.add(_loc3_.userID,_loc4_);
               return;
            }
         });
         this.idArray.push(userId);
      }
   }
}
