package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1312;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1312
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1312()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["task1312mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1312.TASK_ID);
      }
      
      public static function initForMap102(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1312.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  startStep();
               }
               else
               {
                  destroy();
               }
            });
         }
         else
         {
            destroy();
         }
      }
      
      public static function initForMap795(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1312.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  taskMC.buttonMode = true;
                  taskMC.addEventListener(MouseEvent.CLICK,step1);
               }
               else
               {
                  destroy();
               }
            });
         }
         else
         {
            destroy();
         }
      }
      
      public static function initForMap805(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1312.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[1]) && !param1[2])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  taskMC.buttonMode = true;
                  taskMC.addEventListener(MouseEvent.CLICK,step2);
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  endStep();
               }
               else
               {
                  destroy();
               }
            });
         }
         else
         {
            destroy();
         }
      }
      
      private static function startStep() : void
      {
         NpcDialog.show(NPC.JUSTIN,["唔，赛尔，你来啦！是船长让你来的吧！"],["站长，你已经知道纳斯琪的事了？"],[function():void
         {
            NpcDialog.show(NPC.JUSTIN,["不错，知己知彼才能百战百胜，我时刻在关注着邪恶势力的情报！"],["那您现在有什么计划吗？"],[function():void
            {
               NpcDialog.show(NPC.JUSTIN,["不管是多么强大的对手，一定有他的弱点，纳斯琪也不会例外！但是要让它露出破绽，也不太容易！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.YINGKALUOSHI,["我倒是有个主意！"],["快说快说！"],[function():void
                  {
                     NpcDialog.show(NPC.YINGKALUOSHI,["妙计不敢当，不过当初比莫拉就是败在这一招下，我也是现学现卖！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.JUSTIN,["事不宜迟，你早点行动吧！我会随后赶来，保证你万无一失！"],["有站长殿后，我就放心一搏！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1278_4"),function():void
                           {
                              TasksManager.complete(TaskController_1312.TASK_ID,0,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    MapManager.changeMap(795);
                                 }
                              });
                           });
                        }]);
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      private static function step1(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 16
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function step2(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 16
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function endStep() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 17
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(MapManager.currentMap.id != 102 && taskMC != null)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,step1);
               taskMC.removeEventListener(MouseEvent.CLICK,step2);
               DisplayUtil.removeForParent(taskMC);
            }
            _map = null;
         }
      }
   }
}
