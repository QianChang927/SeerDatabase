package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class Task845
   {
      
      private static const TASK_ID:uint = 845;
      
      private static var _map:BaseMapProcess;
      
      private static var _mcForMap464:MovieClip;
       
      
      public function Task845()
      {
         super();
      }
      
      public static function acceptTask() : void
      {
         goStep1();
      }
      
      public static function initTaskForMap4() : void
      {
         goStep1();
      }
      
      public static function initTaskForMap464(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap464 = _map.animatorLevel["task_845_1"];
         _mcForMap464.visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  _map.depthLevel["spt"].visible = false;
                  _map.conLevel["katuMc"].visible = false;
                  _map.conLevel["card_btn"].visible = false;
                  goStep2();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  _map.depthLevel["spt"].visible = false;
                  _map.conLevel["katuMc"].visible = false;
                  _map.conLevel["card_btn"].visible = false;
                  goStep3();
               }
            });
         }
      }
      
      private static function initRule(param1:MovieClip, param2:Boolean = false, param3:uint = 1, param4:Boolean = true, param5:Boolean = true, param6:Boolean = true, param7:Boolean = true) : void
      {
         param1.visible = param2;
         param1.gotoAndStop(param3);
         ToolBarController.showOrHideAllUser(param4);
         if(!param5)
         {
            NonoManager.nonoGoHome();
         }
         if(!param6)
         {
            MainManager.selfVisible = false;
         }
         if(!param7)
         {
            OgreController.isShow = false;
         }
      }
      
      public static function goStep1() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_845_1"),function():void
         {
            NpcDialog.show(NPC.SEER,["这个声音是祖师之魂，它在召唤我！船长，我必须立刻前往卡酷星！"],["快去吧，赛尔号的勇士！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_845_2"),function():void
               {
                  TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        MapManager.changeMap(464);
                     }
                  });
               });
            }]);
         });
      }
      
      public static function goStep2() : void
      {
         initRule(_mcForMap464,true,1,false);
         AnimateManager.playMcAnimate(_mcForMap464,1,"task_845_mc1",function():void
         {
            CommonUI.addYellowExcal(_map.conLevel["zushiTig"],30,0);
            _map.conLevel["zushiTig"].buttonMode = true;
            _map.conLevel["zushiTig"].addEventListener(MouseEvent.CLICK,onZhushiClick);
         });
      }
      
      private static function onZhushiClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         LevelManager.closeMouseEvent();
         MainManager.actorModel.moveAndAction(new Point(300,400),function():void
         {
            LevelManager.openMouseEvent();
            _map.conLevel["zushiTig"].buttonMode = false;
            _map.conLevel["zushiTig"].removeEventListener(MouseEvent.CLICK,onZhushiClick);
            CommonUI.removeYellowExcal(_map.conLevel["zushiTig"]);
            NpcDialog.show(NPC.SOUL_MASTER,["暗黑冰龙！它真的苏醒了？！也许是我弄错了，也许吧！这绝对不可能，太可怕了！"],["祖师，你怎么了？暗黑冰龙？是什么？"],[function():void
            {
               NpcDialog.show(NPC.SOUL_MASTER,[MainManager.actorInfo.formatNick + "，别问那么多，以后不准你进入天界，太危险了！"],["究竟怎么了？祖师，你一定有难言之隐！"],[function():void
               {
                  NpcDialog.show(NPC.SOUL_MASTER,["感谢1年中赛尔对天界做出的贡献！如果没有你们，各宫殿的元素之种早就落在吒克斯手里！事到如今，再也不能拖累你们了，快走！永远忘记这块土地吧！"],["不说清楚我怎么也不会一走了之的！"],[function():void
                  {
                     MainManager.selfVisible = false;
                     AnimateManager.playMcAnimate(_mcForMap464,2,"task_845_mc2",function():void
                     {
                        MainManager.selfVisible = true;
                        MainManager.actorModel.x = 150;
                        MainManager.actorModel.y = 420;
                        NpcDialog.show(NPC.SOUL_MASTER,["为什么要那么执着，不值得！我怀疑暗黑冰龙被吒克斯唤醒了！如今天界到处都有危险，所以不希望曾经并肩作战的你受到任何伤害！"],["勇敢的赛尔不会惧怕任何困难！"],[function():void
                        {
                           NpcDialog.show(NPC.SOUL_MASTER,["真的很感动！既然你那么想知道关于冰龙的故事，我就把来龙去脉全部告诉你！"],["恩恩！快说快说！"],[function():void
                           {
                              CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_845"),function():void
                              {
                                 NpcDialog.show(NPC.SEER,["这些事情听上去真是陌生，似乎是我们从未接触过的领域！冰龙？难道就是刚才提到的暗黑冰龙？"],["说的没错！就是它！"],[function():void
                                 {
                                    NpcDialog.show(NPC.SOUL_MASTER,["冰龙吸收了大量暗黑能量，导致最终演变成暗黑冰龙。自从它沉睡以后，吒克斯就一直寻找方法将它唤醒，试图再夺天界！"],["你的伤是怎么回事？"],[function():void
                                    {
                                       NpcDialog.show(NPC.SOUL_MASTER,["当我试图前往天境回廊的时候，一股强大的力量将我击退！我猜测一种可能是吒克斯，另一种可能就是暗黑冰龙！"],["应该是吒克斯，记得当时………………"],[function():void
                                       {
                                          AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_845_3"),function():void
                                          {
                                             NpcDialog.show(NPC.SOUL_MASTER,["通过回廊就能来到天幕宫殿，我担心它真正的目标不是我，而是拯救它的老战友——天幕冰龙！赛尔，我们中计了！"],["冰龙不是被沉睡了吗？"],[function():void
                                             {
                                                NpcDialog.show(NPC.SOUL_MASTER,["记得我那些徒儿吗？利用神兔灵魂就能唤醒暗黑冰龙！看来吒克斯是故意分散我们的注意力，从而可以让它肆无忌惮地前往天幕宫殿！我们快去看看！"],["Go！"],[function():void
                                                {
                                                   TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                                                   {
                                                      if(param1)
                                                      {
                                                         goStep3();
                                                      }
                                                   });
                                                }]);
                                             }]);
                                          });
                                       }]);
                                    }]);
                                 }]);
                              });
                           }]);
                        }]);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      public static function goStep3() : void
      {
         initRule(_mcForMap464,true,3,false);
         _map.conLevel["task845Tig"].visible = true;
         _map.conLevel["task845Tig"].buttonMode = true;
         CommonUI.addYellowArrow(_map.conLevel["task845Tig"],0,0,300);
         _map.conLevel["task845Tig"].addEventListener(MouseEvent.CLICK,onAnheibinglongClick);
      }
      
      private static function onAnheibinglongClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         LevelManager.closeMouseEvent();
         MainManager.actorModel.moveAndAction(new Point(680,300),function():void
         {
            LevelManager.openMouseEvent();
            _map.conLevel["task845Tig"].buttonMode = false;
            CommonUI.removeYellowArrow(_map.conLevel["task845Tig"]);
            _map.conLevel["task845Tig"].removeEventListener(MouseEvent.CLICK,onAnheibinglongClick);
            MainManager.selfVisible = false;
            AnimateManager.playMcAnimate(_mcForMap464,4,"task_845_mc4",function():void
            {
               MainManager.selfVisible = true;
               NpcDialog.show(NPC.SEER,["祖师，我们走吧！"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_845_4"),function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_845_5"),function():void
                     {
                        TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              DisplayUtil.removeForParent(_mcForMap464);
                              ToolBarController.showOrHideAllUser(true);
                              _map.depthLevel["spt"].visible = true;
                           }
                        });
                     });
                  });
               });
            });
         });
      }
      
      public static function destory() : void
      {
         if(_map)
         {
            if(_map.conLevel["zushiTig"])
            {
               _map.conLevel["zushiTig"].removeEventListener(MouseEvent.CLICK,onZhushiClick);
            }
            if(_map.conLevel["task845Tig"])
            {
               _map.conLevel["task845Tig"].removeEventListener(MouseEvent.CLICK,onAnheibinglongClick);
            }
         }
         _mcForMap464 = null;
         _map = null;
      }
   }
}
