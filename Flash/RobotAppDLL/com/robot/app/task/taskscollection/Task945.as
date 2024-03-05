package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
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
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task945
   {
      
      private static const ID:uint = 945;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task945()
      {
         super();
      }
      
      public static function initForMap710(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         (_map.conLevel["task945Trigger_1"] as MovieClip).mouseEnabled = false;
         (_map.conLevel["task945Trigger_1"] as MovieClip).mouseChildren = false;
         (_map.conLevel["task945Trigger_2"] as MovieClip).mouseEnabled = false;
         (_map.conLevel["task945Trigger_2"] as MovieClip).mouseChildren = false;
         (_map.animatorLevel["shell"] as MovieClip).visible = false;
         if(TasksManager.getTaskStatus(ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(ID,function(param1:Array):void
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
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_1_0);
         taskMC.gotoAndStop(2);
         taskMC.buttonMode = false;
         NpcDialog.show(NPC.KALULU,["别碰我，我不是故意的，求求你放过我吧！呜呜呜…"],["卡璐璐，是我啊！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["别害怕，快告诉我这里发生什么事情了？大伙怎么会伤成这样？难道是0xff0000帕罗狄亚0xffffff又出现了？"],["不是…是…"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
               {
                  NpcDialog.show(NPC.SEER,["等等！那是什么，难道贝壳中有东西？让我先去看看是什么！"],["卡璐璐，你先休息一下！"],[function():void
                  {
                     CommonUI.addYellowArrow(_map.conLevel["task945Trigger_1"] as MovieClip);
                     (_map.conLevel["task945Trigger_1"] as MovieClip).buttonMode = true;
                     (_map.conLevel["task945Trigger_1"] as MovieClip).mouseEnabled = true;
                     (_map.conLevel["task945Trigger_1"] as MovieClip).mouseChildren = true;
                     (_map.conLevel["task945Trigger_1"] as MovieClip).addEventListener(MouseEvent.CLICK,onStepHandler_1_1);
                  }]);
               });
            }]);
         }]);
      }
      
      private static function onStepHandler_1_1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.removeYellowArrow(_map.conLevel["task945Trigger_1"] as MovieClip);
         (_map.conLevel["task945Trigger_1"] as MovieClip).buttonMode = false;
         (_map.conLevel["task945Trigger_1"] as MovieClip).mouseEnabled = false;
         (_map.conLevel["task945Trigger_1"] as MovieClip).mouseChildren = false;
         (_map.conLevel["task945Trigger_1"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStepHandler_1_1);
         NpcDialog.show(NPC.PAYANGDEBEIKE,["没有海藻休想叫我开口！不想你朋友有事的话，就去寻找海藻吧！"],["哇！贝壳居然会说话？"],[function():void
         {
            NpcDialog.show(NPC.KALULU,["那里面是小布，想办法救救它吧！"],["恩恩，我这就去找海藻！"],[function():void
            {
               NpcDialog.show(NPC.SEER,["贝壳说它喜欢吃海藻，但是海藻是生长在海洋里的生物啊！应该就在附近吧！这个不难…"],["仔细观察周围的植物！"],[function():void
               {
                  CommonUI.addYellowArrow(_map.conLevel["task945Trigger_2"] as MovieClip,-151,5);
                  CommonUI.addYellowArrow(_map.conLevel["task945Trigger_2"] as MovieClip,146,0);
                  (_map.conLevel["task945Trigger_2"] as MovieClip).buttonMode = true;
                  (_map.conLevel["task945Trigger_2"] as MovieClip).mouseEnabled = true;
                  (_map.conLevel["task945Trigger_2"] as MovieClip).mouseChildren = true;
                  (_map.conLevel["task945Trigger_2"] as MovieClip).addEventListener(MouseEvent.CLICK,onStepHandler_1_2);
               }]);
            }]);
         }]);
      }
      
      private static function onStepHandler_1_2(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.removeYellowArrow(_map.conLevel["task945Trigger_2"] as MovieClip);
         CommonUI.removeYellowArrow(_map.conLevel["task945Trigger_2"] as MovieClip);
         (_map.conLevel["task945Trigger_2"] as MovieClip).buttonMode = false;
         (_map.conLevel["task945Trigger_2"] as MovieClip).mouseEnabled = false;
         (_map.conLevel["task945Trigger_2"] as MovieClip).mouseChildren = false;
         (_map.conLevel["task945Trigger_2"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStepHandler_1_2);
         NpcDialog.show(NPC.SEER,["太好了！果然就在附近，有了这些海藻就可以让贝壳说话了！呵呵！"],["立刻采集！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
            {
               NpcDialog.show(NPC.SEER,["哈哈，搞定！小布我来救你了！"],["点击困住小布的贝壳！"],[function():void
               {
                  CommonUI.addYellowArrow(_map.conLevel["task945Trigger_1"] as MovieClip);
                  (_map.conLevel["task945Trigger_1"] as MovieClip).buttonMode = true;
                  (_map.conLevel["task945Trigger_1"] as MovieClip).mouseEnabled = true;
                  (_map.conLevel["task945Trigger_1"] as MovieClip).mouseChildren = true;
                  (_map.conLevel["task945Trigger_1"] as MovieClip).addEventListener(MouseEvent.CLICK,onStepHandler_1_3);
               }]);
            });
         }]);
      }
      
      private static function onStepHandler_1_3(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.removeYellowArrow(_map.conLevel["task945Trigger_1"] as MovieClip);
         (_map.conLevel["task945Trigger_1"] as MovieClip).buttonMode = false;
         (_map.conLevel["task945Trigger_1"] as MovieClip).mouseEnabled = false;
         (_map.conLevel["task945Trigger_1"] as MovieClip).mouseChildren = false;
         (_map.conLevel["task945Trigger_1"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStepHandler_1_3);
         AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
         {
            (_map.animatorLevel["shell"] as MovieClip).gotoAndStop(2);
            NpcDialog.show(NPC.SEER,["小布，你没事就好！对了，卡璐璐，你之前说了一半，到底是谁干的！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.KALULU,["是…哈..莫..雷..特！可能我说的你不敢相信，但是事实就是如此！希望你能接受现实！"],["什么，是龙王子，不可能…"],[function():void
               {
                  TasksManager.complete(ID,1,function():void
                  {
                     initStep2();
                  });
               }]);
            });
         });
      }
      
      private static function initStep2() : void
      {
         AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
         {
            NpcDialog.show(NPC.SEER,["伙伴们，你们都没事吧！还好我及时赶到，否则后果不堪设想！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["哎...都怪我不好，本想我们几个先来这里寻找0xff0000星辰之柱0xffffff，再回来告诉你的，我知道错了！"],["我们也是！！！！"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["不过话说回来，刚刚那个大龙还真的力大无穷啊！当我们刚找到0xff0000海洋之柱0xffffff时，它的突然袭击让我们防不胜防啊！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["巨大的海洋之柱整体都被海水覆盖，想要靠近它不是这么简单的！"],["恩恩，大家好好想想！"],[function():void
                        {
                           NpcDialog.show(NPC.ATIEDA,["对啊！我们怎么把能量池给忘记了，这说不定就是关键所在哦！"],["对哦！快去看看吧！！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                              {
                                 NpcDialog.show(NPC.KALULU,["就是它，就是这条龙！就是它之前攻击我们的！现在怎么又回来了？"],["哼，让我的斩月双刀来伺候它吧！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["不可能是误会！这是我亲眼所见，怎么可能搞错！"],["赛尔，你让开！"],[function():void
                                       {
                                          NpcDialog.show(NPC.HAMO_LEITE,["大家别着急，从你们口中我能听出来，有谁假扮了我！不过你们放心，我一定会查出真相的！"],null,null,false,function():void
                                          {
                                             NpcDialog.show(NPC.HAMO_LEITE,["还有，你们身后的那位朋友，我敢肯定它是龙族成员之一，如果下次我们见面的时候能够解开误会，告诉我它的故事吧！"],["你有什么办法！"],[function():void
                                             {
                                                AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                                                {
                                                   TasksManager.complete(ID,2,function():void
                                                   {
                                                      initStep3();
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
                  });
               }]);
            });
         });
      }
      
      private static function initStep3() : void
      {
         _map.conLevel["water"].visible = false;
         taskMC.gotoAndStop(10);
         NpcDialog.show(NPC.SAIXIAOXI,["奇怪了，刚刚的它好像看上去好温和啊！难道是我感觉错了"],["先解决能量池再说！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["恩，我相信一定和附近的植物有关，要不我们再试试之前的方式，收集点海藻和珊瑚之类的再说！"],["好吧！大家分头行动！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["耶...太棒了！我们成功了！小布，你快点进入能量池也许这些能量会对你的身体有帮助的！"],["伙伴们我们想第二根星辰之柱出发！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
                     {
                        NpcDialog.show(NPC.TATEER_LT,["想不到防守如此严密的海洋之柱，尽会被你们这群小家伙解除！看来敢收拾你们的时候了！"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                           {
                              NpcDialog.show(NPC.KAILUOYA,["住手！好久不见啊！塔特尔，我们的较量还没有结束呢！难道你忘记了吗？"],["原来是凯洛亚啊！"],[function():void
                              {
                                 NpcDialog.show(NPC.KAILUOYA,["哼哼！和你决斗了上千年，居然还甩不掉你！那就择日不如撞日吧！"],null,null,false,function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.KAILUOYA,["快点离开这里吧！你们的实力是不可能战胜0xff0000帕罗狄亚0xffffff！我只能靠我仅有的实力守护这片海洋！"],["不行，我们不会放弃的！"],[function():void
                                       {
                                          NpcDialog.show(NPC.KAILUOYA,["哈哈！好像我年轻的时候，很好！这颗海洋天珠就送给你们吧！相信你们今后一定会用到的！"],null,null,false,function():void
                                          {
                                             AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
                                             {
                                                NpcDialog.show(NPC.SAIXIAOXI,["太好了，第二颗天珠终于拿到手了，不知道海洋天珠中蕴藏着什么力量！"],["说不定是很厉害的武器哦！"],[function():void
                                                {
                                                   AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_945_2"),function():void
                                                   {
                                                      TasksManager.complete(ID,3,function():void
                                                      {
                                                         initStep4();
                                                      });
                                                   });
                                                }]);
                                             });
                                          });
                                       }]);
                                    });
                                 });
                              }]);
                           });
                        });
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      private static function initStep4() : void
      {
         _map.conLevel["water"].visible = false;
         taskMC.gotoAndStop(15);
         NpcDialog.show(NPC.SEER,["好了，你们不要争了，我们有办法知道谁是真的谁是假的！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["你们站在一起，就知道谁真谁假了！我们对哈莫雷特可不是一般的了解，它身上每个细节我都了如指掌！"],["站好了你们！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["现在就让我们来看看，谁才是真正的龙族王子！"],["开始找茬！"],[function():void
                  {
                     var app:* = ModuleManager.getModule(ClientConfig.getTaskModule("TaskInteractive_945"));
                     app.setup();
                     app.show();
                     app.sharedEvents.addEventListener("success",function(param1:Event):void
                     {
                        var evt:Event = param1;
                        NpcDialog.show(NPC.SAIXIAOXI,["哼哼，原来是你，想骗走我们的海洋天珠，兄弟们上！！"],["你们住手，让真正的龙王子来教训它！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_945_3"),function():void
                           {
                              NpcDialog.show(NPC.SEER,["哈莫雷特，你还好吧！帕罗狄亚的实力真的这么强大吗？"],["它比我想象的要强更多！"],[function():void
                              {
                                 NpcDialog.show(NPC.HAMO_LEITE,["事不宜迟，我这就回龙王神殿，好好照顾你们的“龙族”朋友，它可是我们最后的希望！我一定会帮他找回0xff0000龙族之心0xffffff的！"],["果然是龙王子，一眼就看穿了！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["快，伙伴们！我们也快点返回赛尔号吧！这件事情我们要去拜访一下博士，相信他一定会有办法的！"],["赛尔，我们赛尔号再见！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.SAIXIAOXI,["恩，好的！我随后就赶来！小布，你好好照顾自己啊！"],["帕罗狄亚，我们一定会有办法击败你的！"],[function():void
                                             {
                                                TasksManager.complete(ID,4,function():void
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
                        }]);
                     });
                  }]);
               });
            }]);
         });
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 710)
         {
            return _map.conLevel["task945mc"];
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
            if(MapManager.currentMap.id == 710)
            {
               (_map.animatorLevel["shell"] as MovieClip).visible = true;
               taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_1_0);
               (_map.conLevel["task945Trigger_1"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStepHandler_1_1);
               (_map.conLevel["task945Trigger_2"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStepHandler_1_2);
               (_map.conLevel["task945Trigger_1"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStepHandler_1_3);
            }
            DisplayUtil.removeForParent(taskMC);
         }
         _map = null;
      }
   }
}
