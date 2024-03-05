package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObject;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GoldPegasusWakeController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const BUFFER_ID:uint = 1173;
       
      
      public function GoldPegasusWakeController()
      {
         super();
      }
      
      public static function startStory(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         StatManager.sendStat2014("黄金天马觉醒","进入天马祭坛",StatManager.RUN_ACT);
         if(!BufferRecordManager.getMyState(BUFFER_ID))
         {
            KTool.hideMapAllPlayerAndMonster();
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_960_2"),function(param1:MovieClip):void
            {
               var mod1:TaskMod;
               var mod2:TaskMod;
               var mod3:TaskMod;
               var mod4:TaskMod;
               var mod5:TaskMod;
               var mod6:TaskMod;
               var mod7:TaskMod;
               var mapobj:MapObject = null;
               var mapobj2:MapObject = null;
               var taskMc:MovieClip = param1;
               _map.conLevel.addChild(taskMc);
               KTool.hideMapAllPlayerAndMonster();
               mapobj = MapObjectControl.getMapObjetByName("huangjintianma");
               mapobj2 = MapObjectControl.getMapObjetByName("summer_gift_jagu");
               if(mapobj != null)
               {
                  mapobj.visible = false;
               }
               if(mapobj2 != null)
               {
                  mapobj2.visible = false;
               }
               mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELISA,["殿下，你一定要追求最强的力量吗？"]);
               mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUANGJINTIANMA,["没错，这次我下定了决心！"]);
               mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGGUANGTIANMA,["可是，从来没有精灵成功过。"]);
               mod4 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               mod5 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["map_960_ful_2",true]);
               mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PURGATORY_LORD,["我会在正义的尽头等你。"]);
               mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUANGJINTIANMA,["迎接你们的，就是我铁骑的审判！"]);
               TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7],function():void
               {
                  if(mapobj != null)
                  {
                     mapobj.visible = true;
                  }
                  if(mapobj2 != null)
                  {
                     mapobj2.visible = true;
                  }
                  DisplayUtil.removeForParent(taskMc);
                  BufferRecordManager.setMyState(BUFFER_ID,true);
                  KTool.showMapAllPlayerAndMonster();
               });
            });
         }
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
