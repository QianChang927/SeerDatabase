package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1234
   {
      
      public static const TASK_ID:uint = 1234;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1234()
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
         NpcDialog.show(NPC.SHIPER,["该来的终究会来，想不到，这一次我们终于要面对我们最不想面对的敌人了！"],["我已经准备好了！","让我先准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         }]);
      }
      
      public static function startPro() : void
      {
         NpcDialog.show(NPC.SHIPER,["月圆之夜即将来到，这本该是普天同庆的佳节！可是，派特说有一个坏消息要通知大家！"],["啊！什么坏消息啊！"],[function():void
         {
            NpcDialog.show(NPC.SHIPER,["赛尔，先不要着急，等赛小息他们来了我会让博士直接告诉大家的！这次我们只有上下一心，才能度过难关！"],null,null,false,function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1234_2"),function():void
               {
                  NpcDialog.show(NPC.KELUO,["艾里克如此强大，月圆之夜，只怕连雷伊都未必是它的对手！"],["还有海盗！"],[function():void
                  {
                     NpcDialog.show(NPC.JUSTIN,["到时候雷伊要全神贯注对付艾里克，海盗很可能趁机进攻我们！"],["不错！"],[function():void
                     {
                        NpcDialog.show(NPC.SHIPER,["我把两位叫来，正是想提醒大家要注意太空站和赛尔号的布防！不要被海盗声东击西，打个措手不及！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.DOCTOR,["死亡之翼的力量非常强大，和雷光之翼一样，数千年难得一见！可以说是雷光之翼天生的对头！"],["必须尽快通知雷伊"],[function():void
                           {
                              NpcDialog.show(NPC.SHIPER,["小息！根据卫兵报告，雷伊已经离开雷神秘境去找艾里克了，事不宜迟，你快出发吧！"],["好的！我这就去！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1234_4"),function():void
                                 {
                                    TasksManager.complete(TaskController_1234.TASK_ID,0,function(param1:Boolean):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeLocalMap(10366);
                                       }
                                    });
                                 });
                              }]);
                           }]);
                        });
                     }]);
                  }]);
               },false);
            });
         }]);
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
