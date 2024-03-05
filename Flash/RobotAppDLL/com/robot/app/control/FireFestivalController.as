package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   
   public class FireFestivalController
   {
      
      private static var map:BaseMapProcess;
      
      private static var curnpc;
      
      private static var points:Array = ["400,470","685,260","240,360","640,420","780,400","855,370","480,470","700,380"];
      
      private static var mapids:Array = [1003,1170,1240,1241,1248,1251,1281,1307];
      
      private static var index:int = -1;
       
      
      public function FireFestivalController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         map = param1;
         loadres();
      }
      
      private static function clickHandle(param1:MouseEvent) : void
      {
         curnpc = param1.currentTarget;
         MainManager.actorModel.stop();
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnter);
         var _loc2_:Point = new Point();
         _loc2_ = MainManager.actorModel.parent.globalToLocal(curnpc.localToGlobal(new Point(0,0)));
         MainManager.actorModel.walkAction(_loc2_,false);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnter);
      }
      
      private static function loadres() : void
      {
         ResourceManager.getResource(ClientConfig.getResPath("forApp/mapobj/fire.swf"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            KTool.getMultiValue([104456,16885],function(param1:Array):void
            {
               var _loc2_:* = param1[0] & 15;
               var _loc3_:int = int(MapManager.currentMap.id);
               var _loc4_:int = mapids.indexOf(_loc3_);
               mc.x = int(points[_loc4_].split(",")[0]);
               mc.y = int(points[_loc4_].split(",")[1]);
               index = _loc4_ + 1 == (param1[1] & 15) ? 1 : (_loc4_ + 1 == (param1[1] >> 4 & 15) ? 2 : (_loc4_ + 1 == (param1[1] >> 8 & 15) ? 3 : (_loc4_ + 1 == (param1[1] >> 12 & 15) ? 4 : 0)));
               if(index != 0)
               {
                  mc.name = "firemc";
                  if(_loc2_ >= 8 || KTool.getBit(param1[1],16 + index) == 1)
                  {
                     mc.gotoAndStop(2);
                  }
                  else
                  {
                     mc.gotoAndStop(1);
                     mc.addEventListener(MouseEvent.CLICK,clickHandle);
                  }
                  map.conLevel.addChild(mc);
               }
               else if(_loc4_ != -1)
               {
                  mc.name = "firemc";
                  mc.gotoAndStop(2);
                  map.conLevel.addChild(mc);
               }
            });
         });
      }
      
      private static function onWalkEnter(param1:RobotEvent) : void
      {
         var evt:RobotEvent = param1;
         var point:Point = new Point();
         point = MainManager.actorModel.parent.globalToLocal(curnpc.localToGlobal(new Point(0,0)));
         if(curnpc && Point.distance(point,MainManager.actorModel.pos) < 60)
         {
            MainManager.actorModel.stop();
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnter);
            SocketConnection.sendByQueue(43299,[10,index + 1],function(param1:*):void
            {
               var child:DisplayObject;
               var e:* = param1;
               Alarm.show("你小心地点燃了火盆，看起来还可以燃烧很久。",function():void
               {
                  ModuleManager.showAppModule("FireFestivalEyeAchievementPanel");
               });
               child = map.conLevel.getChildByName("firemc");
               if(child)
               {
                  (child as MovieClip).gotoAndStop(2);
                  MovieClip(child).mouseChildren = MovieClip(child).mouseEnabled = false;
               }
            });
         }
      }
      
      public static function destroy() : void
      {
         var _loc1_:DisplayObject = map.conLevel.getChildByName("firemc");
         if(_loc1_)
         {
            _loc1_.removeEventListener(MouseEvent.CLICK,clickHandle);
            _loc1_.parent.removeChild(_loc1_);
            _loc1_ = null;
         }
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnter);
      }
   }
}
