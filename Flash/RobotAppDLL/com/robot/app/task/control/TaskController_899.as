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
   
   public class TaskController_899
   {
      
      public static const TASK_ID:uint = 899;
      
      private static var panel:AppModel;
       
      
      public function TaskController_899()
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
         NpcDialog.show(NPC.SAIXIAOXI,["真是头疼啊！伙伴们你们说第五星系怎么会变成这样！麒麟一族真的会从此消失吗？"],["赛小息，你们在讨论什么啊！","我对这没什么兴趣！"],[function():void
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
               NpcDialog.show(NPC.KALULU,["哦…原来是" + MainManager.actorInfo.formatNick + "啊！正巧我们在分析第五星系的现况！上次我们在巨石岛的探险，简直可以用惊心动魄来形容！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ATIEDA,["没错，在巨石岛我就已经感觉到了杀气，一定又是海盗在作怪！我真想用我的斩月双刀好好教训它们！"],["哇！大家士气都很高涨啊！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_899_1"),function():void
                     {
                        NpcDialog.show(NPC.ATIEDA,["快看，所有的卫兵都已经出发了！我们也不能落后，而且要比他们先到第五星系，我们要证明自己的实力！"],["恩恩，阿铁达说的没错！"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["大家一定还记得在巨石岛遇到的拉琪吧！也许我们可以在它的身上找到一些蛛丝马迹！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.KALULU,[MainManager.actorInfo.formatNick + "说的没错，我们也应该通过自己的努力去获得大家肯定，相信只要我们团结，什么都难不倒我们！"],["赛尔小分队，出发！！！！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_899_2"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,0,function():void
                                    {
                                       MapManager.changeMap(702);
                                    });
                                 });
                              }]);
                           });
                        }]);
                     },false);
                  }]);
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
