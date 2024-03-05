package com.robot.app.darkPortal
{
   import com.robot.app.panel.FightMatchingPanel;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class DarkKongfuController
   {
      
      public static var _curA:Array = [];
      
      private static var _handler:Function;
      
      private static var _panel:AppModel;
       
      
      public function DarkKongfuController()
      {
         super();
      }
      
      public static function setDarkPet(param1:Array) : void
      {
         _curA = param1.slice();
         var _loc2_:int = 0;
         while(_loc2_ < param1.length)
         {
            if(param1[_loc2_] == undefined || param1[_loc2_] == null)
            {
               param1.splice(_loc2_,1);
               _loc2_--;
            }
            _loc2_++;
         }
         if(param1.length == 0)
         {
            Alarm.show("请选择要参加暗黑武道会的精灵！");
            return;
         }
         if(PetManager.catchTimes.length == 0)
         {
            Alarm.show("你选择参加的暗黑精灵不在你的背包中了哦！");
            return;
         }
         var _loc3_:Array = PetManager.catchTimes;
         var _loc4_:int = 0;
         while(_loc4_ < param1.length)
         {
            if(_loc3_.indexOf((param1[_loc4_] as PetInfo).catchTime.toString()) == -1)
            {
               Alarm.show("你选择参加的暗黑精灵不在你的背包中了哦！");
               return;
            }
            _loc4_++;
         }
         var _loc5_:ByteArray;
         (_loc5_ = new ByteArray()).writeUnsignedInt(param1.length);
         var _loc6_:int = 0;
         while(_loc6_ < param1.length)
         {
            _loc5_.writeUnsignedInt((param1[_loc6_] as PetInfo).catchTime);
            _loc6_++;
         }
         SocketConnection.addCmdListener(CommandID.SET_DARK_PET,onSetComHandler);
         SocketConnection.send(CommandID.SET_DARK_PET,_loc5_);
      }
      
      private static function onSetComHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SET_DARK_PET,onSetComHandler);
         joinDarkGongfu();
      }
      
      public static function joinDarkGongfu() : void
      {
         PetFightModel.type = PetFightModel.DARK_FIGHT;
         PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER;
         SocketConnection.send(CommandID.JOIN_DARK_PET_GONGFU);
         FightMatchingPanel.show(closeDarkGongfu);
      }
      
      private static function closeDarkGongfu() : void
      {
         SocketConnection.addCmdListener(CommandID.INVITE_FIGHT_CANCEL,onCancelDarkGongfu);
         SocketConnection.send(CommandID.INVITE_FIGHT_CANCEL);
      }
      
      private static function onCancelDarkGongfu(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.INVITE_FIGHT_CANCEL,onCancelDarkGongfu);
         PetFightModel.type = 0;
      }
      
      public static function getResult(param1:Function = null) : void
      {
         _handler = param1;
         SocketConnection.addCmdListener(CommandID.GET_DPT_RESULT,onGetComHandler);
         SocketConnection.send(CommandID.GET_DPT_RESULT);
      }
      
      private static function onGetComHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_DPT_RESULT,onGetComHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_handler != null)
         {
            _handler(_loc3_);
         }
      }
      
      public static function showPanel() : void
      {
         if(!_panel)
         {
            _panel = new AppModel(ClientConfig.getAppModule("DarkGongfuPanel"),"正在打开武道会面板....");
            _panel.setup();
         }
         _panel.init(_curA);
         _panel.show();
      }
      
      public static function destoryPanel() : void
      {
         if(_panel)
         {
            _panel.destroy();
            _panel = null;
         }
      }
   }
}
