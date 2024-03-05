package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1144
   {
      
      public static const TASK_ID:uint = 1144;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1144()
      {
         super();
      }
      
      public static function initTaskFor4(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(1);
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(1);
               }
            });
         }
      }
      
      public static function initTaskFor750(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  taskMC.buttonMode = true;
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
         taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
         taskMC.buttonMode = false;
         taskMC.gotoAndStop(2);
         NpcDialog.show(NPC.SAIXIAOXI,["咦，这里难道就是恶魔星的第二领域？看上去好像没有将领看守嘛！说不定这里本来就是一个空空的领域！"],["继续前进吧！伙伴们！"],[function():void
         {
            NpcDialog.show(NPC.KALULU,["但是据吉拉特说，恶魔漩涡中八大领域的首领已经复苏啦！咱们千万不可掉以轻心啊！"],["放心啦！不是有队长我在嘛！"],[function():void
            {
               NpcDialog.show(NPC.SEER,["我总感觉这里有点不对劲，但是又说不出个所以然来，现在我们只能走一步算一步了！"],["恩恩，我们先找到迪恩再说！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["奇怪了，怎么是死路啊！不可能，一定会有出路的！"],["一定就在附近！大家快找找！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["但是应该走哪条呢？又是选择题，我最讨厌的就是选择！大伙跟我来，先从第一个开始尝试吧！"],["大伙都跟上！！！"],[function():void
                           {
                              NpcDialog.show(NPC.ATIEDA,["小息，你到底认不认识路啊！可别带我们走进陷阱啊！真为你捏把冷汗！"],["放一百二十个心吧！不会的！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.KALULU,["那到底怎么办，是进去还是不进去啊！赛小息你到是拿个主意啊！"],["走吧！只有这一条路了！"],[function():void
                                    {
                                       NpcDialog.show(NPC.ATIEDA,["放心吧！有我阿铁打在，我一定会保护大家的！"],["那我们进去吧！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                          {
                                             AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1144_3"),function():void
                                             {
                                                taskMC.gotoAndStop(6);
                                                NpcDialog.show(NPC.SAIXIAOXI,["什么，怎么又回来了，刚刚我们明明穿越了啊！真是奇怪啊！"],["我就说吧！你会带错方向的！"],[function():void
                                                {
                                                   NpcDialog.show(NPC.SAIXIAOXI,["哼！这简直就是怪事，再去试试第二条通道，我就不信走不出去！"],["继续尝试寻找出路！"],[function():void
                                                   {
                                                      CartoonManager.play(ClientConfig.getFullMovie("task1144_0"),function():void
                                                      {
                                                         NpcDialog.show(NPC.SAIXIAOXI,["这次又回来了，怎么会这样！我们居然进入了一个迷宫的领域，我看一定有谁在作怪！"],["我们一定要把他找出来！"],[function():void
                                                         {
                                                            NpcDialog.show(NPC.SAIXIAOXI,["米咔，这就交给你了，我很想知道这家伙到底长什么样子！！"],["米咔...米咔..."],[function():void
                                                            {
                                                               TasksManager.complete(TASK_ID,1,function(param1:Boolean = true):void
                                                               {
                                                                  if(param1)
                                                                  {
                                                                     initStep2();
                                                                  }
                                                               });
                                                            }]);
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
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      private static function initStep2() : void
      {
         taskMC.gotoAndStop(7);
         AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["什么，你说米咔不见了？怎么可能，刚才几次不是都一起回来的吗？"],["米咔，你在哪里啊？快出来！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["呜呜呜...我的米咔不见了，他一定是被困在某一个领域里了，还我米咔！！"],["别急，小息，我们再去找找！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                     {
                        NpcDialog.show(NPC.KALULU,["一定是你搞的鬼，快把米咔还给我们，否则我们就对你不客气了！"],["这位女士，你不应该用这样的语气和我对话！"],[function():void
                        {
                           NpcDialog.show(NPC.YOUNIKA,["你们要搞清楚，现在只有我才知道米咔的下落！哼哼，你们是不是该对我好点呢？"],["尤尼卡，你到底想怎么样！"],[function():void
                           {
                              NpcDialog.show(NPC.YOUNIKA,["很简单，只要你们为我做一件事，我就告诉你们米咔的下落，这样的交易我想你们不会拒绝吧！"],["这个..."],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.SAIXIAOXI,["不行，米咔是我的一切，我不能这样袖手旁观，一定要想办法找到它才行！"],["尤尼卡，你的条件是什么！"],[function():void
                                    {
                                       NpcDialog.show(NPC.YOUNIKA,["看到古老的装置了吗？如果你们可以打开它，我就告诉你们米咔的下落！"],["队长，让我去试试吧！"],[function():void
                                       {
                                          initStep2HaltPoint();
                                       }]);
                                    }]);
                                 });
                              }]);
                           }]);
                        }]);
                     });
                  }]);
               });
            }]);
         });
      }
      
      public static function initStep2HaltPoint() : void
      {
         NpcDialog.show(NPC.SEER,["这些装置对我来说小事一件，尤尼卡，你可记住你说的话，否则我们绝饶不了你！"],["一定一定！！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
            {
               CommonUI.addYellowArrow(_map.topLevel,510.95,245,315);
               ToolTipManager.add(_map.conLevel["ancientItem"],"古老装置");
               _map.conLevel["ancientItem"].visible = true;
               _map.conLevel["ancientItem"].addEventListener(MouseEvent.CLICK,onAncientItemClick);
            });
         }]);
      }
      
      private static function onAncientItemClick(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         ToolTipManager.remove(_map.conLevel["ancientItem"]);
         _map.conLevel["ancientItem"].removeEventListener(MouseEvent.CLICK,onAncientItemClick);
         _map.conLevel["ancientItem"].visible = false;
         ModuleManager.showModule(ClientConfig.getAppModule("AncientItemPuzzle"),"正在加载，请稍候...");
      }
      
      public static function initStep2GoOn() : void
      {
         _map.conLevel["ancientItem"].visible = false;
         NpcDialog.show(NPC.SEER,["太好了，终于成功了！接下来我们就能知道米咔的下落，我简直太聪明了，呵呵！"],null,null,false,function():void
         {
            _map.conLevel["Machine"].visible = false;
            AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
            {
               NpcDialog.show(NPC.YOUNIKA,["哼哼，好戏还在后头呢！别急，让你们见识一下恶魔星第二领域的将领吧！"],["什么！！第二将领！！！"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["尤尼卡，你不是会告诉我们米咔的下落吗？难道你是在利用我们？"],["哈哈哈，米咔？？"],[function():void
                  {
                     NpcDialog.show(NPC.YOUNIKA,["没有谁知道幽暗迷宫的另一头是哪里，至于你们的朋友么！说不定现在已经在恶魔星迷失方向呢！！"],["尤尼卡，你..."],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                        {
                           _map.conLevel["Machine"].visible = true;
                           _map.conLevel["Machine"].gotoAndStop(2);
                           NpcDialog.show(NPC.ATIEDA,["那...那不是雷纳多吗？看上去样子好奇怪啊！但是为什么它会出现在这里呢？"],["难不成他就是第二领域的将领？"],[function():void
                           {
                              NpcDialog.show(NPC.YOUNIKA,["雷纳尔多，你终于复苏了！接下来这可是我们的时代，随我一起称霸宇宙吧！"],["笑话，就凭你们？"],[function():void
                              {
                                 TasksManager.complete(TASK_ID,2,function(param1:Boolean = true):void
                                 {
                                    if(param1)
                                    {
                                       initStep3();
                                    }
                                 });
                              }]);
                           }]);
                        });
                     }]);
                  }]);
               }]);
            });
         });
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(14);
         AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
         {
            NpcDialog.show(NPC.KALULU,["快看，那不是上次遇到的那个黑影吗？天使与恶魔的化身真的能共存吗？"],["先看看再说！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
               {
                  NpcDialog.show(NPC.YOUNIKA,["好极了，别忘记我可是掌管恶魔星的尤尼卡大人，岂能让你如此嚣张！"],["接招吧！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1144_4"),function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["太恐怖了，他居然有如此强大的实力，还能变成两个精灵，看来天使和恶魔真的存在啊！"],["我...我也是第一次看到！"],[function():void
                        {
                           NpcDialog.show(NPC.SHENMI_HEIYING,["你们在寻找伙伴吗？那就来第四领域找我吧！到时你们一定可以体验最美妙的死亡之旅！"],["什么，难道米咔在他手里！"],[function():void
                           {
                              NpcDialog.show(NPC.YOUNIKA,["可恶！你竟然向我挥拳，难道你忘记我是这里的掌管者吗？"],["恐怕你的时间已经不多了，尤尼卡！"],[function():void
                              {
                                 _map.conLevel["Stone"].gotoAndStop(2);
                                 AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.YOUNIKA,["这家伙的实力远远超出我的想象，如果想要称霸宇宙，必须要干掉他！"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.SHENMI_HEIYING,["尤尼卡，千万不要激怒我，否则我就送你去极乐世界做那里的掌管者！"],["还有你们，记得来第四领域找我！"],[function():void
                                       {
                                          NpcDialog.show(NPC.SHENMI_HEIYING,["记得叫上迈尔斯，否则你们就再也见不到你们的伙伴了！听清楚了吗？这是神的旨意！"],["你这家伙！！"],[function():void
                                          {
                                             AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
                                             {
                                                TasksManager.complete(TASK_ID,3,function(param1:Boolean = true):void
                                                {
                                                   if(param1)
                                                   {
                                                      initStep4();
                                                   }
                                                });
                                             });
                                          }]);
                                       }]);
                                    });
                                 });
                              }]);
                           }]);
                        }]);
                     });
                  }]);
               });
            }]);
         });
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(18);
         NpcDialog.show(NPC.YOUNIKA,["哼哼！现在知道恶魔星的恐怖了吧！胆小的话就快点离开这里吧！顺便告诉那个自称是我妹妹的人，少来这里烦我！"],["我们是不会放弃的！"],[function():void
         {
            NpcDialog.show(NPC.YOUNIKA,["哈哈，那么恶魔星欢迎你们的到来，我会在第八领域等待着你们的！"],["别让我失望哦！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,18,"mc",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["可恶，我们一定要想办法抵达第四领域，否则米咔机会有生命危险！"],["小息别冲动！"],[function():void
                  {
                     NpcDialog.show(NPC.KALULU,["别忘记，在抵达第四领域之前，还要经过第三领域呢！我们还是先回去准备一下吧！"],["是啊！队长，卡璐璐说的有道理啊！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["好吧！米咔，我一定会来拯救你的！你千万要坚持住啊！"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,19,"mc",function():void
                           {
                              NpcDialog.show(NPC.SEER,["尤尼卡，我在这里发誓，再过不久，恶魔星就会从这个宇宙中消失，你们这些邪恶的化身必定会变成宇宙的尘埃！"],["尤尼卡，期待我们的再次相遇吧！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1144_5"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,4,function(param1:Boolean = true):void
                                    {
                                       destroy();
                                    });
                                 });
                              }]);
                           });
                        });
                     }]);
                  }]);
               });
            }]);
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 750 && Boolean(_map.conLevel["task1144MC"]))
         {
            return _map.conLevel["task1144MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         _map.conLevel["ancientItem"].visible = false;
         _map.conLevel["ancientItem"].removeEventListener(MouseEvent.CLICK,onAncientItemClick);
         if(MapManager.currentMap.id == 750)
         {
            KTool.showMapAllPlayerAndMonster();
            if(taskMC)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
               DisplayUtil.removeForParent(taskMC);
            }
            _map = null;
         }
      }
   }
}
