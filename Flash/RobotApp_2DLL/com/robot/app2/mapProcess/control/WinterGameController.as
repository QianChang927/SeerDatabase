package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.PetCarnivalController;
   import com.robot.app.control.petCarnival.CarnivalPetInfo;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.app2.utilClass.EncrySmallGame;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.SyncEvent;
   import flash.net.SharedObject;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class WinterGameController
   {
      
      private static const BITBUF:int = 23068;
      
      private static const ACT_MAP:int = 1160;
      
      private static var _encry:EncrySmallGame;
       
      
      public function WinterGameController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(BitBuffSetClass.getState(BITBUF) == 0)
         {
            startPreTask();
         }
      }
      
      public static function open(param1:MovieClip = null) : void
      {
         var icon:MovieClip = param1;
         KTool.changeMapWithCallBack(ACT_MAP,function():void
         {
            if(BitBuffSetClass.getState(BITBUF) == 1)
            {
               ModuleManager.showAppModule("WinterGameWisdomPanel");
            }
         });
      }
      
      private static function startPreTask() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_964_winter_game_wisdom"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            MapObjectControl.hideOrShowAllObjects(false);
            KTool.hideMapPlayerAndMonster();
            MapManager.currentMap.controlLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,1,"anim",function():void
            {
               MapObjectControl.hideOrShowAllObjects(true);
               KTool.showMapPlayerAndMonster();
               DisplayUtil.removeForParent(mc);
               BitBuffSetClass.setState(BITBUF,1);
               ModuleManager.showAppModule("WinterGameWisdomPanel");
            });
         });
      }
      
      public static function setupPopup() : void
      {
         var showPopup:Function = function():void
         {
            ResourceManager.getResource(ClientConfig.getAppResource("2016/0115/winter_game_popup"),function(param1:MovieClip):void
            {
               var onClick:Function = null;
               var mc:MovieClip = param1;
               onClick = function(param1:MouseEvent):void
               {
                  switch(param1.target.name)
                  {
                     case "close":
                        DisplayUtil.removeForParent(mc);
                        mc.removeEventListener(MouseEvent.CLICK,onClick);
                        break;
                     case "go":
                        MapManager.changeMap(ACT_MAP);
                  }
               };
               LevelManager.tipLevel.addChild(mc);
               mc.addEventListener(MouseEvent.CLICK,onClick);
            });
         };
         var so:SharedObject = so = SOManager.getUserSO(SOManager.ACTIVITY);
         var key:String = "winter_game_" + MainManager.actorID + "_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate);
         if(!so.data[key])
         {
            showPopup();
            so.data[key] = true;
            so.flush();
         }
      }
      
      public static function initEquip() : void
      {
         if(MapManager.currentMap.id == 4)
         {
            NpcDialogNew_1.show(NPC.AYENI,["哈哈哈哈，" + MainManager.actorInfo.formatNick + "冬季精灵运动会正在火热进行中！来和我的朋友们竞争金牌吧，战胜他们我会接受你的挑战哟！"],["这就去赛场看看！","我是来看风景的。。。"],[function():void
            {
               MapManager.changeMap(ACT_MAP);
            }]);
         }
         else
         {
            MapManager.changeMap(ACT_MAP);
         }
      }
      
      public static function startGhost() : void
      {
         var _loader:MCLoader = null;
         var _game:Sprite = null;
         var onLoadSWFComplete:Function = null;
         var onGameStartHandler:Function = null;
         var onGameCloseHandler:Function = null;
         var startGame:Function = function():void
         {
            _loader = new MCLoader(ClientConfig.getGameSwfPath("ShadownGame20160115"));
            _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _loader.doLoad();
         };
         onLoadSWFComplete = function(param1:MCLoadEvent):void
         {
            _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _game = param1.getContent() as Sprite;
            _game.addEventListener("startGame",onGameStartHandler);
            _game.addEventListener("closeGame",onGameCloseHandler);
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.removeContentLevel();
            LevelManager.gameLevel.addChild(_game);
            LevelManager.stage.focus = _game;
         };
         onGameStartHandler = function(param1:Event):void
         {
            var e:Event = param1;
            KTool.getBitSet([14712],function(param1:Array):void
            {
               if(param1[0] == 0)
               {
                  SocketConnection.sendWithCallback(45616,null,1,2,0);
               }
            });
         };
         onGameCloseHandler = function(param1:*):void
         {
            remove();
            var _loc2_:uint = 0;
            if(param1 is SyncEvent)
            {
               _loc2_ = param1.changeList[0] as uint;
            }
            ModuleManager.showAppModule("WinterGameDuomeidaiPanel");
            if(param1 is SyncEvent)
            {
               SocketConnection.sendWithCallback(45616,null,2,2,_loc2_);
            }
         };
         var remove:Function = function():void
         {
            if(_game)
            {
               LevelManager.stage.frameRate = 24;
               LevelManager.showOrRemoveMapLevelandToolslevel(true);
               LevelManager.addLevel();
               DisplayUtil.removeForParent(_game);
               _game.removeEventListener("startGame",onGameStartHandler);
               _game.removeEventListener("closeGame",onGameCloseHandler);
               _game = null;
               _loader.loader.unloadAndStop();
               _loader = null;
            }
         };
         startGame();
      }
      
      public static function startMelon() : void
      {
         var _loader:MCLoader = null;
         var _game:Sprite = null;
         var onLoadSWFComplete:Function = null;
         var onCloseGame:Function = null;
         var startGame:Function = function():void
         {
            _loader = new MCLoader(ClientConfig.getGameSwfPath("FiveMagicHouseGame20160115"));
            _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _loader.doLoad();
         };
         onLoadSWFComplete = function(param1:MCLoadEvent):void
         {
            var e:MCLoadEvent = param1;
            _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _game = e.getContent() as Sprite;
            LevelManager.stage.focus = _game;
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.removeContentLevel();
            LevelManager.gameLevel.addChild(_game);
            _game.addEventListener("MiniGameClose",onCloseGame);
            SocketConnection.sendWithCallback(43310,function():void
            {
               _encry = new EncrySmallGame();
               _encry.rand = 1033;
            },30,3);
         };
         onCloseGame = function(param1:*):void
         {
            var e:* = param1;
            var _result:uint = e.extra as uint;
            _encry.score = _result;
            SocketConnection.sendWithCallback(43310,function():void
            {
               removeEvents();
               ModuleManager.showAppModule("TenthAnniversaryCelebrationGameNo2MainPanel");
            },31,_encry.sendValue);
         };
         var removeEvents:Function = function():void
         {
            if(_game)
            {
               _game.removeEventListener("MiniGameClose",onCloseGame);
               LevelManager.stage.frameRate = 24;
               LevelManager.showOrRemoveMapLevelandToolslevel(true);
               LevelManager.addLevel();
               DisplayUtil.removeForParent(_game);
               _game = null;
               _loader.loader.unloadAndStop();
               _loader = null;
            }
         };
         startGame();
      }
      
      public static function startZuma() : void
      {
         var _loader:MCLoader = null;
         var _game:Sprite = null;
         var onLoadSWFComplete:Function = null;
         var onGameStartHandler:Function = null;
         var onGameCloseHandler:Function = null;
         var startGame:Function = function():void
         {
            _loader = new MCLoader(ClientConfig.getGameSwfPath("ZumaGameFor20190628"));
            _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _loader.doLoad();
         };
         onLoadSWFComplete = function(param1:MCLoadEvent):void
         {
            _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _game = param1.getContent() as Sprite;
            _game.addEventListener("startGame",onGameStartHandler);
            _game.addEventListener("closeGame",onGameCloseHandler);
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.removeContentLevel();
            LevelManager.gameLevel.addChild(_game);
            LevelManager.stage.focus = _game;
         };
         onGameStartHandler = function(param1:Event):void
         {
            var e:Event = param1;
            SocketConnection.sendWithCallback(43310,function():void
            {
               _encry = new EncrySmallGame();
               _encry.rand = 1033;
            },30,6);
         };
         onGameCloseHandler = function(param1:*):void
         {
            var _result:uint;
            var e:* = param1;
            remove();
            _result = 0;
            if(e is SyncEvent)
            {
               _result = e.changeList[0] as uint;
            }
            if(e is SyncEvent)
            {
               _encry.score = _result;
               SocketConnection.sendWithCallback(43310,function():void
               {
                  ModuleManager.showAppModule("VIPThemeWizard2019MainPanel");
               },32,_encry.sendValue);
            }
         };
         var remove:Function = function():void
         {
            if(_game)
            {
               LevelManager.stage.frameRate = 24;
               LevelManager.showOrRemoveMapLevelandToolslevel(true);
               LevelManager.addLevel();
               DisplayUtil.removeForParent(_game);
               _game.removeEventListener("startGame",onGameStartHandler);
               _game.removeEventListener("closeGame",onGameCloseHandler);
               _game = null;
               _loader.loader.unloadAndStop();
               _loader = null;
            }
         };
         startGame();
      }
      
      public static function startBear() : void
      {
         ModuleManager.showAppModule("IamTheKingOfTheGameAmoyLeBears_WinterGamePanel");
      }
      
      public static function startPod() : void
      {
         var _loc1_:Array = PetManager.infos;
         if(_loc1_.length <= 0)
         {
            Alarm.show("出战背包中需要放置参加活动的精灵！");
            return;
         }
         var _loc2_:CarnivalPetInfo = PetCarnivalController.getInstance().getPet(_loc1_[0].catchTime);
         var _loc3_:Object = new Object();
         _loc3_.heroId = _loc2_.id;
         _loc3_.speed = _loc2_.sudu;
         _loc3_.fun = null;
         ModuleManager.showAppModule("HurdlesPanel_WinterGame",_loc3_);
      }
      
      public static function startClimb() : void
      {
         var _loader:MCLoader = null;
         var _game:Sprite = null;
         var onLoadSWFComplete:Function = null;
         var onGameStartHandler:Function = null;
         var onGameCloseHandler:Function = null;
         var startGame:Function = function():void
         {
            _loader = new MCLoader(ClientConfig.getGameSwfPath("FlyeavesGoWall20160122"));
            _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _loader.doLoad();
         };
         onLoadSWFComplete = function(param1:MCLoadEvent):void
         {
            _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _game = param1.getContent() as Sprite;
            _game.addEventListener("startGame",onGameStartHandler);
            _game.addEventListener("closeGame",onGameCloseHandler);
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.removeContentLevel();
            LevelManager.gameLevel.addChild(_game);
            LevelManager.stage.focus = _game;
         };
         onGameStartHandler = function(param1:Event):void
         {
            var e:Event = param1;
            KTool.getBitSet([249],function(param1:Array):void
            {
               if(param1[0] == 0)
               {
                  SocketConnection.send(43310,30,2);
               }
            });
         };
         onGameCloseHandler = function(param1:*):void
         {
            var _result:uint;
            var e:* = param1;
            remove();
            _result = 0;
            if(e is SyncEvent)
            {
               SocketConnection.addCmdListener(43310,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(43310,arguments.callee);
                  ModuleManager.showAppModule("TenthAnniversaryCelebrationGameNo1MainPanel");
               });
               SocketConnection.send(43310,32,e.changeList[0]);
            }
         };
         var remove:Function = function():void
         {
            if(_game)
            {
               LevelManager.stage.frameRate = 24;
               LevelManager.showOrRemoveMapLevelandToolslevel(true);
               LevelManager.addLevel();
               DisplayUtil.removeForParent(_game);
               _game.removeEventListener("startGame",onGameStartHandler);
               _game.removeEventListener("closeGame",onGameCloseHandler);
               _game = null;
               _loader.loader.unloadAndStop();
               _loader = null;
            }
         };
         startGame();
      }
      
      public static function startStone() : void
      {
         var _loader:MCLoader = null;
         var _game:Sprite = null;
         var onLoadStartComplete:Function = null;
         var onStartGame:Function = null;
         var onCloseGame:Function = null;
         var onLoadSWFComplete:Function = null;
         var onGameStartHandler:Function = null;
         var onGameCloseHandler:Function = null;
         var startGameStart:Function = function():void
         {
            _loader = new MCLoader(ClientConfig.getGameStartPath("StoneLLKStart_WinterGame"));
            _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadStartComplete);
            _loader.doLoad();
         };
         onLoadStartComplete = function(param1:MCLoadEvent):void
         {
            _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadStartComplete);
            _game = param1.getContent() as Sprite;
            _game.addEventListener("startGame",onStartGame);
            _game.addEventListener("closeGame",onCloseGame);
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.removeContentLevel();
            LevelManager.gameLevel.addChild(_game);
            LevelManager.stage.focus = _game;
         };
         onStartGame = function(param1:Event):void
         {
            removeStart();
            startGame();
         };
         onCloseGame = function(param1:Event):void
         {
            removeStart();
            _loader.loader.unloadAndStop();
            _loader = null;
            ModuleManager.showAppModule("WinterGameWisdomPanel");
         };
         var startGame:Function = function():void
         {
            _loader = new MCLoader(ClientConfig.getGameSwfPath("StoneLLK_WinterGame"));
            _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _loader.doLoad();
         };
         onLoadSWFComplete = function(param1:MCLoadEvent):void
         {
            _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _game = param1.getContent() as Sprite;
            _game.addEventListener("startGame",onGameStartHandler);
            _game.addEventListener("closeGame",onGameCloseHandler);
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.removeContentLevel();
            LevelManager.gameLevel.addChild(_game);
            LevelManager.stage.focus = _game;
         };
         onGameStartHandler = function(param1:Event):void
         {
            StatManager.sendStat2014("0129冬季精灵运动会最终弹","成功进入石门迷阵游戏","2016运营活动");
         };
         onGameCloseHandler = function(param1:*):void
         {
            var _loc3_:int = 0;
            var _loc4_:Boolean = false;
            removeGame();
            var _loc2_:uint = 0;
            ModuleManager.showAppModule("WinterGameWisdomPanel");
            if(param1 is SyncEvent)
            {
               _loc3_ = int(param1.changeList[1]);
               if(_loc4_ = Boolean(param1.changeList[2]))
               {
                  _loc3_++;
               }
               if(_loc3_ > 6)
               {
                  _loc3_ = 6;
               }
               SocketConnection.send(43694,1,_loc3_);
            }
         };
         var removeStart:Function = function():void
         {
            if(_game)
            {
               LevelManager.stage.frameRate = 24;
               LevelManager.showOrRemoveMapLevelandToolslevel(true);
               LevelManager.addLevel();
               DisplayUtil.removeForParent(_game);
               _game.removeEventListener("startGame",onGameStartHandler);
               _game.removeEventListener("closeGame",onGameCloseHandler);
               _game = null;
            }
         };
         var removeGame:Function = function():void
         {
            if(_game)
            {
               LevelManager.stage.frameRate = 24;
               LevelManager.showOrRemoveMapLevelandToolslevel(true);
               LevelManager.addLevel();
               DisplayUtil.removeForParent(_game);
               _game.removeEventListener("startGame",onGameStartHandler);
               _game.removeEventListener("closeGame",onGameCloseHandler);
               _game = null;
               _loader.loader.unloadAndStop();
               _loader = null;
            }
         };
         startGameStart();
      }
      
      public static function startKan() : void
      {
         var _loader:MCLoader = null;
         var _game:Sprite = null;
         var onLoadStartComplete:Function = null;
         var onStartGame:Function = null;
         var onCloseGame:Function = null;
         var onLoadSWFComplete:Function = null;
         var onGameStartHandler:Function = null;
         var onGameCloseHandler:Function = null;
         var startGameStart:Function = function():void
         {
            _loader = new MCLoader(ClientConfig.getGameStartPath("PetLLKStart_WinterGame"));
            _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadStartComplete);
            _loader.doLoad();
         };
         onLoadStartComplete = function(param1:MCLoadEvent):void
         {
            _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadStartComplete);
            _game = param1.getContent() as Sprite;
            _game.addEventListener("startGame",onStartGame);
            _game.addEventListener("closeGame",onCloseGame);
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.removeContentLevel();
            LevelManager.gameLevel.addChild(_game);
            LevelManager.stage.focus = _game;
         };
         onStartGame = function(param1:Event):void
         {
            var e:Event = param1;
            removeStart();
            SocketConnection.sendWithCallback(43310,function():void
            {
               startGame();
            },30,1);
            StatManager.sendStat2014("0129冬季精灵运动会最终弹","成功进入机械连连看游戏","2016运营活动");
         };
         onCloseGame = function(param1:Event):void
         {
            removeStart();
            _loader.loader.unloadAndStop();
            _loader = null;
            ModuleManager.showAppModule("TenthAnniversaryCelebrationGameNo1MainPanel");
         };
         var startGame:Function = function():void
         {
            _loader = new MCLoader(ClientConfig.getGameSwfPath("PetLLK_WinterGame"));
            _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _loader.doLoad();
         };
         onLoadSWFComplete = function(param1:MCLoadEvent):void
         {
            _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _game = param1.getContent() as Sprite;
            _game.addEventListener("startGame",onGameStartHandler);
            _game.addEventListener("closeGame",onGameCloseHandler);
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.removeContentLevel();
            LevelManager.gameLevel.addChild(_game);
            LevelManager.stage.focus = _game;
         };
         onGameStartHandler = function(param1:Event):void
         {
         };
         onGameCloseHandler = function(param1:*):void
         {
            var _loc3_:int = 0;
            var _loc4_:Boolean = false;
            removeGame();
            var _loc2_:uint = 0;
            ModuleManager.showAppModule("TenthAnniversaryCelebrationGameNo1MainPanel");
            if(param1 is SyncEvent)
            {
               _loc3_ = int(param1.changeList[1]);
               if(_loc4_ = Boolean(param1.changeList[2]))
               {
                  _loc3_++;
               }
               if(_loc3_ > 6)
               {
                  _loc3_ = 6;
               }
               SocketConnection.send(43310,31,param1.changeList[0]);
            }
         };
         var removeStart:Function = function():void
         {
            if(_game)
            {
               LevelManager.stage.frameRate = 24;
               LevelManager.showOrRemoveMapLevelandToolslevel(true);
               LevelManager.addLevel();
               DisplayUtil.removeForParent(_game);
               _game.removeEventListener("startGame",onGameStartHandler);
               _game.removeEventListener("closeGame",onGameCloseHandler);
               _game = null;
            }
         };
         var removeGame:Function = function():void
         {
            if(_game)
            {
               LevelManager.stage.frameRate = 24;
               LevelManager.showOrRemoveMapLevelandToolslevel(true);
               LevelManager.addLevel();
               DisplayUtil.removeForParent(_game);
               _game.removeEventListener("startGame",onGameStartHandler);
               _game.removeEventListener("closeGame",onGameCloseHandler);
               _game = null;
               _loader.loader.unloadAndStop();
               _loader = null;
            }
         };
         startGameStart();
      }
   }
}
