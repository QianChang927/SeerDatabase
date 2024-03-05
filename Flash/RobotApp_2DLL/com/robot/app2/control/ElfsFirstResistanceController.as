package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class ElfsFirstResistanceController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1277;
      
      public static const BUFFER_ID_2:uint = 1278;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
       
      
      public function ElfsFirstResistanceController()
      {
         super();
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 1131)
         {
            MapManager.changeMap(1131);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               _map = MapManager.currentMap;
               start();
            });
         }
         else
         {
            _map = MapManager.currentMap;
            start();
         }
      }
      
      public static function start() : void
      {
         if(taskMc != null)
         {
            if(!isTaskDone)
            {
               KTool.hideMapAllPlayerAndMonster();
               taskMc.gotoAndStop(1);
               taskMc.mc1.gotoAndStop(1);
               startPreTask(1);
            }
            else
            {
               openPanel();
               update();
            }
         }
      }
      
      public static function enterMap() : void
      {
         _map = MapManager.currentMap;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_elfsFirstResistance"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.controlLevel.addChild(taskMc);
            update();
         });
      }
      
      private static function update() : void
      {
         KTool.getMultiValue([2555],function(param1:Array):void
         {
            var _loc2_:int = int(param1[0]);
            if(param1[0] == 20)
            {
               startPreTask(2);
            }
            else
            {
               taskMc.gotoAndStop(1);
               taskMc.mc1.gotoAndStop(528);
               taskMc["btn"].addEventListener(MouseEvent.CLICK,onBossMc);
               taskMc["btn"].buttonMode = true;
            }
         });
         KTool.getBitSet([19351],function(param1:Array):void
         {
            if(param1[0] > 0)
            {
               if(!isFristCatchSuccess)
               {
                  startPreTask(3);
               }
            }
         });
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID);
      }
      
      private static function get isFristCatchSuccess() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_2);
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            if(index == 1)
            {
               BufferRecordManager.setMyState(BUFFER_ID,true,function():void
               {
                  KTool.showMapPlayerAndMonster();
                  update();
                  openPanel();
               });
            }
            else if(index == 3)
            {
               BufferRecordManager.setMyState(BUFFER_ID_2,true,function():void
               {
                  KTool.showMapPlayerAndMonster();
                  update();
                  openPanel();
               });
            }
            else if(index == 2)
            {
               CommonUI.removeYellowArrow(taskMc["btn"]);
               CommonUI.addYellowArrow(taskMc["btn"],100,0,45);
               taskMc["btn"].addEventListener(MouseEvent.CLICK,onBossMc);
               taskMc["btn"].buttonMode = true;
            }
         };
         storyPlayer.start();
      }
      
      private static function onBossMc(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(taskMc.currentFrame == 1)
         {
            openPanel();
         }
         else
         {
            Alert.show("你将有一次机会捕捉芒克王，它会在5回合后逃跑，随后会再次进入沉睡。你准备好了吗？",function():void
            {
               FightManager.fightNoMapBoss("芒克王",5428,false,true,function():void
               {
                  update();
               });
            });
         }
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ElfsFirstResistancePanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
         _taskMc = null;
      }
   }
}
