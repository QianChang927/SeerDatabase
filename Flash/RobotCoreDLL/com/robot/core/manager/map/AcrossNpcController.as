package com.robot.core.manager.map
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.AcrossNpcXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class AcrossNpcController
   {
      
      public static var mapId:uint;
      
      public static var gameId:uint;
      
      public static var isFresh:Boolean;
      
      public static var isComplete:Boolean;
      
      public static var leftTime:uint;
      
      private static var _timer:Timer;
      
      private static var _acrossNpc:MovieClip;
      
      public static var _map:BaseMapProcess;
      
      private static var _ur:String = "";
      
      private static var gameMapId:Array = [102,102,14,503,108,405,433,108];
       
      
      public function AcrossNpcController()
      {
         super();
      }
      
      public static function npcState() : void
      {
         SocketConnection.addCmdListener(CommandID.ACROSSNPC_STATE,onStateHandler);
         SocketConnection.send(CommandID.ACROSSNPC_STATE);
      }
      
      private static function onStateHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ACROSSNPC_STATE,onStateHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         mapId = _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 0)
         {
            isFresh = false;
         }
         else
         {
            isFresh = true;
         }
         var _loc4_:uint;
         if((_loc4_ = _loc2_.readUnsignedInt()) == 0)
         {
            isComplete = false;
         }
         else
         {
            isComplete = true;
         }
         leftTime = _loc2_.readUnsignedInt();
         countDwon(leftTime);
         checkMapId();
      }
      
      private static function checkMapId() : void
      {
         AcrossNpcXMLInfo.getActivityState(mapId,function(param1:uint):void
         {
            var planetId:uint = 0;
            var num:uint = param1;
            if(num == 1)
            {
               AcrossNpcXMLInfo.getPlanetId(mapId,function(param1:uint):void
               {
                  var num1:uint = param1;
                  planetId = num1;
                  planetId += 1;
                  AcrossNpcXMLInfo.getMapId(mapId,function(param1:uint):void
                  {
                     mapId = param1;
                     checkMapId();
                  });
               });
            }
         });
      }
      
      private static function countDwon(param1:uint) : void
      {
         _timer = new Timer(1000,param1);
         _timer.start();
         _timer.addEventListener(TimerEvent.TIMER_COMPLETE,onTimerComplete);
      }
      
      private static function onTimerComplete(param1:TimerEvent) : void
      {
         _timer.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimerComplete);
         hideAcrossNpc();
         npcState2();
      }
      
      public static function npcState2() : void
      {
         if(MapManager.currentMap)
         {
            if(MapManager.currentMap.id == MainManager.actorInfo.userID)
            {
               countDwon(1800);
            }
            else
            {
               SocketConnection.addCmdListener(CommandID.ACROSSNPC_STATE,onStateHandler);
               SocketConnection.send(CommandID.ACROSSNPC_STATE);
            }
         }
      }
      
      public static function showNpc(param1:BaseMapProcess) : void
      {
         _map = param1;
         _ur = ClientConfig.getResPath("newNpc/multi/119.swf");
         ResourceManager.getResource(_ur,onNpcHandler,"npc");
      }
      
      private static function onNpcHandler(param1:DisplayObject) : void
      {
         var o:DisplayObject = param1;
         _acrossNpc = o as MovieClip;
         AcrossNpcXMLInfo.getDefaultPos(mapId,function(param1:Point):void
         {
            var _loc2_:Point = param1;
            _acrossNpc.visible = true;
            _acrossNpc.buttonMode = true;
            _acrossNpc.x = _loc2_.x;
            _acrossNpc.y = _loc2_.y;
            _map.depthLevel.addChild(_acrossNpc);
            _acrossNpc.addEventListener(MouseEvent.CLICK,onNpcClick);
         });
      }
      
      private static function hideAcrossNpc() : void
      {
         if(_acrossNpc)
         {
            _acrossNpc.visible = false;
         }
      }
      
      private static function onNpcClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,247);
         SocketConnection.addCmdListener(CommandID.ACROSSNPC_GAME,onGameHandler);
         SocketConnection.send(CommandID.ACROSSNPC_GAME);
      }
      
      private static function onGameHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ACROSSNPC_GAME,onGameHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         gameId = _loc2_.readUnsignedInt();
         talk();
      }
      
      private static function talk() : void
      {
         var strList:Array = null;
         strList = ["哈哈，我很看好你哦！现在的你还需要更多的练习，可以去精灵太空站参加精灵大乱斗试试噢！这些礼物是我的见面礼，希望看到你的成长！","看起来很强嘛，不错不错。可以去精灵太空站参加精灵王之战试试自己的实力哦！在那里你会遇到各种强劲的对手！这些礼物是我的见面礼，希望看到你的成长！","最强的挑战来自于你自己，去空间裂缝参加镜像挑战挑战自己吧！这些礼物是我的见面礼，相信你会有很大的提高！","只有不断接受挑战，才能成为强大的精灵训练师！快去精灵太空站的训练师之门看看吧，在那里你将面对各系精灵的挑战。这些礼物是我的见面礼，希望看到你的成长！","真正的勇者应该接受勇者之塔的考验。出发吧，年轻的赛尔！以最大的勇气去挑战精灵太空站中的勇者之塔！这些礼物是我的见面礼，希望看到你的成长！","你能接受命运的考验吗？精灵太空站中的命运之轮，一个变幻莫测的地方，你永远不知道下一刻将会发生什么。这些礼物是我送给那些敢于接受考验的勇者的。你愿意前往并接受考验吗？","看来你已经具备了非常不错的实力。但是精灵太空站中的巅峰之战才是最强精灵训练师的舞台。你准备好接受来自其它赛尔的挑战了吗？这些礼物是我的见面礼，你一定能成为一个非常出色的精灵训练师！","你精灵似乎还需要更多的锻炼哦！快去精灵太空站的试炼之塔看看吧。这些礼物是我的见面礼，相信你的精灵可以快速成长起来哦！"];
         AcrossNpcXMLInfo.getName(mapId,function(param1:String):void
         {
            var str:String = param1;
            NpcDialog.show(NPC.KENGTE,["你好啊！我是贾斯汀站长的助手——星际特派员肯特，现在奉命正在" + str + "搜集最新的星球信息。"],["我也想为赛尔号出一份力！"],[function():void
            {
               NpcDialog.show(NPC.KENGTE,[strList[gameId - 1]],["好的，我马上就去。","等等，我再考虑下。"],[function():void
               {
                  SocketConnection.addCmdListener(CommandID.ACROSSNPC_AWARD,onAwardHandler);
                  SocketConnection.send(CommandID.ACROSSNPC_AWARD);
               }]);
            }]);
         });
      }
      
      private static function onAwardHandler(param1:SocketEvent) : void
      {
         var event:SocketEvent = param1;
         isComplete = true;
         SocketConnection.removeCmdListener(CommandID.ACROSSNPC_AWARD,onAwardHandler);
         MainManager.actorInfo.coins += 1000;
         hideAcrossNpc();
         Alarm.show("获得1000赛尔豆、2000经验值！",function():void
         {
            MapManager.changeMap(gameMapId[gameId - 1]);
         });
         showArrow();
      }
      
      public static function showArrow() : void
      {
         var arrowP:Array = null;
         arrowP = [[296,323,135],[756,192,135],[620,145,315],[485,309,180],[523,199,135],[620,152,135],[166,120,135],[518,236,315]];
         if(MapManager.currentMap.id == gameMapId[gameId - 1])
         {
            CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
            CommonUI.addYellowArrow(MapManager.currentMap.topLevel,arrowP[gameId - 1][0],arrowP[gameId - 1][1],arrowP[gameId - 1][2]);
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_DESTROY,arguments.callee);
            if(MapManager.currentMap.id == gameMapId[gameId - 1])
            {
               CommonUI.addYellowArrow(MapManager.currentMap.topLevel,arrowP[gameId - 1][0],arrowP[gameId - 1][1],arrowP[gameId - 1][2]);
            }
         });
      }
   }
}
