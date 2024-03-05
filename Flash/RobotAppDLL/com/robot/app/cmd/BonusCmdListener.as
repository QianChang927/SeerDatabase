package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.event.BonusEvent;
   import com.robot.core.info.BonusInfo;
   import com.robot.core.net.SocketConnection;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class BonusCmdListener extends BaseBean
   {
       
      
      public function BonusCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.BONUS_RECEIVE_NOTICE,this.onBonusReceive);
         finish();
      }
      
      private function onBonusReceive(param1:SocketEvent) : void
      {
         var _loc2_:BonusInfo = param1.data as BonusInfo;
         EventManager.dispatchEvent(new BonusEvent(BonusEvent.BONUS_RECEIVE,_loc2_));
      }
   }
}
