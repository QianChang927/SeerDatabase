package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1288;
   import com.robot.app.task.control.TaskController_1297;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1288
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1288()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["task1288mc"];
      }
      
      private static function get taskDiao() : MovieClip
      {
         return MapManager.currentMap.controlLevel["task1288Diao"];
      }
      
      private static function get diao() : MovieClip
      {
         return MapManager.currentMap.controlLevel["diao"];
      }
      
      private static function get taskState1288() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1288.TASK_ID);
      }
      
      private static function get taskState1297() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1297.TASK_ID);
      }
      
      public static function initForMap795(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         if(taskState1288 == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1288.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskMC.addEventListener(MouseEvent.CLICK,startStep);
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
      
      public static function initForMap799(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         if(taskState1288 == TasksManager.ALR_ACCEPT && taskState1297 != TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1288.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  taskMC.addEventListener(MouseEvent.CLICK,step1);
               }
               else if(param1[2] && !param1[3] && Boolean(BufferRecordManager.getState(MainManager.actorInfo,466)))
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  endStep_2();
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
      
      public static function initForMap796(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         if(taskState1288 == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1288.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[1]) && !param1[2])
               {
                  taskMC.addEventListener(MouseEvent.CLICK,step2_1);
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  endStep_1();
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
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 28
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function step1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         NpcDialog.show(NPC.BIMOLA_NORMOL,["想不到啊想不到，原来米咔就是救世主！我们都抓到它了，结果又给赛小息他们救了回去！"],["是呀是呀！"],[function():void
         {
            NpcDialog.show(NPC.NASIQI_NORMOL,["那赛小息看起来忠厚老实，想不到也这么狡猾，哼，不给他点颜色，他就不知道我百变将军的手段！"],["啊！你有什么计划？"],[function():void
            {
               NpcDialog.show(NPC.NASIQI_NORMOL,["赛小息最关心的还是救世主，咱们来个故技重施，梅开二度！让他在同一块石头上绊倒两次！"],["嘶嘶！"],[function():void
               {
                  NpcDialog.show(NPC.BIMOLA_NORMOL,["虽然不是很明白你在说什么，但是感觉很厉害……"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
                     {
                        CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_128802"),function():void
                        {
                           NpcDialog.show(NPC.BIMOLA_NORMOL,["哈哈，太好了，看来赛小息他们正好想救天马星，我还怕他们不敢来见我们呢！"],["是呀是呀！"],[function():void
                           {
                              NpcDialog.show(NPC.NASIQI_NORMOL,["只要见了面，先把赛小息抓起来，然后让他们用米咔来换赛小息！哇哈哈，我真是太聪明了！"],["嘶嘶！"],[function():void
                              {
                                 NpcDialog.show(NPC.BIMOLA_NORMOL,["虽然不是很明白你在说什么，但是感觉很厉害……"],null,null,false,function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                                    {
                                       NpcDialog.show(NPC.BIMOLA_NORMOL,["哎，拉摩斯失忆了以后性格也变了，都没人陪我斗嘴了！要是抓到了赛小息！我一定要先好好折磨他！"],["那就随便你了！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
                                          {
                                             AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1288_4"),function():void
                                             {
                                                TasksManager.complete(TaskController_1288.TASK_ID,1,function(param1:Boolean):void
                                                {
                                                   if(param1)
                                                   {
                                                      MapManager.changeMap(796);
                                                   }
                                                });
                                             },false);
                                          });
                                       }]);
                                    });
                                 });
                              }]);
                           }]);
                        });
                     });
                  });
               }]);
            }]);
         }]);
      }
      
      private static function step2_1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         NpcDialog.show(NPC.BIMOLA_NORMOL,["嘶嘶！这里真是个打架的好地方，只是这四周怎么似乎有打斗过的痕迹啊？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.ZOG,["根据我们海盗的情报，雷伊和盖亚在这里决斗过！"],["……"],[function():void
            {
               NpcDialog.show(NPC.BIMOLA_NORMOL,["他们两个的确厉害！你们要监视好他们，别让他们干扰了我主人复活的大计——赛小息他们怎么还没来？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ALLISON,["千臂大人别急，他们发现天马星不对劲了，迫不及待的想弄清楚是怎么回事，今天一定会来的！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
                     {
                        NpcDialog.show(NPC.BIMOLA_NORMOL,["嘶嘶！赛小息，你们还挺守信用嘛！我说不许带珀伽索斯来，你们果然没带！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["比莫拉！天马星的能量一直在减少，是不是你搞得鬼？"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.BIMOLA_NORMOL,["我为什么要告诉你？"],null,null,false,function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                                 {
                                    NpcDialog.show(NPC.BIMOLA_NORMOL,["哼！无知的赛尔！你们怎么能知道我千臂将军的厉害！就给你们看一点好东西！佐格、艾利逊！"],null,null,false,function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
                                       {
                                          ModuleManager.showModule(ClientConfig.getTaskModule("TaskInteractive_1288_1"));
                                       });
                                    });
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            }]);
         });
      }
      
      public static function step2_2() : void
      {
         AnimateManager.playMcAnimate(taskMC,5,"mc5",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["你已经抓住我们了，我们也跑不掉了，你就告诉我们吧，天马星到底是怎么了？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.BIMOLA_NORMOL,["哼哼，不错，反正你们插翅难飞了，佐格艾利逊，就给他们看看吧！"],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(taskMC,6,"mc6",function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["比莫拉！那是什么！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.BIMOLA_NORMOL,["噗嘶嘶！吓傻了吧！这是恶灵兽主人留下的摄灵邪阵！可以吸收天地的灵气！"],["摄灵邪阵！？"],[function():void
                        {
                           NpcDialog.show(NPC.BIMOLA_NORMOL,["不错，等吸收了天马星的灵气，主人就可以复活了！天马星也将变成沙漠嘶哈哈哈！！"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,7,"mc7",function():void
                              {
                                 NpcDialog.show(NPC.BIMOLA_NORMOL,["天马珀伽索斯！黑天马克里萨！"],["哼！"],[function():void
                                 {
                                    NpcDialog.show(NPC.KELISA,["赛小息的计划果然不错，只要故意被你们抓住，你一定得意忘形告诉我们秘密！"],["嘶嘶！我上当了！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,8,"mc8",function():void
                                       {
                                          TasksManager.complete(TaskController_1288.TASK_ID,2,function(param1:Boolean):void
                                          {
                                             if(param1)
                                             {
                                                endStep_1();
                                             }
                                          });
                                       });
                                    }]);
                                 }]);
                              });
                           });
                        }]);
                     });
                  });
               });
            });
         });
      }
      
      private static function endStep_1() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(8);
         NpcDialog.show(NPC.KALULU,["米咔，不要过去，烟雾里面看不到敌人，会被暗算的！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.ATIEDA,["怎么办！我们现在只能防守不能攻击！"],null,null,false,function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1288_5"),function():void
               {
                  NpcDialog.show(NPC.BIMOLA_NORMOL,["哼，好蛇不吃眼前亏，你们人多，我不打啦！赛小息我们带走啦！想要他就拿救世主来换吧！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,9,"mc9",function():void
                     {
                        NpcDialog.show(NPC.LINASI,["糟糕！你们的朋友被他们抓走了！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SHENGGUANGTIANMA,["别着急，这也在我们的计划之中！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.KALULU,["我们已经在赛小息身上安装了跟踪器，咱们这就去他们老巢，把他们一锅端！"],null,null,false,function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,10,"mc10",function():void
                                 {
                                    BufferRecordManager.setState(MainManager.actorInfo,466,true,function():void
                                    {
                                       MapManager.changeMap(799);
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
      
      private static function endStep_2() : void
      {
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playMcAnimate(taskMC,5,"mc5",function():void
         {
            NpcDialog.show(NPC.KALULU,["小息！小息被冻住了！我们快救他！"],["别冲动！"],[function():void
            {
               NpcDialog.show(NPC.KELISA,["强行破坏冰晶牢笼小息会受伤的！这里肯定有机关！"],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(taskMC,6,"mc6",function():void
                  {
                     taskDiao.buttonMode = true;
                     diao.gotoAndStop(2);
                     taskDiao.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                     {
                        var e:MouseEvent = param1;
                        taskDiao.removeEventListener(MouseEvent.CLICK,arguments.callee);
                        diao.gotoAndStop(3);
                        AnimateManager.playMcAnimate(taskMC,7,"mc7",function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["哈哈，伙伴们，你们来救我啦！一切都在计划之中！这里就是比莫拉的老窝啦！哇，那就是摄灵邪阵吧！"],null,null,false,function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1288_6"),function():void
                              {
                                 TasksManager.complete(TaskController_1288.TASK_ID,3,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       destroy();
                                       MainManager.selfVisible = true;
                                       ToolBarController.showOrHideAllUser(true);
                                    }
                                 });
                              },false);
                           });
                        });
                     });
                  });
               });
            }]);
         });
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            taskMC.removeEventListener(MouseEvent.CLICK,startStep);
            taskMC.removeEventListener(MouseEvent.CLICK,step1);
            taskMC.removeEventListener(MouseEvent.CLICK,step2_1);
            DisplayUtil.removeForParent(taskMC);
            ToolTipManager.remove(taskMC);
            _map = null;
         }
      }
   }
}
