package com.robot.app.mapProcess
{
   import com.robot.app.task.taskUtils.taskDialog.NpcTipDialog;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.media.Sound;
   import flash.system.ApplicationDomain;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_47 extends BaseMapProcess
   {
       
      
      private var _armMC:MovieClip;
      
      private var _cannonMC:MovieClip;
      
      private var _armDropMC:MovieClip;
      
      private var _startSpiderGameBtn:MovieClip;
      
      private var road_1:MovieClip;
      
      private var road_2:MovieClip;
      
      private var door_2:MovieClip;
      
      public function MapProcess_47()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._armMC = animatorLevel["armMC"];
         this._armMC.gotoAndStop(3);
         this._cannonMC = conLevel["cannonMC"];
         this._cannonMC.gotoAndStop(1);
         this._cannonMC.buttonMode = false;
         this._cannonMC.mouseEnabled = false;
         this._cannonMC.mouseChildren = false;
         this._startSpiderGameBtn = conLevel["startSpiderGameBtn"];
         this._startSpiderGameBtn.mouseEnabled = false;
         this.road_1 = typeLevel["road_1"];
         this.road_2 = typeLevel["road_2"];
         this.door_2 = conLevel["door_2"];
         this._cannonMC.buttonMode = false;
         this._cannonMC.mouseEnabled = false;
         this._cannonMC.mouseChildren = false;
         DisplayUtil.removeForParent(this._startSpiderGameBtn);
         this._startSpiderGameBtn = null;
         DisplayUtil.removeForParent(this.road_1);
         this.road_1 = null;
         DisplayUtil.removeForParent(this.road_2);
         this.road_2 = null;
         MapManager.currentMap.makeMapArray();
      }
      
      override public function destroy() : void
      {
         EventManager.removeEventListener("ZHIZHU_DESTROYED",this.zhizhuDestroyed);
      }
      
      private function pirateBoatFly(param1:MCLoadEvent) : void
      {
         var sound:Sound;
         var mc:MovieClip = null;
         var evt:MCLoadEvent = param1;
         var app:ApplicationDomain = evt.getApplicationDomain();
         mc = new (app.getDefinition("PirateBoatFly") as Class)() as MovieClip;
         LevelManager.appLevel.addChild(mc);
         sound = new (app.getDefinition("FlySound") as Class)() as Sound;
         sound.play(0,1);
         mc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(mc.currentFrame == mc.totalFrames)
            {
               mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               DisplayUtil.removeForParent(mc);
               mc = null;
               TasksManager.complete(33,4);
            }
         });
         this.door_2.buttonMode = false;
         this.door_2.mouseChildren = false;
         this.door_2.mouseEnabled = false;
      }
      
      private function zhizhuDestroyed(param1:DynamicEvent) : void
      {
         EventManager.removeEventListener("ZHIZHU_DESTROYED",this.zhizhuDestroyed);
         DisplayUtil.removeForParent(this.road_1);
         this.road_1 = null;
         this._cannonMC.buttonMode = true;
         this._cannonMC.mouseEnabled = true;
         this._cannonMC.mouseChildren = true;
         this._cannonMC.addEventListener(MouseEvent.CLICK,this.onCannonClick);
         DisplayUtil.removeForParent(this._startSpiderGameBtn);
         this._startSpiderGameBtn = null;
         DisplayUtil.removeForParent(this.road_1);
         this.road_1 = null;
         MapManager.currentMap.makeMapArray();
      }
      
      private function onCannonClick(param1:MouseEvent) : void
      {
         Alert.show("SC006型加农炮为远程大规模杀伤性战术兵器，运用过程中可能会有危险，你确定要启动吗？",this.fireRobot,null);
      }
      
      private function fireRobot() : void
      {
         var firePanel:MovieClip = null;
         var loadingMC:MovieClip = null;
         firePanel = MapManager.currentMap.libManager.getMovieClip("CannonFirePanel");
         LevelManager.appLevel.addChild(firePanel);
         DisplayUtil.align(firePanel,null,AlignType.MIDDLE_CENTER);
         loadingMC = firePanel["loadingMC"];
         loadingMC.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(loadingMC.currentFrame == loadingMC.totalFrames)
            {
               loadingMC.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               DisplayUtil.removeForParent(firePanel);
               firePanel = null;
               Alert.show("    SC006型加农炮开始发射...",confirmFireBobot);
            }
         });
      }
      
      private function confirmFireBobot() : void
      {
         var t:uint = 0;
         this._cannonMC.gotoAndStop(2);
         this._armMC.gotoAndStop(2);
         t = setTimeout(function():void
         {
            clearTimeout(t);
            _armDropMC = _armMC["armDropMC"];
            _armDropMC.play();
            _armDropMC.addEventListener(Event.ENTER_FRAME,onArmDropMC);
         },200);
      }
      
      private function onArmDropMC(param1:Event) : void
      {
         var mc:MovieClip = null;
         var evt:Event = param1;
         if(this._armDropMC.currentFrame == this._armDropMC.totalFrames)
         {
            this._armDropMC.removeEventListener(Event.ENTER_FRAME,arguments.callee);
            mc = MapManager.currentMap.libManager.getMovieClip("PassCrossMC");
            LevelManager.appLevel.addChild(mc);
            mc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
            {
               var _loc3_:String = null;
               if(mc.currentFrame == mc.totalFrames)
               {
                  mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  DisplayUtil.removeForParent(mc);
                  mc = null;
                  DisplayUtil.removeForParent(road_2);
                  road_2 = null;
                  MapManager.currentMap.makeMapArray();
                  _loc3_ = "真是激动人心的一刻，你的沉着和智慧为我们撬开了敌人的大门，海盗要塞中还有更多的敌人，我非常期待你接下来的战斗表现。";
                  NpcTipDialog.show(_loc3_,completeTask,NpcTipDialog.INSTRUCTOR,0,completeTask);
               }
            });
         }
      }
      
      private function completeTask() : void
      {
         this._cannonMC.buttonMode = false;
         this._cannonMC.mouseEnabled = false;
         this._cannonMC.mouseChildren = false;
         conLevel["door_2"].mouseEnabled = true;
      }
      
      public function onStartSpiderGame() : void
      {
         ModuleManager.showModule(ClientConfig.getGameModule("SpiderThunderGame"),"正在加载游戏....");
      }
   }
}
