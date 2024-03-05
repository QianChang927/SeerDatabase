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
   
   public class Task947
   {
      
      private static const TASK_ID:uint = 947;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task947()
      {
         super();
      }
      
      public static function initForMap698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
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
      
      public static function initForMap348(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
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
      
      public static function initForMap712(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _map.animatorLevel["task947mc"].visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               ToolBarController.showOrHideAllUser(false);
               OgreController.isShow = false;
               MainManager.selfVisible = false;
               if(Boolean(param1[1]) && !param1[2])
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
         _map.conLevel["hamo"].visible = false;
         _map.conLevel["taxiya"].visible = false;
         _map.conLevel["saiweier"].visible = false;
         _map.conLevel["takelin"].visible = false;
         taskMC.gotoAndStop(1);
         taskMC.buttonMode = true;
         taskMC.addEventListener(MouseEvent.CLICK,onStepHandler_1_0);
      }
      
      private static function onStepHandler_1_0(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_1_0);
         taskMC.buttonMode = false;
         NpcDialog.show(NPC.SAIXIAOXI,["终于来到龙王圣殿了，传说中龙王子和龙族三巨头的最强领域，让我们找龙王子问个清楚吧！"],null,null,false,function():void
         {
            AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
            {
               NpcDialog.show(NPC.HAMO_LEITE,["这些都是我的朋友，三巨头你们退下！"],["是！龙王子殿下！"],[function():void
               {
                  NpcDialog.show(NPC.KALULU,["哇！果然是龙王子，从它的身上我能感受到一种尊贵的气息以及王者风范！简直让人太激动了！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.HAMO_LEITE,["对了，伙伴们，你们来找我一定有事吧！我能帮到你们吗？"],["哈莫，关于小布你知道多少呢？"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                        {
                           NpcDialog.show(NPC.HAMO_LEITE,["我敢肯定小布是龙族的一员，但是为什么它会变成现在这样我也不是很清楚，不过我知道一个很古老的龙族传说！"],["什么传说，快说啊！"],[function():void
                           {
                              NpcDialog.show(NPC.HAMO_LEITE,["在我很小的时候，记得老龙王摩多手下有0xff0000一群骁勇善战的龙族守卫军0xffffff，它们的责任就是保护整个龙族的安危！"],["等等，再让我好好回忆一下！"],[function():void
                              {
                                 CartoonManager.play(ClientConfig.getFullMovie("task_947_cartoon"),function():void
                                 {
                                    NpcDialog.show(NPC.SAIXIAOXI,["哇！龙族守卫军，它们一定很厉害，但是为什么会全部消失了呢？难道是吃饭去了？睡觉去了？"],["哈哈！一定是这样的！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.SAIXIAOXI,["哎哟！很疼唉…我也只是随便说说啦！想要知道真相，我看一定要找到小布问个清楚！顺便把龙族之心夺回来！"],["恩恩，这是个好主意！"],[function():void
                                          {
                                             NpcDialog.show(NPC.SAIXIAOXI,["什么像！就是好主意，也是我们现在唯一的线索，我看0xff0000帕罗狄亚0xffffff这个家伙不简单，它背后一定还有不可告人的秘密！"],null,null,false,function():void
                                             {
                                                NpcDialog.show(NPC.HAMO_LEITE,["先别争，记住我的话，千万不要相信自己眼前的一切，就算是亲眼见证的事实也不一定是真实的，特别在艾伦星！！！"],["恩恩，明白了，伙伴们出发！"],[function():void
                                                {
                                                   TasksManager.complete(TASK_ID,1,function():void
                                                   {
                                                      MapManager.changeMap(712);
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
                  });
               }]);
            });
         });
      }
      
      private static function initStep2() : void
      {
         taskMC.gotoAndStop(1);
         taskMC.buttonMode = true;
         taskMC.addEventListener(MouseEvent.CLICK,onStepHandler_2_0);
      }
      
      private static function onStepHandler_2_0(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_2_0);
         taskMC.buttonMode = false;
         NpcDialog.show(NPC.SAIXIAOXI,["大家小心点，我感觉到这里很不寻常，小心中了埋伏！"],["恩恩，大家注意点！"],[function():void
         {
            NpcDialog.show(NPC.ATIEDA,["我感到一股杀气，而且这股杀气离我们越来越近了！看来我们的0xff0000“老朋友”0xffffff就要出现了！"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
               {
                  NpcDialog.show(NPC.KALULU,["快看，那不是小布吗？它看上去好像不对劲啊！我们还是快过去看看吧！"],["恩恩，我们走！"],[function():void
                  {
                     NpcDialog.show(NPC.ATIEDA,["等等，你们难道忘记龙王子说的话了吗？不要相信眼前的东西，那些可能是假象！"],["不行，难道你要我们见死不救吗？"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                        {
                           NpcDialog.show(NPC.KALULU,["小息带上米咔，" + MainManager.actorInfo.formatNick + "我们去把小布抬回来吧！别管那个冷血动物，哼！！！"],null,null,false,function():void
                           {
                              taskMC.gotoAndStop(3);
                              taskMC.buttonMode = true;
                              taskMC.addEventListener(MouseEvent.CLICK,onStepHandler_2_1);
                           });
                        });
                     }]);
                  }]);
               });
            });
         }]);
      }
      
      private static function onStepHandler_2_1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_2_1);
         taskMC.buttonMode = false;
         AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["小布，你没事吧！我们不是叫你别乱跑吗？万一被帕罗狄亚抓回去怎么办！"],["快和我们回去吧！"],[function():void
            {
               NpcDialog.show(NPC.XIAOBU,["你们自己回去吧！我决定离开你们了，我不需要你们的帮助！有些事情我自己会搞定的！"],["嗯？？小布你？？？"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                  {
                     NpcDialog.show(NPC.PALUODIYA,["小布，干的漂亮，这次我要替你记上一功，哈哈哈！你们这群小鬼，我要拿你们的生命来0xff0000祭奠巨石灵王0xffffff！"],["我…"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                        {
                           NpcDialog.show(NPC.ATIEDA,["不行，我是不会走的，我一定要带你们一起回去！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.XIAOBU,["快利用巨型水晶照射石壁，帕罗狄亚在黑暗中，最怕刺眼的光芒，快逼它现出原形！"],["哼，我不会再相信你了！"],[function():void
                              {
                                 NpcDialog.show(NPC.SEER,["阿铁打，听小布的吧！除了这个我们已经没有任何办法了！"],["可是…"],[function():void
                                 {
                                    TasksManager.complete(TASK_ID,2,function():void
                                    {
                                       initStep3();
                                    });
                                 }]);
                              }]);
                           });
                        });
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      private static function initStep3() : void
      {
         AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
         {
            NpcDialog.show(NPC.ATIEDA,["好吧！那我且听你一回，要是你再敢耍什么诡计，我就用斩月双刀送你上西天！"],["对啊！阿铁打快利用斩月双刀反射阳光！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
               {
                  NpcDialog.show(NPC.SEER,["不行，再这样拖下去赛小息他们一定会有生命危险的！怎么会没用呢？"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                     {
                        NpcDialog.show(NPC.SEER,["先别说这个了，一定是有什么事我们没有想到的！让我静下心来好好想想！"],["对啊！让我转动水晶石试试！"],[function():void
                        {
                           taskMC.gotoAndStop(9);
                           taskMC.buttonMode = true;
                           taskMC.addEventListener(MouseEvent.CLICK,onStepHandler_3_0);
                        }]);
                     });
                  });
               });
            }]);
         });
      }
      
      private static function onStepHandler_3_0(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_3_0);
         taskMC.buttonMode = false;
         AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
         {
            NpcDialog.show(NPC.SEER,["太好了，果然有效，看你还往哪里逃！"],["继续转动水晶石！"],[function():void
            {
               taskMC.gotoAndStop(10);
               taskMC.buttonMode = true;
               taskMC.addEventListener(MouseEvent.CLICK,onStepHandler_3_1);
            }]);
         });
      }
      
      private static function onStepHandler_3_1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_3_1);
         taskMC.buttonMode = false;
         AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
         {
            NpcDialog.show(NPC.PALUODIYA,["哼！别以为这样就能赢得了我，在这里你们将遭受史无前例的遭难！出来吧！鲁迪诺斯我最勇猛的战士！"],["什么，鲁迪诺斯！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_947_2"),function():void
               {
                  TasksManager.complete(TASK_ID,3,function():void
                  {
                     initStep4();
                  });
               });
            }]);
         });
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(11);
         NpcDialog.show(NPC.PALUODIYA,["小布，你怎么还不动手，难道你不想要你的龙族之心吗？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["小布，难道你忘记我们之间的友情了吗？你真想和我们对立吗？你可是0xff0000龙族守卫军的后代0xffffff啊！"],["没用的，你们等死吧！"],[function():void
            {
               NpcDialog.show(NPC.LUDINUOSI,["主人，不趁这次机会消灭了它们，今后可是祸害啊！"],["哈哈，我帕罗狄亚会怕这些小鬼？"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
                  {
                     NpcDialog.show(NPC.PALUODIYA,["小布，你要走是吧！那我这就把龙族之心还给你，不过你的伙伴就必须死！！！！"],null,null,false,function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_947_3"),function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                           {
                              NpcDialog.show(NPC.KALULU,["小息，你终于醒了，没事吧！"],["小布是不是真的走了！"],[function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["你们都走吧！让我好好静静…"],["小息你…"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.KALULU,[MainManager.actorInfo.formatNick + "，我和阿铁打先去把赛小息追回来，我们等等在放映厅汇合哦，记得来找我们啊！"],["恩恩，你们先去吧！我稍后就到！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.SEER,["小布，我们一定会把你再抢回来的，龙族守卫军还要靠你继承下去呢！"],["我们很快就到，小布！"],[function():void
                                             {
                                                TasksManager.complete(TASK_ID,4,function():void
                                                {
                                                   destroy();
                                                });
                                             }]);
                                          });
                                       }]);
                                    });
                                 }]);
                              }]);
                           });
                        });
                     });
                  });
               }]);
            }]);
         });
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 712)
         {
            return _map.conLevel["task947mc"];
         }
         if(MapManager.currentMap.id == 348)
         {
            return _map.conLevel["task947mc"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         OgreController.isShow = true;
         MainManager.selfVisible = true;
         ToolBarController.showOrHideAllUser(true);
         if(taskMC)
         {
            if(MapManager.currentMap.id == 348)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_1_0);
               _map.conLevel["hamo"].visible = true;
               _map.conLevel["taxiya"].visible = true;
               _map.conLevel["saiweier"].visible = true;
               _map.conLevel["takelin"].visible = true;
            }
            else if(MapManager.currentMap.id == 712)
            {
               _map.animatorLevel["task947mc"].visible = true;
               taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_2_0);
               taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_2_1);
               taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_3_0);
               taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_3_1);
            }
            DisplayUtil.removeForParent(taskMC);
         }
         _map = null;
      }
   }
}
