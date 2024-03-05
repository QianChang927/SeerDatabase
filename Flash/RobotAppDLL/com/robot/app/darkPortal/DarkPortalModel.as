package com.robot.app.darkPortal
{
   import com.robot.app.buyItem.ProductAction;
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class DarkPortalModel
   {
      
      private static var _curBossId:uint;
      
      private static var _curDoor:uint;
      
      public static var doorIndex:uint = 0;
      
      private static var _doorHanlder:Function;
      
      private static var _fiSucHandler:Function;
      
      private static var _panel:AppModel;
      
      private static var _curFun:Function;
      
      private static var _petBtn:SimpleButton;
       
      
      public function DarkPortalModel()
      {
         super();
      }
      
      public static function get curDoor() : uint
      {
         return _curDoor;
      }
      
      public static function set curDoor(param1:uint) : void
      {
         _curDoor = param1;
      }
      
      public static function get curBossId() : uint
      {
         return _curBossId;
      }
      
      public static function set curBossId(param1:uint) : void
      {
         _curBossId = param1;
      }
      
      public static function enterDarkProtal(param1:uint, param2:Function = null, param3:uint = 0) : void
      {
         doorIndex = param3;
         _curDoor = param1;
         _doorHanlder = param2;
         SocketConnection.addCmdListener(CommandID.OPEN_DARKPORTAL,onSucHandler);
         SocketConnection.send(CommandID.OPEN_DARKPORTAL,param1);
      }
      
      private static function onSucHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.OPEN_DARKPORTAL,onSucHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         _curBossId = _loc3_;
         if(_doorHanlder != null)
         {
            _doorHanlder();
            _doorHanlder = null;
         }
         enterMap();
      }
      
      public static function enterMap() : void
      {
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS;
         var _loc1_:uint = 10040;
         var _loc2_:uint = uint(_curDoor + 1);
         if(_loc2_ >= 60)
         {
            _loc1_ = 10263;
         }
         else
         {
            if(_loc2_ > 6)
            {
               if(_loc2_ % 6 == 0)
               {
                  _loc1_ += _loc2_ / 6;
               }
               else
               {
                  _loc1_ += uint(_loc2_ / 6) + 1;
               }
            }
            else
            {
               _loc1_++;
            }
            if(_loc1_ > 10049)
            {
               _loc1_ += 150;
            }
         }
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         MapManager.changeLocalMap(_loc1_);
      }
      
      public static function fightDarkProtal(param1:Function = null) : void
      {
         var func:Function = param1;
         _fiSucHandler = func;
         PetFightModel.defaultNpcID = 0;
         if(MainManager.actorInfo.isVip)
         {
            SocketConnection.addCmdListener(CommandID.FIGHT_DARKPORTAL,onFiHandler);
            SocketConnection.send(CommandID.FIGHT_DARKPORTAL);
         }
         else if(getDefinitionByName("com.robot.app2.control.TwelveDoorController").preTimes < 20)
         {
            SocketConnection.addCmdListener(CommandID.FIGHT_DARKPORTAL,onFiHandler);
            SocketConnection.send(CommandID.FIGHT_DARKPORTAL);
         }
         else
         {
            ItemManager.upDateCollection(1700004,function():void
            {
               if(ItemManager.getCollectionInfo(1700004) != null)
               {
                  SocketConnection.addCmdListener(CommandID.ADD_CHALLENGE_TIME,onAddTimes);
                  SocketConnection.send(CommandID.ADD_CHALLENGE_TIME);
               }
               else
               {
                  SocketConnection.send(1022,86061365);
                  EventManager.addEventListener(RobotEvent.MONEY_BUY,onBuy);
                  EventManager.addEventListener(RobotEvent.CANCEL_MONEY_BUY,onCancelBuy);
                  ProductAction.buyMoneyProduct(201057);
               }
            });
         }
      }
      
      private static function onAddTimes(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ADD_CHALLENGE_TIME,onAddTimes);
         SocketConnection.addCmdListener(CommandID.FIGHT_DARKPORTAL,onFiHandler);
         SocketConnection.send(CommandID.FIGHT_DARKPORTAL);
      }
      
      private static function onBuy(param1:DynamicEvent) : void
      {
         SocketConnection.send(1022,86061366);
         SocketConnection.addCmdListener(CommandID.ADD_CHALLENGE_TIME,onAddTimes);
         SocketConnection.send(CommandID.ADD_CHALLENGE_TIME);
      }
      
      private static function onCancelBuy(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.MONEY_BUY,onBuy);
         EventManager.removeEventListener(RobotEvent.CANCEL_MONEY_BUY,onCancelBuy);
      }
      
      private static function onFiHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIGHT_DARKPORTAL,onFiHandler);
         if(_fiSucHandler != null)
         {
            _fiSucHandler();
            _fiSucHandler = null;
         }
      }
      
      public static function leaveDarkProtal(param1:Function = null) : void
      {
         leave(param1);
      }
      
      private static function leave(param1:Function) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(CommandID.LEAVE_DARKPORTAL,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.LEAVE_DARKPORTAL,arguments.callee);
            if(fun != null)
            {
               fun();
            }
            MapManager.changeMap(110);
         });
         SocketConnection.send(CommandID.LEAVE_DARKPORTAL);
      }
      
      public static function showDoor(param1:uint, param2:Function = null) : void
      {
         destroyPanel();
         _curFun = param2;
         _panel = new AppModel(ClientConfig.getAppModule("DarkDoorChoicePanel_" + param1),"正在打开暗黑之门");
         _panel.setup();
         _panel.sharedEvents.addEventListener(Event.CLOSE,onCloseHandler);
         _panel.show();
      }
      
      private static function onCloseHandler(param1:Event) : void
      {
         if(_curFun != null)
         {
            _curFun();
            _curFun = null;
         }
      }
      
      public static function destroyPanel() : void
      {
         if(_panel)
         {
            _panel.sharedEvents.removeEventListener(Event.CLOSE,onCloseHandler);
            _panel.destroy();
            _panel = null;
         }
      }
      
      public static function destroy() : void
      {
         destroyPanel();
         SocketConnection.removeCmdListener(CommandID.OPEN_DARKPORTAL,onSucHandler);
         SocketConnection.removeCmdListener(CommandID.FIGHT_DARKPORTAL,onFiHandler);
         onCloseHandler(null);
      }
      
      public static function showPetEnrichBlood() : void
      {
         var t:uint = 0;
         t = setTimeout(function():void
         {
            clearTimeout(t);
            _petBtn = MapManager.currentMap.controlLevel["petMc"];
            _petBtn.addEventListener(MouseEvent.CLICK,onClickHandler);
            ToolTipManager.add(_petBtn,"精灵背包");
         },200);
      }
      
      private static function onLeave(param1:Event) : void
      {
      }
      
      private static function onClickHandler(param1:MouseEvent) : void
      {
         FightPetBagController.show();
      }
      
      public static function des() : void
      {
         if(_petBtn)
         {
            ToolTipManager.remove(_petBtn);
            _petBtn.addEventListener(MouseEvent.CLICK,onClickHandler);
            _petBtn = null;
         }
         FightPetBagController.destroy();
      }
   }
}
