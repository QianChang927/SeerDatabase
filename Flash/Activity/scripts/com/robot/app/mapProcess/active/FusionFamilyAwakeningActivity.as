package com.robot.app.mapProcess.active
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.TwelveRoundsFightController;
   import com.robot.app.task.petstory.util.EventListenerManager;
   import com.robot.app.task.taskUtils.taskDialog.DialogUtil;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class FusionFamilyAwakeningActivity
   {
      
      private static var _controller:TwelveRoundsFightController;
      
      private static var _mapMv:MovieClip;
      
      private static var _eventListenerMgr:EventListenerManager;
      
      private static const BOSSES:Array = ["艾克里桑","丽莎布布","卡鲁克斯","鲁斯王","泰瑞","魔焰猩猩"];
      
      private static const STARTMV:Array = [9,5,11,13,7,15];
      
      private static const NPCS:Array = [NPC.AIKELISANG,NPC.LISHABUBU,NPC.KALUKESI,NPC.LUSIWANG,NPC.TAIRUI,NPC.MOYANXINGXING];
      
      private static var _isStart:Boolean;
      
      private static var hasPlayEnd:Boolean;
       
      
      public function FusionFamilyAwakeningActivity()
      {
         super();
      }
      
      public static function setUp() : void
      {
         _controller = new TwelveRoundsFightController(activityTimes);
         _controller.broadCastText = "融合精灵再次聚集在魔神深渊，让我们见证它们的试炼吧！！立刻前往";
         _controller.vsIconTip = "融合一族试炼已经开始，快去挑战吧";
         _controller.enterMapFun = initForMap781;
         _controller.mapID = 781;
         _controller.roundChangeFun = roundChange;
         _controller.vsIconTextArry = vsIconTextArry;
         _controller.iconX = 550;
         _controller.iconY = 10;
         _controller.localMsgName = null;
         _controller.getBossStatuCmID = CommandID.LEINADUO_CHECK_BOSS;
         _controller.lastRoundEndFun = playEndTask;
         _controller.startUp();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:*):void
         {
            var e:* = param1;
            if(MapManager.currentMap)
            {
               if([1,7,5].indexOf(MapManager.currentMap.id) != -1)
               {
                  if(null != MapManager.currentMap.depthLevel["guanzhanPets"])
                  {
                     MapListenerManager.add(MapManager.currentMap.depthLevel["guanzhanPets"] as InteractiveObject,function():void
                     {
                        var tipDialog:Array;
                        if(MapManager.currentMap.id == 1)
                        {
                           SocketConnection.send(1022,86052440);
                        }
                        if(MapManager.currentMap.id == 5)
                        {
                           SocketConnection.send(1022,86052441);
                        }
                        if(MapManager.currentMap.id == 7)
                        {
                           SocketConnection.send(1022,86052448);
                        }
                        tipDialog = [[NPC.RONGHE,["赛尔时间刚刚好，快去魔神深渊看看吧！11月23日，0xff0000晚上19:00—20:00,11月24日—11月25日，下午13:00—14:000xFFFFFF，见证融合伙伴的苏醒吧！"],["恩恩，我这就去！!","我这就告诉伙伴们去！"]]];
                        DialogUtil.playDilogs(tipDialog,[function():void
                        {
                           MapManager.changeMap(781);
                        }]);
                     },"融合伙伴的苏醒");
                     if(_controller.isPast)
                     {
                        DisplayUtil.removeForParent(MapManager.currentMap.depthLevel["guanzhanPets"]);
                     }
                  }
               }
            }
         });
      }
      
      private static function roundChange() : void
      {
         startFight();
      }
      
      private static function initForMap781() : void
      {
         _mapMv = MapManager.currentMap.controlLevel["mapMv"];
         mapMv.gotoAndStop(mapMv.totalFrames);
         _eventListenerMgr = new EventListenerManager();
         DisplayUtil.removeForParent(_mapMv);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,leveMap);
         MapListenerManager.add(xingxingMv as InteractiveObject,onXingXingClick);
         MapListenerManager.add(threePets as InteractiveObject,onThreepetsClick);
         MapListenerManager.add(sys1 as InteractiveObject,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("FusionFamilyAwakeningPanel"),"正在加载...");
            SocketConnection.send(1022,86052444);
         },"融合伙伴的苏醒");
         MapListenerManager.add(sys2 as InteractiveObject,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("FusionFamilyAwakeningRewardPanel"),"正在加载...");
            SocketConnection.send(1022,86052443);
         },"融合精灵兑换装置");
         updateScene();
         if(_controller.isInActivityTime && _controller.currentStep == 12 && !_controller.canFight)
         {
            playEndTask();
         }
      }
      
      private static function onThreepetsClick(param1:*) : void
      {
         var _loc2_:Array = null;
         if(_controller.isIncoming)
         {
            _loc2_ = [[NPC.RONGHE,["赛尔记得来哦！11月23日，0xff0000晚上19:00—20:00.11月24日—25日，下午13:00—14:000xFFFFFF我们会在这里等你的！！"],["恩恩，交给我吧!"]]];
            DialogUtil.playDilogs(_loc2_,null);
         }
         if(_controller.isInActivityTime)
         {
            _loc2_ = [[NPC.RONGHE,["赛尔，融合一族的试炼马上就要开始了，0xff0000每过五分钟0xFFFFFF就可以挑战融合一族，帮助他们提升实力吧！"],["恩恩，我了解了!"]]];
            DialogUtil.playDilogs(_loc2_,null);
         }
      }
      
      private static function updateScene() : void
      {
         threePets.visible = hasFinshPreTask;
         if(_controller.isInActivityTime)
         {
            threePets.visible = true;
         }
         if(_controller.isPast)
         {
            threePets.visible = pets.visible = xingxingMv.visible = false;
         }
      }
      
      private static function addEvent() : void
      {
         _eventListenerMgr.addEventListener(xingxingMv,MouseEvent.CLICK,onXingXingClick);
      }
      
      private static function onXingXingClick(param1:*) : void
      {
         var _loc2_:Array = [[NPC.MOYANXINGXING,["赛尔，融合一族的试炼马上就要开始了，0xff0000每过五分钟0xFFFFFF就可以挑战融合一族，帮助他们提升实力吧！"],["恩恩，我了解了!"]]];
         if(_controller.isInActivityTime && _controller.canFight)
         {
            startFight();
            return;
         }
         if(_controller.isInActivityTime && !_controller.canFight)
         {
            DialogUtil.playDilogs(_loc2_,null);
            return;
         }
         if(!_controller.isInActivityTime)
         {
            if(!hasFinshPreTask)
            {
               playPreTsk();
            }
            else
            {
               DialogUtil.playDilogs(_loc2_,null);
            }
            return;
         }
      }
      
      private static function leveMap(param1:* = null) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,leveMap);
         _mapMv = null;
         _eventListenerMgr.clear();
         _eventListenerMgr = null;
      }
      
      private static function startFight() : void
      {
         var npcIndex:int = 0;
         var fightDialogs1:Array = null;
         var fightDialogs2:Array = null;
         if(_isStart)
         {
            return;
         }
         _isStart = true;
         playTaskClicp(true);
         npcIndex = _controller.currentStep % 6;
         fightDialogs1 = [[NPC.MOYANXINGXING,["赛尔，你果然没有食言，见证我们融合一族的实力吧！伙计们，让大伙看看你们的实力有多强"],["哈哈，我已经迫不及待了!"]],[NPC.MOYANXINGXING,["加油啊！融合一族！！！赛尔，这可是我们融合一族中的精英，你可要拿出看家本事了哦！ "],["没问题"]]];
         fightDialogs2 = [[NPCS[npcIndex],["融合一族，救世一族！赛尔，让你看看我的实力吧！"],["接招吧!"]]];
         AnimateManager.playMcAnimate(mapMv,4,"mc4",function():void
         {
            DialogUtil.playDilogs(fightDialogs1,[function():void
            {
               AnimateManager.playMcAnimate(mapMv,STARTMV[npcIndex],"mc" + STARTMV[npcIndex],function():void
               {
                  DialogUtil.playDilogs(fightDialogs2,[function():void
                  {
                     playTaskClicp(false);
                     _isStart = false;
                     FightManager.fightWithBoss(BOSSES[npcIndex],_controller.currentStep);
                  }]);
               });
            }]);
         });
      }
      
      private static function playEndTask() : void
      {
         var dialogsArray:Array;
         if(hasPlayEnd)
         {
            return;
         }
         hasPlayEnd = true;
         dialogsArray = [[NPC.MOYANXINGXING,["赛尔，看来你的实力也在不断提升，今天算是一个小小的，我们的实力每天都会有所提升，下次你可要小心了哦!"],["哈哈，我还会再来的!"]]];
         DialogUtil.playDilogs(dialogsArray,[function():void
         {
            playTaskClicp(true);
            MapManager.currentMap.controlLevel.addChild(mapMv);
            AnimateManager.playMcAnimate(mapMv,17,"mc17",function():void
            {
               playTaskClicp(false);
               mapMv.gotoAndStop(mapMv.totalFrames);
               DisplayUtil.removeForParent(mapMv);
            });
         }]);
      }
      
      private static function playPreTsk() : void
      {
         var taskQunePro:TaskQuneProcessor;
         var dialogsArray1:Array = [[NPC.MOYANXINGXING,["两代赫尔卡星守护神，请告知我们融合一族，如何才能变的更加强大，自从上次融合一族受到危机之后，我们一族已所剩无几！"],["咦？那不是融合精灵嘛！它们都怎么了！"]],[NPC.SEER,["魔焰猩猩，你们这是在做什么！还有鲁斯王它们怎么都变成石像了？"],["赛尔，好久不见啊！"]],[NPC.MOYANXINGXING,["惭愧惭愧，长期以来我们融合一族未能在大战中出手相助，现在恶灵兽以及尤尼卡的踪迹不定，我想融合一族是该苏醒了！"],["哇！怪不得这里都是融合一族的！"]]];
         var dialogsArray2:Array = [[NPC.MOYANXINGXING,["可恶，竟然在这个时候出现，看我不好好收拾你们！"],["魔焰猩猩，小心那个章鱼！！！"]],[NPC.MOYANXINGXING,["放心吧！赛尔，我魔焰猩猩还从来没遇到过对手！让你看看什么才是真正的咆哮吧！ "],["接招吧！恶灵兽的爪牙！"]]];
         var dialogsArray3:Array = [[NPC.SHENGGUANGTIANMA,["魔焰猩猩，他们两个就交给我和黑天马克利萨吧！我相信融合一族一定会重新崛起的，期待你们的爆发！"],["哇！黑天马好帅啊！"]]];
         var dialogsArray4:Array = [[NPC.MOYANXINGXING,["融合一族必定会再次崛起的，圣光天马你就看着吧！一旦找到尤尼卡和恶灵兽的下落，我们就会证明融合一族的实力！"],["加油啊！魔焰猩猩！"]],[NPC.MOYANXINGXING,["赛尔，我们也需要你的帮助！0xff000011月23日，晚上19:00—20:00.11月24日—25日，下午13:00—14:000xFFFFFF，让我们一起为了融合一族的未来加油吧！"],["恩恩，我一定会来的！"]]];
         var dialogsArray5:Array = [[NPC.MOYANXINGXING,["赛尔记得来哦！11月23日，0xff0000晚上19:00—20:00.11月24日—25日，下午13:00—14:000xFFFFFF我们会在这里等你的！！"],["恩恩，交给我吧！"]]];
         var allDialog:Array = [dialogsArray1,dialogsArray2,dialogsArray3,dialogsArray4,dialogsArray5];
         var allMapMvs:Array = ["preTask1","preTask2","preTask3","preTask4"];
         playTaskClicp(true);
         MapManager.currentMap.controlLevel.addChild(mapMv);
         mapMv.gotoAndStop(1);
         taskQunePro = new TaskQuneProcessor();
         taskQunePro.addDialog(dialogsArray1);
         taskQunePro.addMapMv(mapMv,1,"mc1");
         taskQunePro.addDialog(dialogsArray2);
         taskQunePro.addFullMv(ClientConfig.getFullMovie("active20121123_1"));
         taskQunePro.addDialog(dialogsArray3);
         taskQunePro.addMapMv(mapMv,2,"mc2");
         taskQunePro.addDialog(dialogsArray4);
         taskQunePro.addMapMv(mapMv,3,"mc3");
         taskQunePro.addDialog(dialogsArray5);
         taskQunePro.procesEndFun = function():void
         {
            BufferRecordManager.setState(MainManager.actorInfo,468,true,function():void
            {
               playTaskClicp(false);
               mapMv.gotoAndStop(mapMv.totalFrames);
               SocketConnection.send(1022,86052433);
               updateScene();
            });
         };
         taskQunePro.start();
      }
      
      private static function playTaskClicp(param1:Boolean) : void
      {
         if(param1)
         {
            xingxingMv.visible = false;
            pets.visible = false;
            threePets.visible = false;
            MapManager.currentMap.controlLevel.addChild(mapMv);
         }
         else
         {
            xingxingMv.visible = true;
            pets.visible = true;
            threePets.visible = true;
            mapMv.gotoAndStop(mapMv.totalFrames);
            DisplayUtil.removeForParent(mapMv);
         }
      }
      
      private static function get xingxingMv() : MovieClip
      {
         return MapManager.currentMap.controlLevel["xingxing"];
      }
      
      private static function get threePets() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["guanzhanPets"];
      }
      
      private static function get pets() : MovieClip
      {
         return MapManager.currentMap.controlLevel["pets"];
      }
      
      private static function get mapMv() : MovieClip
      {
         return _mapMv;
      }
      
      private static function get activityTimes() : Array
      {
         var _loc1_:Array = [];
         _loc1_.push(new CronTimeVo("*","19","23","11","*"));
         _loc1_.push(new CronTimeVo("*","13","24-25","11","*"));
         return _loc1_;
      }
      
      private static function get hasFinshPreTask() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,468);
      }
      
      private static function get vsIconTextArry() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         while(_loc2_ < 12)
         {
            _loc1_.push("第" + (_loc2_ + 1) + "轮开始,融合一族试炼已经开始，快去挑战吧!");
            _loc2_++;
         }
         return _loc1_;
      }
      
      private static function get sys1() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["sys1"];
      }
      
      private static function get sys2() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["sys2"];
      }
   }
}
