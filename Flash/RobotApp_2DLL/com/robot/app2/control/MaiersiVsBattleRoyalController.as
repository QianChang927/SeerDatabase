package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MaiersiVsBattleRoyalController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      private static var _currIndex:int = 0;
      
      private static var _datas:Array;
      
      private static var maxRound:int = 1;
      
      private static var timer:Timer;
       
      
      public function MaiersiVsBattleRoyalController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         getMc(function(param1:MovieClip):void
         {
            taskMC = param1;
            _map.btnLevel.addChild(taskMC);
            if(!BitBuffSetClass.getState(22445))
            {
               playPreStory();
            }
            else
            {
               initBtn();
            }
         });
      }
      
      public static function initMap22() : void
      {
         var str:String = null;
         if(TasksManager.getTaskStatus(302) == TasksManager.COMPLETE)
         {
            str = "恭喜你你完成了SPT的试炼，你是一个强者！要继续下一步试炼吗？";
         }
         else
         {
            str = "如果你完成了SPT的试炼，那就证明你是一个强者！要继续下一步试炼吗？";
         }
         NpcDialog.show(NPC.MAIERSI,[str],["我一定会完成所有试炼！","稍后再来。"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("MaiersiGetPanel"));
         }]);
      }
      
      public static function clickEquip(param1:* = null) : void
      {
         if(MapManager.currentMap.id == 966)
         {
            showPanel();
         }
         else if(MapManager.currentMap.id == 994)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("MaiersiGetPanel"));
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("JihadKingMaiersiMsgPanel"));
         }
      }
      
      private static function initBtn() : void
      {
         taskMC.gotoAndStop(10);
         taskMC.addEventListener(MouseEvent.CLICK,onClickMcHandler);
         if(!timer)
         {
            timer = new Timer(1000 * 60);
            timer.addEventListener(TimerEvent.TIMER,onTimerHandler);
         }
      }
      
      protected static function onTimerHandler(param1:TimerEvent) : void
      {
         playCommAnim();
      }
      
      protected static function onClickMcHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var name:String = String(event.target.name);
         switch(name)
         {
            case "maiersi":
               NpcDialog.show(NPC.MAIERSI,["想不到我是圣灵系中第一个超进化的精灵，面对如此强大的战皇，我一定要发挥自己最强的战斗力！"],["我一定会帮助你的！","我这就去准备一下！"],[function():void
               {
                  showPanel();
               }]);
               break;
            case "warking":
               NpcDialog.show(NPC.WARKING,["哼哼…让你们尝尝魔界三巨头的厉害，谁都不能阻止阿萨斯王子的宏远计划！"],["战皇，我要击败你！","让我再想想！"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("JihadKingMaiersiMainPanel"));
               }]);
               break;
            case "mengta":
               NpcDialog.show(NPC.MENGTA,["0xff0000" + MainManager.actorInfo.nick + "0xffffff你可以一定要帮助我父亲，这次和战皇的对抗我们一定要赢！"],["战皇，我要击败你！"]);
         }
      }
      
      private static function playPreStory() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            _map.depthLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            BitBuffSetClass.setState(22445,1);
            taskMC.gotoAndStop(10);
            showPanel();
            initBtn();
         });
      }
      
      private static function showPanel(param1:* = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("MaiersiEvolvePanel"));
         ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,closeGoldBuyPanelHandler);
      }
      
      private static function closeGoldBuyPanelHandler(param1:*) : void
      {
         ModuleManager.removeEventListener("model","close",closeGoldBuyPanelHandler);
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         var _loc3_:String = "active_2014051913";
         var _loc4_:String = "cartoon/goldenwarrior";
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc1"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WARKING,["就在这里，让我和你们一决高下，看看究竟是你圣灵系厉害还是我们魔界的力量更强悍！！"],["战皇…我也等不及了！！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIERSI,["哼哼…那就让你看看我的真面目吧！儿子，好好看着，这才是你要学的最终奥义！"],["父亲，加油啊！！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[_loc3_,true]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哇！太帅了，迈尔斯是第一个圣灵系超进化的精灵，战皇你想战胜迈尔斯没这么容易的！"],["是吗？那你也太小看我了！！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc2"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WARKING,["果然有点实力，但是这才刚开始，我的能量不是你能承受的，消失在这里吧！"],["小心…迈尔斯！！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc3"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WARKING,["哼哼…现在知道我战皇的厉害了吧！魔界的力量没你想象的这么简单，我看你还是放弃抵抗，投靠我吧！"],["你别白日做梦！！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WARKING,["既然这样，那我只能让你消失在这个宇宙里了，告诉你一个秘密，你是我第一个击败的圣灵系精灵，我的目标是谱尼！"],["再见了！圣迈尔斯！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc4"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MENGTA,["父亲不会战败的，我要帮助他，战皇我要挑战你！"],["蒙塔，你这样太冒险了！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 5,"mc5"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["哟！传说中的战神联盟终于出现了，来的正好！斗皇，影皇你们都挑选一下自己的对手吧！"],["魔界三巨头vs战神联盟！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["斗皇？我还真没有见过比我有斗志的对手！斗皇敢和我较量吗？"],["果然是战神，勇气可嘉！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["哼哼…太好了！雷神，你的对手是我，等待我的再次出现吧！"],["我们走！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 6,"mc6"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["战神，这里就交给你了，其他人跟我走，我们一定要找到阿萨斯！阻止他的诡计！"],["放心吧！雷神！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 7,"mc7"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WARKING,["哈哈哈…圣迈尔斯，就算有了战神的帮助，你们也不一定能战胜我！我的铠甲不是一般的力量能够击碎的！"],["是吗？那就让我战神来试试！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGMAIERSI,["战神别动！！多谢你的好意，但是这次我不是为自己而战！为的是圣灵系的名誉，我一定会战胜战皇的！"],["可是你…！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["战神盖亚、你放心，我一定会想办法帮助圣迈尔斯的！"],["恩恩，那就靠你了！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 8,"mc8"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGMAIERSI,["战皇果然名不虚传，这股力量好强大，无论我怎么挣脱，也无法抵御这股强大的能量！"],["圣迈尔斯，我来帮助你！"]));
         return _loc1_;
      }
      
      private static function playCommAnim() : void
      {
         if(taskMC)
         {
            taskMC.gotoAndStop(9);
            KTool.getFrameMc(taskMC,9,"mc9",function(param1:MovieClip):void
            {
               var onframeHandler:Function = null;
               var mc:MovieClip = param1;
               onframeHandler = function():void
               {
                  mc.addFrameScript(mc.totalFrames - 1,null);
                  taskMC.gotoAndStop(10);
               };
               mc.addFrameScript(mc.totalFrames - 1,onframeHandler);
            });
         }
      }
      
      private static function getMc(param1:Function) : void
      {
         var fun:Function = param1;
         if(taskMC)
         {
            fun(taskMC);
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_966_3"),function(param1:MovieClip):void
            {
               taskMC = param1;
               fun(taskMC);
            });
         }
      }
      
      private static function set taskMC(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMC() : MovieClip
      {
         return _taskMc;
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            DisplayUtil.removeForParent(taskMC);
            CommonUI.removeYellowExcal(_map.topLevel);
            _map = null;
            taskMC = null;
         }
         if(timer)
         {
            timer.removeEventListener(TimerEvent.TIMER,onTimerHandler);
         }
      }
   }
}
