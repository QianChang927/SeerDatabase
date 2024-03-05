package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_97
   {
      
      public static var shot_grape_complete:Boolean = false;
      
      public static var get_kuangshi:Boolean = false;
      
      public static var help_dawei_complete:Boolean = false;
      
      public static var isShow:Boolean = false;
      
      public static const TASK_ID:uint = 97;
      
      private static var panel:AppModel = null;
      
      private static var taskPanel:AppModel = null;
       
      
      public function TaskController_97()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         var _loc1_:String = "TaskPanel_" + TASK_ID;
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
         panel = new AppModel(ClientConfig.getTaskModule(_loc1_),"正在打开任务信息");
         panel.setup();
         panel.show();
      }
      
      public static function setup() : void
      {
      }
      
      public static function start() : void
      {
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var arr:Array = param1;
            if(Boolean(arr[0]) && !arr[1])
            {
               NpcDialog.show(NPC.DOCTOR,["艾迪星啊！艾迪星！你可总算让我发现了！#8啦啦啦……"],["博士这是在干吗啊……"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["博士啊！你这是在干吗呢？#7对了！我在艾迪星球上发现一个性格很奇怪的精灵哦！我怎么叫它，它都不理我，它长的……"],["它长的……"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("musicMovie"),function():void
                     {
                        NpcDialog.show(NPC.DOCTOR,["它的名字叫帕尼，能够吸引它注意的只有音乐！小家伙是个音乐痴迷者，那个星球上的植物也是因为受到它音乐的影响而变得活了！"],["音乐！啊哈！我想到办法咯！博士我先走啦！"],[function():void
                        {
                           TasksManager.complete(97,1,null,true);
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
