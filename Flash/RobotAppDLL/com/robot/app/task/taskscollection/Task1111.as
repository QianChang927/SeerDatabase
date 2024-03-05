package com.robot.app.task.taskscollection
{
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
   
   public class Task1111
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:uint;
      
      private static const TASK_ID:uint = 1111;
      
      private static var _taskMC:MovieClip;
       
      
      public function Task1111()
      {
         super();
      }
      
      public static function initTaskForMap4(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         if(_taskState == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(1);
         }
         if(_taskState == TasksManager.ALR_ACCEPT)
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
      
      public static function initTaskForMap742(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _taskMC = _map.conLevel["task1111mc"];
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         _taskMC.buttonMode = true;
         MainManager.selfVisible = false;
         if(_taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  _taskMC.addEventListener(MouseEvent.CLICK,pro1);
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  pro2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  pro3();
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
      
      private static function pro1(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 30
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function pro2() : void
      {
         _taskMC.gotoAndStop(7);
         NpcDialog.show(NPC.MENGTA,["不行，这样下去父亲一定会被折磨死的！亲情胜于一切，我不能眼睁睁看着父亲受这种罪！去圣灵…."],["不…不能告诉他们！！"],[function():void
         {
            AnimateManager.playMcAnimate(_taskMC,7,"mc7",function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["卡修斯你怎么来了，其他战神联盟的人呢？！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ZOG,["小子，别耍花样！快告诉我们幻影宝石究竟在哪里？否则我会让你永远见不到你父亲！"],["幻影宝石就在圣灵峰！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_taskMC,8,"mc8",function():void
                     {
                        NpcDialog.show(NPC.KAXIUSI_WHITE,["迈尔斯，你快点清醒吧！在你面前的可是你的儿子蒙塔，难道你连自己的儿子也想对付吗！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.MENGTA,["父亲，你还记得我吗？我是你的儿子蒙塔啊！"],["蒙…塔…"],[function():void
                           {
                              AnimateManager.playMcAnimate(_taskMC,9,"mc9",function():void
                              {
                                 NpcDialog.show(NPC.KAXIUSI_WHITE,["看来，只有用实力来打醒你了，迈尔斯！"],["就靠你一个吗？"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(_taskMC,10,"mc10",function():void
                                    {
                                       NpcDialog.show(NPC.KAXIUSI_WHITE,["太好了，伙伴们！有你们相助，问题就都解决了！"],null,null,false,function():void
                                       {
                                          NpcDialog.show(NPC.MENGTA,["请不要伤害我的父亲，好吗？他是无辜的！可以用其他方式吗？"],["只有这个办法！"],[function():void
                                          {
                                             TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                                             {
                                                if(param1)
                                                {
                                                   pro3();
                                                }
                                             });
                                          }]);
                                       });
                                    });
                                 }]);
                              });
                           }]);
                        });
                     });
                  }]);
               });
            });
         }]);
      }
      
      private static function pro3() : void
      {
         _taskMC.gotoAndStop(11);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1111_4"),function():void
         {
            NpcDialog.show(NPC.LEIYI,["看来这场战役是无法避免了，我一定要去圣灵峰找迈尔斯！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.GAIYA,["让我们战神联盟一起联手，没有不能战胜的对手！"],["不，盖亚！迈尔斯的目标是我！"],[function():void
               {
                  NpcDialog.show(NPC.LEIYI,["你们快点离开这里，回到自己的星球去，我马上就会回来的！相信我的实力！"],["好吧！看来我们是无法改变你的主意了！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_taskMC,11,"mc11",function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["赛尔，6与22日，下午13:00—14:00，带着蒙塔来圣灵峰找我吧！拯救迈尔斯，我们需要蒙塔的帮助！"],["恩恩，明白！"],[function():void
                        {
                           AnimateManager.playMcAnimate(_taskMC,12,"mc12",function():void
                           {
                              NpcDialog.show(NPC.SEER,["赛尔，我们这就回去向船长报告这个事情，接下来就靠你了！"],["恩恩，放心吧！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(_taskMC,13,"mc13",function():void
                                 {
                                    NpcDialog.show(NPC.SEER,["迈尔斯，你一定会清醒过来的！雷神vs迈尔斯，世纪之战即将打响！"],["谁才是最后的王者呢？"],[function():void
                                    {
                                       AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1111_5"),function():void
                                       {
                                          TasksManager.complete(TASK_ID,3,function(param1:Boolean):void
                                          {
                                             if(param1)
                                             {
                                                destroy();
                                             }
                                          });
                                       },false);
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
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 742)
         {
            _taskMC.removeEventListener(MouseEvent.CLICK,pro1);
            DisplayUtil.removeForParent(_taskMC);
            _taskMC = null;
            MainManager.selfVisible = true;
         }
         _map = null;
      }
   }
}
