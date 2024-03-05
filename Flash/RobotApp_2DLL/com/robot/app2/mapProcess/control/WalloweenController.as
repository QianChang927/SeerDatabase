package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class WalloweenController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _ui:MovieClip;
      
      private static var _state:int = 0;
      
      private static var _lightCode:int = 0;
      
      private static var _lightCount:int = 0;
      
      private static var _mapIndex:int = 0;
      
      public static var _doing:Boolean = false;
       
      
      public function WalloweenController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:String = "";
         if(MapManager.currentMap.id == 1)
         {
            _mapIndex = 0;
            _loc2_ = "map_1_10";
            _lightCode = 13532;
         }
         else if(MapManager.currentMap.id == 5)
         {
            _mapIndex = 3;
            _loc2_ = "map_5_10";
            _lightCode = 13535;
         }
         else if(MapManager.currentMap.id == 103)
         {
            _mapIndex = 1;
            _loc2_ = "map_103_10";
            _lightCode = 13533;
         }
         else if(MapManager.currentMap.id == 107)
         {
            _mapIndex = 4;
            _loc2_ = "map_107_10";
            _lightCode = 13536;
         }
         else if(MapManager.currentMap.id == 1039)
         {
            _mapIndex = 2;
            _loc2_ = "map_1039_10";
            _lightCode = 13534;
         }
         loadMc(_loc2_);
      }
      
      public static function setDoing() : void
      {
         _doing = true;
         if(_ui)
         {
            _ui.mcBar.visible = true;
         }
      }
      
      private static function loadMc(param1:String) : void
      {
         var url:String = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate(url),function(param1:MovieClip):void
         {
            _map.conLevel.addChild(param1);
            _ui = param1;
            _ui.buttonMode = true;
            _map.btnLevel.addChild(param1.mcBar);
            if(!_doing)
            {
               param1.mcBar.visible = false;
            }
            addEvent();
            getBuffData();
         });
      }
      
      private static function getBuffData() : void
      {
         KTool.getMultiValue([_lightCode],function(param1:Array):void
         {
            var _loc3_:int = 0;
            _state = param1[0];
            _lightCount = 0;
            var _loc2_:int = 0;
            while(_loc2_ < 3)
            {
               _loc3_ = int(BitUtils.getBit(_state,_loc2_));
               if(_loc3_ > 0)
               {
                  MovieClip(_ui["mc_" + _loc2_]).gotoAndStop(2);
                  ++_lightCount;
               }
               else
               {
                  MovieClip(_ui["mc_" + _loc2_]).gotoAndStop(1);
               }
               _loc2_++;
            }
            TextField(_ui["mcBar"]["txtCount"]).text = "" + _lightCount + "/3";
            if(_lightCount >= 3)
            {
               MovieClip(_ui["mcBar"]["mc"]).gotoAndStop(2);
            }
            else
            {
               MovieClip(_ui["mcBar"]["mc"]).gotoAndStop(1);
            }
         });
      }
      
      private static function addEvent() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            MovieClip(_ui["mc_" + _loc1_]).addEventListener(MouseEvent.CLICK,onClickLightHandler);
            _loc1_++;
         }
         MovieClip(_ui["mcBar"]["mc"]).addEventListener(MouseEvent.CLICK,onClickMcHandler);
      }
      
      protected static function onClickMcHandler(param1:MouseEvent) : void
      {
         if(_lightCount >= 3)
         {
            openWalloweenLightPanel();
            _ui.mcBar.visible = false;
         }
         else
         {
            _ui.mcBar.visible = false;
            _doing = false;
         }
      }
      
      private static function removeEvent() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            MovieClip(_ui["mc_" + _loc1_]).removeEventListener(MouseEvent.CLICK,onClickLightHandler);
            _loc1_++;
         }
         MovieClip(_ui["mcBar"]["mc"]).removeEventListener(MouseEvent.CLICK,onClickMcHandler);
      }
      
      protected static function onClickLightHandler(param1:MouseEvent) : void
      {
         var index:int = 0;
         var event:MouseEvent = param1;
         index = int(String(event.currentTarget.name).split("_")[1]);
         var has:int = int(BitUtils.getBit(_state,index));
         if(!has)
         {
            if(_doing)
            {
               Alert.show("是否要将南瓜灯放在这里？",function():void
               {
                  ItemManager.updateItems([1702587],function():void
                  {
                     var num:int = int(ItemManager.getNumByID(1702587));
                     if(num > 0)
                     {
                        SocketConnection.sendWithCallback(45513,function(param1:SocketEvent):void
                        {
                           getBuffData();
                        },1,_mapIndex + 1,index + 1);
                     }
                     else
                     {
                        Alert.show("你的南瓜灯不足，是否开始制作？",function():void
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("WalloweenMakeLightPanel"));
                        });
                     }
                  });
               });
            }
            else
            {
               openWalloweenLightPanel();
            }
         }
         else
         {
            openWalloweenLightPanel();
         }
      }
      
      private static function openWalloweenLightPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("WalloweenLightMainPanel"),"",_mapIndex + 1);
      }
      
      public static function destroy() : void
      {
         _map = null;
         removeEvent();
         _ui = null;
      }
   }
}
