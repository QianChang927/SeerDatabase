package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.InformInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MessageManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.events.SocketEvent;
   
   public class BatsFamilyController
   {
       
      
      public function BatsFamilyController()
      {
         super();
      }
      
      public static function get hasSuit() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,436);
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onGetTime);
      }
      
      private static function onGetTime(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onGetTime);
         if(isInActive)
         {
            if(!hasSuit)
            {
               ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,function(param1:ItemEvent):void
               {
                  var _loc4_:InformInfo = null;
                  ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,arguments.callee);
                  var _loc3_:SingleItemInfo = ItemManager.getCollectionInfo(1200369);
                  if(Boolean(_loc3_) && _loc3_.itemNum > 0)
                  {
                     (_loc4_ = new InformInfo()).type = CommandID.ITEM_LIST;
                     _loc4_.exInfo = {"num":_loc3_.itemNum};
                     MessageManager.addInformInfo(_loc4_);
                  }
               });
            }
         }
      }
      
      public static function get isInActive() : Boolean
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.monthUTC == 10)
         {
            if(_loc1_.dateUTC >= 2 && _loc1_.dateUTC <= 29)
            {
               return true;
            }
         }
         return false;
      }
   }
}
