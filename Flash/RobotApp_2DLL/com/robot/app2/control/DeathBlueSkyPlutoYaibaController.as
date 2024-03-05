package com.robot.app2.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DeathBlueSkyPlutoYaibaController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1181;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _fun:Function;
      
      private static var _taskMc:MovieClip;
       
      
      public function DeathBlueSkyPlutoYaibaController()
      {
         super();
      }
      
      public static function setUp() : void
      {
         LocalMsgController.addLocalMsg("DeathBlueSkyPlutoYaibaXiaoxinfengPanel",0,false,null,null,1);
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 1022)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DeathBlueSkyPlutoYaibaXiaoxinfengPanel"),"正在努力打开面板...");
         }
         else if(!isTaskDone)
         {
            startPlay();
         }
         else
         {
            openPanel();
         }
      }
      
      public static function startPlay(param1:Function = null) : void
      {
         var fun:Function = param1;
         _fun = fun;
         _map = MapManager.currentMap;
         if(!isTaskDone)
         {
            KTool.hideMapAllPlayerAndMonster();
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_1022_deathBlueSkyPlutoYaiba"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map.controlLevel.addChild(taskMc);
               startPreTask();
            });
         }
         else
         {
            openPanel();
         }
      }
      
      public static function startPlay1(param1:Function = null) : void
      {
         var fun:Function = param1;
         _fun = fun;
         _map = MapManager.currentMap;
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_1022_deathBlueSkyPlutoYaiba"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.controlLevel.addChild(taskMc);
            startPreTask();
         });
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.DIALOG,[NPC.SHEN_YANMO,["夜刃，新的秩序争夺就要开始，你还是不愿意加入我们吗？"],["我想还是算了。"]]],[TaskStoryPlayer.DIALOG,[NPC.YE_REN,["我为什么要离开这里，跟你们去争抢一个对我来说毫无意义的虚名。"],["难道凭我当年救你一命，也不能说动你吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.SHEN_YANMO,["我带你离开冥界，去称王称霸，这才是一个英雄该有的野心和抱负！"],["我想你还是不太了解我，炎魔。"]]],[TaskStoryPlayer.DIALOG,[NPC.YE_REN,["我只想守护着这里，看明月东升，潮起潮落。我不是什么英雄，你走吧。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.FUL_MOVIE,["task_deathBlueSkyPlutoYaiba",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            DisplayUtil.removeForParent(taskMc);
            _taskMc = null;
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               if(_fun == null)
               {
                  openPanel();
               }
               else
               {
                  _fun();
               }
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DeathBlueSkyPlutoYaibaMainPanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
