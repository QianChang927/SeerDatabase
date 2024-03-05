package com.robot.app.control.petCollection
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class PetCollectionController
   {
      
      private static var index:uint = 1;
      
      private static const max:uint = 6;
      
      public static var status:Array = [];
       
      
      public function PetCollectionController()
      {
         super();
      }
      
      public static function show() : void
      {
         index = 1;
         status = [];
         check();
      }
      
      private static function check() : void
      {
         if(index <= max)
         {
            SocketConnection.addCmdListener(CommandID.IS_COLLECT,onCheckSuccess);
            SocketConnection.send(CommandID.IS_COLLECT,index);
         }
      }
      
      private static function onCheckSuccess(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.IS_COLLECT,onCheckSuccess);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:Boolean = Boolean(_loc2_.readUnsignedInt());
         status.push(_loc4_);
         ++index;
         check();
      }
      
      private static function showPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PetCollectionPanel"),"正在打开精灵收集计划....");
      }
   }
}
