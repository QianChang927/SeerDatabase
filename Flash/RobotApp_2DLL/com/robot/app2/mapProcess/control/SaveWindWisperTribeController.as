package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SaveWindWisperTribeController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function SaveWindWisperTribeController()
      {
         super();
      }
      
      public static function initMap1133(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["mcNpc"].addEventListener(MouseEvent.CLICK,onClick);
      }
      
      public static function destroyMap1133() : void
      {
         _map = null;
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(BitBuffSetClass.getState(22919))
         {
            ModuleManager.showAppModule("SaveWindWisperTribePanel");
         }
         else
         {
            playPre(function():void
            {
               BitBuffSetClass.setState(22919,1);
               ModuleManager.showAppModule("SaveWindWisperTribePanel");
            });
         }
      }
      
      private static function playPre(param1:Function) : void
      {
         var fun:Function = param1;
         KTool.hideMapAllPlayerAndMonster();
         NpcController.npcVisible = false;
         LevelManager.iconLevel.visible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         _map.conLevel["mcNpc"].visible = false;
         ResourceManager.getResource(ClientConfig.getActiveUrl("save_wind_wisper_tribe_movie"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var mod6:TaskMod;
            var mc:MovieClip = param1;
            _map.conLevel.addChild(mc);
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["什么情况，不是食人部落吧！我是机器人，我可没有肉！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["不要误会，在它们的眼里，你可是救世主！"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["什么？救世主？我只是个普通的小赛尔……"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["神秘的鬼魂扰乱了风语森林的安宁，帮助它们，也是在帮助你自己……"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["听不懂你在说什么，不过，既然它们需要我的帮助，就拔刀相助吧！"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6],function():void
            {
               KTool.showMapAllPlayerAndMonster();
               NpcController.npcVisible = true;
               LevelManager.iconLevel.visible = true;
               MapObjectControl.hideOrShowAllObjects(true);
               _map.conLevel["mcNpc"].visible = true;
               _map.conLevel.removeChild(mc);
               fun();
            });
         });
      }
   }
}
