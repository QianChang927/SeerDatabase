package com.robot.app.sptGalaxy
{
   import com.robot.app.mapProcess.MapProcess_403;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   
   public class QingLongController
   {
      
      private static var _door:MovieClip;
      
      private static var _mapIndex:int;
      
      private static var _spt:Array = [312,314,315,316];
      
      private static var _map:Array = [57,60,325,328,338];
      
      private static var _pos:Array = [[380,420],[470,200],[420,420],[450,400],[520,420]];
       
      
      public function QingLongController()
      {
         super();
      }
      
      public static function setup() : void
      {
         _mapIndex = int(Math.random() * _map.length);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapOpenHandler);
      }
      
      private static function onMapOpenHandler(param1:MapEvent) : void
      {
         var event:MapEvent = param1;
         if(event.mapModel.id == _map[_mapIndex])
         {
            if(SystemTimerManager.sysDate.getMinutes() >= 20 && SystemTimerManager.sysDate.getMinutes() < 30)
            {
               ResourceManager.getResource(ClientConfig.getAppRes("GuardBeastPortal"),function(param1:DisplayObject):void
               {
                  _door = param1 as MovieClip;
                  _door.x = _pos[_mapIndex][0];
                  _door.y = _pos[_mapIndex][1];
                  _door.buttonMode = true;
                  _door["mc"].gotoAndStop(1);
                  _door.addEventListener(MouseEvent.CLICK,onDoorClick);
                  ToolTipManager.add(_door,"青龙空间传送阵");
                  MapManager.currentMap.controlLevel.addChild(_door);
               },"SptGalaxyDoor_UI");
            }
         }
      }
      
      private static function onDoorClick(param1:MouseEvent) : void
      {
         MainManager.actorModel.walkAction(new Point(_door.x,_door.y));
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnterFrame);
      }
      
      private static function onWalkEnterFrame(param1:RobotEvent) : void
      {
         if(Point.distance(MainManager.actorModel.pos,new Point(_door.x,_door.y)) < 10)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnterFrame);
            MainManager.actorModel.stop();
            check();
         }
      }
      
      public static function check(param1:Boolean = false) : void
      {
         var b:Boolean = param1;
         if(b)
         {
            enter();
         }
         else
         {
            SocketConnection.addCmdListener(CommandID.QINGLONG_CHECK_QINGLONGZHIDALING,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.QINGLONG_CHECK_QINGLONGZHIDALING,arguments.callee);
               var _loc3_:ByteArray = param1.data as ByteArray;
               var _loc4_:Boolean;
               if(_loc4_ = Boolean(_loc3_.readUnsignedInt()))
               {
                  enter();
               }
               else if(isReady())
               {
                  enter();
               }
               else
               {
                  NpcDialog.show(NPC.KONGJIANSHIZHE,["我是空间使者，青龙空间是卡兰星系最神秘的地方，你只有战胜了0xff0000奈尼芬多、塔西亚、塔克林0xffffff和0xff0000厄尔塞拉0xffffff，我才会让你进去。"],["我还是下次再来吧。"]);
               }
            });
            SocketConnection.send(CommandID.QINGLONG_CHECK_QINGLONGZHIDALING);
         }
      }
      
      private static function enter() : void
      {
         NpcDialog.show(NPC.KONGJIANSHIZHE,["我是空间使者，青龙空间是卡兰星系最神秘的地方，你已具备了进入空间的实力，我现在可以让你传送过去。"],["我决定进去一探究竟。","我还是下次再来吧。"],[function():void
         {
            if(_door)
            {
               AnimateManager.playMcAnimate(_door,1,"mc",function():void
               {
                  MapProcess_403.qingLongStatus = 0;
                  MapManager.changeMap(403);
               });
            }
            else
            {
               MapProcess_403.qingLongStatus = 0;
               MapManager.changeMap(403);
            }
         }]);
      }
      
      private static function isReady() : Boolean
      {
         var _loc1_:int = int(_spt.length);
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_)
         {
            if(TasksManager.getTaskStatus(_spt[_loc2_]) != TasksManager.COMPLETE)
            {
               return false;
            }
            _loc2_++;
         }
         return true;
      }
      
      private static function onMapDestroyHandler(param1:MapEvent) : void
      {
         if(_door != null)
         {
            _door.removeEventListener(MouseEvent.CLICK,onDoorClick);
            ToolTipManager.remove(_door);
            _door = null;
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnterFrame);
         }
      }
   }
}
