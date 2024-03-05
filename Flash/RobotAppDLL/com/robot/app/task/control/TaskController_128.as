package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_128
   {
      
      public static const TASK_ID:uint = 128;
      
      private static var panel:AppModel = null;
       
      
      public function TaskController_128()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         var _loc1_:String = "TaskPanel_" + TASK_ID;
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule(_loc1_),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function setup() : void
      {
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.nick + "，你来得正好。情报部门收到了来自贝塔星上要塞废墟的安全警报……看来有人正在回收那里的零件，据说是一只机械精灵……"],["到底是怎么样的精灵？"],[function():void
         {
            NpcDialog.show(NPC.SHIPER,["目前我们的情报还不是很确切，我希望你能去0xff0000海盗要塞废墟0xffffff一探究竟，如果遇到情况有任何危险，千万别鲁莽行事。"],["遵命！","我还没准备好......"],[function():void
            {
               TasksManager.accept(TASK_ID);
            }]);
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(128,function(param1:Array):void
         {
            var arr:Array = param1;
            if(Boolean(arr[2]) && !arr[3])
            {
               TasksManager.complete(128,3,function(param1:Boolean):void
               {
                  var b:Boolean = param1;
                  if(b)
                  {
                     NpcDialog.show(NPC.SHIPER,["你是说塔克林被机械化了？这看起来应该是海盗们的科技。看来这次的行动也让你见识到大家在一起能发挥出多大的力量了。"],["真没想到我们打败了塔克林。"],[function():void
                     {
                        NpcDialog.show(NPC.SHIPER,["我一直相信只要赛尔们团结在一起就没有什么难关是无法攻克的！从今往后你要时刻牢记这一点"],["我一定会铭记在心的！"],[function():void
                        {
                           NpcDialog.show(NPC.SHIPER,["我还没办法猜到为什么塔克林会在贝塔星出现，但是这肯定和海盗们有关。看来海盗的势力离我们越来越近了，一定要更加提高警惕才行了！"],["遵命！"],[function():void
                           {
                              TasksManager.complete(128,4);
                           }]);
                        }]);
                     }]);
                  }
               });
            }
            if(Boolean(arr[3]) && !arr[4])
            {
               NpcDialog.show(NPC.SHIPER,["你是说塔克林被机械化了？这看起来应该是海盗们的科技。看来这次的行动也让你见识到大家在一起能发挥出多大的力量了。"],["真没想到我们打败了塔克林。"],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["我一直相信只要赛尔们团结在一起就没有什么难关是无法攻克的！从今往后你要时刻牢记这一点"],["我一定会铭记在心的！"],[function():void
                  {
                     NpcDialog.show(NPC.SHIPER,["我还没办法猜到为什么塔克林会在贝塔星出现，但是这肯定和海盗们有关。看来海盗的势力离我们越来越近了，一定要更加提高警惕才行了！"],["遵命！"],[function():void
                     {
                        TasksManager.complete(128,4);
                     }]);
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
