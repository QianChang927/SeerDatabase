package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.FightMatchingPanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import flash.utils.setTimeout;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TigerFightController
   {
      
      private static var _isSigned:Boolean;
      
      private static var _isPreTaskDone:Boolean;
      
      private static var _countdown:Timer;
      
      private static var _isFighting:Boolean;
      
      private static var _fightType:String;
      
      private static var _head:MovieClip;
      
      private static var _currentHead:int;
       
      
      public function TigerFightController()
      {
         super();
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMap);
      }
      
      public static function startFight(param1:String) : void
      {
         _fightType = param1;
         if(_countdown)
         {
            removeTimer();
            endFight(start_fight);
         }
         else
         {
            start_fight();
         }
      }
      
      private static function start_fight() : void
      {
         _countdown = new Timer(5000,1);
         _countdown.addEventListener(TimerEvent.TIMER,onTimer);
         FightDispatcher.addEventListener(PetFightEvent.START_FIGHT,onFightStart);
         _countdown.start();
         if(_fightType == "pos")
         {
            SocketConnection.send(CommandID.PET_KING_JOIN,76,0);
         }
         else if(_fightType == "mess")
         {
            SocketConnection.send(CommandID.TIGER_FIGHT_BATTLE_MESS_FIGHT);
         }
         FightMatchingPanel.show(endFight);
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         removeTimer();
         if(!MainManager.isFighting)
         {
            endFight(fightByType);
         }
      }
      
      private static function endFight(param1:Function = null) : void
      {
         var func:Function = param1;
         SocketConnection.sendWithCallback(CommandID.INVITE_FIGHT_CANCEL,function(param1:*):void
         {
            var e:* = param1;
            setTimeout(function():void
            {
               if(null != func)
               {
                  func();
               }
            },2000);
         });
      }
      
      private static function fightByType() : void
      {
         if(_fightType == "pos")
         {
            FightManager.fightNoMapBoss("",getRandomOne([1363,1367]));
         }
         else if(_fightType == "mess")
         {
            FightManager.fightNoMapBoss("",getRandomOne([1368,1369]));
         }
         _fightType = null;
      }
      
      private static function getRandomOne(param1:Array) : int
      {
         if(Math.random() < 0.5)
         {
            return param1[0];
         }
         return param1[1];
      }
      
      private static function onFightStart(param1:PetFightEvent) : void
      {
         removeTimer();
      }
      
      private static function removeTimer() : void
      {
         _countdown.stop();
         _countdown.removeEventListener(TimerEvent.TIMER,onTimer);
         FightDispatcher.removeEventListener(PetFightEvent.START_FIGHT,onFightStart);
         _countdown = null;
      }
      
      private static function onMap(param1:MapEvent) : void
      {
      }
      
      public static function updateHead(param1:UserInfo, param2:MovieClip) : void
      {
         var _loc3_:String = "light";
         if(param1.tigerFightTeam == 2)
         {
            _loc3_ = "shadow";
         }
         if(param1.tigerFightScore >= 100)
         {
            param2.gotoAndStop(_loc3_ + "_3");
         }
         else if(param1.tigerFightScore >= 50)
         {
            param2.gotoAndStop(_loc3_ + "_2");
         }
         else
         {
            param2.gotoAndStop(_loc3_ + "_1");
         }
      }
      
      public static function clickHead(param1:UserInfo, param2:MovieClip) : void
      {
         var info:UserInfo = param1;
         var head:MovieClip = param2;
         KTool.getMultiValue([15058],function(param1:Array):void
         {
            if((param1[0] & 255) < 50)
            {
               SocketConnection.send(CommandID.TIGER_FIGHT_GET_ITEM,1);
            }
         });
      }
      
      private static function loadHead() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("tiger_fight_head"),function(param1:MovieClip):void
         {
            LevelManager.mapLevel.addChild(param1);
            _head = param1;
            param1["head_0"].buttonMode = true;
            param1["head_1"].buttonMode = true;
            param1["head_0"].gotoAndStop(1);
            param1["head_1"].gotoAndStop(1);
            param1["head_0"].addEventListener(MouseEvent.CLICK,onHead1);
            param1["head_1"].addEventListener(MouseEvent.CLICK,onHead2);
            param1.addEventListener(Event.REMOVED_FROM_STAGE,onRemove);
         });
      }
      
      private static function onRemove(param1:Event) : void
      {
         _head["head_0"].removeEventListener(MouseEvent.CLICK,onHead1);
         _head["head_1"].removeEventListener(MouseEvent.CLICK,onHead2);
         _head.removeEventListener(Event.REMOVED_FROM_STAGE,onRemove);
         _head = null;
      }
      
      private static function onHead1(param1:MouseEvent) : void
      {
         _currentHead = 0;
         onHead(null);
      }
      
      private static function onHead2(param1:MouseEvent) : void
      {
         _currentHead = 1;
         onHead(null);
      }
      
      private static function onHead(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         check(function():void
         {
            KTool.getMultiValue([15058],function(param1:Array):void
            {
               var va:Array = param1;
               if((va[0] & 16711680) >> 16 < 50)
               {
                  SocketConnection.send(CommandID.TIGER_FIGHT_GET_ITEM,3);
                  AnimateManager.playMcAnimate(_head["head_" + _currentHead],2,"mc",function():void
                  {
                     DisplayUtil.removeForParent(_head["head_" + _currentHead]);
                  });
               }
               else
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMap);
                  if(_head)
                  {
                     DisplayUtil.removeForParent(_head);
                  }
               }
            });
         });
      }
      
      public static function check(param1:Function = null) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([5114],function(param1:Array):void
         {
            var va:Array = param1;
            if(va[0] > 0)
            {
               if(null != func)
               {
                  func();
               }
               return;
            }
            if(BitBuffSetClass.getState(22446))
            {
               ModuleManager.showModule(ClientConfig.getAppModule("TigerFightSignChoosePanel"));
               return;
            }
            if(MapManager.currentMap.id == 994)
            {
               startPreTask();
               return;
            }
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               startPreTask();
            });
            MapManager.changeMap(994);
         });
      }
      
      public static function checkBattle(param1:Function = null) : void
      {
         var func:Function = param1;
         check(function():void
         {
            if(BitBuffSetClass.getState(22453))
            {
               if(func != null)
               {
                  func();
               }
               return;
            }
            if(MapManager.currentMap.id == 994)
            {
               startBattleTask();
               return;
            }
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               startBattleTask();
            });
            MapManager.changeMap(994);
         });
      }
      
      public static function checkFinal(param1:Function = null) : void
      {
         var func:Function = param1;
         check(function():void
         {
            if(BitBuffSetClass.getState(22456))
            {
               if(func != null)
               {
                  func();
               }
               return;
            }
            if(MapManager.currentMap.id == 994)
            {
               startFinalTask();
               return;
            }
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               startFinalTask();
            });
            MapManager.changeMap(994);
         });
      }
      
      private static function startPreTask() : void
      {
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapAllPlayerAndMonster();
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("tiger_fight_full_1"),function():void
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_994_tiger_fight"),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               MapManager.currentMap.controlLevel.addChild(mc);
               AnimateManager.playMcAnimate(mc,1,"mc",function():void
               {
                  DisplayUtil.removeForParent(mc);
                  BitBuffSetClass.setState(22446,1);
                  MapObjectControl.hideOrShowAllObjects(true);
                  KTool.showMapAllPlayerAndMonster();
                  ModuleManager.showModule(ClientConfig.getAppModule("TigerFightSignChoosePanel"));
               });
            });
         });
      }
      
      private static function startBattleTask() : void
      {
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapAllPlayerAndMonster();
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("tiger_fight_full_2"),function():void
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_994_tiger_fight_battle"),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               MapManager.currentMap.controlLevel.addChild(mc);
               AnimateManager.playMcAnimate(mc,1,"mc",function():void
               {
                  DisplayUtil.removeForParent(mc);
                  BitBuffSetClass.setState(22453,1);
                  MapObjectControl.hideOrShowAllObjects(true);
                  KTool.showMapAllPlayerAndMonster();
               });
            });
         });
      }
      
      private static function startFinalTask() : void
      {
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_994_tiger_fight_final"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,1,"mc",function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("tiger_fight_full_3"),function():void
               {
                  AnimateManager.playMcAnimate(mc,2,"mc",function():void
                  {
                     DisplayUtil.removeForParent(mc);
                     BitBuffSetClass.setState(22456,1);
                     MapObjectControl.hideOrShowAllObjects(true);
                     KTool.showMapAllPlayerAndMonster();
                  });
               });
            });
         });
      }
      
      public static function openPanel(param1:String) : void
      {
         var type:String = param1;
         KTool.getMultiValue([5114],function(param1:Array):void
         {
            if(param1[0] == 1)
            {
               if(type == "battle_main")
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("TigerFightLightBattlePanel"));
               }
               else if(type == "battle_score")
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("TigerFightLightScorePanel"));
               }
            }
            else if(param1[0] == 2)
            {
               if(type == "battle_main")
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("TigerFightShadowBattlePanel"));
               }
               else if(type == "battle_score")
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("TigerFightShadowScorePanel"));
               }
            }
         });
      }
   }
}
