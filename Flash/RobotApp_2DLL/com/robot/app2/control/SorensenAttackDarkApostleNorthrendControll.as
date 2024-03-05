package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class SorensenAttackDarkApostleNorthrendControll
   {
      
      public static const cTime:CronTimeVo = new CronTimeVo("*","19","*","*","*","2014");
      
      private static const Total_BLOOD:uint = 100000000;
      
      private static var _isPlayPreTask:Boolean;
      
      private static var _hasPlayBossMv:Boolean = false;
       
      
      public function SorensenAttackDarkApostleNorthrendControll()
      {
         super();
      }
      
      public static function initFormap819() : void
      {
         bossMv.visible = false;
         bloodMv.visible = false;
         if(!hasFinishPreTask)
         {
            return;
         }
         SystemTimerManager.addTickFun(refreshBlood);
         MapListenerManager.add(bossMv,onBossClick);
         bossMv.mouseChildren = true;
         if(MapManager.prevMapID != 819)
         {
            _hasPlayBossMv = false;
         }
         refreshBlood();
      }
      
      private static function onBossClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(e.target.name == "replicaBoss")
         {
            KTool.getMultiValue([2069],function(param1:Array):void
            {
               if(param1[0] == 0)
               {
                  FightManager.fightNoMapBoss("诺森德",323);
               }
               else
               {
                  FightManager.fightNoMapBoss("诺森德",param1[0]);
               }
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DarkApostleNorthrendPanel"));
         }
      }
      
      private static function refreshBlood(param1:* = null) : void
      {
         var sysDate:Date;
         var date:Date;
         var proportion:Number;
         var blood:int = 0;
         var tid:int = 0;
         var e:* = param1;
         if(!cTime.isTimeActive())
         {
            bloodMv.visible = false;
            bossMv.visible = true;
            bossMv.gotoAndStop(1);
            if(!_isPlayPreTask)
            {
               bossMv.visible = true;
            }
            return;
         }
         bloodMv.visible = true;
         bossMv.visible = true;
         if(false == _hasPlayBossMv)
         {
            if(_isPlayPreTask)
            {
               return;
            }
            _hasPlayBossMv = true;
            SystemTimerManager.removeTickFun(refreshBlood);
            tid = int(setTimeout(function():void
            {
               MapObjectControl.hideOrShowAllObjects(false);
               clearTimeout(tid);
            },200));
            MapObjectControl.hideOrShowAllObjects(false);
            AnimateManager.playMcAnimate(bossMv,0,"",function():void
            {
               MapObjectControl.hideOrShowAllObjects(true);
               SystemTimerManager.addTickFun(refreshBlood);
            });
         }
         else
         {
            bossMv.gotoAndStop(bossMv.totalFrames);
         }
         sysDate = SystemTimerManager.sysBJDate;
         date = new Date(2014,sysDate.month,sysDate.date,19,0,0,0);
         proportion = 100 - (sysDate.time - date.time) / (60 * 60 * 1000) * 100;
         if(bloodMv)
         {
            (bloodMv["bar"] as MovieClip).gotoAndStop(Math.floor(proportion));
            (bloodMv["leftBlood"] as TextField).text = int(Total_BLOOD * proportion / 100) - 125 + "";
         }
      }
      
      private static function get bloodMv() : MovieClip
      {
         return MapManager.currentMap.controlLevel["bloodMv"];
      }
      
      private static function get bossMv() : MovieClip
      {
         return MapManager.currentMap.controlLevel["bossMv"];
      }
      
      public static function playPreTask() : void
      {
         var mcloader:MCLoader = null;
         SocketConnection.send(1022,86067073);
         _isPlayPreTask = true;
         mcloader = new MCLoader(ClientConfig.getMapAnimate("sorensenAttack"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var d1:Array;
            var d2:Array;
            var d3:Array;
            var taskQuePro:TaskQuneProcessor;
            var mapMv:MovieClip = null;
            var e:* = param1;
            mapMv = mcloader.loader.content["mv"];
            mapMv.parent.removeChild(mapMv);
            d1 = [[NPC.JUSTIN,["船长，那些诺森德都已经被我收拾掉了！"],["贾斯汀，你还是那么勇猛。"]],[NPC.JUSTIN,["但是我发现那些诺森德都是复制品，在我击败他们的时候他们没有一点知觉和反应。"],["复制品？那不是代表着下一轮的袭击很快就要来了！"]],[NPC.WEIBING_1,["船长不好了！赛尔号前方又出现了大量的诺森德！"],["可恶，怎么会这样。"]],[NPC.SHIPER,["必须要找到这些诺森德的复制品是从哪里来的，不然他们会源源不断的涌向赛尔号的！"],["船长，发生什么事了？"]]];
            d2 = [[NPC.SHIPER,["你们来的正好，赛尔号的行进的方向出现了许多“诺森德”的复制品，我们必须要调查一下他们的来源，并尽快制止。"],["是，船长，交给我们吧！"]]];
            d3 = [[NPC.SAIXIAOXI,["果然是你这个家伙在捣鬼！"],["住手！"]]];
            taskQuePro = new TaskQuneProcessor();
            taskQuePro.addChangeMap(4,function():void
            {
               var tid:int = 0;
               MapManager.currentMap.btnLevel.addChild(mapMv);
               tid = int(setTimeout(function():void
               {
                  clearTimeout(tid);
                  MapObjectControl.hideOrShowAllObjects(false);
               },200));
               NpcController.hideNpc(1);
               KTool.hideMapAllPlayerAndMonster();
            });
            taskQuePro.addMapMv(mapMv,1,"mv");
            taskQuePro.addFullMv(ClientConfig.getFullMovie("task_20140103_3_1"));
            taskQuePro.addMapMv(mapMv,2,"mv");
            taskQuePro.addMapMv(mapMv,3,"mv");
            taskQuePro.addFullMv(ClientConfig.getFullMovie("task_20140103_3_2"));
            taskQuePro.addMapMv(mapMv,4,"mv");
            taskQuePro.addDialog(d1);
            taskQuePro.addMapMv(mapMv,5,"mv");
            taskQuePro.addDialog(d2);
            taskQuePro.addMapMv(mapMv,6,"mv");
            taskQuePro.addFullMv(ClientConfig.getFullMovie("task_20140103_3_3"),function():void
            {
               mapMv.parent.removeChild(mapMv);
            });
            taskQuePro.addChangeMap(819,function():void
            {
               MapObjectControl.hideOrShowAllObjects(false);
               KTool.hideMapAllPlayerAndMonster();
               SystemTimerManager.removeTickFun(refreshBlood);
               bossMv.visible = bloodMv.visible = false;
            });
            taskQuePro.addMapMv(mapMv,7,"mv");
            taskQuePro.addDialog(d3);
            taskQuePro.addMapMv(mapMv,8,"mv");
            taskQuePro.procesEndFun = function():void
            {
               NpcController.showNpc(1);
               BufferRecordManager.setMyState(980,true,function():void
               {
                  initFormap819();
               });
               KTool.showMapAllPlayerAndMonster();
               _isPlayPreTask = false;
               mcloader.clear();
               ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
               MapObjectControl.hideOrShowAllObjects(true);
               refreshBlood();
               SystemTimerManager.addTickFun(refreshBlood);
               DisplayUtil.removeForParent(mapMv);
               SocketConnection.send(1022,86067074);
            };
            taskQuePro.start();
         });
         mcloader.doLoad();
      }
      
      public static function destory() : void
      {
         SystemTimerManager.removeTickFun(refreshBlood);
      }
      
      public static function get hasFinishPreTask() : Boolean
      {
         return BufferRecordManager.getMyState(980);
      }
   }
}
