package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1281;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1281
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1281()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["task1281mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1281.TASK_ID);
      }
      
      public static function initForMap796(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1281.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  taskMC.addEventListener(MouseEvent.CLICK,startStep);
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  step1();
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
      
      public static function initForMap4(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1281.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  step1();
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
      
      public static function initForMap795(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1281.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[1]) && !param1[2])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  taskMC.addEventListener(MouseEvent.CLICK,step2);
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  endStep();
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
      
      private static function startStep(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1281_1"),function():void
         {
            AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
            {
               NpcDialog.show(NPC.LEIYI,["盖亚！我们战斗了十天十夜还是平手！不如先到这里，日后再说！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.GAIYA,["不行，今天说什么也要分出高下！你可不要故意让着我！否则你就是看不起我！"],["……"],[function():void
                  {
                     NpcDialog.show(NPC.LEIYI,["好！那你接我一招100%力量的雷神天明闪！"],["来吧！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1281_2"),function():void
                        {
                           NpcDialog.show(NPC.LEIYI,["它的能力好强好奇怪，竟然可以吸收我们的攻击！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.GAIYA,["不过它也伤的不轻！"],["嗯！"],[function():void
                              {
                                 NpcDialog.show(NPC.LEIYI,["正面挡下我和你合力一击，谁能不受伤！"],["让我问问它是谁！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                                    {
                                       NpcDialog.show(NPC.GAIYA,["哈！这家伙真有意思！我要去追它！"],["追它干嘛？"],[function():void
                                       {
                                          NpcDialog.show(NPC.LEIYI,["盖亚，你要干嘛？"],null,null,false,function():void
                                          {
                                             NpcDialog.show(NPC.GAIYA,["这家伙很有实力！我要和它打一架！"],["等等！"],[function():void
                                             {
                                                NpcDialog.show(NPC.LEIYI,["那咱俩的决战怎么说？"],null,null,false,function():void
                                                {
                                                   NpcDialog.show(NPC.GAIYA,["我和你一时难分高下，而且随时可以再比。这家伙不知要去哪里，错过了就没机会啦！你不想知道它的来历吗？"],["好！我们追上它问问！"],[function():void
                                                   {
                                                      AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
                                                      {
                                                         TasksManager.complete(TaskController_1281.TASK_ID,0,function(param1:Boolean):void
                                                         {
                                                            if(param1)
                                                            {
                                                               MapManager.changeMap(4);
                                                            }
                                                         });
                                                      });
                                                   }]);
                                                });
                                             }]);
                                          });
                                       }]);
                                    });
                                 }]);
                              }]);
                           });
                        });
                     }]);
                  }]);
               });
            });
         },false);
      }
      
      private static function step1() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 20
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function step2(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 26
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function endStep() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 19
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(taskMC)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,startStep);
               taskMC.removeEventListener(MouseEvent.CLICK,step2);
               MainManager.selfVisible = true;
               DisplayUtil.removeForParent(taskMC);
               ToolTipManager.remove(taskMC);
            }
            _map = null;
         }
      }
   }
}
