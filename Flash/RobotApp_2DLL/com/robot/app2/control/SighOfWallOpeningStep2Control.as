package com.robot.app2.control
{
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
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SighOfWallOpeningStep2Control
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static var _itemNum:int;
       
      
      public function SighOfWallOpeningStep2Control()
      {
         super();
      }
      
      public static function setUp() : void
      {
         if(MapManager.currentMap.id != 11183)
         {
            MapManager.changeMapWithCallback(11183,function():void
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
         CommonUI.removeYellowArrow(taskMc);
         if(!BufferRecordManager.getMyState(1311))
         {
            taskMc.gotoAndStop(3);
            taskMc["bookBtn"].addEventListener(MouseEvent.CLICK,onBookMcClick);
            taskMc["bossBtn"].visible = false;
            CommonUI.addYellowArrow(taskMc,taskMc["bookBtn"].x + 50,taskMc["bookBtn"].y - 10,45);
         }
         else
         {
            taskMc.gotoAndStop(3);
            taskMc.mc3.gotoAndStop(994);
            taskMc["bookBtn"].visible = false;
            taskMc["bossBtn"].visible = true;
            taskMc["bossBtn"].addEventListener(MouseEvent.CLICK,onBossBtnClick);
            CommonUI.addYellowArrow(taskMc,505,383,45);
            _loc1_ = 0;
            while(_loc1_ < 10)
            {
               taskMc.mc3["itemMc_" + _loc1_].addEventListener(MouseEvent.CLICK,onitemMcClick);
               taskMc.mc3["itemMc_" + _loc1_].buttonMode = true;
               _loc1_++;
            }
            update();
         }
      }
      
      private static function onBookMcClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var index:int = int(event.currentTarget.name.split("_")[1]);
         NpcDialog.show(NPC.SEER,["这是一张很旧的纸了，似乎是从某本书上掉落的。"],["捡起来看看！","感觉有点危险啊，先不管它了。"],[function():void
         {
            startPreTask(3);
         },function():void
         {
         }],false);
      }
      
      private static function onBossBtnClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         update(function():void
         {
            if(_itemNum < 10)
            {
               NpcDialog.show(NPC.SEER,["不可思议的力量！我的武器恐怕爆炸成了10个碎片，你已经收集到了" + _itemNum + "/10个！收集好了你来找我一下！"],["好！"],[function():void
               {
               }],false);
            }
            else
            {
               startPreTask(4);
            }
         });
      }
      
      private static function onitemMcClick(param1:MouseEvent) : void
      {
         var index:int;
         var event:MouseEvent = param1;
         StatManager.sendStat2014("0325叹息之墙开启","点击收集末日水晶","2016运营活动");
         index = int(event.currentTarget.name.split("_")[1]);
         SocketConnection.addCmdListener(45632,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(45632,arguments.callee);
            CommonUI.removeYellowArrow(taskMc);
            update();
         });
         SocketConnection.send(45632,5,index + 1);
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var step:int = param1;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(taskMc);
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,step,"mc" + step]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(1311,true,function():void
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.visible = true;
               if(step == 3)
               {
                  initview();
               }
               if(step == 4)
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
                  SocketConnection.send(45632,2,0);
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function update(param1:Function = null) : void
      {
         var callFun:Function = param1;
         taskMc["bossBtn"].buttonMode = true;
         KTool.getMultiValue([3870],function(param1:Array):void
         {
            _itemNum = 0;
            var _loc2_:int = 0;
            while(_loc2_ < 10)
            {
               if(BitUtils.getBit(param1[0],_loc2_ + 9) > 0)
               {
                  ++_itemNum;
                  taskMc.mc3["itemMc_" + _loc2_].visible = false;
               }
               else
               {
                  taskMc.mc3["itemMc_" + _loc2_].visible = true;
               }
               _loc2_++;
            }
            if(_itemNum == 10)
            {
               taskMc["bossBtn"].visible = true;
               taskMc["bossBtn"].buttonMode = true;
               CommonUI.removeYellowArrow(taskMc);
               CommonUI.addYellowArrow(taskMc,taskMc["bossBtn"].x + 100,taskMc["bossBtn"].y - 10,45);
            }
            if(callFun != null)
            {
               callFun();
               callFun = null;
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
