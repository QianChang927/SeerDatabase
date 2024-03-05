package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class UnderworldBlakesSecretController
   {
      
      public static const TASK_ID:uint = 3006;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      private static var _map:BaseMapProcess;
       
      
      public function UnderworldBlakesSecretController()
      {
         super();
      }
      
      public static function initForMap3006(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            startPro();
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(param1[0] == 0)
               {
                  startPro();
               }
               else if(param1[0] == 1 && param1[1] == 0)
               {
                  startStep1();
               }
               else if(param1[1] == 1 && param1[2] == 0)
               {
                  startStep2();
               }
            });
         }
         else
         {
            taskComplete();
         }
      }
      
      public static function startPro() : void
      {
         TasksManager.accept(TASK_ID,function(param1:Boolean):void
         {
            var mod1:TaskMod;
            var sucess:Boolean = param1;
            KTool.hideMapAllPlayerAndMonster();
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            TaskDiaLogManager.single.playStory([mod1],function():void
            {
               taskMc.buttonMode = true;
               MapListenerManager.add(taskMc,function(param1:Event):void
               {
                  var e:Event = param1;
                  var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["开启吧！强大的魔界之门，我将率领魔界军团踏平这个曾经背叛过我的世界！"],["既然这样…那我只有亲手毁灭它！"]);
                  var mod3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
                  var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["哈哈哈…愤怒吧！魔界军团！用你们的最强大的能量将整个宇宙全部摧毁吧！"],["住手，阿萨斯！"]);
                  var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
                  var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["哼哼…一旦魔界之门开启，任凭什么力量都无法阻止魔界军团倾巢而出！"],["魔界毕竟主宰整个宇宙！"]);
                  var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSAIDONG,["阿萨斯，难道你自己不知道面对的对手是神吗？"],["哼哼…就算是神，我也不会放在眼里！"]);
                  var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSAIDONG,["居然如此无礼，那我只能剥夺你的生命了！让你永远长眠在魔界之门中！"],["波塞冬，我负责摧毁魔界之门！！"]);
                  var mod9:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["debugFullMovie",true]);
                  var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["漂亮，终于将这些家伙打回老家了！波塞冬你的实力果然强大！"],["与神对抗，太不明智了！"]);
                  var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["恩，那是肯定的！对了，我们这次来还有另一个目的就是帮助战神联盟找回布莱克！！"],["他会在哪里呢！"]);
                  var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["伟大的波塞冬和奥斯卡，布莱克正在影之殿中和魔界三巨头影皇对抗呢！你们快去看看吧！"],["魔界三巨头？看来我们有目标了！"]);
                  TaskDiaLogManager.single.playStory([mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12],function():void
                  {
                     TasksManager.complete(TASK_ID,TASK_STAGE_1,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           startStep1();
                        }
                     });
                  });
               });
            });
         });
      }
      
      public static function startStep1() : void
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
         KTool.hideMapAllPlayerAndMonster();
         mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["布莱克，你怎么了！是谁把你弄成这样，一定是影皇这个家伙，不可饶恕啊！"],["哈哈哈…卑微的对手！"]);
         mod3 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
         mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_NEW,["影皇我一定要打倒你，快告诉我，我父亲在哪里？！"],["哼哼…等你战胜我再说吧！！"]);
         mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["够了…影皇，你给我住手！在我面前没人可以伤害布莱克，要么和我一战，要么乖乖的回到魔界去！"],["笑话，你是在和我谈条件吗？"]);
         mod6 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
         mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINGHUANG,["哼哼…你的实力不错，看来我应该先解决了你！像布莱克这样没有超能力的家伙，不配做我影皇的对手！"],["奥斯卡，这是我自己的事情，你别插手！"]);
         mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSAIDONG,["奥斯卡，如果再不把布莱克带走的话，他的生命可能会有危险！"],["恩恩，说的对！"]);
         mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["波塞冬，布莱克就交给你了，影皇由我来对付，你快带他走吧！时间不多了！"],["好吧！我这就带他走！"]);
         mod10 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,7,"mc7"]);
         mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["这下好了，没有谁能够来打扰我们之间的战斗，影皇你准备好了吗？！"],["哼哼…有点意思！！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_2,function(param1:Boolean):void
            {
               if(param1)
               {
                  startStep2();
               }
            });
         });
      }
      
      public static function startStep2() : void
      {
         var mod1:TaskMod;
         var mod2:TaskMod;
         var mod3:TaskMod;
         var mod4:TaskMod;
         var mod5:TaskMod;
         var mod6:TaskMod;
         var mod7:TaskMod;
         var mod8:TaskMod;
         KTool.hideMapAllPlayerAndMonster();
         mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,8,"mc8"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINGHUANG,["没有谁能够从影之殿活着出来，包括你和布莱克的父亲在内！"],["什么！！布莱克的父亲！！"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["看来魔界三巨头中就你影皇是最强的存在，既然迈尔斯的对手是战皇，那么我奥斯卡的对手就是你影皇！"],["迈尔斯在努力，我也不能拖后腿！！"]);
         mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINGHUANG,["进来吧！让你见识一下影之殿的恐怖和绝望！小心哦！千万别迷路，我会在神殿尽头等着你！"],["放心吧！我一定会击败你的！"]);
         mod5 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,9,"mc9"]);
         mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我也不能袖手旁观，布莱克我一定会为你报仇的！"],["影皇…我来了！"]);
         mod7 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,10,"mc10"]);
         mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["不好…那撕心裂肺的呼喊声是从影之殿传出来的，难道奥斯卡遇到危险了！！"],["奥斯卡，等我！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_3,function():void
            {
               showAndHideNPC();
               ModuleManager.showModule(ClientConfig.getAppModule("DevilBigThreePanel"));
            });
         });
      }
      
      private static function showAndHideNPC() : void
      {
         DisplayUtil.removeForParent(_map.conLevel["aniMc"]);
         _map.conLevel["doudian"].buttonMode = true;
         KTool.showMapAllPlayerAndMonster();
      }
      
      private static function taskComplete() : void
      {
         showAndHideNPC();
         _map.conLevel["doudian"].addEventListener(MouseEvent.CLICK,function(param1:Event):void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DevilBigThreePanel"));
         });
      }
      
      public static function get taskMc() : MovieClip
      {
         return _map.conLevel["aniMc"];
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
