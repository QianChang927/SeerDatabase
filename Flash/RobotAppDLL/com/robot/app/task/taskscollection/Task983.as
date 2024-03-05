package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
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
   
   public class Task983
   {
      
      private static const TASK_ID:uint = 983;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task983()
      {
         super();
      }
      
      public static function initForMap698(param1:BaseMapProcess) : void
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
      
      public static function initForMap717(param1:BaseMapProcess) : void
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
                  initStep1_717();
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
      
      public static function initForMap720(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            _map.animatorLevel["task983mc"].gotoAndStop(2);
         }
         else
         {
            _map.animatorLevel["task983mc"].gotoAndStop(1);
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               _map.animatorLevel["task983mc"].visible = false;
               ToolBarController.showOrHideAllUser(false);
               OgreController.isShow = false;
               MainManager.selfVisible = false;
               if(Boolean(param1[0]) && !param1[1])
               {
                  if(MapManager.prevMapID == 717)
                  {
                     initStep1_720();
                  }
                  else
                  {
                     destroy();
                  }
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  initStep2_720();
               }
               else if(Boolean(param1[3]) && !param1[4])
               {
                  _map.animatorLevel["task983mc"].gotoAndStop(2);
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
      
      public static function initForMap719(param1:BaseMapProcess) : void
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
               if(Boolean(param1[1]) && !param1[2])
               {
                  if(MapManager.prevMapID == 720)
                  {
                     initStep2_719();
                  }
                  else
                  {
                     destroy();
                  }
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  initStep3();
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
      
      private static function initStep1_717() : void
      {
         taskMC.gotoAndStop(1);
         taskMC.buttonMode = true;
         taskMC.addEventListener(MouseEvent.CLICK,onStepHandler_1_0);
      }
      
      private static function onStepHandler_1_0(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_1_0);
         taskMC.buttonMode = false;
         NpcDialog.show(NPC.XIAOBU,["赛小息，我发现了一件重大的事情，帕罗狄亚好像正在寻找着什么！我想一定和他的复仇有关！"],["真的吗？不过他在寻找什么呢？"],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["难道帕罗狄亚想寻找的东西是可以帮助它复仇龙族？？如果是这样，那我们必须要阻止它！"],["小布，你知道它的行踪吗？"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
               {
                  NpcDialog.show(NPC.SEER,["奇怪了，难道这棵大树中有什么玄机吗？大家还是小心为妙。真不知道帕罗狄亚还会有什么诡计！"],["进入大树！！"],[function():void
                  {
                     MapManager.changeMap(720);
                  }]);
               });
            }]);
         }]);
      }
      
      private static function initStep1_720() : void
      {
         taskMC.gotoAndStop(1);
         taskMC.buttonMode = true;
         taskMC.addEventListener(MouseEvent.CLICK,onStepHandler_1_1);
      }
      
      private static function onStepHandler_1_1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_1_1);
         taskMC.buttonMode = false;
         NpcDialog.show(NPC.SAIXIAOXI,["帕罗狄亚，清醒点吧！难道你真的想消灭龙族吗？你的复仇何时才是尽头？"],["又是你们！！！"],[function():void
         {
            NpcDialog.show(NPC.PALUODIYA,["你们是不会明白被灭族的痛苦和煎熬，你知道眼睁睁看着自己的同伴一个个的倒下是什么滋味吗？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["不可能，你一定搞错了，龙族是一个0xff0000稳健及温顺0xffffff著称的族群，怎么可能做出像你所说的事情呢！这不是真的！"],["哼哼，你们被骗了！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                  {
                     NpcDialog.show(NPC.XIAOBU,["不好，那不是传说中的0xff0000时之种0xffffff吗？据说这种奇异的花朵0xff0000每一千年0xffffff才会开放一次，并且具有穿越时空的能力！"],["一定要阻止它！"],[function():void
                     {
                        NpcDialog.show(NPC.PALUODIYA,["哈哈，已经来不及了！我这次一定要改变历史，正好把摩多和龙族守卫军一起干掉！"],["不可以！！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                           {
                              NpcDialog.show(NPC.HAMO_LEITE,["帕罗狄亚收手吧！现在就一个人，你一定不是我们的对手！我劝你还是收手吧！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.PALUODIYA,["哼，卑鄙的龙族，竟然还在这里假惺惺的说三道四，这次我要你们全部消失在宇宙中！"],["你…你想做什么！！！"],[function():void
                                 {
                                    TasksManager.complete(TASK_ID,1,function():void
                                    {
                                       initStep2_720();
                                    });
                                 }]);
                              });
                           });
                        }]);
                     }]);
                  });
               }]);
            });
         }]);
      }
      
      private static function initStep2_720() : void
      {
         AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
         {
            NpcDialog.show(NPC.XIAOBU,["哈莫，帕罗狄亚想利用时之种的能力回到千年之前的龙族鼎盛时期，它改变历史！！！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.XIAOBU,["决不能让他得逞，一旦帕罗狄亚改变历史，那么所有宇宙中的现有的事物都将消失，包括我们在内！"],["小息，我们一定要想办法才行！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                  {
                     NpcDialog.show(NPC.PALUODIYA,["鲁迪诺斯，证明你价值的时刻到了，希望你能我在面前彻底击败他们，啊哈哈！"],["主人，我是不会让你失望的！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["鲁迪诺斯，你难道真的像成为帕罗狄亚的傀儡吗？清醒点吧！你们的族人正在云霄星等待你的回归呢！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.PALUODIYA,["哼哼，你们就死心吧！鲁迪诺斯已经发誓跟随我了，再说它现在已经被我的念力所侵蚀，不可能再清醒过来了，哈哈！"],["你认为，我龙王子哈莫会胆怯吗？"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                              {
                                 NpcDialog.show(NPC.PALUODIYA,["我早就说过，现在的鲁迪诺斯已经不像之前的它了，放手干吧！一旦我用0xff0000石林天珠将时之种唤醒0xffffff，我就能穿越了！"],["什么！！石林天珠！！！"],[function():void
                                 {
                                    NpcDialog.show(NPC.PALUODIYA,["呵呵，你们中计了，上次掉路在雾气石林的天珠只是假象，我还不至于笨到将真正的天珠拱手相让，你们太幼稚了！"],["不好，一定要突破它的防御才行！"],[function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["哈莫雷特，鲁迪诺斯就交给你了，我们几个想办法阻止帕罗狄亚的诡计！一定不能让它回到过去！"],["恩恩，那我们开始战斗吧！"],[function():void
                                       {
                                          AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_983_2"),function():void
                                          {
                                             MapManager.changeMap(719);
                                          });
                                       }]);
                                    }]);
                                 }]);
                              });
                           }]);
                        });
                     }]);
                  });
               }]);
            });
         });
      }
      
      private static function initStep2_719() : void
      {
         taskMC.gotoAndStop(1);
         NpcDialog.show(NPC.SAIXIAOXI,["额…伙伴们你们还好吧！这里是哪里？？？？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.HAMO_LEITE,["什么！这不就是…这不是龙王圣殿吗？摩多…居然还在宝座上！！"],["这…"],[function():void
            {
               NpcDialog.show(NPC.SEER,["哈莫，难道你忘记了吗？我们这是在0xff0000一千年0xffffff之前的龙王圣殿，所以当时的摩多依然还活着啊！"],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
                  {
                     TasksManager.complete(TASK_ID,2,function():void
                     {
                        initStep3();
                     });
                  });
               });
            }]);
         });
      }
      
      private static function initStep3() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 20
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function initStep4() : void
      {
         AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
         {
            NpcDialog.show(NPC.PALUODIYA,["你们终于回来了，怎么样有没有看到龙族的精彩“表演”啊！是不是很深刻？"],["帕罗…一族，我代表龙族…"],[function():void
            {
               NpcDialog.show(NPC.PALUODIYA,["我不想听，你给我住口，对我而言只有将你们龙族全部消灭，才能解我灭族之仇，其他的我不想知道！"],["帕罗狄亚…"],[function():void
               {
                  NpcDialog.show(NPC.HAMO_LEITE,["如果可以我愿意一人承担，请不要伤及其他无辜龙族成员，可以吗？"],["哼哼，等着吧！龙王子！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                     {
                        NpcDialog.show(NPC.HAMO_LEITE,["这件事情我想一个人解决，小息你们千万不要插手，我不想再有其他人受到伤害！"],["不，哈莫雷特，我们不会坐视不理的！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["我们一定可以感化帕罗狄亚的，只要能解开它的心结，事情就会好转的！"],["没这么简单的！"],[function():void
                           {
                              NpcDialog.show(NPC.XIAOBU,["放心吧！龙族王子，我们一定会想到办法的！目前最大的问题就是寻找帕罗一族其他的生还者！这才是关键！"],["那我们分头去找吧！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.SEER,["帕罗狄亚，想不到你的身世居然如此悲哀，不过你放心，我们一定可以感化你，帮你找到其他帕罗一族的幸存者！"],["我们会努力的！"],[function():void
                                    {
                                       TasksManager.complete(TASK_ID,4,function():void
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
               }]);
            }]);
         });
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 719 || MapManager.currentMap.id == 717 || MapManager.currentMap.id == 720)
         {
            return _map.conLevel["task983mc"];
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
            if(MapManager.currentMap.id == 717)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_1_0);
            }
            else if(MapManager.currentMap.id == 720)
            {
               _map.animatorLevel["task983mc"].visible = true;
               taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_1_1);
            }
            DisplayUtil.removeForParent(taskMC);
         }
         _map = null;
      }
   }
}
