package com.robot.app.mapProcess.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   
   public class InevitableBattleController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function InevitableBattleController()
      {
         super();
      }
      
      public static function initForMap666(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(!BufferRecordManager.getState(MainManager.actorInfo,448))
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20121116_3"),function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,448,true);
            });
         }
         MapListenerManager.add(_map.depthLevel["magic_cattle"],function():void
         {
            SocketConnection.send(1022,86052289);
            ModuleManager.showModule(ClientConfig.getAppModule("InevitableBattlePanel"));
         },"宿命之战 魔牛降临");
      }
      
      public static function initEquipment(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(map.depthLevel["magic_cattle"])
         {
            MapListenerManager.add(map.depthLevel["magic_cattle"],function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("InevitableBattlePanel"));
            },"宿命之战 魔牛降临");
         }
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            _map = null;
         }
      }
   }
}
