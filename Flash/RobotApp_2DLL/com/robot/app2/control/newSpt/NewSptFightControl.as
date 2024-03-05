package com.robot.app2.control.newSpt
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSptFightControl
   {
      
      private static var _lastMapId:int;
      
      private static var _info:com.robot.app2.control.newSpt.LevelInfo;
      
      private static var _controlMc:MovieClip;
       
      
      public function NewSptFightControl()
      {
         super();
      }
      
      public static function enterGame(param1:com.robot.app2.control.newSpt.LevelInfo) : void
      {
         var info:com.robot.app2.control.newSpt.LevelInfo = param1;
         if(info.type == NewSptManager.SPT_TYPE_1)
         {
            StatManager.sendStat2014("勇者历险","进入第" + info.id + "关的",StatManager.RUN_ACT);
         }
         _info = info;
         _lastMapId = MapManager.currentMap.id;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         ResourceManager.getResource(ClientConfig.getAppRes("new_spt_map_control_ui"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            ResourceManager.getResource(ClientConfig.getPetHeadPath(info.lastBossInfo.petId),function(param1:MovieClip):void
            {
               param1.scaleX = param1.scaleY = 112.9 / param1.width;
               mc["petContainer"].addChild(param1);
            });
            KTool.changeMapWithCallBack(mapId,function():void
            {
               _controlMc = mc;
               _controlMc.addEventListener(MouseEvent.CLICK,onControlMcClick);
               enterMap();
               showControlUI();
            });
         });
      }
      
      private static function onControlMcClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "startBtn":
               _controlMc.parent.removeChild(_controlMc);
               showCamaerMove(function():void
               {
                  showBoss();
               });
               break;
            case "leave":
               leaveGame();
         }
      }
      
      private static function enterMap(param1:* = null) : void
      {
         var _loc2_:DisplayObject = null;
         if(!_info.isLastBoss)
         {
            _loc2_ = KTool.getPetIcon(ClientConfig.getPetSwfPath(_info.lastBossInfo.petId),50);
            _loc2_.x = 567;
            _loc2_.y = 280;
            MapManager.currentMap.controlLevel.addChild(_loc2_);
         }
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         MainManager.actorModel.visible = false;
      }
      
      private static function showCamaerMove(param1:Function) : void
      {
         var fun:Function = param1;
         var bgMoveMv:MovieClip = MapManager.currentMap.controlLevel["moveBg"];
         var fgMoveMv:MovieClip = MapManager.currentMap.controlLevel["moveFg"];
         var scalNumberBG:Number = 1.3;
         var scalNumberFG:Number = 1.15;
         var moveTime:Number = 2.5;
         TweenLite.to(bgMoveMv,moveTime,{
            "scaleX":scalNumberBG,
            "scaleY":scalNumberBG,
            "ease":function(param1:Number, param2:Number, param3:Number, param4:Number):Number
            {
               return param3 * (param1 = param1 / param4) * param1 + param2;
            },
            "onComplete":function():void
            {
               if(null != fun)
               {
                  fun();
               }
            }
         });
         TweenLite.to(fgMoveMv,moveTime,{
            "scaleX":scalNumberFG,
            "scaleY":scalNumberFG,
            "ease":function(param1:Number, param2:Number, param3:Number, param4:Number):Number
            {
               return param3 * (param1 = param1 / param4) * param1 + param2;
            }
         });
      }
      
      private static function showBoss() : void
      {
         var container:MovieClip = MapManager.currentMap.controlLevel["boosContainer"];
         var petId:int = _info.currentBossInfo.petId;
         var url:String = String(ClientConfig.getPetSwfPath(petId));
         var width:int = _info.rateOfProgress == _info.bossNum ? 200 : 100;
         container.addChild(KTool.getPetIcon(url,width));
         container.scaleX = container.scaleY = 0;
         TweenLite.to(container,1.3,{
            "scaleX":1,
            "scaleY":1,
            "onComplete":function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("NewSptBoosInfoPanel"),"正在打开...",_info);
            }
         });
      }
      
      private static function get mapId() : int
      {
         return _info.mapId;
      }
      
      private static function showControlUI() : void
      {
         LevelManager.appLevel.addChild(_controlMc);
         _controlMc["allNum"].gotoAndStop(_info.bossNum + 1);
         _controlMc["currentNum"].gotoAndStop(_info.rateOfProgress + 1);
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         var info:FightOverInfo = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            NewSptManager.updateFightStatu(function():void
            {
               if(_info.isPassAll)
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
                  leaveGame();
                  return;
               }
               enterMap();
               showControlUI();
            });
         }
         else
         {
            enterMap();
            ModuleManager.showModule(ClientConfig.getAppModule("NewSptBoosInfoPanel"),"正在打开...",_info);
         }
      }
      
      public static function leaveGame() : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         KTool.changeMapWithCallBack(_lastMapId,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NewSptMainPanel"),"正在打开...");
         });
         if(_controlMc)
         {
            _controlMc.removeEventListener(MouseEvent.CLICK,onControlMcClick);
            DisplayUtil.removeAllChild(_controlMc);
         }
         _controlMc = null;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         MainManager.actorModel.visible = true;
      }
      
      private static function onMapChange(param1:* = null) : void
      {
         if(MapManager.currentMap.id != _info.mapId)
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
            leaveGame();
         }
      }
   }
}
