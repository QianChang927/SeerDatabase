package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.relation.OnLineInfo;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import flash.utils.IDataInput;
   import org.taomee.events.SocketEvent;
   
   public class UserInfoManager
   {
       
      
      public function UserInfoManager()
      {
         super();
      }
      
      public static function getInfo(param1:uint, param2:Function) : void
      {
         var id:uint = param1;
         var event:Function = param2;
         if(id == 0)
         {
            event(new UserInfo());
            return;
         }
         SocketConnection.sendByQueue(CommandID.GET_SIM_USERINFO,[id],function(param1:SocketEvent):void
         {
            var _loc2_:UserInfo = new UserInfo();
            UserInfo.setForSimpleInfo(_loc2_,param1.data as IDataInput);
            event(_loc2_);
            if(RelationManager.isFriend(_loc2_.userID) || RelationManager.isBlack(_loc2_.userID))
            {
               RelationManager.upDateInfoForSimpleInfo(_loc2_);
            }
         });
      }
      
      public static function upDateSimpleInfo(param1:UserInfo, param2:Function = null) : void
      {
         var info:UserInfo = param1;
         var event:Function = param2;
         if(info.userID == 0)
         {
            if(event != null)
            {
               event();
            }
            return;
         }
         SocketConnection.sendByQueue(CommandID.GET_SIM_USERINFO,[info.userID],function(param1:SocketEvent):void
         {
            UserInfo.setForSimpleInfo(info,param1.data as IDataInput);
            if(event != null)
            {
               event();
            }
         });
      }
      
      public static function upDateMoreInfo(param1:UserInfo, param2:Function = null) : void
      {
         var info:UserInfo = param1;
         var event:Function = param2;
         if(info.userID == 0)
         {
            if(event != null)
            {
               event();
            }
            return;
         }
         SocketConnection.sendByQueue(CommandID.GET_MORE_USERINFO,[info.userID],function(param1:SocketEvent):void
         {
            UserInfo.setForMoreInfo(info,param1.data as IDataInput);
            if(event != null)
            {
               event();
            }
         });
      }
      
      public static function seeOnLine(param1:Array, param2:Function) : void
      {
         var byd:ByteArray;
         var i:int;
         var arr:Array = null;
         var ids:Array = param1;
         var event:Function = param2;
         arr = [];
         var len:int = int(ids.length);
         if(len == 0)
         {
            event(arr);
            return;
         }
         byd = new ByteArray();
         i = 0;
         while(i < len)
         {
            byd.writeUnsignedInt(ids[i]);
            i++;
         }
         SocketConnection.sendByQueue(CommandID.SEE_ONLINE,[len,byd],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               arr.push(new OnLineInfo(_loc2_));
               _loc4_++;
            }
            event(arr);
         });
      }
   }
}
