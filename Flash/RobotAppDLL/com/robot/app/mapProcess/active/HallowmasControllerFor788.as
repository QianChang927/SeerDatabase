package com.robot.app.mapProcess.active
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   
   public class HallowmasControllerFor788
   {
      
      private static var _map:BaseMapProcess;
      
      private static var pumpkin:MovieClip;
      
      private static const posiArray:Array = [new Point(65,295),new Point(170,285),new Point(250,250),new Point(320,200)];
      
      private static const goPoints:Array = [new Point(110,330),new Point(200,310),new Point(277,280),new Point(364,230)];
      
      private static var posiInfoArray:Array = [];
      
      private static var isNoticeLeaved:Boolean = false;
      
      private static var inPosi:Boolean;
       
      
      public function HallowmasControllerFor788()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var m:BaseMapProcess = param1;
         _map = m;
         var d:Date = SystemTimerManager.sysDate;
         pumpkin = m.conLevel["pumpkin"];
         pumpkin.mouseChildren = false;
         pumpkin.buttonMode = true;
         MapManager.currentMap.root.addEventListener(MouseEvent.CLICK,onClicked);
         if(d.hours >= 12 && d.hours < 15)
         {
            SocketConnection.addCmdListener(CommandID.GET_POSI_INFO,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.GET_POSI_INFO,arguments.callee);
               var _loc3_:ByteArray = param1.data as ByteArray;
               posiInfoArray = [];
               posiInfoArray.push(_loc3_.readUnsignedInt());
               posiInfoArray.push(_loc3_.readUnsignedInt());
               posiInfoArray.push(_loc3_.readUnsignedInt());
               posiInfoArray.push(_loc3_.readUnsignedInt());
               pumpkin.gotoAndStop(2 + crtPosi);
            });
            SocketConnection.send(CommandID.GET_POSI_INFO);
            SocketConnection.addCmdListener(CommandID.GET_IN_POSI,onGetPosi);
            SocketConnection.addCmdListener(CommandID.GET_OUT_POSI,onOutPosi);
            SocketConnection.addCmdListener(CommandID.ALL_LEAVE_POSI,onAllLeave);
            SocketConnection.addCmdListener(CommandID.GET_PRESENT,onGetPresent);
         }
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(pumpkin)
         {
            pumpkin.gotoAndStop(1);
         }
         pumpkin = null;
         SocketConnection.removeCmdListener(CommandID.GET_IN_POSI,onGetPosi);
         SocketConnection.removeCmdListener(CommandID.GET_OUT_POSI,onOutPosi);
         SocketConnection.removeCmdListener(CommandID.ALL_LEAVE_POSI,onAllLeave);
         SocketConnection.removeCmdListener(CommandID.GET_PRESENT,onGetPresent);
         MapManager.currentMap.root.removeEventListener(MouseEvent.CLICK,onClicked);
         _map = null;
         inPosi = false;
      }
      
      private static function onGetPosi(param1:SocketEvent) : void
      {
         var posi:int = 0;
         var by:ByteArray = null;
         var e:SocketEvent = param1;
         var b:ByteArray = e.data as ByteArray;
         var id:int = int(b.readUnsignedInt());
         posi = int(b.readUnsignedInt());
         posiInfoArray[posi] = id;
         if(id == MainManager.actorID)
         {
            inPosi = true;
            MainManager.actorModel.x = posiArray[posi].x;
            MainManager.actorModel.y = posiArray[posi].y;
            MainManager.actorModel.stopAutoWalk(true);
            by = new ByteArray();
            by.writeObject([]);
            SocketConnection.send(CommandID.PEOPLE_WALK,0,posiArray[posi].x,posiArray[posi].y,by.length,by);
            setTimeout(function():void
            {
               SocketConnection.send(CommandID.PEOPLE_WALK,0,posiArray[posi].x,posiArray[posi].y,by.length,by);
            },500);
         }
         pumpkin.gotoAndStop(2 + crtPosi);
      }
      
      private static function onOutPosi(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = int(_loc2_.readUnsignedInt());
         posiInfoArray[_loc4_] = 0;
         if(_loc3_ == MainManager.actorID)
         {
            inPosi = false;
         }
         pumpkin.gotoAndStop(2 + crtPosi);
      }
      
      private static function onAllLeave(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         setTimeout(function():void
         {
            var b:ByteArray = null;
            var id:int = 0;
            var randX:int = 0;
            var randY:int = 0;
            var by:ByteArray = null;
            var f:int = 0;
            var d:Date = null;
            if(!_map)
            {
               return;
            }
            if(!isNoticeLeaved)
            {
               isNoticeLeaved = true;
               b = e.data as ByteArray;
               posiInfoArray = [0,0,0,0];
               id = int(b.readUnsignedInt());
               pumpkin.gotoAndStop(2);
               randX = int(Math.random() * 100);
               randY = int(Math.random() * 50);
               MainManager.actorModel.x = 210 + randX;
               MainManager.actorModel.y = 365 + randY;
               by = new ByteArray();
               by.writeObject([]);
               SocketConnection.send(CommandID.PEOPLE_WALK,0,210 + randX,365 + randY,by.length,by);
               if(id == 0)
               {
                  f = 7;
               }
               else if(id == 1)
               {
                  f = 8;
               }
               if(pumpkin.currentFrame != f)
               {
                  AnimateManager.playMcAnimate(pumpkin,f,"mc",function():void
                  {
                     SocketConnection.send(CommandID.GET_PRESENT);
                     isNoticeLeaved = false;
                  });
               }
               d = SystemTimerManager.sysDate;
               if(!(d.hours >= 12 && d.hours < 15))
               {
                  destroy();
               }
               inPosi = false;
            }
         },2000);
      }
      
      private static function onGetPresent(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
      }
      
      private static function onClicked(param1:MouseEvent) : void
      {
         var name:String = null;
         var a:Array = null;
         var e:MouseEvent = param1;
         var goPosi:Function = function(param1:int):void
         {
            var i:int = param1;
            MainManager.actorModel.moveAndAction(goPoints[i],function():void
            {
               SocketConnection.send(CommandID.GET_IN_POSI,i);
            });
         };
         switch(e.target)
         {
            case pumpkin:
               if(SystemTimerManager.sysDate.hours < 12 || SystemTimerManager.sysDate.hours > 14)
               {
                  Alarm.show("每天12：00--15：00凑齐4个赛尔就可以获得惊喜！");
                  return;
               }
               SocketConnection.send(1022,86051730);
               if(inPosi)
               {
                  Alarm.show("你已经占领了一个位置,凑齐四位赛尔就能获得万圣特别礼物哦！");
               }
               else if(firstPosi == -1)
               {
                  Alarm.show("位置已经全部被占领了哦！");
               }
               else
               {
                  goPosi(firstPosi);
               }
               break;
            default:
               name = String(e.target.name);
               a = name.split("_");
               if(a[0] == "posi")
               {
                  if(SystemTimerManager.sysDate.hours < 12 || SystemTimerManager.sysDate.hours > 14)
                  {
                     Alarm.show("每天12：00--15：00凑齐4个赛尔就可以获得惊喜！");
                     return;
                  }
                  if(inPosi)
                  {
                     Alarm.show("你已经占领了一个位置，凑齐四位赛尔就能获得万圣特别礼物哦！");
                  }
                  else if(posiInfoArray[a[1]])
                  {
                     Alarm.show("这个位置已经被占领了！");
                  }
                  else
                  {
                     goPosi(a[1]);
                  }
               }
               else if(inPosi)
               {
                  SocketConnection.send(CommandID.GET_OUT_POSI);
               }
         }
      }
      
      private static function get crtPosi() : int
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         while(_loc2_ < posiInfoArray.length)
         {
            if(posiInfoArray[_loc2_])
            {
               _loc1_++;
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      private static function get firstPosi() : int
      {
         if(crtPosi == 4)
         {
            return -1;
         }
         var _loc1_:int = 0;
         while(_loc1_ < posiInfoArray.length)
         {
            if(posiInfoArray[_loc1_] == 0)
            {
               return _loc1_;
            }
            _loc1_++;
         }
         return -1;
      }
   }
}
