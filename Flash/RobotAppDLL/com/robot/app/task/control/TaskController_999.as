package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_999
   {
      
      public static const TASK_ID:uint = 999;
      
      private static var panel:AppModel;
       
      
      public function TaskController_999()
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
         NpcDialog.show(NPC.SHIPER,["巴斯星的战况我已经略知一二，看来也该是时候出动了，这次赛尔号一定要彻底粉碎帕罗狄亚的阴谋！"],["船长，我来报到啦！","让我再去特训一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var dialogString:String = null;
            var a:Array = param1;
            if(!a[0])
            {
               dialogString = "哦，是" + MainManager.actorInfo.formatNick + "啊！怎么你也想参加这次的战役吗？不过这次战役非比寻常，充满着未知的艰险！";
               NpcDialog.show(NPC.SHIPER,[dialogString],["报告船长，我是不会退缩的！"],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["恩，很好！不愧是赛尔，面对再大的险阻和困难从不退缩！接下来就等赛小息了，我想他们应该快到了！"],["哇！终于能在见到队长了，哈哈！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_999_0"),function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["罗杰船长还有伟大的赛尔号，您就等待我们凯旋的消息吧！帕罗狄亚你太不幸了，竟然遇到了我这样的对手，哈哈！"],["赛小探险小分队，立刻出发！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_999_1"),function():void
                           {
                              TasksManager.complete(TaskController_999.TASK_ID,0,function(param1:Boolean = true):void
                              {
                                 if(param1)
                                 {
                                    MapManager.changeMap(724);
                                 }
                              });
                           });
                        }]);
                     });
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
