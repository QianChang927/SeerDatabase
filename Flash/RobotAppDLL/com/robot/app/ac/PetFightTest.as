package com.robot.app.ac
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class PetFightTest
   {
      
      public static var isTest:Boolean = false;
      
      public static var fightIndex:uint;
      
      public static var totalFightTimer:uint;
      
      private static var _testApp:AppModel;
      
      private static var _infoA:Array = new Array();
       
      
      public function PetFightTest()
      {
         super();
      }
      
      public static function getDate() : void
      {
         Alarm.show("赛尔号页游战斗力测试器已下架，请前往《赛尔号巅峰之战》体验战斗力测试机相关内容！");
      }
      
      private static function onStartHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.START_FIGHT_TEST,onStartHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _infoA = new Array();
         _infoA.push(_loc2_.readUnsignedInt());
         _infoA.push(_loc2_.readUnsignedInt());
         _infoA.push(_loc2_.readUnsignedInt());
         if(!_testApp)
         {
            _testApp = new AppModel(ClientConfig.getAppModule("PetFightTestPanel"),"正在打开战斗力测试面板....");
            _testApp.setup();
         }
         _testApp.init(_infoA);
         _testApp.show();
      }
      
      public static function startTest(param1:uint) : void
      {
         fightIndex = 0;
         switch(param1)
         {
            case 1:
               totalFightTimer = 1;
               break;
            case 2:
               totalFightTimer = 3;
               break;
            case 3:
               totalFightTimer = 5;
               break;
            case 4:
               totalFightTimer = 10;
         }
         PetFightModel.status = PetFightModel.FIGHT_WITH_NPC;
         SocketConnection.addCmdListener(CommandID.PET_FIGHT_TEST,onTestHandler);
         SocketConnection.send(CommandID.PET_FIGHT_TEST,23 + param1);
      }
      
      private static function onTestHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.PET_FIGHT_TEST,onTestHandler);
         isTest = true;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
      }
      
      private static function onFightOverHandler(param1:PetFightEvent) : void
      {
         fightIndex = 0;
         totalFightTimer = 0;
         isTest = false;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
         if(_testApp)
         {
            _testApp.destroy();
            _testApp = null;
         }
      }
   }
}
