package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1232;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1232
   {
      
      private static var m:BaseMapProcess;
      
      private static var lastStep:Boolean = false;
       
      
      public function Task1232()
      {
         super();
      }
      
      public static function initForMap767(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         m = map;
         if(lastStep)
         {
            m.btnLevel["fixture"].visible = false;
            destroy();
            thirdHalfStep();
         }
         else if(TasksManager.getTaskStatus(TaskController_1232.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1232.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  MapListenerManager.add(m.conLevel["task1232mc"],firstHalfStep);
                  m.conLevel["task1232mc"].gotoAndStop(1);
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
      
      public static function destroy() : void
      {
         if(m)
         {
            KTool.showMapAllPlayerAndMonster();
            DisplayUtil.removeForParent(m.conLevel["task1232mc"]);
            m = null;
         }
      }
      
      public static function firstStep(param1:*) : void
      {
         var e:* = param1;
         NpcDialog.show(NPC.SAIXIAOXI,["哎，最近极光之羽的搜索好困难！已经很久没有新羽毛的线索了！"],["我就是特意为这事来的！","我只是碰巧路过这里呢！"],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["极光之羽含有极高的能量反应，绝不可能凭空消失！肯定发生了什么事！"],["现在该怎么办呢？"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["事到如今，只好去求助大祭司木木啦！希望他能给我们一些有用的线索！听说大祭司现在正在雷神秘境！"],["队长！我们马上出发吧！"],[function():void
               {
                  MapManager.changeMap(767);
               }]);
            }]);
         }]);
      }
      
      private static function firstHalfStep(param1:* = null) : void
      {
         var e:* = param1;
         m.btnLevel["fixture"].visible = false;
         AnimateManager.playMcAnimate(m.conLevel["task1232mc"],2,"mc",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["木木祭祀，我们正要找你呢！相信你已经知道我们的来意了吧！"],["恩，来的正好！"],[function():void
            {
               NpcDialog.show(NPC.MUMU,["我正和雷伊说这件事呢！你是来问羽毛下落的吧！"],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(m.conLevel["task1232mc"],3,"mc",function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["果然不出我所料！是佐格和艾利逊把剩下的羽毛藏起来了！"],["这两个坏蛋！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["这两个家伙一定是害怕雷伊的强大，所以千方百计阻挠我们集齐极光之羽！"],["我们该怎么办？"],[function():void
                        {
                           NpcDialog.show(NPC.LEIYI,["魔神艾里克随时都可能受到海盗的教唆为非作歹！我需要抓紧时间修炼，这件事，就拜托你们啦！ "],["出发！目的地巨石星！"],[function():void
                           {
                              NpcDialog.show(NPC.MUMU,["赛小息、赛尔，你们放心的去吧！在关键的时候，会有神秘人来帮助你们的！"],["神秘人？"],[function():void
                              {
                                 AnimateManager.playMcAnimate(m.conLevel["task1232mc"],4,"mc",function():void
                                 {
                                    TasksManager.complete(TaskController_1232.TASK_ID,0,function():void
                                    {
                                       MapManager.changeMap(20);
                                    });
                                 });
                              }]);
                           }]);
                        }]);
                     }]);
                  });
               });
            }]);
         });
      }
      
      public static function initForMap20(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         m = map;
         if(TasksManager.getTaskStatus(TaskController_1232.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1232.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  MapListenerManager.add(m.conLevel["task1232mc"],secondStep);
                  m.conLevel["task1232mc"].gotoAndStop(1);
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  MapListenerManager.add(m.conLevel["task1232mc"],thirdStep);
                  m.conLevel["task1232mc"].gotoAndStop(1);
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
      
      private static function secondStep(param1:*) : void
      {
         var e:* = param1;
         AnimateManager.playMcAnimate(m.conLevel["task1232mc"],2,"mc",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["木木怎么把我们送到海洋星来了！它不是给巴特传染了吧！"],["我觉得木木一定有它的理由"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["莫非，极光之羽的线索在这里？大家分头找找！"],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(m.conLevel["task1232mc"],3,"mc",function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["米咔！好样的！快让我研究一下！"],["好像是个奇怪的东西"],[function():void
                     {
                        NpcDialog.show(NPC.KALULU,["上面似乎有个按钮"],["快按一下看看"],[function():void
                        {
                           AnimateManager.playMcAnimate(m.conLevel["task1232mc"],4,"mc",function():void
                           {
                              NpcDialog.show(NPC.KALULU,["如果你想得到极光之羽，就对海螺大喊一声“芝麻开螺”！"],["哇，这么神奇？"],[function():void
                              {
                                 AnimateManager.playMcAnimate(m.conLevel["task1232mc"],5,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.SAIXIAOXI,["哈，这么先进！居然能识别我的声音！"],["小息小心！"],[function():void
                                    {
                                       NpcDialog.show(NPC.KALULU,["没听见他说你敌人吗，快扔掉它！"],null,null,false,function():void
                                       {
                                          TasksManager.complete(TaskController_1232.TASK_ID,1,function():void
                                          {
                                             thirdStep(null);
                                          });
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
      }
      
      private static function thirdStep(param1:*) : void
      {
         var e:* = param1;
         AnimateManager.playMcAnimate(m.conLevel["task1232mc"],6,"mc",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["糟了，这是个陷阱！"],["哇哈哈！"],[function():void
            {
               AnimateManager.playMcAnimate(m.conLevel["task1232mc"],7,"mc",function():void
               {
                  NpcDialog.show(NPC.ZOG_20111027,["上当了吧！路边陌生的东西怎么可以随便乱动呢！"],["哈哈"],[function():void
                  {
                     NpcDialog.show(NPC.ALLISON_20111027,["我们海盗也是有高科技产品的！这是第一代赛尔捕捉陷阱，具有语音识别、削弱移动力多种功能！"],["糟了！"],[function():void
                     {
                        NpcDialog.show(NPC.ATIEDA,["难怪我身体酸麻无力！这个东西肯定有干扰信号！"],["束手就擒吧！"],[function():void
                        {
                           NpcDialog.show(NPC.ZOG_20111027,["有了你们这些人质，就可以要挟雷伊了！只要雷伊不能使出全力，艾里克一定可以轻松取胜！"],["你好卑鄙"],[function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["佐格！艾利逊！你们这两个卑鄙小人！"],["哈哈"],[function():void
                              {
                                 NpcDialog.show(NPC.ZOG_20111027,["谢谢夸奖！你不会天真的以为海盗还会光明正大的吧？"],null,null,false,function():void
                                 {
                                    AnimateManager.playMcAnimate(m.conLevel["task1232mc"],8,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["哈哈，路边的奇怪东西是不能随便动的嘛！"],["看！地上是羽毛！还有个纸条！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(m.conLevel["task1232mc"],9,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.SAIXIAOXI,["海洋星隐士……是谁啊，这就是木木说的会帮我们的人嘛？"],["不管了，先把羽毛给雷伊送去吧！"],[function():void
                                             {
                                                lastStep = true;
                                                MapManager.changeMap(767);
                                             }]);
                                          });
                                       }]);
                                    });
                                 });
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               });
            }]);
         });
      }
      
      private static function thirdHalfStep() : void
      {
         NpcDialog.show(NPC.SEER,["雷伊雷伊！我又找到了三根极光之羽！"],["干的好！"],[function():void
         {
            NpcDialog.show(NPC.LEIYI,["谢谢你赛尔！快点点击雷光之羽存放装置激活翅膀领取你的奖励吧！还剩最后一根羽毛了！"],["恩恩！"],[function():void
            {
               NpcDialog.show(NPC.LEIYI,["当羽毛集齐，我将送给你凝聚极光之翼的神奇力量，可以在短时间内让任何一个精灵获得超进化的力量！"],["不管了，先把羽毛给雷伊送去吧！"],[function():void
               {
                  TasksManager.complete(TaskController_1232.TASK_ID,2,function():void
                  {
                     lastStep = false;
                     MapManager.currentMap.btnLevel["fixture"].visible = true;
                     CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,666,165,60);
                  });
               }]);
            }]);
         }]);
      }
   }
}
