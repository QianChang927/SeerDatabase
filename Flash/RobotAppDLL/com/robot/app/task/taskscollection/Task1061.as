package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.GameEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1061
   {
      
      private static var _task1061mc:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:uint;
       
      
      public function Task1061()
      {
         super();
      }
      
      public static function initTaskForMap698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(1061) == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(119);
         }
         if(TasksManager.getTaskStatus(1061) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(1061,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(119);
               }
            });
         }
      }
      
      public static function initTaskForMap731(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _task1061mc = _map.conLevel["task1061mc"];
         _map.btnLevel["shiban"].mouseEnabled = false;
         _map.conLevel["mc"].visible = false;
         EventManager.addEventListener(GameEvent.OVER,onGameOver);
         _map.conLevel["sptboss"].visible = false;
         _map.conLevel["task1061mc"]["sptboss"].gotoAndStop(3);
         _map.conLevel["task1061mc"]["sptboss"].mouseChildren = false;
         _map.conLevel["task1061mc"].buttonMode = true;
         _map.conLevel["task1061mc"]["sptboss"].addEventListener(MouseEvent.CLICK,onSptBossClick);
         _taskState = TasksManager.getTaskStatus(1061);
         _map.conLevel["mc"].visible = false;
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
            case TasksManager.COMPLETE:
               destroy();
               break;
            case TasksManager.ALR_ACCEPT:
               MainManager.selfVisible = false;
               OgreController.isShow = false;
               TasksManager.getProStatusList(1061,function(param1:Array):void
               {
                  if(!param1[0])
                  {
                     destroy();
                  }
                  else if(Boolean(param1[0]) && !param1[1])
                  {
                     pro1();
                  }
                  else if(Boolean(param1[1]) && !param1[2])
                  {
                     pro2();
                  }
                  else if(Boolean(param1[2]) && !param1[3])
                  {
                     pro3();
                  }
                  else if(Boolean(param1[3]) && !param1[4])
                  {
                     pro4();
                  }
                  else
                  {
                     destroy();
                  }
               });
         }
      }
      
      private static function onSptBossClick(param1:MouseEvent) : void
      {
         var target:MovieClip = null;
         var e:MouseEvent = param1;
         target = e.currentTarget as MovieClip;
         if(target.currentFrame == 3)
         {
            AnimateManager.playMcAnimate(target,3,"mc3",function():void
            {
               target.gotoAndStop(1);
               fightWithBoss();
            });
         }
         else
         {
            fightWithBoss();
         }
      }
      
      private static function fightWithBoss() : void
      {
         NpcDialog.show(NPC.PULANTE,["米娜村，是我的全部，为了村落我要一直战斗下去！小子，来挑战我吧！我会让你知道如何战斗！"],["我要挑战你！","我等会再来！"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
            FightManager.fightWithBoss("普兰特",0);
         },function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["task1061mc"]["sptboss"],2,"mc2",function():void
            {
               _map.conLevel["task1061mc"]["sptboss"].gotoAndStop(3);
            });
         }]);
      }
      
      private static function onFightFinish(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.PULANTE,["果然年轻有为啊！你已经可以独当一面的，你现在可以离开这里了！"],["放心吧！我会帮助米娜村的！"]);
         }
         else
         {
            NpcDialog.show(NPC.PULANTE,["小子，你还得多多努力啊！相信通过你的努力一定会更加强大的！"],["继续修炼！"]);
         }
      }
      
      private static function pro1() : void
      {
         CommonUI.addYellowExcal(_map.topLevel,465,385);
         _map.btnLevel["saixiaoxi"].addEventListener(MouseEvent.CLICK,onSaiXiaoXiClick);
      }
      
      private static function onSaiXiaoXiClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.removeYellowExcal(_map.topLevel);
         DisplayUtil.removeForParent(_map.btnLevel["saixiaoxi"]);
         NpcDialog.show(NPC.SAIXIAOXI,["咦！这里难道就是米娜村！！！不是说这里有危机吗？怎么连个人影都没有啊！"],["哼，被骗了吧！我猜得没错！"],[function():void
         {
            NpcDialog.show(NPC.KALULU,["不会是米娜村的危机已经发生了吧？消失了？还是被抓走了呢？一定有问题！"],["卡璐璐，你就别执迷不悟了！"],[function():void
            {
               NpcDialog.show(NPC.SEER,["阿铁打，我们先别急着争论，还是先看看附近的情况吧！"],["恩，赛尔说的没错！"],[function():void
               {
                  AnimateManager.playMcAnimate(_task1061mc,2,"mc2",function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["奇怪了，找了这么久，什么进展都没有，这里难道真的已经没有人居住了吗？好冷清啊！"],null,null,false,function():void
                     {
                        AnimateManager.playMcAnimate(_task1061mc,3,"mc3",function():void
                        {
                           NpcDialog.show(NPC.ATIEDA,["想我们走？没这么容易，你快点叫尤米娜出来，让我好好教训她不可！"],["米娜村，岂能容你这般胡来！"],[function():void
                           {
                              NpcDialog.show(NPC.ATIEDA,["是吗？那我偏要胡来，尤米娜一天不出现，我阿铁打是不会走的！你看着办吧！"],["看你能坚持多久！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(_task1061mc,4,"mc4",function():void
                                 {
                                    NpcDialog.show(NPC.KALULU,["魔域仙子，这里到底发生了什么，能告诉我们吗？上次为什么你没有拿走我们的七星天珠呢？"],["这里不管你们的事！"],[function():void
                                    {
                                       NpcDialog.show(NPC.MOYUXIANZI,["米娜村的事情由我们自己解决，不需要其他人的帮助！如果真的要米娜村灭亡，我和尤米娜也会为了村落奋战到底的！"],["看来事情真的严重啊！"],[function():void
                                       {
                                          NpcDialog.show(NPC.MOYUXIANZI,["你们还是快走吧！我不想让你们卷入这场危机中，快点离开这里，走！"],null,null,false,function():void
                                          {
                                             AnimateManager.playMcAnimate(_task1061mc,5,"mc5",function():void
                                             {
                                                NpcDialog.show(NPC.ALLISON,["真是冤家路窄啊！赛尔，我们又见面啦！这次你们可别想全身而退咯！啊哈哈哈！"],["果然是你们，两个蠢货！"],[function():void
                                                {
                                                   NpcDialog.show(NPC.ZOG,["蠢货？？那是从前的事情了！现在我们不知有多精明，这次计划的完美实施就是我们最大的进步！！"],["一群白痴！"],[function():void
                                                   {
                                                      NpcDialog.show(NPC.ALLISON,["等等再收拾你们！魔域仙子，七星天珠你们准备的怎么样啦！是不是不想要这个村落了？啊！！！！"],["你们可别忘了！比特大人还等着呢？"],[function():void
                                                      {
                                                         AnimateManager.playMcAnimate(_task1061mc,6,"mc6",function():void
                                                         {
                                                            TasksManager.complete(1061,1,function(param1:Boolean):void
                                                            {
                                                               if(param1)
                                                               {
                                                                  pro2();
                                                               }
                                                            });
                                                         });
                                                      }]);
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
                     });
                  });
               }]);
            }]);
         }]);
      }
      
      private static function pro2() : void
      {
         NpcDialog.show(NPC.ZOG,["你们这群没用的东西，看来不给你们一点颜色看看，还真以为我们脾气好啊！"],["兄弟们，给我上啦！"],[function():void
         {
            AnimateManager.playMcAnimate(_task1061mc,7,"mc7",function():void
            {
               NpcDialog.show(NPC.PULANTE,["你们要的七星天珠我们已经找了很久，但是一直没有下落，但是你们不能伤害我的村民，否则别逼我对你们不客气！"],["哟！还挺嚣张的嘛！"],[function():void
               {
                  NpcDialog.show(NPC.ALLISON,["老家伙，既然你这么帮着你的村民，那就从你开始吧！让你尝尝海盗的实力！"],["不，你们不能对普兰特动手！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1061_3"),function():void
                     {
                        NpcDialog.show(NPC.ZOG,["尤米娜，你居然敢与我们为敌，难道你就不怕我们把整个米娜村彻底毁掉吗？"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.ALLISON,["大哥，这家伙已经变节了！她已经背叛了我们，趁这机会干掉她吧！"],["哼，你们觉得有胜算吗？"],[function():void
                           {
                              NpcDialog.show(NPC.PULANTE,["尤米娜，这里不需要你的帮助，既然你已经投靠了海盗集团就不是米娜村的一份子，米娜村不需要叛徒！"],["什么！尤米娜居然！！！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(_task1061mc,8,"mc8",function():void
                                 {
                                    NpcDialog.show(NPC.ZOG,["哈哈，尤米娜虽然倔强的很，不过却是我们最好的得力助手！相信找回七星天珠对她而言，一定不是难事！"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.MOYUXIANZI,["其实…尤米娜她…她是为了…."],["住口，魔域仙子！"],[function():void
                                       {
                                          NpcDialog.show(NPC.YUMINA,["佐格、艾利逊！我答应你们的事情一定会做到，但是请你们不要打米娜村的主意，否则我一定不会放过你们！"],["这个当然，我们只要七星天珠！"],[function():void
                                          {
                                             AnimateManager.playMcAnimate(_task1061mc,9,"mc9",function():void
                                             {
                                                NpcDialog.show(NPC.PULANTE,["我们会以自己的方式保护米娜村，虽然我们势单力薄，但是起码我们知道为什么而活，什么是信仰！"],["尤米娜，离开这里，永远不要回来！"],[function():void
                                                {
                                                   NpcDialog.show(NPC.YUMINA,["好吧！普兰特你是这里的村长，我尊重你们，我这就走！不过米娜村永远都是我的故乡"],null,null,false,function():void
                                                   {
                                                      AnimateManager.playMcAnimate(_task1061mc,10,"mc10",function():void
                                                      {
                                                         NpcDialog.show(NPC.YUMINA,["魔域仙子，后会有期了，好好保护米娜村！总有一天我会回来的！"],["再见了，米娜村…"],[function():void
                                                         {
                                                            AnimateManager.playMcAnimate(_task1061mc,11,"mc11",function():void
                                                            {
                                                               TasksManager.complete(1061,2,function(param1:Boolean):void
                                                               {
                                                                  if(param1)
                                                                  {
                                                                     pro3();
                                                                  }
                                                               });
                                                            });
                                                         }]);
                                                      });
                                                   });
                                                }]);
                                             });
                                          }]);
                                       }]);
                                    });
                                 });
                              }]);
                           }]);
                        });
                     });
                  }]);
               }]);
            });
         }]);
      }
      
      private static function pro3() : void
      {
         NpcDialog.show(NPC.ALLISON,["事情还没结束哦！赛尔，还有魔域仙子，如果你们能帮我们找到0xff0000黑石之力0xffffff，我们立刻撤军,怎么样？"],["什么！黑石之力？"],[function():void
         {
            NpcDialog.show(NPC.MOYUXIANZI,["黑石之力！这它们也知道？这可是米娜村最珍贵的圣物，一旦掉入邪恶势力的掌控范围，后果不堪设想啊！"],["考虑的怎么样啊！"],[function():void
            {
               NpcDialog.show(NPC.MOYUXIANZI,["不行，我不会答应你们的！"],["那我们只能用武力了！"],[function():void
               {
                  AnimateManager.playMcAnimate(_task1061mc,12,"mc12",function():void
                  {
                     NpcDialog.show(NPC.ZOG,["赛尔，你们去看看怎么回事！你们没得选择，如果不从我们就铲平这里！"],["真是一群卑鄙的家伙！"],[function():void
                     {
                        NpcDialog.show(NPC.MOYUXIANZI,["赛尔，你们不能去，米娜村已经存在上万年，我们不知道这些万年前的古迹中有些什么！"],["没关系，我们可以搞定的！"],[function():void
                        {
                           AnimateManager.playMcAnimate(_task1061mc,13,"mc13",function():void
                           {
                              NpcDialog.show(NPC.SEER,["队长！让我来吧！这些东西难不到我的！"],["小心啊！"],[function():void
                              {
                                 CommonUI.addYellowArrow(_map.topLevel,445,290,90);
                                 _map.btnLevel["shiban"].mouseEnabled = true;
                              }]);
                           });
                        }]);
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      private static function pro4() : void
      {
         NpcDialog.show(NPC.ATIEDA,["看来这次巨石营地又要面临一场大战了！我们是不是应该去帮助一下巨石灵王！"],["等等，伙伴们！"],[function():void
         {
            NpcDialog.show(NPC.MOYUXIANZI,["伙伴们，感谢你们对米娜村的帮助，其实尤米娜是为了村落才投靠海盗集团的！"],["什么？为了村落？"],[function():void
            {
               CartoonManager.play(ClientConfig.getFullMovie("task_1061_5"),function():void
               {
                  NpcDialog.show(NPC.MOYUXIANZI,["其实尤米娜是为了保护村落，才会加入海盗集团，她其实很想回到村落，但是七星天珠下落不明，直到遇到了你们！"],["原来是这样！"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["尤米娜的忍辱负重真是太伟大了！既然这样我们决定帮助尤米娜回到村落，我们会继续寻找其他七星天珠的下落！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["魔域仙子，米娜村就交给你了！我们的目的就是彻底粉碎海盗集团的阴谋！"],["恩恩，放心吧！我会誓死保卫这里的！"],[function():void
                        {
                           AnimateManager.playMcAnimate(_task1061mc,16,"mc16",function():void
                           {
                              NpcDialog.show(NPC.MOYUXIANZI,["伙伴们，感谢你们的挺身而出，我们后会有期！"],["恩恩，保重！"],[function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["魔域仙子，这是我们探险小队的友情队彰，送给你们！这个队彰，证明着我们的友情！"],["恩，感谢你们，我会转达尤米娜的！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(_task1061mc,17,"mc17",function():void
                                    {
                                       TasksManager.complete(1061,4,function(param1:Boolean):void
                                       {
                                          if(param1)
                                          {
                                             destroy();
                                          }
                                       });
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
      }
      
      private static function onGameOver(param1:GameEvent) : void
      {
         var e:GameEvent = param1;
         EventManager.removeEventListener(GameEvent.OVER,onGameOver);
         CommonUI.removeYellowArrow(_map.topLevel);
         _map.btnLevel["shiban"].mouseEnabled = false;
         AnimateManager.playMcAnimate(_task1061mc,14,"mc14",function():void
         {
            NpcDialog.show(NPC.JUMOGUAI,["哈哈，终于…终于成功了！我的力量得到无限的强化，我要让那些曾经小看我的对手知道，蘑菇怪是最强的！"],["什么？蘑菇怪？"],[function():void
            {
               NpcDialog.show(NPC.ZOG,["切，在怎么强化你也是一直蘑菇，有什么了不起的！你以为你变了样子我们海盗就怕了你吗？"],["你们这群蠢货！"],[function():void
               {
                  NpcDialog.show(NPC.ALLISON,["让我来试试你的实力吧！大蘑菇！！！！"],["我会让你输的很惨！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1061_4"),function():void
                     {
                        NpcDialog.show(NPC.JUSHILINGWANG,["蘑菇怪你居然超进化了？这一定跟最近发生的星际突变造成的，收手吧！这些力量不属于你！"],["哈哈，你怕我了灵王！"],[function():void
                        {
                           NpcDialog.show(NPC.JUMOGUAI,["灵王，你敢接受我的挑战吗？我也很想得到你的力量！！"],["有本事就来巨石营地找我吧"],[function():void
                           {
                              AnimateManager.playMcAnimate(_task1061mc,15,"mc15",function():void
                              {
                                 TasksManager.complete(1061,3,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       pro4();
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
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 731)
         {
            _map.conLevel["task1061mc"]["sptboss"].removeEventListener(MouseEvent.CLICK,onSptBossClick);
            MainManager.selfVisible = true;
            OgreController.isShow = true;
            _map.conLevel["sptboss"].visible = true;
            _map.conLevel["mc"].visible = true;
            DisplayUtil.removeForParent(_task1061mc);
            _task1061mc = null;
            _map.btnLevel["shiban"].mouseEnabled = true;
            if(EventManager.hasEventListener(GameEvent.OVER))
            {
               EventManager.removeEventListener(GameEvent.OVER,onGameOver);
            }
            _map.btnLevel["saixiaoxi"].removeEventListener(MouseEvent.CLICK,onSaiXiaoXiClick);
         }
         _map = null;
      }
   }
}
