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
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class CarlaChallengeController
   {
      
      public static const NODE_0_BUFFER_ID:uint = 1254;
      
      public static const NODE_1_BUFFER_ID:uint = 1255;
      
      public static const NODE_2_BUFFER_ID:uint = 1256;
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
       
      
      public function CarlaChallengeController()
      {
         super();
      }
      
      public static function init() : void
      {
         if(MapManager.currentMap.id != 919)
         {
            MapManager.changeMap(919);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               _map = MapManager.currentMap;
               startPlay();
            });
         }
         else
         {
            _map = MapManager.currentMap;
            startPlay();
         }
      }
      
      public static function startPlay() : void
      {
         _map.topLevel.mouseEnabled = false;
         _map.topLevel.mouseChildren = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_CarlaChallenge"),function(param1:MovieClip):void
         {
            if(taskMc == null)
            {
               taskMc = param1;
               _map.controlLevel.addChild(taskMc);
            }
            update();
         });
      }
      
      public static function update() : void
      {
         if(!isNode1TaskDone)
         {
            if(!isNode0TaskDone)
            {
               startPreTask(1);
            }
            else
            {
               startPreTask(2);
            }
         }
         else
         {
            taskMc.visible = false;
            ModuleManager.showModule(ClientConfig.getAppModule("CarlaChallengeMainPanel"));
         }
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array = null;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         taskMc.visible = true;
         if(index == 3)
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc" + 3]],[TaskStoryPlayer.FUL_MOVIE,["task_CarlaChallenge",true]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc" + 4]]];
         }
         else
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         }
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(NODE_0_BUFFER_ID + (index - 1),true,function():void
            {
               KTool.showMapPlayerAndMonster();
               LevelManager.iconLevel.visible = true;
               taskMc.visible = false;
               if(index == 1)
               {
                  dialog();
               }
               else if(index == 2)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("CarlaChallengeMainPanel"));
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function dialog() : void
      {
         taskMc.visible = true;
         NpcDialog.show(NPC.KAERNA,["大人，最近我有一场约战，急需提示自己的实力。？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.KAERNA,["能否赐予我一些宝物，让我变得更加强大？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.ABOLUO,["世上没有免费的午餐。虽然你是我的神使，但我也不能就这么让你一步登天。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.KAERNA,["可是大人！这场约斗对我来说非常重要……"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.ABOLUO,["这我明白。这样吧，你帮我一个忙，我便回赠你一次提升，如何？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.KAERNA,["这……在下感激不尽！"],null,null,false,function():void
                        {
                           taskMc.visible = false;
                           startPreTask(2);
                        });
                     });
                  });
               });
            });
         });
      }
      
      public static function PlayFullMoive() : void
      {
         if(!isNode2TaskDone)
         {
            if(taskMc != null)
            {
               startPreTask(3);
            }
         }
      }
      
      private static function get isNode0TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_0_BUFFER_ID);
      }
      
      private static function get isNode1TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_1_BUFFER_ID);
      }
      
      private static function get isNode2TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_2_BUFFER_ID);
      }
      
      public static function destroy() : void
      {
      }
   }
}
