package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1227
   {
      
      public static const TASK_ID:uint = 1227;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1227()
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
         NpcDialog.show(NPC.SAIXIAOXI,["你知道赛尔，最近，双子阿尔法星不时会传出恐怖的传言！"],["我就是特意为这事来的！","我只是碰巧路过这里呢！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  startPro();
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(!a[0])
            {
               NpcDialog.show(NPC.SAIXIAOXI,["已经不止一个人对我说过了！阿尔法星在闹鬼！"],["哈？！闹鬼？"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["据说这个鬼来无影，去无踪！非常厉害！"],["真的假的？"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["赛小息： 想知道真假只有一个方法！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SEER,["队长，你的意思该不会是……"],["哈！你猜对了！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["好的！就这么愉快的决定了！出发！目标，上古遗迹！"],["好吧！我只有舍命陪君子啦！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1227_2"),function():void
                              {
                                 MapManager.changeMap(105);
                              });
                           }]);
                        }]);
                     });
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
