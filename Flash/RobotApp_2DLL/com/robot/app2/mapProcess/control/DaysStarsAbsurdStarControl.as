package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class DaysStarsAbsurdStarControl
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static const BUFFERID:uint = 1393;
      
      private static var _itemNum:int;
       
      
      public function DaysStarsAbsurdStarControl()
      {
         super();
      }
      
      public static function initToMap() : void
      {
         _map = MapManager.currentMap;
         update();
         _map.controlLevel.addEventListener(MouseEvent.CLICK,onMainClick);
         playMc();
      }
      
      private static function onMainClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(KTool.getIndex(param1.target));
         switch(param1.target.name)
         {
            case "closeBtn":
               MapManager.changeMap(1);
               break;
            case "npcBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("DaysStarsAbsurdStarTaskPanel"),"正在打开....");
               break;
            case "bossBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("DaysStarsAbsurdStarFightPanel"),"正在打开....");
         }
      }
      
      private static function playMc() : void
      {
         if(!BufferRecordManager.getMyState(BUFFERID))
         {
            StatManager.sendStat2014("0330戴斯星的荒芜之星","完成前置剧情","2018运营活动");
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_daysStarsAbsurdStar"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map = MapManager.currentMap;
               _map.controlLevel.addChild(taskMc);
               startPreTask();
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DaysStarsAbsurdStarTaskPanel"),"正在打开....");
         }
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(BUFFERID,true,function():void
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.visible = true;
               _map.controlLevel.removeChild(taskMc);
               ModuleManager.showModule(ClientConfig.getAppModule("DaysStarsAbsurdStarTaskPanel"),"正在打开....");
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
      
      public static function update() : void
      {
         ItemManager.updateItems([1716333],function():void
         {
            var _loc1_:Array = new Array();
            _loc1_[0] = ItemManager.getNumByID(1716333);
            _itemNum = _loc1_[0];
            _map.controlLevel["tipsMc"]["itemNumTx"].text = String(_itemNum) + "/8";
            if(_itemNum >= 8)
            {
               CommonUI.setEnabled(_map.controlLevel["bossBtn"],false,false);
               _map.controlLevel["mc"].visible = false;
               _map.controlLevel["tipsMc"].visible = false;
            }
         });
         KTool.getBitSet([1000397],function(param1:Array):void
         {
            if(param1[0] > 0)
            {
               CommonUI.setEnabled(_map.controlLevel["bossBtn"],false,false);
               _map.controlLevel["mc"].visible = false;
               _map.controlLevel["tipsMc"].visible = false;
            }
         });
      }
      
      public static function destroy() : void
      {
      }
   }
}
