package com.robot.app.task.taskscollection
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.debug.DebugTrace;
   
   public class Task1133
   {
      
      private static var _mcForMap464:MovieClip;
      
      private static const TASK_ID:uint = 1133;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1133()
      {
         super();
      }
      
      public static function initTaskForMap24(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            startTask();
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            startPro_0();
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            ToolBarController.showOrHideAllUser(true);
            MainManager.selfVisible = true;
            (_map.conLevel["task1133MC"] as MovieClip).visible = false;
         }
      }
      
      private static function startTask() : void
      {
         ToolBarController.showOrHideAllUser(true);
         MainManager.selfVisible = false;
         (_map.conLevel["task1133MC"] as MovieClip).visible = true;
         (_map.conLevel["task1133MC"] as MovieClip).gotoAndStop(1);
         CommonUI.addYellowExcal(_map.conLevel["furuizi"],15,0);
         (_map.conLevel["furuizi"] as MovieClip).buttonMode = true;
         (_map.conLevel["furuizi"] as MovieClip).addEventListener(MouseEvent.CLICK,startPro);
      }
      
      private static function startPro(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.removeYellowExcal(_map.conLevel["furuizi"]);
         (_map.conLevel["furuizi"] as MovieClip).buttonMode = false;
         (_map.conLevel["furuizi"] as MovieClip).removeEventListener(MouseEvent.CLICK,startPro);
         ToolBarController.showOrHideAllUser(false);
         MainManager.selfVisible = false;
         NpcDialog.show(NPC.FURUIZI,["小赛尔，这里相当危险，赶快离开天幕宫殿！"],["发生什么事情？","我还是先走为妙！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               startPro_0();
            });
         },function():void
         {
            startTask();
         }]);
      }
      
      private static function startPro_0() : void
      {
         ToolBarController.showOrHideAllUser(true);
         MainManager.selfVisible = false;
         (_map.conLevel["task1133MC"] as MovieClip).visible = true;
         (_map.conLevel["task1133MC"] as MovieClip).gotoAndStop(1);
         AnimateManager.playMcAnimate(_map.conLevel["task1133MC"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["失败者？难怪如此憎恨天幕龙族！伯尼恩、弗里兹，你们要小心应付，它看上去比想象中要厉害很多！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.BOENNI,["谢谢关心！我和弗里兹联手还从未失败过！"],["恩恩！我相信你们！"],[function():void
               {
                  AnimateManager.playMcAnimate(_map.conLevel["task1133MC"],2,"mc2",function():void
                  {
                     NpcDialog.show(NPC.SEER,["天幕飞龙即将苏醒！我也帮不上什么忙，还是静观其变吧！"],null,null,false,function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20120703_3"),function():void
                        {
                           ToolBarController.showOrHideAllUser(true);
                           MainManager.selfVisible = true;
                           (_map.conLevel["task1133MC"] as MovieClip).visible = false;
                           NpcDialog.show(NPC.FURUIZI,["还记得我3个月前说的话吗？只要拥有天幕四龙将，赛尔历43年末就有机会战胜刚才的黑影巨龙！小赛尔，努力吧！"],["我会尽力而为的！"],[function():void
                           {
                              NpcDialog.show(NPC.OUXISI,["从今天开始你可以免费孵化飞龙精元！记住，如果要进化至最终形态，必须借助0xff0000 至尊NoNo 0xffffff的力量哦！"],["我知道了！"],[function():void
                              {
                                 TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       DebugTrace.show("飞龙剧情任务完成！");
                                    }
                                 });
                              }]);
                           }]);
                        });
                     });
                  });
               }]);
            });
         });
      }
      
      public static function destory() : void
      {
         ToolBarController.showOrHideAllUser(true);
         MainManager.selfVisible = true;
         (_map.conLevel["task1133MC"] as MovieClip).visible = false;
         _map = null;
      }
   }
}
