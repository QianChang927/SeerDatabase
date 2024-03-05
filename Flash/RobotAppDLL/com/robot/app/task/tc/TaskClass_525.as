package com.robot.app.task.tc
{
   import com.robot.app.task.control.TasksController;
   import com.robot.core.info.task.novice.NoviceFinishInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   
   public class TaskClass_525
   {
       
      
      public function TaskClass_525(param1:NoviceFinishInfo)
      {
         var info:NoviceFinishInfo = param1;
         super();
         MainManager.actorInfo.coins += 2000;
         NpcDialog.show(NPC.IRIS,["我的天啊！迪恩竟然和赫尔卡星人有关联？你竟然找到了赫尔卡星人真正的历史存档！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.IRIS,["这……这太不可思议了！！慢着！你刚才说屏幕上显示能源耗尽？我想过段时间，我们应该还可以继续查看存档记录！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.IRIS,["赫尔卡星宝藏！我先去研究下我的资料，我想我们一定可以发现赫尔卡星人宝藏之谜的！！！哦对了，差点忘记谢谢你了呢！"],["嘿嘿……没关系啦"],[function():void
               {
                  Alarm.show("<font color=\'#ff0000\'>2000积累经验</font>已经存入你的经验分配器中。",function():void
                  {
                     ItemInBagAlert.show(1,"<font color=\'#ff0000\'>" + 2000 + "</font>赛尔豆已放入了你的储存箱。",function():void
                     {
                        TasksController.taskCompleteUI();
                     });
                  });
               }]);
            });
         });
      }
   }
}
