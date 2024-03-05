package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.aticon.FlyAction;
   import com.robot.core.aticon.WalkAction;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.MapType;
   import com.robot.core.mode.PeopleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.FakeClothSkeleton;
   import com.robot.core.teamPK.TeamPKManager;
   import com.robot.core.teamPK.shotActive.PKInteractiveAction;
   import com.robot.core.utils.Direction;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class UserListCmdListener extends BaseBean
   {
      
      public static var superList:Array = [];
       
      
      public function UserListCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.LIST_MAP_PLAYER,this.onUserList);
         finish();
      }
      
      private function onUserList(param1:SocketEvent) : void
      {
         var _loc5_:UserInfo = null;
         var _loc6_:PeopleModel = null;
         var _loc7_:FakeClothSkeleton = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         superList = [];
         var _loc4_:int = 0;
         for(; _loc4_ < _loc3_; _loc4_++)
         {
            _loc5_ = new UserInfo();
            UserInfo.setForPeoleInfo(_loc5_,_loc2_);
            _loc5_.serverID = MainManager.serverID;
            if(_loc5_.userID != MainManager.actorInfo.userID)
            {
               if(UserManager.contains(_loc5_.userID))
               {
                  continue;
               }
               _loc6_ = new PeopleModel(_loc5_);
               if(_loc5_.actionType == 0)
               {
                  _loc6_.walk = new WalkAction();
               }
               else
               {
                  _loc6_.walk = new FlyAction(_loc6_);
               }
               if(MapManager.currentMap)
               {
                  MapManager.currentMap.addUser(_loc6_);
               }
               if(MainManager.actorInfo.mapType == MapType.PK_TYPE)
               {
                  if(_loc5_.teamInfo.id != MainManager.actorInfo.mapID)
                  {
                     _loc6_.additiveInfo.info = TeamPKManager.AWAY;
                  }
                  else
                  {
                     _loc6_.additiveInfo.info = TeamPKManager.HOME;
                  }
                  _loc6_.interactiveAction = new PKInteractiveAction(_loc6_);
                  if(_loc5_.teamInfo.id != MainManager.actorInfo.teamInfo.id)
                  {
                     _loc7_ = new FakeClothSkeleton();
                     _loc6_.skeleton = _loc7_;
                     _loc7_.fakeID = 1;
                  }
               }
            }
            else if(MainManager.actorModel.nono)
            {
               MainManager.actorModel.nono.direction = Direction.DOWN;
            }
            if(_loc5_.teamInfo.coreCount >= 10 && _loc5_.teamInfo.isShow)
            {
               superList.push(_loc5_.userID);
            }
         }
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.FILTER_SUPER_TEAM));
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.CREATED_MAP_USER));
      }
   }
}
