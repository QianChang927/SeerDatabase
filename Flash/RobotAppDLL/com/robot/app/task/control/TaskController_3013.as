package com.robot.app.task.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   
   public class TaskController_3013
   {
      
      public static const TASK_ID:uint = 3013;
      
      public static const MAP_LOCAL_ID1:int = 10531;
      
      public static const MAP_LOCAL_ID2:int = 10532;
      
      public static const MAP_LOCAL_ID3:int = 10532;
      
      public static const MAP_LOCAL_ID4:int = 10533;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      private static var puzzleCompleteFun:Function;
       
      
      public function TaskController_3013()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，妖王摩哥斯进攻庞贝古城，竟然激发了萨瑞卡的圣能量！他接下来还想干什么？快去和先锋队一起，去看看发生了什么事！"],["我立刻就去！（完成主线剧情，奖励翻倍任你选！）","让我先准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               MapManager.changeLocalMap(MAP_LOCAL_ID1);
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(!param1[0])
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID1);
            }
            else if(!param1[1])
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID2);
            }
            else if(!param1[2])
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID3);
            }
            else if(!param1[3])
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID4);
            }
         });
      }
      
      public static function pro1() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10531_0"),function(param1:MovieClip):void
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
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3013_0",true]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_NEW,["为了你的野心，难道我们失去的还不够多吗？"],["所以才不能放弃！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["我们魔灵一族必须成为世界的霸主！这样才对得起我们曾经的荣耀！"],["一派胡言！"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_NEW,["你瞒不了我！你所做的一切都只是为了满足自己的私心！你早已经被权利和邪恶的能量所蒙蔽！"],["放肆！"]);
            mod5 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["这个世界还没有谁能够敢反抗我！就算你是我的侄儿，也绝对不允许！我是不可战胜的！"],["是吗？"]);
            mod7 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3013_1",true]);
            mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_EVO,["魔灵王！你不要跑！就算你是我叔叔，我也绝对不会放过你！我一定会找到你！"]);
            mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_EVO,["现在魔灵王逃走了，我能做的就只有这些。伊洛维奇，你一定要回到天蛇星，帮助缪斯。"],["伊洛维奇，重返暗夜城！"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode1();
            });
         });
      }
      
      public static function pro2() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10532_0"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var mod6:TaskMod;
            var mod7:TaskMod;
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["父亲离开了。复兴暗夜城的重任就落在我的肩上。我一定要继承他的遗志。"],["我不管这些！"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["现在该是处理我们之前事情的时候了。说吧！你到底和天蛇星有什么关系！"],["你不需要知道！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["我现在没兴趣去说这些！我一心只想振兴暗夜城。"],["就凭你吗？"]);
            mod4 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["没想到你居然会出现在这里，看来我必须要抓紧时间获得圣能量！"],["你不要走！"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["哼！我这次绝对不会失败！你说呢？天蛇……"],["别说了！"]);
            mod7 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode2();
            });
         });
      }
      
      public static function pro3() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10532_1"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            TaskDiaLogManager.single.playStory([mod1],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode3();
            });
         });
      }
      
      public static function pro4() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10533_0"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["天空之城！索伦森果然聪明！早早的就想要霸占这里，夺取托鲁克的圣能量！"],["是谁？"]);
            mod3 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3013_2",true]);
            mod4 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3013_3",true]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode4();
            });
         });
      }
      
      public static function completeNode1() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_1,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(MAP_LOCAL_ID2);
         });
      }
      
      public static function completeNode2() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_2,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(MAP_LOCAL_ID3);
         });
      }
      
      public static function completeNode3() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_3,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(MAP_LOCAL_ID4);
         });
      }
      
      public static function completeNode4() : void
      {
         KTool.showMapAllPlayerAndMonster();
         openTaskMainPanelTotal();
      }
      
      public static function openPuzzlePanel(param1:Boolean, param2:Function = null) : void
      {
         if(param1)
         {
            EventManager.addEventListener("StarPuzzleComplete",onPuzzleComplete);
            ModuleManager.showModule(ClientConfig.getAppModule("StarPuzzlePanel"));
         }
         else
         {
            EventManager.removeEventListener("StarPuzzleComplete",arguments.callee);
         }
         if(param2 != null)
         {
            puzzleCompleteFun = param2;
         }
      }
      
      private static function onPuzzleComplete(param1:DynamicEvent) : void
      {
         var e:DynamicEvent = param1;
         openPuzzlePanel(false);
         if(e.paramObject.isWin)
         {
            NpcDialog.show(NPC.MIUSI,["太棒了！我们胜利了！我们快去寻找伊洛维奇！"],["立即出发！"],[function():void
            {
               if(puzzleCompleteFun != null)
               {
                  puzzleCompleteFun();
               }
               pro3();
            }]);
         }
         else
         {
            NpcDialog.show(NPC.MIUSI,[MainManager.actorInfo.formatNick + "，我们绝对不能放弃！伊洛维奇的身份可疑，但是有情有义！我们一定要找到他！"],["我绝对不会放弃的！","哎呦！今天天气不错哦！"],[function():void
            {
               openPuzzlePanel(true);
            }]);
         }
      }
      
      private static function openTaskMainPanelTotal() : void
      {
         var obj:Object = {};
         obj["funhandler1"] = function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TaskMainTurnPanel"),"正在打开...",{
               "turnNumber":883,
               "turn":44033
            });
            TasksManager.complete(TASK_ID,TASK_STAGE_4);
         };
         obj["funhandler2"] = function():void
         {
            MapManager.changeLocalMap(77);
         };
         ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",obj);
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
