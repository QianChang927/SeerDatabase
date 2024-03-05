package com.robot.app.task.control
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1320
   {
      
      public static const TASK_ID:uint = 1320;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1320()
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
         NpcDialog.show(NPC.SHIPER,["冰封之门的开启导致整个宇宙的温度都在下降中，据说连火山星都出现了下雪的反应！"],["恶灵兽这一招真是狠毒!","我先去准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               SocketConnection.send(1022,84350248);
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               startPro();
            });
         }]);
      }
      
      public static function startPro() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1320_1"),function():void
         {
            NpcDialog.show(NPC.SHIPER,["贾斯汀已经和报告过他和纳斯琪交手的情况了，纳斯琪现在非常的强大！"],["是呀，上次我也在！"],[function():void
            {
               NpcDialog.show(NPC.SHIPER,["要拯救第五星系就要破坏冰封之门，要破坏冰封之门就必须打败恶灵兽的助手纳斯琪！"],["可是纳斯琪这么强大……"],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["不错，这正是我要交给你的秘密任务，你必须想办法知道纳斯琪的弱点！"],["好！就交给我吧！"],[function():void
                  {
                     NpcDialog.show(NPC.SHIPER,["抗击邪恶，是每个正义的赛尔义不容辞的责任！这件事，相信贾斯汀一定有他的见解，你速速去请教他一下吧！"],null,null,false,function():void
                     {
                        MapManager.changeMap(11224);
                     });
                  }]);
               }]);
            }]);
         },false);
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
