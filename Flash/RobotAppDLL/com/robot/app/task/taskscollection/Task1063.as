package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1063
   {
      
      public static const TASK_ID:uint = 1063;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1063()
      {
         super();
      }
      
      public static function initTaskForMap698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(289);
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(289);
               }
            });
         }
      }
      
      public static function initTaskForMap730(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskMC.gotoAndStop(1);
                  taskMC.buttonMode = true;
                  addYellowExcal(_map.topLevel,555,275);
                  taskMC.addEventListener(MouseEvent.CLICK,initStep1);
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep3();
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
      
      private static function initStep1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.buttonMode = false;
         taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
         KTool.hideMapAllPlayerAndMonster();
         removeYellowExcal(_map.topLevel);
         NpcDialog.show(NPC.SAIXIAOXI,["哈，布莱克，快告诉我们尤米娜的弱点吧！"],["等一下。"],[function():void
         {
            NpcDialog.show(NPC.BULAIKE_NEW,["其实我不知道尤米娜的弱点，但是有个人一定知道！"],["他是谁？"],[function():void
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["我不能说。"],["哇，这么神秘？"],[function():void
               {
                  NpcDialog.show(NPC.BULAIKE_NEW,["你们在这里等！我先去问它，然后回来告诉你们！"],["啊？"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["什么人这么厉害，连邪恶四灵的弱点都知道！让我们跟去看看吧？"],["绝对不行！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
                        {
                           TasksManager.complete(TASK_ID,1,function(param1:Boolean = true):void
                           {
                              if(param1)
                              {
                                 initStep2();
                              }
                              else
                              {
                                 destroy();
                              }
                           });
                        });
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function initStep2() : void
      {
         taskMC.gotoAndStop(2);
         NpcDialog.show(NPC.SAIXIAOXI,["哇呀呀，布莱克搞什么，这么神秘，好想跟去看一看！"],["赛小息，你别急！"],[function():void
         {
            NpcDialog.show(NPC.KALULU,["也许布莱克有他的苦衷啊，我们等一会吧！"],["万一是阴谋呢？"],[function():void
            {
               NpcDialog.show(NPC.ATIEDA,["说不定又是尤米娜的阴谋，我们还是去看看吧！"],["也好。"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                  {
                     NpcDialog.show(NPC.BULAIKE_NEW,["大师傅，我是布莱克！"],null,null,false,function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                        {
                           NpcDialog.show(NPC.MUMU_HEIYING,["布莱克，你是来问邪恶四灵尤米娜的事吧？"],["是的！"],[function():void
                           {
                              NpcDialog.show(NPC.BULAIKE_NEW,["邪恶四灵太难对付了，不得已才来请您帮忙。"],["恩，我的确知道尤米娜的弱点！"],[function():void
                              {
                                 NpcDialog.show(NPC.BULAIKE_NEW,["请大师傅指点！"],["等一下。"],[function():void
                                 {
                                    NpcDialog.show(NPC.MUMU_HEIYING,["我们先出去和几位小朋友见一面吧，不然他们要冲进来了。"],["糟糕，被发现了！"],[function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["⊙﹏⊙b，大师傅，其实我们什么也没有偷听到！"],["……"],[function():void
                                       {
                                          NpcDialog.show(NPC.MUMU_HEIYING,["你就是大名鼎鼎的赛小息吧？久仰久仰，我想见你很久啦！"],["哇！"],[function():void
                                          {
                                             AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1063_2"),function():void
                                             {
                                                TasksManager.complete(TASK_ID,2,function(param1:Boolean = true):void
                                                {
                                                   if(param1)
                                                   {
                                                      initStep3();
                                                   }
                                                   else
                                                   {
                                                      destroy();
                                                   }
                                                });
                                             });
                                          }]);
                                       }]);
                                    }]);
                                 }]);
                              }]);
                           }]);
                        });
                     });
                  });
               }]);
            }]);
         }]);
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(4);
         AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
         {
            NpcDialog.show(NPC.SEER,["呃，你就是大师傅？"],["是的。"],[function():void
            {
               NpcDialog.show(NPC.SEER,["难怪布莱克神神秘秘的，他一定不好意思让我们看到他对个小孩子恭恭敬敬的！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.BULAIKE_NEW,["……"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["大师傅，你真的知道尤米娜的弱点吗？"],["不仅如此"],[function():void
                     {
                        NpcDialog.show(NPC.MUMU,["我不仅知道尤米娜的弱点，我还知道，一件非常了不得的大事就要发生了！整个第五系，整个宇宙的命运，全系于此！"],null,null,false,function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1063_3"),function():void
                           {
                              TasksManager.complete(TASK_ID,3,function(param1:Boolean = true):void
                              {
                                 destroy();
                                 MapManager.refMap();
                              });
                           },false);
                        });
                     }]);
                  });
               });
            }]);
         });
      }
      
      private static function addYellowExcal(param1:DisplayObjectContainer, param2:Number = 0, param3:Number = 0, param4:Number = 1) : void
      {
         CommonUI.addYellowExcal(param1,param2,param3,param4);
      }
      
      private static function removeYellowExcal(param1:DisplayObjectContainer) : void
      {
         CommonUI.removeYellowExcal(param1);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 730)
         {
            return _map.conLevel["task1063MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         KTool.showMapAllPlayerAndMonster();
         if(taskMC)
         {
            if(MapManager.currentMap.id == 730)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
            }
            DisplayUtil.removeForParent(taskMC);
         }
         _map = null;
      }
   }
}
