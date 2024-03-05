package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.debug.DebugTrace;
   
   public class Task912
   {
      
      private static var _mcForMap464:MovieClip;
      
      private static const TASK_ID:uint = 912;
      
      private static var _map:BaseMapProcess;
      
      public static var isShowArrow:Boolean;
       
      
      public function Task912()
      {
         super();
      }
      
      public static function startPro_0() : void
      {
         NpcDialog.show(NPC.DOCTOR,["烈刃重生！三昧真火！强悍的种族难道要从此灭亡？不可能，这绝对不可能！"],["博士，你又再胡言乱语什么？","到处逛逛"],[function():void
         {
            NpcDialog.show(NPC.DOCTOR,["还记得烈刃一族和谱尼的大决战？虽然最终难分胜负，但烈刃一族却身受重伤！"],["好像有点印象！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_912_1"),function():void
               {
                  NpcDialog.show(NPC.DOCTOR,["预计烈刃一族正在火山星疗伤。" + MainManager.actorInfo.formatNick + "，这次又要麻烦你去勘察情况了，希望它们能平安！"],["没问题，出发！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_912_2"),function():void
                     {
                        TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              MapManager.changeMap(15);
                           }
                        });
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      public static function initTaskForMap15(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(true);
            OgreController.isShow = true;
            (_map.conLevel["task912MC"] as MovieClip).visible = false;
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  startPro_1();
               }
               else
               {
                  (_map.conLevel["task912MC"] as MovieClip).visible = false;
                  ToolBarController.showOrHideAllUser(true);
                  OgreController.isShow = true;
               }
            });
         }
         else
         {
            (_map.conLevel["task912MC"] as MovieClip).visible = false;
            ToolBarController.showOrHideAllUser(true);
            OgreController.isShow = true;
         }
      }
      
      private static function startPro_1() : void
      {
         (_map.conLevel["task912MC"] as MovieClip).visible = true;
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         AnimateManager.playMcAnimate(_map.conLevel["task912MC"],1,"anxious",function():void
         {
            NpcDialog.show(NPC.SEER,["这不是史密斯和吉米丽娅吗？怎么不见炽焰之刃？"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["task912MC"],2,"help",function():void
               {
                  NpcDialog.show(NPC.SEER,["看来情况不乐观！山洞里一定发生大事了！"],null,null,false,function():void
                  {
                     TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           MapManager.changeMap(16);
                        }
                     });
                  });
               });
            });
         });
      }
      
      public static function initTaskForMap16(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(true);
            OgreController.isShow = true;
            (_map.conLevel["task912MC"] as MovieClip).visible = false;
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  startPro_2();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  startPro_3();
               }
               else
               {
                  (_map.conLevel["task912MC"] as MovieClip).visible = false;
                  ToolBarController.showOrHideAllUser(true);
                  OgreController.isShow = true;
               }
            });
         }
         else
         {
            ToolBarController.showOrHideAllUser(true);
            OgreController.isShow = true;
            (_map.conLevel["task912MC"] as MovieClip).visible = false;
         }
      }
      
      private static function startPro_2() : void
      {
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         (_map.conLevel["task912MC"] as MovieClip).gotoAndStop(1);
         AnimateManager.playMcAnimate(_map.conLevel["task912MC"],1,"feelHard",function():void
         {
            NpcDialog.show(NPC.SEER,["这是在疗伤吗？为什么炽焰之刃看上去那么痛苦？到底发生了什么事？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SHIMISI,["它在吸收熔岩中的火焰能量，这样不但可以快速疗伤，还能间接的提升能力！但是没想到会那么痛苦，好心疼！"],["火焰能量？难道是传说中的三昧真火？"],[function():void
               {
                  NpcDialog.show(NPC.SHIMISI,["据说这是一种非常稀少的能量，但是如果烈刃家族需要重归辉煌，这步势在必行！孩子去吧，我们不会阻止你的！"],["这太残忍了！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_912_3"),function():void
                     {
                        NpcDialog.show(NPC.CHIYAN_ZHIZI,["这一切进展的都不错，我终于熬过来了！多谢你们的关心，现在最重要的是能够持续吸收三昧真火，这样很快我就能够重回巅峰！"],["我希望烈刃一族能重归辉煌！你们实在太帅了！"],[function():void
                        {
                           TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 startPro_3();
                              }
                           });
                        }]);
                     });
                  }]);
               }]);
            });
         });
      }
      
      private static function startPro_3() : void
      {
         (_map.conLevel["task912MC"] as MovieClip).gotoAndStop(2);
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         AnimateManager.playMcAnimate(_map.conLevel["task912MC"],2,"come",function():void
         {
            NpcDialog.show(NPC.DOCTOR,["根据对火山星熔岩的采样研究，我已经成功提炼出了三昧真火，并且用它研制出了三种与烈焰家族息息相关的物品。"],["是什么？是什么？别卖关子赶快说！"],[function():void
            {
               NpcDialog.show(NPC.DOCTOR,["第一种是烈刃繁殖剂，只需同时给吉米丽娅和史密斯使用，它们就能百分之百繁殖出火刃。"],["哇，太棒了！这是大家最希望看到的！"],[function():void
               {
                  NpcDialog.show(NPC.DOCTOR,["第二种是繁殖加成转化剂，通过它可以让火刃和炽焰之刃改变繁殖加成！再也不用为繁殖出极品的火刃而烦恼了！"],["简直疯了！太不可思议了！"],[function():void
                  {
                     NpcDialog.show(NPC.DOCTOR,["第三种是炽焰之心，给火刃使用后能超进化至炽焰之刃！"],["哇塞！我已经无法接受了！你太棒了！"],[function():void
                     {
                        NpcDialog.show(NPC.DOCTOR,["那当然，别以为只有肖恩是天才！这些东西都放在实验室，想拥有极品的炽焰之刃，就来实验室看看吧！"],["我现在就去！"],[function():void
                        {
                           MapManager.changeMap(5);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         });
      }
      
      public static function initTaskForMap5(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               var a:Array = param1;
               if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && !a[3])
               {
                  TasksManager.complete(TASK_ID,3,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        DebugTrace.show("任务完成！");
                     }
                  });
               }
            });
         }
      }
      
      public static function destory() : void
      {
         OgreController.isShow = true;
         _map = null;
      }
   }
}
