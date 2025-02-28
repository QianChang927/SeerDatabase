package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class HalloweenActivityController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const POSITIONS:Array = [[504,250],[412,352],[542,425]];
      
      private static var id:uint;
      
      private static var currentPos:Point;
       
      
      public function HalloweenActivityController()
      {
         super();
      }
      
      private static function get taskDone() : Boolean
      {
         return TasksManager.getTaskStatus(1815) == TasksManager.COMPLETE;
      }
      
      private static function ref() : void
      {
         ItemManager.upDateCollection(1700197,function():void
         {
            var _loc1_:uint = uint(ItemManager.getNumByID(1700197));
            if(_loc1_ >= 8)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("HalloweenFightingPanel"));
            }
         });
      }
      
      private static function set taskDone(param1:Boolean) : void
      {
         var value:Boolean = param1;
         if(value)
         {
            TasksManager.accept(1815,function():void
            {
               TasksManager.complete(1815,0,function():void
               {
                  TasksManager.setTaskStatus(1815,TasksManager.COMPLETE);
                  ModuleManager.showModule(ClientConfig.getAppModule("HalloweenFightingPanel"));
                  KTool.showMapAllPlayerAndMonster();
                  _map.depthLevel.visible = true;
                  SocketConnection.send(1022,86063784);
                  init(_map);
               });
            });
         }
      }
      
      private static function onClickTaskMc(param1:MouseEvent) : void
      {
         /*
          * Decompilation error
          * Timeout (1 minute) was reached
          * Instruction count: 41
          */
         throw new flash.errors.IllegalOperationError("Not decompiled due to timeout");
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var GuiHuo:Class = null;
         var i:uint = 0;
         var mc:MovieClip = null;
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskDone)
         {
            GuiHuo = MapManager.currentMap.libManager.getClass("guihuo");
            i = 0;
            while(i < 3)
            {
               mc = new GuiHuo();
               mc.buttonMode = true;
               mc.name = "guihuo" + i;
               mc.x = POSITIONS[i][0] + Math.random() * 20 - 10;
               mc.y = POSITIONS[i][1] + Math.random() * 20 - 10;
               mc.addEventListener(MouseEvent.CLICK,onClickGuiHuo);
               _map.conLevel.addChild(mc);
               i++;
            }
            MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_787_0"),function(param1:MovieClip):void
            {
               param1.x = 28;
               param1.y = 35;
               param1.name = "taskMc";
               param1.buttonMode = true;
               _map.conLevel.addChild(param1);
               CommonUI.addYellowExcal(_map.topLevel,633,220);
               param1.addEventListener(MouseEvent.CLICK,onClickTaskMc);
            });
         }
      }
      
      private static function onMapDown(param1:MapEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
      }
      
      private static function setVisible(param1:Boolean) : void
      {
         var _loc4_:* = undefined;
         clearTimeout(id);
         var _loc3_:uint = 0;
         while(_loc3_ < 3)
         {
            if(_loc4_ = _map.conLevel.getChildByName("guihuo" + _loc3_))
            {
               _loc4_.visible = param1;
            }
            _loc3_++;
         }
         id = setTimeout(arguments.callee,60 * 1000,true);
      }
      
      private static function onClickGuiHuo(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         currentPos = new Point(_loc2_.x,_loc2_.y);
         MainManager.actorModel.walkAction(currentPos);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
      }
      
      private static function onEnter(param1:RobotEvent) : void
      {
         var e:RobotEvent = param1;
         if(Point.distance(MainManager.actorModel.pos,currentPos) < 20)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
            SocketConnection.sendWithCallback(4548,function(param1:SocketEvent):void
            {
               setVisible(false);
               var _loc2_:ByteArray = param1.data as ByteArray;
               var _loc3_:uint = _loc2_.readUnsignedInt();
               if(_loc3_ == 1)
               {
                  SocketConnection.send(1022,86063786);
                  ref();
               }
               else
               {
                  Alarm.show("很遗憾你没有收集成功，1分钟幽冥鬼火会再次出现，把握机会哦！");
               }
            },42,0);
         }
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            _map = null;
         }
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
      }
      
      private function onMapDown(param1:MapEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
      }
   }
}
