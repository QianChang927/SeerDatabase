package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.SimpleAlarm;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class HonorCmdListener extends BaseBean
   {
       
      
      public function HonorCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_HONOR_NOTICE,this.onGetHonor);
         finish();
      }
      
      private function onGetHonor(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         SimpleAlarm.show("恭喜你获得" + TextFormatUtil.getRedTxt(_loc3_.toString() + "点") + "巅峰荣誉");
      }
   }
}
