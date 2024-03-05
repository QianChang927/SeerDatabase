package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.net.SocketConnection;
   
   public class DragonExchangeController
   {
       
      
      public function DragonExchangeController()
      {
         super();
      }
      
      public static function setup() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,function(param1:ItemEvent):void
         {
            ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,arguments.callee);
            if(ItemManager.getCollectionInfo(1200452))
            {
               SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,560);
            }
            if(ItemManager.getCollectionInfo(1200453))
            {
               SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,561);
            }
         });
      }
   }
}
