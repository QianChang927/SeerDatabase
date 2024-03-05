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
   
   public class TaskController_983
   {
      
      public static const TASK_ID:uint = 983;
      
      private static var panel:AppModel;
       
      
      public function TaskController_983()
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
         NpcDialog.show(NPC.SAIXIAOXI,["我们离真相越来越近了，原来0xff0000帕罗狄亚0xffffff是为了复仇才成为0xff0000邪恶四灵0xffffff的一员，看样子好戏要开始了！"],["小息，我来报道了！","等等再来找你们！"],[function():void
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
               NpcDialog.show(NPC.SAIXIAOXI,["哎呀！" + MainManager.actorInfo.formatNick + "，你来的太及时了！我们正准备出发前往0xff0000巴斯星0xffffff呢！不知道小布那里进展如何了！"],["对了，上次你的伤势好点了吗？"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["哎呀，小事情啦！你知道我有0xff0000间歇性短路症0xffffff的，不好幸好有卡璐璐在，否则我真不知道该怎么办！"],["哦哦，没事就好！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_983_0"),function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，小布一定是通过七星天珠在指引着我们，大家准备出发！"],["恩恩，立刻前往巴斯星！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_983_1"),function():void
                           {
                              TasksManager.complete(TASK_ID,0,function():void
                              {
                                 MapManager.changeMap(717);
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
