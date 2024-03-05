package com.robot.app.task.petstory.control
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class TrainDoorMisController
   {
      
      public static var isMis:Boolean;
      
      public static var type:uint;
      
      private static var _mapList:Array = [null,[10058,10060],[10062,10064],[10066,10068],[10070,10072],[10074,10076],[10078,10080],[10082,10084],[10086,10088],[10090,10092],[10095,10097],[10099,10101],[10103,10105],[10107,10109],[10111,10113]];
       
      
      public function TrainDoorMisController()
      {
         super();
      }
      
      public static function start() : void
      {
         isMis = true;
         checkRound();
      }
      
      public static function checkRound() : void
      {
         SocketConnection.addCmdListener(CommandID.TRAIN_DOOR_MISTERY_CHECK,onCheckRound);
         SocketConnection.send(CommandID.TRAIN_DOOR_MISTERY_CHECK);
      }
      
      private static function onCheckRound(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.TRAIN_DOOR_MISTERY_CHECK,onCheckRound);
         var _loc2_:ByteArray = param1.data as ByteArray;
         type = _loc2_.readUnsignedInt();
         TrainDoorController.getInstance()._curtGameTpye = 1;
         TrainDoorController.getInstance()._curtType = type;
         if(TrainDoorController.getInstance()._curtLayer == 10)
         {
            MapManager.changeLocalMap(10114);
         }
         else
         {
            MapManager.changeLocalMap(_mapList[type][1]);
         }
      }
   }
}
