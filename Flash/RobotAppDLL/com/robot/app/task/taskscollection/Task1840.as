package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   
   public class Task1840
   {
      
      private static const _region:int = 0;
      
      public static const TASK_ID:uint = 1840;
      
      public static var _map:BaseMapProcess;
      
      private static var taskMC:MovieClip;
       
      
      public function Task1840()
      {
         super();
      }
      
      public static function initTaskForMap348(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_951_task1840"),function(param1:MovieClip):void
         {
            var state:int;
            var mc:MovieClip = param1;
            SocketConnection.send(1022,86063738);
            taskMC = mc;
            _map.conLevel.addChild(mc);
            state = int(TasksManager.getTaskStatus(TASK_ID));
            if(state == TasksManager.UN_ACCEPT)
            {
               TasksManager.accept(TASK_ID,function():void
               {
                  taskStep_0();
               });
            }
            else if(state == TasksManager.ALR_ACCEPT)
            {
               TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
               {
                  if(!param1[0])
                  {
                     taskStep_0();
                  }
                  else if(!param1[1])
                  {
                     taskStep_1();
                  }
                  else if(!param1[2])
                  {
                     taskStep_2();
                  }
                  else
                  {
                     taskStep_3();
                  }
               });
            }
            else if(state == TasksManager.COMPLETE)
            {
               _map.conLevel.removeChild(mc);
            }
         });
      }
      
      private static function taskStep_0() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         SocketConnection.send(1022,86064618);
         AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
         {
            NpcDialog.show(NPC.FEIGE,["哇！总算是跑出来了，整天呆在机械室里都快闷死啦！哇~这里好漂亮啊！"],["小家伙离开这里！"],[function():void
            {
               NpcDialog.show(NPC.FEIGE,["是谁？是谁在说话？你给我出来！我可是凤凰之子！"],["哇！好厉害的身份呢！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                  {
                     TasksManager.complete(TASK_ID,0,function():void
                     {
                        taskStep_1();
                     });
                  });
               }]);
            }]);
         });
      }
      
      private static function taskStep_1() : void
      {
         KTool.hideMapPlayerAndMonster();
         NpcDialog.show(NPC.SAIXIAOXI,["菲格！原来你在这里啊！快跟我回去，这里太危险了！"],["赛小息，这个精灵好神奇！"],[function():void
         {
            NpcDialog.show(NPC.KALULU,["有什么神奇的？不过长得还是很可爱的。哈哈，跟我们走吧！"],["哼！"],[function():void
            {
               NpcDialog.show(NPC.ZENISEN,["见到星云边际的使者竟然还敢口出狂言。看我不教训你！"],["哇！好厉害呢！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                  {
                     NpcDialog.show(NPC.ZENISEN,["知道我的厉害了吧！识相的话就赶紧离开这里。第六星系从来不欢迎外人的！"],["什么，第六星系？"],[function():void
                     {
                        NpcDialog.show(NPC.HUANGJINTIANMA,["你的幻化神技……你可认识创世之神？"],["我凭什么告诉你？"],[function():void
                        {
                           NpcDialog.show(NPC.FEIGE,["我才不管什么第几星系，我不允许任何人欺负我的好朋友。我要让你长点教训。"],["呵！样子不大，口气不小！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                              {
                                 TasksManager.complete(TASK_ID,1,function():void
                                 {
                                    taskStep_2();
                                 });
                              });
                           }]);
                        }]);
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      private static function taskStep_2() : void
      {
         KTool.hideMapPlayerAndMonster();
         NpcDialog.show(NPC.ATIEDA,["天啊！他……他竟然变成了凤凰之子菲格罗亚！"],["如此强大的技能的确来自第六星系！"],[function():void
         {
            NpcDialog.show(NPC.HUANGJINTIANMA,["幻化之术是创世之神的特殊技能，没想到这个精灵竟然运用的轻车熟路！非同一般啊！"],["那我们该怎么办啊？"],[function():void
            {
               NpcDialog.show(NPC.FEIGELUOYA,["没什么怎么办。让我解决他吧！竟然敢变成我的样子。"],["凤凰之子，小心啊！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                  {
                     NpcDialog.show(NPC.KAYASI,["我们要想清楚创世之神到底去哪里了？我们不能变成四天王的打手！"],["胡说八道些什么！"],[function():void
                     {
                        NpcDialog.show(NPC.ZENISEN,["这个碍眼的家伙，不解决他就会有越来越多的精灵发现第六星系，我不能留着这个祸患！"],["小心！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["不是吧！四个凤凰之子？谁才是呢？"],["赛尔们小心！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.HUANGJINTIANMA,["这种幻化之术强大之处在于如果我们找错了，他不仅可以全力使出自己的能力，同时还拥有幻化精灵的能力。小心啦！"],["我们只能试一试了！"],[function():void
                                    {
                                       TasksManager.complete(TASK_ID,2,function():void
                                       {
                                          taskStep_3();
                                          SocketConnection.send(1022,86064619);
                                       });
                                    }]);
                                 });
                              }]);
                           });
                        }]);
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      private static function taskStep_3() : void
      {
         KTool.showMapAllPlayerAndMonster();
         taskMC.gotoAndStop(10);
         taskMC.addEventListener(MouseEvent.CLICK,onClick);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var name:String = event.target.name as String;
         if(name.split("_")[1] as String == "pet")
         {
            SocketConnection.send(1022,86064620);
            if(Math.random() > 0.1)
            {
               AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
               {
                  fightWithBoss(1);
               });
            }
            else
            {
               AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
               {
                  fightWithBoss();
               });
            }
         }
      }
      
      private static function fightWithBoss(param1:int = 0) : void
      {
         EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onNoHandler);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
         FightManager.fightWithBoss("泽尼森",_region + param1);
      }
      
      private static function onNoHandler(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onNoHandler);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
      }
      
      private static function onFightOverHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var event:PetFightEvent = param1;
         taskMC.gotoAndStop(10);
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onNoHandler);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
         info = event.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.ZENISEN,["哼！你只是侥幸赢我的！我不陪你玩啦！你们快离开这里！卡亚斯，快跟我回去。"],["哎，第六星系……"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
               {
                  taskMC.gotoAndStop(10);
               });
            }]);
         }
         else if(info.winnerID == 0)
         {
            NpcDialog.show(NPC.ZENISEN,["哼！知道我的厉害了吧！告诉你，千万不要惹第六星系的精灵！我们生气的时候很可怕的！哈哈哈！"],["可恶！我们再来，我不会放弃的！"],[function():void
            {
            }]);
         }
      }
      
      public static function destroy() : void
      {
         if(taskMC)
         {
            taskMC.removeEventListener(MouseEvent.CLICK,onClick);
         }
         if(Boolean(taskMC) && Boolean(_map.conLevel.contains(taskMC)))
         {
            _map.conLevel.removeChild(taskMC);
         }
         _map = null;
      }
   }
}
