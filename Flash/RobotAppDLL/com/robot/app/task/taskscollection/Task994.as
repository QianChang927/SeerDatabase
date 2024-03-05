package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task994
   {
      
      private static const TASK_ID:uint = 994;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task994()
      {
         super();
      }
      
      public static function init698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(113);
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(113);
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
      
      public static function init721(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _map.animatorLevel["task994mc"].visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            _map.animatorLevel["task994mc"].gotoAndStop(2);
         }
         else
         {
            _map.animatorLevel["task994mc"].gotoAndStop(1);
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               ToolBarController.showOrHideAllUser(false);
               OgreController.isShow = false;
               MainManager.selfVisible = false;
               if(Boolean(param1[0]) && !param1[1])
               {
                  initStep1();
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  initStep2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  initStep3();
               }
               else if(Boolean(param1[3]) && !param1[4])
               {
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
      
      private static function initStep1() : void
      {
         taskMC.gotoAndStop(1);
         taskMC.buttonMode = true;
         taskMC.addEventListener(MouseEvent.CLICK,onStepHandler_1_0);
      }
      
      private static function onStepHandler_1_0(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 28
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function initStep2() : void
      {
         taskMC.gotoAndStop(8);
         NpcDialog.show(NPC.SAIXIAOXI,["不可能，如果真的是帕罗狄亚的爪牙，为什么还要救我呢？你用大脑好好想想嘛！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.XIAOWEIDIE,["大家别误会，我们是彩蝶一族，是守护上古龙殿的使者，也是守护星辰之柱的守卫，但是自从帕罗狄亚发现这里后…"],["什么！帕罗狄亚来过这里？"],[function():void
            {
               NpcDialog.show(NPC.XIAOWEIDIE,["是的，它不仅霸占了上古龙殿，还把龙殿改成了0xff0000帕罗神殿0xffffff，要是谁敢提起0xff0000“龙殿”0xffffff两字，小命不保！！"],["可恶的家伙，居然自立为王！！！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                  {
                     NpcDialog.show(NPC.XIAOWEIDIE,["既然你们已经来到这里，能想办法帮助我们吗？赶走那个可恶的家伙吧！求求你们了！"],["放心，我们不会坐视不理的！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["在这之前，你们能告诉我关于上古龙殿的传说吗？我们担心帕罗狄亚正在预谋一场巨大的灾难！"],["这个嘛！你们可以问问彩翼蝶！"],[function():void
                        {
                           NpcDialog.show(NPC.XIAOWEIDIE,["彩翼蝶是看守0xff0000星辰云柱0xffffff的守卫者，之前和帕罗狄亚也有过交手，上古龙殿的真实传说它最清楚了！"],["太好了，我们该怎么找到它呢？"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                              {
                                 NpcDialog.show(NPC.XIAOWEIDIE,["不过，你们一定要将这些云朵驱散才行，帕罗狄亚为了0xff0000禁锢彩翼蝶0xffffff，特意将星辰云柱用云朵遮盖了起来，你们快想想办法吧！"],["这点小事难不倒我们！"],[function():void
                                 {
                                    NpcDialog.show(NPC.SAIXIAOXI,["赛尔，相信这个你最在行了，行动吧！"],["恩恩，没问题！（点击云朵试试）"],[function():void
                                    {
                                       (taskMC["cloud1"] as MovieClip).gotoAndStop(2);
                                       (taskMC["cloud1"] as MovieClip).buttonMode = true;
                                       (taskMC["cloud1"] as MovieClip).addEventListener(MouseEvent.CLICK,onCloudHandler);
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
      }
      
      private static function onCloudHandler(param1:MouseEvent) : void
      {
         var nxt:uint = 0;
         var e:MouseEvent = param1;
         var mc:MovieClip = e.currentTarget as MovieClip;
         mc.buttonMode = false;
         mc.removeEventListener(MouseEvent.CLICK,onCloudHandler);
         nxt = uint(uint(mc.name.substr(5)) + 1);
         AnimateManager.playMcAnimate(mc,3,"mc",function():void
         {
            if(nxt >= 4)
            {
               taskMC.gotoAndStop(10);
               _map.animatorLevel["task994mc"].gotoAndStop(2);
               NpcDialog.show(NPC.SEER,["耶，成功了！星辰云柱终于露出真面目了！"],["呵呵，举手之劳而已啦！"],[function():void
               {
                  NpcDialog.show(NPC.XIAOWEIDIE,["真是太感谢你们了，云层之径有救了，上古龙殿的救世主来了！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                     {
                        NpcDialog.show(NPC.XIAOWEIDIE,["彩翼蝶，这些勇敢的战士是来拯救我们的，他们想知道关于上古龙殿的传说！"],["恩，这可能就是缘分吧！"],[function():void
                        {
                           NpcDialog.show(NPC.CAIYIDIE,["上古龙殿被誉为0xff0000龙族禁地0xffffff，只有德高望重的龙族首领才能进入，在上古龙殿中一直封存着一股神秘的力量，据说叫0xff0000龙族之印0xffffff！！"],["龙族之印？"],[function():void
                           {
                              NpcDialog.show(NPC.CAIYIDIE,["是的，据说如果能和0xff0000龙族之心0xffffff相结合，实力将会超乎想象！不久前帕罗狄亚来到了这里，看的出它的野心和心中的仇恨！！"],["那天…"],[function():void
                              {
                                 CartoonManager.play(ClientConfig.getFullMovie("task_994_cartoon"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                                    {
                                       if(param1)
                                       {
                                          initStep3();
                                       }
                                    });
                                 });
                              }]);
                           }]);
                        }]);
                     });
                  });
               }]);
            }
            else
            {
               (taskMC["cloud" + nxt] as MovieClip).gotoAndStop(2);
               (taskMC["cloud" + nxt] as MovieClip).buttonMode = true;
               (taskMC["cloud" + nxt] as MovieClip).addEventListener(MouseEvent.CLICK,onCloudHandler);
            }
         });
      }
      
      private static function initStep3() : void
      {
         _map.animatorLevel["task994mc"].gotoAndStop(2);
         taskMC.gotoAndStop(11);
         NpcDialog.show(NPC.CAIYIDIE,["事情就是这样，所以我相信帕罗狄亚一定是为了获取0xff0000龙族之印0xffffff而来，你们必须阻止它！顺便保护好这颗0xff0000上古天珠0xffffff！"],["恩，怪不得，它拿走了小布的龙族之心！"],[function():void
         {
            NpcDialog.show(NPC.CAIYIDIE,["什么！帕罗狄亚居然已经拿到了龙族之心？这下可完了，难道它的复仇真的要成功了吗？"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
               {
                  NpcDialog.show(NPC.PALUODIYA,["你们太多事了，我不会再失手了，今天在场的全部都要死！我不会放过你们任何一个，等解决了你们我再去挑战龙族！"],["帕罗狄亚，复仇真的这么重要吗？"],[function():void
                  {
                     NpcDialog.show(NPC.PALUODIYA,["别和我啰嗦！我是帕罗狄亚，消灭龙族是我一生的志愿，我要让他们也尝尝这种孤独的滋味！"],["我们错了…"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                        {
                           NpcDialog.show(NPC.PALUODIYA,["哼哼，难道就一句你们错了，就可以弥补一切吗？休想！！我要的不是道歉，而是要你们血债血偿！！！"],["如果…"],[function():void
                           {
                              NpcDialog.show(NPC.HAMO_LEITE,["如果可以，那就用我的生命来弥补之前龙族犯下的罪行吧！请别伤害其他无辜的龙族成员！！"],["哼哼，龙王子你这是想赎罪吗？"],[function():void
                              {
                                 NpcDialog.show(NPC.HAMO_LEITE,["赎罪也好，弥补也好！我只想你能回归龙族的行列，你能明白吗？"],["哈哈，回归，我不稀罕，接招吧！"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_994_2"),function():void
                                    {
                                       NpcDialog.show(NPC.HAMO_LEITE,["怎么样？帕罗狄亚有没有觉得好受点，如果你觉得不够，那我们再战三百回合！"],["你…别以为这样就能改变我的计划！"],[function():void
                                       {
                                          NpcDialog.show(NPC.PALUODIYA,["我的计划正在顺利的进行着，我的计划不单单是要消灭龙族，还要成为邪恶四灵之首！"],["你们等着吧！帕罗一族将会再次崛起！"],[function():void
                                          {
                                             AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                                             {
                                                NpcDialog.show(NPC.PALUODIYA,["你…你什么时候出现的，居然敢监视我？我可不是巨石灵王，帕罗一族是不会轻易屈服的！"],["那就来试试吧！"],[function():void
                                                {
                                                   AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_994_3"),function():void
                                                   {
                                                      NpcDialog.show(NPC.SEER,["那家伙是谁？难道也是邪恶四灵中的一员？？看上去好强大啊！"],["没错，就是她！"],[function():void
                                                      {
                                                         TasksManager.complete(TASK_ID,3,function(param1:Boolean):void
                                                         {
                                                            if(param1)
                                                            {
                                                               initStep4();
                                                            }
                                                         });
                                                      }]);
                                                   });
                                                }]);
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
            });
         }]);
      }
      
      private static function initStep4() : void
      {
         _map.animatorLevel["task994mc"].gotoAndStop(2);
         taskMC.gotoAndStop(14);
         NpcDialog.show(NPC.PALUODIYA,["不过，我总有一天会收拾它们的！"],["帕罗狄亚…"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
            {
               NpcDialog.show(NPC.PALUODIYA,["龙王子，你的诚意我能感受到，但是我的身份已经不能再回到龙族了，你们走吧！我不想再见到你们！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["帕罗狄亚，交出小布的龙族之心，如果你还有良知的话！"],["小鬼少在这里命令我！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
                     {
                        NpcDialog.show(NPC.PALUODIYA,["有本事就来拿吧！我在帕罗神殿里等着你们的挑战，啊哈哈！"],["别吓的不敢来哦！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["你别走，我这就来挑战你！"],["等等，小息！先救哈莫要紧！！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
                              {
                                 NpcDialog.show(NPC.KALULU,["赛小息，先别想起他事情了，想办法吧哈莫送回去再说！大家一起帮忙！"],["恩，我知道了！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["帕罗神殿，帕罗狄亚！最后的胜利一定属于我们，我会让上古龙殿恢复往日的风采！！"],["帕罗狄亚，期待我们的对决吧！"],[function():void
                                       {
                                          TasksManager.complete(TASK_ID,4,function(param1:Boolean):void
                                          {
                                             if(param1)
                                             {
                                                destroy();
                                             }
                                          });
                                       }]);
                                    });
                                 }]);
                              });
                           }]);
                        }]);
                     });
                  }]);
               });
            });
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 721)
         {
            return _map.conLevel["task994mc"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:MovieClip = null;
         if(!_map)
         {
            return;
         }
         OgreController.isShow = true;
         MainManager.selfVisible = true;
         ToolBarController.showOrHideAllUser(true);
         if(taskMC)
         {
            if(MapManager.currentMap.id == 721)
            {
               _map.animatorLevel["task994mc"].visible = true;
               taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_1_0);
               _loc1_ = 1;
               while(_loc1_ <= 3)
               {
                  _loc2_ = taskMC.getChildByName("cloud" + _loc1_) as MovieClip;
                  if(_loc2_)
                  {
                     _loc2_.removeEventListener(MouseEvent.CLICK,onCloudHandler);
                  }
                  _loc1_++;
               }
            }
            DisplayUtil.removeForParent(taskMC);
         }
         _map = null;
      }
   }
}
