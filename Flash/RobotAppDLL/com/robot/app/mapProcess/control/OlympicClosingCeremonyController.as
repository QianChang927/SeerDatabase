package com.robot.app.mapProcess.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   
   public class OlympicClosingCeremonyController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _loginTime:uint;
      
      private static var _names:Array = ["库克","库博","菲普斯","格雷迪","米兰","阿基米德"];
       
      
      public function OlympicClosingCeremonyController()
      {
         super();
      }
      
      public static function initForMap760(param1:BaseMapProcess) : void
      {
         _map = param1;
         MapListenerManager.add(_map.btnLevel["leitaiBtn"],onFixtureClick,"擂台");
         MapListenerManager.add(_map.btnLevel["resultBtn"],onFixtureClick,"星际奥运会成绩单");
         SocketConnection.addCmdListener(CommandID.OLYMPIC_DALEI_GET_REGION,onGetRegion);
      }
      
      private static function onGetRegion(param1:SocketEvent) : void
      {
         var region:uint = 0;
         var e:SocketEvent = param1;
         var data:ByteArray = e.data as ByteArray;
         region = data.readUnsignedInt();
         AnimateManager.playMcAnimate(_map.depthLevel["taskmc"],1,"mc",function():void
         {
            FightManager.fightWithBoss(_names[region - 1],region);
         });
      }
      
      public static function addMsg() : void
      {
         var t1:uint = 0;
         var t2:uint = 0;
         t1 = setTimeout(function():void
         {
            clearTimeout(t1);
            LocalMsgController.addLocalMsg("OlympicMailPanel");
         },3 * 60 * 1000);
         t2 = setTimeout(function():void
         {
            clearTimeout(t2);
            LocalMsgController.addLocalMsg("OlympicMailPanel");
         },30 * 60 * 1000);
      }
      
      private static function onFixtureClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.currentTarget.name);
         switch(_loc2_)
         {
            case "leitaiBtn":
               SocketConnection.send(1022,86050352);
               ModuleManager.showModule(ClientConfig.getAppModule("OlympicArenaPanel"),"正在加载...");
               break;
            case "resultBtn":
               SocketConnection.send(1022,86050353);
               ModuleManager.showModule(ClientConfig.getAppModule("OlympicArenaResultPanel"),"正在加载...");
         }
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.OLYMPIC_DALEI_GET_REGION,onGetRegion);
         if(_map)
         {
            _map = null;
         }
      }
   }
}
