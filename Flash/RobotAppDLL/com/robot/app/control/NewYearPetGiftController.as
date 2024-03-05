package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class NewYearPetGiftController
   {
      
      protected static var _instance:com.robot.app.control.NewYearPetGiftController;
      
      private static const BUFFER:uint = 961;
       
      
      protected var fireIndex:uint;
      
      protected var _timer:Timer;
      
      private var _taskMC:MovieClip;
      
      public function NewYearPetGiftController()
      {
         this._timer = new Timer(60000);
         super();
      }
      
      public static function get instance() : com.robot.app.control.NewYearPetGiftController
      {
         return _instance = _instance || new com.robot.app.control.NewYearPetGiftController();
      }
      
      public function playColorFire() : void
      {
         (MapManager.currentMap.controlLevel["fireAnimationMC"] as MovieClip).visible = true;
         SocketConnection.addCmdListener(46078,this.getFireIndexHandler);
         SocketConnection.send(46078);
      }
      
      protected function getFireIndexHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(46078,this.getFireIndexHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         this.fireIndex = _loc2_.readUnsignedInt();
         KTool.hideMapAllPlayerAndMonster();
         LevelManager.closeMouseEvent();
         MapManager.currentMap.depthLevel.visible = false;
         (MapManager.currentMap.controlLevel["fireAnimationMC"] as MovieClip).gotoAndStop(this.fireIndex);
         (MapManager.currentMap.controlLevel["fireAnimationMC"]["mc"] as MovieClip).gotoAndPlay(1);
         (MapManager.currentMap.controlLevel["fireAnimationMC"] as MovieClip).addEventListener("FIRE_PLAY_END",this.onPlayEndHandler);
      }
      
      protected function onPlayEndHandler(param1:Event) : void
      {
         LevelManager.openMouseEvent();
         KTool.showMapAllPlayerAndMonster();
         MapManager.currentMap.depthLevel.visible = true;
         (MapManager.currentMap.controlLevel["fireAnimationMC"] as MovieClip).removeEventListener("FIRE_PLAY_END",this.onPlayEndHandler);
         (MapManager.currentMap.controlLevel["fireAnimationMC"] as MovieClip).visible = false;
         ModuleManager.showModule(ClientConfig.getAppModule("ColorFireGamerAlertPanel"));
      }
      
      public function start() : void
      {
         (MapManager.currentMap.controlLevel["fireAnimationMC"] as MovieClip).visible = false;
         StoryLoaderManager.insatnce.swfName = "map_77_2";
         StoryLoaderManager.insatnce.setloaderHandler = this.getStoryMCHanlder;
      }
      
      private function getStoryMCHanlder(param1:MovieClip) : void
      {
         this._taskMC = param1;
         MapManager.currentMap.controlLevel.addChildAt(this._taskMC,0);
         if(BufferRecordManager.getMyState(BUFFER) == false)
         {
            this.startPreStroy();
         }
         else
         {
            this._taskMC.visible = false;
            this.addEvents();
         }
      }
      
      private function startPreStroy() : void
      {
         SocketConnection.send(1022,86066740);
         KTool.hideMapAllPlayerAndMonster();
         MapManager.currentMap.depthLevel.visible = false;
         MapManager.currentMap.controlLevel.addChildAt(MapManager.currentMap.controlLevel["door_0"],0);
         TaskDiaLogManager.single.playStory(this.stroyPreLine,function():void
         {
            MapManager.currentMap.depthLevel.visible = true;
            BufferRecordManager.setMyState(BUFFER,true);
            KTool.showMapAllPlayerAndMonster();
            _taskMC.visible = false;
            ModuleManager.showModule(ClientConfig.getAppModule("ColorFireGamerMainPanel"));
            addEvents();
            if(TasksManager.getTaskStatus(1882) == TasksManager.UN_ACCEPT)
            {
               TasksManager.accept(1882,function():void
               {
                  TasksManager.complete(1882,0,function():void
                  {
                  });
               });
            }
            else if(TasksManager.getTaskStatus(1882) == TasksManager.ALR_ACCEPT)
            {
               TasksManager.complete(1882,0,function():void
               {
               });
            }
            SocketConnection.send(1022,86066741);
         });
      }
      
      private function addEvents() : void
      {
         ToolTipManager.add(MapManager.currentMap.controlLevel["liquanMC"],"彩纸");
         MapListenerManager.add(MapManager.currentMap.controlLevel["liquanMC"],this.clickLiQuanHandler);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimerHandler);
         this._timer.start();
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkHandler);
      }
      
      private function clickLiQuanHandler(param1:MouseEvent) : void
      {
         MainManager.actorModel.walkAction(new Point(MapManager.currentMap.controlLevel["liquanMC"]["mc"].x,MapManager.currentMap.controlLevel["liquanMC"]["mc"].y),true);
      }
      
      private function onWalkHandler(param1:RobotEvent) : void
      {
         if(Math.abs(Point.distance(new Point(MapManager.currentMap.controlLevel["liquanMC"]["mc"].x,MapManager.currentMap.controlLevel["liquanMC"]["mc"].y),MainManager.actorModel.pos)) < 30)
         {
            MainManager.actorModel.stop();
            SocketConnection.addCmdListener(46083,this.pickHandler);
            SocketConnection.send(46083);
         }
      }
      
      private function pickHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(46083,this.pickHandler);
         (MapManager.currentMap.controlLevel["liquanMC"] as MovieClip).gotoAndStop(1);
      }
      
      protected function onTimerHandler(param1:TimerEvent) : void
      {
         var _loc2_:uint = Math.random() * 10;
         (MapManager.currentMap.controlLevel["liquanMC"] as MovieClip).gotoAndStop(_loc2_);
      }
      
      public function removeEvents() : void
      {
         this._timer.stop();
         this._timer.removeEventListener(TimerEvent.TIMER,this.onTimerHandler);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkHandler);
      }
      
      private function onYuanDanClickHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ColorFireGamerMainPanel"));
      }
      
      private function get stroyPreLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active_20131227_3",true]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELANJIE,["不好意思，来得匆忙，没有带多少原材料……"],["啊？好遗憾……"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["我们的新年庆典可不能少了你的焰火，格兰杰，你都需要些什么原材料呢？ "],["嗯，原材料也并不难找。"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELANJIE,["只要有足够的0xff0000火药，彩纸0xffffff和0xff0000金属粉末0xffffff，我就可以制造出更多美丽的焰火！ "],["只要这些……没有问题。"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_];
      }
      
      private function get taskMC() : MovieClip
      {
         return this._taskMC as MovieClip;
      }
   }
}
