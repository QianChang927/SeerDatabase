package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.CommandID;
   import com.robot.core.SoundManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.LittleGameEvent;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class FlameGameController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _mc:MovieClip;
      
      private static const TASK_ID:uint = 1868;
      
      private static var loader:MCLoader;
      
      private static var _game:Sprite;
       
      
      public function FlameGameController()
      {
         super();
      }
      
      public static function openGame() : void
      {
         loader = new MCLoader(ClientConfig.getGameSwfPath("Brilliantspark"));
         loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         loader.doLoad();
      }
      
      public static function initFor16(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            getRes(startTask);
            TasksManager.accept(TASK_ID);
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            getRes(startTask);
         }
      }
      
      public static function getRes(param1:Function) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_16_0"),function(param1:MovieClip):void
         {
            _mc = param1;
            if(fun != null)
            {
               fun.call();
            }
         });
      }
      
      private static function startTask() : void
      {
         _map.conLevel.addChild(_mc);
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(allStory,function():void
         {
            DisplayUtil.removeForParent(_mc);
            _mc = null;
            CommonUI.addYellowArrow(_map.depthLevel,480,147,270);
            KTool.showMapAllPlayerAndMonster();
            TasksManager.complete(TASK_ID,0);
         });
      }
      
      private static function get allStory() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_mc,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUOHOU,["山洞里面出现了好多的火花！他们会让周围的能量变得很不稳定！"],["所以你们在收集？"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUOHOU,["是的！我们把火花疏导一下，就会变成绚丽的烟火！刚好庆祝圣诞节！"],["太棒啦！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我跟你们一起，好期待炫丽的烟火啊！圣诞节快乐！"],["圣诞节快乐！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_mc,2,"mc2"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_];
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _game = param1.getContent() as Sprite;
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         SoundManager.stopSoundImmediately();
         LevelManager.appLevel.addChild(_game);
         _game.addEventListener(LittleGameEvent.GAME_OVER,onGameClose);
      }
      
      private static function onGameClose(param1:LittleGameEvent) : void
      {
         var e:LittleGameEvent = param1;
         var score:uint = e.data as uint;
         LevelManager.stage.frameRate = 24;
         if(_game != null)
         {
            _game.removeEventListener(LittleGameEvent.GAME_OVER,onGameClose);
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
            DisplayUtil.removeForParent(_game);
            _game = null;
            loader = null;
            SoundManager.playSound();
         }
         if(score > 10000)
         {
            score = 10000;
         }
         if(score > 0)
         {
            SocketConnection.sendWithCallback(CommandID.XMAX_GAME_BONUS,function(param1:SocketEvent):void
            {
               SocketConnection.send(1022,86070253);
            },score);
         }
         EventManager.dispatchEvent(new DynamicEvent("dragonEvt",score));
      }
      
      public static function destroyFor16() : void
      {
         DisplayUtil.removeForParent(_mc);
         _mc = null;
         if(loader != null)
         {
            loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         }
         loader = null;
         if(_game != null)
         {
            _game.removeEventListener(LittleGameEvent.GAME_OVER,onGameClose);
            _game = null;
         }
         _map = null;
      }
   }
}
