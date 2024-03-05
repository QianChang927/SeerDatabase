package com.robot.core.teamInstallation
{
   import com.robot.core.CommandID;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.team.SimpleTeamInfo;
   import com.robot.core.info.team.TeamLogoInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.events.SocketEvent;
   
   public class TeamInfoManager
   {
      
      public static var myTeamInfo:SimpleTeamInfo;
       
      
      public function TeamInfoManager()
      {
         super();
      }
      
      public static function getSimpleTeamInfo(param1:uint, param2:Function = null) : void
      {
         var id:uint = param1;
         var fun:Function = param2;
         SocketConnection.sendByQueue(CommandID.TEAM_GET_INFO,[id],function(param1:SocketEvent):void
         {
            var _loc2_:SimpleTeamInfo = param1.data as SimpleTeamInfo;
            if(id == MainManager.actorInfo.teamInfo.id)
            {
               myTeamInfo = _loc2_;
            }
            if(fun != null)
            {
               fun(_loc2_);
            }
         });
      }
      
      public static function getTeamLogoInfo(param1:uint, param2:Function = null) : void
      {
         var uid:uint = param1;
         var fun:Function = param2;
         SocketConnection.addCmdListener(CommandID.TEAM_GET_LOGO_INFO,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.TEAM_GET_LOGO_INFO,arguments.callee);
            var _loc3_:TeamLogoInfo = param1.data as TeamLogoInfo;
            if(fun != null)
            {
               fun(_loc3_);
            }
         });
         SocketConnection.send(CommandID.TEAM_GET_LOGO_INFO,uid);
      }
      
      public static function getSelfContri(param1:Function = null) : void
      {
         var itemID:int = 0;
         var onCheck:Function = null;
         var fun:Function = param1;
         onCheck = function(param1:ItemEvent):void
         {
            ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onCheck);
            if(ItemManager.getCollectionInfo(itemID))
            {
               fun(ItemManager.getCollectionInfo(itemID).itemNum);
            }
            else
            {
               fun(0);
            }
         };
         itemID = 1400001;
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onCheck);
         ItemManager.upDateCollection(itemID);
      }
   }
}
