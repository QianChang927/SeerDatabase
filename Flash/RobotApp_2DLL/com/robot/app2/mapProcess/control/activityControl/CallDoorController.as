package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public class CallDoorController
   {
      
      public static var currentRegId:uint;
      
      private static var icon:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      public static var currentHideIcon:int;
       
      
      public function CallDoorController()
      {
         super();
      }
      
      public static function initMap958(param1:BaseMapProcess) : void
      {
         _map = param1;
         taskMc.visible = false;
      }
      
      public static function luojieNpcClick() : void
      {
         NpcDialog.show(NPC.SEER,[MainManager.actorInfo.nick + "立即前往神域之巅，召唤被封印的精灵！还有免费机会获得绝版钻石精灵！"],["可恶，我现在就去阻止他们！","稍后再去！"],[function():void
         {
         }]);
      }
      
      public static function clickNpc() : void
      {
         if(!BitBuffSetClass.getState(22426))
         {
            SocketConnection.send(1022,86071578);
            MapObjectControl.hideOrShowAllObjects(false);
            taskMc.visible = true;
            KTool.hideMapAllPlayerAndMonster();
            TaskDiaLogManager.single.playStory(getTaskArr(1),function():void
            {
               MapObjectControl.hideOrShowAllObjects(true);
               KTool.showMapAllPlayerAndMonster();
               taskMc.visible = false;
               BitBuffSetClass.setState(22426,1);
               ModuleManager.showModule(ClientConfig.getAppModule("CallDoorPanel"));
               SocketConnection.send(1022,86071579);
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("CallDoorPanel"));
         }
      }
      
      public static function init(param1:MovieClip) : void
      {
         icon = param1;
         if(!BitBuffSetClass.getState(22427))
         {
            TaskIconManager.addIcon(icon,TaskIconManager.LEFT_SIDE);
         }
         else if(icon.parent != null)
         {
            TaskIconManager.delIcon(icon);
         }
         currentHideIcon = int(BitBuffSetClass.getState(22427));
      }
      
      public static function onClickIcon(param1:MovieClip) : void
      {
         if(!BitBuffSetClass.getState(22426))
         {
            MapManager.changeMap(958);
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("CallDoorPanel"));
         }
      }
      
      public static function hideIcon(param1:int) : void
      {
         if(currentHideIcon == param1)
         {
            return;
         }
         currentHideIcon = param1;
         BitBuffSetClass.setState(22427,param1);
         if(param1)
         {
            if(icon.parent != null)
            {
               TaskIconManager.delIcon(icon);
            }
         }
         else
         {
            TaskIconManager.addIcon(icon,TaskIconManager.LEFT_SIDE);
         }
      }
      
      private static function getTaskArr(param1:int = 1) : Array
      {
         var _loc3_:TaskMod = null;
         var _loc4_:TaskMod = null;
         var _loc5_:TaskMod = null;
         var _loc6_:TaskMod = null;
         var _loc7_:TaskMod = null;
         var _loc8_:TaskMod = null;
         var _loc2_:Array = [];
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALLISON,["真是哪里都有你们这些铁皮赛尔！让我来教训你！"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["可恶！我不会让你们得逞的！"],["（点击神域之门）"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG,[MainManager.actorInfo.formatNick + "又在说大话！想救他们，得先过我们这关！"]);
               _loc2_.push(_loc3_,_loc4_,_loc7_,_loc8_);
         }
         return _loc2_;
      }
      
      public static function playMapAni(param1:int = 0, param2:String = "v0404", param3:Boolean = false) : void
      {
         var frame:int = param1;
         var version:String = param2;
         var isFight:Boolean = param3;
         if(MapManager.currentMap.id != 958)
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               playMapAni(frame,version,isFight);
            });
            MapManager.changeMap(958);
            return;
         }
         taskMc.visible = true;
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapAllPlayerAndMonster();
         if(isFight)
         {
            taskMc.gotoAndStop(5);
            taskMc.addEventListener(Event.ENTER_FRAME,function enterFrame(param1:Event):void
            {
               var e:Event = param1;
               if(taskMc.mc5 != null)
               {
                  taskMc.removeEventListener(Event.ENTER_FRAME,enterFrame);
                  if(version == "v0404")
                  {
                     frame += 8;
                  }
                  AnimateManager.playMcAnimate(taskMc.mc5,frame,"mc" + frame,function():void
                  {
                     taskMc.visible = false;
                     MapObjectControl.hideOrShowAllObjects(true);
                     KTool.showMapAllPlayerAndMonster();
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightPetHandler);
                     FightManager.fightNoMapBoss("",currentRegId);
                  });
               }
            });
         }
         else
         {
            taskMc.gotoAndStop(4);
            taskMc.addEventListener(Event.ENTER_FRAME,function enterFrame(param1:Event):void
            {
               var e:Event = param1;
               if(taskMc.mc4 != null)
               {
                  taskMc.removeEventListener(Event.ENTER_FRAME,enterFrame);
                  if(version == "v0404")
                  {
                     frame += 8;
                  }
                  AnimateManager.playMcAnimate(taskMc.mc4,frame,"mc" + frame,function():void
                  {
                     taskMc.visible = false;
                     MapObjectControl.hideOrShowAllObjects(true);
                     KTool.showMapAllPlayerAndMonster();
                     Alarm.show("很遗憾，你召唤的精灵逃跑了！重新再来吧！",function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("CallDoorPanel"));
                     });
                  });
               }
            });
         }
      }
      
      private static function onFightPetHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightPetHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID != MainManager.actorID)
         {
            Alarm.show("很遗憾，你召唤的精灵逃跑了！重新再来吧！");
         }
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.animatorLevel["callDoorAni"];
      }
   }
}
