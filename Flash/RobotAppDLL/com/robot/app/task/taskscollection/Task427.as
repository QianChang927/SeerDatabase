package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_427;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task427
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
       
      
      public function Task427()
      {
         super();
      }
      
      public static function initTaskForMap353(param1:BaseMapProcess) : void
      {
         var task427MC:MovieClip = null;
         var map:BaseMapProcess = param1;
         _map = map;
         task427MC = _map.conLevel["task427MC"];
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_427.TASK_ID));
         if(nRet == TasksManager.UN_ACCEPT)
         {
            taskStep = -1;
         }
         else if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_427.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskStep = 0;
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  taskStep = 1;
                  task427MC.gotoAndStop(6);
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  taskStep = 2;
                  task427MC.gotoAndStop(6);
               }
            });
         }
         else if(nRet == TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(task427MC);
            return;
         }
         task427MC.visible = true;
         task427MC.buttonMode = true;
         task427MC.addEventListener(MouseEvent.CLICK,task427MCHandler);
      }
      
      private static function task427MCHandler(param1:MouseEvent) : void
      {
         var task427MC:MovieClip = null;
         var petinfo:PetInfo = null;
         var ids:Array = null;
         var evt:MouseEvent = param1;
         task427MC = _map.conLevel["task427MC"];
         if(taskStep == -1)
         {
            TasksManager.accept(TaskController_427.TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  DebugTrace.show("任务接取成功");
                  taskStep = 0;
                  AnimateManager.playMcAnimate(task427MC,1,"mc1");
               }
            });
            return;
         }
         if(taskStep == 0 && task427MC.currentFrame < 4)
         {
            MainManager.actorModel.moveAndAction(new Point(490,472),function():void
            {
               var nFrame:uint = 0;
               nFrame = uint(task427MC.currentFrame + 1);
               AnimateManager.playMcAnimate(task427MC,nFrame,"mc" + nFrame,function():void
               {
                  if(nFrame == 4)
                  {
                     NpcDialog.show(NPC.DUDU_KALA,["大笨蛋，我现在可是健步如飞！你的实力out啦，哈哈。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SEER,["哼，那就看看到底是我的子弹快，还是你这个肥球厉害！"],["（用头部射击击落嘟嘟卡拉）"],[function():void
                        {
                           AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEnd);
                        }]);
                     });
                  }
               });
            });
         }
         else if(taskStep == 0 && task427MC.currentFrame == 4)
         {
            NpcDialog.show(NPC.SEER,["哼，那就看看到底是我的子弹快，还是你这个肥球厉害！"],["（用头部射击击落嘟嘟卡拉）"]);
         }
         else if(taskStep == 1 && task427MC.currentFrame == 6)
         {
            NpcDialog.show(NPC.DUDU_KALA,["啦呀啦！啦啦啦啦啦啦啦！"],["又来捣乱了！讨厌！嘟拉，你怎么变样了。"],[function():void
            {
               NpcDialog.show(NPC.DUDU_KALA,["嘿嘿，为了能再次到果然星胡吃海塞，我可是付出千辛万苦……"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_427_1"),function():void
                  {
                     NpcDialog.show(NPC.DUDU_KALA,["果然精灵们，想保卫家园，就得用自己的实力来证明！只要你们打败我，我保证再也不踏入果然星半步！"],["哼，那你就尝尝果然精灵的厉害吧！"],[function():void
                     {
                        TasksManager.complete(TaskController_427.TASK_ID,1,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              DebugTrace.show("第二步完成");
                              taskStep = 2;
                           }
                        });
                     }]);
                  });
               });
            }]);
         }
         else if(taskStep == 2 && task427MC.currentFrame == 6)
         {
            petinfo = PetManager.getPetInfo(PetManager.defaultTime);
            if(petinfo)
            {
               ids = [677,678,679,684,685,682,683,680,681,686,687,946,947];
               if(ids.indexOf(petinfo.id) >= 0)
               {
                  EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                  FightManager.fightWithBoss("嘟嘟卡拉",1);
                  return;
               }
            }
            NpcDialog.show(NPC.DUDU_KALA,["我说了，必须是果然精灵才接受挑战！他们想保卫家园，就得用自己的实力来证明！"],["（打开精灵背包，把果然多系列精灵作为首选）"]);
         }
      }
      
      private static function onAimatEnd(param1:AimatEvent) : void
      {
         var task427MC:MovieClip = null;
         var evt:AimatEvent = param1;
         task427MC = _map.conLevel["task427MC"];
         if(task427MC.hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            AnimateManager.playMcAnimate(task427MC,5,"mc5",function():void
            {
               task427MC.gotoAndStop(6);
               TasksManager.complete(TaskController_427.TASK_ID,0,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     DebugTrace.show("第一步完成");
                     taskStep = 1;
                     AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEnd);
                  }
               });
            });
         }
      }
      
      private static function onFightError(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var fightData:FightOverInfo;
         var evt:PetFightEvent = param1;
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         fightData = evt.dataObj as FightOverInfo;
         if(fightData.winnerID == MainManager.actorID)
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_427_2"),function():void
            {
               TasksManager.complete(TaskController_427.TASK_ID,2,function():void
               {
                  DebugTrace.show("任务完成");
                  taskStep = 3;
                  _map.conLevel["task427MC"].buttonMode = false;
               });
            });
         }
         else
         {
            NpcDialog.show(NPC.DUDU_KALA,["知道我嘟嘟卡拉的厉害了吧！果然精灵不堪一击，哈哈哈！"],["果然精灵，加油！加油！（再次点击嘟嘟卡拉对战）"]);
         }
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 353)
         {
            if(_map.conLevel["task427MC"])
            {
               AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEnd);
               _map.conLevel["task427MC"].removeEventListener(MouseEvent.CLICK,task427MCHandler);
            }
         }
         _map = null;
      }
   }
}
