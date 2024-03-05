package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.MapProcessConfig;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1081
   {
      
      public static const TASK_ID:uint = 1081;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1081()
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
         NpcDialog.show(NPC.SHIPER,["据前方侦察小队汇报，海盗集团出现了一位名叫比特的领袖，看来海盗集团的实力真的深不可测啊！"],["船长，我们已经和它交过手了！","看来，我要去准备一下了！"],[function():void
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
               NpcDialog.show(NPC.SHIPER,["恩恩，我听赛小息他们说了，这次的任务很棘手啊！真担心尤米娜会被海盗利用！我们一定要做些什么才行！"],["船长，快下达命令吧！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["为了维护宇宙的和平，就算是付出自己的生命，我们在所不惜！"],["恩，不过...让我先想想策略！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1081_1"),function():void
                     {
                        NpcDialog.show(NPC.SHIPER,["卫兵，开始飞船防御系统，并且告诉飞船上的所有人，准备全力御敌，不知道赛尔号能否避免这场灾难！"],["船长，让我们去阻击它们吧！"],[function():void
                        {
                           NpcDialog.show(NPC.SHIPER,["没时间了！我们唯一能靠的只有他了！"],["他？难道是？？？"],[function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["哈哈，这个人就是我赛小息，我一定可以拯救赛尔号的！我可是有史以来最年轻的英雄！"],["快看！那不是！！"],[function():void
                              {
                                 TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                 {
                                    if(param1)
                                    {
                                       initStep1();
                                    }
                                 });
                              }]);
                           }]);
                        }]);
                     },false);
                  }]);
               }]);
            }
            else if(Boolean(a[0]) && !a[1])
            {
               initStep1();
            }
         });
      }
      
      public static function initStep1() : void
      {
         var DienVisible:Boolean = false;
         DienVisible = false;
         if(MapProcessConfig.currentProcessInstance.depthLevel["npcDienMc"] != null)
         {
            DienVisible = Boolean(MapProcessConfig.currentProcessInstance.depthLevel["npcDienMc"].visible);
         }
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1081_2"),function():void
         {
            if(DienVisible)
            {
               MapProcessConfig.currentProcessInstance.depthLevel["npcDienMc"].visible = false;
            }
            NpcDialog.show(NPC.SHIPER,["不...迪恩她为了赛尔号，居然...，我们不能停下！卫兵，搜索附近的区域，看看是不是可以找到迪恩！"],["遵命！船长！"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["实在是不能忍受了，海盗我和你们势不两立，我这就去海盗集中营把他们统统干掉！"],["小息，你别冲动啊！"],[function():void
               {
                  NpcDialog.show(NPC.ATIEDA,["船长，请下达命令吧！我们一定可以完成任务的，我们要为迪恩报仇！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SHIPER,["好吧！不过你们一定要答应我，不能轻举妄动！我们还会继续搜索迪恩的下落！"],["遵命！船长！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1081_3"),function():void
                        {
                           if(DienVisible)
                           {
                              MapProcessConfig.currentProcessInstance.depthLevel["npcDienMc"].visible = true;
                           }
                           TasksManager.complete(TASK_ID,1,function(param1:Boolean = true):void
                           {
                              if(param1)
                              {
                                 MapManager.changeMap(732);
                              }
                           });
                        });
                     }]);
                  });
               }]);
            }]);
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
