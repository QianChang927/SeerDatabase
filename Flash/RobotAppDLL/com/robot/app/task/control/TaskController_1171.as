package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1171
   {
      
      public static const TASK_ID:uint = 1171;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1171()
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
         NpcDialog.show(NPC.SHIPER,["恶魔星、尤尼卡这些邪恶势力已经引起整个宇宙的反抗，不单单是我们，就连精灵界中的佼佼者都已经参与进来了！"],["船长，圣战即将开始！","我想我应该做些什么！"],[function():void
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
               NpcDialog.show(NPC.SHIPER,["恩恩，关于圣战的事情我也听说了，这可是正与邪的终极对抗！事不宜迟，我们必须抓紧时间，提前抵达恶魔星的第八领域！"],["船长，这个艰巨的任务就交给我吧！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["\t格林和布鲁还在尤尼卡手中，这次一定要把他们救出来！船长你就下命令吧！"],["好吧！看来该是时候全体动员！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1171_1"),function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["遵命！船长！伙伴们，这次不仅仅要击败守护第六领域的邪恶将领，更要找回失踪的格林和布鲁！"],["准备出发！"],[function():void
                        {
                           NpcDialog.show(NPC.ATIEDA,["哈哈，就靠我的斩月双刀吧！它一定可以找到这些家伙的位置并且消灭它们！"],["第六领域，我们来了！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1171_2"),function():void
                              {
                                 TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                 {
                                    if(param1)
                                    {
                                       MapManager.changeMap(768);
                                    }
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
