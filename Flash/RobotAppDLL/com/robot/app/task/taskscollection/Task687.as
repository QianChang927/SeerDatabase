package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_683;
   import com.robot.app.task.control.TaskController_687;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.debug.DebugTrace;
   
   public class Task687
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var passMap451:Boolean;
       
      
      public function Task687()
      {
         super();
      }
      
      public static function initTaskForMap434(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:uint = uint(TasksManager.getTaskStatus(TaskController_683.TASK_ID));
         _loc2_ = uint(TasksManager.getTaskStatus(TaskController_687.TASK_ID));
         if(_loc2_ == TasksManager.UN_ACCEPT)
         {
            _map.conLevel["seerMC"].gotoAndStop(3);
            _map.conLevel["seerMC"].buttonMode = true;
            _map.conLevel["seerMC"].addEventListener(MouseEvent.CLICK,seerClickHandler);
         }
         else if(_loc2_ == TasksManager.ALR_ACCEPT)
         {
            _map.conLevel["seerMC"].visible = false;
         }
         else if(_loc2_ == TasksManager.COMPLETE)
         {
            _map.conLevel["seerMC"].visible = false;
         }
      }
      
      private static function seerClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         NpcDialog.show(NPC.KAXIUSI_WHITE,[MainManager.actorInfo.formatNick + "，我们绝不能让邪灵组织的阴谋得逞。"],["嗯！开始行动吧！","我先休息一会。"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_687_1"),function():void
            {
               NpcDialog.show(NPC.SEER,["我们先去黯夜之城找奥德，向他了解有关邪灵圣殿的情况。"],["好的！"],[function():void
               {
                  TasksManager.accept(TaskController_687.TASK_ID,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        DebugTrace.show("任务接取成功");
                        _map.conLevel["seerMC"].gotoAndStop(2);
                        _map.conLevel["seerMC"].visible = false;
                        MapManager.changeMap(451);
                     }
                  });
               }]);
            });
         }]);
      }
      
      public static function initTaskForMap451(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_687.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_687.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  _map.conLevel["task673MC"].visible = true;
                  _map.conLevel["task673MC"].gotoAndStop(1);
                  _map.conLevel["task673MC"].buttonMode = true;
                  _map.conLevel["task673MC"].addEventListener(MouseEvent.CLICK,task687Handler);
               }
            });
         }
      }
      
      private static function task687Handler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         passMap451 = true;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_687_2"),function():void
         {
            _map.conLevel["task673MC"].gotoAndStop(4);
            _map.conLevel["task673MC"].buttonMode = false;
            _map.conLevel["task673MC"].removeEventListener(MouseEvent.CLICK,task687Handler);
         });
      }
      
      public static function initTaskForMap452(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["task687"].visible = false;
         nRet = uint(TasksManager.getTaskStatus(TaskController_687.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT && passMap451)
         {
            TasksManager.getProStatusList(TaskController_687.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  _map.conLevel["task687"].visible = true;
               }
            });
         }
      }
      
      public static function initTaskForMap506(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["mainMC"].visible = false;
         _map.conLevel["kaxiusiMC"].visible = false;
         _map.conLevel["cage1MC"].gotoAndStop(5);
         _map.conLevel["cage2MC"].gotoAndStop(5);
         nRet = uint(TasksManager.getTaskStatus(TaskController_687.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            OgreController.isShow = false;
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TaskController_687.TASK_ID,function(param1:Array):void
            {
               if(!param1[0] && passMap451)
               {
                  taskStep = 0;
                  gotoStep1();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  taskStep = 1;
                  gotoStep2();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  taskStep = 2;
                  gotoStep3();
               }
            });
         }
         else if(nRet != TasksManager.UN_ACCEPT)
         {
            if(nRet == TasksManager.COMPLETE)
            {
            }
         }
      }
      
      private static function gotoStep1() : void
      {
         _map.conLevel["kaxiusiMC"].visible = true;
         _map.conLevel["mainMC"].visible = true;
         _map.conLevel["cage1MC"].gotoAndStop(1);
         _map.conLevel["cage2MC"].gotoAndStop(1);
         AnimateManager.playMcAnimate(_map.conLevel["mainMC"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["卡修斯你看，那边的牢笼关着很多精灵。可是，怎么就两个守卫啊！邪灵组织也太草率了吧！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,["嗯！我们这一路过来确实很轻松，似乎有人特意帮我们把道路给打通了。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.KAXIUSI_WHITE,["不管怎么样，要救精灵就得先把这几个守卫干掉，开始行动吧！"],["（点击邪灵守卫开始对战）"],[function():void
                  {
                     TasksManager.complete(TaskController_687.TASK_ID,0,function():void
                     {
                        DebugTrace.show("第一步完成");
                        taskStep = 1;
                        gotoStep2();
                     });
                  }]);
               });
            });
         });
      }
      
      private static function gotoStep2() : void
      {
         _map.conLevel["cage1MC"].gotoAndStop(1);
         _map.conLevel["cage2MC"].gotoAndStop(1);
         _map.conLevel["kaxiusiMC"].visible = true;
         _map.conLevel["mainMC"].visible = true;
         _map.conLevel["mainMC"].gotoAndStop(2);
         _map.conLevel["mainMC"].buttonMode = true;
         _map.conLevel["mainMC"].addEventListener(MouseEvent.CLICK,petClickHandler);
      }
      
      private static function petClickHandler(param1:MouseEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightManager.fightWithBoss("古力可可",0);
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         info = evt.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            _map.conLevel["mainMC"].visible = false;
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_687_3"),function():void
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,[MainManager.actorInfo.formatNick + "，刚刚在危机时刻，突然出现的几个冲击波消灭了大半敌人！到底是谁在暗中帮助我们呢？"],["嗯嗯！我也觉得莫名其妙。"],[function():void
               {
                  NpcDialog.show(NPC.KAXIUSI_WHITE,["而且，我们在邪灵圣殿似乎没遇到什么阻碍，很顺利就找到了精灵被关押的地方。"],["听你这么一说，确实是这样，有点奇怪啊！"],[function():void
                  {
                     NpcDialog.show(NPC.KAXIUSI_WHITE,[MainManager.actorInfo.formatNick + "，先解救被关押的精灵吧！这些牢笼很坚固，看来得硬碰硬了！"],["嗯，我用头部射击试试！"],[function():void
                     {
                        TasksManager.complete(TaskController_687.TASK_ID,1,function():void
                        {
                           DebugTrace.show("第二步完成");
                           taskStep = 2;
                           gotoStep3();
                        });
                     }]);
                  }]);
               }]);
            });
         }
         else
         {
            NpcDialog.show(NPC.GULI_KEKE,["破铁皮！想救这些关在笼子里的家伙，没门！"],["不行！我要战胜它！"]);
         }
      }
      
      private static function gotoStep3() : void
      {
         _map.conLevel["mainMC"].visible = false;
         _map.conLevel["kaxiusiMC"].visible = true;
         _map.conLevel["cage1MC"].gotoAndStop(2);
         _map.conLevel["cage1MC"].buttonMode = true;
         _map.conLevel["cage1MC"]["bloodMC"].visible = false;
         _map.conLevel["cage1MC"]["bloodMC"]["per"].gotoAndStop(1);
         _map.conLevel["cage1MC"].addEventListener(MouseEvent.CLICK,cageClickHandler);
         _map.conLevel["cage2MC"].gotoAndStop(2);
         _map.conLevel["cage2MC"].buttonMode = true;
         _map.conLevel["cage2MC"].addEventListener(MouseEvent.CLICK,cageClickHandler);
         _map.conLevel["cage2MC"]["bloodMC"].visible = false;
         _map.conLevel["cage2MC"]["bloodMC"]["per"].gotoAndStop(1);
         AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEnd);
      }
      
      private static function cageClickHandler(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.SEER,["得用头部射击才能把牢笼打开！"],["（用头部射击击破牢笼）"]);
      }
      
      private static function onAimatEnd(param1:AimatEvent) : void
      {
         var mc:MovieClip = null;
         var blood:MovieClip = null;
         var evt:AimatEvent = param1;
         if(_map.conLevel["cage1MC"].currentFrame == 2 && Boolean(_map.conLevel["cage1MC"].hitTestPoint(evt.info.endPos.x,evt.info.endPos.y)))
         {
            mc = _map.conLevel["cage1MC"];
         }
         else if(_map.conLevel["cage2MC"].currentFrame == 2 && Boolean(_map.conLevel["cage2MC"].hitTestPoint(evt.info.endPos.x,evt.info.endPos.y)))
         {
            mc = _map.conLevel["cage2MC"];
         }
         if(mc != null)
         {
            mc["bloodMC"].visible = true;
            blood = mc["bloodMC"]["per"];
            blood.gotoAndStop(blood.currentFrame + 25);
            if(blood.currentFrame >= 100)
            {
               mc["bloodMC"].visible = false;
               AnimateManager.playMcAnimate(mc,3,"mc3",function():void
               {
                  if(mc.name == "cage1MC")
                  {
                     NpcDialog.show(NPC.JIDU,["你们是真正的英雄！非常感谢，我先去尿尿了……"],["汗！赶紧离开邪灵圣殿吧！"],[function():void
                     {
                        checkSaveResult(mc);
                     }]);
                  }
                  else if(mc.name == "cage2MC")
                  {
                     NpcDialog.show(NPC.TUORUISI,["我们还有一个伙伴被布莱克抓走了，恳请你们一定要救出它！万分感谢。"],["放心！它会平安无事的。"],[function():void
                     {
                        checkSaveResult(mc);
                     }]);
                  }
               });
            }
         }
      }
      
      private static function checkSaveResult(param1:MovieClip) : void
      {
         var mc:MovieClip = param1;
         AnimateManager.playMcAnimate(mc,4,"mc4",function():void
         {
            mc.gotoAndStop(5);
            mc.buttonMode = false;
            mc.removeEventListener(MouseEvent.CLICK,cageClickHandler);
            if(_map.conLevel["cage1MC"].currentFrame == 5 && _map.conLevel["cage2MC"].currentFrame == 5)
            {
               NpcDialog.show(NPC.SEER,["总算是把大伙给救出来了！但仍然有一只精灵在布莱克手里，它到底在哪里呢？"],["别急，我们能找到它！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_687_4"),function():void
                  {
                     NpcDialog.show(NPC.KAXIUSI_WHITE,["布莱克真不愧有着“鬼影精灵”的称号，神出鬼没，捉摸不透啊！我们一定要抓住那个家伙！救出精灵！"],["布莱克，你等着！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_687_5"),function():void
                        {
                           TasksManager.complete(TaskController_687.TASK_ID,2,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 DebugTrace.show("任务完成");
                                 taskStep = 3;
                                 OgreController.isShow = true;
                                 ToolBarController.showOrHideAllUser(true);
                              }
                           });
                        });
                     }]);
                  });
               }]);
            }
         });
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 434)
         {
            _map.conLevel["seerMC"].removeEventListener(MouseEvent.CLICK,seerClickHandler);
         }
         else if(MapManager.currentMap.id == 451)
         {
            _map.conLevel["task673MC"].removeEventListener(MouseEvent.CLICK,task687Handler);
         }
         else if(MapManager.currentMap.id != 452)
         {
            if(MapManager.currentMap.id == 506)
            {
               _map.conLevel["mainMC"].removeEventListener(MouseEvent.CLICK,petClickHandler);
               _map.conLevel["cage1MC"].removeEventListener(MouseEvent.CLICK,cageClickHandler);
               _map.conLevel["cage2MC"].removeEventListener(MouseEvent.CLICK,cageClickHandler);
               AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEnd);
               OgreController.isShow = true;
               ToolBarController.showOrHideAllUser(true);
            }
         }
         _map = null;
      }
   }
}
