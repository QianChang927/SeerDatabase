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
   
   public class TaskController_994
   {
      
      public static const TASK_ID:uint = 994;
      
      private static var panel:AppModel;
       
      
      public function TaskController_994()
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
         NpcDialog.show(NPC.SAIXIAOXI,["帕罗狄亚口中的0xff0000帕罗神殿0xffffff，听上去感觉很神秘的样子，难道是帕罗狄亚的老巢？不行，我们一定要去找找！"],["小息，你们在讨论什么呀！","我先去准备一下再来！"],[function():void
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
               NpcDialog.show(NPC.SAIXIAOXI,["哟！是" + MainManager.actorInfo.formatNick + "啊！我们正在猜测0xff0000帕罗神殿0xffffff的具体位置呢！如今的帕罗狄亚一定会想办法0xff0000复仇龙族0xffffff的！我们必须阻止它！"],["恩，这是必须的！"],[function():void
               {
                  NpcDialog.show(NPC.KALULU,["目前最关键的就是在短时间内，确定帕罗神殿的具体位置，以免夜长梦多！"],["我想，先去找博士问问！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_994_dialogue"),function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，看来所有的谜底都在巴斯星，只要找到能量反应点，我想答案自然会揭晓的！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.ATIEDA,["那就马上出发吧！我的手都痒了，真希望能大干一场，哈哈！"],["探险小分队，出发！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_983_1"),function():void
                              {
                                 TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                 {
                                    if(param1)
                                    {
                                       MapManager.changeMap(721);
                                    }
                                 });
                              });
                           }]);
                        });
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
