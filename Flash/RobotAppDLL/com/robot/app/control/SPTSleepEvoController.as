package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SPTSleepEvoController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _time:uint;
       
      
      public function SPTSleepEvoController()
      {
         super();
      }
      
      public static function playAnimation() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("SPTSleepEvo"),function(param1:MovieClip):void
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
            _map.conLevel.visible = false;
            _map.depthLevel.visible = false;
            MapManager.currentMap.topLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SILIPU,["站住！鬼鬼祟祟，意欲何为！"],["嘿嘿……"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BLACK_SHADOW,["龙族之印我就收下了。龙族无法阻挡我们的脚步！"],["我族至宝岂会是你想拿走就能拿走的！"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SILIPU,["帕罗狄亚曾经来过一次，无功而返。"],["哈哈哈，帕罗狄亚那个小家伙。"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BLACK_SHADOW,["你能挡得住他，却挡不住我！"]);
            mod6 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc"]);
            mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BLACK_SHADOW,["就凭你，也想跟我斗？"],["哼……可恶……"]);
            mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BLACK_SHADOW,["你的力量太弱了！龙殿守护者不过如此！"],["你得意的太早了。"]);
            mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SILIPU,["我族至宝岂能容你染指！我绝不会让你将它带走！"]);
            mod10 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["SPTSleepEvo_full",true]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10],function():void
            {
               KTool.showMapAllPlayerAndMonster();
               _map.conLevel.visible = true;
               _map.depthLevel.visible = true;
               MapManager.currentMap.topLevel.removeChild(taskMc);
               BitBuffSetClass.setState(22548,1);
               ModuleManager.showModule(ClientConfig.getAppModule("SleepEvoPanel"));
            });
         });
      }
      
      public static function showArrow() : void
      {
         CommonUI.addYellowArrow(_map.topLevel,600,350,-135);
      }
      
      public static function hideArrow() : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
      }
      
      public static function onOpenPanel() : void
      {
         if(MapManager.currentMap.id == 724)
         {
            if(!BitBuffSetClass.getState(22548))
            {
               playAnimation();
               return;
            }
            ModuleManager.showModule(ClientConfig.getAppModule("SleepEvoPanel"));
         }
         else
         {
            MapManager.changeMap(724);
         }
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.currentTarget.name)
         {
            case "itemMC":
               SocketConnection.sendWithCallback(45509,function(param1:SocketEvent):void
               {
                  _map.conLevel["itemMC"].visible = _map.conLevel["itemAdd"].visible = false;
               },3);
               break;
            case "btn_npc":
               ModuleManager.showModule(ClientConfig.getAppModule("SleepEvoBuyItemPanel"));
         }
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["itemMC"].addEventListener(MouseEvent.CLICK,onClick);
         _map.conLevel["btn_npc"].addEventListener(MouseEvent.CLICK,onClick);
         _map.depthLevel["npc_2446"].mouseEnabled = _map.depthLevel["npc_2446"].mouseChildren = false;
         var _loc2_:Number = Number(SystemTimerManager.sysBJDate.hours);
         var _loc3_:Boolean = _loc2_ >= 18 && _loc2_ < 20;
         _map.conLevel["btn_npc"].visible = _loc3_;
         _map.depthLevel["npc_2446"].visible = _loc3_;
         startTime();
      }
      
      private static function startTime() : void
      {
         SocketConnection.sendWithCallback(45509,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            KTool.getMultiValue([3509],function(param1:Array):void
            {
               var _loc2_:Number = SystemTimerManager.sysBJDate.time - param1[0] * 1000;
               if(_loc2_ > 0)
               {
                  _time = setTimeout(startTime,_loc2_);
               }
            });
            KTool.getBitSet([14435],function(param1:Array):void
            {
               if(Boolean(_map.conLevel["itemMC"]) && Boolean(_map.conLevel["itemAdd"]))
               {
                  _map.conLevel["itemMC"].visible = _map.conLevel["itemAdd"].visible = param1[0] == 1;
               }
            });
         },1);
      }
      
      public static function destroy() : void
      {
         _map.conLevel["itemMC"].removeEventListener(MouseEvent.CLICK,onClick);
         _map.conLevel["btn_npc"].removeEventListener(MouseEvent.CLICK,onClick);
         clearTimeout(_time);
         _map = null;
      }
   }
}
