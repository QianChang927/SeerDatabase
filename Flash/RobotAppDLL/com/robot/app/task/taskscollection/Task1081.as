package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.GameEvent;
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
   
   public class Task1081
   {
      
      public static const TASK_ID:uint = 1081;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1081()
      {
         super();
      }
      
      public static function initTaskForMap4(param1:BaseMapProcess) : void
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
      
      public static function initTaskForMap732(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[1]) && !param1[2])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep2();
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
      
      public static function initTaskForMap735(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[1]) && !param1[2])
               {
                  bossMC.visible = false;
                  gameMC.mouseEnabled = false;
                  KTool.hideMapAllPlayerAndMonster();
                  initStep3();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  bossMC.visible = false;
                  gameMC.mouseEnabled = false;
                  KTool.hideMapAllPlayerAndMonster();
                  initStep4();
               }
               else if(Boolean(param1[3]) && !param1[4])
               {
                  bossMC.visible = false;
                  gameMC.mouseEnabled = false;
                  KTool.hideMapAllPlayerAndMonster();
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
      
      public static function initStep2() : void
      {
         task1081MC.visible = true;
         AnimateManager.playMcAnimate(task1081MC,1,"mc",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["魔域仙子？难道她独自前往海盗据点吗？这可太危险了！伙伴们，我们要尽快找到她！"],["恩恩，继续前进！"],[function():void
            {
               KTool.showMapAllPlayerAndMonster();
               task1081MC.visible = false;
               MapManager.changeMap(735);
            }]);
         });
      }
      
      public static function initStep3() : void
      {
         taskMC.removeEventListener(MouseEvent.CLICK,initStep3);
         NpcDialog.show(NPC.MOYUXIANZI,["可恶的海盗，我魔域仙子今天要彻底击败你们，还尤米娜自由身，也还米娜村和平！"],["哈哈，就凭你一个人？"],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["魔域仙子，我们来助你一臂之力！海盗，接受我们赛尔号的愤怒吧！"],["慢着！！！"],[function():void
            {
               NpcDialog.show(NPC.MOYUXIANZI,["赛尔，多谢你们的好意！但这是我们米娜村自己的事情，请别插手，让我自己来处理！"],["魔域仙子...你？？"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                  {
                     NpcDialog.show(NPC.BITEDAREN,["决心很大！可你别忘记这里可是我们海盗的据点，进来容易出去难，哈哈哈！"],["我本来就没打算回去！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["不好，魔域仙子想和海盗集团同归于尽，我们不能让悲剧发生！"],["海盗，有本事就冲我们来！"],[function():void
                        {
                           NpcDialog.show(NPC.BITEDAREN,["什么？难道你是抱着必死的决心来到这里吗？哼哼，要干掉我们先问问你的伙伴吧！"],["尤米娜...尤米娜..."],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                              {
                                 NpcDialog.show(NPC.BITEDAREN,["尤米娜，快去劝劝你的朋友吧！她想摧毁整个海盗据点，不过我想你是清楚的，没有我们，你哥哥的下落..."],["不，魔域仙子你不能这样！"],[function():void
                                 {
                                    NpcDialog.show(NPC.MOYUXIANZI,["尤米娜，你是怎么了！难道你真的以为自己是海盗吗？你哥哥早就不在了，忘记他吧！"],["哥哥，他..."],[function():void
                                    {
                                       NpcDialog.show(NPC.YUMINA,["不行，我一定要找到哥哥，魔域仙子你回去吧！我保证海盗不会再侵犯米娜村落，我也不再是村落的一份子！"],["尤米娜，你真想放弃米娜村吗？"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.MOYUXIANZI,["我曾经发过誓，一定要把你带回去！既然说没用，那只能对不住你了！"],["来吧！尤米娜！"],[function():void
                                             {
                                                AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                                {
                                                   TasksManager.complete(TASK_ID,2,function(param1:Boolean = true):void
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
                  });
               }]);
            }]);
         }]);
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(6);
         NpcDialog.show(NPC.SAIXIAOXI,["不好，海盗一定又在动什么坏脑筋！这里面一定有阴谋！"],["先看看再说！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
            {
               NpcDialog.show(NPC.MOYUXIANZI,["尤米娜，其实有件事一直以来我都没有告诉你！"],["村长普兰特他..."],[function():void
               {
                  CartoonManager.play(ClientConfig.getFullMovie("task1081_0"),function():void
                  {
                     NpcDialog.show(NPC.YUMINA,["这...这是真的吗？米娜村的所有伙伴，其实都还惦记着我，是吗？"],["是的，我们从未放弃过你！"],[function():void
                     {
                        NpcDialog.show(NPC.YUMINA,["村长！！伙伴们！太感谢你们了！"],["现在你应该知道怎么做了吧！"],[function():void
                        {
                           NpcDialog.show(NPC.BITEDAREN,["不好，尤米娜开始动摇了，看来麻烦来了！"],["出现吧！博卡特"],[function():void
                           {
                              bossMC.visible = false;
                              AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.MOYUXIANZI,["尤米娜，坚持住！我这就来救你！"],null,null,false,function():void
                                    {
                                       equipmentMC.visible = false;
                                       AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.BITEDAREN,["好样的！博卡特，现在放了尤米娜吧！量她也不敢乱来，哈哈哈！"],["海盗，我不会放过你们的！"],[function():void
                                          {
                                             NpcDialog.show(NPC.SAIXIAOXI,["这样下去不行，我们一定要想办法帮助尤米娜，救出魔域仙子,否则就完了！"],["让我看看！"],[function():void
                                             {
                                                NpcDialog.show(NPC.SEER,["快看，那里的控制台一定就是关键，让我去那里试试吧！"],["伙伴们，掩护我！"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                                                   {
                                                      NpcDialog.show(NPC.SEER,["终于到了，接下来就看我的了！魔域仙子挺住啊！"],["点击控制台！"],[function():void
                                                      {
                                                         CommonUI.addYellowArrow(_map.topLevel,245,215,45);
                                                         gameMC.mouseEnabled = true;
                                                         EventManager.addEventListener(GameEvent.OVER,gameOverHandler);
                                                         EventManager.addEventListener(GameEvent.CANCEL,gameOverHandler);
                                                      }]);
                                                   });
                                                }]);
                                             }]);
                                          }]);
                                       });
                                    });
                                 });
                              });
                           }]);
                        }]);
                     }]);
                  });
               }]);
            });
         }]);
      }
      
      private static function gameOverHandler(param1:GameEvent) : void
      {
         var e:GameEvent = param1;
         gameMC.mouseEnabled = false;
         EventManager.removeEventListener(GameEvent.OVER,gameOverHandler);
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["太好了，这下魔域仙子有救了！赛尔，你真棒！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.BITEDAREN,["你们太天真了，这可是精灵改造装置，一旦进入立刻会被死黑能量吞噬！可怕的魔域仙子就要诞生了！"],["什么？？？"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                  {
                     NpcDialog.show(NPC.BITEDAREN,["哈哈哈，尤米娜，游戏还没有结束哦！快去找七星天珠吧！否则就再也见不到你哥哥和魔域仙子啦！"],["不...你不能带走魔域仙子！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                        {
                           NpcDialog.show(NPC.YUMINA,["我绝不会让你们把魔域仙子带走的！爆发吧！我的超能量！"],["尤米娜，我们也一起参战！"],[function():void
                           {
                              TasksManager.complete(TASK_ID,3,function(param1:Boolean = true):void
                              {
                                 if(param1)
                                 {
                                    initStep5();
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
         });
      }
      
      private static function initStep5() : void
      {
         taskMC.gotoAndStop(14);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1081_4"),function():void
         {
            NpcDialog.show(NPC.YUMINA,["你们两个蠢货，回去告诉比特，我会去找它的！到时候我要你们加倍偿还！"],["哼，你还是先找到七星天珠再说吧！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["尤米娜，七星天珠在我们这里，你拿去吧！现在的你比我们更需要它！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.YUMINA,["我要用自己的实力告诉海盗，它们的这次计划是失败的！伙伴们，我们在米娜村见！"],["有事来那里找我吧！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["看来我们和海盗集团的大战就要拉开了，让我们都回去准备一下吧！为了迪恩、也为了尤米娜！"],["恩恩，赛尔号必胜！"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["伙伴们，你们先回去吧！我继续刺探军情！我要让海盗知道，毁灭是它们唯一的出路！"],["咱们后会有期！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1081_5"),function():void
                                    {
                                       TasksManager.complete(TASK_ID,4,function(param1:Boolean = true):void
                                       {
                                          destroy();
                                       });
                                    },false);
                                 });
                              }]);
                           }]);
                        });
                     }]);
                  });
               });
            }]);
         });
      }
      
      private static function get taskMC() : MovieClip
      {
         if(_map)
         {
            return _map.conLevel["task1081MC"];
         }
         return null;
      }
      
      private static function get task1081MC() : MovieClip
      {
         if(MapManager.currentMap.id == 732)
         {
            return _map.animatorLevel["task1081MC"];
         }
         return null;
      }
      
      private static function get bossMC() : MovieClip
      {
         if(MapManager.currentMap.id == 735)
         {
            return _map.conLevel["bossMC"];
         }
         return null;
      }
      
      private static function get gameMC() : MovieClip
      {
         if(MapManager.currentMap.id == 735)
         {
            return _map.conLevel["gameMC"];
         }
         return null;
      }
      
      private static function get equipmentMC() : MovieClip
      {
         if(MapManager.currentMap.id == 735)
         {
            return _map.conLevel["equipmentMC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 735)
         {
            KTool.showMapAllPlayerAndMonster();
            EventManager.removeEventListener(GameEvent.OVER,gameOverHandler);
            EventManager.removeEventListener(GameEvent.CANCEL,gameOverHandler);
            if(taskMC)
            {
               DisplayUtil.removeForParent(taskMC);
            }
            equipmentMC.visible = true;
            bossMC.visible = true;
            bossMC.gotoAndPlay(1);
            gameMC.mouseEnabled = true;
            _map = null;
         }
         else if(MapManager.currentMap.id == 732)
         {
            KTool.showMapAllPlayerAndMonster();
            if(task1081MC)
            {
               DisplayUtil.removeForParent(task1081MC);
            }
            _map = null;
         }
      }
   }
}
