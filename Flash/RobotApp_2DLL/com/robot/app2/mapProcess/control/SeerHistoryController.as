package com.robot.app2.mapProcess.control
{
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   
   public class SeerHistoryController
   {
      
      private static var _intervalId:int = 0;
       
      
      public function SeerHistoryController()
      {
         super();
      }
      
      public static function initMap() : void
      {
         if(BitBuffSetClass.getState(22707) == 0)
         {
            BitBuffSetClass.setState(22707,1);
            open();
         }
         else
         {
            ModuleManager.showAppModule("SeerHistoryMainPanel");
         }
      }
      
      public static function open() : void
      {
         ModuleManager.showAppModule("SeerHistoryCartoonPanel");
      }
      
      public static function play() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20150409_seerHistory"),function():void
         {
            MapObjectControl.hideOrShowAllObjects(false);
            NpcDialog.show(NPC.HUGH,["上古时期是一个风气云涌的时期"],[""],[function():void
            {
               NpcDialog.show(NPC.HUGH,["无数极为强大的精灵登场历史舞台，无数曾经叱咤风云的精灵黯然落幕。"],[""],[function():void
               {
                  NpcDialog.show(NPC.HUGH,["我从龙脉遗迹的探险中偶然得到此书。根据我从其他遗迹中发现的线索，这本书记载着许多上古的秘辛。"],[""],[function():void
                  {
                     NpcDialog.show(NPC.HUGH,["据说，书里还记载着战神联盟从上古时代就留下来的传承！"],[""],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["战神联盟的上古传承？"],[""],[function():void
                        {
                           NpcDialog.show(NPC.HUGH,["不错！看来现在的战神联盟还有很多的潜力没有发掘。"],[""],[function():void
                           {
                              NpcDialog.show(NPC.HUGH,["这本书被施加了极为强大的封印，只能模模糊糊看到前面几章的内容。"],[""],[function():void
                              {
                                 NpcDialog.show(NPC.HUGH,["现在，我需要你的帮助！收集散落在世界各处的时光碎晶，帮助我打开封印，再现编年史中的史诗篇章吧！"],["我愿意帮助你！"],[function():void
                                 {
                                    MapObjectControl.hideOrShowAllObjects(true);
                                    ModuleManager.showAppModule("SeerHistoryMainPanel");
                                 }]);
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         });
      }
      
      public static function getProgress1() : int
      {
         var _loc1_:Number = 0;
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         var _loc3_:Date = new Date(2015,5,5,6);
         if(_loc2_.time > _loc3_.time)
         {
            _loc1_ = _loc2_.time - _loc3_.time;
         }
         var _loc4_:Number;
         return (_loc4_ = (_loc4_ = _loc1_ / (1000 * 60 * 60 * 14)) >= 1 ? 1 : _loc4_) * 100;
      }
      
      public static function getProgress2() : int
      {
         var _loc1_:Number = 0;
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         var _loc3_:Date = new Date(2015,5,5,20);
         var _loc4_:Date = new Date(2015,5,6,0);
         var _loc5_:Date = new Date(2015,5,7,0);
         if(_loc2_.time > _loc3_.time && _loc2_.time < _loc4_.time)
         {
            _loc1_ = _loc2_.time - _loc3_.time;
         }
         else if(_loc2_.time > _loc4_.time && _loc2_.time < _loc5_.time)
         {
            _loc1_ = _loc2_.time - _loc3_.time - getRestDuration();
         }
         else if(_loc2_.hours >= 6)
         {
            _loc1_ = _loc2_.time - _loc3_.time - getRestDuration() * 2;
         }
         else
         {
            _loc1_ = _loc2_.time - _loc3_.time - getRestDuration() - (_loc2_.time - _loc5_.time);
         }
         var _loc6_:Number;
         return (_loc6_ = (_loc6_ = _loc1_ / (23 * 60 * 60 * 1000)) >= 1 ? 1 : _loc6_) * 100;
      }
      
      private static function getRestDuration() : Number
      {
         var _loc1_:Date = new Date(2015,3,1,0);
         var _loc2_:Date = new Date(2015,3,1,6);
         return _loc2_.time - _loc1_.time;
      }
      
      public static function brocast() : void
      {
         if(!NewSeerTaskController.isNewSeer)
         {
            _intervalId = setInterval(showBrocast,60000 * 60 * 3);
            showBrocast();
         }
      }
      
      private static function showBrocast() : void
      {
         var msg:String = null;
         var timer:Timer = null;
         var p1:int = getProgress1();
         var p2:int = getProgress2();
         msg = "";
         if(p1 >= 100 && p2 >= 100)
         {
            clearInterval(_intervalId);
         }
         else
         {
            if(p1 < 100 && p1 >= 20)
            {
               msg = "在大家的努力下\n新一页编年史的封印\n已被破开" + p1 + "%了.";
            }
            else if(p1 == 100 && p2 < 15)
            {
               msg = "在广大赛尔们的努力下编年史又翻开了新的一页";
            }
            else if(p2 < 100 && p2 >= 20)
            {
               msg = "在大家的努力下\n新一页编年史的封印\n已被破开" + p2 + "%了.";
            }
            else
            {
               msg = "在广大赛尔们的努力下编年史又翻开了新的一页";
            }
            if(msg != "")
            {
               timer = new Timer(1000 * 20);
               timer.start();
               timer.addEventListener(TimerEvent.TIMER,function():void
               {
                  timer.removeEventListener(TimerEvent.TIMER,arguments.callee);
                  ModuleManager.showAppModule("SeerHistoryBrocastPanel",msg);
               });
            }
         }
      }
      
      public static function clickIcon(param1:MovieClip = null) : void
      {
         if(MapManager.currentMap.id == 1074)
         {
            ModuleManager.showAppModule("SeerHistoryMainPanel");
         }
         else
         {
            MapManager.changeMap(1074);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,intoMap);
         }
      }
      
      private static function intoMap(param1:*) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,intoMap);
         ModuleManager.showAppModule("SeerHistoryMainPanel");
      }
   }
}
