package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
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
   
   public class Task1202
   {
      
      public static const TASK_ID:uint = 1202;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1202()
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
      
      public static function initTaskFor773(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskMC.buttonMode = true;
                  KTool.hideMapAllPlayerAndMonster();
                  taskMC.addEventListener(MouseEvent.CLICK,initStep1);
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
         taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
         taskMC.buttonMode = false;
         taskMC.gotoAndStop(2);
         NpcDialog.show(NPC.SAIXIAOXI,["终于到了，恶魔星的最深处，第八领域，相信过不了多久我们就会遇到魔圣尤尼卡的，先找找阿铁打的下落！"],["恩恩，我们分头找！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
            {
               NpcDialog.show(NPC.SEER,["奇怪了，平时阿铁打最宝贝自己的斩月双刀了，为什么会出现在这里呢？难道阿铁打就在附近？"],["可能没这么简单！"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["你们还记得吗？如果按照时间来算，阿铁打明显应该比我们早抵达第八领域，所以在这段时间里，任何事情都可能发生！"],["难道阿铁打被抓了！"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["我想很有可能是尤尼卡所为，在加上阿铁打又是孤身一人，肯定不是尤尼卡的对手！"],["看来，不找到尤尼卡是不行了！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                        {
                           NpcDialog.show(NPC.KALULU,["阿铁打，如果你听到的话，就回答我们！大不了回去我不教训你了嘛！呜呜呜呜呜......"],["别伤心，卡璐璐，一定会有办法的！"],[function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["卡璐璐你留在原地，我和赛尔还有米咔去看看还有什么线索！"],["米咔，我们走！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.SAIXIAOXI,["米咔，你怎么了？怎么会害怕成这个样子，看来这个祭坛一定有问题！"],["队长，让我去看看！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "，你没事吧！这个祭坛真是诡异啊！怎么会攻击你呢！我这就扶你起来！"],["我也不知道！啊...疼！！"],[function():void
                                          {
                                             AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                                             {
                                                NpcDialog.show(NPC.SEER,["没事...没事！你们别管我，先找阿铁打重要！"],["可恶，这里到底是个什么地方啊！"],[function():void
                                                {
                                                   NpcDialog.show(NPC.SAIXIAOXI,["看来问题已经很明显了，如果我们不能找到尤尼卡或者是破解这里的机关，我们是无法找到阿铁打的！"],["尤尼卡，你给我出来！我们已经来了！"],[function():void
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
                     }]);
                  }]);
               }]);
            });
         }]);
      }
      
      private static function initStep2() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 16
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(12);
         NpcDialog.show(NPC.SEER,["布莱克，你怎么来了！雷伊的伤势好点了吗？"],["问的好！赛尔！"],[function():void
         {
            NpcDialog.show(NPC.BULAIKELANTE,["我这次来就是想亲口告诉尤尼卡，雷伊的伤势已经全部恢复，圣战随时可以开始！"],["什么！竟然这么快！"],[function():void
            {
               NpcDialog.show(NPC.BULAIKELANTE,["怎么样，没想到吧！有本事就把那个瞌睡虫召唤出来啊！我们战神联盟随时等着你们！"],["瞌睡虫？难道你在说恶灵兽！！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                  {
                     NpcDialog.show(NPC.YOUNIKA,["布莱克，你这是对恶魔星的大大大不敬，看来今天这里就是你的坟墓了！"],["哈哈，来吧！"],[function():void
                     {
                        NpcDialog.show(NPC.BULAIKE_NEW,["兰特，让他们尝尝你的实力吧！正好也让我看看你这段时间的变化！"],["哇，兰特第一次和布莱克一起出战！"],[function():void
                        {
                           NpcDialog.show(NPC.YOUNIKA,["哼哼，这么小的一条小龙，能有什么作为，你还是先照顾你自己吧！"],["八大将领，给我上！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1202_3"),function():void
                              {
                                 NpcDialog.show(NPC.BULAIKE_NEW,["什么！索兰特的攻击居然对尤尼卡无效？这家伙到底是什么怪物啊！"],["别白费心思了，布莱克！"],[function():void
                                 {
                                    NpcDialog.show(NPC.YOUNIKA,["回去告诉雷伊，咱们圣战见！我会在圣战废墟等他，在哪里跌倒我就要在哪里爬起来！"],["尤尼卡...你！"],[function():void
                                    {
                                       NpcDialog.show(NPC.YUMINA,["哥哥，我这样为你付出这么多，你都不在意吗？连我的生命你也不在乎吗？既然这样我也要加入雷伊的行列！"],["只有击败你才是唯一的出路！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.YOUNIKA,["别浪费时间了，谁的实力更强让时间来证明吧！千万别失约哦！"],["我们走！"],[function():void
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
         taskMC.gotoAndStop(15);
         NpcDialog.show(NPC.YUMINA,["怎么会变成这样，我怎么和米娜村的伙伴们交代啊！出来这么长时间，还是不能把哥哥带回去！"],["我恨我自己，真没用！"],[function():void
         {
            NpcDialog.show(NPC.BULAIKE_NEW,["尤米娜别这样，我们会想办法帮助你的，不信你问问赛尔啊！"],["赛尔，你说对吧！"],[function():void
            {
               NpcDialog.show(NPC.SEER,["那是，只要是我的朋友，不管什么事，我都会帮忙的！"],["真的吗？太感谢你们了！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
                  {
                     NpcDialog.show(NPC.BULAIKE_NEW,["好了，赛尔！我也该回去了，咱们圣战见！！"],["恩恩，放心吧！一定都会来的！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
                        {
                           NpcDialog.show(NPC.SEER,["0xff00008月31日，下午13:00—14:300xffffff，超时空圣战即将打响，所有赛尔，如果你听到我的号召，请一定要前往圣战废墟！"],["这是我们的责任！"],[function():void
                           {
                              TasksManager.complete(TASK_ID,4,function(param1:Boolean = true):void
                              {
                                 destroy();
                              });
                           }]);
                        });
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 773 && Boolean(_map.conLevel["task1202MC"]))
         {
            return _map.conLevel["task1202MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 773)
         {
            KTool.showMapAllPlayerAndMonster();
            if(taskMC)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
               DisplayUtil.removeForParent(taskMC);
            }
            _map = null;
         }
      }
   }
}
