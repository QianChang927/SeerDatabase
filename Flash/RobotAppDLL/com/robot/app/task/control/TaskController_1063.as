package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1063
   {
      
      public static const TASK_ID:uint = 1063;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1063()
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
         NpcDialog.show(NPC.SAIXIAOXI,["尤米娜比帕罗狄亚还棘手，连卡修斯都中了她的奸计！我们必须尽早发现她的弱点啊！"],["是呀，她真是可怕的对手！","我只是来打酱油的！"],[function():void
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
               NpcDialog.show(NPC.SAIXIAOXI,["我已经把情况报告给罗杰船长了，相信他很快就会召开会议！"],["恩，一人计短二人计长嘛！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1063_0"),function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["哇哈哈，果然我才是关键人物啊！不过布莱克神神秘秘，好可疑啊！"],["是很可疑！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["不管了，不入虎穴，怎得虎子！就算是尤米娜的阴谋，我也要去看看！我们出发吧！"],["好的！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1063_1"),function():void
                           {
                              TasksManager.complete(TaskController_1063.TASK_ID,0,function(param1:Boolean = true):void
                              {
                                 if(param1)
                                 {
                                    MapManager.changeMap(730);
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
