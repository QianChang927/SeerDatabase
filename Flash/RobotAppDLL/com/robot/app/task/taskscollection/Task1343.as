package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_1343;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1343
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1343()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["task1343mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1343.TASK_ID);
      }
      
      public static function initForMap102(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1343.TASK_ID,function(param1:Array):void
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
      
      public static function initForMap45(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1343.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  OgreController.isShow = false;
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  _map.topLevel.visible = false;
                  step1();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  OgreController.isShow = false;
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  taskMC.buttonMode = true;
                  _map.topLevel.visible = false;
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
      
      public static function initForMap810(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1343.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[1]) && !param1[2])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  taskMC.buttonMode = true;
                  _map.topLevel.visible = false;
                  taskMC.addEventListener(MouseEvent.CLICK,step2);
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
      
      private static function startStep() : void
      {
         NpcDialog.show(NPC.JUSTIN,["这下子可不妙了，想不到恶灵兽居然那么胆大妄为，为了解开麒麟族三重封印而不择手段！"],["是呀！"],[function():void
         {
            NpcDialog.show(NPC.YINGKALUOSHI,["自从被麒麟封印以后，恶灵兽一直隐忍不发，原来就是为了寻找记载上古禁术的卷轴，这可大事不妙！"],["上古禁术？谜之卷轴？！"],[function():void
            {
               NpcDialog.show(NPC.JUSTIN,["是的，你自己看吧！"],null,null,false,function():void
               {
                  CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_134302"),function():void
                  {
                     NpcDialog.show(NPC.JUSTIN,["根据麒麟的神谕，恶灵兽这些年一直在寻找这个卷轴，在我们被恶灵三巨头纠缠的时候，它终于得到了卷轴！"],["原来如此，恶灵兽好狡猾！"],[function():void
                     {
                        NpcDialog.show(NPC.JUSTIN,["我们都大意了！我们以为恶灵三巨头就是它最后的力量了，没想到它明修栈道暗渡陈仓！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.YINGKALUOSHI,["我一直觉得恶灵三巨头很弱，原来它们只是恶灵兽用来掩人耳目的炮灰！"],null,null,false,function():void
                           {
                              TasksManager.complete(TaskController_1343.TASK_ID,0,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    MapManager.changeMap(45);
                                 }
                              });
                           });
                        });
                     }]);
                  });
               });
            }]);
         }]);
      }
      
      private static function step1() : void
      {
         AnimateManager.playMcAnimate(taskMC,1,"mc1",function():void
         {
            NpcDialog.show(NPC.ELINGSHOU_NORMOL,["麒麟的三重封印可害苦了我，现在有了谜之卷轴，我就可以穿越时空，破解封印，恢复力量了！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.ALLISON,["就这本破书里就有破解麒麟封印的法术？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ELINGSHOU_NORMOL,["你说什么？破书？"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
                     {
                        NpcDialog.show(NPC.ELINGSHOU_NORMOL,["让我看看，就是这个！上古禁术：时之沙！有了它我就可以破解封印！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.ZOG,["老大！快给小小的开开眼！"],null,null,false,function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1343_2"),function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                                 {
                                    taskMC.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                                    {
                                       var e:MouseEvent = param1;
                                       taskMC.removeEventListener(MouseEvent.CLICK,arguments.callee);
                                       AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
                                       {
                                          NpcDialog.show(NPC.ZOG,["咦是阿洛比斯！"],null,null,false,function():void
                                          {
                                             NpcDialog.show(NPC.ALUOBISI,["谁！是谁把我召唤到这里来的？！谁敢戏弄邪恶四灵！！"],null,null,false,function():void
                                             {
                                                NpcDialog.show(NPC.ALLISON,["邪恶四灵？这猴年马月的事了？这个阿洛比斯好像头脑不太清楚啊？"],null,null,false,function():void
                                                {
                                                   NpcDialog.show(NPC.ELINGSHOU_NORMOL,["你们错了！这个阿洛比斯是以前的邪恶四灵，我用时之沙之术回到过去把它召唤了来！那个善良的巨石灵王已经被我送到了过去！"],null,null,false,function():void
                                                   {
                                                      AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1343_3"),function():void
                                                      {
                                                         TasksManager.complete(TaskController_1343.TASK_ID,1,function(param1:Boolean):void
                                                         {
                                                            if(param1)
                                                            {
                                                               MapManager.changeMap(810);
                                                            }
                                                         });
                                                      },false);
                                                   });
                                                });
                                             });
                                          });
                                       });
                                    });
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function step2(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 21
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function endStep() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 13
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(MapManager.currentMap.id != 102 && taskMC != null)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,step2);
               DisplayUtil.removeForParent(taskMC);
            }
            if(MapManager.currentMap.id != 45)
            {
               OgreController.isShow = true;
            }
            _map.topLevel.visible = true;
            _map = null;
         }
      }
   }
}
