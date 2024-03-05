package com.robot.core.cmd.nono
{
   import com.robot.core.CommandID;
   import com.robot.core.aticon.PeculiarAction;
   import com.robot.core.aticon.WalkAction;
   import com.robot.core.event.NonoEvent;
   import com.robot.core.info.NonoInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.EmptySkeletonStrategy;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.BitUtil;
   
   public class FollowCmdListener extends BaseBean
   {
       
      
      public function FollowCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.NONO_FOLLOW_OR_HOOM,this.onChanged);
         finish();
      }
      
      private function onChanged(param1:SocketEvent) : void
      {
         var _loc6_:BasePeoleModel = null;
         var _loc7_:NonoInfo = null;
         var _loc8_:uint = 0;
         var _loc9_:NonoInfo = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         if(_loc2_ == null)
         {
            return;
         }
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:Boolean = Boolean(_loc2_.readUnsignedInt());
         if(NonoManager.info)
         {
            if(NonoManager.info.userID == _loc3_)
            {
               NonoManager.info.state[1] = _loc5_;
            }
         }
         if((_loc6_ = UserManager.getUserModel(_loc3_)) != null)
         {
            if(_loc6_.info.actionType != 0)
            {
               _loc6_.info.actionType = 0;
               _loc6_.clickMc.y = -50;
               _loc6_.walk = new WalkAction();
               new PeculiarAction().standUp(_loc6_.skeleton as EmptySkeletonStrategy);
            }
            if(_loc5_)
            {
               (_loc7_ = new NonoInfo()).userID = _loc3_;
               _loc7_.superStage = _loc4_;
               _loc7_.nick = _loc2_.readUTFBytes(16);
               _loc7_.color = _loc2_.readUnsignedInt();
               _loc7_.power = _loc2_.readUnsignedInt() / 1000;
               _loc8_ = _loc2_.readUnsignedByte();
               _loc7_.isExtremeNono = Boolean(BitUtil.getBit(_loc8_,1));
               _loc7_.changeToPet = _loc2_.readUnsignedInt();
               if(MainManager.actorID == _loc3_)
               {
                  if(NonoManager.info)
                  {
                     NonoManager.info.superStage = _loc7_.superStage;
                     NonoManager.info.nick = _loc7_.nick;
                     NonoManager.info.color = _loc7_.color;
                     NonoManager.info.power = _loc7_.power;
                     NonoManager.info.isExtremeNono = _loc7_.isExtremeNono;
                     _loc7_ = NonoManager.info;
                  }
                  else
                  {
                     _loc7_.superNono = MainManager.actorInfo.superNono;
                     NonoManager.info = _loc7_;
                  }
               }
               else
               {
                  _loc7_.superNono = _loc6_.info.superNono;
               }
               _loc6_.showNono(_loc7_);
               _loc6_.info.nonoState[1] = true;
               NonoManager.dispatchEvent(new NonoEvent(NonoEvent.FOLLOW,_loc7_));
            }
            else
            {
               (_loc9_ = new NonoInfo()).userID = _loc3_;
               _loc9_.superStage = _loc4_;
               _loc6_.hideNono();
               _loc6_.info.nonoState[1] = false;
               NonoManager.dispatchEvent(new NonoEvent(NonoEvent.HOOM,_loc9_));
            }
         }
      }
   }
}
