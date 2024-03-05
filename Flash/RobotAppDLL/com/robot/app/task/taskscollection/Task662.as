package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_662;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task662
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
       
      
      public function Task662()
      {
         super();
      }
      
      public static function initTask() : void
      {
         TasksManager.accept(TaskController_662.TASK_ID,function(param1:Boolean):void
         {
            if(param1)
            {
               DebugTrace.show("任务接取成功");
               taskStep = 0;
               gotoStep1();
            }
         });
      }
      
      public static function gotoStep1() : void
      {
         taskStep = 0;
         NpcDialog.show(NPC.SHIPER,["小赛尔，我们又发现新的的星球了，事不宜迟立刻出发吧！"],["恩恩，赛尔义不容辞！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_662_1"),function():void
            {
               MapManager.changeMap(451);
            });
         }]);
      }
      
      public static function initTaskForMap451(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.topLevel["maskMC"].mouseChildren = _map.topLevel["maskMC"].mouseEnabled = false;
         nRet = uint(TasksManager.getTaskStatus(TaskController_662.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            OgreController.isShow = false;
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TaskController_662.TASK_ID,function(param1:Array):void
            {
               var a:Array = param1;
               if(!a[0])
               {
                  taskStep = 0;
                  TasksManager.complete(TaskController_662.TASK_ID,0,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        DebugTrace.show("第一步完成");
                        taskStep = 1;
                        gotoStep2();
                     }
                  });
               }
               else if(Boolean(a[0]) && !a[1])
               {
                  taskStep = 1;
                  gotoStep2();
               }
               else if(Boolean(a[0]) && Boolean(a[1]) && !a[2])
               {
                  taskStep = 2;
                  gotoStep3();
               }
               else if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && !a[3])
               {
                  taskStep = 3;
                  gotoStep4();
               }
               else if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && Boolean(a[3]) && !a[4])
               {
                  taskStep = 4;
                  gotoStep5();
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_map.topLevel["maskMC"]);
            DisplayUtil.removeForParent(_map.conLevel["mainMC"]);
            DisplayUtil.removeForParent(_map.conLevel["stoneMC"]);
         }
      }
      
      private static function gotoStep2() : void
      {
         NpcDialog.show(NPC.SEER,["咦！这里好暗啊！怎么回事？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SEER,["我还是先到附近看看，这里的环境好诡异哦！ "],["去附近的山洞瞧瞧！"],[function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["mainMC"],1,"mc1",function():void
               {
                  NpcDialog.show(NPC.FITJIDU,["﹩﹟﹠﹪你…你是？"],["我叫赛尔，是赛尔号先锋队的成员！"],[function():void
                  {
                     NpcDialog.show(NPC.FITJIDU,["﹩﹟﹠﹪…..."],["这里好暗啊！为什么一点光亮都没有呢！"],[function():void
                     {
                        NpcDialog.show(NPC.FITJIDU,["哎…说来话长，在我们这里光明是被严令禁止的，哪怕一丁点火光都不允许！"],["啊！竟然有这样的事情！太霸道了！"],[function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["mainMC"],2,"mc2",function():void
                           {
                              NpcDialog.show(NPC.SEER,["别..别这样！一定会有办法解决的。"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.FITJIDU,["算了，我们不想连累你，你还是回去吧！要是被布莱克发现可就糟了！"],["布莱克？？？"],[function():void
                                 {
                                    _map.conLevel["mainMC"].gotoAndStop(3);
                                    NpcDialog.show(NPC.FITJIDU,["布莱克是邪灵组织的爪牙，行踪捉摸不定，说来就来！我们称它为“精灵鬼影”！"],["邪灵组织？精灵鬼影？"],[function():void
                                    {
                                       NpcDialog.show(NPC.FITJIDU,["是啊！邪灵组织信仰黑暗元素，现在谁都不敢制造光亮，就怕会激怒它们！ "],["太可恶了，我就不信这个邪，我现在就要把这个地方弄亮！"],[function():void
                                       {
                                          NpcDialog.show(NPC.FITJIDU,["啊！千万不要啊！我们可不想看到它们！"],["不怕，有我赛尔在呢！（点击篝火堆中的篝火）"],[function():void
                                          {
                                             TasksManager.complete(TaskController_662.TASK_ID,1,function(param1:Boolean):void
                                             {
                                                if(param1)
                                                {
                                                   DebugTrace.show("第二步完成");
                                                   taskStep = 2;
                                                   gotoStep3();
                                                }
                                             });
                                          }]);
                                       }]);
                                    }]);
                                 }]);
                              });
                           });
                        }]);
                     }]);
                  }]);
               });
            }]);
         });
      }
      
      private static function gotoStep3() : void
      {
         _map.conLevel["mainMC"].gotoAndStop(3);
         _map.conLevel["stoneMC"].buttonMode = true;
         _map.conLevel["stoneMC"].addEventListener(MouseEvent.CLICK,stoneHandler);
      }
      
      private static function stoneHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["stoneMC"].buttonMode = false;
         _map.conLevel["stoneMC"].removeEventListener(MouseEvent.CLICK,stoneHandler);
         AnimateManager.playMcAnimate(_map.conLevel["stoneMC"],2,"mc2",function():void
         {
            _map.topLevel["maskMC"].visible = false;
            AnimateManager.playMcAnimate(_map.conLevel["mainMC"],4,"mc4",function():void
            {
               NpcDialog.show(NPC.FITJIDU,["哎呀！不好！这些光芒一定会把布莱克吸引过来的，你还是先走吧！否则会有生命危险的！"],["哼哼！我倒很想看看它究竟是谁！"],[function():void
               {
                  NpcDialog.show(NPC.FITJIDU,["哎..你可真是……怎么办.....怎么办啊！我们还是去山洞躲一下先！"],["你们胆子也太小了吧！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["mainMC"],5,"mc5",function():void
                     {
                        NpcDialog.show(NPC.SEER,["哇！怎么都走啦！看把你们吓得！我才不怕呢！布莱克你给我出来！出来啊！"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["mainMC"],6,"mc6",function():void
                           {
                              TasksManager.complete(TaskController_662.TASK_ID,2,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    DebugTrace.show("第三步完成");
                                    taskStep = 3;
                                    gotoStep4();
                                 }
                              });
                           });
                        });
                     });
                  }]);
               }]);
            });
         });
      }
      
      private static function gotoStep4() : void
      {
         _map.conLevel["mainMC"].gotoAndStop(7);
         _map.topLevel["maskMC"].visible = false;
         _map.conLevel["mainMC"]["tipMC"].visible = true;
         _map.conLevel["stoneMC"].gotoAndStop(3);
         _map.conLevel["mainMC"]["monsterHit"].buttonMode = true;
         _map.conLevel["mainMC"]["monsterHit"].addEventListener(MouseEvent.CLICK,monsterHandler);
      }
      
      private static function monsterHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["mainMC"]["tipMC"].visible = false;
         _map.conLevel["mainMC"]["monsterHit"].buttonMode = true;
         _map.conLevel["mainMC"]["monsterHit"].removeEventListener(MouseEvent.CLICK,monsterHandler);
         NpcDialog.show(NPC.BULAIKE,["哪来的火光！到底是谁干的！"],["你终于出现了，精灵鬼影......"],[function():void
         {
            NpcDialog.show(NPC.BULAIKE,["哼哼！竟敢闯入我的领地，你不想活了吗？"],["我是维护正义的赛尔，星球为什么不能有光明！你算什么东西！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_662_2"),function():void
               {
                  NpcDialog.show(NPC.SEER,["暗邪能量？布莱克你究竟在干什么！"],["这个与你无关！"],[function():void
                  {
                     NpcDialog.show(NPC.BULAIKE,["趁我现在心情好，你赶紧走！快离开这里！"],["布莱克，你...."],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_662_3"),function():void
                        {
                           NpcDialog.show(NPC.BULAIKE,["小子，这次算你命好！快走吧！记住，永远不要回来...."],["咦！它怎么了好奇怪啊！"],[function():void
                           {
                              AnimateManager.playMcAnimate(_map.conLevel["mainMC"],8,"mc8",function():void
                              {
                                 _map.conLevel["mainMC"].gotoAndStop(9);
                                 NpcDialog.show(NPC.SEER,["这里的一切都太奇怪了，我得把情况告诉船长！"],["前往船长室！"],[function():void
                                 {
                                    TasksManager.complete(TaskController_662.TASK_ID,3,function(param1:Boolean):void
                                    {
                                       if(param1)
                                       {
                                          DebugTrace.show("第四步完成");
                                          taskStep = 4;
                                          MapManager.changeMap(4);
                                       }
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
      }
      
      private static function gotoStep5() : void
      {
         _map.conLevel["mainMC"].gotoAndStop(9);
         _map.topLevel["maskMC"].visible = false;
         _map.conLevel["mainMC"]["tipMC"].visible = false;
         _map.conLevel["stoneMC"].gotoAndStop(3);
         NpcDialog.show(NPC.SEER,["这里的一切都太奇怪了，我得把情况告诉船长！"],["前往船长室！"],[function():void
         {
            MapManager.changeMap(4);
         }]);
      }
      
      public static function checkTask() : void
      {
         NpcDialog.show(NPC.SHIPER,["小赛尔，你回来啦！是不是又有发现了？"],["恩恩！这个星球不能有光亮，正被一个叫“邪灵”的组织控制着。"],[function():void
         {
            NpcDialog.show(NPC.SEER,["而且我刚刚遇到了它们的成员，一个名叫布莱克的精灵，那家伙简直就是怪物！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SHIPER,["看来情况不容乐观啊！我们得好好筹划了！小赛尔，你要随时待命哦！"],["恩恩！我时刻准备着！"],[function():void
               {
                  TasksManager.complete(TaskController_662.TASK_ID,4,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        DebugTrace.show("任务完成");
                        taskStep = 5;
                        ToolBarController.showOrHideAllUser(true);
                     }
                  });
               }]);
            });
         }]);
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id != 4)
         {
            if(MapManager.currentMap.id == 451)
            {
               if(_map.conLevel["mainMC"])
               {
                  _map.conLevel["mainMC"]["monsterHit"].removeEventListener(MouseEvent.CLICK,monsterHandler);
               }
               if(_map.conLevel["stoneMC"])
               {
                  _map.conLevel["stoneMC"].removeEventListener(MouseEvent.CLICK,stoneHandler);
               }
               OgreController.isShow = true;
               ToolBarController.showOrHideAllUser(true);
            }
         }
         _map = null;
      }
   }
}
