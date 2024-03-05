package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1194
   {
      
      public static const TASK_ID:uint = 1194;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1194()
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
         NpcDialog.show(NPC.SHIPER,["来的正好！赛尔，我有一个任务要你去做！"],["遵命！请船长指示！","稍等，我先准备一下！"],[function():void
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
            var a:Array = param1;
            if(!a[0])
            {
               NpcDialog.show(NPC.SHIPER,["最近海盗一直没有动静！但是根据我的经验，它们才不会毫无作为，肯定在酝酿什么新的阴谋！"],["船长大人和我英雄所见略同！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1194_1"),function():void
                  {
                     NpcDialog.show(NPC.SHIPER,["探测器被发现了，比特果然狡猾！"],["他们想暗算雷伊！"],[function():void
                     {
                        NpcDialog.show(NPC.SHIPER,["海盗狡猾诡诈，心狠手辣！现在雷伊重伤未愈，绝不能让它们趁虚而入！赛尔，我命令你马上出发去警告雷伊小心暗算！"],["好的，我这就去！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1194_3"),function():void
                           {
                              TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    MapManager.changeMap(767);
                                 }
                              });
                           });
                        }]);
                     }]);
                  },false);
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
