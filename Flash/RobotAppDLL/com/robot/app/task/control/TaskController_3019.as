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
   import org.taomee.manager.ResourceManager;
   
   public class TaskController_3019
   {
      
      public static const TASK_ID:uint = 3019;
      
      public static const MAP_LOCAL_ID1:int = 10542;
      
      public static const MAP_LOCAL_ID2:int = 10544;
      
      public static const MAP_LOCAL_ID3:int = 10543;
      
      public static const MAP_LOCAL_ID4:int = 10543;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
       
      
      public function TaskController_3019()
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
      
      public static function setup(param1:int, param2:Function = null) : void
      {
         var mapid:int = param1;
         var backfun:Function = param2;
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(mapid == MAP_LOCAL_ID1 && !param1[0])
            {
               pro1();
               if(backfun != null)
               {
                  backfun(true);
               }
            }
            else if(mapid == MAP_LOCAL_ID2 && param1[0] && !param1[1])
            {
               pro2();
               if(backfun != null)
               {
                  backfun(true);
               }
            }
            else if(mapid == MAP_LOCAL_ID3 && param1[1] && !param1[2])
            {
               pro3();
               if(backfun != null)
               {
                  backfun(true);
               }
            }
            else if(mapid == MAP_LOCAL_ID4 && param1[2] && !param1[3])
            {
               pro4();
               if(backfun != null)
               {
                  backfun(true);
               }
            }
            else if(backfun != null)
            {
               backfun(false);
            }
         });
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，一股无比强大的能量波及了整个宇宙！恐怕魔界之门会受到影响！我们准备出发！"],["我准备好了！（完成7月4日—7月25日所有主线还可以获得成就哦！）","让我先准备一下！"],[function():void
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
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10542_0"),function(param1:MovieClip):void
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
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["很好，伊洛维奇，你现在的能量连我都感到害怕！哈哈！"],["哼，不要骗他了。"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["这种饮鸩止渴的行为，必将为他带来万劫不复的毁灭！"],["少废话妖王！我等这一刻已经等了很久了！"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["哪怕是我的宿命是灰飞烟灭！我也必将报仇！我要让你感觉到你所犯下的罪行是要付出代价！"],["是嘛……那我告诉你。"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["我曾经沉睡了万年，你不会明白那种时光是如何度过，现在你站在我面前放肆，我本该让你尝到挫败的滋味！"],["哈哈哈，挫败？我不会再败！"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["所有的苦难都已经过去，暗夜城终将迎来真正的主人，而你，妖王摩哥斯，你这个宇宙的罪人，审判你的时刻就是现在！"],["既然这样，那就毁灭吧！"]);
            mod7 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode1();
            });
         });
      }
      
      public static function pro2() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10544_0"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3019_1",true]);
            mod2 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["咳咳...太...太恐怖了.....你到底是谁？"],["......名字对于我来说太遥远了。"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.EVIL_LORD,["这是最后一次警告，陌生人，我不想在这里再看到你们。"],["是是是，我们现在就走！"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode2();
            });
         });
      }
      
      public static function pro3() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10543_0"),function(param1:MovieClip):void
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
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_YOUNG,["好开心啊！每天有这么明媚的阳光！真想一直这样睡懒觉！"],["你个大懒虫，就知道睡觉，一点战斗力都没有。"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_YOUNG,["你看人家盖亚多么厉害！单挑斗皇哎！那种无尽的怒气！！好崇拜啊！！"],["有什么了不起...打架要靠智慧，比如说布莱克。"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_YOUNG,["我就崇拜布莱克，黑夜的化身，而且还是战神联盟里面最聪明的！还击败了最难缠的影皇！"],["哼！盖亚厉害！等你能打败盖亚再这么说！"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_YOUNG,["而且现在盖亚都超进化了！你看看你，小不点！哈哈！"],["其实我最近感觉有一些不安。"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_YOUNG,["那种不安，就好像有什么事情要发生，你还记得那天我们看到的一道很耀眼的光芒吗？一定发生了什么。"],["你是说灾难吗？大懒虫。"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_YOUNG,["省省力气吧，有功夫想这些不如思考下如何让自己变强！"],["不，那种感觉很奇妙，好像有人在呼唤我一样。"]);
            mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_YOUNG,["冥冥之中似乎有一直力量在鼓励我去战斗，唉，好烦，我怎么可能去战斗嘛！"],["唔......的确。"]);
            mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_YOUNG,["如果战神联盟里面有睡神的话，我觉得你肯定可以加入！哈哈哈！"],["你！看我的盖亚之拳！"]);
            mod9 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
            mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_YOUNG,["快跑盖小亚！不要管我！他们！他们一定是从魔界之门来的！"],["我不走！我不能丢下伙伴！"]);
            mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_YOUNG,["纵使敌人再强大，让我丢下伙伴！我做不到！我做不到！"],["不！不要！！盖小亚！！！！！！！！！"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode3();
            });
         });
      }
      
      public static function pro4() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10543_1"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var mod6:TaskMod;
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3019_2",true]);
            mod2 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_YOUNG,["谢谢你！不过，为什么我心里很痛，那种声音越来越大。"],["从今以后，我是你们的伙伴。"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_MECHA,["我要保护你们，魔界之门已经出现裂痕，魔界的人夺走了龙神祭坛的圣物，一场灾难已经来临！"],["你....你到底是从哪里来的？"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_MECHA,["我来自未来。"],["我也想变得和你一样强！"]);
            mod6 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3019_3",true]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6],function():void
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
            pro4();
         });
      }
      
      public static function completeNode4() : void
      {
         KTool.showMapAllPlayerAndMonster();
         openTaskMainPanelTotal();
      }
      
      private static function openTaskMainPanelTotal() : void
      {
         var backFun:Function = null;
         backFun = function():void
         {
            var obj:Object;
            TasksManager.complete(TASK_ID,TASK_STAGE_4,function(param1:Boolean):void
            {
               TaskRoadOfDevildom.isAllCompletedOfJuly();
            });
            obj = {};
            obj["funhandler2"] = function():void
            {
               MapManager.changeLocalMap(77);
            };
            ModuleManager.getModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"").content.init(obj);
         };
         ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",backFun);
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
