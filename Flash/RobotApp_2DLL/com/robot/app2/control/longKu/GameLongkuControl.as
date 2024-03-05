package com.robot.app2.control.longKu
{
   import com.robot.app.automaticFight.AutomaticFightManager;
   import com.robot.app.control.BonusController;
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
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
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.utils.Direction;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class GameLongkuControl
   {
      
      private static var _currentStage:int;
      
      private static var _petId:uint;
      
      private static var _currentBossView:com.robot.app2.control.longKu.BossView;
      
      private static var _container:Sprite;
      
      private static var _huoba:MovieClip;
      
      private static var _zheZhao:MovieClip;
      
      public static const stepTwoIndex:int = 8;
      
      public static const lastBossIndex:int = 15;
      
      private static var _lastBossView:com.robot.app2.control.longKu.BossView;
      
      public static var longyinNum:int;
       
      
      public function GameLongkuControl()
      {
         super();
      }
      
      private static function init() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
      }
      
      private static function onMapChange(param1:MapEvent) : void
      {
         if(MapManager.currentMap.id == 10375)
         {
            SocketConnection.send(1022,86064115);
            MapListenerManager.add(MapManager.currentMap.topLevel["leave_btn"],onLeveBtnCLick,"离开");
            MapListenerManager.add(MapManager.currentMap.topLevel["bag"],onPetBagHandler,"背包");
            ToolBarController.panel.hide();
            LevelManager.iconLevel.visible = false;
            if(_currentBossView != null)
            {
               _currentBossView.y = 0;
               MapManager.currentMap.controlLevel.addChild(_currentBossView);
            }
            else
            {
               enterScene(param1);
            }
            MainManager.actorModel.x = 960 / 2;
            MainManager.actorModel.y = 490;
            MainManager.actorModel.direction = Direction.UP;
            if(null != MainManager.actorModel.nono)
            {
               MainManager.actorModel.nono.direction = Direction.UP;
            }
         }
         else
         {
            leave();
         }
      }
      
      private static function enterScene(param1:MapEvent) : void
      {
         var e:MapEvent = param1;
         if(null == _huoba)
         {
            loadRes(function():void
            {
               enterScene(e);
            });
            return;
         }
         SocketConnection.sendWithCallback(CommandID.LONGKU_NEXT_STAGE,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            _currentStage = _loc2_.readUnsignedInt();
            _petId = _loc2_.readUnsignedInt();
            if(_currentStage == 1)
            {
               _currentBossView = new com.robot.app2.control.longKu.BossView();
               MapManager.currentMap.controlLevel.addChild(_currentBossView);
               _currentBossView.showBoss();
            }
            else
            {
               showNextBoss();
            }
         });
      }
      
      public static function fight() : void
      {
         if(AutomaticFightManager.isStart)
         {
            Alarm.show("在甬道中不能试用自动战斗器！");
            return;
         }
         ItemManager.upDateCollection(1700206,function():void
         {
            longyinNum = ItemManager.getNumByID(1700206);
         });
         LevelManager.closeMouseEvent();
         SocketConnection.sendWithCallback(CommandID.LONGKU_FIGHT,function(param1:*):void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         });
      }
      
      private static function showNextBoss() : void
      {
         var bv:com.robot.app2.control.longKu.BossView = new com.robot.app2.control.longKu.BossView();
         _container = new Sprite();
         _container.addChild(_currentBossView);
         MapManager.currentMap.controlLevel.addChild(_container);
         bv.y = -560;
         _container.addChild(bv);
         _lastBossView = _currentBossView;
         _currentBossView = bv;
         MainManager.actorModel.skeleton.play();
         moveContainer(function():void
         {
            MainManager.actorModel.skeleton.stop();
            showHuoba(function():void
            {
               if(_currentBossView)
               {
                  _currentBossView.showBoss();
                  removeZheZhao(function():void
                  {
                  });
               }
            });
         });
      }
      
      private static function moveContainer(param1:Function) : void
      {
         var fun:Function = param1;
         var moveFun:Function = function():void
         {
            TweenLite.to(_container,3.3,{
               "y":560,
               "ease":function(param1:Number, param2:Number, param3:Number, param4:Number):Number
               {
                  return param3 * (param1 = param1 / param4) * param1 + param2;
               },
               "onComplete":fun
            });
         };
         if(_currentStage <= stepTwoIndex)
         {
            moveFun();
         }
         else if(!MapManager.currentMap.controlLevel.contains(_zheZhao))
         {
            _zheZhao.alpha = 0;
            _zheZhao.y = 0;
            MapManager.currentMap.controlLevel.addChild(_zheZhao);
            if(Boolean(_huoba) && Boolean(_huoba.parent))
            {
               TweenLite.to(_huoba,1.3,{
                  "alpha":0,
                  "ease":function(param1:Number, param2:Number, param3:Number, param4:Number):Number
                  {
                     return param3 * (param1 = param1 / param4) * param1 + param2;
                  }
               });
            }
            TweenLite.to(_zheZhao,1.3,{
               "alpha":1,
               "ease":function(param1:Number, param2:Number, param3:Number, param4:Number):Number
               {
                  return param3 * (param1 = param1 / param4) * param1 + param2;
               },
               "onComplete":moveFun
            });
         }
      }
      
      private static function removeZheZhao(param1:Function) : void
      {
         var fun:Function = param1;
         if(_currentStage <= stepTwoIndex)
         {
            fun();
            return;
         }
         TweenLite.to(_zheZhao,2,{
            "alpha":0,
            "ease":function(param1:Number, param2:Number, param3:Number, param4:Number):Number
            {
               return param3 * (param1 = param1 / param4) * param1 + param2;
            },
            "onComplete":function():void
            {
               _currentBossView.addChild(_huoba);
               fun();
               _zheZhao.parent.removeChild(_zheZhao);
            }
         });
      }
      
      private static function showHuoba(param1:Function) : void
      {
         if(_currentStage <= stepTwoIndex)
         {
            param1();
            return;
         }
         MapManager.currentMap.controlLevel.addChild(_huoba);
         _huoba.gotoAndStop(1);
         _huoba.alpha = 1;
         AnimateManager.playMcAnimate(_huoba,0,"",param1);
      }
      
      private static function loadRes(param1:Function) : void
      {
         var mcloader:MCLoader = null;
         var fun:Function = param1;
         mcloader = new MCLoader(ClientConfig.getMapAnimate("huoba"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
            _huoba = mcloader.loader.content["huoba"];
            _zheZhao = mcloader.loader.content["zheZhao"];
            if(fun != null)
            {
               fun();
            }
            mcloader.clear();
         });
         mcloader.doLoad();
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            _currentBossView.hideBoss();
            ModuleManager.showModule(ClientConfig.getAppModule("YongdaoJIesuan"),"正在打开...",function():void
            {
               if(_currentStage == lastBossIndex)
               {
                  if(!hasPassBefore)
                  {
                     showFirstPassDialog();
                     BufferRecordManager.setMyState(880,true);
                  }
                  else
                  {
                     leave();
                  }
                  return;
               }
               enterScene(null);
            });
         }
         else
         {
            MapManager.currentMap.controlLevel.addChild(_currentBossView);
            _currentBossView.showLose(function():void
            {
               leave();
            });
         }
      }
      
      private static function leave() : void
      {
         BonusController.removeIgnore(91);
         BonusController.removeIgnore(92);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         SocketConnection.send(CommandID.LONGKU_LEAVE);
         if(_currentBossView)
         {
            _currentBossView.destory();
         }
         if(_lastBossView)
         {
            _lastBossView.destory();
         }
         _currentStage = 0;
         MapManager.changeMap(955);
         _huoba = null;
         _zheZhao = null;
         _currentBossView = null;
         _lastBossView = null;
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
      }
      
      public static function startGame() : void
      {
         BonusController.ignoreItem(91,1700206);
         BonusController.ignoreItem(92,1700206);
         ResourceManager.getResource(ClientConfig.getMapAnimate("xuanwo"),function(param1:MovieClip):void
         {
            var mv:MovieClip = param1;
            LevelManager.closeMouseEvent();
            MapManager.currentMap.controlLevel.addChild(mv);
            TweenLite.to(MainManager.actorModel,2.5,{
               "x":252,
               "y":341,
               "onComplete":function():void
               {
                  LevelManager.openMouseEvent();
                  init();
                  MapManager.changeLocalMap(10375);
               }
            });
         });
      }
      
      public static function get currentStage() : int
      {
         return _currentStage;
      }
      
      public static function get petId() : uint
      {
         return _petId;
      }
      
      public static function showFirstPassDialog() : void
      {
         NpcDialog.show(NPC.JIANAIEN,["可恶……，没想到你的实力如此强大，哈肯撒，我只能帮你到这里了。"],["快说，哈肯撒究竟想要做什么？"],[function():void
         {
            NpcDialog.show(NPC.JIANAIEN,["哈哈哈哈！哈肯撒就在幕夜龙窟的尽头，自己去找吧！"],["我一定会找到他！"],[function():void
            {
               NpcDialog.show(NPC.JIANAIEN,["这是进入下一层暮色大厅的钥匙，能不能见到哈肯撒就看你的实力了。"],["我一定会战斗到底，粉碎他的阴谋！"],[function():void
               {
                  leave();
               }]);
            }]);
         }]);
      }
      
      public static function get hasPassBefore() : Boolean
      {
         return BufferRecordManager.getMyState(880);
      }
      
      private static function onLeveBtnCLick(param1:*) : void
      {
         Alert.show("确定要离开吗？",leave);
      }
      
      private static function onPetBagHandler(param1:MouseEvent) : void
      {
         FightPetBagController.show();
      }
   }
}
