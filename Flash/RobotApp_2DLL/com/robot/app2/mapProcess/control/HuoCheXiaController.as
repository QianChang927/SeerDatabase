package com.robot.app2.mapProcess.control
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   
   public class HuoCheXiaController
   {
      
      private static var _a:Array = [1200750,1200751,1200752,1200753];
       
      
      public function HuoCheXiaController()
      {
         super();
      }
      
      public static function setup() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,function(param1:ItemEvent):void
         {
            var _loc2_:uint = 0;
            while(_loc2_ < _a.length)
            {
               if(ItemManager.getCollectionInfo(_a[_loc2_]))
               {
                  SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,951 + _loc2_);
               }
               _loc2_++;
            }
            if(ItemManager.getCollectionInfo(1200765))
            {
               SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,959);
            }
         });
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         MapListenerManager.add(map.depthLevel["huochexia"],function():void
         {
            SocketConnection.send(1022,86057692);
            if(!BufferRecordManager.getMyState(642))
            {
               CartoonManager.play(ClientConfig.getFullMovie("cartoon/cartoon_20130515"),function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20130517_3"),function():void
                  {
                     BufferRecordManager.setMyState(642,true);
                     ModuleManager.showModule(ClientConfig.getAppModule("HuoCheXiaPanel"));
                  });
               });
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("HuoCheXiaPanel"));
            }
         });
      }
   }
}
