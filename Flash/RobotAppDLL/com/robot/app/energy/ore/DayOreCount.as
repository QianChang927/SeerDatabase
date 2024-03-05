package com.robot.app.energy.ore
{
   import com.robot.core.CommandID;
   import com.robot.core.info.task.MiningCountInfo;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import org.taomee.events.SocketEvent;
   
   public class DayOreCount extends EventDispatcher
   {
      
      public static const countOK:String = "COUNT_OK";
      
      public static const countError:String = "COUNT_ERROR";
      
      public static var oreCount:uint;
      
      public static var weekCount:Boolean;
      
      public static var monthCount:Boolean;
       
      
      public var _curType:uint;
      
      public function DayOreCount()
      {
         super();
      }
      
      public function sendToServer(param1:uint) : void
      {
         this._curType = param1;
         SocketConnection.addCmdListener(CommandID.TALK_COUNT,this.onCount);
         SocketConnection.send(CommandID.TALK_COUNT,param1);
      }
      
      private function onCount(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.TALK_COUNT,this.onCount);
         var _loc2_:MiningCountInfo = param1.data as MiningCountInfo;
         oreCount = _loc2_.miningCount;
         switch(this._curType)
         {
            case 1004:
               if(oreCount >= 1)
               {
                  weekCount = true;
               }
               break;
            case 1501:
               if(oreCount >= 1)
               {
                  monthCount = true;
               }
               break;
            case 2101:
               if(oreCount >= 1)
               {
                  monthCount = true;
               }
         }
         dispatchEvent(new Event(countOK));
      }
   }
}
