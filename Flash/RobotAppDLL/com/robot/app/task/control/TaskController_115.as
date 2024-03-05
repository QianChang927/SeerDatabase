package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_115
   {
      
      private static var _panel:AppModel;
       
      
      public function TaskController_115()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         if(!_panel)
         {
            _panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_115"),"正在打开任务面板");
            _panel.setup();
         }
         _panel.show();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.nick + "，根据特派小队汇报，有一群不明身份的入侵者正在向0xff0000斯科尔星球0xffffff靠近！他们的目标很有可能就是0xff0000高空塔0xffffff！现在命令你火速前往，保卫星球！"],["遵命！我这就前往斯科尔星高空塔！","报告！我先去了解一下情况......"],[function():void
         {
            TasksManager.accept(115,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(331);
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(115,function(param1:Array):void
         {
            var arr:Array = param1;
            if(Boolean(arr[0]) && Boolean(arr[1]) && Boolean(arr[2]) && !arr[3])
            {
               NpcDialog.show(NPC.SHIPER,["如果海盗杂兵说的没错，我们离海盗基地可能越来越近了……这次交战一定在所难免！无论如何！我们都要随时提高警惕！我们是战无不胜的赛尔勇士！"],["遵命！长官！!"],[function():void
               {
                  TasksManager.complete(115,3);
               }]);
            }
         });
      }
      
      public static function destroy() : void
      {
         if(_panel)
         {
            _panel.destroy();
            _panel = null;
         }
      }
   }
}
