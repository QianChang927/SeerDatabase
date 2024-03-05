package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1050;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
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
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1050
   {
      
      public static const TASK_ID:uint = 1050;
      
      public static var _map:BaseMapProcess;
      
      private static var clickCount:uint = 0;
       
      
      public function Task1050()
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
      
      public static function initTaskForMap728(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         removeMush1Event();
         removeMush2Event();
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskMC.gotoAndStop(1);
                  taskMC.buttonMode = true;
                  _map.conLevel["Task1050TanHaoMC"].visible = true;
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
               else if(Boolean(param1[3]) && !param1[4])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep4();
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
         _map.conLevel["Task1050TanHaoMC"].visible = false;
         NpcDialog.show(NPC.SAIXIAOXI,["咦？这里是什么，我们怎么会降落在这里呢！不管这么多，先找尤米娜再说！"],null,null,false,function():void
         {
            AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
            {
               NpcDialog.show(NPC.SEER,["队长，这样喊下去也不是办法！如果是我，肯定不会出来的，除非是傻子！"],["要不，我们在附近先找找吧！"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["好吧！最好不要给我遇到那个女魔头，否则绝饶不了她！"],["先消消气吧！千万不能意气用事！"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["队长，卡璐璐说的没错，我们这就开始吧！我可不想阿铁打被禁闭太久！"],["恩恩，伙伴们，行动起来吧！"],[function():void
                     {
                        taskLeafMC.visible = false;
                        taskMushBgMC_1.visible = false;
                        taskMushBgMC_2.visible = false;
                        AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["哇，那是什么东西啊！ 还会说话，不会是什么怪物吧！让你尝尝我的厉害！"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["奇怪了，让我看看里面到底是什么东东！"],["队长，让我来吧！"],[function():void
                                 {
                                    addYellowArrow(MapManager.currentMap.topLevel,70,206,270);
                                    addMush1Event("请点击该植物");
                                 }]);
                              });
                           });
                        });
                     }]);
                  }]);
               }]);
            });
         });
      }
      
      private static function Mush1ClickHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         removeMush1Event();
         ++clickCount;
         if(clickCount == 1)
         {
            removeYellowArrow(MapManager.currentMap.topLevel);
            AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
            {
               addYellowArrow(MapManager.currentMap.topLevel,70,206,270);
               addMush1Event("请再点击一次");
            });
         }
         else if(clickCount == 2)
         {
            removeYellowArrow(MapManager.currentMap.topLevel);
            AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
            {
               clickCount = 0;
               addYellowArrow(MapManager.currentMap.topLevel,391,92,45);
               addMush2Event("请点击该植物");
            });
         }
      }
      
      private static function Mush2ClickHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         removeMush2Event();
         ++clickCount;
         if(clickCount == 1)
         {
            removeYellowArrow(MapManager.currentMap.topLevel);
            AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
            {
               addYellowArrow(MapManager.currentMap.topLevel,391,92,45);
               addMush2Event("请再点击一次");
            });
         }
         else if(clickCount == 2)
         {
            removeYellowArrow(MapManager.currentMap.topLevel);
            AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
            {
               clickCount = 0;
               initStep1Continue();
            });
         }
      }
      
      private static function initStep1Continue() : void
      {
         removeMush1Event();
         removeMush2Event();
         taskMushBgMC_1.visible = true;
         taskMushBgMC_2.visible = true;
         taskLeafMC.visible = true;
         NpcDialog.show(NPC.A_CAI,["太好了，终于得救了，真是太感谢你了，救命恩人，我们该如何报答你呢？"],["恩？你们不就是！！！"],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["好极了，没想到救了你们这些家伙，看来我是救错人了！快说，尤米娜在哪里？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.A_CAI,["别伤害我们，其实我们是被逼的，不是我们想伤害你，只不过尤米娜太强大了，我们不得不从啊！"],["少假惺惺了，你们是一伙的！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                  {
                     NpcDialog.show(NPC.KALULU,["小息，看它们的样子也没什么攻击力，说不定真的是被强迫的呢？"],["只有你才会相信它们的话！"],[function():void
                     {
                        NpcDialog.show(NPC.KALULU,["你们快说，怎么才能找到尤米娜，告诉我们就放你们走！"],["尤米娜，她就在前面的米娜村！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["真的吗？太好了，终于被我找到你的老窝了，你等着，我这就去找你算账！"],["你们走吧！别再做坏事了！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["什么小心不小心的，难道我们这几个还怕这些花花草草不成，伙伴们，继续赶路吧！"],["恩恩，收到！"],[function():void
                                 {
                                    TasksManager.complete(TaskController_1050.TASK_ID,1,function(param1:Boolean = true):void
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
                                 }]);
                              });
                           }]);
                        }]);
                     }]);
                  });
               }]);
            });
         }]);
      }
      
      private static function initStep2() : void
      {
         taskMC.gotoAndStop(10);
         taskSrhMC_1.visible = false;
         AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["哎呀！不好啦！这些植物居然会咬人，你们快来帮帮我啊！"],["可恶的家伙！"],[function():void
            {
               NpcDialog.show(NPC.KALULU,["叫你不要大意吧！现在可好，出糗了吧！"],["真是个麻烦的家伙！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
                  {
                     taskSrhMC_1.visible = true;
                     NpcDialog.show(NPC.KALULU,["别装啦!小息，你的脚不是还好好的嘛！你别忘了你是机器人…"],["额…原来是这样！"],[function():void
                     {
                        taskMC.gotoAndStop(12);
                        NpcDialog.show(NPC.SAIXIAOXI,["没有啦！嘻嘻，跟你们开个玩笑而已，我赛小息怎么可能这么容易被打败呢？"],["别臭美了！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["你终于出现了，魔女！为什么要假扮阿铁打的样子！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.YUMINA,["别老是魔女、魔女的！我的名字叫尤米娜，你们给我好好记住！"],["哼，还是称你魔女比较适合！"],[function():void
                                 {
                                    NpcDialog.show(NPC.YUMINA,["上次让你们逃走了，这次可没这么容易了，交出你们的七星天珠吧！否则休想离开这里！"],["就知道你是为了这个！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.KALULU,["不准你侮辱阿铁打，他是我们的伙伴，你不配！"],["废话少说，天珠拿来！"],[function():void
                                          {
                                             AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1050_2"),function():void
                                             {
                                                NpcDialog.show(NPC.KALULU,["小息，你没事吧！可恶的女魔头！告诉你，我们不会把七星天珠给你的，你就死心吧！"],["先照顾好你的同伴再说吧！"],[function():void
                                                {
                                                   NpcDialog.show(NPC.KALULU,["这个我当然知道，不用你提醒！"],["真是倔强的孩子！"],[function():void
                                                   {
                                                      TasksManager.complete(TaskController_1050.TASK_ID,2,function(param1:Boolean = true):void
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
                                                   }]);
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
               }]);
            }]);
         });
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(14);
         taskSrhMC_2.visible = false;
         AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
         {
            taskSrhMC_2.visible = true;
            NpcDialog.show(NPC.SAIXIAOXI,["这里到底是哪里啊！怎么都喜欢吃我啊！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.YUMINA,["乖乖的交出七星天珠吧！省的吃这些苦头，何苦呢？"],["不行，七星天珠对我们很重要！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
                  {
                     NpcDialog.show(NPC.MOYUXIANZI,["那些家伙说，如果你不能带七星天珠回去，就把整个米娜村上上下下都毁掉！"],["不行，时间还没到，它们不能这样！"],[function():void
                     {
                        NpcDialog.show(NPC.MOYUXIANZI,["你可千万别回去啊！"],["不行，米娜村的事我不能不管！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["发生什么事情啦！怎么不打了？要逃走吗？还是说要一个帮手来充数？？"],["住口，不知名的小子，你知道什么！"],[function():void
                              {
                                 NpcDialog.show(NPC.MOYUXIANZI,["我不允许你们这么说尤米娜，她这样全是为了米娜村，你们不会明白的！"],["米娜村，难道那里出现什么事情了吗？"],[function():void
                                 {
                                    CartoonManager.play(ClientConfig.getFullMovie("cartoon/task1050_1"),function():void
                                    {
                                       NpcDialog.show(NPC.MOYUXIANZI,["所有人都以为是尤米娜背叛了米娜村，但是谁又知道她心中有多少委屈和压力呢？为什么要寻找七星天珠？是为了拯救大家！"],["什么，太不可思议了！"],[function():void
                                       {
                                          NpcDialog.show(NPC.MOYUXIANZI,["既然你们身上有七星天珠，不如交出来吧！这样尤米娜就不用如此痛苦了，米娜村也可以保留下来了！"],["不行，这是我们…"],[function():void
                                          {
                                             NpcDialog.show(NPC.MOYUXIANZI,["我情愿作为恶人出现，对不住你们啦！"],null,null,false,function():void
                                             {
                                                AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1050_3"),function():void
                                                {
                                                   TasksManager.complete(TaskController_1050.TASK_ID,3,function(param1:Boolean = true):void
                                                   {
                                                      if(param1)
                                                      {
                                                         initStep4();
                                                      }
                                                      else
                                                      {
                                                         destroy();
                                                      }
                                                   });
                                                });
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
               }]);
            });
         });
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(17);
         NpcDialog.show(NPC.KALULU,["赛小息，这是真的吗？我不是在做梦吧！太悲情了！"],["恩恩，我也这么觉得！"],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["既然这样，我们就必须把这件事情告诉船长，这样不仅能想办法帮助尤米娜，更能帮助阿铁打，我们快走吧！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["队长，你们先走吧！我想到处走走，说不定可以发现一些线索，不过根据魔域仙子所说的，肯定是海盗！"],["太可恶了！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
                  {
                     NpcDialog.show(NPC.KALULU,["那我们先走了，小心啊！赛尔，我们在飞船上等你！"],["恩恩，放心吧！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,18,"mc",function():void
                        {
                           NpcDialog.show(NPC.SEER,["如果真的是这样，看来我们又要和海盗来场大战了！呵呵，海盗二人组，我们好久不见了，等着吧！"],["尤米娜，我们会来支援你的！"],[function():void
                           {
                              TasksManager.complete(TaskController_1050.TASK_ID,4,function(param1:Boolean = true):void
                              {
                                 destroy();
                              });
                           }]);
                        });
                     }]);
                  });
               }]);
            });
         }]);
      }
      
      private static function addYellowArrow(param1:DisplayObjectContainer, param2:Number = 0, param3:Number = 0, param4:uint = 0) : void
      {
         CommonUI.addYellowArrow(param1,param2,param3,param4);
      }
      
      private static function removeYellowArrow(param1:DisplayObjectContainer) : void
      {
         CommonUI.removeYellowArrow(param1);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 728)
         {
            return _map.conLevel["task1050MC"];
         }
         return null;
      }
      
      private static function get taskMushBgMC_1() : MovieClip
      {
         if(MapManager.currentMap.id == 728)
         {
            return _map.conLevel["Task1050MushBgMC_1"];
         }
         return null;
      }
      
      private static function get taskMushBgMC_2() : MovieClip
      {
         if(MapManager.currentMap.id == 728)
         {
            return _map.conLevel["Task1050MushBgMC_2"];
         }
         return null;
      }
      
      private static function get taskSrhMC_1() : MovieClip
      {
         if(MapManager.currentMap.id == 728)
         {
            return _map.conLevel["Task1050ShiRenHuaBgMC_1"];
         }
         return null;
      }
      
      private static function get taskSrhMC_2() : MovieClip
      {
         if(MapManager.currentMap.id == 728)
         {
            return _map.conLevel["Task1050ShiRenHuaBgMC_2"];
         }
         return null;
      }
      
      private static function get taskLeafMC() : MovieClip
      {
         if(MapManager.currentMap.id == 728)
         {
            return _map.conLevel["Task1050LeafMC"];
         }
         return null;
      }
      
      private static function get MushMC_1() : MovieClip
      {
         if(MapManager.currentMap.id == 728)
         {
            return _map.conLevel["Task1050MushBtn_1"];
         }
         return null;
      }
      
      private static function get MushMC_2() : MovieClip
      {
         if(MapManager.currentMap.id == 728)
         {
            return _map.conLevel["Task1050MushBtn_2"];
         }
         return null;
      }
      
      private static function addMush1Event(param1:String) : void
      {
         MushMC_1.visible = true;
         MushMC_1.buttonMode = true;
         MushMC_1.addEventListener(MouseEvent.CLICK,Mush1ClickHandler);
         ToolTipManager.add(MushMC_1,param1);
      }
      
      private static function removeMush1Event() : void
      {
         MushMC_1.visible = false;
         MushMC_1.buttonMode = false;
         MushMC_1.removeEventListener(MouseEvent.CLICK,Mush1ClickHandler);
         ToolTipManager.remove(MushMC_1);
      }
      
      private static function addMush2Event(param1:String) : void
      {
         MushMC_2.visible = true;
         MushMC_2.buttonMode = true;
         MushMC_2.addEventListener(MouseEvent.CLICK,Mush2ClickHandler);
         ToolTipManager.add(MushMC_2,param1);
      }
      
      private static function removeMush2Event() : void
      {
         MushMC_2.visible = false;
         MushMC_2.buttonMode = false;
         MushMC_2.removeEventListener(MouseEvent.CLICK,Mush2ClickHandler);
         ToolTipManager.remove(MushMC_2);
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
            if(MapManager.currentMap.id == 728)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
               MushMC_1.removeEventListener(MouseEvent.CLICK,Mush1ClickHandler);
               MushMC_2.removeEventListener(MouseEvent.CLICK,Mush2ClickHandler);
            }
            DisplayUtil.removeForParent(MushMC_1);
            DisplayUtil.removeForParent(MushMC_2);
            DisplayUtil.removeForParent(taskMC);
         }
         taskMushBgMC_1.visible = true;
         taskMushBgMC_2.visible = true;
         taskLeafMC.visible = true;
         taskSrhMC_1.visible = true;
         taskSrhMC_2.visible = true;
         _map = null;
      }
   }
}
