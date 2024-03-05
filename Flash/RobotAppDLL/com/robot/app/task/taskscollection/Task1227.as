package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1227;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1227
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:uint;
      
      private static var _isFighting:Boolean = false;
       
      
      public function Task1227()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         var _loc1_:uint = uint(MapManager.currentMap.id);
         if(_loc1_ == 105)
         {
            return _map.btnLevel["task1227mc"];
         }
         return _map.conLevel["task1227mc"];
      }
      
      public static function initForMap698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _taskState = TasksManager.getTaskStatus(TaskController_1227.TASK_ID);
         if(_taskState == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(113);
         }
         else if(_taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1227.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(113);
               }
            });
         }
      }
      
      public static function initForMap105(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         CommonUI.addYellowExcal(_map.topLevel,583,364);
         taskMC.buttonMode = true;
         MainManager.selfVisible = false;
         _taskState = TasksManager.getTaskStatus(TaskController_1227.TASK_ID);
         if(_taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1227.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskMC.addEventListener(MouseEvent.CLICK,pro0);
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  pro1();
               }
               else
               {
                  destroy();
               }
            });
         }
         else
         {
            destroy();
         }
      }
      
      public static function initForMap407(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         MainManager.selfVisible = false;
         _taskState = TasksManager.getTaskStatus(TaskController_1227.TASK_ID);
         if(_taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1227.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[1]) && !param1[2])
               {
                  taskMC.addEventListener(MouseEvent.CLICK,pro2);
               }
               else
               {
                  destroy();
               }
            });
         }
         else
         {
            destroy();
         }
      }
      
      public static function pro0(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,pro0);
         CommonUI.removeYellowExcal(_map.topLevel);
         AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["连一丝鬼影都没有嘛！"],["恩，看起来得找个人问问！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
               {
                  NpcDialog.show(NPC.DIDA_PET,["不要乱叫啊！真把鬼引来就坏啦！"],["真的有鬼吗？"],[function():void
                  {
                     NpcDialog.show(NPC.DIDA_PET,["是呀是呀！它会很阴森的笑！还会抓走小朋友！"],["怎么可能！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["哼！光天化日之下，朗朗乾坤之中！装神弄鬼！我一定要查个究竟！"],["小息，我们藏起来！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["好！今天咱们就来个守株待兔——啊不对，是守株待鬼！"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["呼呼！好刺激，和捉迷藏一样！等到鬼来了，我们来个出其不意，把它抓起来给迪达们出气！"],["恩恩！"],[function():void
                                 {
                                    NpcDialog.show(NPC.KALULU,["嘘，那边似乎有动静啦！"],null,null,false,function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                       {
                                          TasksManager.complete(TaskController_1227.TASK_ID,0,function(param1:Boolean):void
                                          {
                                             if(param1)
                                             {
                                                pro1();
                                             }
                                          });
                                       });
                                    });
                                 }]);
                              });
                           });
                        }]);
                     }]);
                  }]);
               });
            }]);
         });
      }
      
      public static function pro1() : void
      {
         taskMC.gotoAndStop(5);
         NpcDialog.show(NPC.SAIXIAOXI,["巴特！居然是你！你又撒谎！"],["哈哈，是小息和赛尔啊！"],[function():void
         {
            NpcDialog.show(NPC.BATE,["不要那么严肃嘛，只是开个玩笑而已嘛！嘻嘻嘻！"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
               {
                  NpcDialog.show(NPC.SEER,["⊙﹏⊙b汗，又给巴特骗了……"],["巴特太不像话了"],[function():void
                  {
                     NpcDialog.show(NPC.KALULU,["怎么可以装神弄鬼的吓唬别人呢！不过总觉的有什么不对！迪达不是说还有鬼会抓人么？"],["啊！鬼！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                        {
                           NpcDialog.show(NPC.SEER,["巴特……你又撒谎！"],["不理他！"],[function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["巴特你太可恶了，我们才不会相信你了！"],["我是说真的啊！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.SAIXIAOXI,["这次……竟然是真的……"],["这真是自找苦吃！"],[function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["总是撒谎的人，就是说真话都没人相信它呢！"],["回头再教育它，先去把它救回来吧！"],[function():void
                                       {
                                          TasksManager.complete(TaskController_1227.TASK_ID,1,function(param1:Boolean):void
                                          {
                                             if(param1)
                                             {
                                                MapManager.changeMap(407);
                                             }
                                          });
                                       }]);
                                    }]);
                                 });
                              }]);
                           }]);
                        });
                     }]);
                  }]);
               });
            });
         }]);
      }
      
      public static function pro2(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,pro2);
         NpcDialog.show(NPC.SAIXIAOXI,["佐格、艾利逊！原来是你们两个家伙装神弄鬼！"],["哼！"],[function():void
         {
            NpcDialog.show(NPC.ZOG,["别以为我们不知道，雷伊要领悟极光之羽的力量！现在正在寻找七色极光之羽！"],["消息蛮灵通嘛！"],[function():void
            {
               NpcDialog.show(NPC.ALLISON,["我们才不会让你们这么轻松就如愿以偿呢！要是让雷伊领悟了最强的力量，我们怎么混呀！"],["你们想怎么样！"],[function():void
               {
                  NpcDialog.show(NPC.ZOG,["我们已经得到了两根羽毛！哼哼，只要我们毁掉它，雷伊就永远别想完全掌握雷光之翼的奥秘！"],["休想！把羽毛留下！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1227_1"),function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["巴特！真有你的！有勇有谋，你保护了极光之羽！只是可惜你失去了两片翅膀！"],["哈哈不要紧！"],[function():void
                        {
                           NpcDialog.show(NPC.BATE,["没事！还会长出来的！这也算个小教训吧，我以后可不敢乱说谎了！不然说真话都没人信啦！你们快吧羽毛送给雷伊吧！"],["哈哈，好的！"],[function():void
                           {
                              MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
                              {
                                 var e:MapEvent = param1;
                                 MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                                 NpcDialog.show(NPC.SEER,["雷伊雷伊！我找到了橙色极光之羽和红色极光之羽！"],["干的好！"],[function():void
                                 {
                                    NpcDialog.show(NPC.LEIYI,["谢谢你赛尔！快点点击雷光之羽存放装置激活翅膀领取你的奖励吧！其他的羽毛也还麻烦你继续留意哦！"],["恩恩，放心吧雷伊！"],[function():void
                                    {
                                       TasksManager.complete(TaskController_1227.TASK_ID,2,function(param1:Boolean):void
                                       {
                                          if(param1)
                                          {
                                             CommonUI.addYellowArrow(MapManager.currentMap.topLevel,669,139,30);
                                          }
                                       });
                                    }]);
                                 }]);
                              });
                              MapManager.changeMap(767);
                           }]);
                        }]);
                     });
                  }]);
               }]);
            }]);
         }]);
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(MapManager.currentMap.id != 698)
            {
               CommonUI.removeYellowExcal(_map.topLevel);
               CommonUI.removeYellowArrow(_map.topLevel);
               taskMC.removeEventListener(MouseEvent.CLICK,pro2);
               taskMC.removeEventListener(MouseEvent.CLICK,pro0);
               DisplayUtil.removeForParent(taskMC);
               MainManager.selfVisible = true;
            }
            _map = null;
         }
      }
   }
}
