package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PetXiaoYinController
   {
       
      
      public function PetXiaoYinController()
      {
         super();
      }
      
      public static function ActivityOne() : void
      {
         if(MapManager.currentMap.id == 1003)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("XiaoYinAnimationOne"),function(param1:MovieClip):void
            {
               var mod1:TaskMod;
               var mod2:TaskMod;
               var mod3:TaskMod;
               var mod4:TaskMod;
               var mod5:TaskMod;
               var mod6:TaskMod;
               var mod7:TaskMod;
               var mod8:TaskMod;
               var mod9:TaskMod;
               var mod10:TaskMod;
               var taskMc:MovieClip = param1;
               KTool.hideMapAllPlayerAndMonster();
               LevelManager.iconLevel.visible = false;
               MapObjectControl.hideOrShowAllObjects(false);
               MapManager.currentMap.controlLevel.addChild(taskMc);
               mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc"]);
               mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI_EVO,["等这一天很久了!"]);
               mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["在等什么？"]);
               mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI_EVO,["当然是神剑现世，荣耀复苏的时刻!"]);
               mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["神剑再现？怪不得最近总感觉有股强大力量隐隐显现。"]);
               mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI_EVO,["我感觉到我们之间力量的共鸣，他一定具有十分强大的力量。"]);
               mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哇！！！！！他是什么样子呢？"]);
               mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI_EVO,["电光涌现、凌空飞行，仗剑行八方！"]);
               mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["那会不会是御剑飞行啊！！！！哇！超级帅！"]);
               mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI_EVO,["马上你就可以见到他了！而且随着神剑力量不断的被激发，他很快会更加强大的！"]);
               TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
                  LevelManager.iconLevel.visible = true;
                  MapObjectControl.hideOrShowAllObjects(true);
                  MapManager.currentMap.controlLevel.removeChild(taskMc);
                  ModuleManager.showAppModule("PetXiaoYinSubPanel",1);
               });
            });
         }
         else
         {
            changeMap(1003,ActivityOne);
         }
      }
      
      public static function ActivityTwo() : void
      {
         var end:Date = new Date(2015,5,12);
         if(SystemTimerManager.sysBJDate.time > end.time)
         {
            BonusController.addDelay(1237);
            SocketConnection.sendWithCallback(47202,function(param1:SocketEvent):void
            {
               ModuleManager.showAppModule("PetXiaoYinSubPanel",5);
            },1,1);
         }
         else
         {
            ModuleManager.showAppModule("AnniversarySignPanel","PetXiaoYinPanel");
         }
      }
      
      public static function completeTwo() : void
      {
         SocketConnection.sendWithCallback(47202,function(param1:SocketEvent):void
         {
            showComplete();
         },1,1);
      }
      
      public static function ActivityThree() : void
      {
         if(MapManager.currentMap.id == 1081)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("XiaoYinAnimationThree"),function(param1:MovieClip):void
            {
               var mod1:TaskMod;
               var mod2:TaskMod;
               var mod3:TaskMod;
               var mod4:TaskMod;
               var mod5:TaskMod;
               var mod6:TaskMod;
               var taskMc:MovieClip = param1;
               KTool.hideMapAllPlayerAndMonster();
               LevelManager.iconLevel.visible = false;
               MapObjectControl.hideOrShowAllObjects(false);
               MapManager.currentMap.controlLevel.addChild(taskMc);
               mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc"]);
               mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAO_YIN,["哈哈哈！不愧是我的神剑，就是这么厉害！"]);
               mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["刚刚我可是看到你很快就累咯~"]);
               mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAO_YIN,["咳咳，现在还没进化，使用起来有点吃力~"]);
               mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["那我就期待你进化后手持神剑的飒爽风姿咯！"]);
               mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAO_YIN,["绝对帅气啊！很快我就能进化的！"]);
               TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
                  LevelManager.iconLevel.visible = true;
                  MapObjectControl.hideOrShowAllObjects(true);
                  MapManager.currentMap.controlLevel.removeChild(taskMc);
                  ModuleManager.showAppModule("PetXiaoYinSubPanel",3);
               });
            });
         }
         else
         {
            changeMap(1081,ActivityThree);
         }
      }
      
      public static function ActivityFour() : void
      {
         var end:Date = new Date(2015,5,12);
         if(SystemTimerManager.sysBJDate.time > end.time)
         {
            BonusController.addDelay(1237);
            SocketConnection.sendWithCallback(47202,function(param1:SocketEvent):void
            {
               ModuleManager.showAppModule("PetXiaoYinSubPanel",5);
            },2,1);
         }
         else
         {
            ModuleManager.showAppModule("AnniversaryQuestionsPanel","PetXiaoYinPanel");
         }
      }
      
      public static function completeFour() : void
      {
         SocketConnection.sendWithCallback(47202,function(param1:SocketEvent):void
         {
            showComplete();
         },2,1);
      }
      
      public static function ActivityFive() : void
      {
         if(MapManager.currentMap.id == 1081)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("XiaoYinAnimationFive"),function(param1:MovieClip):void
            {
               var mod1:TaskMod;
               var mod2:TaskMod;
               var mod3:TaskMod;
               var mod4:TaskMod;
               var mod5:TaskMod;
               var mod6:TaskMod;
               var mod7:TaskMod;
               var mod8:TaskMod;
               var mod9:TaskMod;
               var mod10:TaskMod;
               var mod11:TaskMod;
               var mod12:TaskMod;
               var mod13:TaskMod;
               var taskMc:MovieClip = param1;
               KTool.hideMapAllPlayerAndMonster();
               LevelManager.iconLevel.visible = false;
               MapObjectControl.hideOrShowAllObjects(false);
               MapManager.currentMap.controlLevel.addChild(taskMc);
               taskMc.stop();
               mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAO_YIN,["我感觉力量越来越强大了！"]);
               mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["那你能完全操控神剑啦？"]);
               mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAO_YIN,["怎么可能嘛。不过比起上次好多啦！你看……"]);
               mod4 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc"]);
               mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAO_YIN,["这次是意外啦~"]);
               mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["已经比以前厉害很多了呢，而且你竟然能操控神剑了！"]);
               mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAO_YIN,["我是天才嘛~而且我还能使用超级无比厉害的一个技能呢！"]);
               mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["快！快让我看看"]);
               mod9 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc"]);
               mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["真的是御剑飞行！好酷好酷！超级无比厉害！"]);
               mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAO_YIN,["等我真正掌握它的时候，会更加潇洒的！关键是更加的厉害~"]);
               mod12 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我更加期待了呢"]);
               mod13 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAO_YIN,["那小音进化的时候你一定要来呢！"]);
               TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
                  LevelManager.iconLevel.visible = true;
                  MapObjectControl.hideOrShowAllObjects(true);
                  MapManager.currentMap.controlLevel.removeChild(taskMc);
                  BonusController.addDelay(1237);
                  SocketConnection.sendWithCallback(47202,function(param1:SocketEvent):void
                  {
                     ModuleManager.showAppModule("PetXiaoYinPanel");
                  },3,1);
               });
            });
         }
         else
         {
            changeMap(1081,ActivityFive);
         }
      }
      
      private static function changeMap(param1:int, param2:Function) : void
      {
         var id:int = param1;
         var fun:Function = param2;
         MapManager.changeMap(id);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            fun();
         });
      }
      
      public static function showComplete() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("roadToGrowthTaskComplete"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            LevelManager.topLevel.addChild(mc);
            mc.x = 300;
            mc.y = 190;
            AnimateManager.playMcAnimate(mc,0,"",function():void
            {
               DisplayUtil.removeForParent(mc);
            });
         });
      }
   }
}
