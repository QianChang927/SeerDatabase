package com.robot.app.mapProcess.control
{
   import com.robot.app.buyItem.ProductAction;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class PetPracticeController
   {
      
      public static var state:uint;
      
      public static var totalTimes:uint;
      
      public static var remain:uint;
      
      public static var catchTime:uint;
      
      public static var practiceId:uint;
      
      public static var lv:uint;
      
      public static var nature:uint;
      
      public static var evs:uint;
      
      public static var old_dv:uint;
      
      public static var old_maxhp:uint;
      
      public static var old_atk:uint;
      
      public static var old_def:uint;
      
      public static var old_spatk:uint;
      
      public static var old_spdef:uint;
      
      public static var old_spd:uint;
      
      public static var new_dv:uint;
      
      public static var new_maxhp:uint;
      
      public static var new_atk:uint;
      
      public static var new_def:uint;
      
      public static var new_spatk:uint;
      
      public static var new_spdef:uint;
      
      public static var new_spd:uint;
      
      public static var dailyTimes:uint;
      
      public static var times:uint;
      
      private static var _isOpen:Boolean;
      
      private static var completeFunc:Function;
       
      
      public function PetPracticeController()
      {
         super();
      }
      
      public static function start(param1:Boolean = true) : void
      {
         var isOpen:Boolean = param1;
         if(isOpen)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PetCulturePanel"));
         }
      }
      
      private static function onPracticeStateHandler(param1:SocketEvent) : void
      {
         var _loc3_:int = 0;
         SocketConnection.removeCmdListener(CommandID.PET_PRACTICE_STATE,onPracticeStateHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         times = _loc2_.readUnsignedInt();
         if(Boolean(MainManager.actorInfo.vip) || ColorfulPrivilegeWishController.bonusType == 1)
         {
            dailyTimes = 3 - times;
         }
         else
         {
            dailyTimes = 2 - times;
         }
         evs = 0;
         if(dailyTimes == 0)
         {
            _loc2_.readUnsignedInt();
            totalTimes = _loc2_.readUnsignedInt();
            if(_isOpen)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("SelectPetPracticePanel"),"正在加载精灵修炼器....");
            }
         }
         else
         {
            state = _loc2_.readUnsignedInt();
            if(state == 1)
            {
               _loc2_.readUnsignedInt();
               remain = _loc2_.readUnsignedInt();
               catchTime = _loc2_.readUnsignedInt();
               practiceId = _loc2_.readUnsignedInt();
               lv = _loc2_.readUnsignedInt();
               nature = _loc2_.readUnsignedInt();
               while(_loc3_ < 6)
               {
                  evs += _loc2_.readUnsignedInt();
                  _loc3_++;
               }
               old_dv = _loc2_.readUnsignedInt();
               old_maxhp = _loc2_.readUnsignedInt();
               old_atk = _loc2_.readUnsignedInt();
               old_def = _loc2_.readUnsignedInt();
               old_spatk = _loc2_.readUnsignedInt();
               old_spdef = _loc2_.readUnsignedInt();
               old_spd = _loc2_.readUnsignedInt();
               new_dv = _loc2_.readUnsignedInt();
               new_maxhp = _loc2_.readUnsignedInt();
               new_atk = _loc2_.readUnsignedInt();
               new_def = _loc2_.readUnsignedInt();
               new_spatk = _loc2_.readUnsignedInt();
               new_spdef = _loc2_.readUnsignedInt();
               new_spd = _loc2_.readUnsignedInt();
               if(_isOpen)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("PetPracticePanel"),"正在加载精灵修炼器....");
               }
            }
            else
            {
               totalTimes = _loc2_.readUnsignedInt();
               if(_isOpen)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("SelectPetPracticePanel"),"正在加载精灵修炼器....");
               }
            }
         }
      }
      
      public static function setUp() : void
      {
         EventManager.addEventListener(RobotEvent.GOLD_BUY,onBuyReturn);
         SocketConnection.addCmdListener(CommandID.PETPRACTICE_SPEEDCOMPLETE,onCompletePractice);
      }
      
      public static function refleshItemValue(param1:Function) : void
      {
         var func:Function = param1;
         completeFunc = func;
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.ITEM_LIST,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:uint;
            if((_loc4_ = _loc3_.readUnsignedInt()) > 0)
            {
               SocketConnection.send(CommandID.PETPRACTICE_SPEEDCOMPLETE);
            }
            else
            {
               ProductAction.buyGoldProduct(240137);
            }
         });
         SocketConnection.send(CommandID.ITEM_LIST,1200578,1200578,2);
      }
      
      private static function onCompletePractice(param1:SocketEvent) : void
      {
         Alarm.show("修炼成功，" + PetXMLInfo.getName(practiceId) + "的个体值由<font color=\'#ff0000\'>" + old_dv + "</font>变化为<font color=\'#ff0000\'>" + new_dv);
         if(completeFunc != null)
         {
            completeFunc();
         }
      }
      
      private static function onBuyReturn(param1:DynamicEvent) : void
      {
         SocketConnection.send(CommandID.PETPRACTICE_SPEEDCOMPLETE);
      }
      
      public static function destroy() : void
      {
         EventManager.addEventListener(RobotEvent.GOLD_BUY,onBuyReturn);
      }
   }
}
