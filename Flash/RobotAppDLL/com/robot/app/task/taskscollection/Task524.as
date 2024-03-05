package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_524;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task524
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _task524:MovieClip;
       
      
      public function Task524()
      {
         super();
      }
      
      public static function initTask(param1:BaseMapProcess) : void
      {
         _map = param1;
         _task524 = _map.conLevel["task_524"];
         var _loc2_:uint = uint(TasksManager.getTaskStatus(TaskController_524.TASK_ID));
         if(_loc2_ == TasksManager.UN_ACCEPT)
         {
            DisplayUtil.removeForParent(_task524);
            _task524 = null;
         }
         else if(_loc2_ == TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(_task524);
            _task524 = null;
         }
         else
         {
            startPro();
         }
      }
      
      private static function startPro() : void
      {
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playMcAnimate(_task524,1,"task_524_1",function():void
         {
            NpcDialog.show(NPC.DOCTOR,["欢迎你来到我的研究基地，这里的一切可都是我的心血哦！"],["哇，好多仪器啊，我太荣幸了！"],[function():void
            {
               NpcDialog.show(NPC.DOCTOR,["嘘嘘嘘…小声点，精灵蛋马上就要孵化了，神圣的一刻就要来临了！"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_524"),function():void
                  {
                     _task524.gotoAndStop(2);
                     NpcDialog.show(NPC.SEER,["博士……博士你能告诉我这个神奇的装置叫什么名字吗？我也想要一个。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.DOCTOR,["嗯，别急，我告诉你哦，这是我最新研发的精灵培育舱，它不仅仅能繁殖精灵，还能孵化精灵蛋哦！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.DOCTOR,["繁殖过程需要一定的时间，并且要选择好你的雌性精灵和雄性精灵，每次只能放入一只雌性精灵和一只雄性精灵哦！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.DOCTOR,["孵化过程是非常神圣的，每一对雌雄精灵只能孵化出一只第二代精灵哦，有时间的话多去照看精灵蛋吧！"],["嗯，好的，我明白了。"],[function():void
                              {
                                 NpcDialog.show(NPC.DOCTOR,["相信你对培育舱的功能已经有所了解了吧！赶快去实验室领取属于你的精灵繁殖仓吧，记得好好培养你的第二代精灵哦！"],["我一定会牢记在心的！"],[function():void
                                 {
                                    NpcDialog.show(NPC.DOCTOR,["哦，对了，忘了告诉你，想要领取培育舱你的精灵等级一定要在50级以上哦，否则是无法领取的哟！"],["博士太聪明了！"],[function():void
                                    {
                                       TasksManager.complete(TaskController_524.TASK_ID,0,function(param1:Boolean):void
                                       {
                                          if(!param1)
                                          {
                                             DebugTrace.show("完成任务失败！");
                                          }
                                       });
                                    }]);
                                 }]);
                              }]);
                           });
                        });
                     });
                  });
               });
            }]);
         });
      }
      
      public static function destory() : void
      {
         ToolBarController.showOrHideAllUser(true);
      }
   }
}
