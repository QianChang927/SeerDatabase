package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   
   public class EvilGodEvoController
   {
      
      public static var currLevel:int = 0;
       
      
      public function EvilGodEvoController()
      {
         super();
      }
      
      public static function clickEquip(param1:* = null) : void
      {
         StatManager.sendStat2014("魔界的挑衅邪恶魔神（2014.07.018）","点击主装置",StatManager.RUN_ACT);
         if(MapManager.currentMap.id == 1010)
         {
            if(BitBuffSetClass.getState(22479))
            {
               ModuleManager.showModule(ClientConfig.getAppModule("EvilGodSummerPanel"),"正在努力打开面板...");
            }
            else
            {
               playStory();
            }
         }
         else if(MapManager.currentMap.id == 1008 && Boolean(BitBuffSetClass.getState(22479)))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("EvilGodSummerPanel"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("EvilGodEvoMsgPanel"),"正在努力打开面板...");
         }
      }
      
      public static function playStory() : void
      {
         var mod:TaskMod = new TaskMod(TaskDiaLogManager.CARTOON,0,null,null,["cartoon/cartoon_20140718_evilgod"]);
         KTool.hideMapAllPlayerAndMonster();
         StatManager.sendStat2014("魔界的挑衅邪恶魔神（2014.07.018）","接取前置任务",StatManager.RUN_ACT);
         TaskDiaLogManager.single.playStory([mod],function():void
         {
            StatManager.sendStat2014("魔界的挑衅邪恶魔神（2014.07.018）","完成前置任务",StatManager.RUN_ACT);
            KTool.showMapAllPlayerAndMonster();
            BitBuffSetClass.setState(22479,1);
            ModuleManager.showModule(ClientConfig.getAppModule("EvilGodSummerPanel"),"正在努力打开面板...");
         });
      }
   }
}
