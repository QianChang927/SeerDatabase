package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_687;
   import com.robot.app.task.control.TaskController_695;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task695
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var isFight:Boolean;
       
      
      public function Task695()
      {
         super();
      }
      
      public static function initTaskForMap506(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_687.TASK_ID));
         if(nRet == TasksManager.COMPLETE)
         {
            nRet = uint(TasksManager.getTaskStatus(TaskController_695.TASK_ID));
            if(nRet == TasksManager.UN_ACCEPT)
            {
               _map.conLevel["door_1"].visible = false;
               _map.conLevel["kaxiusiMC"].visible = true;
               _map.conLevel["kaxiusiMC"].gotoAndStop(2);
               _map.conLevel["kaxiusiMC"].buttonMode = true;
               _map.conLevel["kaxiusiMC"].addEventListener(MouseEvent.CLICK,kaxiusiClickHandler);
            }
            else if(nRet == TasksManager.ALR_ACCEPT)
            {
               _map.conLevel["kaxiusiMC"].visible = false;
               TasksManager.getProStatusList(TaskController_695.TASK_ID,function(param1:Array):void
               {
                  if(!param1[0])
                  {
                     _map.conLevel["kaxiusiMC"].visible = true;
                     _map.conLevel["kaxiusiMC"].gotoAndStop(3);
                  }
               });
            }
            else if(nRet == TasksManager.COMPLETE)
            {
               _map.conLevel["kaxiusiMC"].visible = false;
            }
         }
      }
      
      private static function kaxiusiClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         NpcDialog.show(NPC.KAXIUSI_WHITE,[MainManager.actorInfo.formatNick + "，我们要抓紧时间找到布莱克！"],["嗯！开始行动吧！","我先休息一会。"],[function():void
         {
            _map.conLevel["kaxiusiMC"].gotoAndStop(2);
            _map.conLevel["kaxiusiMC"].buttonMode = false;
            _map.conLevel["kaxiusiMC"].removeEventListener(MouseEvent.CLICK,kaxiusiClickHandler);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_695_1"),function():void
            {
               TasksManager.accept(TaskController_695.TASK_ID,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     DebugTrace.show("任务接取成功");
                     taskStep = 0;
                     _map.conLevel["door_1"].visible = true;
                     _map.conLevel["kaxiusiMC"].gotoAndStop(3);
                  }
               });
            },false);
         }]);
      }
      
      public static function initTaskForMap357(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["bulaikeMC"].visible = false;
         nRet = uint(TasksManager.getTaskStatus(TaskController_695.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            OgreController.isShow = false;
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TaskController_695.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
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
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  taskStep = 3;
                  gotoStep4();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  taskStep = 4;
                  gotoStep5();
               }
            });
         }
         else
         {
            _map.conLevel["shouweiMC"].visible = false;
            _map.conLevel["weisikeMC"].visible = false;
            _map.conLevel["bulaikeMC"].visible = false;
            DisplayUtil.removeForParent(_map.typeLevel["stone1"]);
            MapManager.currentMap.makeMapArray();
            if(nRet == TasksManager.COMPLETE)
            {
               _map.conLevel["machine1MC"].gotoAndStop(6);
               _map.conLevel["machine2MC"].gotoAndStop(6);
            }
         }
      }
      
      private static function gotoStep1() : void
      {
         TasksManager.complete(TaskController_695.TASK_ID,0,function():void
         {
            DebugTrace.show("第一步完成");
            taskStep = 1;
            gotoStep2();
         });
      }
      
      private static function gotoStep2() : void
      {
         if(!isFight)
         {
            NpcDialog.show(NPC.SEER,["卡修斯，这里似乎是一个密室，我觉得很气氛很不对劲啊！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,[MainManager.actorInfo.formatNick + "，咱们一定要小心，说不准布莱克就在某处设置了陷阱。"],["嗯嗯，可是我有点冒冷汗！呼呼"],[function():void
               {
                  NpcDialog.show(NPC.KAXIUSI_WHITE,["为了救精灵，不管是龙潭还是虎穴，我们照样闯！"],["对！赛尔加卡修斯就是宇宙最强组合，哈哈哈！"],[function():void
                  {
                     NpcDialog.show(NPC.KAXIUSI_WHITE,["继续前进！"],["布莱克，我们来了！"],[function():void
                     {
                        MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
                     }]);
                  }]);
               }]);
            });
         }
         else
         {
            MainManager.actorModel.pos = new Point(580,130);
         }
      }
      
      private static function walkHandler(param1:RobotEvent) : void
      {
         var shouwei:MovieClip = null;
         var seer:MovieClip = null;
         var evt:RobotEvent = param1;
         if(taskStep == 1)
         {
            shouwei = _map.conLevel["shouweiMC"];
            if(shouwei.visible && shouwei.currentFrame == 1 && Point.distance(MainManager.actorModel.pos,new Point(shouwei.x,shouwei.y)) < 200)
            {
               MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
               AnimateManager.playMcAnimate(shouwei,2,"mc2",function():void
               {
                  NpcDialog.show(NPC.SEER,["那只精灵被布莱克交给这里的守卫了！"],["我们必须把它给救出来！（点击守卫对战）"],[function():void
                  {
                     shouwei.buttonMode = true;
                     shouwei.addEventListener(MouseEvent.CLICK,petClickHandler);
                  }]);
               });
            }
         }
         else if(taskStep == 2)
         {
            seer = _map.conLevel["seerMC"];
            if(Point.distance(MainManager.actorModel.pos,new Point(337,445)) < 60)
            {
               MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
               MainManager.selfVisible = false;
               AnimateManager.playMcAnimate(seer,1,"mc1",function():void
               {
                  MainManager.selfVisible = true;
                  TasksManager.complete(TaskController_695.TASK_ID,2,function():void
                  {
                     DebugTrace.show("第三步完成");
                     taskStep = 3;
                     gotoStep4();
                  });
               });
            }
         }
      }
      
      private static function petClickHandler(param1:MouseEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightManager.fightWithBoss("邪灵战士",0);
         isFight = true;
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         info = evt.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            _map.conLevel["shouweiMC"].gotoAndStop(3);
            NpcDialog.show(NPC.XIELING_ZHANSHI,["老大威斯克一定会成功吸收星际碎片的暗黑能量！你们阻止不了，哈哈哈！"],["痴心妄想！"],[function():void
            {
               NpcDialog.show(NPC.TUOTE,["幸亏你们及时赶到啊，要不然我可惨了！"],["你知道布莱克去哪里了吗？"],[function():void
               {
                  NpcDialog.show(NPC.TUOTE,["它把我扔给守卫后就直径朝密室深处去了，好像邪灵组织的老大正在做什么祭祀，为的就是吸收星际碎片的暗黑能量呢！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.KAXIUSI_WHITE,["十万火急啊，" + MainManager.actorInfo.formatNick + "，胜败在此一举了！"],["嗯！决战的时候到了！"],[function():void
                     {
                        TasksManager.complete(TaskController_695.TASK_ID,1,function():void
                        {
                           DebugTrace.show("第二步完成");
                           taskStep = 2;
                           gotoStep3();
                        });
                     }]);
                  });
               }]);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.XIELING_ZHANSHI,["哈哈哈哈！两个废物别想跑！我要把你们献给老大！"],["不行！我一定要战胜这个家伙！"],[function():void
            {
               _map.conLevel["shouweiMC"].buttonMode = true;
               _map.conLevel["shouweiMC"].addEventListener(MouseEvent.CLICK,petClickHandler);
            }]);
         }
      }
      
      private static function gotoStep3() : void
      {
         _map.conLevel["shouweiMC"].visible = false;
         DisplayUtil.removeForParent(_map.typeLevel["stone1"]);
         MapManager.currentMap.makeMapArray();
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
      }
      
      private static function gotoStep4() : void
      {
         _map.conLevel["shouweiMC"].visible = false;
         _map.conLevel["seerMC"].visible = false;
         _map.conLevel["machine1MC"].gotoAndStop(2);
         _map.conLevel["machine2MC"].gotoAndStop(2);
         _map.conLevel["machine1MC"].buttonMode = true;
         _map.conLevel["machine2MC"].buttonMode = true;
         _map.conLevel["machine1MC"].addEventListener(MouseEvent.CLICK,machineHandler);
         _map.conLevel["machine2MC"].addEventListener(MouseEvent.CLICK,machineHandler);
         _map.conLevel["machine1MC"]["bloodMC"].visible = true;
         _map.conLevel["machine2MC"]["bloodMC"].visible = true;
         _map.conLevel["machine1MC"]["bloodMC"]["per"].gotoAndStop(1);
         _map.conLevel["machine2MC"]["bloodMC"]["per"].gotoAndStop(1);
         _map.conLevel["machineA"].mouseEnabled = _map.conLevel["machineA"].mouseChildren = false;
         _map.conLevel["machineB"].mouseEnabled = _map.conLevel["machineA"].mouseChildren = false;
         DisplayUtil.removeForParent(_map.typeLevel["stone1"]);
         MapManager.currentMap.makeMapArray();
         AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEnd);
      }
      
      private static function machineHandler(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.SEER,["得用头部射击才能摧毁机械装置！"],["（用头部射击摧毁两台机械装置）"]);
      }
      
      private static function onAimatEnd(param1:AimatEvent) : void
      {
         var mc:MovieClip = null;
         var evt:AimatEvent = param1;
         if(_map.conLevel["machineA"].hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            mc = _map.conLevel["machine1MC"];
         }
         else if(_map.conLevel["machineB"].hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            mc = _map.conLevel["machine2MC"];
         }
         if(Boolean(mc) && mc.currentFrame < 5)
         {
            AnimateManager.playMcAnimate(mc,mc.currentFrame + 1,"mc" + (mc.currentFrame + 1),function():void
            {
               if(mc.currentFrame == 5)
               {
                  mc["bloodMC"].visible = false;
                  mc.buttonMode = false;
                  mc.mouseEnabled = mc.mouseChildren = false;
                  mc.gotoAndStop(6);
                  if(_map.conLevel["machine1MC"].currentFrame == 6 && _map.conLevel["machine2MC"].currentFrame == 6)
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_695_2"),function():void
                     {
                        _map.conLevel["weisikeMC"].visible = false;
                        TasksManager.complete(TaskController_695.TASK_ID,3,function():void
                        {
                           DebugTrace.show("第四步完成");
                           taskStep = 4;
                           gotoStep5();
                        });
                     });
                  }
               }
            });
         }
      }
      
      private static function gotoStep5() : void
      {
         _map.conLevel["shouweiMC"].visible = false;
         _map.conLevel["seerMC"].visible = false;
         _map.conLevel["machine1MC"].gotoAndStop(6);
         _map.conLevel["machine2MC"].gotoAndStop(6);
         _map.conLevel["weisikeMC"].visible = false;
         _map.conLevel["bulaikeMC"].visible = true;
         _map.conLevel["bulaikeMC"].gotoAndStop(2);
         _map.conLevel["bulaikeMC"].buttonMode = true;
         _map.conLevel["bulaikeMC"].addEventListener(MouseEvent.CLICK,bulaikeHandler);
         DisplayUtil.removeForParent(_map.typeLevel["stone1"]);
         MapManager.currentMap.makeMapArray();
      }
      
      private static function bulaikeHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         if(Point.distance(MainManager.actorModel.pos,new Point(700,380)) > 150)
         {
            MainManager.actorModel.walkAction(new Point(620,400));
            return;
         }
         _map.conLevel["bulaikeMC"].gotoAndStop(1);
         NpcDialog.show(NPC.KAXIUSI_WHITE,["布莱克！这到底是怎么一回事！你到底是谁？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.BULAIKE_NEW,["我所做的一切都是为了今天！没想到还是让威斯克给跑了！"],null,null,false,function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_695_3"),function():void
               {
                  NpcDialog.show(NPC.BULAIKE_NEW,["威斯克逃走了，邪灵组织也只是暂时消退而已！战斗仍将继续……"],["让我们一起对抗黑暗势力！我们就是光明的守护者！"],[function():void
                  {
                     _map.conLevel["bulaikeMC"].visible = false;
                     _map.conLevel["bulaikeMC"].buttonMode = false;
                     _map.conLevel["bulaikeMC"].removeEventListener(MouseEvent.CLICK,bulaikeHandler);
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_695_4"),function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_695_5"),function():void
                        {
                           TasksManager.complete(TaskController_695.TASK_ID,4,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 DebugTrace.show("任务完成");
                                 taskStep = 5;
                                 OgreController.isShow = true;
                                 ToolBarController.showOrHideAllUser(true);
                              }
                           });
                        });
                     });
                  }]);
               });
            });
         });
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 506)
         {
            _map.conLevel["kaxiusiMC"].removeEventListener(MouseEvent.CLICK,kaxiusiClickHandler);
         }
         else if(MapManager.currentMap.id == 357)
         {
            OgreController.isShow = true;
            ToolBarController.showOrHideAllUser(true);
            _map.conLevel["shouweiMC"].removeEventListener(MouseEvent.CLICK,petClickHandler);
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
            AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEnd);
            _map.conLevel["machine1MC"].removeEventListener(MouseEvent.CLICK,machineHandler);
            _map.conLevel["machine2MC"].removeEventListener(MouseEvent.CLICK,machineHandler);
            _map.conLevel["bulaikeMC"].removeEventListener(MouseEvent.CLICK,bulaikeHandler);
         }
         _map = null;
      }
   }
}
