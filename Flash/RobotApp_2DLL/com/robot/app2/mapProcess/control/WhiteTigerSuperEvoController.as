package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.WeeklyTasksController;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class WhiteTigerSuperEvoController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function WhiteTigerSuperEvoController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         checkPreTask();
         addEvents();
      }
      
      private static function addEvents() : void
      {
         MapListenerManager.add(_map.conLevel["whiteTiger"],onStatus);
      }
      
      private static function onStatus(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("白虎超进化系列活动(猜想)","点击场景NPC",StatManager.RUN_ACT);
         if(param1.currentTarget.currentFrame == 1)
         {
            onStart();
         }
         else
         {
            showChooseDialog();
         }
      }
      
      private static function showChooseDialog() : void
      {
         WeeklyTasksController.go(1);
      }
      
      private static function checkPreTask() : void
      {
         if(BitBuffSetClass.getState(22562))
         {
            _map.conLevel["whiteTiger"].gotoAndStop(2);
         }
         else
         {
            CommonUI.addYellowExcal(_map.topLevel,309,264);
            _map.conLevel["whiteTiger"].gotoAndStop(1);
         }
      }
      
      private static function onStart() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10648_white_tiger"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var taskMc:MovieClip = param1;
            CommonUI.removeYellowExcal(_map.topLevel);
            KTool.showMapAllPlayerAndMonster(false);
            _map.conLevel["whiteTiger"].gotoAndStop(3);
            MapManager.currentMap.topLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.COLORFUL_TIGER,["泰格尔大人正处于超进化孕育的状态中，迫切地需要大家的祈愿！"],["我愿助神兽大人一臂之力！"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.COLORFUL_TIGER,["我在星际旅行时发现了一种神奇的宝箱精灵。它随身携带的宝箱中0xff0000可能会有一种被封印的蛋0xffffff！"],["被封印的……蛋？"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.COLORFUL_TIGER,["没错！泰格尔大人发现如果0xff0000解封这个蛋0xffffff，将有可能获得一些神奇的物质。将这些东西作为贡品献上，对泰格尔大人的超进化大有裨益！"],["真的吗！我该怎么做？"]);
            mod4 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.COLORFUL_TIGER,["我以时空之力将这个神奇的精灵传送到这里来，接下来就看你们的了！"],["好嘞，看我的厉害！"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5],function():void
            {
               MapManager.currentMap.topLevel.removeChild(taskMc);
               BitBuffSetClass.setState(22562,1);
               KTool.showMapAllPlayerAndMonster(true);
               _map.conLevel["whiteTiger"].gotoAndStop(2);
               showChooseDialog();
            });
         });
      }
      
      public static function checkLastDayReward() : void
      {
         var items:Array = null;
         var date:Date = new Date(2014,10,21);
         if(SystemTimerManager.sysBJDate.time >= date.time)
         {
            items = [12234,2303];
            KTool.getMultiValue(items,function(param1:Array):void
            {
               var _loc2_:int = int(param1[0]);
               var _loc3_:int = int(param1[1]);
               if(_loc2_ == 0 && _loc3_ != 0)
               {
                  SocketConnection.send(CommandID.WHITE_TIGER_SUPER_EVO_PRAY,_loc3_);
               }
            });
         }
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            _map = null;
         }
      }
   }
}
