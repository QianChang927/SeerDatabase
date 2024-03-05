package com.robot.app2.control
{
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
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class WelfareActivitiesB2Controller
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static var _mapIdArr:Array;
      
      private static var _compeleteNum:int;
       
      
      public function WelfareActivitiesB2Controller()
      {
         super();
      }
      
      public static function setUp() : void
      {
         if(MapManager.currentMap.id != 11204)
         {
            MapManager.changeMapWithCallback(11204,function():void
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
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_welfareActivitiesB"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map = MapManager.currentMap;
            _map.controlLevel.addChild(taskMc);
            _map.controlLevel["mcBar"].visible = false;
            _map.controlLevel["playMc"].visible = false;
            initview();
         });
      }
      
      private static function initview() : void
      {
         var _loc1_:int = 0;
         if(!BufferRecordManager.getMyState(1324))
         {
            startPreTask(3);
         }
         else
         {
            taskMc.gotoAndStop(3);
            taskMc.mc3.gotoAndStop(379);
            taskMc["dienMc"].addEventListener(MouseEvent.CLICK,onDienMcClick);
            taskMc["dienMc"].buttonMode = true;
            CommonUI.addYellowArrow(_map.controlLevel["box_" + 1],50,-10,45);
            _loc1_ = 0;
            while(_loc1_ < 4)
            {
               _map.controlLevel["boxMude_" + _loc1_].visible = false;
               _map.controlLevel["box_" + _loc1_].buttonMode = true;
               _map.controlLevel["box_" + _loc1_].addEventListener(MouseEvent.CLICK,onBoxClick);
               _loc1_++;
            }
         }
      }
      
      private static function onBoxClick(param1:MouseEvent) : void
      {
         var index1:int;
         var index:int = 0;
         var event:MouseEvent = param1;
         StatManager.sendStat2014("0408福利活动B","点击开始搬运箱子","2016运营活动");
         index = int(event.currentTarget.name.split("_")[1]);
         index1 = int(Math.random() * 100);
         if(index1 < 95)
         {
            KTool.hideMapAllPlayerAndMonster();
            _map.controlLevel["box_" + index].visible = false;
            _map.controlLevel["playMc"].gotoAndStop(1);
            _map.controlLevel["playMc"].visible = true;
            AnimateManager.playMcAnimate(_map.controlLevel as MovieClip,1,"playMc",function():void
            {
               KTool.showMapAllPlayerAndMonster();
               _map.controlLevel["playMc"].visible = false;
               _map.controlLevel["boxMude_" + index].visible = true;
               ++_compeleteNum;
               if(_compeleteNum == 4)
               {
                  SocketConnection.addCmdListener(45638,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(45638,arguments.callee);
                     startPreTask(4);
                  });
                  SocketConnection.send(45638,2,0);
               }
               else
               {
                  Alarm2.show("再搬" + int(4 - _compeleteNum) + "个箱子就完成任务了，加油！");
               }
            });
         }
         else
         {
            Alarm2.show("很遗憾这次没能搬得动，请换个姿势再试！");
         }
      }
      
      private static function onDienMcClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.DIEN,["是不是很辛苦？这里我为你提供迅速通过途径！"],["好！（需要消耗9钻）","算了。"],[function():void
         {
            KTool.buyProductByCallback(247183,1,function():void
            {
               SocketConnection.addCmdListener(45638,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(45638,arguments.callee);
                  startPreTask(4);
               });
               SocketConnection.send(45638,2,0);
            });
         },function():void
         {
         }],false);
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var step:int = param1;
         CommonUI.removeYellowArrow(_map.controlLevel["box_" + 1]);
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
            BufferRecordManager.setMyState(1324,true,function():void
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.visible = true;
               if(step == 3)
               {
                  initview();
               }
               if(step == 4)
               {
                  _map.controlLevel.removeChild(taskMc);
                  taskMc = null;
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("WelfareActivitiesBMainPanel"),"正在打开....");
                  });
               }
            });
         };
         storyPlayer.start();
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
