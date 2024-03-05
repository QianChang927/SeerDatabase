package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task625;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_625
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 625;
       
      
      public function TaskController_625()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         var _loc1_:String = "TaskPanel_" + TASK_ID;
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule(_loc1_),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.DOCTOR,["远古鱼龙身体里强大的潜能真是让人震撼无比啊！"],["博士，你是怎么知道鱼龙潜能的呢？"],[function():void
         {
            NpcDialog.show(NPC.DOCTOR,["那天在尼古尔海底的冒险真是太刺激了，让我给你好好回忆一番！"],["进入博士的回忆..."],[function():void
            {
               TasksManager.accept(TASK_ID,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     Task625.initTask();
                  }
               });
            }]);
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var array:Array = param1;
            if(Boolean(array[0]) && Boolean(array[1]) && Boolean(array[2]) && !array[3])
            {
               NpcDialog.show(NPC.DOCTOR,["事情的经过就是这样，我无意中解封了上古鱼龙帝王，发现了鱼龙超进化的这一秘密。"],["下一步！"],[function():void
               {
                  NpcDialog.show(NPC.DOCTOR,["经过我的研究，只要正确使用这个金色的鱼龙王鳞甲，就能迅速激发远古鱼龙的潜能完成超进化！"],["让我们帮助远古鱼龙变得越来越强大吧！"],[function():void
                  {
                     TasksManager.complete(TASK_ID,3,function(param1:Boolean):void
                     {
                     });
                  }]);
               }]);
            }
            else
            {
               NpcDialog.show(NPC.SEER,["进入博士的回忆..."],null,null,false,function():void
               {
                  MapManager.changeMap(442);
               });
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
