package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SighOfWallOpeningStep3Control
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static var _bossArr:Array = [{
         "bossName":"尤格萨隆",
         "bossId":6744
      },{
         "bossName":"迪博威",
         "bossId":6745
      },{
         "bossName":"莱科宁",
         "bossId":6746
      }];
      
      private static var _fightWinNum:int;
       
      
      public function SighOfWallOpeningStep3Control()
      {
         super();
      }
      
      public static function setUp() : void
      {
         if(MapManager.currentMap.id != 11184)
         {
            MapManager.changeMapWithCallback(11184,function():void
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
            _map.controlLevel["mcBar"].visible = false;
            var _loc2_:int = 0;
            while(_loc2_ < 2)
            {
               _map.controlLevel["mc_" + _loc2_].addEventListener(MouseEvent.CLICK,onMcClick);
               _loc2_++;
            }
            LevelManager.iconLevel.visible = false;
            initview();
         });
      }
      
      private static function initview() : void
      {
         if(!BufferRecordManager.getMyState(1312))
         {
            startPreTask(5);
         }
         else
         {
            taskMc.gotoAndStop(5);
            taskMc.mc5.gotoAndStop(354);
            update();
         }
      }
      
      private static function onMcClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var event:MouseEvent = param1;
         index = int(event.currentTarget.name.split("_")[1]);
         var arr:Array = ["叹之令","息之令"];
         Alert.show("你即将将你的" + arr[index] + "安置在此处吗?",function():void
         {
            _map.controlLevel["mcBar"].visible = true;
            AnimateManager.playMcAnimate(_map.controlLevel as MovieClip,1,"mcBar",function():void
            {
               SocketConnection.addCmdListener(45632,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(45632,arguments.callee);
                  update();
               });
               SocketConnection.send(45632,6,index + 1);
            });
         });
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
                  SighOfWallOpeningStep3Control.setUp();
               });
               break;
            case "aKeyBtn":
               KTool.buyProductByCallback(247010,1,function():void
               {
                  SocketConnection.addCmdListener(45628,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(45628,arguments.callee);
                     update();
                  });
                  SocketConnection.send(45628,8605,index + 1);
               },taskMc);
         }
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var step:int = param1;
         var i:int = 0;
         while(i < 2)
         {
            _map.controlLevel["mouseMc_" + i].visible = false;
            i++;
         }
         CommonUI.removeYellowArrow(_map.controlLevel);
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
            BufferRecordManager.setMyState(1312 + (step - 5),true,function():void
            {
               ToolBarController.panel.visible = true;
               if(step == 5)
               {
                  update();
               }
               if(step == 6)
               {
                  update();
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function update() : void
      {
         _map.controlLevel["mcBar"].visible = false;
         KTool.getMultiValue([3870],function(param1:Array):void
         {
            var j:int = 0;
            var va:Array = param1;
            var itemNum:int = 0;
            var i:int = 0;
            while(i < 2)
            {
               CommonUI.setEnabled(_map.controlLevel["mouseMc_" + i],false,false);
               if(BitUtils.getBit(va[0],i + 7) > 0)
               {
                  itemNum++;
                  _map.controlLevel["mc_" + i].gotoAndStop(2);
                  _map.controlLevel["mc_" + i].buttonMode = false;
                  CommonUI.setEnabled(_map.controlLevel["mc_" + i],false,false);
                  _map.controlLevel["mouseMc_" + i].visible = false;
               }
               else
               {
                  _map.controlLevel["mc_" + i].gotoAndStop(1);
                  _map.controlLevel["mc_" + i].buttonMode = true;
                  _map.controlLevel["mouseMc_" + i].visible = true;
               }
               i++;
            }
            if(itemNum >= 2)
            {
               if(!BufferRecordManager.getMyState(1313))
               {
                  startPreTask(6);
               }
               else
               {
                  taskMc.gotoAndStop(6);
                  taskMc.mc6.gotoAndStop(354);
                  j = 0;
                  while(j < 3)
                  {
                     taskMc["bossBtn_" + j].visible = true;
                     taskMc["bossBtn_" + j].addEventListener(MouseEvent.ROLL_OVER,onBossMcRollOver);
                     taskMc["bossBtn_" + j].addEventListener(MouseEvent.ROLL_OUT,onBossMcRollOut);
                     taskMc["bossBtn_" + j].addEventListener(MouseEvent.CLICK,onBossMcClick);
                     j++;
                  }
                  KTool.getMultiValue([3870],function(param1:Array):void
                  {
                     var i:int;
                     var va:Array = param1;
                     _fightWinNum = 0;
                     CommonUI.removeYellowArrow(taskMc);
                     CommonUI.removeYellowArrow(taskMc);
                     CommonUI.removeYellowArrow(taskMc);
                     i = 0;
                     while(i < 3)
                     {
                        if(BitUtils.getBit(va[0],i + 4) > 0)
                        {
                           ++_fightWinNum;
                           _taskMc["bossBtn_" + i].visible = false;
                           taskMc.mc6["bossMc_" + i].visible = false;
                        }
                        else
                        {
                           CommonUI.addYellowArrow(taskMc,taskMc["bossBtn_" + i].x + 20,taskMc["bossBtn_" + i].y - 20,0);
                           taskMc["bossBtn_" + i].visible = true;
                           taskMc.mc6["bossMc_" + i].visible = true;
                        }
                        i++;
                     }
                     if(_fightWinNum >= 3)
                     {
                        SocketConnection.addCmdListener(45632,function(param1:SocketEvent):void
                        {
                           var e:SocketEvent = param1;
                           SocketConnection.removeCmdListener(45632,arguments.callee);
                           _map.controlLevel.removeChild(taskMc);
                           taskMc = null;
                           LevelManager.iconLevel.visible = true;
                           ToolBarController.panel.visible = true;
                           MapManager.changeMapWithCallback(1,function():void
                           {
                              ModuleManager.showModule(ClientConfig.getAppModule("SighOfWallOpeningMainPanel"),"正在打开....");
                           });
                        });
                        SocketConnection.send(45632,3,0);
                     }
                  });
               }
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
