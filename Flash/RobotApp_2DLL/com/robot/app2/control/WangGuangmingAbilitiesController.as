package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.effect.ColorFilter;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.BitUtil;
   
   public class WangGuangmingAbilitiesController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1235;
      
      public static const BUFFER_ID_1:uint = 1236;
      
      private static var _map:MapModel;
      
      private static var _nameArr:Array = ["圣光","神光","闪光","邪光","幽暗","灰暗","灭暗","魔暗"];
      
      private static var map:BaseMapProcess;
      
      private static var _surplusNum:int;
      
      private static var _curLv:int = 1;
      
      private static var _compeleteNum:int;
      
      private static var _taskMc:MovieClip;
       
      
      public function WangGuangmingAbilitiesController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 1071)
         {
            MapManager.changeMap(1071);
            StatManager.sendStat2014("光明异能王超进化","进入场景的","2015运营活动");
         }
         else
         {
            start();
         }
      }
      
      public static function start() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_wangGuangmingAbilities"),function(param1:MovieClip):void
         {
            var _loc2_:int = 0;
            var _loc3_:int = 0;
            if(taskMc == null)
            {
               taskMc = param1;
               _map.controlLevel.addChild(taskMc);
            }
            if(!isTaskDone)
            {
               startPreTask();
            }
            else if(_curLv == 1)
            {
               taskMc.gotoAndStop(1);
               taskMc.mc1.gotoAndStop(73);
               _loc2_ = 0;
               while(_loc2_ < 8)
               {
                  CommonUI.addYellowArrow(map.conLevel["mc_" + _loc2_],40,0,45);
                  _loc2_++;
               }
            }
            else
            {
               _loc3_ = 0;
               while(_loc3_ < 8)
               {
                  CommonUI.removeYellowArrow(map.conLevel["mc_" + _loc3_]);
                  _loc3_++;
               }
               if(!isTaskDone1)
               {
                  startPreTask3();
               }
               else
               {
                  CommonUI.addYellowArrow(map.btnLevel["btn"],272,0,45);
                  taskMc.gotoAndStop(2);
                  taskMc.mc2.gotoAndStop(327);
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
      
      private static function get isTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID);
      }
      
      private static function get isTaskDone1() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_1);
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         LevelManager.iconLevel.visible = false;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANG_AOERDE,["虽然得到了超进化的力量，但是光和暗的束缚依旧没有打破，赛尔们，你们有能力帮我打破这屏障吗？"],["我们会帮你的！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
               openPanel();
               var _loc1_:int = 0;
               while(_loc1_ < 8)
               {
                  CommonUI.addYellowArrow(map.conLevel["mc_" + _loc1_],40,0,45);
                  _loc1_++;
               }
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
      }
      
      public static function startPreTask2() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         LevelManager.iconLevel.visible = false;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         CommonUI.removeYellowArrow(map.btnLevel["btn"]);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_wangGuangmingAbilities",true]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            CommonUI.addYellowArrow(map.btnLevel["btn"],272,0,45);
            taskMc.gotoAndStop(3);
            taskMc.mc3.gotoAndStop(268);
            CommonUI.addYellowArrow(map.btnLevel["btn"],272,0,45);
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      public static function startPreTask3() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         LevelManager.iconLevel.visible = false;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            BufferRecordManager.setMyState(BUFFER_ID_1,true,function():void
            {
               CommonUI.addYellowArrow(map.btnLevel["btn"],272,0,45);
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map1:BaseMapProcess = param1;
         map = map1;
         var i:int = 0;
         while(i < 8)
         {
            map.conLevel["mc_" + i].addEventListener(MouseEvent.CLICK,onMcClick);
            i++;
         }
         map.btnLevel["btn"].addEventListener(MouseEvent.CLICK,onNpcMcClick);
         update();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            _map = MapManager.currentMap;
         });
      }
      
      private static function onNpcMcClick(param1:MouseEvent) : void
      {
         if(_curLv == 2)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("WangGuangmingAbilitiesSecPanel"),"正在打开....");
         }
         else if(_curLv == 3)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("WangGuangmingAbilitiesThirdPanel"),"正在打开....");
         }
      }
      
      private static function onMcClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var index:int = int(event.currentTarget.name.split("_")[1]);
         NpcDialog.show(NPC.SHENGGUANG_AOERDE,["亲爱的赛尔,你确定要选择0xff0000" + _nameArr[index] + "0xffffff封印进入战斗吗？"],["我确定！","我再想想！"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("WangGuangmingAbilitiesFristPanel"),"正在打开....");
         }],false);
      }
      
      public static function update() : void
      {
         KTool.getMultiValue([3288],function(param1:Array):void
         {
            _compeleteNum = 0;
            var _loc2_:int = 0;
            while(_loc2_ < 8)
            {
               if(BitUtil.getBit(param1[0],_loc2_) > 0)
               {
                  ++_compeleteNum;
                  map.conLevel["line_" + _loc2_].visible = false;
                  map.conLevel["mc_" + _loc2_].buttonMode = false;
                  KTool.enableMC([map.conLevel["mc_" + _loc2_]],false);
                  map.conLevel["mc_" + _loc2_].filters = [ColorFilter.setGrayscale()];
               }
               else
               {
                  map.conLevel["line_" + _loc2_].visible = true;
                  map.conLevel["mc_" + _loc2_].buttonMode = true;
                  KTool.enableMC([map.conLevel["mc_" + _loc2_]],true);
                  map.conLevel["mc_" + _loc2_].filters = null;
               }
               _loc2_++;
            }
            if(BitUtil.getBit(param1[0],9) > 0)
            {
               map.btnLevel["btn"].buttonMode = true;
               _curLv = 3;
            }
            else if(_compeleteNum >= 8)
            {
               map.btnLevel["btn"].buttonMode = true;
               _curLv = 2;
            }
            start();
         });
         KTool.getMultiValue([13180],function(param1:Array):void
         {
            _surplusNum = 1 - param1[0];
         });
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 8)
         {
            map.conLevel["mc_" + _loc1_].removeEventListener(MouseEvent.CLICK,onMcClick);
            _loc1_++;
         }
         _map = null;
         taskMc = null;
      }
   }
}
