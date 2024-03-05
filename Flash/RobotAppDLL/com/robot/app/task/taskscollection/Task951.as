package com.robot.app.task.taskscollection
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task951
   {
      
      private static var _mcForMap698:MovieClip;
      
      private static var _mcForMap5:MovieClip;
      
      private static const TASK_ID:uint = 951;
      
      private static var _map:BaseMapProcess;
      
      private static var _num:uint;
       
      
      public function Task951()
      {
         super();
      }
      
      public static function startPro0() : void
      {
         if(TasksManager.getTaskStatus(TASK_ID) != TasksManager.ALR_ACCEPT)
         {
            return;
         }
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_951_1_"),function():void
         {
            TasksManager.complete(TASK_ID,0,function():void
            {
               MapManager.changeMap(698);
            });
         });
      }
      
      public static function initTaskForMap698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap698 = _map.depthLevel["task951MC"] as MovieClip;
         _mcForMap698.visible = false;
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && !param1[1])
            {
               NpcController.npcVisible = true;
            }
         });
      }
      
      public static function startPro1() : void
      {
         _mcForMap698.visible = true;
         if(TasksManager.getTaskStatus(TASK_ID) != TasksManager.ALR_ACCEPT)
         {
            return;
         }
         NpcDialog.show(NPC.SAIXIAOXI,["哈，你来啦！告诉你个秘密哦，我们在最近的探索中发现了了不得的东西！"],["什么东西？！"],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["我们在探索过程中发现了一个神秘的能量体！后来跟踪它，发现了一个神秘的古代石板！"],["古代石板？！"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["后来那个古代石板变成了一种神奇的卡片！"],["哇，这么神奇？！"],[function():void
               {
                  AnimateManager.playMcAnimate(_mcForMap698,1,"mc1",function():void
                  {
                     NpcDialog.show(NPC.SEER,["啊，神秘的石板变成了神秘的卡牌？后来呢？"],["我们把卡牌带回来，派特博士进行了研究。"],[function():void
                     {
                        MapManager.changeMap(5);
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      public static function initTaskForMap5(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap5 = _map.depthLevel["task951MC"] as MovieClip;
         _mcForMap5.visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) != TasksManager.ALR_ACCEPT)
         {
            DisplayUtil.removeForParent(_mcForMap5);
            _mcForMap5 = null;
            return;
         }
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(Boolean(a[0]) && !a[1])
            {
               _mcForMap5.visible = true;
               NpcController.npcVisible = false;
               AnimateManager.playMcAnimate(_mcForMap5,1,"mc1",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["模拟战斗听起来真是好有趣！可以去精灵对战室找0xff0000决斗卡使者0xffffff询问详情哦！"],["我这就去！"],[function():void
                  {
                     TasksManager.complete(TASK_ID,1,function():void
                     {
                        NpcController.npcVisible = true;
                        MapManager.changeMap(37);
                     });
                  }]);
               });
            }
         });
      }
      
      public static function startPro2() : void
      {
         NpcDialog.show(NPC.KAPAIJUEDOUSHI,["大家好！我是精灵对战室的负责人，你是来报名的吗！"],["恩，我要报名！"],[function():void
         {
            NpcDialog.show(NPC.KAPAIJUEDOUSHI,["小赛尔不要着急，精灵对战室还正在装修阶段，你可以先四处看看哦！"],["好的！"],[function():void
            {
               TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     DebugTrace.show("谜样的精灵决斗卡任务----完成！");
                  }
               });
            }]);
         }]);
      }
      
      public static function destroy() : void
      {
         _mcForMap698 = null;
         _map = null;
      }
   }
}
