package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_913;
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
   
   public class Task913
   {
      
      public static var _map:BaseMapProcess;
       
      
      public function Task913()
      {
         super();
      }
      
      public static function initForMap706(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_913.TASK_ID) == TasksManager.UN_ACCEPT)
         {
            taskMC.visible = false;
         }
         else if(TasksManager.getTaskStatus(TaskController_913.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            NpcController.hideNpc(117);
            taskMC.visible = true;
            TasksManager.getProStatusList(TaskController_913.TASK_ID,function(param1:Array):void
            {
               ToolBarController.showOrHideAllUser(false);
               OgreController.isShow = false;
               if(!param1[0])
               {
                  initStep0();
               }
               else if(Boolean(param1[0]) && !param1[1])
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
      
      public static function initForMap708(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_913.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_913.TASK_ID,function(param1:Array):void
            {
               _map.conLevel["stone"].visible = false;
               _map.conLevel["spt"].gotoAndStop(1);
               ToolBarController.showOrHideAllUser(false);
               OgreController.isShow = false;
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
               else if(Boolean(param1[4]) && !param1[5])
               {
                  initStep5();
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
      
      private static function initStep0() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(1);
         NpcDialog.show(NPC.SEER,["拉妮，你别哭嘛！一定可以找到拉琪的！我这就去找那个长的怪头怪脑的仙人掌问问！"],["你可要小心啊！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["放心吧！这家伙不是我的对手，这次我一定要知道拉琪的下落！"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
               {
                  NpcDialog.show(NPC.SEER,["快点把拉琪放了，别以为你躲在这个鬼地方我就拿你没办法！相不相信我一把火烧了这里！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.KAIKETESI,["哈哈！就凭你也想和我对抗，省省吧你！想学你的朋友拉琪一样无知吗？啊哈哈哈！"],["那如果是四个人呢？"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["嘿嘿！加上我们就是四个啦！你简直太愚蠢了，我们探险小队不会轻易言败的！"],["你们？？？赛…小…息1"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["你们怎么知道我在这里！！！小息你的伤势全好了？不再短路了？？？"],["哈哈哈！放心，卡璐璐可是个称职的医务人员哦！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.KAIKETESI,["你们这群没用的东西，几个小毛孩子就把你们吓成这样，以后怎么跟着我为0xff0000阿洛比斯0xffffff大人效劳啊！看我怎么收拾他们！"],null,null,false,function():void
                                    {
                                       TasksManager.complete(TaskController_913.TASK_ID,0,function():void
                                       {
                                          initStep1();
                                       });
                                    });
                                 });
                              }]);
                           }]);
                        });
                     }]);
                  });
               });
            });
         }]);
      }
      
      private static function initStep1() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 20
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function initStep2() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(1);
         AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
         {
            NpcDialog.show(NPC.KAIKETESI,["我只能送你们到这里，接下来就看你们的了！相信你们这群小勇士一定可以战胜阿洛比斯，拯救巨石星的！"],["放心吧！我们是不会退缩的！"],[function():void
            {
               NpcDialog.show(NPC.KAIKETESI,["恩，我也帮不了你们什么！这根0xff0000 星辰之链 0xffffff送给你，相信它一定可以帮你们化险为夷的！记住，只有心中充满正义的勇者才能激发它的潜能！"],["哇！这东西一定很厉害！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                  {
                     NpcDialog.show(NPC.LANI,["伙伴们，我们还是先寻找拉琪的下落吧！我很担心他！"],["恩恩，我们这就去对面看看！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["快看，那些家伙又在做坏事了！他们要把那些可爱的精灵送到哪里去？难道这就是0xff0000 阿洛比斯的祭祀 0xffffff？"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["喂…你们这群可恶的家伙，准备把这些精灵带去哪里？？"],["又是你们！！！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                              {
                                 NpcDialog.show(NPC.KAWOER,["可笑啊！太可笑了！你们这些家伙来这里干嘛？？送死吗？不知道这里是0xff0000 阿洛比斯大人的禁地 0xffffff嘛！！"],["禁地！！！我管你是不是禁地，快点放了它们！"],[function():void
                                 {
                                    NpcDialog.show(NPC.SENPUTE,["放了它们，做梦！！还差没几个就要成功了！你要我们现在放弃那是绝对不可能的，有本事你就过来阻止我们吧！"],["你们…你们…会付出代价的！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.SEER,["啊！我找到了，快看那些石柱一定就是机关！一定是…"],["点击石柱！"],[function():void
                                          {
                                             taskMC.gotoAndStop(5);
                                             taskMC.addEventListener(MouseEvent.CLICK,onClickStep2_0);
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
            }]);
         });
      }
      
      private static function onClickStep2_0(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onClickStep2_0);
         AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
         {
            NpcDialog.show(NPC.SEER,["赛尔，你太聪明了，爱死你了！那另一个肯定也是机关咯！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["恩恩，这些古老的石柱一定就是机关！让我再去试试！"],["点击石柱！"],[function():void
               {
                  taskMC.gotoAndStop(6);
                  taskMC.addEventListener(MouseEvent.CLICK,onClickStep2_1);
               }]);
            });
         });
      }
      
      private static function onClickStep2_1(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onClickStep2_1);
         AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
         {
            _map.animatorLevel["pathMc"].gotoAndPlay(2);
            NpcDialog.show(NPC.SEER,["哇！果然神奇，大家快点去过去吧！让我们一举击破0xff0000巨石灵王阿洛比斯的爪牙们0xffffff！"],["恩恩，冲啊！"],[function():void
            {
               TasksManager.complete(TaskController_913.TASK_ID,2,function():void
               {
                  initStep3();
               });
            }]);
         });
      }
      
      private static function initStep3() : void
      {
         MainManager.selfVisible = false;
         openPath();
         _map.animatorLevel["pathMc"].gotoAndStop(_map.animatorLevel["pathMc"].totalFrames);
         taskMC.gotoAndStop(7);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_913_4"),function():void
         {
            NpcDialog.show(NPC.ATIEDA,["耶…帅气！这次终于出了一口气，现在你们知道我们探险小队的厉害吧！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.LANI,["快救这些可怜的精灵伙伴吧！我去找找拉琪的下落吧！我担心阿洛比斯随时都会回来的！"],["恩恩，我们这就去！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                  {
                     NpcDialog.show(NPC.SEER,["阿洛比斯，你这个大魔头，究竟想把巨石星搞成什么样子！为了达到你自己的目的，竟然想牺牲这些精灵！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.ALUOBISI,["哼哼！你还是少管闲事为好!上次算你们走运，今天就让你们作为我获得邪恶力量的祭品吧！"],["来吧！让我一决胜负！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                           {
                              NpcDialog.show(NPC.ATIEDA,["可恶，这家伙的实力竟然如此强大！看来我们未必是它的对手！"],["赛尔…赛尔…"],[function():void
                              {
                                 NpcDialog.show(NPC.KALULU,["不好，赛尔被阿洛比斯的能量震到瀑布下面去了！这下可怎么办！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.ALUOBISI,["哈哈！下面可是0xff0000 暗流之河 0xffffff的源头，一旦掉下去就别想在上来了！你看看那个瀑布中的卡沃尔就是最好的证明！"],["你这家伙！"],[function():void
                                    {
                                       TasksManager.complete(TaskController_913.TASK_ID,3,function():void
                                       {
                                          initStep4();
                                       });
                                    }]);
                                 });
                              }]);
                           });
                        }]);
                     });
                  });
               }]);
            });
         });
      }
      
      private static function initStep4() : void
      {
         MainManager.selfVisible = false;
         openPath();
         _map.animatorLevel["pathMc"].gotoAndStop(_map.animatorLevel["pathMc"].totalFrames);
         taskMC.gotoAndStop(9);
         AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
         {
            NpcDialog.show(NPC.KALULU,["赛尔，你一定会没事的！你要记得你和我们的约定，我们还要拯救0xff0000 麒麟一族的危机 0xffffff呢！我们不准你就这样离开我们！"],["..."],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_913_5"),function():void
               {
                  taskMC.gotoAndStop(10);
                  _map.conLevel["spt"].gotoAndStop(4);
                  NpcDialog.show(NPC.SEER,["哇！这个是什么？好强大的力量啊！简直太刺激了！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.ALUOBISI,["可恶，居然让你找到了0xff0000 七星战甲0xffffff，怎么可能！这些超能力战甲已经失踪了上千年！原来一直都是在0xff0000 七星天珠 0xffffff中！"],["你知道的太晚了！"],[function():void
                     {
                        NpcDialog.show(NPC.KAWOER,["自从你统治巨石星以来我就一直等待着有缘人能够来到这里！想不到竟然是这些小家伙！阿洛比斯你还是放弃吧！"],["别废话，谁是最后赢家还不知道呢！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                           {
                              NpcDialog.show(NPC.SEER,["拉妮！！！阿洛比斯我和你势不两立！快点放了这些精灵！否则叫你知道我的厉害！"],["哈哈！太可笑了！"],[function():void
                              {
                                 TasksManager.complete(TaskController_913.TASK_ID,4,function():void
                                 {
                                    initStep5();
                                 });
                              }]);
                           });
                        }]);
                     }]);
                  });
               });
            }]);
         });
      }
      
      private static function initStep5() : void
      {
         MainManager.selfVisible = false;
         openPath();
         _map.animatorLevel["pathMc"].gotoAndStop(_map.animatorLevel["pathMc"].totalFrames);
         _map.conLevel["spt"].gotoAndStop(4);
         taskMC.gotoAndStop(11);
         NpcDialog.show(NPC.ALUOBISI,["实话告诉你们吧！我抓的这些精灵都是为了实现我称霸宇宙的梦想所必须牺牲的！它们应该觉得荣幸才对！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.ATIEDA,["赛尔，少和他废话！你先去0xff0000 黑色能量圈 0xffffff拯救那些精灵，我们在这里拖住它！"],["恩恩，好主意！"],[function():void
            {
               taskMC.gotoAndStop(12);
               taskMC.addEventListener(MouseEvent.CLICK,onClickStep5_0);
            }]);
         });
      }
      
      private static function onClickStep5_0(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onClickStep5_0);
         AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
         {
            NpcDialog.show(NPC.KAWOER,["什么！黑色能量圈消失了，你是怎么做到的！"],["哼哼！卡沃尔你未免太小看本王了吧！"],[function():void
            {
               NpcDialog.show(NPC.ALUOBISI,["你们别得意！今天只是一开始，当我们再次相遇时，你就会知道我巨石灵王的恐怖之处了！啊哈哈！"],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                  {
                     NpcDialog.show(NPC.KAWOER,["朋友们！接下来就靠你们了，拉琪和拉妮的生命危在旦夕，只有它们才知道其他星辰之柱的具体位置！"],["恩恩，我们一定会拯救它们的！"],[function():void
                     {
                        NpcDialog.show(NPC.KAWOER,["赛尔，记住你身上的0xff0000 七星天珠 0xffffff和0xff0000 星辰之链0xffffff，它们拥有着不同寻常的能力，希望你能好好利用！有什么事就来这里找我吧！"],["恩恩，放心！卡沃尔我们一定会凯旋而归的！"],[function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["spt"],4,"mc",function():void
                           {
                              _map.conLevel["spt"].gotoAndStop(1);
                              NpcDialog.show(NPC.SEER,["赛小息，你们先回去准备一下吧！接下来就该和阿洛比斯大战了！我必须先在这里好好勘查一下！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.KALULU,["恩恩，你可要小心啊！一有情况记得先回赛尔号找我们！别擅自行动啊！"],["恩恩，你们放心吧！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["拉琪、拉妮！你们一定会没事的！我发誓只要有我在，阿洛比斯就休想实现它的野心！"],null,null,false,function():void
                                       {
                                          AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_913_6"),function():void
                                          {
                                             TasksManager.complete(TaskController_913.TASK_ID,5,function():void
                                             {
                                                destroy();
                                             });
                                          });
                                       });
                                    });
                                 }]);
                              });
                           });
                        }]);
                     }]);
                  });
               });
            }]);
         });
      }
      
      private static function openPath() : void
      {
         if(_map.typeLevel["pathMc"])
         {
            DisplayUtil.removeForParent(_map.typeLevel["pathMc"]);
            MapManager.currentMap.makeMapArray();
         }
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 706)
         {
            return _map.conLevel["task913mc"];
         }
         if(MapManager.currentMap.id == 708)
         {
            return _map.conLevel["task913mc"];
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
         if(taskMC)
         {
            if(MapManager.currentMap.id == 708)
            {
               _map.conLevel["stone"].visible = true;
               _map.conLevel["spt"].gotoAndStop(2);
               openPath();
               _map.animatorLevel["pathMc"].gotoAndStop(_map.animatorLevel["pathMc"].totalFrames);
               taskMC.removeEventListener(MouseEvent.CLICK,onClickStep2_0);
               taskMC.removeEventListener(MouseEvent.CLICK,onClickStep2_1);
               taskMC.removeEventListener(MouseEvent.CLICK,onClickStep5_0);
            }
            DisplayUtil.removeForParent(taskMC);
         }
         MainManager.selfVisible = true;
         ToolBarController.showOrHideAllUser(true);
         _map = null;
      }
   }
}
