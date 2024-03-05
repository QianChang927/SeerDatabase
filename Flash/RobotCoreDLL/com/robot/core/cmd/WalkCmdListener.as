package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.aticon.GroupWalkAction;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.algo.AStar;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class WalkCmdListener extends BaseBean
   {
       
      
      public function WalkCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.PEOPLE_WALK,this.onWalk);
         finish();
      }
      
      private function onWalk(param1:SocketEvent) : void
      {
         var _loc5_:Point = null;
         var _loc10_:Object = null;
         var _loc11_:BasePeoleModel = null;
         var _loc13_:uint = 0;
         var _loc14_:Array = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         _loc5_ = new Point(_loc2_.readUnsignedInt(),_loc2_.readUnsignedInt());
         var _loc6_:uint = _loc2_.readUnsignedInt();
         _loc2_.readUTFBytes(_loc6_);
         var _loc7_:uint = _loc2_.readUnsignedInt();
         var _loc8_:Array = [];
         var _loc9_:uint = _loc4_;
         var _loc12_:uint = 0;
         while(_loc12_ < _loc7_)
         {
            _loc13_ = _loc2_.readUnsignedInt();
            if(_loc11_ = UserManager.getUserModel(_loc13_))
            {
               _loc11_.walk.destroy();
               _loc11_.walk = new GroupWalkAction(_loc9_,_loc11_);
            }
            _loc9_ = _loc13_;
            _loc12_++;
         }
         if(_loc11_ = UserManager.getUserModel(_loc4_))
         {
            if(_loc14_ = AStar.find(_loc11_.pos,_loc5_))
            {
               _loc11_.walkAction(_loc5_,false);
            }
            else
            {
               _loc11_.x = _loc5_.x;
               _loc11_.y = _loc5_.y;
            }
         }
      }
   }
}
