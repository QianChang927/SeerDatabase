package com.robot.app2.mapProcess.control
{
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class StoneTowerExploreController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const TOWER_TIME_TEXT:String = "2月5日-11日 18:00-20:00";
      
      private static const TOWER_ACT_AC:ActivityControl = new ActivityControl([new CronTimeVo("*","*","5-11","2","*","2016")]);
      
      private static const TOWER_ACT_HOURS:Array = [18,19];
      
      private static const TIME_TEXT:String = "4月1日-7日 12:00-14:00";
      
      private static const ACT_AC:ActivityControl = new ActivityControl([new CronTimeVo("*","12-13","1-7","4","*","2016")]);
      
      private static const ACT_HOURS:Array = [12,13];
      
      private static var laniNpc:MovieClip;
      
      private static var laqiNpc:MovieClip;
      
      private static var door:MovieClip;
       
      
      public function StoneTowerExploreController()
      {
         super();
      }
      
      public static function initForMap702(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         map.conLevel["ad"].buttonMode = true;
         MapListenerManager.add(map.conLevel["ad"],function(param1:MouseEvent):void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("StoneTowerAdPanel"),"正在加载面板....",TOWER_TIME_TEXT);
         },"步步惊心—石塔探险");
         MapListenerManager.add(map.conLevel["stoneTowerNpc"],function(param1:MouseEvent):void
         {
            goto_703();
         });
      }
      
      private static function goto_703() : void
      {
         var date:Date = null;
         if(TOWER_ACT_AC.isInActivityTime)
         {
            date = SystemTimerManager.sysBJDate;
            if(TOWER_ACT_HOURS.indexOf(date.hours) != -1)
            {
               NpcDialog.show(NPC.JI_LA_KE,["小子你果然够胆量，进去吧！看看你还能不能活着回来！石塔之门将为你打开！"],["我倒想看看里面有什么古怪！"],[function():void
               {
                  MapManager.changeMap(703);
               }]);
            }
            else
            {
               NpcDialog.show(NPC.JI_LA_KE,["那个小家伙居然逃进了石塔之中，这可怎么办！但是这里可是禁地，谁都不敢进去！里面太可怕了！"],["怎么回事啊！那拉琪不是很危险？"],[function():void
               {
                  NpcDialog.show(NPC.JI_LA_KE,["你有所不知，在这石塔中有这么一个传说，据说里面生活着一个怪物，如果你真想进去，我也不会阻止你的，" + TOWER_TIME_TEXT + "来这里闯闯吧！"],["哼！没有什么是我闯不过去的！"]);
               }]);
            }
         }
         else
         {
            NpcDialog.show(NPC.JI_LA_KE,["那个小家伙居然逃进了石塔之中，这可怎么办！但是这里可是禁地，谁都不敢进去！里面太可怕了！"],["怎么回事啊！那拉琪不是很危险？"],[function():void
            {
               NpcDialog.show(NPC.JI_LA_KE,["你有所不知，在这石塔中有这么一个传说，据说里面生活着一个怪物，如果你真想进去，我也不会阻止你的，" + TOWER_TIME_TEXT + "来这里闯闯吧！"],["哼！没有什么是我闯不过去的！"]);
            }]);
         }
      }
      
      public static function initForMap704(param1:BaseMapProcess) : void
      {
         _map = param1;
         fireActivityInit();
      }
      
      public static function destroyForMap704() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         laqiNpc.removeEventListener(MouseEvent.CLICK,onLaqiClick);
         laniNpc.removeEventListener(MouseEvent.CLICK,onLaniClick);
         laqiNpc = null;
         laniNpc = null;
         door = null;
         _map = null;
      }
      
      private static function fireActivityInit() : void
      {
         laniNpc = _map.conLevel["NPClani"] as MovieClip;
         laqiNpc = _map.conLevel["NPClaqi"] as MovieClip;
         door = _map.conLevel["door_1"] as MovieClip;
         door.mouseEnabled = false;
         door.mouseChildren = false;
         if(TasksManager.getTaskStatus(899) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(899,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]))
               {
                  isCanStartActivity(false);
               }
               else
               {
                  isCanStartActivity(true);
               }
            });
         }
         else
         {
            isCanStartActivity(true);
         }
      }
      
      private static function isCanStartActivity(param1:Boolean) : void
      {
         if(param1)
         {
            laniNpc.visible = true;
            laqiNpc.visible = true;
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
            SocketConnection.send(CommandID.SYSTEM_TIME);
         }
         else
         {
            laniNpc.visible = false;
            laqiNpc.visible = false;
         }
      }
      
      private static function onActivityTime(param1:SocketEvent = null) : void
      {
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         if(!ACT_AC.isPast)
         {
            if(!ACT_AC.isInActivityTime)
            {
               ToolTipManager.add(laniNpc,"拉妮");
               laniNpc.buttonMode = true;
               CommonUI.addYellowExcal(laniNpc);
               laniNpc.addEventListener(MouseEvent.CLICK,onLaniClick);
               laqiNpc.buttonMode = false;
               CommonUI.removeYellowExcal(laqiNpc);
               laqiNpc.removeEventListener(MouseEvent.CLICK,onLaqiClick);
            }
            else if(ACT_AC.isInActivityTime)
            {
               door.mouseEnabled = true;
               door.mouseChildren = true;
               laniNpc.buttonMode = false;
               CommonUI.removeYellowExcal(laniNpc);
               laniNpc.removeEventListener(MouseEvent.CLICK,onLaniClick);
               ToolTipManager.add(laqiNpc,"拉琪");
               laqiNpc.buttonMode = true;
               CommonUI.addYellowExcal(laqiNpc);
               laqiNpc.addEventListener(MouseEvent.CLICK,onLaqiClick);
            }
         }
         else
         {
            laniNpc.visible = false;
            laqiNpc.visible = false;
         }
      }
      
      private static function onLaniClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var date:Date = SystemTimerManager.sysDate;
         if(ACT_AC.isIncoming)
         {
            NpcDialog.show(NPC.LANI,["不知道米咔和阿铁达现在是否安全！拉琪，我们是不是应该做点什么，毕竟这次是因为我们米咔和阿铁打才会被抓的！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.LA_QI,["可是里面可是熔岩地心，地心中的温度不是常人可以忍受的！不过为了赛小息他们，我还是决定进去看一下！"],["不知道能不能找到他们！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["等等，拉琪！你一个人进去太危险了！你还是好好照顾拉妮吧！拯救伙伴的事情就交给我吧！我一定会把阿铁达和米咔从地心带回来的！"],["这个么……"],[function():void
                  {
                     NpcDialog.show(NPC.LA_QI,["好吧！不过你必须在" + TIME_TEXT + "进入，因为这个时候地心活动是最弱的！所以你的时间不多哦！还有，小心里面的地心守护者！"],["恩恩，你放心吧！我一定会成功的！"]);
                  }]);
               }]);
            });
         }
         else if(ACT_AC.isPast)
         {
            NpcDialog.show(NPC.LANI,["熔岩地心正在频繁的活动，你只能在" + TIME_TEXT + "进入，因为这个时候地心活动是最弱的！所以你的时间不多哦！还有，小心里面的地心守护者！"],["恩恩，我知道了！"]);
         }
      }
      
      private static function onLaqiClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.LA_QI,["赛尔，现在正是进入熔岩地心的最佳时刻，快进去看看你的朋友吧！"],["恩，我这就进入，你们也注意安全啊！"],[function():void
         {
            CommonUI.removeYellowArrow(door);
            CommonUI.addYellowArrow(door,15,-10);
         }]);
      }
   }
}
