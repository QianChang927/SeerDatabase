package com.robot.app.control
{
   import com.robot.app.mapProcess.SpaceArena;
   import com.robot.app.panel.FightMatchingPanel;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.MapType;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.UserState;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SpaceArenaController
   {
      
      private static var start:AppModel;
      
      private static var choice:AppModel;
      
      public static var pet:Array = [];
      
      public static var time:Array = [];
      
      public static var stopSwitch_enter:Boolean;
      
      public static var stopSwitch_leave:Boolean;
      
      public static var num_0:int = 0;
      
      public static var num_1:int = 0;
      
      public static var round:int = 0;
      
      public static var pet_0:Array;
      
      public static var pet_1:Array;
      
      private static var signature:ByteArray;
      
      public static var stutas:String;
      
      public static const ROOM_TO_ROOM:String = "RoomToRoom";
      
      public static var isBoss:int;
      
      public static var isEnd:Boolean = false;
      
      public static var isWin:Boolean;
      
      public static var resultPoint:int;
      
      public static var isThis:Boolean = false;
       
      
      public function SpaceArenaController()
      {
         super();
      }
      
      public static function show() : void
      {
         initStart();
      }
      
      private static function initStart() : void
      {
         if(!start)
         {
            start = new AppModel(ClientConfig.getAppModule("SpaceArenaStartPanel"),"正在加载面板");
            start.setup();
         }
         start.show();
      }
      
      private static function hideStart() : void
      {
         if(start)
         {
            start.hide();
         }
      }
      
      private static function initChoice() : void
      {
         if(!choice)
         {
            choice = new AppModel(ClientConfig.getAppModule("SpaceArenaChoicePanel"),"正在加载面板");
            choice.setup();
         }
         choice.show();
      }
      
      private static function hideChoice() : void
      {
         if(choice)
         {
            choice.hide();
         }
      }
      
      public static function showChoice() : void
      {
         hideStart();
         initChoice();
      }
      
      public static function choiceComplete() : void
      {
         initStart();
         hideChoice();
      }
      
      public static function startFight() : void
      {
         register();
      }
      
      public static function close() : void
      {
         hideStart();
         hideChoice();
      }
      
      public static function checkPet() : Boolean
      {
         var _loc3_:int = 0;
         var _loc4_:Array = null;
         var _loc5_:PetListInfo = null;
         if(time.length != 3)
         {
            return false;
         }
         var _loc1_:int = 0;
         var _loc2_:Array = [false,false,false];
         for each(_loc3_ in time)
         {
            _loc4_ = PetManager.getBagMap();
            for each(_loc5_ in _loc4_)
            {
               if(_loc3_ == _loc5_.catchTime)
               {
                  _loc2_[_loc1_] = true;
               }
            }
            _loc1_++;
         }
         if(Boolean(_loc2_[0]) && Boolean(_loc2_[1]) && Boolean(_loc2_[2]))
         {
            return true;
         }
         return false;
      }
      
      private static function register() : void
      {
         SocketConnection.addCmdListener(CommandID.LEAVE_MAP,function(param1:SocketEvent):void
         {
            var _loc5_:uint = 0;
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:uint;
            if((_loc4_ = _loc3_.readUnsignedInt()) == MainManager.actorID)
            {
               SocketConnection.removeCmdListener(CommandID.LEAVE_MAP,arguments.callee);
               stopSwitch_enter = true;
               SocketConnection.addCmdListener(CommandID.ENTER_MAP,onEnterRoom_0);
               if(PetManager.showInfo)
               {
                  _loc5_ = uint(PetManager.showInfo.catchTime);
               }
               SocketConnection.send(CommandID.ROOM_LOGIN,_loc5_,MapType.SPACE_ARENA,MainManager.actorID,0,0);
            }
         });
         stopSwitch_leave = true;
         SocketConnection.send(CommandID.LEAVE_MAP);
      }
      
      private static function onEnterRoom_0(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 4;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == MainManager.actorID)
         {
            SocketConnection.removeCmdListener(CommandID.ENTER_MAP,onEnterRoom_0);
            startSpaceArena();
         }
      }
      
      private static function startSpaceArena() : void
      {
         isThis = true;
         PetFightModel.mode = PetFightModel.SINGLE_MODE;
         PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER;
         SocketConnection.addCmdListener(CommandID.SPACEARENA_SIGNUP,onSignUp);
         SocketConnection.addCmdListener(CommandID.SPACEARENA_CANCEL,onCancel);
         SocketConnection.addCmdListener(CommandID.SPACEARENA_READY,onReady);
         SocketConnection.addCmdListener(CommandID.SPACEARENA_SUCCESS,onSuccess);
         SocketConnection.addCmdListener(CommandID.SPACEARENA_END,onEnd);
         SocketConnection.addCmdListener(CommandID.SPACEARENA_ISFIGHTBOSS,onIsFightBoss);
         SocketConnection.addCmdListener(CommandID.SPACEARENA_READYFIGHTBOSS,onReadyFightBoss);
         SocketConnection.send(CommandID.SPACEARENA_SIGNUP,time[0],time[1],time[2]);
      }
      
      private static function onSignUp(param1:SocketEvent) : void
      {
         DebugTrace.show("========== SIGNUP ==========");
         close();
         FightMatchingPanel.show(onCloseClick);
      }
      
      private static function onCloseClick() : void
      {
         SocketConnection.send(CommandID.SPACEARENA_CANCEL);
      }
      
      private static function onCancel(param1:SocketEvent) : void
      {
         DebugTrace.show("========== CANCEL ==========");
         destroy();
         stopSwitch_leave = true;
         SocketConnection.addCmdListener(CommandID.LEAVE_MAP,onLeaveMap);
         SocketConnection.send(CommandID.LEAVE_MAP);
      }
      
      private static function onReady(param1:SocketEvent) : void
      {
         DebugTrace.show("========== READY ==========");
      }
      
      private static function onSuccess(param1:SocketEvent) : void
      {
         var _loc5_:int = 0;
         DebugTrace.show("========== SUCCESS ==========");
         FightMatchingPanel.hide();
         pet_0 = [];
         pet_1 = [];
         signature = new ByteArray();
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readBytes(signature,0,16);
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = int(_loc2_.readUnsignedInt());
         isBoss = _loc2_.readUnsignedInt();
         if((_loc5_ = int(_loc2_.readUnsignedInt())) == MainManager.actorID)
         {
            pet_0.push(_loc2_.readUnsignedInt());
            pet_0.push(_loc2_.readUnsignedInt());
            pet_0.push(_loc2_.readUnsignedInt());
         }
         else
         {
            pet_1.push(_loc2_.readUnsignedInt());
            pet_1.push(_loc2_.readUnsignedInt());
            pet_1.push(_loc2_.readUnsignedInt());
         }
         if((_loc5_ = int(_loc2_.readUnsignedInt())) == MainManager.actorID)
         {
            pet_0.push(_loc2_.readUnsignedInt());
            pet_0.push(_loc2_.readUnsignedInt());
            pet_0.push(_loc2_.readUnsignedInt());
         }
         else
         {
            pet_1.push(_loc2_.readUnsignedInt());
            pet_1.push(_loc2_.readUnsignedInt());
            pet_1.push(_loc2_.readUnsignedInt());
         }
         stutas = ROOM_TO_ROOM;
         MapManager.styleID = 700005;
         MapManager.changeMap(_loc4_,0,_loc3_);
      }
      
      private static function onEnd(param1:SocketEvent) : void
      {
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         isEnd = true;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = int(_loc2_.readUnsignedInt());
         var _loc5_:int = int(_loc2_.readUnsignedInt());
         var _loc9_:int = 0;
         while(_loc9_ < _loc5_)
         {
            _loc6_ = int(_loc2_.readUnsignedInt());
            _loc7_ = int(_loc2_.readUnsignedInt());
            _loc8_ = int(_loc2_.readUnsignedInt());
            if(_loc6_ == MainManager.actorID)
            {
               if(_loc4_ == MainManager.actorID)
               {
                  isWin = true;
               }
               else
               {
                  isWin = false;
               }
               resultPoint = _loc8_;
            }
            _loc9_++;
         }
         if(MainManager.actorState == UserState.MAP)
         {
            showAlarm(isWin,resultPoint);
         }
      }
      
      private static function onIsFightBoss(param1:SocketEvent) : void
      {
      }
      
      private static function onReadyFightBoss(param1:SocketEvent) : void
      {
      }
      
      public static function showAlarm(param1:Boolean, param2:int) : void
      {
         var b:Boolean = param1;
         var point:int = param2;
         ResourceManager.getResource(ClientConfig.getAppRes("StarTable"),function(param1:DisplayObject):void
         {
            var p:MovieClip = null;
            var mc:DisplayObject = param1;
            p = mc as MovieClip;
            LevelManager.appLevel.addChild(p);
            p.x = 322;
            p.y = 168;
            p["spaceArenaPoint"].text = "获得" + point + "星空等级！";
            if(b)
            {
               AnimateManager.playMcAnimate(p["win"]);
               p["lose"].gotoAndStop(1);
            }
            else
            {
               p["win"].gotoAndStop(1);
               AnimateManager.playMcAnimate(p["lose"]);
            }
            p["close"].addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               p["close"].removeEventListener(MouseEvent.CLICK,arguments.callee);
               DisplayUtil.removeForParent(p);
               p = null;
               levelRoom();
            });
         },"SpaceArenaAlertUI");
      }
      
      public static function readyForFight() : void
      {
         SocketConnection.send(CommandID.SPACEARENA_READY,signature);
      }
      
      public static function acceptFightBoss(param1:int) : void
      {
         SocketConnection.send(CommandID.SPACEARENA_ISFIGHTBOSS,param1);
      }
      
      public static function levelRoom() : void
      {
         SpaceArena.hasInit = false;
         num_0 = 0;
         num_1 = 0;
         round = 0;
         isBoss = 0;
         isEnd = false;
         isWin = false;
         resultPoint = 0;
         isThis = false;
         destroy();
         stutas = "";
         MapManager.changeMap(499);
      }
      
      private static function onLeaveMap(param1:SocketEvent) : void
      {
         var _loc4_:uint = 0;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == MainManager.actorID)
         {
            SocketConnection.removeCmdListener(CommandID.LEAVE_MAP,onLeaveMap);
            stopSwitch_enter = true;
            if(PetManager.showInfo)
            {
               _loc4_ = uint(PetManager.showInfo.catchTime);
            }
            SocketConnection.send(CommandID.LEAVE_ROOM,1,499,_loc4_,MainManager.actorInfo.changeShape,MainManager.actorInfo.actionType);
         }
      }
      
      private static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SPACEARENA_SIGNUP,onSignUp);
         SocketConnection.removeCmdListener(CommandID.SPACEARENA_CANCEL,onCancel);
         SocketConnection.removeCmdListener(CommandID.SPACEARENA_READY,onReady);
         SocketConnection.removeCmdListener(CommandID.SPACEARENA_SUCCESS,onSuccess);
         SocketConnection.removeCmdListener(CommandID.SPACEARENA_END,onEnd);
         SocketConnection.removeCmdListener(CommandID.SPACEARENA_ISFIGHTBOSS,onIsFightBoss);
         SocketConnection.removeCmdListener(CommandID.SPACEARENA_READYFIGHTBOSS,onReadyFightBoss);
      }
   }
}
