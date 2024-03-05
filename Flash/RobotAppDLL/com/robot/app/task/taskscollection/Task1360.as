package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_1360;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1360
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1360()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1360mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1360.TASK_ID);
      }
      
      public static function initForMap811(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1360.TASK_ID,function(param1:Array):void
            {
               if(false == param1[0])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  _map.topLevel.visible = false;
                  OgreController.isShow = false;
                  start_1();
               }
               else if(true == param1[0] && false == param1[1])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  _map.topLevel.visible = false;
                  OgreController.isShow = false;
                  start_2();
               }
               else if(true == param1[1] && false == param1[2])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  _map.topLevel.visible = false;
                  OgreController.isShow = false;
                  start_3();
               }
               else if(true == param1[2] && false == param1[3])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  _map.topLevel.visible = false;
                  OgreController.isShow = false;
                  start_4();
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
      
      public static function initForMap722(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1360.TASK_ID,function(param1:Array):void
            {
               if(true == param1[2] && false == param1[3])
               {
                  if(BufferRecordManager.getState(MainManager.actorInfo,521))
                  {
                     endStep_1();
                  }
               }
            });
         }
      }
      
      private static function start_1() : void
      {
         ResourceManager.getResource(ClientConfig.getActiveUrl("task_1360_dialog"),function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var obj:DisplayObject = param1;
            mc = obj as MovieClip;
            LevelManager.stage.addChild(mc);
            AnimateManager.playMcAnimate(mc,1,"mc1",function():void
            {
               mc.buttonMode = true;
               mc.addEventListener(MouseEvent.CLICK,function():void
               {
                  mc.buttonMode = false;
                  mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                  AnimateManager.playMcAnimate(mc,2,"mc2",function():void
                  {
                     mc.buttonMode = true;
                     mc.addEventListener(MouseEvent.CLICK,function():void
                     {
                        mc.buttonMode = false;
                        mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                        AnimateManager.playMcAnimate(mc,3,"mc3",function():void
                        {
                           mc.buttonMode = true;
                           mc.addEventListener(MouseEvent.CLICK,function():void
                           {
                              mc.buttonMode = false;
                              mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                              AnimateManager.playMcAnimate(mc,4,"mc4",function():void
                              {
                                 mc.buttonMode = true;
                                 mc.addEventListener(MouseEvent.CLICK,function():void
                                 {
                                    mc.buttonMode = false;
                                    mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                                    AnimateManager.playMcAnimate(mc,5,"mc5",function():void
                                    {
                                       mc.buttonMode = true;
                                       mc.addEventListener(MouseEvent.CLICK,function():void
                                       {
                                          mc.buttonMode = false;
                                          mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                                          AnimateManager.playMcAnimate(mc,6,"mc6",function():void
                                          {
                                             mc.buttonMode = true;
                                             mc.addEventListener(MouseEvent.CLICK,function():void
                                             {
                                                mc.buttonMode = false;
                                                mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                                                LevelManager.stage.removeChild(mc);
                                                start_1_1();
                                             });
                                          });
                                       });
                                    });
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         },"task1360dialog");
      }
      
      private static function start_1_1() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1360_2"),function():void
         {
            TasksManager.complete(TaskController_1360.TASK_ID,TaskController_1360.TASK_STAGE_1,function(param1:Boolean):void
            {
               if(param1)
               {
                  start_2();
               }
            });
         },false);
      }
      
      private static function start_2() : void
      {
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,function():void
         {
            taskMc.buttonMode = false;
            taskMc.removeEventListener(MouseEvent.CLICK,arguments.callee);
            AnimateManager.playMcAnimate(taskMc,1,"mc1",function():void
            {
               NpcDialog.show(NPC.SEER,["队长！" + MainManager.actorInfo.formatNick + "前来报到！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["哈哈，" + MainManager.actorInfo.formatNick + "，你一定想不到，传说中的恶灵兽的克星——麒麟回来啦！"],null,null,false,function():void
                  {
                     start_2_1();
                  });
               });
            });
         });
      }
      
      private static function start_2_1() : void
      {
         AnimateManager.playMcAnimate(taskMc,3,"mc3",function():void
         {
            taskMc.buttonMode = true;
            taskMc.addEventListener(MouseEvent.CLICK,function():void
            {
               taskMc.buttonMode = false;
               taskMc.removeEventListener(MouseEvent.CLICK,arguments.callee);
               AnimateManager.playMcAnimate(taskMc,4,"mc4",function():void
               {
                  taskMc.buttonMode = true;
                  taskMc.addEventListener(MouseEvent.CLICK,function():void
                  {
                     AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
                     {
                        NpcDialog.show(NPC.SEER,["是呀，真难为它们兄弟俩了，为了守护神树之巅，当了一千年的土匪……"],null,null,false,function():void
                        {
                           start_2_2();
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function start_2_2() : void
      {
         AnimateManager.playMcAnimate(taskMc,6,"mc6",function():void
         {
            taskMc.buttonMode = true;
            taskMc.addEventListener(MouseEvent.CLICK,function():void
            {
               taskMc.buttonMode = false;
               taskMc.removeEventListener(MouseEvent.CLICK,arguments.callee);
               AnimateManager.playMcAnimate(taskMc,7,"mc7",function():void
               {
                  NpcDialog.show(NPC.ELINGSHOU_NORMOL,["就在这里吧！这里也曾经有我的恶灵魂器，灵魂的共鸣可以让我更好的使用0xff0000时之沙0xffffff之术！"],null,null,false,function():void
                  {
                     start_2_3();
                  });
               });
            });
         });
      }
      
      private static function start_2_3() : void
      {
         AnimateManager.playMcAnimate(taskMc,8,"mc8",function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1360_3"),function():void
            {
               TasksManager.complete(TaskController_1360.TASK_ID,TaskController_1360.TASK_STAGE_2,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     start_3();
                  }
               });
            },false);
         });
      }
      
      private static function start_3() : void
      {
         NpcDialog.show(NPC.ALLISON,["哇！邪恶四灵！恶灵三巨头！海盗二人组！恶灵兽！这真是史上最强的邪恶阵容啊！"],null,null,false,function():void
         {
            AnimateManager.playMcAnimate(taskMc,9,"mc9",function():void
            {
               taskMc.buttonMode = true;
               taskMc.addEventListener(MouseEvent.CLICK,function():void
               {
                  taskMc.buttonMode = false;
                  taskMc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                  AnimateManager.playMcAnimate(taskMc,10,"mc10",function():void
                  {
                     NpcDialog.show(NPC.NASIQI_NORMOL,["哼，就你们两块成事不足败事有余的废铁皮也配和我们相提并论？"],null,null,false,function():void
                     {
                        start_3_1();
                     });
                  });
               });
            });
         });
      }
      
      private static function start_3_1() : void
      {
         AnimateManager.playMcAnimate(taskMc,11,"mc11",function():void
         {
            NpcDialog.show(NPC.ZOG,["蠢！蠢货！早晚我会被你连累死的！你居然敢和大人们相提并论！我的脸皮已经够厚了，没想到你比我还厚！"],null,null,false,function():void
            {
               start_3_2();
            });
         });
      }
      
      private static function start_3_2() : void
      {
         AnimateManager.playMcAnimate(taskMc,12,"mc12",function():void
         {
            NpcDialog.show(NPC.ELINGSHOU_NORMOL,["在集中火力攻打赛尔号这道盛宴开始之前，我们先来几道开胃菜！来自过去的帕罗迪亚，你知道现在的另一个你在哪里吗？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.PALUODIYA,["在哪里？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ALLISON,["你被布里克打败了，然后被封印在星辰龙境里！"],null,null,false,function():void
                  {
                     start_3_3();
                  });
               });
            });
         });
      }
      
      private static function start_3_3() : void
      {
         AnimateManager.playMcAnimate(taskMc,13,"mc13",function():void
         {
            NpcDialog.show(NPC.ELINGSHOU_NORMOL,["去吧！去救出另一个自己，然后找龙族复仇吧！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.PALUODIYA,["谢谢主人！"],null,null,false,function():void
               {
                  start_3_4();
               });
            });
         });
      }
      
      private static function start_3_4() : void
      {
         AnimateManager.playMcAnimate(taskMc,14,"mc14",function():void
         {
            NpcDialog.show(NPC.ELINGSHOU_NORMOL,["麒麟已经回来了！千年前那一战我经历的耻辱，我要连本带利的讨回来！小的们，我们走！"],null,null,false,function():void
            {
               start_3_5();
            });
         });
      }
      
      private static function start_3_5() : void
      {
         AnimateManager.playMcAnimate(taskMc,15,"mc15",function():void
         {
            TasksManager.complete(TaskController_1360.TASK_ID,TaskController_1360.TASK_STAGE_3,function(param1:Boolean):void
            {
               if(param1)
               {
                  start_4();
               }
            });
         });
      }
      
      private static function start_4() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["天哪，邪恶四灵都给恶灵兽召唤出来了！末日啊！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.YINJIAO,["还好麒麟大人知道恶灵魂器的事，让我们在这里埋伏，才听到它们的计划！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.JINJIAO,["弟弟，它们好像要对麒麟大人不利！我们快点去找主人！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.YINJIAO,["好！赛小息，恶灵兽似乎还打算进攻赛尔号，你们也早点去报告贾斯汀和罗杰船长吧！"],null,null,false,function():void
                  {
                     start_4_1();
                  });
               });
            });
         });
      }
      
      private static function start_4_1() : void
      {
         AnimateManager.playMcAnimate(taskMc,16,"mc16",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["赛尔，那个过去的帕罗迪亚似乎要去救现在封印在星辰龙境的帕罗迪亚，一旦它得手，就是两个帕罗迪亚了！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.ATIEDA,["一个念力之王已经够头疼了，我们必须阻止它！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["这样吧，我们兵分两路，一路回去报告，防范恶灵兽的进攻，另一路火速赶去星辰龙境，阻止帕罗迪亚！"],null,null,false,function():void
                  {
                     start_4_2();
                  });
               });
            });
         });
      }
      
      private static function start_4_2() : void
      {
         AnimateManager.playMcAnimate(taskMc,17,"mc17",function():void
         {
            NpcDialog.show(NPC.YOUNIKA,["你们真的以为你们能躲过恶灵兽大人的法眼？这里就是你们的坟墓！"],null,null,false,function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1360_4"),function():void
               {
                  start_4_3();
               });
            });
         });
      }
      
      private static function start_4_3() : void
      {
         AnimateManager.playMcAnimate(taskMc,18,"mc18",function():void
         {
            NpcDialog.show(NPC.LEIYI,["赛小息！你们和小布一起去阻止帕罗迪亚！这里交给我们！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["好！"],null,null,false,function():void
               {
                  start_4_4();
               });
            });
         });
      }
      
      private static function start_4_4() : void
      {
         AnimateManager.playMcAnimate(taskMc,19,"mc19",function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1360_5"),function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,521,true);
               MapManager.changeMap(722);
               MainManager.selfVisible = true;
               ToolBarController.showOrHideAllUser(true);
               _map.topLevel.visible = true;
               OgreController.isShow = true;
            },false);
         });
      }
      
      public static function endStep_1() : void
      {
         TasksManager.complete(TaskController_1360.TASK_ID,TaskController_1360.TASK_STAGE_4,function(param1:Boolean):void
         {
            if(param1)
            {
               destroy();
            }
         });
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(811 == MapManager.currentMap.id)
            {
               DisplayUtil.removeForParent(taskMc);
            }
            _map = null;
         }
      }
   }
}
