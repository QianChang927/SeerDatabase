package com.robot.core.battleRoyale
{
   import com.robot.core.CommandID;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class AmplifierController
   {
      
      private static const POSITION_ARR:Array = [[117,163],[427,187],[662,402],[342,407]];
      
      private static var _effectClass:Class;
      
      private static var _effectMC:MovieClip;
      
      private static var _userID:int;
      
      private static var _mc:MovieClip;
      
      private static var _count:uint;
      
      private static var _delay:uint;
       
      
      public function AmplifierController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         _mc = param1;
         _mc.buttonMode = true;
         _mc.addEventListener(MouseEvent.CLICK,onMCClick);
         _effectClass = MapManager.currentMap.libManager.getClass("Amplifier_Effect");
         SocketConnection.addCmdListener(CommandID.BATTLEROYALE_OWNAMPLIFIER,onGain);
         SocketConnection.addCmdListener(CommandID.BATTLEROYALE_APPEARAMPLIFIER,onAppear);
      }
      
      private static function onGain(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var userID:uint;
         var lastTime:uint;
         var nickName:String = null;
         var mode:BasePeoleModel = null;
         var e:SocketEvent = param1;
         DisplayUtil.removeForParent(_mc);
         data = e.data as ByteArray;
         userID = data.readUnsignedInt();
         lastTime = data.readUnsignedInt();
         if(BattleFightManager.userMap.containsKey(userID))
         {
            nickName = String(BattleFightManager.userMap.getValue(userID).nickName);
            SimpleAlarm.show(nickName + "获得了能量增幅器",true);
            _effectMC = MovieClip(new _effectClass());
            if(BattleFightManager.modeMap.containsKey(_userID))
            {
               noramlMode(BattleFightManager.modeMap.getValue(_userID));
            }
            noramlMode(_userID);
            _userID = userID;
            bigMode(_userID);
            mode = BattleFightManager.modeMap.getValue(userID);
            mode.addChildAt(_effectMC,0);
            _delay = setTimeout(function():void
            {
               if(_effectMC)
               {
                  DisplayUtil.removeForParent(_effectMC,false);
               }
               noramlMode(_userID);
               clearTimeout(_delay);
            },lastTime * 1000);
         }
      }
      
      private static function bigMode(param1:int) : void
      {
         var _loc2_:BasePeoleModel = null;
         if(BattleFightManager.modeMap.containsKey(_userID))
         {
            _loc2_ = BattleFightManager.modeMap.getValue(_userID);
            if(Boolean(_loc2_) && Boolean(_loc2_.skeleton))
            {
               _loc2_.skeleton.getSkeletonMC().scaleX = _loc2_.skeleton.getSkeletonMC().scaleY = 1.3;
            }
         }
      }
      
      private static function noramlMode(param1:int) : void
      {
         var _loc2_:BasePeoleModel = null;
         if(BattleFightManager.modeMap.containsKey(_userID))
         {
            _loc2_ = BattleFightManager.modeMap.getValue(_userID);
            if(Boolean(_loc2_) && Boolean(_loc2_.skeleton))
            {
               _loc2_.skeleton.getSkeletonMC().scaleX = _loc2_.skeleton.getSkeletonMC().scaleY = 1;
            }
         }
      }
      
      private static function onAppear(param1:SocketEvent) : void
      {
         if(MapManager.currentMap)
         {
            _mc.x = POSITION_ARR[++_count % 4][0];
            _mc.y = POSITION_ARR[_count % 4][1];
            MapManager.currentMap.controlLevel.addChildAt(_mc,0);
         }
      }
      
      private static function onMCClick(param1:MouseEvent) : void
      {
         var point:Point = null;
         var e:MouseEvent = param1;
         point = new Point(e.currentTarget.x,e.currentTarget.y);
         MainManager.actorModel.walkAction(point);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,function():void
         {
            if(Point.distance(point,MainManager.actorModel.pos) < 20)
            {
               MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,arguments.callee);
               SocketConnection.send(CommandID.BATTLEROYALE_PICKAMPLIFIER);
            }
         });
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.BATTLEROYALE_OWNAMPLIFIER,onGain);
         SocketConnection.removeCmdListener(CommandID.BATTLEROYALE_APPEARAMPLIFIER,onAppear);
         if(_effectMC)
         {
            DisplayUtil.removeForParent(_effectMC);
         }
         noramlMode(_userID);
         clearTimeout(_delay);
      }
   }
}
