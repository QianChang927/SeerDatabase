package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.MapProcessConfig;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1050
   {
      
      public static const TASK_ID:uint = 1050;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1050()
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
         NpcDialog.show(NPC.SAIXIAOXI,["经过上次我们与尤米娜的较量，看得出她一定不简单！不知道现在卡修斯的伤势如何，真是心急啊！"],["对啊！小息，卡修斯怎么样了！","我只是来打酱油的！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         var flag:Boolean = false;
         flag = Boolean(MapProcessConfig.currentProcessInstance.conLevel["task899mc"]["atieda"].visible);
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(!a[0])
            {
               NpcDialog.show(NPC.SAIXIAOXI,["据卡璐璐说，卡修斯没什么大碍了，谁知道是不是这样！"],["赛小息，你是不相信我咯！"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["不不不，我怎么敢不信你呢？你是谁啊！你是鼎鼎大名的卡璐璐，谁不知道你的本事啊！"],["哼，算你聪明！！！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1050_0"),function():void
                     {
                        MapProcessConfig.currentProcessInstance.conLevel["task899mc"]["atieda"].visible = false;
                        NpcDialog.show(NPC.SAIXIAOXI,["可恶，竟然会有这样荒谬的事情，谁都知道不可能是我们所为，真是太气人了！"],["小息，我们一定要想想办法！"],[function():void
                        {
                           NpcDialog.show(NPC.KALULU,["对了，会不会是尤米娜在搞鬼啊！上次不就是假扮成卡修斯的母亲吗？"],["对哦！我怎么把她给忘了！"],[function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "、卡璐璐，我们这就去0xff0000莱恩那星0xffffff，一定要还阿铁打清白！"],["恩恩，立刻出发！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1050_1"),function():void
                                 {
                                    if(flag)
                                    {
                                       MapProcessConfig.currentProcessInstance.conLevel["task899mc"]["atieda"].visible = true;
                                    }
                                    TasksManager.complete(TaskController_1050.TASK_ID,0,function(param1:Boolean = true):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeMap(728);
                                       }
                                    });
                                 });
                              }]);
                           }]);
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
