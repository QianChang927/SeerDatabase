package com.robot.app2.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashSet;
   import org.taomee.events.SocketEvent;
   
   public class VipTipPushControl
   {
      
      private static var _lastMapId:int;
      
      private static var _mapIds:HashSet = new HashSet();
      
      private static var _catchItemIds:Array = [300505,300001,300002,300003,300004,300005,300006,300007,300008,300009,300010];
      
      private static var _lastCatchItemsNum:int;
      
      private static var _pveFailCount:uint = 0;
      
      private static var _pveMapList:Array = [600,10035,10036,10038,500,10032,10039,10051,10055,10052];
      
      private static var needShow:Boolean = true;
       
      
      public function VipTipPushControl()
      {
         super();
      }
      
      public static function setUp() : void
      {
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         FightDispatcher.addEventListener(PetFightEvent.START_FIGHT,onStartFight);
      }
      
      public static function setupPVE(param1:String, param2:Boolean = false) : void
      {
         var pveName:String = param1;
         var needChangeMap:Boolean = param2;
         if(isPetLevelOver50AndNoVip)
         {
            return;
         }
         if(needChangeMap)
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               displayPVEPanel();
            });
         }
         else
         {
            displayPVEPanel();
         }
      }
      
      private static function displayPVEPanel() : void
      {
         ++_pveFailCount;
         if(_pveFailCount == 5)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("VipTipPushPanel"),"正在打开...","fight_fire");
         }
      }
      
      private static function onStartFight(param1:Event) : void
      {
         var e:Event = param1;
         ItemManager.getCollection(function():void
         {
            _lastCatchItemsNum = allCatchItemsNum;
         });
      }
      
      private static function get allCatchItemsNum() : int
      {
         var _loc3_:int = 0;
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         while(_loc2_ < _catchItemIds.length)
         {
            _loc3_ = int(_catchItemIds[_loc2_]);
            _loc1_ += ItemManager.getNumByID(_loc3_);
            _loc2_++;
         }
         return _loc1_;
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         if(!isPetLevelOver50AndNoVip)
         {
            return;
         }
         if(Boolean(MapManager.currentMap) && _pveMapList.indexOf(MapManager.currentMap.id) != -1)
         {
            setupPVE(null,true);
         }
         ItemManager.getCollection(function():void
         {
            if(_lastCatchItemsNum - allCatchItemsNum >= 5)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("VipTipPushPanel"),"正在加载...","catch_privilege");
               return;
            }
            SocketConnection.sendByQueue(CommandID.FUCK_SHINEHOO_TIMES,[10232],function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.FUCK_SHINEHOO_TIMES,arguments.callee);
               var _loc3_:ByteArray = param1.data as ByteArray;
               _loc3_.position = 0;
               var _loc4_:uint;
               if((_loc4_ = _loc3_.readUnsignedInt()) == 10 && needShow)
               {
                  needShow = false;
                  ModuleManager.showModule(ClientConfig.getAppModule("VipTipPushPanel"),"正在加载...","level_up_privilege");
               }
            });
         });
      }
      
      private static function onMapChange(param1:*) : void
      {
         _mapIds.add(MapManager.currentMap.id);
         if(_mapIds.length >= 11 && isPetLevelOver50AndNoVip)
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
            ModuleManager.showModule(ClientConfig.getAppModule("VipTipPushPanel"),"正在加载...","flight_mode");
         }
      }
      
      public static function get isPetLevelOver50AndNoVip() : Boolean
      {
         return !MainManager.actorInfo.isVip && MainManager.actorInfo.petMaxLev >= 50;
      }
   }
}
