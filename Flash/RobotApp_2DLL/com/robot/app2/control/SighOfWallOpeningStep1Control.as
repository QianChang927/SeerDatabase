package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SighOfWallOpeningStep1Control
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static var _bossArr:Array = [{
         "bossName":"维泽博",
         "bossId":6740
      },{
         "bossName":"格尔顿",
         "bossId":6741
      },{
         "bossName":"地狱兽",
         "bossId":6742
      },{
         "bossName":"凯纳利斯",
         "bossId":6743
      }];
       
      
      public function SighOfWallOpeningStep1Control()
      {
         super();
      }
      
      public static function setUp() : void
      {
         if(MapManager.currentMap.id != 11182)
         {
            MapManager.changeMapWithCallback(11182,function():void
            {
               loadMc();
            });
         }
         else
         {
            loadMc();
         }
      }
      
      private static function loadMc() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_SighOfWallOpening"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map = MapManager.currentMap;
            _map.controlLevel.addChild(taskMc);
            initview();
         });
      }
      
      private static function initview() : void
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         if(!BufferRecordManager.getMyState(1310))
         {
            _loc1_ = 0;
            while(_loc1_ < 4)
            {
               taskMc["bossBtn_" + _loc1_].visible = false;
               _loc1_++;
            }
            startPreTask(1);
         }
         else
         {
            taskMc.gotoAndStop(1);
            taskMc.mc1.gotoAndStop(609);
            update();
            _loc2_ = 0;
            while(_loc2_ < 4)
            {
               taskMc["bossBtn_" + _loc2_].visible = true;
               taskMc["bossBtn_" + _loc2_].addEventListener(MouseEvent.ROLL_OVER,onBossMcRollOver);
               taskMc["bossBtn_" + _loc2_].addEventListener(MouseEvent.ROLL_OUT,onBossMcRollOut);
               taskMc["bossBtn_" + _loc2_].addEventListener(MouseEvent.CLICK,onBossMcClick);
               _loc2_++;
            }
         }
      }
      
      private static function onBossMcRollOver(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.currentTarget.name.split("_")[1]);
         taskMc["bossBtn_" + _loc2_].gotoAndStop(2);
      }
      
      private static function onBossMcRollOut(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.currentTarget.name.split("_")[1]);
         taskMc["bossBtn_" + _loc2_].gotoAndStop(1);
      }
      
      private static function onBossMcClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var event:MouseEvent = param1;
         index = int(event.currentTarget.name.split("_")[1]);
         switch(event.target.name)
         {
            case "fightBtn":
               StatManager.sendStat2014("0325叹息之墙开启","点击挑战" + _bossArr[index].bossName,"2016运营活动");
               FightManager.fightNoMapBoss(_bossArr[index].bossName,_bossArr[index].bossId,false,true,function():void
               {
                  SighOfWallOpeningStep1Control.setUp();
               });
               break;
            case "aKeyBtn":
               KTool.buyProductByCallback(247009,1,function():void
               {
                  SocketConnection.addCmdListener(45628,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(45628,arguments.callee);
                     update();
                  });
                  SocketConnection.send(45628,8604,index + 1);
               },taskMc);
         }
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var step:int = param1;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,step,"mc" + step]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(1310,true,function():void
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.visible = true;
               if(step == 1)
               {
                  initview();
               }
               if(step == 2)
               {
                  SocketConnection.addCmdListener(45632,function(param1:SocketEvent):void
                  {
                     var e:SocketEvent = param1;
                     SocketConnection.removeCmdListener(45632,arguments.callee);
                     _map.controlLevel.removeChild(taskMc);
                     taskMc = null;
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("SighOfWallOpeningMainPanel"),"正在打开....");
                     });
                  });
                  SocketConnection.send(45632,1,0);
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function update() : void
      {
         KTool.getMultiValue([3870],function(param1:Array):void
         {
            var _loc2_:int = 0;
            CommonUI.removeYellowArrow(taskMc);
            var _loc3_:int = 0;
            while(_loc3_ < 4)
            {
               CommonUI.removeYellowArrow(taskMc);
               if(BitUtils.getBit(param1[0],_loc3_) > 0)
               {
                  _loc2_++;
                  taskMc.mc1["bossMc_" + _loc3_].visible = false;
                  taskMc["bossBtn_" + _loc3_].visible = false;
               }
               else
               {
                  taskMc.mc1["bossMc_" + _loc3_].visible = true;
                  taskMc["bossBtn_" + _loc3_].visible = true;
                  CommonUI.removeYellowArrow(taskMc["bossBtn_" + _loc3_]);
                  CommonUI.addYellowArrow(taskMc["bossBtn_" + _loc3_],20,-20,0);
               }
               _loc3_++;
            }
            if(_loc2_ == 4)
            {
               startPreTask(2);
            }
         });
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
   }
}
