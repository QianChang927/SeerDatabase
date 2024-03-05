package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.xml.OgreXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   
   public class OutPrintFanciersController
   {
      
      private static var ogre:Array = [1253,1254,1172,1173,43,44,45,1243,1244,1245,188,189];
      
      private static var _map:BaseMapProcess;
      
      private static var _timer:Timer;
      
      private static var _model:Array;
      
      private static var _currentModel:OgreModel;
       
      
      public function OutPrintFanciersController()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["taskMc"];
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
         if(TasksManager.getTaskStatus(1718) == TasksManager.COMPLETE)
         {
            taskMc.gotoAndStop(taskMc.totalFrames);
            KTool.getFrameMc(taskMc,taskMc.totalFrames,"mc",function(param1:MovieClip):void
            {
               param1.gotoAndStop(param1.totalFrames);
            });
            _timer = new Timer(20000);
            _timer.addEventListener(TimerEvent.TIMER,onTimer);
            _timer.start();
         }
         MapListenerManager.add(taskMc,function():void
         {
            start();
         });
      }
      
      private static function get isInActivityTime() : Boolean
      {
         var _loc1_:CronTimeVo = new CronTimeVo("*","9-12","30-31","8","*","*");
         var _loc2_:CronTimeVo = new CronTimeVo("*","15-18","30-31","8","*","*");
         var _loc3_:CronTimeVo = new CronTimeVo("*","9-12","1-19","9","*","*");
         var _loc4_:CronTimeVo = new CronTimeVo("*","15-18","1-19","9","*","*");
         return Boolean(_loc1_.isActive(SystemTimerManager.sysBJDate)) || Boolean(_loc2_.isActive(SystemTimerManager.sysBJDate)) || Boolean(_loc3_.isActive(SystemTimerManager.sysBJDate)) || Boolean(_loc4_.isActive(SystemTimerManager.sysBJDate));
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         var _loc2_:OgreModel = null;
         var _loc3_:Array = null;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc7_:Point = null;
         var _loc8_:OgreModel = null;
         if(_model != null)
         {
            for each(_loc2_ in _model)
            {
               _loc2_.removeEventListener(MouseEvent.CLICK,onOgreClick);
               _loc2_.destroy();
               _loc2_ = null;
            }
         }
         _model = null;
         if(isInActivityTime)
         {
            OgreController.isShow = false;
            _loc3_ = OgreXMLInfo.getOgreList(942).concat();
            _model = [];
            _loc4_ = uint(ogre[uint(Math.random() * ogre.length)]);
            OgreModel.isShow = true;
            _loc5_ = 0;
            while(_loc5_ < _loc3_.length)
            {
               _loc6_ = Math.floor(Math.random() * _loc3_.length);
               _loc7_ = _loc3_[_loc5_];
               (_loc8_ = new OgreModel(_loc5_ + 10000)).name = PetXMLInfo.getName(_loc4_);
               _loc8_.show(_loc4_,_loc7_);
               _loc8_.addEventListener(MouseEvent.CLICK,onOgreClick);
               _model.push(_loc8_);
               _loc5_++;
            }
            OgreModel.isShow = false;
         }
         else
         {
            OgreController.isShow = true;
         }
      }
      
      private static function onOgreClick(param1:MouseEvent) : void
      {
         _currentModel = param1.currentTarget as OgreModel;
         MainManager.actorModel.walkAction(_currentModel.pos);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
      }
      
      private static function onEnter(param1:RobotEvent) : void
      {
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         if(_currentModel != null)
         {
            if(Point.distance(MainManager.actorModel.pos,_currentModel.pos) < 20)
            {
               _loc2_ = uint(_currentModel.id);
               _loc3_ = uint(ogre.indexOf(_loc2_));
               SocketConnection.send(1022,86061748);
               FightManager.fightWithBoss(PetXMLInfo.getName(_loc2_),_loc3_);
            }
         }
      }
      
      private static function onMapDown(param1:MapEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
      }
      
      public static function start() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 32
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function destroy() : void
      {
         _map = null;
         if(_timer)
         {
            _timer.stop();
            _timer.removeEventListener(TimerEvent.TIMER,onTimer);
            _timer = null;
         }
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
         _timer == null;
      }
   }
}
