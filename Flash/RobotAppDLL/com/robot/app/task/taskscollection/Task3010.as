package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   
   public class Task3010
   {
      
      private static const _region:int = 0;
      
      public static const TASK_ID:uint = 3010;
      
      public static var _map:BaseMapProcess;
      
      private static var taskMC:MovieClip;
       
      
      public function Task3010()
      {
         super();
      }
      
      public static function initTaskForMap348(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_348_task3010"),function(param1:MovieClip):void
         {
            var state:int;
            var mc:MovieClip = param1;
            taskMC = mc;
            _map.conLevel.addChild(mc);
            MapManager.currentMap.controlLevel["hamo"].visible = false;
            MapManager.currentMap.controlLevel["taxiya"].visible = false;
            MapManager.currentMap.controlLevel["saiweier"].visible = false;
            MapManager.currentMap.controlLevel["takelin"].visible = false;
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
                  else if(!param1[3])
                  {
                     taskStep_3();
                  }
                  else
                  {
                     _map.conLevel.removeChild(mc);
                  }
               });
            }
            else if(state == TasksManager.COMPLETE)
            {
               _map.conLevel.removeChild(mc);
               MapManager.currentMap.controlLevel["hamo"].visible = true;
               MapManager.currentMap.controlLevel["taxiya"].visible = true;
               MapManager.currentMap.controlLevel["saiweier"].visible = true;
               MapManager.currentMap.controlLevel["takelin"].visible = true;
            }
         });
      }
      
      private static function taskStep_0() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
         {
            MapListenerManager.add(taskMC,function():void
            {
               StatManager.sendStat2014("向龙族宣战","参与前置任务",StatManager.RUN_ACT);
               MapListenerManager.remove(taskMC,false);
               taskStep_1();
            });
         });
      }
      
      private static function taskStep_1() : void
      {
         KTool.hideMapPlayerAndMonster();
         NpcDialog.show(NPC.HAMO_LEITE,["最近魔界的力量正在日渐壮大，想必你们一定知道魔界三皇的事情吧！"],["是的，王子殿下！"],[function():void
         {
            NpcDialog.show(NPC.SAIWEIER,["据说圣迈尔斯、战神盖亚和奥斯卡正在和他们对抗，相信最后魔界的势力一定会被击败的！"],["我们千万不能大意！"],[function():void
            {
               NpcDialog.show(NPC.HAMO_LEITE,["龙族是精灵中最为尊贵的象征，相信魔界早晚会来到这里的！"],["它们敢！！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                  {
                     NpcDialog.show(NPC.TAKELIN,["塔西亚，你什么意思？我们龙族是精灵界中最至高无上的，谁都没有资格取代我们，更没有谁可以动摇我们的地位！"],["好了，塔克林冷静点！"],[function():void
                     {
                        NpcDialog.show(NPC.HAMO_LEITE,["但是我有一种奇怪的预感，好像有事情要发生，难道龙族会有劫难？！"],["什么…劫难！"],[function():void
                        {
                           NpcDialog.show(NPC.TAKELIN,["放心吧！王子殿下，由我们龙族三巨头在，谁都不能伤害你，我们一定会守卫龙王圣殿的！"],["哈哈哈…终于找到你们了！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                              {
                                 NpcDialog.show(NPC.HAMO_LEITE,["什么…魔界之门居然出现在这里！你是谁？为什么来到这里！"],["哼哼…我和龙族有着千丝万缕的关系！"],[function():void
                                 {
                                    NpcDialog.show(NPC.TAKELIN,["这可是龙王圣殿，看到龙王子还不下跪！"],["菜鸟，别以为大声说话就认为自己很强！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.SAIWEIER,["塔克林，你没事吧！可恶的家伙，居然敢挑衅龙族！"],["哼哼…这是你们应得的！"],[function():void
                                          {
                                             TasksManager.complete(TASK_ID,0,function():void
                                             {
                                                taskStep_2();
                                             });
                                          }]);
                                       });
                                    }]);
                                 }]);
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
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 15
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function taskStep_3() : void
      {
         KTool.hideMapPlayerAndMonster();
         NpcDialog.show(NPC.SHENGHUANG,["老龙王，你居然还活着！这个世界太不公平了，为什么像你这样的都没有得到应有的报应！"],["当年我是被利用的！请你原谅！"],[function():void
         {
            NpcDialog.show(NPC.SHENGHUANG,["不可能…不可能！你当时的眼神我至今还记得，想把我置于死地的就是你，摩多！"],["我是不会放过你们的！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
               {
                  NpcDialog.show(NPC.HAMO_LEITE,["老龙王，这几年你都去哪里了？我们好想你啊！"],["这个说来话长！"],[function():void
                  {
                     NpcDialog.show(NPC.HAMO_LEITE,["其实我一直在暗中保护你们，看你不断的成长…并且带领着龙族精灵一直守卫着龙王圣殿，我觉得我没有必要出现打乱你们的生活！"],["不…我们需要你摩多！"],[function():void
                     {
                        NpcDialog.show(NPC.HAMO_LEITE,["也许吧！如今龙族和魔界的战役再次开启，相信这就是天意，当年的战役还没结束，这次就让我们和魔界来一次了结吧！"],["你们跟我来，我会让你们领悟真正的龙族力量！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                           {
                              NpcDialog.show(NPC.HAMO_LEITE,["龙族三巨头，龙王圣殿就交给你们了，我一定会领悟龙族真实的实力，等我回来吧！！"],["龙王子，我们等着你回来！"],[function():void
                              {
                                 KTool.changeMapWithCallBack(674,function():void
                                 {
                                    TasksManager.complete(TASK_ID,2);
                                    StatManager.sendStat2014("向龙族宣战","完成前置任务",StatManager.RUN_ACT);
                                 });
                              }]);
                           });
                        }]);
                     }]);
                  }]);
               });
            }]);
         }]);
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
               });
            }
            else
            {
               AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
               {
               });
            }
         }
      }
      
      private static function onNoHandler(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onNoHandler);
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
