package com.robot.app.mapProcess.active
{
   import com.robot.app.control.BroadcastController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class RunawaySaruikaActivity
   {
      
      private static var _hasFinish:Boolean;
       
      
      public function RunawaySaruikaActivity()
      {
         super();
      }
      
      public static function addBroadcast() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onGetMsgTime);
      }
      
      private static function onGetMsgTime(param1:SocketEvent) : void
      {
         var _loc3_:BroadcastInfo = null;
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(_loc2_.minutes == 27 || _loc2_.minutes == 57)
         {
            _loc3_ = new BroadcastInfo();
            _loc3_.isLocal = true;
            _loc3_.map = 24;
            _loc3_.txt = "神秘蛟龙激活了萨瑞卡体内的邪恶力量，魔化萨瑞卡正在暴走呢，快来解救我们的团战之王吧！";
            BroadcastController.addBroadcast(_loc3_);
         }
      }
      
      public static function initForMap24() : void
      {
         refreshMap();
      }
      
      private static function refreshMap() : void
      {
         removeEvent();
         if(hasFinshPreTask)
         {
            rocky.visible = true;
            saruika.addEventListener(MouseEvent.CLICK,onSarikaClick);
            rocky.addEventListener(MouseEvent.CLICK,onRockClick);
            ToolTipManager.add(saruika as InteractiveObject,"进阶高手必备精灵萨瑞卡");
            ToolTipManager.add(rocky as InteractiveObject,"罗开");
         }
         else
         {
            rocky.visible = false;
            saruika.addEventListener(MouseEvent.CLICK,playPreTask);
         }
      }
      
      private static function removeEvent() : void
      {
         saruika.removeEventListener(MouseEvent.CLICK,playPreTask);
         saruika.removeEventListener(MouseEvent.CLICK,onSarikaClick);
         rocky.removeEventListener(MouseEvent.CLICK,onRockClick);
         ToolTipManager.remove(saruika as InteractiveObject);
         ToolTipManager.remove(rocky as InteractiveObject);
      }
      
      protected static function onSarikaClick(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("RunawaySaRuikaPanel"),"正在加载...");
      }
      
      protected static function onRockClick(param1:Event) : void
      {
         SocketConnection.send(1022,86051812);
         ModuleManager.showModule(ClientConfig.getAppModule("SaruikaWeaponPanel"),"正在加载...");
      }
      
      private static function playPreTask(param1:* = null) : void
      {
         var e:* = param1;
         if(hasFinshPreTask)
         {
            return;
         }
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20121102_3"),function():void
         {
            BufferRecordManager.setState(MainManager.actorInfo,443,true);
            _hasFinish = true;
            refreshMap();
            SocketConnection.send(1022,86051793);
         });
      }
      
      public static function destory() : void
      {
         removeEvent();
      }
      
      private static function get hasFinshPreTask() : Boolean
      {
         if(_hasFinish)
         {
            return true;
         }
         return BufferRecordManager.getState(MainManager.actorInfo,443);
      }
      
      private static function get saruika() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["npc_saruika"];
      }
      
      private static function get saruikaIn5() : DisplayObject
      {
         return MapManager.currentMap.depthLevel["npc_saruika"];
      }
      
      private static function get rocky() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["rocky"];
      }
   }
}
