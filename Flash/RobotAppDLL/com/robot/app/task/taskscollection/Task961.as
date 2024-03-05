package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class Task961
   {
      
      private static const TASK_ID:uint = 961;
      
      private static var _map:BaseMapProcess;
      
      private static var _shootCnt:uint;
      
      private static var _hitCnt:uint;
      
      private static var _hitMC:Array;
       
      
      public function Task961()
      {
         super();
      }
      
      public static function initForMap698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(113);
            NpcController.showNpc(116);
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(113);
                  NpcController.showNpc(116);
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
      
      public static function initForMap715(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["task961shoot"].visible = false;
         _map.animatorLevel["task961mc"].visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            _map.animatorLevel["task961mc"].gotoAndStop(2);
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
                  _map.animatorLevel["task961mc"].gotoAndStop(2);
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
         taskMC.buttonMode = false;
         NpcDialog.show(NPC.SAIXIAOXI,["这里是什么鬼地方，到处都是石头，没什么特别的嘛！还说有小布的线索呢！"],["别心急，小息！"],[function():void
         {
            NpcDialog.show(NPC.ATIEDA,["等等，我感到一股杀气，不过好像有点似僧相识的感觉！越来越近了…"],["难道是小布？还是帕罗狄亚？？"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
               {
                  NpcDialog.show(NPC.ANLUOSI,["伙伴们，我们一定要把灵王带回去，他为了我们承受太多痛苦了！"],["恩恩，我们这就开始！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["看来这一定是灵王剩余的部下啊！它们这样的举动难道巨石灵王还活着，没有死？"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.KALULU,["嘘…小息你轻点，万一被他们发现就不好了！还是先看看再说吧！"],["恩恩，在仔细观察一下！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                              {
                                 NpcDialog.show(NPC.ANLUOSI,["帕罗狄亚，今天我们一定要把灵王带回去，如果你一定要阻止话，我们一定会用生命来抵抗你的！这就是友情，你不会理解的！"],["哼哼，死道临头还嘴硬！"],[function():void
                                 {
                                    NpcDialog.show(NPC.XIAOBU,["帕罗狄亚大人，你就看着吧！我会展现你从未见过的实力！"],["什么？？小布他…"],[function():void
                                    {
                                       NpcDialog.show(NPC.PALUODIYA,["哼哼！你变的更强就必须要龙族之心的帮助，不过现在还为时尚早！"],null,null,false,function():void
                                       {
                                          AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_961_3"),function():void
                                          {
                                             NpcDialog.show(NPC.PALUODIYA,["哼，灵王有什么好的，值得你们这样为他白白牺牲自己的生命，不如你们跟随我，称霸第五星系的梦想指日可待！"],["可恶的家伙！"],[function():void
                                             {
                                                NpcDialog.show(NPC.ANLUOSI,["别以为你是第五星系最强的存在，只要我们灵王一族在，你就休想独霸一方！"],null,null,false,function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                                   {
                                                      NpcDialog.show(NPC.SAIXIAOXI,["小布，你知道自己在做什么吗？为何要变得如此残忍，难道你已经忘记自己的使命了吗？"],["小布，别听他们的！"],[function():void
                                                      {
                                                         TasksManager.complete(TASK_ID,1,function():void
                                                         {
                                                            initStep2();
                                                         });
                                                      }]);
                                                   });
                                                });
                                             }]);
                                          });
                                       });
                                    }]);
                                 }]);
                              });
                           }]);
                        });
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      private static function initStep2() : void
      {
         AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
         {
            NpcDialog.show(NPC.PALUODIYA,["呵呵，这个怪我没有告诉你们，可能一直以来你们认为我身边没什么像样的帮手吧！不过接下来你们看好了，鲁迪诺斯！！！"],["鲁迪诺斯？？？"],[function():void
            {
               NpcDialog.show(NPC.PALUODIYA,["哼哼！0xff0000鲁迪诺斯0xffffff是我最得力的部下，它拥有最坚硬的身躯和他强大的力量！"],["难道就是上次那个家伙？"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                  {
                     NpcDialog.show(NPC.PALUODIYA,["鲁迪诺斯，快点帮我解决他们！我知道你从不会手软的！"],["遵命，主人！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，留意一下周围的环境！我感觉这家伙一定很难对付！阿铁达、卡璐璐，我们分开突破，否则很容易被攻击的！"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                           {
                              _map.conLevel["task961shoot"].visible = true;
                              MainManager.actorModel.x = 496;
                              MainManager.actorModel.y = 450;
                              setHitMC();
                              NpcDialog.show(NPC.SEER,["哼，让你尝尝我0xff0000头部射击0xffffff的厉害！伙伴们一起上！！！！"],["利用头部射击攻击鲁迪诺斯！"],[function():void
                              {
                                 _shootCnt = 0;
                                 _hitCnt = 0;
                                 AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEndHandler);
                                 AimatController.start(0);
                              }]);
                           });
                        });
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      private static function setHitMC() : void
      {
         _hitMC = new Array();
         var _loc1_:uint = 1;
         while(_loc1_ <= 3)
         {
            _hitMC.push(_map.conLevel["task961shoot"]["m" + _loc1_]);
            _loc1_++;
         }
      }
      
      private static function onAimatEndHandler(param1:AimatEvent) : void
      {
         var i:uint = 0;
         var t:uint = 0;
         var e:AimatEvent = param1;
         if(e.info.userID == MainManager.actorID)
         {
            ++_shootCnt;
            i = 0;
            while(i < 3)
            {
               if((_hitMC[i] as MovieClip).parent != null)
               {
                  if((_hitMC[i] as MovieClip).hitTestPoint(e.info.endPos.x,e.info.endPos.y,true) == true)
                  {
                     ++_hitCnt;
                     DisplayUtil.removeForParent(_hitMC[i]);
                     break;
                  }
               }
               i++;
            }
            if(_shootCnt < 3)
            {
               t = setTimeout(function():void
               {
                  clearTimeout(t);
                  AimatController.start(0);
               },1000);
            }
            else if(_hitCnt < 3)
            {
               NpcDialog.show(NPC.SEER,["可恶，我决不能放弃，再尝尝我0xff0000头部射击0xffffff的厉害吧！"],["利用头部射击攻击鲁迪诺斯！"],[function():void
               {
                  restartShoot();
               }]);
            }
            else
            {
               shootOver();
            }
         }
      }
      
      private static function restartShoot() : void
      {
         var t1:uint = 0;
         _shootCnt = 0;
         _hitCnt = 0;
         var i:uint = 0;
         while(i < 3)
         {
            (_map.conLevel["task961shoot"] as MovieClip).addChild(_hitMC[i]);
            i++;
         }
         AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEndHandler);
         t1 = setTimeout(function():void
         {
            clearTimeout(t1);
            AimatController.start(0);
         },1000);
      }
      
      private static function shootOver() : void
      {
         AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndHandler);
         _map.conLevel["task961shoot"].visible = false;
         NpcDialog.show(NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "，你太棒了！这些雕虫小技在我们面前不算什么！帕罗狄亚还有什么招式统统拿出来吧！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.LUDINUOSI,["小子，别得意的太早！接下来才是我真正的实力，让你知道我鲁迪诺斯的能力！"],["来吧！我接受你的挑战！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
               {
                  NpcDialog.show(NPC.ATIEDA,["呵呵！不就是石头嘛！我阿铁打就不把你放在眼睛里，让我的斩月双刀来伺候你吧！"],["小心！阿铁打！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                     {
                        NpcDialog.show(NPC.KALULU,["阿铁打，你没事吧？这些巨石球果然厉害，还是先让我先看看你的伤势吧！"],["赛小息，接下来交给你们了！"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["恩恩，居然连阿铁打的斩月双刀就拿这些石球没办法，看来只能智取了！"],null,null,false,function():void
                           {
                              TasksManager.complete(TASK_ID,2,function():void
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
      }
      
      private static function initStep3() : void
      {
         AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["帕罗狄亚你这个悲剧的家伙，有本事就来对付我，为什么连灵王一族最后的小生命都不放过呢？"],["哈哈，先过了鲁迪诺斯这关再说吧！"],[function():void
            {
               NpcDialog.show(NPC.LUDINUOSI,["目前为止还没有一个人能顺利通过这里，不信的话你们可以试试，我会在这里目睹你们生命的结束！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["哼，我就不信这个邪，小米我们上！！！！"],["小息，别去冒险啊！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                     {
                        NpcDialog.show(NPC.XIAOBU,["小息，快救米咔！别再做无谓的尝试了，你们不可能阻止帕罗狄亚的！"],["你给我闭嘴！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_961_4"),function():void
                           {
                              taskMC.gotoAndStop(13);
                              NpcDialog.show(NPC.XIAOBU,["小息，你们快走，这里交给我吧！我们还有米咔永远在一起！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["伙伴，我不会让你一个人战斗的，队友的生命就是我的生命！"],["赛尔，现在只能靠我们了！"],[function():void
                                 {
                                    NpcDialog.show(NPC.SEER,["恩恩，准备好了队长，这次我们一定要冲破防线！"],["小布，我们来了！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.SAIXIAOXI,["好机会！赛尔，我们快速突破这里！"],["恩恩！"],[function():void
                                          {
                                             AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
                                             {
                                                NpcDialog.show(NPC.PALUODIYA,["小布，你一定会后悔的，别忘了龙族之心还在我的手上！鲁迪诺斯要是你不能干掉他们，那你就和巨石灵王一起沉睡吧！"],["是，我的主人！"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
                                                   {
                                                      NpcDialog.show(NPC.SAIXIAOXI,["鲁迪诺斯，你别做无谓的抵抗了，别忘记就连巨石灵王也被我们击败了！"],["在我的世界中只有服从！"],[function():void
                                                      {
                                                         TasksManager.complete(TASK_ID,3,function():void
                                                         {
                                                            initStep4();
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
                  }]);
               });
            }]);
         });
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(16);
         NpcDialog.show(NPC.SAIXIAOXI,["既然你选择迎战，那我们也只能接受！不过在大战之前，我想知道你和0xff0000鲁加斯0xffffff是否有着关系呢！"],["什么？你竟然会发现这个细节？！"],[function():void
         {
            NpcDialog.show(NPC.LUDINUOSI,["曾经我是0xff0000鲁加斯一族0xffffff的首领，为了寻找传说中更强大的力量，我选择了离开，直到我遇到0xff0000帕罗狄亚0xffffff，是它让我强大起来！"],["你竟然背叛了自己的族人？？"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["等等，鲁迪诺斯如果再让你选择一次，你还这样做吗？"],["我绝不后悔！"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["好吧!安普，快点吧灵王带走吧！鲁迪诺斯由我们搞定！"],null,null,false,function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_961_5"),function():void
                        {
                           NpcDialog.show(NPC.LUDINUOSI,["什么！灵王你居然还活着，这个消息我一定要汇报帕罗狄亚大人！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.JUSHILINGWANG,["顺便给我捎个口信，就说我巨石灵王一定会阻止它的！让它好好等着我的复仇！"],["灵王，你终于回归了！"],[function():void
                              {
                                 NpcDialog.show(NPC.JUSHILINGWANG,[MainManager.actorInfo.formatNick + "，多谢你们的帮助，我会用自己的生命来弥补之前犯下的错误！"],["恩恩，加油，灵王！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["不好被这家伙溜掉了，不能让它就这么离开，否则后患无穷啊！"],["等等，小息！"],[function():void
                                       {
                                          NpcDialog.show(NPC.JUSHILINGWANG,["先别这么冲动，我知道它们的计划，现在你们看到的鲁迪诺斯并不是它的真面目，只有前往0xff0000流沙洞穴0xffffff才能彻底击败它！"],["什么！流沙洞穴！"],[function():void
                                          {
                                             NpcDialog.show(NPC.JUSHILINGWANG,["是的！但是击败它并不是那么轻而易举，我先回巨石营地召集恢复一下，你们可以去找鲁加斯一族，这样我们的胜算就大了！"],["恩恩，我们这就去！"],[function():void
                                             {
                                                AnimateManager.playMcAnimate(taskMC,18,"mc",function():void
                                                {
                                                   NpcDialog.show(NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "，这个任务就交给你了！我还要和卡璐璐带米咔和阿铁打回去治疗，记得来找我们一起前往0xff0000流沙洞穴0xffffff去击败鲁迪诺斯啊！"],["恩恩，我知道了！"],[function():void
                                                   {
                                                      AnimateManager.playMcAnimate(taskMC,19,"mc",function():void
                                                      {
                                                         NpcDialog.show(NPC.SEER,["看来这次0xff0000鲁加斯一族0xffffff和0xff0000灵王一族0xffffff的联手一定可以战胜鲁迪诺斯，我这就去告诉其他伙伴！"],["胜利属于赛尔号！"],[function():void
                                                         {
                                                            TasksManager.complete(TASK_ID,4,function():void
                                                            {
                                                               _map.animatorLevel["task961mc"].gotoAndStop(2);
                                                               destroy();
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
                        });
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 715)
         {
            return _map.conLevel["task961mc"];
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
            if(MapManager.currentMap.id == 715)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_1_0);
               _map.conLevel["task961shoot"].visible = false;
               _map.animatorLevel["task961mc"].visible = true;
               AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndHandler);
            }
            DisplayUtil.removeForParent(taskMC);
         }
         _map = null;
      }
   }
}
