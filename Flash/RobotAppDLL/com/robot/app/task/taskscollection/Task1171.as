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
   
   public class Task1171
   {
      
      public static const TASK_ID:uint = 1171;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1171()
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
      
      public static function initTaskFor768(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            _map.conLevel["iceBtn"].visible = false;
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  touchArea.buttonMode = true;
                  touchArea.addEventListener(MouseEvent.CLICK,initStep1);
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
         touchArea.removeEventListener(MouseEvent.CLICK,initStep1);
         touchArea.buttonMode = false;
         taskMC.gotoAndStop(2);
         NpcDialog.show(NPC.SAIXIAOXI,["终于到了，第六领域！我们已经离第八领域越来越近了，大家小心，这里一定会有埋伏的！"],["恩恩，大家注意周围的环境！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
            {
               NpcDialog.show(NPC.KALULU,["不好，大家快看，那不是尤尼卡嘛！怎么会出现这么多呢？真是奇怪！"],["卡璐璐，小心！我来保护你！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                  {
                     NpcDialog.show(NPC.KALULU,["阿铁打，你别忘记我也是探险小队的成员哦！你还是先照顾好自己吧！"],["你们快看..."],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["这些冰块中的尤尼卡，仿佛都像沉睡了一般，难道这些都是替身？？"],["不会吧！哪来这么多啊！"],[function():void
                        {
                           NpcDialog.show(NPC.ATIEDA,["这还不简单，让我的斩月双刀试试就知道哪个是真的了！"],["阿铁打，你确定这样做有效吗？"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                              {
                                 NpcDialog.show(NPC.KALULU,["快看，这些冰块好像有反应了！阿铁打，这次你终于有贡献了！"],["哈哈，我早说过，会有效的！"],[function():void
                                 {
                                    NpcDialog.show(NPC.SAIXIAOXI,["但是奇怪的是，为什么我们没有看到第六领域的将领呢？这个太不正常了！"],["是哦！怎么到现在还不出现呢？"],[function():void
                                    {
                                       NpcDialog.show(NPC.KALULU,["对了，会不会就在这些冰块中呢？还是它在某个地方监视着我们呢？"],["让我们先看看再说！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.SAIXIAOXI,["快看，那不是格林和布鲁吗？他们居然被困在这里！我们一定要想办拯救他们！"],["恩恩，快想想办法！"],[function():void
                                             {
                                                NpcDialog.show(NPC.YOUNIKA,["你们竟然打扰我的苏醒？这里不是你们该来的地方，识相的立刻原路返回！"],["什么，那是谁在说话，不像是尤尼卡的口气啊！"],[function():void
                                                {
                                                   NpcDialog.show(NPC.SAIXIAOXI,["一定是守卫这里的将领，恐怕它马上就要现身了，伙伴们，咱们要做好部署，迎接它的挑战！"],["加油！伙伴们！"],[function():void
                                                   {
                                                      AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                                                      {
                                                         NpcDialog.show(NPC.YOUNIKA,["难道你们看到了什么？不可能，这个秘密你们不可能知道！"],["尤尼卡，什么秘密！"],[function():void
                                                         {
                                                            NpcDialog.show(NPC.YOUNIKA,["废话少说，既然被你们找到这里，那还是先想想怎么拯救你的朋友们吧！啊哈哈哈！"],["可恶的家伙！"],[function():void
                                                            {
                                                               Step1BreakPoint();
                                                            }]);
                                                         }]);
                                                      });
                                                   }]);
                                                }]);
                                             }]);
                                          });
                                       }]);
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
      }
      
      public static function Step1BreakPoint() : void
      {
         NpcDialog.show(NPC.SEER,["队长，让我来吧！这些诡计我绝对可以应付的！尤尼卡，你就等着吧！"],["点击附近的冰块！"],[function():void
         {
            CommonUI.addYellowArrow(_map.topLevel,200,200,315);
            ToolTipManager.add(_map.conLevel["iceBtn"],"点击冰块");
            _map.conLevel["iceBtn"].visible = true;
            _map.conLevel["iceBtn"].buttonMode = true;
            _map.conLevel["iceBtn"].addEventListener(MouseEvent.CLICK,onIceClick);
         }]);
      }
      
      private static function onIceClick(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         ToolTipManager.remove(_map.conLevel["iceBtn"]);
         _map.conLevel["iceBtn"].removeEventListener(MouseEvent.CLICK,onIceClick);
         ModuleManager.showModule(ClientConfig.getAppModule("SaveBuluAndGeLinPanel"),"正在加载解救伙伴面板",null);
      }
      
      public static function initStep1GoOn() : void
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
      }
      
      private static function initStep2() : void
      {
         taskMC.gotoAndStop(7);
         NpcDialog.show(NPC.SEER,["太好了，布鲁和格林终于得救了，队长，你们快来看啊！"],["真的吗？"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["看上去，他们的状态不怎么样啊！必须先把他们带回赛尔号才行！卡璐璐、阿铁打你们先回去，这里有我！"],["不行，我们走了你怎么办！"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["你们听我说，如果不这样，布鲁格林会有生命危险，再说这里不是还有我和赛尔吗？放心吧！快走！"],["可是..."],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["卡璐璐、阿铁打你们再不走就来不及了，这是命令！你们听明白了吗？"],["好吧！那你们可要小心啊！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["好了，米咔，还有赛尔！接下来是考验我们的时刻了！"],["尤尼卡，出招吧！"],[function():void
                              {
                                 NpcDialog.show(NPC.YOUNIKA,["既然你们想早点结束自己的生命，那我送你们一程，想必你们一定很想知道那个秘密吧！哈哈！"],["什么，尤尼卡他想做什么？"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1171_3"),function():void
                                    {
                                       taskMC.gotoAndStop(10);
                                       NpcDialog.show(NPC.SAIXIAOXI,["那是什么东西，怎么会从尤尼卡的体内出现？难道尤尼卡说的秘密和它有关？"],["太可怕了！"],[function():void
                                       {
                                          NpcDialog.show(NPC.YOUNIKA,["哈哈哈，很可惜，当你们看到这个秘密的同时也是你们离开这个世界的时候，快参见恶魔星的霸主恶灵兽吧！"],["什么！恶灵兽？"],[function():void
                                          {
                                             NpcDialog.show(NPC.ELINGSHOU,["尤尼卡，看来你有必要介绍一下关于我的传说，我可不想让我的对手不明不白的牺牲！"],["遵命！主人！"],[function():void
                                             {
                                                CartoonManager.play(ClientConfig.getFullMovie("task1171_0"),function():void
                                                {
                                                   NpcDialog.show(NPC.SAIXIAOXI,["什么，如果这是真的，那么恶灵兽是在利用尤尼卡的身体准备它的第二次复苏，而尤尼卡也想利用恶灵兽的力量称霸宇宙！"],["怎么会这样！"],[function():void
                                                   {
                                                      NpcDialog.show(NPC.YOUNIKA,["可惜...可惜...既然你们已经知道了恶灵兽的秘密，那么接下来就是死亡的时刻了！"],["再见了，朋友们！"],[function():void
                                                      {
                                                         AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
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
                                                });
                                             }]);
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
            });
         }]);
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(11);
         NpcDialog.show(NPC.ELINGSHOU,["尤尼卡，到目前为止，你的发挥让我非常失望，难道你还要我亲自动手吗？"],["放心吧！主人，我会处理好的！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
            {
               NpcDialog.show(NPC.YOUNIKA,["战神联盟，又是你们！多管闲事的家伙！今天我要彻底击败你们！"],["尤尼卡，你口气不小！"],[function():void
               {
                  NpcDialog.show(NPC.LEIYI,["今天我们战神联盟也要在这里击败你，不管你有怎样的帮手，战神联盟的目的只有一个，消灭所有邪恶势力！"],["那就开始吧！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1171_4"),function():void
                     {
                        NpcDialog.show(NPC.YOUNIKA,["什么！雷伊居然攻击了自己，太不可思议了！"],["快去看看雷神怎么样了！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                           {
                              NpcDialog.show(NPC.ELINGSHOU,["雷伊，想不到你有如此强大的意志力，看来我的元气还没有全部恢复，尤尼卡这里就交给你了！"],["我还需要继续沉睡一段时间！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.YOUNIKA,["哼哼，就连雷伊都不是恶灵兽的对手，看你们如何与我为敌，下次见面的时候就是揭晓答案的时刻！"],["啊哈哈哈！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
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
                           });
                        }]);
                     });
                  }]);
               }]);
            });
         }]);
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(15);
         NpcDialog.show(NPC.SAIXIAOXI,["可恶的尤尼卡，居然体内还有一个恶灵兽在，这次的圣战看来难度不小啊！"],["不可能，雷神在...我们一定会胜利的！"],[function():void
         {
            NpcDialog.show(NPC.BULAIKE_NEW,["我们还是先看看雷伊再说吧！这次一定伤的很重！"],["恩恩..."],[function():void
            {
               NpcDialog.show(NPC.LEIYI,["布莱克，接下来你就是战神联盟的领袖了，好好领导他们啊！我看我该去0xff0000雷神秘境0xffffff了！"],["什么...我？？？"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
                  {
                     NpcDialog.show(NPC.LEIYI,["放心吧!我一定不会错过圣战的，伙伴们，送我去雷神秘境吧！只有在那里我才能迅速恢复！"],["恩恩，我们这就走！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["连雷神都被击败了，不过这只是暂时的，我立刻回去汇报此事，赛尔，你立刻前往0xff0000雷神秘境0xffffff，有什么事情立刻回来报告！"],["恩恩，放心吧！队长！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
                              {
                                 NpcDialog.show(NPC.SEER,["雷神！战神联盟！在圣战到来的那天爆发你们最强的实力吧！相信最后的胜利属于我们！属于正义！"],["8月31日，圣战开启！！"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1171_5"),function():void
                                    {
                                       TasksManager.complete(TASK_ID,4,function(param1:Boolean = true):void
                                       {
                                          destroy();
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
         }]);
      }
      
      private static function get touchArea() : MovieClip
      {
         if(MapManager.currentMap.id == 768 && Boolean(_map.conLevel["touchMC"]))
         {
            return _map.conLevel["touchMC"];
         }
         return null;
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 768 && Boolean(_map.conLevel["task1171MC"]))
         {
            return _map.conLevel["task1171MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 768)
         {
            KTool.showMapAllPlayerAndMonster();
            if(taskMC)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
               _map.conLevel["iceBtn"].removeEventListener(MouseEvent.CLICK,onIceClick);
               DisplayUtil.removeForParent(touchArea);
               DisplayUtil.removeForParent(taskMC);
               DisplayUtil.removeForParent(_map.conLevel["iceBtn"]);
            }
            _map = null;
         }
      }
   }
}
