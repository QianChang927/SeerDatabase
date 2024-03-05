package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1166
   {
      
      public static const TASK_ID:uint = 1166;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1166()
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
         NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，话说巨石灵王召开圣战序章，经过秘境的特训，正义的力量更加的强大了！"],["是呀，我们现在已经准备好继续冒险了！","我觉得我实力仍然不够！"],[function():void
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
               NpcDialog.show(NPC.SAIXIAOXI,["恩，好不容易把布鲁救了回来，格林又被尤尼卡抓走了，我们应该去探查一下他的下落！"],["对哦！队长你有什么计划吗？"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["恶魔星的前四个领域我们已经探查过了，尤尼卡肯定把格林带去了更深的巢穴！我觉得我们应该去第五领域！"],["恩，就是刀山火海，也要救出格林！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1166_1"),function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["卡璐璐，看这情况，你是无法阻止它们了。也好，多一个人，多一份力量，不如我们就结伴一起去搜寻格林的下落！"],["队长，你真的决定这样做吗？"],[function():void
                        {
                           NpcDialog.show(NPC.KALULU,["恶魔星可是龙潭虎穴，越深的地方肯定有更强大更邪恶的力量镇守！可不能大意啊！"],["卡璐璐，你可不要小看我们！"],[function():void
                           {
                              NpcDialog.show(NPC.PANDA,["我们“三神兽”是绝对可以信赖的！这次我们一定可以顺利的踏平第五领域，救出格林！"],["好吧，好吧！你的信心可真是强大！"],[function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["我们一定要找到格林的下落，伙伴们准备出发！"],["目标...恶魔星第五领域！"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1166_2"),function():void
                                    {
                                       TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                       {
                                          if(param1)
                                          {
                                             SocketConnection.send(1022,84494464);
                                             MapManager.changeMap(762);
                                          }
                                       });
                                    });
                                 }]);
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
