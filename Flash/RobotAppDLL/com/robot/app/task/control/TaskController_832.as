package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task832;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_832
   {
      
      public static const TASK_ID:uint = 832;
      
      private static var panel:AppModel;
       
      
      public function TaskController_832()
      {
         super();
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
      
      public static function start() : void
      {
         TasksManager.accept(TASK_ID,function():void
         {
            startPro();
         });
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(!a[0])
            {
               NpcDialog.show(NPC.DANDI,["好朋友杰西被抓走，我的心情真的很糟糕。"],["丹迪放心，我们一定会想办法救出他的。"],[function():void
               {
                  NpcDialog.show(NPC.DANDI,["而且土元素之星也下落不明，一切都糟透了！"],["事已至此，更加要打起精神来，找到余下的元素之星啊。 "],[function():void
                  {
                     NpcDialog.show(NPC.DANDI,[MainManager.actorInfo.formatNick + "，很高兴有你陪在身边，真的非常感谢。"],["呵呵，客气什么，朋友就是要互相帮助嘛。 "],[function():void
                     {
                        NpcDialog.show(NPC.DANDI,["我一直有个疑问，那个瑞尔斯究竟是谁啊？他那么厉害，怎么会变成海盗邪灵的同伙呢？"],["哎！事情其实是这样的……（开始讲述有关瑞尔斯的故事） "],[function():void
                        {
                           CartoonManager.play(ClientConfig.getFullMovie("task_832_5"),function():void
                           {
                              NpcDialog.show(NPC.DANDI,["原来如此，你们肯定很难过，尤其是盖亚更加难以面对这样的状况。"],["是啊，自己的哥哥竟然成了敌人的同伙！"],[function():void
                              {
                                 NpcDialog.show(NPC.DANDI,["我相信瑞尔斯会变好的，善良的心一定能交好运。"],["嗯嗯。"],[function():void
                                 {
                                    Task832.playMap690MC();
                                 }]);
                              }]);
                           });
                        }]);
                     }]);
                  }]);
               }]);
            }
         });
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
      }
   }
}
