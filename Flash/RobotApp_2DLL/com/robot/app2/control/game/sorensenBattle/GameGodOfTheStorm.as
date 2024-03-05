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
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.loading.Loading;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class GameGodOfTheStorm
   {
      
      public static var item_num_befor_fight:int;
      
      private static var _currentStage:int = 0;
      
      private static var _startTime:int = 0;
      
      private static const MAX_STAGE:int = 6;
      
      private static const PET_CONFIG:Array = [[1627,943,1748],[1097,453,475],[962,965,737,591],[793,985,1449,745],[1701,345,1263,1488,315],[2146]];
       
      
      public function GameGodOfTheStorm()
      {
         super();
      }
      
      public static function startGame() : void
      {
         var aluonasi:MovieClip = null;
         BonusController.addIgnore(297);
         _startTime = 0;
         _currentStage = 0;
         if(MapManager.currentMap.id == 973)
         {
            aluonasi = MapManager.currentMap.controlLevel["aluonasi"];
            LevelManager.closeMouseEvent();
            AnimateManager.playMcAnimate(aluonasi,2,"mv",function():void
            {
               TweenLite.to(MainManager.actorModel,1,{
                  "x":141,
                  "y":250,
                  "onComplete":function():void
                  {
                     KTool.changeMapWithCallBack(10434,enterScene);
                  }
               });
            });
         }
         else
         {
            KTool.changeMapWithCallBack(10434,enterScene);
         }
      }
      
      private static function enterScene() : void
      {
         intoMap();
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,intoMap);
         startTheCountdown(showBoss);
      }
      
      private static function intoMap(param1:* = null) : void
      {
         if(MapManager.currentMap.id != 10434)
         {
            SystemTimerManager.removeTickFun(refreshTime);
            ToolBarController.panel.show();
            LevelManager.iconLevel.visible = true;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,intoMap);
            return;
         }
         looseTip.visible = false;
         lefTimeMc.visible = false;
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         MainManager.actorModel.x = 277;
         MainManager.actorModel.y = 466;
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
               if(Boolean(PET_CONFIG[_currentStage][_loc1_]) && Boolean(mapMv.getChildAt(0)["p" + _loc1_]))
               {
                  MapListenerManager.add(mapMv.getChildAt(0)["p" + _loc1_],fight,PetXMLInfo.getName(PET_CONFIG[_currentStage][_loc1_]));
               }
               _loc1_++;
            }
         });
      }
      
      private static function startTheCountdown(param1:Function) : void
      {
         var fun:Function = param1;
         AnimateManager.playMcAnimate(mapMv,1,"mv",function():void
         {
            _startTime = SystemTimerManager.time;
            SystemTimerManager.addTickFun(refreshTime);
            fun();
         });
      }
      
      private static function get mapMv() : MovieClip
      {
         return MapManager.currentMap.controlLevel["mapMv"];
      }
      
      private static function get looseTip() : MovieClip
      {
         return MapManager.currentMap.controlLevel["looseTip"];
      }
      
      private static function refreshTime() : void
      {
         var parseTime:int;
         var leftTime:int;
         var num:int = 0;
         var fen:Number = NaN;
         var s:String = null;
         var miao:String = null;
         var t:int = 0;
         if(null == lefTimeMc)
         {
            return;
         }
         lefTimeMc.visible = true;
         parseTime = SystemTimerManager.time - _startTime;
         leftTime = 60 * 30 - parseTime;
         if(leftTime > 0)
         {
            num = leftTime;
            fen = Math.floor(num / 60);
            num -= fen * 60;
            if(num < 10)
            {
               miao = "0" + num;
            }
            else
            {
               miao = "" + num;
            }
            s = String(fen) + miao;
            if(lefTimeMc is MovieClip)
            {
               KTool.showScore(lefTimeMc as MovieClip,uint(s),0,true);
            }
            else
            {
               (lefTimeMc as TextField).text = fen + ":" + miao;
            }
         }
         else
         {
            looseTip.visible = true;
            mapMv.mouseChildren = mapMv.mouseEnabled = false;
            t = int(setTimeout(function():void
            {
               clearTimeout(t);
               leave();
            },1800));
         }
      }
      
      private static function get lefTimeMc() : MovieClip
      {
         return MapManager.currentMap.controlLevel["timeMc"];
      }
      
      private static function fight(param1:MouseEvent = null) : void
      {
         var region:int;
         var e:MouseEvent = param1;
         ItemManager.upDateCollection(1700489,function():void
         {
            item_num_befor_fight = ItemManager.getNumByID(1700489);
         });
         region = 517 + _currentStage;
         if(_currentStage == MAX_STAGE - 1)
         {
            region = 516;
         }
         SocketConnection.sendWithCallback(CommandID.MIBAO_FIGHT,function(param1:SocketEvent):void
         {
            SystemTimerManager.removeTickFun(refreshTime);
         },region);
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         var info:FightOverInfo = e.dataObj as FightOverInfo;
         KTool.getFrameMc(mapMv,2 + _currentStage,"mv",function(param1:MovieClip):void
         {
            param1.gotoAndStop(param1.totalFrames);
         });
         if(_currentStage != MAX_STAGE - 1)
         {
            SystemTimerManager.addTickFun(refreshTime);
         }
         if(info.winnerID == MainManager.actorID)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("GodOfStormSettlementPanel"),"正在打开...",function():void
            {
               if(_currentStage == MAX_STAGE - 1)
               {
                  leave();
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
            leave();
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
         SystemTimerManager.removeTickFun(refreshTime);
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,intoMap);
         MapManager.changeMap(973);
         BonusController.removeIgnore(297);
      }
      
      public static function playPreTask() : void
      {
         var mcloader:MCLoader = null;
         mcloader = new MCLoader(ClientConfig.getMapAnimate("aluonasi"),null,Loading.TITLE_AND_PERCENT,"加载..");
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
               BufferRecordManager.setMyState(1014,true);
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
      
      private function initTime() : void
      {
      }
   }
}
