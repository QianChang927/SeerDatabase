package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_961
   {
      
      public static const TASK_ID:uint = 961;
      
      private static var panel:AppModel;
       
      
      public function TaskController_961()
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
         NpcDialog.show(NPC.KALULU,["赛小息，你别这样，说不定小布也很无奈啊！你这样我们看了都很难受的！"],["嗯？小息他怎么了？","先看看发生什么了！"],[function():void
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
               NpcDialog.show(NPC.KALULU,["自从上次在水月洞壁，目睹小布背叛了我们，回来后就一直在电子屏前面查资料，哎…真拿他没办法！"],["他一定还在为小布伤脑筋！"],[function():void
               {
                  NpcDialog.show(NPC.ATIEDA,["哼，我很早就说了？想知道小布是不是真的背叛我们，就必须找到它问个清楚！否则所有的一切都是猜测！"],["阿铁打说的有道理啊！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_961_1"),function():void
                     {
                        NpcDialog.show(NPC.SEER,["那不就是水月洞壁？？果然有问题，我就知道事情不会这么简单的！"],["伙伴们，我们一起去看看吧！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["哼，要去你们去，我对这些没什么兴趣，现在最重要的就是查出小布的真实身份，我是不会善罢甘休的！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.KALULU,["说不定小布也会在那里的，如果我们不去调查清楚，真相难道会来找我们吗？0xff0000队友的生命就是我的生命0xffffff，你难道忘记了吗？"],["额…好吧！我们立刻出发！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_961_2"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,0,function():void
                                    {
                                       MapManager.changeMap(715);
                                    });
                                 });
                              }]);
                           });
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
