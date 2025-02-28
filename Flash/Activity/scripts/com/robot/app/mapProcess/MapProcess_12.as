package com.robot.app.mapProcess
{
   import com.robot.app.control.VanishAirBrickController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.active.BlinkYiYiActive;
   import com.robot.app.task.taskscollection.Task532;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_12 extends BaseMapProcess
   {
       
      
      private var _yiyiCount:uint;
      
      private var _yiyiMc:MovieClip;
      
      private var _yiyiTimer:uint;
      
      private var _yiyiPosList:Array;
      
      private var _blinkYiyi:BlinkYiYiActive;
      
      private var _cls:*;
      
      public function MapProcess_12()
      {
         this._yiyiPosList = [new Point(210,140),new Point(280,140),new Point(110,260),new Point(240,250),new Point(100,325),new Point(215,350),new Point(150,395),new Point(70,440)];
         super();
      }
      
      override protected function init() : void
      {
         this._yiyiMc = MapManager.currentMap.libManager.getMovieClip("UI_yiyi");
         this._yiyiTimer = setInterval(this.onInTime,10000);
         AimatController.addEventListener(AimatEvent.PLAY_END,this.onAimat);
         this._blinkYiyi = new BlinkYiYiActive();
         this._blinkYiyi.setup(MainManager.actorInfo.sysTime);
         Task532.initTask_0(this);
      }
      
      private function onAimat(param1:AimatEvent) : void
      {
         var _loc2_:AimatInfo = param1.info;
         if(_loc2_.userID == MainManager.actorID)
         {
            if(this._yiyiMc.hitTestPoint(_loc2_.endPos.x,_loc2_.endPos.y))
            {
               ++this._yiyiCount;
               if(this._yiyiCount >= 3)
               {
                  AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat);
                  clearInterval(this._yiyiTimer);
                  this._yiyiMc.gotoAndStop(20);
                  this._yiyiMc.buttonMode = true;
                  this._yiyiMc.addEventListener(MouseEvent.CLICK,this.onYiyiClick);
               }
            }
         }
      }
      
      private function onInTime() : void
      {
         if(!DisplayUtil.hasParent(this._yiyiMc))
         {
            conLevel.addChild(this._yiyiMc);
         }
         var _loc1_:int = int(this._yiyiPosList.length * Math.random());
         if(_loc1_ == this._yiyiPosList.length)
         {
            _loc1_ = int(this._yiyiPosList.length - 1);
         }
         var _loc2_:Point = this._yiyiPosList[_loc1_];
         this._yiyiMc.x = _loc2_.x;
         this._yiyiMc.y = _loc2_.y;
         this._yiyiMc.gotoAndPlay(1);
      }
      
      private function onYiyiClick(param1:MouseEvent) : void
      {
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapDown);
         MainManager.actorModel.walkAction(new Point(this._yiyiMc.x,this._yiyiMc.y));
      }
      
      private function onWalk(param1:Event) : void
      {
         if(Math.abs(Point.distance(new Point(this._yiyiMc.x,this._yiyiMc.y),MainManager.actorModel.pos)) < 30)
         {
            this.onMapDown(null);
            MainManager.actorModel.stop();
            if(MapManager.currentMap.id == 12)
            {
               FightManager.fightWithBoss("依依",1);
            }
         }
      }
      
      private function onMapDown(param1:MapEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapDown);
      }
      
      override public function destroy() : void
      {
         this.onMapDown(null);
         clearInterval(this._yiyiTimer);
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat);
         this._yiyiPosList = null;
         DisplayUtil.removeForParent(this._yiyiMc);
         this._yiyiMc = null;
         this._blinkYiyi.destroy();
         VanishAirBrickController.destroy();
      }
   }
}
