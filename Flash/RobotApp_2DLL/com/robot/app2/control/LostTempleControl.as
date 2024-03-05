package com.robot.app2.control
{
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.config.xml.PetBookXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LostTempleControl
   {
      
      private static const _sceneIds:Array = [10282,10283,10284];
      
      private static var _currentStage:int;
      
      private static var _bosses:Array;
      
      private static var _teamId:int;
      
      private static var _light0:MovieClip;
      
      private static var _light1:MovieClip;
      
      private static var _mapIndex:int;
      
      public static var cardId:int;
       
      
      public function LostTempleControl()
      {
         super();
      }
      
      public static function chooseScene(param1:int) : void
      {
         var _loc2_:int = int(sceneIds[param1]);
         SocketConnection.send(1022,86056392 + param1);
         _mapIndex = param1;
         MapManager.changeLocalMap(_loc2_);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,enterMap);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,outMap);
         SocketConnection.addCmdListener(CommandID.LOST_TEMPLE_GET_CARD,onGetCard);
      }
      
      private static function onGetCard(param1:*) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         cardId = _loc2_.readUnsignedInt();
      }
      
      private static function outMap(param1:*) : void
      {
         if(-1 == sceneIds.indexOf(MapManager.currentMap.id))
         {
            SocketConnection.send(CommandID.LOST_TEMPLE_LEAVE_STAGE);
            out();
         }
      }
      
      private static function enterMap(param1:* = null) : void
      {
         var e:* = param1;
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,enterMap);
         MapListenerManager.add(MapManager.currentMap.controlLevel["leave_btn"],onLeveBtnCLick,"离开");
         MapListenerManager.add(MapManager.currentMap.controlLevel["bag"],onPetBagHandler,"背包");
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         ToolBarController.showOrHideAllUser(false);
         hideAllBossContainers();
         SocketConnection.sendWithCallback(CommandID.LOST_TEMPLE_ENTER_NEXT_STAGE,function(param1:*):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            _currentStage = _loc2_.readUnsignedInt();
            _teamId = _loc2_.readUnsignedInt();
            _bosses = [];
            _bosses[0] = _loc2_.readUnsignedInt();
            _bosses[1] = _loc2_.readUnsignedInt();
            _bosses[2] = _loc2_.readUnsignedInt();
            _bosses = _bosses.reverse();
            initMap();
         });
      }
      
      private static function onLeveBtnCLick(param1:*) : void
      {
         Alert.show("确定要离开" + MapXMLInfo.getName(currentMap) + "吗？",leave);
      }
      
      private static function onPetBagHandler(param1:MouseEvent) : void
      {
         FightPetBagController.show();
      }
      
      private static function hideAllBossContainers() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 5)
         {
            MapManager.currentMap.depthLevel["p_" + _loc1_].visible = false;
            _loc1_++;
         }
      }
      
      private static function initMap() : void
      {
         var i:int;
         getLight(function(param1:MovieClip):void
         {
            var i:int;
            var light:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(light);
            light.gotoAndPlay(1);
            light.x = bossContainer.x;
            light.y = bossContainer.y;
            light.addFrameScript(light.totalFrames - 1,function():void
            {
               light.addFrameScript(light.totalFrames - 1,null);
               light.gotoAndStop(light.totalFrames);
               DisplayUtil.removeForParent(light);
               bossContainer.visible = true;
               bossContainer.scaleX = bossContainer.scaleY = 0;
               TweenLite.to(bossContainer,0.6,{
                  "scaleX":1,
                  "scaleY":1
               });
            });
            i = 0;
            while(i < _bosses.length)
            {
               addBossToMap(i);
               i++;
            }
         });
         i = 0;
         while(i < 5)
         {
            if(i != _currentStage - 1)
            {
               DisplayUtil.removeForParent(MapManager.currentMap.depthLevel["p_" + i]);
            }
            i++;
         }
      }
      
      private static function addBossToMap(param1:int) : void
      {
         var bossId:int = 0;
         var cbContainer:MovieClip = null;
         var index:int = param1;
         bossId = int(_bosses[index]);
         cbContainer = bossContainer["boss_" + index];
         cbContainer.visible = false;
         ResourceManager.getResource(ClientConfig.getPetSwfPath(bossId),function(param1:MovieClip):void
         {
            if(bossContainer.x > 906 / 2)
            {
               param1.gotoAndStop("left");
            }
            else
            {
               param1.gotoAndStop("right");
            }
            CommonUI.equalScale(param1,cbContainer.width,cbContainer.height);
            cbContainer.addChild(param1);
            CommonUI.centerAlign(param1,cbContainer,new Point(0,0));
            cbContainer.visible = true;
            while(cbContainer.numChildren != 0)
            {
               cbContainer.removeChildAt(0);
            }
            cbContainer.addChild(param1);
            MapListenerManager.add(param1,onBossClick,PetBookXMLInfo.getName(bossId));
         },"pet");
      }
      
      private static function get bossContainer() : MovieClip
      {
         return MapManager.currentMap.depthLevel["p_" + (_currentStage - 1)];
      }
      
      public static function onBossClick(param1:*) : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         SocketConnection.send(CommandID.LOST_TEMPLE_FIGHT_BOSS);
         cardId = 0;
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         hideAllBossContainers();
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            showClearingPanel();
         }
         else
         {
            leave();
         }
      }
      
      private static function showClearingPanel() : void
      {
         if(_currentStage == 5)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LostTtempleClearingPanel"),"..正在打开",function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("LostTempleFlopPanel"),"..正在打开",function():void
               {
                  leave();
                  lingshouzhizunAppear();
               });
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LostTtempleClearingPanel"),"..正在打开",function():void
            {
               enterMap(null);
            });
         }
      }
      
      public static function lingshouzhizunAppear(param1:* = null) : void
      {
         var mcloader:MCLoader = null;
         var e:* = param1;
         if(MapManager.currentMap.id != 816)
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,lingshouzhizunAppear);
            return;
         }
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,lingshouzhizunAppear);
         mcloader = new MCLoader(ClientConfig.getResPath("active/" + "lost_temple_lingshouzhizun.swf"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var mv:MovieClip = null;
            var fun:Function = null;
            var e:* = param1;
            mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
            mv = mcloader.loader.content["mv"];
            MapManager.currentMap.controlLevel.addChild(mv);
            if(MapManager.currentMap.controlLevel["datou"])
            {
               MapManager.currentMap.controlLevel["datou"].visible = false;
            }
            fun = function(param1:Event = null):void
            {
               var e:Event = param1;
               SocketConnection.sendWithCallback(CommandID.LOST_TEMPLE_FIGHT_ZHIZUN,function(param1:SocketEvent):void
               {
                  DisplayUtil.removeForParent(mv);
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverWithLingshouzhizun);
                  SocketConnection.send(CommandID.ACTIVEACHIEVE,86);
               });
            };
            AnimateManager.playMcAnimate(mv,0,"",function():void
            {
               NpcDialog.show(NPC.LINGSHOUZHIZUN,[MainManager.actorInfo.nick + "，能够顺利通过， 足以证明你的实力，不过这仅仅是开始。现在我就让你见识一下灵兽之尊的实力！"],["我一定要击败你"],[fun]);
            });
            MapListenerManager.add(mv as InteractiveObject,fun);
            mcloader.loader.unload();
            mcloader.clear();
         });
         mcloader.doLoad();
      }
      
      private static function fightOverWithLingshouzhizun(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverWithLingshouzhizun);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LostTtempleClearingPanel"));
         }
      }
      
      private static function getLight(param1:Function) : void
      {
         var mcloader:MCLoader = null;
         var fun:Function = param1;
         if(_light0)
         {
            if(_currentStage <= 4)
            {
               fun(_light0);
            }
            else
            {
               fun(_light1);
            }
            return;
         }
         mcloader = new MCLoader(ClientConfig.getResPath("active/" + "lost_temple_light.swf"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
            var _loc3_:DisplayObject = mcloader.loader.content;
            _light0 = _loc3_["light_0"];
            _light1 = _loc3_["light_1"];
            getLight(fun);
            mcloader.loader.unload();
            mcloader.clear();
         });
         mcloader.doLoad();
      }
      
      private static function leave() : void
      {
         hideAllBossContainers();
         SocketConnection.send(CommandID.LOST_TEMPLE_LEAVE_STAGE);
         MapManager.changeMap(816);
         out();
      }
      
      private static function out() : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,outMap);
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         ToolBarController.showOrHideAllUser(true);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,enterMap);
      }
      
      public static function initForMap816() : void
      {
         if(hasFinishPreTask)
         {
            DisplayUtil.removeForParent(mapMv);
         }
         else
         {
            playPreTask();
         }
      }
      
      public static function playPreTask() : void
      {
         var d1:Array;
         var d2:Array;
         var d3:Array;
         var d4:Array;
         var d5:Array;
         var d6:Array;
         var taskQuePro:TaskQuneProcessor = null;
         KTool.hideMapAllPlayerAndMonster();
         MainManager.selfVisible = false;
         MapManager.currentMap.animatorLevel["sangetou"].visible = false;
         d1 = [[NPC.SEER,["哇塞！这里就是传说中失落的远古神殿，这些奇怪的石门是什么，三灵兽去哪里了？"],["让我去附近找找！"]]];
         d2 = [[NPC.SEER,["怎…怎么回事？这些石门竟然打开了，难道是我触发了这里的机关？？"],["欢迎来到远古圣殿！."]]];
         d3 = [[NPC.LOST_TEMPL_HEYING,["欢迎来到这个曾经被遗忘的领域，这里曾是三灵兽诞生的地方！如今他们已经修成正果。"],["哇，原来是这样！"]]];
         d4 = [[NPC.LOST_TEMPL_HEYING,["呵呵…你们终于又回到了原来的地方，我们当初的约定终于可以实现了！"],["好久不见！师傅！"]],[NPC.SEER,["什么！那个…黑影是居然是三灵兽的师傅？怪不得之前是由三种不同的能量聚集而成的！"],["简直太神奇了！"]],[NPC.LOST_TEMPL_HEYING,["孩子们，远古之门已经为你们打开，选择自己的生存之道吧！在远古之门里，你们将接受不同寻常的试炼，也是你们的必修之路！"],["遵命！师傅！"]]];
         d5 = [[NPC.LOST_TEMPL_HEYING,["0xff0000" + MainManager.actorInfo.nick + "0xffffff据说你是宇宙中最勇敢的战士，如果你对远古神殿有兴趣的话也可以尝试一下！"],["真的，我也可以进去？"]],[NPC.LOST_TEMPL_HEYING,["当然可以！不过在你前方的道路可是非常曲折的，你要经历三种不同属性的试炼！希望你能一直坚持，当你找到三灵兽的同时，远古圣殿的秘密即将揭晓！"],["远古圣殿的秘密！"]],[NPC.LOST_TEMPL_HEYING,["远古圣殿最神秘力量也是最强大的能量，自己慢慢体会吧！对了，远古精灵不仅仅只有三灵兽哦！"],["什么！还有其他的！"]]];
         d6 = [[NPC.SEER,["太激动了！远古圣殿，我一定要进去闯闯！"],["我这就去告诉大家！"]]];
         taskQuePro = new TaskQuneProcessor();
         taskQuePro.addDialog(d1);
         taskQuePro.addMapMv(mapMv,1,"mc");
         taskQuePro.addDialog(d2);
         taskQuePro.addMapMv(mapMv,2,"mc");
         taskQuePro.addDialog(d3);
         taskQuePro.addMapMv(mapMv,3,"mc");
         taskQuePro.addDialog(d4);
         taskQuePro.addMapMv(mapMv,4,"mc");
         taskQuePro.addDialog(d5);
         taskQuePro.addMapMv(mapMv,5,"mc");
         taskQuePro.addDialog(d6);
         taskQuePro.addFullMv(ClientConfig.getFullMovie("20130329_11"));
         taskQuePro.procesEndFun = function():void
         {
            taskQuePro.destory();
            taskQuePro = null;
            KTool.showMapAllPlayerAndMonster();
            DisplayUtil.removeForParent(mapMv);
            MainManager.selfVisible = true;
            BufferRecordManager.setMyState(585,true);
            MapManager.currentMap.animatorLevel["sangetou"].visible = true;
            SocketConnection.send(1022,86056395);
         };
         taskQuePro.start();
      }
      
      public static function get hasFinishPreTask() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,585);
      }
      
      private static function get mapMv() : MovieClip
      {
         return MapManager.currentMap.controlLevel["lostTempleMv"];
      }
      
      public static function get currentStage() : int
      {
         return _currentStage;
      }
      
      public static function get bosses() : Array
      {
         return _bosses;
      }
      
      public static function get mapIndex() : int
      {
         return _mapIndex;
      }
      
      public static function get sceneIds() : Array
      {
         return _sceneIds;
      }
      
      public static function get currentMap() : int
      {
         return sceneIds[mapIndex];
      }
   }
}
