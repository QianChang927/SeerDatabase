package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_947
   {
      
      public static const TASK_ID:uint = 947;
      
      private static var panel:AppModel;
       
      
      public function TaskController_947()
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
         NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，之前我们已经领教过0xff0000帕罗狄亚0xffffff的实力，它居然能模仿任何生物，看来我们要多多留意才行！"],["看来探险小队又有动作了！","让我先去准备一下！"],[function():void
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
               NpcDialog.show(NPC.SEER,["小息，我来啦！接下去我们该怎么办呢？你们一定有什么计划了吧！！"],["恩恩，应该算吧！"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["恩恩，不过在前往艾伦星之前，我想应该先去龙王子哈莫那里问问小布的情况！"],["哇！难道我们要去龙王圣殿？"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_947_dialogue"),function():void
                     {
                        NpcDialog.show(NPC.ATIEDA,["哈哈！又可以前往最危险的第五星系了，我已经把斩月双刀磨得更加锋利了，帕罗狄亚是该我们较量的时候了！"],["等等，在去之前，我还要去个地方！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["相信我啦！你们跟我走，一定会受益匪浅的！"],["探险队，出发！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_947_1"),function():void
                              {
                                 TasksManager.complete(TASK_ID,0,function():void
                                 {
                                    MapManager.changeMap(348);
                                 });
                              });
                           }]);
                        }]);
                     },false);
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
