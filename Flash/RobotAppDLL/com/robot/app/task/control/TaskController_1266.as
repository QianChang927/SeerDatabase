package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1266
   {
      
      public static const TASK_ID:uint = 1266;
      
      public static var panel:AppModel;
       
      
      public function TaskController_1266()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["赛尔，你可来了，随着万圣节的到来，那个大南瓜奥莱德越来越活跃，它说要集结部队进攻三巨头呢！"],["集结部队⊙﹏⊙b"],[function():void
         {
            NpcDialog.show(NPC.SEER,["它不是光棍南瓜一个吗？孤家寡人的，怎么会有部队可以集结呢？"],["是呀好奇怪！"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["耳听为虚，眼见为实！干脆我们去看看它在搞什么花样！"],["我已经准备好了！","让我先准备一下！"],[function():void
               {
                  TasksManager.accept(TASK_ID,function():void
                  {
                     startPro();
                  });
               }]);
            }]);
         }]);
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_" + TASK_ID),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function startPro() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1266_0"),function():void
         {
            MapManager.changeMap(10);
         },false);
      }
   }
}
