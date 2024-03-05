package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1278;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1278
   {
      
      public static const TASK_ID:int = 1278;
      
      private static var _map786:BaseMapProcess;
      
      private static var _map698:BaseMapProcess;
      
      private static var _map795:BaseMapProcess;
       
      
      public function Task1278()
      {
         super();
      }
      
      public static function get taskMC() : MovieClip
      {
         return _map786.conLevel["task1278mc"] as MovieClip;
      }
      
      public static function get taskMC2() : MovieClip
      {
         return _map698.btnLevel["saixiaoxiBtn"] as MovieClip;
      }
      
      public static function get taskMC3() : MovieClip
      {
         return _map795.conLevel["task1278mc"] as MovieClip;
      }
      
      public static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TASK_ID);
      }
      
      public static function isShowTaskMC2(param1:Boolean = false) : void
      {
         taskMC2.visible = param1;
         taskMC2.buttonMode = param1;
         taskMC2.mouseChildren = param1;
         taskMC2.mouseEnabled = param1;
      }
      
      public static function initForMap786(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map786 = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1278.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  if(false == TaskController_1278.isFullMovieEnd)
                  {
                     destroy();
                  }
                  else
                  {
                     KTool.hideMapAllPlayerAndMonster();
                     MainManager.selfVisible = false;
                     step0();
                  }
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
      
      public static function initForMap698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map698 = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1278.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  isShowTaskMC2(true);
                  taskMC2.addEventListener(MouseEvent.CLICK,step1);
               }
               else
               {
                  isShowTaskMC2(false);
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
         _map795 = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1278.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[1]) && !param1[2])
               {
                  CommonUI.addYellowExcal(_map795.topLevel,511,247);
                  taskMC3.buttonMode = true;
                  taskMC3.addEventListener(MouseEvent.CLICK,step2);
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  step3();
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
      
      public static function step0() : void
      {
         AnimateManager.playMcAnimate(taskMC,1,"mc1",function():void
         {
            NpcDialog.show(NPC.NASIQI_NORMOL,["比莫拉，你冷静点，你以前不是最喜欢嘲笑拉摩斯的吗？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.BIMOLA_NORMOL,["我——我愿意！"],["……"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1278_2"),function():void
                  {
                     NpcDialog.show(NPC.BIMOLA_NORMOL,["气死我了！拉摩斯就这样失忆了！"],["看起来是的！"],[function():void
                     {
                        NpcDialog.show(NPC.NASIQI_NORMOL,["数百年相处的记忆，就这样灰飞烟灭了！？"],["气死我了！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
                           {
                              NpcDialog.show(NPC.BIMOLA_NORMOL,["奥莱德下落不明！剩下的就是赛尔！我一定要狠狠的报复赛尔！"],["不要冲动！"],[function():void
                              {
                                 NpcDialog.show(NPC.NASIQI_NORMOL,["单是赛尔其实没什么，但是他们有战神联盟那些强大的朋友！可不好对付！"],["哼！"],[function():void
                                 {
                                    NpcDialog.show(NPC.BIMOLA_NORMOL,["一个雷伊，也没有什么！不过还有盖亚、卡修斯和布莱克，它们要是一起上，的确不好对付！"],["哼哼！"],[function():void
                                    {
                                       NpcDialog.show(NPC.NASIQI_NORMOL,["战神联盟虽然不可力敌，但是可以智取啊！"],null,null,false,function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                                          {
                                             NpcDialog.show(NPC.NASIQI_NORMOL,["当然，我们来一个挑拨离间，各个击破！你看，这是什么？"],null,null,false,function():void
                                             {
                                                AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1278_3"),function():void
                                                {
                                                   TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                                   {
                                                      if(true == param1)
                                                      {
                                                         MapManager.changeMap(698);
                                                      }
                                                   });
                                                },false);
                                             });
                                          });
                                       });
                                    }]);
                                 }]);
                              }]);
                           });
                        }]);
                     }]);
                  },false);
               }]);
            });
         });
      }
      
      public static function step1(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         NpcDialog.show(NPC.SAIXIAOXI,["听说盖亚再次和雷伊约战，我又激动又担心！"],["是呀是呀！我也是！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["它们俩实力都那么强，可别一失手伤了对方！"],["恩，我觉得，我们最好去看一下！"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["我们可以在旁边提醒它们不要打伤对方，还可以亲眼观看一场惊天动地的战斗！"],["哈哈！我也这样想！"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["事不宜迟，我们分头出发！"],["好！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1278_4"),function():void
                     {
                        TasksManager.complete(TASK_ID,1,function(param1:Boolean = true):void
                        {
                           if(true == param1)
                           {
                              MapManager.changeMap(795);
                              isShowTaskMC2(false);
                              taskMC2.removeEventListener(MouseEvent.CLICK,step1);
                           }
                        });
                     });
                  }]);
               }]);
            }]);
         }]);
      }
      
      public static function step2(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         KTool.hideMapAllPlayerAndMonster();
         MainManager.selfVisible = false;
         taskMC3.buttonMode = false;
         CommonUI.removeYellowExcal(_map795.topLevel);
         AnimateManager.playMcAnimate(taskMC3,1,"mc1",function():void
         {
            NpcDialog.show(NPC.ATIEDA,["啊，是赛尔，我刚才探测到这附近有强大能量信号！"],["我也是！"],[function():void
            {
               NpcDialog.show(NPC.SEER,["我也探测到了！看来最先找到雷伊和盖亚的是咱俩了！哈哈！"],["来了！！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC3,2,"mc2",function():void
                  {
                     NpcDialog.show(NPC.SEER,["哇！是天马！！咦，旁边这个是谁？！黑色的天马？！"],["看起来很厉害啊！！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC3,3,"mc3",function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1278_5"),function():void
                           {
                              NpcDialog.show(NPC.SHENGGUANGTIANMA,["是赛尔啊，你们怎么来天马星了？"],["啊，这里叫天马星？"],[function():void
                              {
                                 NpcDialog.show(NPC.SHENGGUANGTIANMA,["原来你不知道啊，这里是天马星，是我的故乡！"],["喂喂喂"],[function():void
                                 {
                                    NpcDialog.show(NPC.KELISA,["别只顾着叙旧啊！快介绍一下我！"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.SHENGGUANGTIANMA,["这一位是黑天马克利萨，是天马一族的新秀！也是我的关门弟子！"],null,null,false,function():void
                                       {
                                          NpcDialog.show(NPC.KELISA,["我的梦想就是和师傅一样，成为天马一族最强的战士！"],["哈！梦想很远大嘛！"],[function():void
                                          {
                                             NpcDialog.show(NPC.KELISA,["看起来越难实现的梦想，越有实现的价值！我不会放弃不会放松，直到梦想实现！"],["克利萨好棒！我对你肃然起敬！"],[function():void
                                             {
                                                AnimateManager.playMcAnimate(taskMC3,4,"mc4",function():void
                                                {
                                                   TasksManager.complete(TASK_ID,2,function(param1:Boolean = true):void
                                                   {
                                                      if(true == param1)
                                                      {
                                                         taskMC3.addEventListener(MouseEvent.CLICK,step2);
                                                         step3();
                                                      }
                                                   });
                                                });
                                             }]);
                                          }]);
                                       });
                                    });
                                 }]);
                              }]);
                           },false);
                        });
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      public static function step3() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 18
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function destroy() : void
      {
         KTool.showMapAllPlayerAndMonster();
         MainManager.selfVisible = true;
         if(_map786)
         {
            DisplayUtil.removeForParent(taskMC);
            ToolTipManager.remove(taskMC);
            _map786 = null;
         }
         else if(_map698)
         {
            DisplayUtil.removeForParent(taskMC2);
            ToolTipManager.remove(taskMC2);
            taskMC2.removeEventListener(MouseEvent.CLICK,step1);
            _map698 = null;
         }
         else if(_map795)
         {
            DisplayUtil.removeForParent(taskMC3);
            ToolTipManager.remove(taskMC3);
            taskMC3.removeEventListener(MouseEvent.CLICK,step2);
            _map795 = null;
         }
      }
   }
}
