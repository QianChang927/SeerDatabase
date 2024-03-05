package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   
   public class HaiShenController
   {
       
      
      public function HaiShenController()
      {
         super();
      }
      
      public static function clickNpc() : void
      {
         if(!BitBuffSetClass.getState(22443))
         {
            playTask();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("HaiShenPanel"));
         }
      }
      
      private static function playTask() : void
      {
         var tempArr:Array = [];
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active_20140516_5",true]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[null,1,"mc1"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSAIDONG,["我凭什么相信你？"],["凭我是阿萨斯！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["凭我是暗夜城的城主！凭我的孩子会瞳之神能！凭魔灵王是我的手下！"],["我考虑考虑！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[null,2,"mc2"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["haishenFullAni",true]);
         tempArr.push(mod1,mod2,mod3,mod4,mod5,mod6);
         MapObjectControl.hideOrShowAllObjects(false);
         MainManager.selfVisible = false;
         KTool.showMapAllPlayerAndMonster(false);
         TaskDiaLogManager.single.playStory(tempArr,function():void
         {
            MapObjectControl.hideOrShowAllObjects(true);
            MainManager.selfVisible = true;
            KTool.showMapAllPlayerAndMonster(true);
            BitBuffSetClass.setState(22443,1);
            ModuleManager.showModule(ClientConfig.getAppModule("HaiShenPanel"));
         },"haishenMapAni",true);
      }
   }
}
