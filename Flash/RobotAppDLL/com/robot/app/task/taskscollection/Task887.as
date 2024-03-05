package com.robot.app.task.taskscollection
{
   import com.robot.app.mapProcess.MapProcess_702;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_887;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task887
   {
      
      public static var _map:BaseMapProcess;
      
      private static var stoneID:int = 0;
       
      
      public function Task887()
      {
         super();
      }
      
      public static function initForMap702(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_887.TASK_ID,function(param1:Array):void
         {
            mainMC.buttonMode = true;
            MainManager.actorModel.visible = false;
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
               if(TasksManager.getTaskStatus(TaskController_887.TASK_ID) == TasksManager.COMPLETE)
               {
                  destroy();
               }
               else
               {
                  initStep5();
               }
            }
            else
            {
               destroy();
            }
         });
      }
      
      private static function initStep2() : void
      {
         mainMC.addEventListener(MouseEvent.CLICK,startStep2);
      }
      
      private static function startStep2(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SAIXIAOXI,["哇！这里真的是第五星系吗？太神奇了！居然被我们发现了？！"],["先别高兴，先看看周围的环境吧！"],[function():void
         {
            AnimateManager.playMcAnimate(mainMC,2,"mc",function():void
            {
               mainMC.gotoAndStop(3);
               NpcDialog.show(NPC.ATIEDA,["是谁！肯定是海盗，我已经感觉到了杀气，如果你们敢出现，让你尝尝我斩月双刀的厉害！"],["等等，好像不是海盗！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["看上去好像受了很重的伤，还是先去看看怎么回事吧！"],null,null,false,function():void
                  {
                     removeListeners();
                     mainMC.addEventListener(MouseEvent.CLICK,talkToFairy);
                  });
               }]);
            });
         }]);
      }
      
      private static function talkToFairy(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SEER,["小家伙，你这是怎么了！是谁把你伤成这样啊？"],["救…救我…"],[function():void
         {
            NpcDialog.show(NPC.LA_QI,["这个星球以及星系正在发生巨大的变化，不久后它们就要统治这里了！黑暗的力量即将来临，第五星系危在旦夕！！！"],["什么？它们是谁？快告诉我！"],[function():void
            {
               AnimateManager.playMcAnimate(mainMC,4,"mc",function():void
               {
                  NpcDialog.show(NPC.SEER,["不好，有人来了！一定是来找它的，快…我们先把它藏起来，看看到底发生了什么事情！"],["恩恩，动作麻利点！"],[function():void
                  {
                     AnimateManager.playMcAnimate(mainMC,5,"mc",function():void
                     {
                        NpcDialog.show(NPC.SEER,["恩恩，我这就盖上植物！"],["搬动植物。"],[function():void
                        {
                           mainMC.gotoAndStop(6);
                           removeListeners();
                           mainMC.addEventListener(MouseEvent.CLICK,hideFairy);
                        }]);
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      private static function hideFairy(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playMcAnimate(mainMC,7,"mc",function():void
         {
            NpcDialog.show(NPC.SEER,["真是及时，总算是赶上了！接下来不知道我们会遇到什么！"],["难道是追兵？？？"],[function():void
            {
               AnimateManager.playMcAnimate(mainMC,8,"mc",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["米咔…米咔！你去哪里啊！快回来…怎么办！！米咔不见了……"],["别急我们一起找找它！"],[function():void
                  {
                     NpcDialog.show(NPC.KALULU,["呀！这简直太可怕了！连米咔都吓得躲起来了！这些怪物究竟是什么呀！"],["别怕，我们人多一定可以化解危机的！"],[function():void
                     {
                        AnimateManager.playMcAnimate(mainMC,9,"mc",function():void
                        {
                           NpcDialog.show(NPC.JI_LA_KE,["嗯！你们是谁！有没有看到一个小家伙啊！如果你能告诉我们的话，那我会非常感谢你的，啊哈哈哈！"],["什么小家伙啊！我们是宇宙探险家！"],[function():void
                           {
                              NpcDialog.show(NPC.JI_LA_KE,["不可能，我看到它逃入这里的！你们别隐瞒真相，否则我可对你们不客气了！"],["真的没看见！不信你自己找啊！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_887_3"),function():void
                                 {
                                    NpcDialog.show(NPC.JI_LA_KE,["什么？居然是这么个家伙，简直太令我失望了！兄弟们，继续找！我劝你们还是尽快离开这个地方，这里不是你们该来的！啊哈哈哈！"],["可恶的家伙！你们想干什么！"],[function():void
                                    {
                                       TasksManager.complete(TaskController_887.TASK_ID,2,function():void
                                       {
                                          removeListeners();
                                          startStep3(null);
                                       });
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
      }
      
      private static function initStep3() : void
      {
         mainMC.addEventListener(MouseEvent.CLICK,startStep3);
         mainMC.gotoAndStop(10);
      }
      
      private static function startStep3(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.JI_LA_KE,["怎么？你们还不知道吗？哼哼…也不防告诉你们，原本这里是0xFF0000麒麟一族的天下，0xFFFFFF但是现在已经不是了！我们的主人也就是邪恶四灵的其中第一大猛将即将成为这里的统治者！"],["什么！麒麟一族被消灭了？？"],[function():void
         {
            CartoonManager.play(ClientConfig.getFullMovie("task_887_5"),function():void
            {
               NpcDialog.show(NPC.JI_LA_KE,["不要这么惊讶！麒麟还活着，只是被主人困住了！但是其他的麒麟一族就没这么幸运了，我们在找的就是最后一个幸存者！"],["你们！！简直太可恶了！"],[function():void
               {
                  AnimateManager.playMcAnimate(mainMC,10,"mc",function():void
                  {
                     mainMC.gotoAndStop(11);
                     NpcDialog.show(NPC.JI_LA_KE,["哈哈！你以为我们是之前四大星系上的那些低等精灵？呵呵，想拯救这里别痴心妄想了！早点离开这里吧！"],["你们等着！我们是不会善罢甘休的！"],[function():void
                     {
                        AnimateManager.playMcAnimate(mainMC,11,"mc",function():void
                        {
                           NpcDialog.show(NPC.KALULU,["这些家伙简直太残暴了！竟然伤害自己曾经守护的麒麟一族！这次我们一定要粉碎他们的阴谋！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.SEER,["恩，说的对！我们快看看那个受伤的小家伙吧！说不定它可以帮助我们！再怎么说它是除了麒麟之外最后的幸存者！"],["恩恩，快去看看！"],[function():void
                              {
                                 mainMC.gotoAndStop(12);
                                 removeListeners();
                                 mainMC.addEventListener(MouseEvent.CLICK,fairyStandUp);
                              }]);
                           });
                        });
                     }]);
                  });
               }]);
            });
         }]);
      }
      
      private static function fairyStandUp(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playMcAnimate(mainMC,13,"mc",function():void
         {
            mainMC.gotoAndStop(14);
            NpcDialog.show(NPC.LA_QI,["太感谢你们了，如果不是你们出手相救，我想现在已经一命呜呼了！"],["没事啦！这都是我们应该做的！"],[function():void
            {
               TasksManager.complete(TaskController_887.TASK_ID,3,function():void
               {
                  removeListeners();
                  startStep4(null);
               });
            }]);
         });
      }
      
      private static function initStep4() : void
      {
         mainMC.addEventListener(MouseEvent.CLICK,startStep4);
         mainMC.gotoAndStop(14);
      }
      
      private static function startStep4(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SEER,["对了，你能告诉我们，这里发生了什么事情吗？从那些家伙口中听得出，这里正在发生翻天覆地的变化！"],["哎…往事不堪回首啊！"],[function():void
         {
            NpcDialog.show(NPC.LA_QI,["曾经麒麟一族是这里最尊贵也是最强大的族群，想当年要不是圣兽麒麟仁慈、祥和今天的事也不会发生！"],["怎么越听越糊涂啊！"],[function():void
            {
               AnimateManager.playMcAnimate(mainMC,15,"mc",function():void
               {
                  mainMC.gotoAndStop(16);
                  NpcDialog.show(NPC.LA_QI,["这样吧！先给你们看件东西，我想你们就会明白的！不过你们要根据我的指示行动哦！"],["恩，没问题！"],[function():void
                  {
                     AnimateManager.playMcAnimate(mainMC,16,"mc",function():void
                     {
                        stoneID = 0;
                        initStone();
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      private static function initStone() : void
      {
         mainMC.gotoAndStop(17);
         getStone(stoneID).buttonMode = true;
         getStone(stoneID).addEventListener(MouseEvent.CLICK,stoneClicked);
         mainStone["guide"].visible = true;
      }
      
      private static function stoneClicked(param1:MouseEvent) : void
      {
         getStone(stoneID).buttonMode = false;
         getStone(stoneID).removeEventListener(MouseEvent.CLICK,stoneClicked);
         ++stoneID;
         mainStone.gotoAndStop(stoneID + 1);
         if(stoneID == 5)
         {
            finishStep4();
         }
         else
         {
            initStone();
         }
      }
      
      private static function cleanStoneListeners() : void
      {
         getStone(stoneID).removeEventListener(MouseEvent.CLICK,stoneClicked);
      }
      
      private static function get mainStone() : MovieClip
      {
         return _map.conLevel["stone"];
      }
      
      private static function getStone(param1:int) : MovieClip
      {
         return mainStone["stone" + param1];
      }
      
      private static function finishStep4() : void
      {
         NpcDialog.show(NPC.LA_QI,["就是它：0xFF0000巨石之仗！0xFFFFFF想要彻底拯救这个星系就一定需要这些神器的帮助，然而守护这些神器正是曾经守护麒麟的四灵守护者！"],["哇！简直太不可思议了！"],[function():void
         {
            NpcDialog.show(NPC.LA_QI,["如果你们想拯救这场宇宙大危机那就去接受巨石之仗的力量吧！今后你们还有很远的路要走，不单单是拯救巨石星，而是整个第五星系！"],["恩，放心吧！我们一定可以做到的！"],[function():void
            {
               TasksManager.complete(TaskController_887.TASK_ID,4,function():void
               {
                  removeListeners();
                  initStep5();
               });
            }]);
         }]);
      }
      
      private static function initStep5() : void
      {
         mainMC.gotoAndStop(17);
         mainStone.addEventListener(MouseEvent.CLICK,startStep5);
         mainStone.buttonMode = true;
      }
      
      private static function startStep5(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_887_4"),function():void
         {
            NpcDialog.show(NPC.SEER,["麒麟..麒麟它显灵了！为了这个星系上的所有精灵伙伴们，我们是不会放弃的！赛小息你们觉得呢？"],null,null,false,function():void
            {
               (_map as MapProcess_702).showBoss(null);
               NpcDialog.show(NPC.LANSITE,["我是巨石阵的守护者，如果你真的救世主，那就接受我的考验吧！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["恩恩，我们绝不会袖手旁观的！我们是最强的赛尔先锋队！接下来局面由我们掌控！"],["恩恩，没错！"],[function():void
                  {
                     NpcDialog.show(NPC.LA_QI,["太感谢你们了！我先去附近的石塔养伤，如果你们有什么需求或者有什么想问的话就来里面找我吧！"],["恩恩，没问题，你快去吧！"],[function():void
                     {
                        AnimateManager.playMcAnimate(mainMC,18,"mc",function():void
                        {
                           NpcDialog.show(NPC.SEER,["麒麟一族，我代表赛尔号向你们保证，我们一定会拯救你们，复兴麒麟一族！"],null,null,false,function():void
                           {
                              TasksManager.complete(TaskController_887.TASK_ID,5,function():void
                              {
                                 (_map as MapProcess_702).initBoss();
                                 destroy();
                              });
                           });
                        });
                     }]);
                  }]);
               });
            });
         });
      }
      
      private static function removeListeners() : void
      {
         mainMC.removeEventListener(MouseEvent.CLICK,startStep2);
         mainMC.removeEventListener(MouseEvent.CLICK,talkToFairy);
         mainMC.removeEventListener(MouseEvent.CLICK,hideFairy);
         mainMC.removeEventListener(MouseEvent.CLICK,startStep3);
         mainMC.removeEventListener(MouseEvent.CLICK,fairyStandUp);
         mainMC.removeEventListener(MouseEvent.CLICK,startStep4);
         mainStone.removeEventListener(MouseEvent.CLICK,startStep5);
      }
      
      private static function get taskMC() : MovieClip
      {
         return mainMC["mc"] as MovieClip;
      }
      
      private static function get mainMC() : MovieClip
      {
         return _map.conLevel["task887mc"];
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         removeListeners();
         DisplayUtil.removeForParent(mainMC);
         ToolBarController.showOrHideAllUser(true);
         OgreController.isShow = true;
         MainManager.actorModel.visible = true;
         mainStone.buttonMode = false;
         mainStone.gotoAndStop(1);
         _map = null;
      }
   }
}
