package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1144
   {
      
      public static const TASK_ID:uint = 1144;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1144()
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
         NpcDialog.show(NPC.SHIPER,["恶魔星，这个最不该出现的星球最终还是出现在螺旋星系了，据说恶魔旋涡的入口就在那里，还有迪恩怎么会出现在那里呢？"],["船长，我来汇报任务啦！","船长，我先去准备一下！"],[function():void
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
               NpcDialog.show(NPC.SEER,["记得上次我和队长他们一起前往恶魔星，那里果然很诡异，我们还遇到了一个神秘的黑影，看上去很强大的样子！连尤尼卡都不是他的对手呢！"],["真的吗？会有这样的事情！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["恩恩，看上去那个黑影像天使的样子，但有时候又像是恶魔的化身！"],["这么说来，一切都还是未知数！！！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1144_1"),function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["船长，您还是派我们去吧！对恶魔星我们可比其他队员熟悉多了，您看如何呢！"],["别急，小息，我正有此意呢！"],[function():void
                        {
                           NpcDialog.show(NPC.SHIPER,["不过，你们可要注意安全，这次的目的主要还是搜索迪恩的下落，恶魔星环境险恶，千万不能轻举妄动，特别是阿铁打哦！"],["嘿嘿，船长我们知道了！"],[function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，让我们再次踏上恶魔星的探险之旅吧！"],["准备出发！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1144_2"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeMap(750);
                                       }
                                    });
                                 });
                              }]);
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
