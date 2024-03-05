package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1320;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1320
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1320()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["task1320mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1320.TASK_ID);
      }
      
      private static function get taskState1330() : uint
      {
         return TasksManager.getTaskStatus(1330);
      }
      
      public static function initForMap102(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1320.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  startStep();
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
      
      public static function initForMap809(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            if(taskState1330 == TasksManager.ALR_ACCEPT)
            {
               TasksManager.getProStatusList(1330,function(param1:Array):void
               {
                  var a:Array = param1;
                  if(Boolean(a[0]) && !a[1])
                  {
                     destroy();
                     return;
                  }
                  TasksManager.getProStatusList(TaskController_1320.TASK_ID,function(param1:Array):void
                  {
                     if(Boolean(param1[0]) && !param1[1])
                     {
                        MainManager.selfVisible = false;
                        ToolBarController.showOrHideAllUser(false);
                        taskMC.buttonMode = true;
                        taskMC.addEventListener(MouseEvent.CLICK,step1);
                     }
                     else if(Boolean(param1[1]) && !param1[2])
                     {
                        MainManager.selfVisible = false;
                        ToolBarController.showOrHideAllUser(false);
                        taskMC.buttonMode = true;
                        step2();
                     }
                     else if(Boolean(param1[2]) && !param1[3])
                     {
                        MainManager.selfVisible = false;
                        ToolBarController.showOrHideAllUser(false);
                        taskMC.buttonMode = true;
                        endStep();
                     }
                     else
                     {
                        destroy();
                     }
                  });
               });
            }
            else
            {
               TasksManager.getProStatusList(TaskController_1320.TASK_ID,function(param1:Array):void
               {
                  if(Boolean(param1[0]) && !param1[1])
                  {
                     MainManager.selfVisible = false;
                     ToolBarController.showOrHideAllUser(false);
                     taskMC.buttonMode = true;
                     taskMC.addEventListener(MouseEvent.CLICK,step1);
                  }
                  else if(Boolean(param1[1]) && !param1[2])
                  {
                     MainManager.selfVisible = false;
                     ToolBarController.showOrHideAllUser(false);
                     taskMC.buttonMode = true;
                     step2();
                  }
                  else if(Boolean(param1[2]) && !param1[3])
                  {
                     MainManager.selfVisible = false;
                     ToolBarController.showOrHideAllUser(false);
                     taskMC.buttonMode = true;
                     endStep();
                  }
                  else
                  {
                     destroy();
                  }
               });
            }
         }
         else
         {
            destroy();
         }
      }
      
      private static function startStep() : void
      {
         NpcDialog.show(NPC.JUSTIN,["唔，赛尔，你来啦！是船长让你来的吧！"],["站长，船长让我来找你报道！"],[function():void
         {
            NpcDialog.show(NPC.JUSTIN,["你来的正好，赛小息说他想到一个打探纳斯琪弱点的方法！"],["哈？队长想到了什么神机妙策？"],[function():void
            {
               NpcDialog.show(NPC.JUSTIN,["纳斯琪再强，不过是恶灵兽的棋子，不要忘记恶灵兽也是有天敌的……"],["哈！我知道了！队长去找麒麟了！"],[function():void
               {
                  NpcDialog.show(NPC.YINGKALUOSHI,["虽然没猜中，但是也差不多了！麒麟可是神龙见首不见尾，想要联系到它，你得通过——"],["木木大祭司！"],[function():void
                  {
                     NpcDialog.show(NPC.YINGKALUOSHI,["不错！赛小息已经出发了，你快点跟上去吧！"],["好的！木木大祭司！我来啦！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1320_2"),function():void
                        {
                           TasksManager.complete(TaskController_1320.TASK_ID,0,function(param1:Boolean):void
                           {
                              SocketConnection.send(1022,84497024);
                              if(param1)
                              {
                                 MapManager.changeMap(809);
                              }
                           });
                        },false);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function step1(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 16
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function step2() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 17
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function endStep() : void
      {
         NpcDialog.show(NPC.YINJIAO,["好大口气，百变将军！遇到我银角大魔王还不是夹着尾巴逃走了！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["你到底是从哪里来的？为什么连恶灵兽的三巨头都怕你？"],["恶灵兽？"],[function():void
            {
               NpcDialog.show(NPC.YINJIAO,["那家伙原来是恶灵兽的手下，原来如此！"],null,null,false,function():void
               {
                  CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_132001"),function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["难怪！你有恶灵兽的力量，纳斯琪当然会害怕你了！你知道吗，恶灵兽已经再次复出了！"],["什么！"],[function():void
                     {
                        NpcDialog.show(NPC.KALULU,["真的！我们这次去神树，就是为了找到对付它的方法！你们还是让我们过去吧！"],["不行！"],[function():void
                        {
                           NpcDialog.show(NPC.JINJIAO,["当初麒麟安排我们守卫神树的时候说过，除非见到六剑齐飞，不然不管是谁都不能放过去！"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,13,"mc13",function():void
                              {
                                 NpcDialog.show(NPC.ZOG,["呼！贾斯汀，做人留一线，日后好相见！我们已经一再退让了，你还不放过我们！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.JUSTIN,["哼！俗话说的好，除恶务尽！佐格！艾利逊！你们还想跑吗？"],["和你拼了！"],[function():void
                                    {
                                       AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1320_3"),function():void
                                       {
                                          NpcDialog.show(NPC.YINJIAO,["是你是你是你！你就是传说中能够使出那招六剑齐飞的人！我们可等到你了！"],["咦？"],[function():void
                                          {
                                             AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1320_4"),function():void
                                             {
                                                TasksManager.complete(TaskController_1320.TASK_ID,3,function(param1:Boolean):void
                                                {
                                                   if(param1)
                                                   {
                                                      SocketConnection.send(1022,84497027);
                                                      destroy();
                                                      MainManager.selfVisible = true;
                                                      ToolBarController.showOrHideAllUser(true);
                                                      SocketConnection.send(1022,84346152);
                                                   }
                                                });
                                             },false);
                                          }]);
                                       });
                                    }]);
                                 });
                              });
                           });
                        }]);
                     }]);
                  });
               });
            }]);
         });
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(MapManager.currentMap.id != 102 && taskMC != null)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,step1);
               taskMC.removeEventListener(MouseEvent.CLICK,step2);
               DisplayUtil.removeForParent(taskMC);
            }
            _map = null;
         }
      }
   }
}
