package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1220
   {
      
      public static const TASK_ID:uint = 1220;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1220()
      {
         super();
      }
      
      public static function initTaskFor4(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(1);
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(1);
               }
            });
         }
      }
      
      public static function initTaskFor775(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskMC.buttonMode = true;
                  KTool.hideMapAllPlayerAndMonster();
                  CommonUI.addYellowExcal(_map.topLevel,115,364);
                  taskMC.addEventListener(MouseEvent.CLICK,initStep1);
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep3();
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
      
      private static function initStep1(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 35
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function initStep2() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 20
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function initStep3() : void
      {
         taskMC.gotoAndStop(12);
         NpcDialog.show(NPC.SAIXIAOXI,["小小机关休想难倒我！助我一臂之力吧，赛尔！"],["好的！"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ZogAllisonInvincibleGrid"),"正在加载，请稍候...");
         }]);
      }
      
      public static function initStep3GoOn() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["呼！可算过来了！我们快点跟上去，别让海盗对精灵下毒手！"],["恩恩！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["看！他们在鬼鬼祟祟的做什么！"],["不要轻举妄动！"],[function():void
               {
                  NpcDialog.show(NPC.KALULU,["小息，不要轻举妄动，不然海盗们狗急跳墙，会伤害精灵的！"],["可恶！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1220_3"),function():void
                     {
                        _map.conLevel["tombDoor"].gotoAndStop(2);
                        NpcDialog.show(NPC.SAIXIAOXI,["海盗们好像放出来一个了不得的家伙！它所说的宫殿，应该就是海盗基地吧？"],["我们先把受伤的精灵带回赛尔号吧！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["恩，我们先回去报告，赛尔，我们在赛尔号见！"],["好的！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                              {
                                 TasksManager.complete(TASK_ID,3,function(param1:Boolean = true):void
                                 {
                                    destroy();
                                 });
                              });
                           }]);
                        }]);
                     });
                  }]);
               }]);
            });
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 775 && Boolean(_map.conLevel["task1220MC"]))
         {
            return _map.conLevel["task1220MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 775)
         {
            KTool.showMapAllPlayerAndMonster();
            if(taskMC)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
               DisplayUtil.removeForParent(taskMC);
            }
            _map = null;
         }
      }
   }
}
