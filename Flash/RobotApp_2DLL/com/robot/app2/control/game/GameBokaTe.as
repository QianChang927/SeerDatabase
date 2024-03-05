package com.robot.app2.control.game
{
   import com.robot.app.buyItem.ProductAction;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GameBokaTe
   {
      
      private static var _mapId:int = 10467;
      
      private static var _timer:Timer;
      
      private static var _cTime:CronTimeVo = new CronTimeVo("*","18","*","*","*","2014");
      
      private static var _currentStep:int;
      
      private static var _priates:Array = ["ailixun","zuoge","nisike","taqiladun","bokate"];
      
      private static var _priateNames:Array = ["艾里逊","左格","尼斯克","塔奇拉顿","博卡特"];
      
      private static var _priateStatus:Array = [];
      
      private static var _fightTimes:Array = [];
      
      private static var _hp:int;
      
      private static var _lastStatu:Boolean = false;
      
      private static var _earliestFightTime:int = -1;
       
      
      public function GameBokaTe()
      {
         super();
      }
      
      public static function startUp() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,enterMap);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
      }
      
      private static function enterMap(param1:MapEvent) : void
      {
         var e:MapEvent = param1;
         if(MapManager.currentMap.id != _mapId)
         {
            stopTimerCheck();
            EventManager.removeEventListener(RobotEvent.MONEY_BUY,onBuy);
            return;
         }
         SocketConnection.send(1022,86070355);
         if(!hasFinishPreTask() && !isInActivityTime)
         {
            KTool.changeMapWithCallBack(10468,function():void
            {
               playPreTask();
            });
            return;
         }
         MainManager.actorModel.x = 409;
         MainManager.actorModel.y = 244;
         winMv.gotoAndStop(1);
         EventManager.addEventListener(RobotEvent.MONEY_BUY,onBuy);
         if(MainManager.isFighting == false)
         {
            initForMap();
         }
      }
      
      private static function onBuy(param1:*) : void
      {
         if(ProductAction.productID == 201441)
         {
            if(ModuleManager.hasModule(ClientConfig.getAppModule("BokateEvolutionMainPanel")))
            {
               setTimeout(updateHp,1000);
               return;
            }
            onZhuruClick(null);
         }
      }
      
      private static function initForMap() : void
      {
         var i:int;
         if(MapManager.prevMapID != _mapId)
         {
            _currentStep = getCurrentStep();
         }
         _fightTimes = null;
         updateHp(function():void
         {
            updatePirateStatu(function():void
            {
               if(_hp == 0 && isInActivityTime)
               {
                  cutDownMv.visible = false;
                  hideOrShowPriate(false);
                  MapManager.currentMap.controlLevel["hpMv"].visible = false;
                  stopTimerCheck();
               }
               else
               {
                  startTimerCheck();
               }
            });
         });
         i = 0;
         while(i < 5)
         {
            addNpcClick(i);
            i++;
         }
         MapListenerManager.add(MapManager.currentMap.controlLevel["hpMv"]["zhuru"],onZhuruClick,"消耗10钻石为博卡特注入20矩阵能量！");
      }
      
      private static function updateHp(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([13063],function(param1:Array):void
         {
            var arr:Array = param1;
            SocketConnection.sendWithCallback(CommandID.BOKATE_EVOLUTION,function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               _loc2_.position = 0;
               _hp = _loc2_.readUnsignedInt();
               _hp = _hp > 1000 ? 1000 : _hp;
               if(arr[0] == 2)
               {
                  _hp = 0;
               }
               var _loc3_:int = Math.floor(_hp / 10);
               MapManager.currentMap.controlLevel["hpMv"]["bar"].gotoAndStop(_loc3_);
               ToolTipManager.add(MapManager.currentMap.controlLevel["hpMv"]["tip1"],"博卡特矩阵能量 " + _hp);
               var _loc4_:int = 1000 - _hp;
               ToolTipManager.add(MapManager.currentMap.controlLevel["hpMv"]["tip2"],"海盗矩阵能量 " + (1000 - _hp));
               if(fun != null)
               {
                  fun();
               }
            },1);
         });
      }
      
      private static function addNpcClick(param1:int) : void
      {
         var pName:String = null;
         var i:int = param1;
         var praiate:String = String(_priates[i]);
         pName = String(_priateNames[i]);
         var pMv:MovieClip = MapManager.currentMap.controlLevel[praiate];
         pMv.gotoAndStop(1);
         MapListenerManager.add(pMv,function(param1:MouseEvent):void
         {
            var _loc3_:Number = NaN;
            var _loc4_:String = null;
            var _loc5_:String = null;
            var _loc6_:* = null;
            if(i == 4)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("BokateEvolutionMainPanel"));
               return;
            }
            if(!isInActivityTime)
            {
               Alarm.show("不在活动时间！");
               return;
            }
            var _loc2_:int = _fightTimes[i] + 5 * 60 - SystemTimerManager.time;
            if(_loc2_ <= 0)
            {
               FightManager.fightNoMapBoss(pName,935 + i);
            }
            else
            {
               _loc3_ = Math.floor(_loc2_ / 60);
               _loc2_ -= _loc3_ * 60;
               if(_loc2_ > 5 * 60)
               {
                  return;
               }
               if(_loc2_ < 10)
               {
                  _loc4_ = "0" + _loc2_;
               }
               else
               {
                  _loc4_ = "" + _loc2_;
               }
               _loc6_ = "";
               if(_loc3_ == 0)
               {
                  _loc6_ = _loc4_ + "秒";
               }
               else
               {
                  _loc6_ = _loc3_ + "分" + _loc4_ + "秒";
               }
               Alarm.show(_priateNames[i] + "昏迷中，还有" + _loc6_ + "才能再次和他战斗！");
            }
         },pName);
      }
      
      private static function updatePirateStatu(param1:Function = null) : void
      {
         var fun:Function = param1;
         var callback:Function = function():void
         {
            var _loc2_:String = null;
            var _loc3_:String = null;
            var _loc4_:MovieClip = null;
            var _loc5_:MovieClip = null;
            var _loc6_:int = 0;
            var _loc7_:int = 0;
            _earliestFightTime = -1;
            var _loc1_:int = 0;
            while(_loc1_ < 4)
            {
               _loc2_ = String(_priates[_loc1_]);
               _loc3_ = String(_priateNames[_loc1_]);
               _loc5_ = (_loc4_ = MapManager.currentMap.controlLevel[_loc2_])["tip"];
               _loc6_ = int(_fightTimes[_loc1_]);
               _loc7_ = SystemTimerManager.time - _loc6_;
               if(_loc6_ < _earliestFightTime || _earliestFightTime == -1)
               {
                  _earliestFightTime = _loc6_;
               }
               if(_loc5_)
               {
                  if(_loc7_ > 60 * 5)
                  {
                     _loc5_.gotoAndStop(1);
                  }
                  else
                  {
                     _loc5_.gotoAndStop(2);
                  }
               }
               _loc1_++;
            }
            if(fun != null)
            {
               fun.call();
            }
         };
         if(_fightTimes == null)
         {
            KTool.getMultiValue([13068,13069,13070,13071],function(param1:Array):void
            {
               _fightTimes = param1;
               callback();
            });
         }
         else
         {
            callback();
         }
      }
      
      private static function startTimerCheck() : void
      {
         if(_timer == null)
         {
            _timer = new Timer(1000);
            _timer.addEventListener(TimerEvent.TIMER,onTimer);
         }
         if(isInActivityTime)
         {
            _currentStep = getCurrentStep();
         }
         _timer.start();
         onTimer(null);
      }
      
      private static function hideOrShowPriate(param1:Boolean) : void
      {
         var _loc2_:int = 0;
         while(_loc2_ < 4)
         {
            getPirateMvByIndex(_loc2_).visible = param1;
            _loc2_++;
         }
      }
      
      private static function stopTimerCheck() : void
      {
         if(_timer != null)
         {
            _timer.stop();
            _timer.removeEventListener(TimerEvent.TIMER,onTimer);
            _timer = null;
         }
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         var e:TimerEvent = param1;
         if(MainManager.isFighting)
         {
            stopTimerCheck();
            return;
         }
         updatePirateStatu();
         updateCountDown();
         if(isInActivityTime || _lastStatu)
         {
            _lastStatu = isInActivityTime;
            if(_hp == 0 || _hp >= 1000)
            {
               cutDownMv.visible = false;
               hideOrShowPriate(false);
               MapManager.currentMap.controlLevel["hpMv"].visible = false;
            }
            else
            {
               cutDownMv.visible = true;
               hideOrShowPriate(true);
               MapManager.currentMap.controlLevel["hpMv"].visible = true;
               if(_currentStep != getCurrentStep())
               {
                  if(getCurrentStep() == 0 && SystemTimerManager.sysDate.hours == 18)
                  {
                     return;
                  }
                  stopTimerCheck();
                  playFightMovie(function():void
                  {
                     startTimerCheck();
                     if(!isInActivityTime)
                     {
                        KTool.getMultiValue([3089],function(param1:Array):void
                        {
                           if(param1[0] > 1)
                           {
                              winMv.visible = true;
                              AnimateManager.playMcAnimate(winMv);
                           }
                        });
                     }
                  });
               }
            }
         }
         else
         {
            _lastStatu = isInActivityTime;
            hideOrShowPriate(false);
            cutDownMv.visible = false;
            MapManager.currentMap.controlLevel["hpMv"].visible = false;
         }
      }
      
      private static function updateCountDown() : void
      {
         var _loc6_:String = null;
         var _loc7_:String = null;
         if(cutDownMv == null)
         {
            return;
         }
         var _loc1_:Date = SystemTimerManager.sysDate;
         var _loc2_:int = 5 * 60 - ((_loc1_.minutes - getCurrentStep() * 5) * 60 + _loc1_.seconds);
         var _loc3_:int = SystemTimerManager.time - _earliestFightTime;
         var _loc4_:int = _earliestFightTime + 5 * 60;
         var _loc5_:Number = Math.floor(_loc2_ / 60);
         _loc2_ -= _loc5_ * 60;
         if(_loc2_ > 5 * 60)
         {
            return;
         }
         if(_loc2_ < 10)
         {
            _loc6_ = "0" + _loc2_;
         }
         else
         {
            _loc6_ = "" + _loc2_;
         }
         _loc7_ = String(_loc5_) + _loc6_;
         if(cutDownMv is MovieClip)
         {
            KTool.showScore(cutDownMv as MovieClip,uint(_loc7_),0,true);
         }
         else
         {
            (cutDownMv as TextField).text = _loc5_ + ":" + _loc6_;
         }
      }
      
      private static function onZhuruClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         ItemManager.upDateCollection(1700638,function():void
         {
            if(ItemManager.getNumByID(1700638))
            {
               SocketConnection.sendWithCallback(CommandID.BOKATE_EVOLUTION,function():void
               {
                  Alarm.show("注入成功！");
                  updateHp(function():void
                  {
                     if(_hp >= 1000)
                     {
                        winMv.visible = true;
                        AnimateManager.playMcAnimate(winMv);
                     }
                  });
               },2);
            }
            else
            {
               ProductAction.buyMoneyProduct(201441);
            }
         });
      }
      
      private static function playFightMovie(param1:Function) : void
      {
         var fun:Function = param1;
         if(ModuleManager.hasModule(ClientConfig.getAppModule("BokateEvolutionMainPanel")))
         {
            ModuleManager.getModule(ClientConfig.getAppModule("BokateEvolutionMainPanel")).hide();
         }
         cutDownMv.visible = false;
         MapManager.currentMap.controlLevel["hpMv"].visible = false;
         updatePirateStatu(function():void
         {
            var j:int = 0;
            var i:int = 0;
            while(i < 4)
            {
               if(_priateStatus[i])
               {
                  AnimateManager.playMcAnimate(getPirateMvByIndex(i),2,"mv");
               }
               i++;
            }
            if(_priateStatus.indexOf(true) != -1)
            {
               AnimateManager.playMcAnimate(bokate,2,"mv",function():void
               {
                  cutDownMv.visible = true;
                  MapManager.currentMap.controlLevel["hpMv"].visible = true;
                  var _loc1_:int = 0;
                  while(_loc1_ < 4)
                  {
                     getPirateMvByIndex(_loc1_).gotoAndStop(1);
                     _loc1_++;
                  }
                  bokate.gotoAndStop(1);
                  initForMap();
                  fun();
               });
            }
            else
            {
               cutDownMv.visible = true;
               MapManager.currentMap.controlLevel["hpMv"].visible = true;
               j = 0;
               while(j < 4)
               {
                  getPirateMvByIndex(j).gotoAndStop(1);
                  j++;
               }
               bokate.gotoAndStop(1);
               initForMap();
               fun();
            }
         });
      }
      
      private static function getPirateMvByIndex(param1:int) : MovieClip
      {
         var _loc2_:String = String(_priates[param1]);
         return MapManager.currentMap.controlLevel[_loc2_];
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == _mapId)
         {
            initForMap();
         }
      }
      
      private static function get winMv() : MovieClip
      {
         return MapManager.currentMap.topLevel["winMv"];
      }
      
      private static function get bokate() : MovieClip
      {
         return MapManager.currentMap.controlLevel["bokate"];
      }
      
      public static function getCurrentStep() : int
      {
         var _loc1_:int = 0;
         var _loc2_:Date = SystemTimerManager.sysDate;
         return int(Math.floor(_loc2_.minutes / 5));
      }
      
      public static function get isInActivityTime() : Boolean
      {
         return _cTime.isTimeActive();
      }
      
      private static function get cutDownMv() : MovieClip
      {
         return MapManager.currentMap.controlLevel["cutDownMv"];
      }
      
      public static function playPreTask() : void
      {
         var mcloader:MCLoader = null;
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,enterMap);
         mcloader = new MCLoader(ClientConfig.getMapAnimate("bokate"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var d1:Array;
            var d2:Array;
            var taskQuePro:TaskQuneProcessor;
            var mapMv:MovieClip = null;
            var e:* = param1;
            mapMv = mcloader.loader.content["mv"];
            mapMv.parent.removeChild(mapMv);
            d1 = [[NPC.SEER,["博卡特，你没事吧！我们一收到你的救援信息就赶过来了。"],["嗯，我没事"]],[NPC.BOKATE,["我发现我体内蕴藏着极大的能量，我正在试图激活它们，但是这帮可恶的海盗出现了。"],["你放心，海盗交给我们了"]],[NPC.ATIEDA,["博卡特，你专心激活你的能量，我们赛尔小分队来保护你！"],["真是太感谢你们了！"]]];
            d2 = [[NPC.ARUIBOSI,["因为索伦森手上拥有泰坦星系最重要的东西，泰坦石！"],["泰坦石？！"]],[NPC.ARUIBOSI,["泰坦星系的能源相当的匮乏，如果没有泰坦石，泰坦星系就将毁灭。"],["你们就甘愿当索伦森的爪牙吗？！"]],[NPC.ARUIBOSI,["为了泰坦星系，我们愿意付出任何代价！所以，你们快离开这里吧。"],["你们那么强大，为什么不从索伦森手上把泰坦石抢回来呢？"]],[NPC.ALUONASI,["回到了泰坦星系后索伦森的实力已经逐渐恢复，我们已经不是他的对手了。"],["可恶的索伦森！！"]]];
            taskQuePro = new TaskQuneProcessor();
            taskQuePro.addChangeMap(10468,function():void
            {
               MapManager.currentMap.controlLevel.addChild(mapMv);
               KTool.hideMapAllPlayerAndMonster();
            });
            taskQuePro.addFullMv(ClientConfig.getFullMovie("bokate1"));
            taskQuePro.addMapMv(mapMv,1,"mv");
            taskQuePro.addMapMv(mapMv,2,"mv");
            taskQuePro.addFullMv(ClientConfig.getFullMovie("bokate2"),function():void
            {
               mapMv.parent.removeChild(mapMv);
            });
            taskQuePro.addChangeMap(10467,function():void
            {
               KTool.hideMapAllPlayerAndMonster();
               MapManager.currentMap.controlLevel.visible = false;
               MapManager.currentMap.animatorLevel.addChild(mapMv);
            });
            taskQuePro.addMapMv(mapMv,3,"mv");
            taskQuePro.addMapMv(mapMv,4,"mv");
            taskQuePro.addMapMv(mapMv,5,"mv");
            taskQuePro.addDialog(d1);
            taskQuePro.addMapMv(mapMv,6,"mv");
            taskQuePro.procesEndFun = function():void
            {
               SocketConnection.send(1022,86070354);
               BufferRecordManager.setMyState(1087,true);
               MapObjectControl.hideOrShowAllObjects(true);
               BufferRecordManager.setMyState(993,true);
               mcloader.clear();
               DisplayUtil.removeForParent(mapMv);
               ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
               KTool.showMapAllPlayerAndMonster();
               MapManager.currentMap.controlLevel.visible = true;
               if(Boolean(bokate["tip"]) && bokate["tip"] is MovieClip)
               {
                  bokate["tip"].gotoAndPlay(1);
               }
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,enterMap);
               initForMap();
            };
            taskQuePro.start();
         });
         mcloader.doLoad();
      }
      
      public static function hasFinishPreTask() : Boolean
      {
         return BufferRecordManager.getMyState(1087);
      }
   }
}
