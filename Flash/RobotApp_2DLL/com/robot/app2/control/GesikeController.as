package com.robot.app2.control
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   
   public class GesikeController
   {
      
      private static var _map:BaseMapProcess;
      
      public static var updateFun:Function;
       
      
      public function GesikeController()
      {
         super();
      }
      
      public static function setup() : void
      {
      }
      
      public static function startTask() : void
      {
         if(!BitBuffSetClass.getState(22442))
         {
            CartoonManager.play(ClientConfig.getFullMovie("cartoon/cartoon_20130411_1"),function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20130412_5"),function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("GesikeFightPanel"));
                  BitBuffSetClass.setState(22442,1);
               });
            });
         }
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         MapListenerManager.add(_map.depthLevel["machine"],function(param1:Event):void
         {
            SocketConnection.send(1022,86056633);
            ModuleManager.showModule(ClientConfig.getAppModule("ElectricPetExchange"));
         },"");
         MapListenerManager.add(_map.conLevel["table"],function(param1:Event):void
         {
            SocketConnection.send(1022,86056632);
            ModuleManager.showModule(ClientConfig.getAppModule("GesikeFightPanel"));
         },"");
         MapListenerManager.add(_map.conLevel["pets"],function(param1:Event):void
         {
            SocketConnection.send(1022,86056631);
            ModuleManager.showModule(ClientConfig.getAppModule("GesikeFightPanel"));
         },"");
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
