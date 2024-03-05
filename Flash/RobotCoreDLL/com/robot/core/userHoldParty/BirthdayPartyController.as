package com.robot.core.userHoldParty
{
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class BirthdayPartyController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _curBalloon:uint;
      
      private static var _balloonArr:Array = [];
      
      private static var _bloodArr:Array = [];
      
      private static var fairyIndex:Array;
      
      private static var fairyArr:Array;
      
      private static var pointArr:Array = [new Point(165,430),new Point(265,360),new Point(360,320),new Point(695,380),new Point(520,485)];
      
      private static var petDialogArr:Array = [NPC.GELIN,NPC.BULU,NPC.YOUYOU,NPC.XIETE,NPC.LUOXI];
      
      private static var petNameArr:Array = ["格林","布鲁","悠悠","邪特","洛西"];
      
      private static var _curStage:uint;
       
      
      public function BirthdayPartyController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:int = 0;
         while(_loc2_ < 10)
         {
            _balloonArr.push(_map.conLevel["balloon_" + _loc2_] as MovieClip);
            _bloodArr.push(_map.conLevel["blood_" + _loc2_] as MovieClip);
            _loc2_++;
         }
         AimatController.addEventListener(AimatEvent.PLAY_END,onHit);
         var _loc3_:int = 0;
         while(_loc3_ < 10)
         {
            (_balloonArr[_loc3_] as MovieClip).addEventListener(MouseEvent.MOUSE_OVER,onBallonOver);
            (_balloonArr[_loc3_] as MovieClip).addEventListener(MouseEvent.MOUSE_OUT,onBallonOut);
            (_balloonArr[_loc3_] as MovieClip).mouseChildren = false;
            _loc3_++;
         }
         SocketConnection.addCmdListener(CommandID.TERRY_BIRTHDAY_HIT_BALLOON,afterHit);
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         fairyArr = [];
         var _loc4_:int = 0;
         while(_loc4_ < 5)
         {
            fairyArr.push(_map.depthLevel["fairy_" + _loc4_]);
            _loc4_++;
         }
         DebugTrace.show("精灵列表：" + fairyArr);
         var _loc5_:int = 0;
         while(_loc5_ < 5)
         {
            (fairyArr[_loc5_] as MovieClip).visible = false;
            _loc5_++;
         }
         _curStage = 1;
         (_map.depthLevel["makeCakeTable"] as MovieClip).gotoAndStop(1);
         ToolTipManager.add(_map.depthLevel["makeCakeTable"],"美味蛋糕齐分享");
         (_map.depthLevel["makeCakeTable"] as MovieClip).buttonMode = true;
         (_map.depthLevel["makeCakeTable"] as MovieClip).addEventListener(MouseEvent.CLICK,onTableClick);
         onActivityTime(null);
      }
      
      private static function onBallonOut(param1:MouseEvent) : void
      {
         AimatController.close();
         DebugTrace.show("close");
      }
      
      private static function onBallonOver(param1:MouseEvent) : void
      {
         AimatController.start(0,false,false);
         DebugTrace.show("In");
      }
      
      private static function onActivityTime(param1:SocketEvent = null) : void
      {
         var _loc3_:int = 0;
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(_loc2_.hoursUTC + 8 == PartyMapManager.curHour)
         {
            SocketConnection.addCmdListener(CommandID.TERRY_BIRTHDAY_GET_BALLOON_HP,onInitShowBalloon);
            SocketConnection.send(CommandID.TERRY_BIRTHDAY_GET_BALLOON_HP);
            if(_loc2_.minutesUTC % 10 >= 1 && _loc2_.minutesUTC % 10 <= 5)
            {
               fairyIndex = [];
               fairyIndex[0] = Math.floor(Math.random() * 5);
               fairyIndex[1] = Math.floor(Math.random() * 5);
               while(fairyIndex[0] == fairyIndex[1])
               {
                  fairyIndex[1] = Math.floor(Math.random() * 5);
               }
               DebugTrace.show("出现的精灵：" + fairyIndex);
               _loc3_ = 0;
               while(_loc3_ < 5)
               {
                  if(_loc3_ == fairyIndex[0] || _loc3_ == fairyIndex[1])
                  {
                     (fairyArr[_loc3_] as MovieClip).visible = true;
                     (fairyArr[_loc3_] as MovieClip).buttonMode = true;
                     (fairyArr[_loc3_] as MovieClip).addEventListener(MouseEvent.CLICK,fightWithFairy);
                  }
                  else
                  {
                     (fairyArr[_loc3_] as MovieClip).visible = false;
                     (fairyArr[_loc3_] as MovieClip).buttonMode = false;
                  }
                  _loc3_++;
               }
            }
            if(_loc2_.minutesUTC < 30)
            {
               _curStage = 2;
               (_map.depthLevel["makeCakeTable"] as MovieClip).gotoAndStop(2);
               ToolTipManager.add(_map.depthLevel["makeCakeTable"],"制作蛋糕胚");
               (_map.depthLevel["makeCakeTable"] as MovieClip).buttonMode = true;
               (_map.depthLevel["makeCakeTable"] as MovieClip).addEventListener(MouseEvent.CLICK,onTableClick);
            }
            else if(_loc2_.minutesUTC <= 49 && _loc2_.minutesUTC >= 30)
            {
               _curStage = 3;
               (_map.depthLevel["makeCakeTable"] as MovieClip).gotoAndStop(3);
               ToolTipManager.add(_map.depthLevel["makeCakeTable"],"装饰蛋糕");
               (_map.depthLevel["makeCakeTable"] as MovieClip).buttonMode = true;
               (_map.depthLevel["makeCakeTable"] as MovieClip).addEventListener(MouseEvent.CLICK,onTableClick);
            }
            else if(_loc2_.minutesUTC <= 59 && _loc2_.minutesUTC >= 50)
            {
               _curStage = 1;
               (_map.depthLevel["makeCakeTable"] as MovieClip).gotoAndStop(1);
               ToolTipManager.add(_map.depthLevel["makeCakeTable"],"美味蛋糕齐分享");
               (_map.depthLevel["makeCakeTable"] as MovieClip).buttonMode = true;
               (_map.depthLevel["makeCakeTable"] as MovieClip).addEventListener(MouseEvent.CLICK,onTableClick);
            }
         }
         else
         {
            MapManager.changeMap(7);
         }
      }
      
      private static function onInitShowBalloon(param1:SocketEvent) : void
      {
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:Array = [];
         _loc3_[0] = _loc2_.readByte();
         _loc3_[1] = _loc2_.readByte();
         _loc3_[2] = _loc2_.readByte();
         _loc3_[3] = _loc2_.readByte();
         _loc3_[4] = _loc2_.readByte();
         _loc3_[5] = _loc2_.readByte();
         _loc3_[6] = _loc2_.readByte();
         _loc3_[7] = _loc2_.readByte();
         _loc3_[8] = _loc2_.readByte();
         _loc3_[9] = _loc2_.readByte();
         DebugTrace.show("当前血量：" + _loc3_);
         if(_loc3_[0] == 5 && _loc3_[1] == 5 && _loc3_[2] == 5 && _loc3_[3] == 5 && _loc3_[4] == 5 && _loc3_[5] == 5 && _loc3_[6] == 5 && _loc3_[7] == 5 && _loc3_[8] == 5 && _loc3_[9] == 5)
         {
            _loc4_ = 0;
            while(_loc4_ < 10)
            {
               _balloonArr[_loc4_].visible = true;
               _balloonArr[_loc4_].gotoAndStop(1);
               _bloodArr[_loc4_].visible = false;
               _loc4_++;
            }
         }
         else
         {
            _loc5_ = 0;
            while(_loc5_ < 10)
            {
               if(_loc3_[_loc5_] == 0)
               {
                  _balloonArr[_loc5_].visible = false;
                  _bloodArr[_loc5_].visible = false;
               }
               else
               {
                  _balloonArr[_loc5_].visible = true;
                  _balloonArr[_loc5_].gotoAndStop(1);
                  _bloodArr[_loc5_].visible = true;
                  _bloodArr[_loc5_].gotoAndStop(6 - _loc3_[_loc5_]);
               }
               _loc5_++;
            }
         }
      }
      
      private static function onHit(param1:AimatEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc2_:AimatInfo = param1.info;
         if(_loc2_.userID == MainManager.actorID)
         {
            _loc3_ = 0;
            while(_loc3_ < 10)
            {
               if(_balloonArr[_loc3_].hitTestPoint(param1.info.endPos.x,param1.info.endPos.y,true))
               {
                  _curBalloon = _loc3_;
                  _balloonArr[_curBalloon].visible = true;
                  _balloonArr[_curBalloon].gotoAndStop(1);
                  _bloodArr[_curBalloon].visible = true;
                  SocketConnection.send(CommandID.TERRY_BIRTHDAY_HIT_BALLOON,_curBalloon);
                  break;
               }
               _loc3_++;
            }
         }
      }
      
      private static function afterHit(param1:SocketEvent) : void
      {
         var balloonIndex:uint = 0;
         var e:SocketEvent = param1;
         var data:ByteArray = e.data as ByteArray;
         var hpNum:uint = uint(data.readByte());
         var itemID:uint = data.readUnsignedInt();
         balloonIndex = data.readUnsignedInt();
         DebugTrace.show("射击后的血量：" + hpNum + ".物品ID：" + itemID + "---气球序号：" + balloonIndex);
         if(itemID == 0)
         {
            if(hpNum == 0)
            {
               if((_balloonArr[balloonIndex] as MovieClip).visible == true && (_balloonArr[balloonIndex] as MovieClip).currentFrame == 1)
               {
                  AnimateManager.playMcAnimate(_balloonArr[balloonIndex],2,"blast",function():void
                  {
                     _balloonArr[balloonIndex].visible = false;
                     _bloodArr[balloonIndex].visible = false;
                     SocketConnection.addCmdListener(CommandID.TERRY_BIRTHDAY_GET_BALLOON_HP,onInitShowBalloon);
                     SocketConnection.send(CommandID.TERRY_BIRTHDAY_GET_BALLOON_HP);
                  });
               }
            }
            else
            {
               _balloonArr[balloonIndex].visible = true;
               _balloonArr[balloonIndex].gotoAndStop(1);
               _bloodArr[balloonIndex].visible = true;
               _bloodArr[balloonIndex].gotoAndStop(6 - hpNum);
               SocketConnection.addCmdListener(CommandID.TERRY_BIRTHDAY_GET_BALLOON_HP,onInitShowBalloon);
               SocketConnection.send(CommandID.TERRY_BIRTHDAY_GET_BALLOON_HP);
            }
         }
         else
         {
            _balloonArr[balloonIndex].visible = false;
            _bloodArr[balloonIndex].visible = false;
            if(itemID == 600023)
            {
               ItemInBagAlert.show(itemID,"恭喜你获得了1个" + ItemXMLInfo.getName(itemID) + "。投掷" + ItemXMLInfo.getName(itemID) + "会产生礼花效果哦！",function():void
               {
                  SocketConnection.addCmdListener(CommandID.TERRY_BIRTHDAY_GET_BALLOON_HP,onInitShowBalloon);
                  SocketConnection.send(CommandID.TERRY_BIRTHDAY_GET_BALLOON_HP);
               });
            }
            else
            {
               ItemInBagAlert.show(itemID,"1个" + ItemXMLInfo.getName(itemID) + "已经放入你的储存箱！",function():void
               {
                  SocketConnection.addCmdListener(CommandID.TERRY_BIRTHDAY_GET_BALLOON_HP,onInitShowBalloon);
                  SocketConnection.send(CommandID.TERRY_BIRTHDAY_GET_BALLOON_HP);
               });
            }
         }
      }
      
      private static function fightWithFairy(param1:MouseEvent) : void
      {
         var region:int = 0;
         var e:MouseEvent = param1;
         var str:MovieClip = e.currentTarget as MovieClip;
         region = int(str.name.split("_")[1]);
         MainManager.actorModel.moveAndAction(pointArr[region],function():void
         {
            NpcDialog.show(petDialogArr[region],["好热闹啊，哈哈！你也是来参加生日派对的吗？"],null,null,false,function():void
            {
               SocketConnection.send(CommandID.USER_PARTY_FIGHT_WITH_BOSS,region + 1);
            });
         });
      }
      
      private static function onTableClick(param1:MouseEvent) : void
      {
         switch(_curStage)
         {
            case 1:
               ModuleManager.showModule(ClientConfig.getFestivalModule("userHoldParty/TerryBirthdayPartyCakeSharing"),"正在打开面板……");
               break;
            case 2:
               ModuleManager.showModule(ClientConfig.getFestivalModule("userHoldParty/TerryBirthdayPartyMakeCake"),"正在打开面板……");
               break;
            case 3:
               ModuleManager.showModule(ClientConfig.getFestivalModule("userHoldParty/TerryBirthdayPartyCakeMakeup"),"正在打开面板……");
         }
      }
      
      public static function destroy() : void
      {
         _curBalloon = 0;
         _balloonArr = [];
         _bloodArr = [];
         _map = null;
         AimatController.removeEventListener(AimatEvent.PLAY_END,onHit);
         SocketConnection.removeCmdListener(CommandID.TERRY_BIRTHDAY_GET_BALLOON_HP,onInitShowBalloon);
         SocketConnection.removeCmdListener(CommandID.TERRY_BIRTHDAY_HIT_BALLOON,afterHit);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
      }
   }
}
