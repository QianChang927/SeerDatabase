package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.OgreEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.NpcModel;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.npc.NpcInfo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.BitUtil;
   import org.taomee.utils.DisplayUtil;
   
   public class CareerTaskController
   {
      
      private static const TASK_BITBUF:int = 22991;
      
      private static const INIT_TASK_BITBUF:int = 22997;
      
      private static const ACT_MAP:int = 11023;
      
      private static var _career:int;
       
      
      public function CareerTaskController()
      {
         super();
      }
      
      public static function open(param1:MovieClip = null) : void
      {
         if(isInitTaskFinish)
         {
            ModuleManager.showAppModule("CareerTaskMainPanel");
         }
         else if(isFinish)
         {
            startInitTask();
         }
         else
         {
            startPreTask();
         }
      }
      
      private static function startPreTask() : void
      {
         StatManager.sendStat2014("1211职业任务开启","开始前置剧情",StatManager.RUN_ACT_2015);
         KTool.changeMapWithCallBack(ACT_MAP,function():void
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("career_task_pre_task"),function(param1:MovieClip):void
            {
               var story:Array;
               var storyPlayer:TaskStoryPlayer = null;
               var mc:MovieClip = param1;
               MapManager.currentMap.controlLevel.addChild(mc);
               story = [[TaskStoryPlayer.MAP_MOVIE,[mc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.CICI,["感谢大家！在大家的努力之下，我们已经完成了新太空站第一部分的建造！"],null]],[TaskStoryPlayer.DIALOG,[NPC.CICI,["就像我之前说的，现在我们对各位的工作进行了详细分工。本周，我们开启第一个职业：消防员的报名工作！"],null]],[TaskStoryPlayer.MAP_MOVIE,[mc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.CICI,["法伊尔可是特意远道而来，想要帮助赛尔号重建太空站的呢！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["欢迎欢迎！"],null]],[TaskStoryPlayer.DIALOG,[NPC.FAYIER,["谢谢大家！"],null]],[TaskStoryPlayer.DIALOG,[NPC.CICI,["好了，言归正传。本周我们为大家提供了一些任务，所有完成任务的赛尔均有可能得到两种勋章作为奖励！加入了职业的赛尔，就可以使用勋章兑换职业专属奖励了哦！"],null]],[TaskStoryPlayer.DIALOG,[NPC.CICI,["但是在这之前，我们需要对参与报名的小赛尔进行一次小小的考验。完成了这个考验，你们就具备了报名加入的资格！更能初步获得一份职业奖励哦！"],["我一定会完成任务的！"]]]];
               storyPlayer = new TaskStoryPlayer();
               storyPlayer.useNewDialog = true;
               NpcDialogNew_1._HasDanmu = false;
               storyPlayer.addStory(story);
               storyPlayer.storyEndCallback = function():void
               {
                  storyPlayer.destory();
                  DisplayUtil.removeForParent(mc);
                  BitBuffSetClass.setState(TASK_BITBUF,1);
                  startInitTask();
               };
               storyPlayer.start();
            });
         });
      }
      
      private static function startInitTask() : void
      {
         if(!isInitTaskFinish)
         {
            ModuleManager.showAppModule("CareerTaskTipPanel","00");
         }
         else
         {
            ModuleManager.showAppModule("CareerTaskMainPanel");
         }
      }
      
      private static function get isInitTaskFinish() : Boolean
      {
         return BitBuffSetClass.getState(INIT_TASK_BITBUF) > 0;
      }
      
      private static function get isFinish() : Boolean
      {
         return BitBuffSetClass.getState(TASK_BITBUF) > 0;
      }
      
      public static function getCareer(param1:Function) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([8506],function(param1:Array):void
         {
            _career = param1[0];
            if(func != null)
            {
               func(_career);
            }
         });
      }
      
      public static function start0_0() : void
      {
         var mapId:int = 0;
         var model:NpcModel = null;
         var initTask:Function = null;
         var onNpc:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            NpcController.addEventListener(NpcController.NPC_CLICK,onNpc,false,999);
            var _loc1_:XML = <npc id="2" name="机械师茜茜" nameY="20" sound="5" type="CICI" point="752|331" points="580|160|660|280|400|400|300|160" color="0xFFFF00" cloths="100370|100371|100372" hasName="1" statisticId="219"/>;
            var _loc2_:NpcInfo = new NpcInfo(_loc1_);
            model = new NpcModel(_loc2_);
            model.show();
         };
         onNpc = function(param1:DynamicEvent):void
         {
            var story:Array;
            var storyPlayer:TaskStoryPlayer = null;
            var e:DynamicEvent = param1;
            e.stopImmediatePropagation();
            story = [[TaskStoryPlayer.DIALOG,[NPC.CICI,["你来了，亲爱的新晋消防员！太空站被摧毁之后，许多地方都处于火焰燃烧之中。"],null]],[TaskStoryPlayer.DIALOG,[NPC.CICI,["这是一项需要勇气和果敢的任务，相信你一定可以胜任！"],null]],[TaskStoryPlayer.DIALOG,[NPC.CICI,["现在，前往太空站左翼废墟，那里正燃烧着熊熊大火！你有信心将它们扑灭吗？"],["我可以的！"]]]];
            storyPlayer = new TaskStoryPlayer();
            storyPlayer.useNewDialog = true;
            NpcDialogNew_1._HasDanmu = false;
            storyPlayer.addStory(story);
            storyPlayer.storyEndCallback = function():void
            {
               storyPlayer.destory();
               SocketConnection.sendByQueue(43677,[6,1],function(param1:*):void
               {
                  ModuleManager.showAppModule("CareerTaskTipPanel","12");
                  destroyTask();
               });
            };
            storyPlayer.start();
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
         };
         var destroyTask:Function = function():void
         {
            model.destroy();
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            NpcController.removeEventListener(NpcController.NPC_CLICK,onNpc);
         };
         mapId = ACT_MAP;
         KTool.changeMapWithCallBack(mapId,initTask);
      }
      
      public static function start0_1() : void
      {
         var mapId:int = 0;
         var taskmc:MovieClip = null;
         var initTask:Function = null;
         var cnt:int = 0;
         var onClick:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            ResourceManager.getResource(ClientConfig.getMapAnimate("career_task_01_fire"),function(param1:MovieClip):void
            {
               taskmc = param1;
               MapManager.currentMap.controlLevel.addChild(taskmc);
               var _loc2_:int = 0;
               while(_loc2_ < 4)
               {
                  taskmc["fire_" + _loc2_].buttonMode = true;
                  taskmc["fire_" + _loc2_].mouseChildren = false;
                  taskmc["fire_" + _loc2_].gotoAndStop(2);
                  _loc2_++;
               }
               taskmc.addEventListener(MouseEvent.CLICK,onClick);
            });
            cnt = 0;
         };
         onClick = function(param1:MouseEvent):void
         {
            var mc:MovieClip = null;
            var e:MouseEvent = param1;
            ++cnt;
            mc = e.target as MovieClip;
            AnimateManager.playMcAnimate(mc,2,"mc",function():void
            {
               DisplayUtil.removeForParent(mc);
               if(cnt == 4)
               {
                  SocketConnection.sendByQueue(43677,[6,2],function(param1:*):void
                  {
                     ModuleManager.showAppModule("CareerTaskTipPanel","13");
                     destroyTask();
                  });
               }
            });
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
         };
         var destroyTask:Function = function():void
         {
            if(taskmc)
            {
               taskmc.removeEventListener(MouseEvent.CLICK,onClick);
               DisplayUtil.removeForParent(taskmc);
               taskmc = null;
            }
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
         };
         mapId = 11019;
         KTool.changeMapWithCallBack(mapId,initTask);
      }
      
      public static function start0_2() : void
      {
         var mapId:int = 0;
         var boss:Array = null;
         var initTask:Function = null;
         var onFight:Function = null;
         var onOgre:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.addEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            updateBoss();
         };
         var updateBoss:Function = function():void
         {
            KTool.getMultiValue([15851],function(param1:Array):void
            {
               var _loc4_:OgreModel = null;
               var _loc2_:int = 0;
               var _loc3_:int = 0;
               while(_loc3_ < boss.length)
               {
                  if(boss[_loc3_].model)
                  {
                     boss[_loc3_].model.destroy();
                     boss[_loc3_].model = null;
                  }
                  if(BitUtil.getBit(param1[0],_loc3_ + 3 - 1) == 1)
                  {
                     _loc2_++;
                  }
                  else
                  {
                     (_loc4_ = new OgreModel(_loc3_)).show(boss[_loc3_].id,boss[_loc3_].p);
                     boss[_loc3_].model = _loc4_;
                  }
                  _loc3_++;
               }
               if(_loc2_ >= 4)
               {
                  ModuleManager.showAppModule("CareerTaskMainPanel");
                  destroyTask();
               }
            });
         };
         onFight = function(param1:PetFightEvent):void
         {
            updateBoss();
         };
         onOgre = function(param1:OgreEvent):void
         {
            FightManager.fightNoMapBoss("",boss[param1.model.index].region);
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
            else
            {
               updateBoss();
            }
         };
         var destroyTask:Function = function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.removeEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
            var _loc1_:int = 0;
            while(_loc1_ < 4)
            {
               if(boss[_loc1_].model)
               {
                  boss[_loc1_].model.destroy();
               }
               _loc1_++;
            }
            boss = null;
         };
         mapId = 11020;
         KTool.changeMapWithCallBack(mapId,initTask);
         boss = [{
            "id":1151,
            "region":5772,
            "model":null,
            "p":new Point(200,250)
         },{
            "id":2008,
            "region":5773,
            "model":null,
            "p":new Point(400,300)
         },{
            "id":2023,
            "region":5774,
            "model":null,
            "p":new Point(600,250)
         },{
            "id":2325,
            "region":5775,
            "model":null,
            "p":new Point(800,300)
         }];
      }
      
      public static function start1_0() : void
      {
         var mapId:int = 0;
         var model:NpcModel = null;
         var initTask:Function = null;
         var onNpc:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            NpcController.addEventListener(NpcController.NPC_CLICK,onNpc,false,999);
            var _loc1_:XML = <npc id="2" name="机械师茜茜" nameY="20" sound="5" type="CICI" point="752|331" points="580|160|660|280|400|400|300|160" color="0xFFFF00" cloths="100370|100371|100372" hasName="1" statisticId="219"/>;
            var _loc2_:NpcInfo = new NpcInfo(_loc1_);
            model = new NpcModel(_loc2_);
            model.show();
         };
         onNpc = function(param1:DynamicEvent):void
         {
            var story:Array;
            var storyPlayer:TaskStoryPlayer = null;
            var e:DynamicEvent = param1;
            e.stopImmediatePropagation();
            story = [[TaskStoryPlayer.DIALOG,[NPC.CICI,["你来了，亲爱的新晋急救师！太空站被摧毁之后，海盗们继续着他们的攻势，频繁袭击太空站，对我们的重建行动带来了极大的困扰。"],null]],[TaskStoryPlayer.DIALOG,[NPC.CICI,["医者父母心，拿起你的医疗包，为受伤的赛尔们治疗吧，我代表所有赛尔号成员向你表示感谢！"],null]],[TaskStoryPlayer.DIALOG,[NPC.CICI,["现在，前往太空站拓展废墟，那里刚刚击退一次海盗，正有着许多伤员等待着你的救治！"],["我可以的！"]]]];
            storyPlayer = new TaskStoryPlayer();
            storyPlayer.useNewDialog = true;
            NpcDialogNew_1._HasDanmu = false;
            storyPlayer.addStory(story);
            storyPlayer.storyEndCallback = function():void
            {
               storyPlayer.destory();
               SocketConnection.sendByQueue(43677,[8,1],function(param1:*):void
               {
                  ModuleManager.showAppModule("CareerTaskTipPanel","22");
                  destroyTask();
               });
            };
            storyPlayer.start();
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
         };
         var destroyTask:Function = function():void
         {
            model.destroy();
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            NpcController.removeEventListener(NpcController.NPC_CLICK,onNpc);
         };
         mapId = ACT_MAP;
         KTool.changeMapWithCallBack(mapId,initTask);
      }
      
      public static function start1_1() : void
      {
         var mapId:int = 0;
         var taskmc:MovieClip = null;
         var initTask:Function = null;
         var cnt:int = 0;
         var onClick:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            ResourceManager.getResource(ClientConfig.getMapAnimate("career_task_11_cure"),function(param1:MovieClip):void
            {
               taskmc = param1;
               MapManager.currentMap.controlLevel.addChild(taskmc);
               var _loc2_:int = 0;
               while(_loc2_ < 4)
               {
                  taskmc["seer_" + _loc2_].buttonMode = true;
                  taskmc["seer_" + _loc2_].gotoAndStop(1);
                  _loc2_++;
               }
               taskmc.addEventListener(MouseEvent.CLICK,onClick);
            });
            cnt = 0;
         };
         onClick = function(param1:MouseEvent):void
         {
            var mc:MovieClip = null;
            var e:MouseEvent = param1;
            if(e.target.name == "seer")
            {
               ++cnt;
               mc = e.target.parent as MovieClip;
               AnimateManager.playMcAnimate(mc,2,"mc",function():void
               {
                  DisplayUtil.removeForParent(mc);
                  if(cnt == 4)
                  {
                     SocketConnection.sendByQueue(43677,[8,2],function(param1:*):void
                     {
                        ModuleManager.showAppModule("CareerTaskTipPanel","23");
                        destroyTask();
                     });
                  }
               });
            }
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
         };
         var destroyTask:Function = function():void
         {
            if(taskmc)
            {
               taskmc.removeEventListener(MouseEvent.CLICK,onClick);
               DisplayUtil.removeForParent(taskmc);
               taskmc = null;
            }
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
         };
         mapId = 11020;
         KTool.changeMapWithCallBack(mapId,initTask);
      }
      
      public static function start1_2() : void
      {
         var mapId:int = 0;
         var boss:Array = null;
         var initTask:Function = null;
         var onFight:Function = null;
         var onOgre:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.addEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            updateBoss();
         };
         var updateBoss:Function = function():void
         {
            KTool.getMultiValue([15852],function(param1:Array):void
            {
               var _loc4_:OgreModel = null;
               var _loc2_:int = 0;
               var _loc3_:int = 0;
               while(_loc3_ < boss.length)
               {
                  if(boss[_loc3_].model)
                  {
                     boss[_loc3_].model.destroy();
                     boss[_loc3_].model = null;
                  }
                  if(BitUtil.getBit(param1[0],_loc3_ + 3 - 1) == 1)
                  {
                     _loc2_++;
                  }
                  else
                  {
                     (_loc4_ = new OgreModel(_loc3_)).show(boss[_loc3_].id,boss[_loc3_].p);
                     boss[_loc3_].model = _loc4_;
                  }
                  _loc3_++;
               }
               if(_loc2_ >= 4)
               {
                  ModuleManager.showAppModule("CareerTaskMainPanel");
                  destroyTask();
               }
            });
         };
         onFight = function(param1:PetFightEvent):void
         {
            updateBoss();
         };
         onOgre = function(param1:OgreEvent):void
         {
            FightManager.fightNoMapBoss("",boss[param1.model.index].region);
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
            else
            {
               updateBoss();
            }
         };
         var destroyTask:Function = function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.removeEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
            var _loc1_:int = 0;
            while(_loc1_ < 4)
            {
               if(boss[_loc1_].model)
               {
                  boss[_loc1_].model.destroy();
               }
               _loc1_++;
            }
            boss = null;
         };
         mapId = 11020;
         KTool.changeMapWithCallBack(mapId,initTask);
         boss = [{
            "id":2929,
            "region":5867,
            "model":null,
            "p":new Point(200,250)
         },{
            "id":2942,
            "region":5868,
            "model":null,
            "p":new Point(400,300)
         },{
            "id":2951,
            "region":5869,
            "model":null,
            "p":new Point(600,250)
         },{
            "id":2954,
            "region":5870,
            "model":null,
            "p":new Point(800,300)
         }];
      }
      
      public static function start2_0() : void
      {
         var mapId:int = 0;
         var model:NpcModel = null;
         var initTask:Function = null;
         var onNpc:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            NpcController.addEventListener(NpcController.NPC_CLICK,onNpc,false,999);
            var _loc1_:XML = <npc id="2" name="机械师茜茜" nameY="20" sound="5" type="CICI" point="752|331" points="580|160|660|280|400|400|300|160" color="0xFFFF00" cloths="100370|100371|100372" hasName="1" statisticId="219"/>;
            var _loc2_:NpcInfo = new NpcInfo(_loc1_);
            model = new NpcModel(_loc2_);
            model.show();
         };
         onNpc = function(param1:DynamicEvent):void
         {
            var story:Array;
            var storyPlayer:TaskStoryPlayer = null;
            var e:DynamicEvent = param1;
            e.stopImmediatePropagation();
            story = [[TaskStoryPlayer.DIALOG,[NPC.CICI,["你来了，亲爱的新晋机械师！太空站被摧毁之后，许多机械碎片都漂浮在周围的太空中，严重影响到了太空的环境。我们需要你的帮助！"],null]],[TaskStoryPlayer.DIALOG,[NPC.CICI,["利用你的机械知识，将那些机械碎片回收起来吧。这些碎片中还会有一些剩余能源，正好可以进行回收利用。"],null]],[TaskStoryPlayer.DIALOG,[NPC.CICI,["现在，前往陨石地带，将那里漂浮的机械碎片清理干净吧！"],["我这就去！"]]]];
            storyPlayer = new TaskStoryPlayer();
            storyPlayer.useNewDialog = true;
            NpcDialogNew_1._HasDanmu = false;
            storyPlayer.addStory(story);
            storyPlayer.storyEndCallback = function():void
            {
               storyPlayer.destory();
               SocketConnection.sendByQueue(43677,[9,1],function(param1:*):void
               {
                  ModuleManager.showAppModule("CareerTaskTipPanel","32");
                  destroyTask();
               });
            };
            storyPlayer.start();
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
         };
         var destroyTask:Function = function():void
         {
            model.destroy();
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            NpcController.removeEventListener(NpcController.NPC_CLICK,onNpc);
         };
         mapId = ACT_MAP;
         KTool.changeMapWithCallBack(mapId,initTask);
      }
      
      public static function start2_1() : void
      {
         var mapId:int = 0;
         var taskmc:MovieClip = null;
         var initTask:Function = null;
         var cnt:int = 0;
         var onClick:Function = null;
         var onFight:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            ResourceManager.getResource(ClientConfig.getMapAnimate("career_task_21_trash"),function(param1:MovieClip):void
            {
               taskmc = param1;
               taskmc.addEventListener(MouseEvent.CLICK,onClick);
               updateBoss();
            });
            cnt = 0;
         };
         var updateBoss:Function = function():void
         {
            KTool.getMultiValue([15853],function(param1:Array):void
            {
               cnt = 0;
               MapManager.currentMap.controlLevel.addChild(taskmc);
               var _loc2_:int = 0;
               while(_loc2_ < 4)
               {
                  if(BitUtil.getBit(param1[0],1 + _loc2_) == 1)
                  {
                     ++cnt;
                     DisplayUtil.removeForParent(taskmc["trash_" + _loc2_]);
                  }
                  else
                  {
                     taskmc["trash_" + _loc2_].buttonMode = true;
                     taskmc["trash_" + _loc2_].gotoAndStop(1);
                  }
                  _loc2_++;
               }
               if(cnt == 4)
               {
                  ModuleManager.showAppModule("CareerTaskTipPanel","33");
                  destroyTask();
               }
            });
         };
         onClick = function(param1:MouseEvent):void
         {
            var _loc2_:MovieClip = null;
            var _loc3_:int = 0;
            if(param1.target.name == "trash" || param1.target.name == "mc")
            {
               _loc2_ = param1.target.parent as MovieClip;
               if(_loc2_.currentFrame == 1)
               {
                  AnimateManager.playMcAnimate(_loc2_,2,"mc");
               }
               else
               {
                  _loc3_ = int(_loc2_.name.split("_")[1]);
                  FightManager.fightNoMapBoss("",6184 + _loc3_);
               }
            }
         };
         onFight = function(param1:PetFightEvent):void
         {
            updateBoss();
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
         };
         var destroyTask:Function = function():void
         {
            if(taskmc)
            {
               taskmc.removeEventListener(MouseEvent.CLICK,onClick);
               DisplayUtil.removeForParent(taskmc);
               taskmc = null;
            }
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
         };
         mapId = 11030;
         KTool.changeMapWithCallBack(mapId,initTask);
      }
      
      public static function start2_2() : void
      {
         var mapId:int = 0;
         var model:NpcModel = null;
         var initTask:Function = null;
         var onNpc:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            NpcController.addEventListener(NpcController.NPC_CLICK,onNpc,false,999);
            var _loc1_:XML = <npc id="7" name="苏克" nameY="20" type="suke" point="700|300" points="675|260|780|305|630|405|590|315" color="0x000000" cloths="100362|100363|100364|100365" hasName="1" statisticId="218"/>;
            var _loc2_:NpcInfo = new NpcInfo(_loc1_);
            model = new NpcModel(_loc2_);
            model.show();
         };
         onNpc = function(param1:DynamicEvent):void
         {
            var story:Array;
            var storyPlayer:TaskStoryPlayer = null;
            var e:DynamicEvent = param1;
            e.stopImmediatePropagation();
            story = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["你好，这些是我从一些太空垃圾中回收到的废旧能源，看起来还能用的样子。"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHUKE,["你做的很好，小赛尔！不管在哪里，环境污染都不是我们想看到的。能源回收重新利用，我们一直鼓励这种行为！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHUKE,["现在，前往陨石地带，将那里漂浮的机械碎片清理干净吧！"],["我一定会的！"]]]];
            storyPlayer = new TaskStoryPlayer();
            storyPlayer.useNewDialog = true;
            NpcDialogNew_1._HasDanmu = false;
            storyPlayer.addStory(story);
            storyPlayer.storyEndCallback = function():void
            {
               storyPlayer.destory();
               SocketConnection.sendByQueue(43677,[9,3],function(param1:*):void
               {
                  ModuleManager.showAppModule("CareerTaskMainPanel");
                  destroyTask();
               });
            };
            storyPlayer.start();
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
         };
         var destroyTask:Function = function():void
         {
            model.destroy();
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            NpcController.removeEventListener(NpcController.NPC_CLICK,onNpc);
         };
         mapId = 11031;
         KTool.changeMapWithCallBack(mapId,initTask);
      }
      
      public static function start3_0() : void
      {
         var mapId:int = 0;
         var model:NpcModel = null;
         var initTask:Function = null;
         var onNpc:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            NpcController.addEventListener(NpcController.NPC_CLICK,onNpc,false,999);
            var _loc1_:XML = <npc id="2" name="机械师茜茜" nameY="20" sound="5" type="CICI" point="752|331" points="580|160|660|280|400|400|300|160" color="0xFFFF00" cloths="100370|100371|100372" hasName="1" statisticId="219"/>;
            var _loc2_:NpcInfo = new NpcInfo(_loc1_);
            model = new NpcModel(_loc2_);
            model.show();
         };
         onNpc = function(param1:DynamicEvent):void
         {
            var story:Array;
            var storyPlayer:TaskStoryPlayer = null;
            var e:DynamicEvent = param1;
            e.stopImmediatePropagation();
            story = [[TaskStoryPlayer.DIALOG,[NPC.CICI,["你来了，亲爱的护卫队新队员！太空站被摧毁之后，海盗们依然没有结束进攻，每天都在骚扰着我们。我们需要你的帮助！"],null]],[TaskStoryPlayer.DIALOG,[NPC.CICI,["能够成为护卫队成员，意味着你的战斗技巧远超其他职业的小赛尔。抵御海盗们的进攻，正需要你这样的勇士！"],null]],[TaskStoryPlayer.DIALOG,[NPC.CICI,["现在，前往太空深处，支援前方的战斗小队，将敌人全部击败吧！"],["我这就去！"]]]];
            storyPlayer = new TaskStoryPlayer();
            storyPlayer.useNewDialog = true;
            NpcDialogNew_1._HasDanmu = false;
            storyPlayer.addStory(story);
            storyPlayer.storyEndCallback = function():void
            {
               storyPlayer.destory();
               SocketConnection.sendByQueue(43677,[10,1],function(param1:*):void
               {
                  ModuleManager.showAppModule("CareerTaskTipPanel","42");
                  destroyTask();
               });
            };
            storyPlayer.start();
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
         };
         var destroyTask:Function = function():void
         {
            model.destroy();
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            NpcController.removeEventListener(NpcController.NPC_CLICK,onNpc);
         };
         mapId = ACT_MAP;
         KTool.changeMapWithCallBack(mapId,initTask);
      }
      
      public static function start3_1() : void
      {
         var mapId:int = 0;
         var taskmc:MovieClip = null;
         var initTask:Function = null;
         var cnt:int = 0;
         var onClick:Function = null;
         var onFight:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            ResourceManager.getResource(ClientConfig.getMapAnimate("career_task_32_pirate"),function(param1:MovieClip):void
            {
               taskmc = param1;
               taskmc.addEventListener(MouseEvent.CLICK,onClick);
               updateBoss();
            });
            cnt = 0;
         };
         var updateBoss:Function = function():void
         {
            KTool.getMultiValue([15854],function(param1:Array):void
            {
               cnt = 0;
               MapManager.currentMap.controlLevel.addChild(taskmc);
               var _loc2_:int = 0;
               while(_loc2_ < 4)
               {
                  if(BitUtil.getBit(param1[0],1 + _loc2_) == 1)
                  {
                     ++cnt;
                     DisplayUtil.removeForParent(taskmc["pirate_" + _loc2_]);
                  }
                  _loc2_++;
               }
               if(cnt == 4)
               {
                  ModuleManager.showAppModule("CareerTaskTipPanel","43");
                  destroyTask();
               }
            });
         };
         onClick = function(param1:MouseEvent):void
         {
            var index:int = 0;
            var e:MouseEvent = param1;
            if(e.target.name.indexOf("pirate") != -1)
            {
               index = int(e.target.name.split("_")[1]);
               NpcDialogNew_1.show(NPC.PIRATE,["受死吧，小赛尔！"],["看我不打扁你！"],[function():void
               {
                  FightManager.fightNoMapBoss("",6235 + index);
               }]);
            }
         };
         onFight = function(param1:PetFightEvent):void
         {
            updateBoss();
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
         };
         var destroyTask:Function = function():void
         {
            if(taskmc)
            {
               taskmc.removeEventListener(MouseEvent.CLICK,onClick);
               DisplayUtil.removeForParent(taskmc);
               taskmc = null;
            }
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
         };
         mapId = 11038;
         KTool.changeMapWithCallBack(mapId,initTask);
      }
      
      public static function start3_2() : void
      {
         var mapId:int = 0;
         var boss:Array = null;
         var initTask:Function = null;
         var onFight:Function = null;
         var onOgre:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.addEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            updateBoss();
         };
         var updateBoss:Function = function():void
         {
            KTool.getMultiValue([15854],function(param1:Array):void
            {
               var _loc4_:OgreModel = null;
               var _loc2_:int = 0;
               var _loc3_:int = 0;
               while(_loc3_ < boss.length)
               {
                  if(boss[_loc3_].model)
                  {
                     boss[_loc3_].model.destroy();
                     boss[_loc3_].model = null;
                  }
                  if(BitUtil.getBit(param1[0],_loc3_ + 5) == 1)
                  {
                     _loc2_++;
                  }
                  else
                  {
                     (_loc4_ = new OgreModel(_loc3_)).show(boss[_loc3_].id,boss[_loc3_].p);
                     boss[_loc3_].model = _loc4_;
                  }
                  _loc3_++;
               }
               if(_loc2_ >= 4)
               {
                  ModuleManager.showAppModule("CareerTaskMainPanel");
                  destroyTask();
               }
            });
         };
         onFight = function(param1:PetFightEvent):void
         {
            updateBoss();
         };
         onOgre = function(param1:OgreEvent):void
         {
            FightManager.fightNoMapBoss("",boss[param1.model.index].region);
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
            else
            {
               updateBoss();
            }
         };
         var destroyTask:Function = function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.removeEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
            var _loc1_:int = 0;
            while(_loc1_ < 4)
            {
               if(boss[_loc1_].model)
               {
                  boss[_loc1_].model.destroy();
               }
               _loc1_++;
            }
            boss = null;
         };
         mapId = 11022;
         KTool.changeMapWithCallBack(mapId,initTask);
         boss = [{
            "id":2924,
            "region":6239,
            "model":null,
            "p":new Point(200,250)
         },{
            "id":2957,
            "region":6240,
            "model":null,
            "p":new Point(400,300)
         },{
            "id":2979,
            "region":6241,
            "model":null,
            "p":new Point(600,250)
         },{
            "id":2975,
            "region":6242,
            "model":null,
            "p":new Point(800,300)
         }];
      }
      
      public static function start4() : void
      {
         var mapId:int = 0;
         var taskmc:MovieClip = null;
         var initTask:Function = null;
         var onAimat:Function = null;
         var cnt:int = 0;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            AimatController.addEventListener(AimatEvent.CLOSE,onAimat);
            ResourceManager.getResource(ClientConfig.getMapAnimate("career_task_4_stone"),function(param1:MovieClip):void
            {
               taskmc = param1;
               MapManager.currentMap.controlLevel.addChild(taskmc);
               var _loc2_:int = 0;
               while(_loc2_ < 4)
               {
                  taskmc["stone_" + _loc2_].buttonMode = true;
                  taskmc["stone_" + _loc2_].gotoAndStop(1);
                  _loc2_++;
               }
            });
            cnt = 0;
         };
         onAimat = function(param1:AimatEvent):void
         {
            var i:int = 0;
            var e:AimatEvent = param1;
            var info:AimatInfo = e.info;
            i = 0;
            while(i < 4)
            {
               if(taskmc["stone_" + i].hitTestPoint(info.endPos.x,info.endPos.y))
               {
                  ++cnt;
                  AnimateManager.playMcAnimate(taskmc["stone_" + i],2,"mc",function():void
                  {
                     DisplayUtil.removeForParent(taskmc["stone_" + i]);
                     if(cnt == 4)
                     {
                        SocketConnection.sendByQueue(43677,[5,1],function(param1:*):void
                        {
                           ModuleManager.showAppModule("CareerTaskMainPanel");
                           destroyTask();
                        });
                     }
                  });
                  break;
               }
               i++;
            }
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
         };
         var destroyTask:Function = function():void
         {
            if(taskmc)
            {
               DisplayUtil.removeForParent(taskmc);
               taskmc = null;
            }
            AimatController.removeEventListener(AimatEvent.CLOSE,onAimat);
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
         };
         mapId = 11022;
         KTool.changeMapWithCallBack(mapId,initTask);
      }
      
      public static function start5() : void
      {
         var mapId:int = 0;
         var boss:Object = null;
         var initTask:Function = null;
         var onFight:Function = null;
         var onOgre:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.addEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            updateBoss();
         };
         var updateBoss:Function = function():void
         {
            if(boss.model)
            {
               boss.model.destroy();
               boss.model = null;
            }
            var _loc1_:OgreModel = new OgreModel(0);
            _loc1_.show(boss.id,boss.p);
            boss.model = _loc1_;
         };
         onFight = function(param1:PetFightEvent):void
         {
            if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
            {
               ModuleManager.showAppModule("CareerTaskMainPanel");
               destroyTask();
            }
         };
         onOgre = function(param1:OgreEvent):void
         {
            var storyPlayer:TaskStoryPlayer = null;
            var e:OgreEvent = param1;
            var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["你好，请问你这里有毁灭之水吗？"],null]],[TaskStoryPlayer.DIALOG,[NPC.AOKETEBO,["哼，又是一个觊觎我宝物的混蛋！看打！"],["哎……你听我说啊！"]]]];
            storyPlayer = new TaskStoryPlayer();
            storyPlayer.useNewDialog = true;
            NpcDialogNew_1._HasDanmu = false;
            storyPlayer.addStory(story);
            storyPlayer.storyEndCallback = function():void
            {
               storyPlayer.destory();
               FightManager.fightNoMapBoss("",boss.region);
            };
            storyPlayer.start();
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
            else
            {
               updateBoss();
            }
         };
         var destroyTask:Function = function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.removeEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
            if(boss.model)
            {
               boss.model.destroy();
            }
            boss = null;
         };
         mapId = 11024;
         KTool.changeMapWithCallBack(mapId,initTask);
         boss = {
            "id":2171,
            "region":5776,
            "model":null,
            "p":new Point(671,306)
         };
      }
      
      public static function start6() : void
      {
         var mapId:int = 0;
         var boss:Object = null;
         var initTask:Function = null;
         var onFight:Function = null;
         var onOgre:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.addEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            updateBoss();
         };
         var updateBoss:Function = function():void
         {
            if(boss.model)
            {
               boss.model.destroy();
               boss.model = null;
            }
            var _loc1_:OgreModel = new OgreModel(0);
            _loc1_.show(boss.id,boss.p);
            boss.model = _loc1_;
         };
         onFight = function(param1:PetFightEvent):void
         {
            if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
            {
               ModuleManager.showAppModule("CareerTaskMainPanel");
               destroyTask();
            }
         };
         onOgre = function(param1:OgreEvent):void
         {
            var storyPlayer:TaskStoryPlayer = null;
            var e:OgreEvent = param1;
            var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["你好，请问你这里有坠雷之石吗？"],null]],[TaskStoryPlayer.DIALOG,[NPC.BALESI,["哼，又是一个觊觎我宝物的混蛋！看打！"],["哎……你听我说啊！"]]]];
            storyPlayer = new TaskStoryPlayer();
            storyPlayer.useNewDialog = true;
            NpcDialogNew_1._HasDanmu = false;
            storyPlayer.addStory(story);
            storyPlayer.storyEndCallback = function():void
            {
               storyPlayer.destory();
               FightManager.fightNoMapBoss("",boss.region);
            };
            storyPlayer.start();
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
            else
            {
               updateBoss();
            }
         };
         var destroyTask:Function = function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.removeEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
            if(boss.model)
            {
               boss.model.destroy();
            }
            boss = null;
         };
         mapId = 11025;
         KTool.changeMapWithCallBack(mapId,initTask);
         boss = {
            "id":1625,
            "region":5777,
            "model":null,
            "p":new Point(600,284)
         };
      }
      
      public static function start7() : void
      {
         var mapId:int = 0;
         var boss:Array = null;
         var initTask:Function = null;
         var onFight:Function = null;
         var onOgre:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.addEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            updateBoss();
         };
         var updateBoss:Function = function():void
         {
            KTool.getMultiValue([15844],function(param1:Array):void
            {
               var _loc4_:OgreModel = null;
               var _loc2_:int = 0;
               var _loc3_:int = 0;
               while(_loc3_ < boss.length)
               {
                  if(boss[_loc3_].model)
                  {
                     boss[_loc3_].model.destroy();
                     boss[_loc3_].model = null;
                  }
                  if(BitUtil.getBit(param1[0],_loc3_ + 10 - 1) == 1)
                  {
                     _loc2_++;
                  }
                  else
                  {
                     (_loc4_ = new OgreModel(_loc3_)).show(boss[_loc3_].id,boss[_loc3_].p);
                     boss[_loc3_].model = _loc4_;
                  }
                  _loc3_++;
               }
               if(_loc2_ >= 4)
               {
                  ModuleManager.showAppModule("CareerTaskMainPanel");
                  destroyTask();
               }
            });
         };
         onFight = function(param1:PetFightEvent):void
         {
            if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
            {
               updateBoss();
            }
         };
         onOgre = function(param1:OgreEvent):void
         {
            FightManager.fightNoMapBoss("",boss[param1.model.index].region);
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
            else
            {
               updateBoss();
            }
         };
         var destroyTask:Function = function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.removeEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
            var _loc1_:int = 0;
            while(_loc1_ < 4)
            {
               if(boss[_loc1_].model)
               {
                  boss[_loc1_].model.destroy();
               }
               _loc1_++;
            }
            boss = null;
         };
         mapId = ACT_MAP;
         KTool.changeMapWithCallBack(mapId,initTask);
         boss = [{
            "id":2926,
            "region":5778,
            "model":null,
            "p":new Point(200,250)
         },{
            "id":2446,
            "region":5779,
            "model":null,
            "p":new Point(400,300)
         },{
            "id":2688,
            "region":5780,
            "model":null,
            "p":new Point(600,250)
         },{
            "id":2874,
            "region":5781,
            "model":null,
            "p":new Point(800,300)
         }];
      }
      
      public static function start0() : void
      {
         var mapId:int = 0;
         var boss:Array = null;
         var initTask:Function = null;
         var onFight:Function = null;
         var onOgre:Function = null;
         var onDestroy:Function = null;
         initTask = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.addEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            updateBoss();
         };
         var updateBoss:Function = function():void
         {
            KTool.getMultiValue([8505],function(param1:Array):void
            {
               var model:OgreModel = null;
               var story:Array = null;
               var storyPlayer:TaskStoryPlayer = null;
               var va:Array = param1;
               var winCnt:int = 0;
               var i:int = 0;
               while(i < boss.length)
               {
                  if(boss[i].model)
                  {
                     boss[i].model.destroy();
                     boss[i].model = null;
                  }
                  if(BitUtil.getBit(va[0],i) == 1)
                  {
                     winCnt++;
                  }
                  else
                  {
                     model = new OgreModel(i);
                     model.show(boss[i].id,boss[i].p);
                     boss[i].model = model;
                  }
                  i++;
               }
               if(winCnt >= 4)
               {
                  story = [[TaskStoryPlayer.DIALOG,[NPC.CICI,["你已经成功完成了我们的小考验，这些小奖励拿好哦！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["现在，更多的任务向你开放，你可以选择加入一个职业，也可以选择先做任务，再进行职业选择哦！"],["好的！"]]]];
                  storyPlayer = new TaskStoryPlayer();
                  storyPlayer.useNewDialog = true;
                  NpcDialogNew_1._HasDanmu = false;
                  storyPlayer.addStory(story);
                  storyPlayer.storyEndCallback = function():void
                  {
                     storyPlayer.destory();
                     BitBuffSetClass.setState(INIT_TASK_BITBUF,1);
                     ModuleManager.showAppModule("CareerTaskMainPanel");
                     destroyTask();
                  };
                  storyPlayer.start();
               }
            });
         };
         onFight = function(param1:PetFightEvent):void
         {
            if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
            {
               updateBoss();
            }
         };
         onOgre = function(param1:OgreEvent):void
         {
            FightManager.fightNoMapBoss("",boss[param1.model.index].region);
         };
         onDestroy = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != mapId)
            {
               destroyTask();
            }
            else
            {
               updateBoss();
            }
         };
         var destroyTask:Function = function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onDestroy);
            EventManager.removeEventListener(OgreEvent.CLICK_OGRE,onOgre);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
            var _loc1_:int = 0;
            while(_loc1_ < 4)
            {
               if(boss[_loc1_].model)
               {
                  boss[_loc1_].model.destroy();
               }
               _loc1_++;
            }
            boss = null;
         };
         mapId = ACT_MAP;
         KTool.changeMapWithCallBack(mapId,initTask);
         boss = [{
            "id":2654,
            "region":5768,
            "model":null,
            "p":new Point(188,367)
         },{
            "id":2654,
            "region":5769,
            "model":null,
            "p":new Point(395,400)
         },{
            "id":2654,
            "region":5770,
            "model":null,
            "p":new Point(745,300)
         },{
            "id":2654,
            "region":5771,
            "model":null,
            "p":new Point(675,390)
         }];
      }
   }
}
