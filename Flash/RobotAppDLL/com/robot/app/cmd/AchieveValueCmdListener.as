package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class AchieveValueCmdListener extends BaseBean
   {
      
      public static var hashmap:HashMap = new HashMap();
       
      
      public function AchieveValueCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.LASTVALUE,this.handler);
         finish();
      }
      
      private function handler(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         hashmap.add(_loc3_,_loc4_);
      }
   }
}
