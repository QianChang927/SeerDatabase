package com.robot.app2.control.game.sorensenBattle
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.loading.Loading;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GameGodOfDestruction
   {
      
      public static var item_num_befor_fight:int;
      
      private static var _currentStage:int = 0;
      
      private static var _startTime:int = 0;
      
      private static const MAX_STAGE:int = 6;
      
      private static const PET_CONFIG:Array = [[1128,1629,1748],[881,1494,475],[962,1800,737,591],[1659,985,1538,546],[1701,1844,1427,1488,315],[2205]];
       
      
      public function GameGodOfDestruction()
      {
         super();
      }
      
      public static function startGame() : void
      {
         var dimoxisi:MovieClip = null;
         BonusController.addIgnore(371);
         _startTime = 0;
         _currentStage = 0;
         if(MapManager.currentMap.id == 973)
         {
            dimoxisi = MapManager.currentMap.controlLevel["dimoxisi"];
            LevelManager.closeMouseEvent();
            AnimateManager.playMcAnimate(dimoxisi,2,"mv",function():void
            {
               TweenLite.to(MainManager.actorModel,1,{
                  "x":617,
                  "y":298,
                  "onComplete":function():void
                  {
                     KTool.changeMapWithCallBack(10458,enterScene);
                  }
               });
            });
         }
         else
         {
            KTool.changeMapWithCallBack(10458,enterScene);
         }
      }
      
      private static function enterScene() : void
      {
         SocketConnection.send(1022,86069975);
         intoMap();
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,intoMap);
         AnimateManager.playMcAnimate(mapMv,1,"mv",showBoss);
      }
      
      private static function intoMap(param1:* = null) : void
      {
         if(MapManager.currentMap.id != 10458)
         {
            ToolBarController.panel.show();
            LevelManager.iconLevel.visible = true;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,intoMap);
            return;
         }
         looseTip.visible = false;
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         MainManager.actorModel.x = 127;
         MainManager.actorModel.y = 470;
         MapListenerManager.add(MapManager.currentMap.topLevel["leave_btn"],onLeveBtnCLick,"离开");
         MapListenerManager.add(MapManager.currentMap.topLevel["bag"],onPetBagHandler,"背包");
      }
      
      private static function showBoss(param1:Function = null) : void
      {
         var fun:Function = param1;
         AnimateManager.playMcAnimate(mapMv,2 + _currentStage,"mv",function():void
         {
            var _loc1_:int = 0;
            while(_loc1_ < 5)
            {
               if(Boolean(PET_CONFIG[_currentStage][_loc1_]) && Boolean(mapMv["mv"]["p" + _loc1_]))
               {
                  if(_currentStage != MAX_STAGE - 1)
                  {
                     addPetToContainer(PET_CONFIG[_currentStage][_loc1_],mapMv.getChildAt(0)["p" + _loc1_]);
                  }
                  MapListenerManager.add(mapMv.getChildAt(0)["p" + _loc1_],fight,PetXMLInfo.getName(PET_CONFIG[_currentStage][_loc1_]));
               }
               _loc1_++;
            }
         });
      }
      
      private static function addPetToContainer(param1:int, param2:MovieClip) : void
      {
         var pid:int = param1;
         var container:MovieClip = param2;
         ResourceManager.getResource(ClientConfig.getPetSwfPath(pid),function(param1:MovieClip):void
         {
            param1.gotoAndStop("down");
            container.addChild(param1);
         },"pet");
      }
      
      private static function get mapMv() : MovieClip
      {
         return MapManager.currentMap.controlLevel["mapMv"];
      }
      
      private static function fight(param1:MouseEvent = null) : void
      {
         var region:int;
         var e:MouseEvent = param1;
         ItemManager.upDateCollection(1700585,function():void
         {
            item_num_befor_fight = ItemManager.getNumByID(1700585);
         });
         region = 853 + _currentStage;
         if(_currentStage == MAX_STAGE - 1)
         {
            region = 852;
         }
         SocketConnection.sendWithCallback(CommandID.MIBAO_FIGHT,null,region);
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var tid:int = 0;
         var e:PetFightEvent = param1;
         var info:FightOverInfo = e.dataObj as FightOverInfo;
         KTool.getFrameMc(mapMv,2 + _currentStage,"mv",function(param1:MovieClip):void
         {
            param1.gotoAndStop(param1.totalFrames);
         });
         if(info.winnerID == MainManager.actorID)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("GodOfDestructionSettlementPanel"),"正在打开...",function():void
            {
               if(_currentStage == MAX_STAGE - 1)
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20140228_4"),function():void
                  {
                     leave();
                  });
               }
               else
               {
                  ++_currentStage;
                  showBoss();
               }
            });
         }
         else
         {
            looseTip.visible = true;
            tid = int(setTimeout(function():void
            {
               clearTimeout(tid);
               leave();
            },3000));
         }
      }
      
      private static function onLeveBtnCLick(param1:*) : void
      {
         Alert.show("确定要离开吗？",leave);
      }
      
      private static function onPetBagHandler(param1:MouseEvent) : void
      {
         FightPetBagController.show();
      }
      
      private static function leave() : void
      {
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,intoMap);
         MapManager.changeMap(973);
         BonusController.removeIgnore(371);
      }
      
      private static function get looseTip() : MovieClip
      {
         return mapMv["looseTip"];
      }
      
      public static function playPreTask() : void
      {
         var mcloader:MCLoader = null;
         mcloader = new MCLoader(ClientConfig.getMapAnimate("dimoxiusi"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var mapMv:MovieClip = null;
            var e:* = param1;
            mapMv = mcloader.loader.content["mv"];
            var taskQuePro:TaskQuneProcessor = new TaskQuneProcessor();
            taskQuePro.addChangeMap(973,function():void
            {
               var tid:int = 0;
               tid = int(setTimeout(function():void
               {
                  clearTimeout(tid);
                  MapObjectControl.hideOrShowAllObjects(false);
               },200));
               MapManager.currentMap.depthLevel.addChild(mapMv);
               MapManager.currentMap.controlLevel.visible = false;
               KTool.hideMapAllPlayerAndMonster();
            });
            taskQuePro.addMapMv(mapMv);
            taskQuePro.procesEndFun = function():void
            {
               BufferRecordManager.setMyState(1074,true);
               MapManager.currentMap.controlLevel.visible = true;
               MapObjectControl.hideOrShowAllObjects(true);
               mcloader.clear();
               DisplayUtil.removeForParent(mapMv);
               KTool.showMapAllPlayerAndMonster();
               ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
            };
            taskQuePro.start();
         });
         mcloader.doLoad();
      }
   }
}
