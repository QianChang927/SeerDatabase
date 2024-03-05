package com.robot.app.task.taskscollection
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1203
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:uint;
      
      private static const TASK_ID:uint = 1203;
       
      
      public function Task1203()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["task1203mc"];
      }
      
      public static function initForMap735(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         CommonUI.addYellowExcal(_map.topLevel,279,358);
         taskMC.addEventListener(MouseEvent.CLICK,pro0);
         if(_taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskMC.addEventListener(MouseEvent.CLICK,pro0);
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  pro1();
               }
               else
               {
                  destroy();
               }
            });
         }
         else if(_taskState == TasksManager.COMPLETE)
         {
            destroy();
         }
      }
      
      public static function initForMap767(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         if(_taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[1]) && !param1[2])
               {
                  taskMC.gotoAndStop(2);
                  _map.btnLevel["leiyi"].addEventListener(MouseEvent.CLICK,pro2);
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
      
      public static function pro0(param1:MouseEvent = null) : void
      {
         var e:MouseEvent = param1;
         var dialogue:Function = function():void
         {
            taskMC.removeEventListener(MouseEvent.CLICK,pro0);
            CommonUI.removeYellowExcal(_map.topLevel);
            NpcDialog.show(NPC.ALLISON,["可恶！刺杀雷伊的计划失败了！罗伯特的暗杀芯片也被赛尔破坏掉了！"],["比特大人会拆了我们的！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
               {
                  NpcDialog.show(NPC.BITEDAREN,["你们这两个蠢货！难得雷伊受伤，这么千载难逢的机会，竟然就这样无功而返！"],["大人饶命！"],[function():void
                  {
                     NpcDialog.show(NPC.ALLISON,["比特大人，不是我们无能，是赛尔太狡猾！"],["借口！"],[function():void
                     {
                        NpcDialog.show(NPC.BITEDAREN,["亏我还布下一招暗棋罗伯特，结果还是没能致雷伊于死地！现在它领悟了雷光之翼，更加不好对付了！"],["那怎么办？！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                           {
                              NpcDialog.show(NPC.ZOG,["大、大人，你不是要我们去和雷伊拼命吧……它现在所向无敌，我们实在不是它的对手啊……"],["哼！"],[function():void
                              {
                                 NpcDialog.show(NPC.BITEDAREN,["你们以为，我的暗棋只有一招？"],null,null,false,function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                                    {
                                       TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                                       {
                                          if(param1)
                                          {
                                             pro1();
                                          }
                                       });
                                    });
                                 });
                              }]);
                           });
                        }]);
                     }]);
                  }]);
               });
            }]);
         };
         NpcDialog.show(NPC.SEER,["居然是这两个蠢货，它们好像在等什么人……"],["我一定要潜伏好了一探究竟！","算了，我还是先回避一下！"],[function():void
         {
            if(_taskState == TasksManager.ALR_ACCEPT)
            {
               dialogue();
            }
            else
            {
               TasksManager.accept(TASK_ID,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     dialogue();
                  }
               });
            }
         }]);
      }
      
      public static function pro1() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 20
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function pro2(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _map.btnLevel["leiyi"].removeEventListener(MouseEvent.CLICK,pro2);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1203_2"),function():void
         {
            NpcDialog.show(NPC.LEIYI,["来吧！相信你自己的理智和眼睛！我接受你的挑战！"],["这气场……"],[function():void
            {
               NpcDialog.show(NPC.LUOBOSI,["我承认你很强大，不过为了哥哥，我不会退缩，我来啦！"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1203_1"),function():void
                  {
                     NpcDialog.show(NPC.LUOBOSI,["我败了，可恶！我完全不是你的对手！你想对我们兄弟怎么样？"],["不，你没败！"],[function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["你还是打掉了我一片羽毛，但是你毫发无伤，胜利的是你，你随时可以离开！"],["啊？你竟然……"],[function():void
                        {
                           NpcDialog.show(NPC.LUOBOSI,["你……我想我错了，你这样光明正大，不可能是坏人！"],["早就说了！"],[function():void
                           {
                              NpcDialog.show(NPC.LUOBOTE,["早就说了海盗才是坏人，你不肯听！"],null,null,false,function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.ZOG,["我刚才好像听到雷伊说你赢了？太好了，快点干掉它！"],null,null,false,function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                                       {
                                          TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                                          {
                                             if(param1)
                                             {
                                                destroy();
                                             }
                                          });
                                       });
                                    });
                                 });
                              });
                           }]);
                        }]);
                     }]);
                  });
               });
            }]);
         },false);
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            CommonUI.removeYellowExcal(_map.topLevel);
            taskMC.removeEventListener(MouseEvent.CLICK,pro0);
            if(_map.btnLevel["leiyi"])
            {
               _map.btnLevel["leiyi"].removeEventListener(MouseEvent.CLICK,pro2);
            }
            DisplayUtil.removeForParent(taskMC);
            _map = null;
         }
      }
   }
}
