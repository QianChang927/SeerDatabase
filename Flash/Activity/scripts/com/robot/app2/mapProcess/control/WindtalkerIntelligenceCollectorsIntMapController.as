package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import org.taomee.effect.ColorFilter;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.BitUtil;
   
   public class WindtalkerIntelligenceCollectorsIntMapController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _chatTrust:int;
      
      private static var _competitionTrust:int;
      
      private static var _recuperateTrust:int;
      
      private static var _curSurplusItemNum:int;
      
      private static var _alreadlyGetTrust:int;
       
      
      public function WindtalkerIntelligenceCollectorsIntMapController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            _map.conLevel["item_" + _loc2_].addEventListener(MouseEvent.CLICK,onItemBtn);
            _map.conLevel["item_" + _loc2_].buttonMode = true;
            _loc2_++;
         }
         _map.conLevel["exit"].addEventListener(MouseEvent.CLICK,onExitBtn);
         _map.conLevel["getBtn"].addEventListener(MouseEvent.CLICK,onGetBtn);
         _map.conLevel["npc"].addEventListener(MouseEvent.CLICK,onNpcBtn);
         CommonUI.addYellowExcal(_map.conLevel,495,250,3);
         _map.conLevel["npc"].buttonMode = true;
         update();
      }
      
      private static function onNpcBtn(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("WindtalkerIntelligenceCollectorsAddTrustPanel"),"正在打开...");
      }
      
      private static function onItemBtn(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var serverProtocol:Array = [8,9,10,11,12];
         var index:int = int(event.currentTarget.name.split("_")[1]);
         SocketConnection.addCmdListener(45519,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(45519,arguments.callee);
            update();
         });
         SocketConnection.send(45519,serverProtocol[index]);
      }
      
      private static function onGetBtn(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("WindtalkerIntelligenceCollectorsMainPanel"),"正在打开...");
      }
      
      public static function update() : void
      {
         KTool.getMultiValue([3519],function(param1:Array):void
         {
            _curSurplusItemNum = 5;
            var _loc2_:int = 0;
            while(_loc2_ < 5)
            {
               if(BitUtil.getBit(param1[0],_loc2_) > 0)
               {
                  _map.conLevel["item_" + _loc2_].visible = false;
                  --_curSurplusItemNum;
               }
               else
               {
                  _map.conLevel["item_" + _loc2_].visible = true;
               }
               _loc2_++;
            }
         });
         KTool.getMultiValue([3518],function(param1:Array):void
         {
            var va:Array = param1;
            var num:int = int(va[0]);
            if(num >= 5 && num < 15)
            {
               if(_curSurplusItemNum == 0)
               {
                  SocketConnection.addCmdListener(45519,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(45519,arguments.callee);
                     update();
                  });
                  SocketConnection.send(45519,7);
               }
            }
         });
         KTool.getMultiValue([3517,3521,3520],function(param1:Array):void
         {
            var va:Array = param1;
            _chatTrust = va[0];
            _competitionTrust = va[1];
            if(va[2] >= 15)
            {
               _recuperateTrust = 20;
            }
            else
            {
               _recuperateTrust = 0;
            }
            _map.conLevel["totalTrustNumTx"].text = String(_chatTrust + _competitionTrust + _recuperateTrust) + "/60";
            _map.conLevel["theProgressBar"].scaleX = (_chatTrust + _competitionTrust + _recuperateTrust) / 60;
            _alreadlyGetTrust = _chatTrust + _competitionTrust + _recuperateTrust;
            KTool.enableMC([_map.conLevel["getBtn"]],false);
            _map.conLevel["getBtn"].filters = [ColorFilter.setGrayscale()];
            KTool.getMultiValue([3516],function(param1:Array):void
            {
               var _loc2_:int = 0;
               var _loc3_:int = 0;
               while(_loc3_ < 5)
               {
                  if(BitUtil.getBit(param1[0],_loc3_) <= 0)
                  {
                     if(_loc3_ < int(_alreadlyGetTrust / 12))
                     {
                        KTool.enableMC([_map.conLevel["getBtn"]],true);
                        _map.conLevel["getBtn"].filters = null;
                     }
                  }
                  _loc3_++;
               }
            });
         });
      }
      
      private static function onExitBtn(param1:MouseEvent) : void
      {
         MapManager.changeMap(994);
      }
      
      private static function removeEvent() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 5)
         {
            _map.conLevel["item_" + _loc1_].removeEventListener(MouseEvent.CLICK,onItemBtn);
            _loc1_++;
         }
         _map.conLevel["exit"].removeEventListener(MouseEvent.CLICK,onExitBtn);
         _map.conLevel["getBtn"].removeEventListener(MouseEvent.CLICK,onGetBtn);
      }
      
      public static function destroy() : void
      {
         removeEvent();
         _map = null;
      }
   }
}
