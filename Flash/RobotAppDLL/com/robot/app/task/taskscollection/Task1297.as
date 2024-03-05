package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1297;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1297
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1297()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["task1297mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1297.TASK_ID);
      }
      
      private static function get taskState1306() : uint
      {
         return TasksManager.getTaskStatus(1306);
      }
      
      public static function initForMap799(param1:BaseMapProcess) : void
      {
         var mc:MovieClip = null;
         var mc1:MovieClip = null;
         var map:BaseMapProcess = param1;
         _map = map;
         mc = _map.conLevel["diao"] as MovieClip;
         mc1 = _map.conLevel["spt"] as MovieClip;
         taskMC.buttonMode = true;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1297.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  mc.visible = false;
                  mc1.visible = false;
                  taskMC.addEventListener(MouseEvent.CLICK,startStep_1);
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  mc.visible = false;
                  mc1.visible = false;
                  taskMC.addEventListener(MouseEvent.CLICK,step1);
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
      
      public static function initForMap801(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            if(taskState1306 == TasksManager.ALR_ACCEPT)
            {
               TasksManager.getProStatusList(1306,function(param1:Array):void
               {
                  if(!param1[0] || param1[1] && !param1[2])
                  {
                     destroy();
                  }
               });
            }
            else
            {
               TasksManager.getProStatusList(TaskController_1297.TASK_ID,function(param1:Array):void
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
                     taskMC.addEventListener(MouseEvent.CLICK,endStep);
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
      
      private static function startStep_1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
         {
            NpcDialog.show(NPC.KELISA,["贾斯汀站长？他是谁呀？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["贾斯汀站长是我的偶像！他非常的勇敢，是赛尔号的超级战士！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.KELISA,["哈，听你这么一说好想认识他一下！能见这样的勇士一面才不枉此生啊！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                     {
                        NpcDialog.show(NPC.BIMOLA_NORMOL,["嘶嘶！该称赞你们勇敢呢，还是该嘲笑你们的鲁莽？我千臂将军的巢穴，岂是想来就来，想走就走的？ "],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["哼，别小看我们赛尔先锋队，这一路刀山火海的见的多了去了！你还是乖乖的撤掉摄灵邪阵！不然就拆了你的窝！ "],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.BIMOLA_NORMOL,["嘶哈哈哈！有了几个帮手就如此狂妄，太小看我们恶灵三巨头了！纳斯琪，咱们给他们点颜色瞧瞧如何？"],["不错！"],[function():void
                              {
                                 NpcDialog.show(NPC.NASIQI_NORMOL,["就让你们知道我们的厉害！ "],null,null,false,function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
                                    {
                                       NpcDialog.show(NPC.BIMOLA_NORMOL,["嘶嘶！这是我的地盘！你们以为还能像上次那样轻易的击败我们么？"],["！！！"],[function():void
                                       {
                                          NpcDialog.show(NPC.SHENGGUANGTIANMA,["这里本来是天马星的地方，你占地为王还敢大言不惭！今天我们天马师徒就要斩妖除魔，教训你们一下！"],null,null,false,function():void
                                          {
                                             NpcDialog.show(NPC.NASIQI_NORMOL,["吆！吆！吆！果然不愧是天马大人！ 不过我们这一次也有所准备，你们还是束手就擒吧！"],null,null,false,function():void
                                             {
                                                AnimateManager.playMcAnimate(taskMC,5,"mc5",function():void
                                                {
                                                   NpcDialog.show(NPC.SAIXIAOXI,["这里有一个奇怪的阵法，这个阵法好眼熟，我好像在哪里看到过！"],null,null,false,function():void
                                                   {
                                                      AnimateManager.playMcAnimate(taskMC,6,"mc6",function():void
                                                      {
                                                         NpcDialog.show(NPC.SAIXIAOXI,["啊，想起来了，是拉摩斯老巢的护佑法阵，原来比莫拉也有一个！嘿嘿，臭蛇！这下可抓到你的小辫子了！"],null,null,false,function():void
                                                         {
                                                            ModuleManager.showModule(ClientConfig.getTaskModule("TaskInteractive_1297_1"));
                                                         });
                                                      });
                                                   });
                                                });
                                             });
                                          });
                                       }]);
                                    });
                                 });
                              }]);
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      public static function startStep_2() : void
      {
         AnimateManager.playMcAnimate(taskMC,7,"mc7",function():void
         {
            TasksManager.complete(TaskController_1297.TASK_ID,0,function(param1:Boolean):void
            {
               if(param1)
               {
                  step1();
               }
            });
         });
      }
      
      private static function step1(param1:MouseEvent = null) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 20
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function step2(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.BIMOLA_NORMOL,["嘶嘶！想不到竟然给赛小息那个家伙误打误撞破坏了护佑法阵！这小子真是我们恶灵三巨头命中的魔星！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.ZOG,["还好比莫拉大人够狡猾，那帮家伙无论如何也想不到，真正的摄灵邪阵会是在这悬崖之边的苍云之海，哈哈哈"],["……"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
               {
                  NpcDialog.show(NPC.JUSTIN,["比莫拉，你已经走投无路了！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.BIMOLA_NORMOL,["哼！已经到了这一步，我也不打算再退了！不过你们虽然赢定了，我心里却非常的不服气！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.JUSTIN,["邪不胜正，这有什么不服气的？"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.BIMOLA_NORMOL,["倘若你们一对一堂堂正正赢了我，我当然服服帖帖的，可你们凭的是人多！我就不服气！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.JUSTIN,["笑话！说到人多，你和海盗狼狈为奸，你们的人数可比我们多多了！"],null,null,false,function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                                 {
                                    NpcDialog.show(NPC.BIMOLA_NORMOL,["呼……好了，现在我们只剩下两个人了，你们可不能人多欺负人少！"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["……比莫拉，你好卑鄙！"],["嘶嘶"],[function():void
                                       {
                                          NpcDialog.show(NPC.BIMOLA_NORMOL,["卑鄙可是我的座右铭！贾斯汀，你说怎么办吧！难道你们也打算几个打我一个，背上卑鄙之名吗？"],null,null,false,function():void
                                          {
                                             AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
                                             {
                                                NpcDialog.show(NPC.BIMOLA_NORMOL,["等一下——那个什么，你有兵器，可我没兵器，这样不公平！"],null,null,false,function():void
                                                {
                                                   NpcDialog.show(NPC.ATIEDA,["你根本就是不敢比吧？"],null,null,false,function():void
                                                   {
                                                      NpcDialog.show(NPC.BIMOLA_NORMOL,["哼，你们要是不能让我心服口服，我就是输了也不会解开摄灵邪阵！天马星还是会完蛋，哼哼！"],null,null,false,function():void
                                                      {
                                                         AnimateManager.playMcAnimate(taskMC,5,"mc5",function():void
                                                         {
                                                            TasksManager.complete(TaskController_1297.TASK_ID,2,function(param1:Boolean):void
                                                            {
                                                               if(param1)
                                                               {
                                                                  endStep();
                                                               }
                                                            });
                                                         });
                                                      });
                                                   });
                                                });
                                             });
                                          });
                                       }]);
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
      
      private static function endStep(param1:MouseEvent = null) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.KELISA,["比莫拉！要毁灭天马星，先要过我这一关！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.BIMOLA_NORMOL,["哼哼，你不过是我的手下败将，也敢来向我挑战？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.LINASI,["克利萨！你不是它的对手，不要冲动！和这种坏人讲什么道理！我们一起上！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.KELISA,["谢谢你的关心丽娜丝！不要担心我！经过和师傅一起修行，我已经进步很多了！就让我用自己的力量来打败它！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,6,"mc6",function():void
                     {
                        NpcDialog.show(NPC.JUSTIN,["那就这样，由克利萨和比莫拉堂堂正正的比武！谁也不要插手！纳斯琪，你要是敢偷袭，我们一定不放过你！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.NASIQI_NORMOL,["哼！瘦死的骆驼比马大！别以为破坏了护佑法阵，你们就稳操胜券了！比莫拉！你要是输了，我打爆你的头！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.BIMOLA_NORMOL,["嘶嘶！来吧！小马！让你知道恶灵三巨头的恐怖！"],null,null,false,function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1297_6"),function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1297_7"),function():void
                                    {
                                       TasksManager.complete(TaskController_1297.TASK_ID,3,function(param1:Boolean):void
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
                  });
               });
            });
         });
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            taskMC.removeEventListener(MouseEvent.CLICK,startStep_1);
            taskMC.removeEventListener(MouseEvent.CLICK,step1);
            taskMC.removeEventListener(MouseEvent.CLICK,endStep);
            DisplayUtil.removeForParent(taskMC);
            _map = null;
         }
      }
   }
}
