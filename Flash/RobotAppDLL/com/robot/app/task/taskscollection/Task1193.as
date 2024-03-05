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
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1193
   {
      
      public static const TASK_ID:uint = 1193;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1193()
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
      
      public static function initTaskFor770(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskMC.buttonMode = true;
                  KTool.hideMapAllPlayerAndMonster();
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
         NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，这就是第七领域！看上去还是一副冰天雪地的样子，大家小心为妙，这次我们不能再失败了！"],["恩，放心吧！队长！"],[function():void
         {
            NpcDialog.show(NPC.KALULU,["小息，这里看上去好美丽啊！你看这些水晶多漂亮啊！还有那里闪闪发光的都是什么啊！"],["等等，卡璐璐！"],[function():void
            {
               NpcDialog.show(NPC.ATIEDA,["我感觉到一股刺骨的寒意，这里一定有古怪，还有千万不要去碰那些闪光的水晶，说不定里面有敌人呢？"],["是吗？我怎么不觉得！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                  {
                     NpcDialog.show(NPC.ATIEDA,["我先去看看那些发光的水晶，你们先在这里等着，等安全了你们再过来！"],["这家伙又要逞强了！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["阿铁打，你可要小心，注意安全啊！"],["烦死了，我知道了！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                           {
                              NpcDialog.show(NPC.KALULU,["呵呵呵，阿铁打，瞧你害怕的样子太有意思了！"],["什么，你居然搞恶作剧！"],[function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["好了啦！现在不是玩的时候，相信这里一定会有第七领域的将领存在，说不定尤尼卡也会再次出现！"],["大家打起精神！"],[function():void
                                 {
                                    NpcDialog.show(NPC.ATIEDA,["但是我总感觉这些奇异的闪光水晶中一定有着什么！我想把它们劈开看看！"],["千万别冲动！！！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.SEER,["队长！快看，米咔好像发现了什么，那堆闪光的水晶果然有问题！"],["快！我们去看看！"],[function():void
                                          {
                                             AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                             {
                                                NpcDialog.show(NPC.SAIXIAOXI,["看来这里的确有问题，大家快看里面好像有什么东西！"],["真的吗？让我看看！"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                                                   {
                                                      _map.conLevel["ice"].gotoAndStop(2);
                                                      NpcDialog.show(NPC.SAIXIAOXI,["难道这就是第七领域的守护将领？简直太不可思议了，居然隐藏在水晶石中！"],["你们终于来了！！"],[function():void
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
                                                      }]);
                                                   });
                                                }]);
                                             });
                                          }]);
                                       });
                                    }]);
                                 }]);
                              }]);
                           });
                        }]);
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      private static function initStep2() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 16
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(13);
         NpcDialog.show(NPC.YOUNIKA,["什么！居然是你，布莱克！难道上次雷伊受伤的样子你忘记了吗？"],["哼哼，尤尼卡，你别太得意！"],[function():void
         {
            NpcDialog.show(NPC.BULAIKELANTE,["上次雷伊受伤是为了我们大家，今天就是我布莱克向你们讨教的时候了，对于像你这样的对手绝对不能心慈手软！"],["哈哈，你先战胜阿克妮丝再说吧！"],[function():void
            {
               NpcDialog.show(NPC.BULAIKELANTE,["对了，尤尼卡！忘记告诉你雷伊的伤势已经痊愈，而且雷神会比之前你看到的更强，因为他拥有雷光之翼了！"],["什么！雷光之翼？"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                  {
                     NpcDialog.show(NPC.YOUNIKA,["不...这不可能！受到恶灵兽和自己雷神天明闪的攻击居然还能迅速的恢复！难道雷伊真的是宇宙的救世主吗？"],["尤尼卡，你胆怯了！"],[function():void
                     {
                        NpcDialog.show(NPC.YOUNIKA,["不可能，我身为恶魔星的掌控者—恶灵兽的得力助手，我怎么可能胆怯，阿克妮丝快干掉布莱克！"],["来吧！我布莱克奉陪到底！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["布莱克，小心！阿克妮丝不好对付，它一定和阿克西亚有着什么关系！"],["放心吧！我还有兰特！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
                              {
                                 NpcDialog.show(NPC.AKENISI,["我是冰妖王，拥有冰系中最强的技能！阿克西亚，哼哼！愚蠢的族群！"],["来吧！布莱克！"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1193_4"),function():void
                                    {
                                       TasksManager.complete(TASK_ID,3,function(param1:Boolean = true):void
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
                                 }]);
                              });
                           }]);
                        }]);
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(15);
         NpcDialog.show(NPC.AKENISI,["布莱克，今天我们就先到这里，作为我的对手，你已经尽力了！下次再交手，我想我们一定可以分出胜负的！"],["布莱克，我们在第八领域等着你们！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["看来，恶魔星的守护将领的确不好对付，要不是兰特的及时帮助，我想我不一定是阿克妮丝的对手！"],["布莱克，接下来该怎么办呢？"],[function():void
               {
                  NpcDialog.show(NPC.BULAIKE_NEW,["关于这件事情，我要去雷神秘境汇报一下，接下来的圣战可谓非同小可！"],["咱们后会有期！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["赛尔，我们快看看卡璐璐他们怎么样了！"],["恩恩..."],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，你们没事就好！现在我们先回飞船吧！船长一定在等待我们的消息！"],["你们还走的动吗？"],[function():void
                              {
                                 NpcDialog.show(NPC.ATIEDA,["没问题，这些伤势还难不倒我们，我们立刻启程吧！"],["恩，赛尔，你和我们一起回去吧！"],[function():void
                                 {
                                    NpcDialog.show(NPC.SEER,["不，我还要前往雷神秘境，我想雷伊正需要我们每一位赛尔的帮助，你们先回吧！"],["恩恩，稍后我们也会赶来的！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,18,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.SEER,["圣战迫在眉睫，我还是先去雷神秘境帮助雷伊恢复元气吧！"],["大家记得一起来哦！"],[function():void
                                          {
                                             TasksManager.complete(TASK_ID,4,function(param1:Boolean = true):void
                                             {
                                                destroy();
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
               }]);
            });
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 770 && Boolean(_map.conLevel["task1193MC"]))
         {
            return _map.conLevel["task1193MC"];
         }
         return null;
      }
      
      public static function unable(param1:BaseMapProcess) : void
      {
         param1.conLevel["task1193MC"].visible = false;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 770)
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
