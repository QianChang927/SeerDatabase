package com.robot.core.userHoldParty
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.behavior.ChatBehavior;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import gs.TweenLite;
   import gs.easing.Back;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class FairyPartyController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const fairyIDArr:Array = [1103,471,560,618,480,576,62,108,91,756];
      
      private static const petNameArr:Array = ["卜卡","伊特","沃特","嘟拉","埃尔特","德普","格林","布鲁","悠悠","邪特"];
      
      private static const petDialogArr:Array = [NPC.BOKA,NPC.YITE,NPC.WOTE,NPC.DULA,NPC.AIERTE,NPC.DEPU,NPC.GELIN,NPC.BULU,NPC.YOUYOU,NPC.XIETE];
      
      private static var fairyMCArr:Array = [];
      
      private static var pointArr:Array = [new PetPartyPosition(0,new Point(480,320)),new PetPartyPosition(1,new Point(560,349)),new PetPartyPosition(2,new Point(581,451)),new PetPartyPosition(3,new Point(379,451)),new PetPartyPosition(4,new Point(400,352))];
      
      private static var bloodArr:Array = [];
      
      private static var bubbleArr:Array = [];
      
      private static var foodName:Array = ["夹心饼干","苏打饼干","曲奇饼干"];
      
      private static var foodBox:Array = [];
      
      public static var machineStatus:uint;
      
      public static var curCookie:uint;
      
      private static var timer:Timer;
      
      private static var times:uint;
      
      private static var cookieBag:MovieClip;
       
      
      public function FairyPartyController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         bloodArr = [];
         bubbleArr = [];
         fairyMCArr = [];
         var _loc2_:int = 0;
         while(_loc2_ < 10)
         {
            fairyMCArr.push(_map.depthLevel.removeChild(getFairy(_loc2_)));
            _loc2_++;
         }
         var _loc3_:int = 0;
         while(_loc3_ < 5)
         {
            bloodArr.push(_map.depthLevel.removeChild(getBlood(_loc3_)));
            bubbleArr.push(_map.depthLevel.removeChild(getBubble(_loc3_)));
            _loc3_++;
         }
         curCookie = 0;
         (_map.depthLevel["bakingMachine"] as MovieClip).buttonMode = true;
         (_map.depthLevel["bakingMachine"] as MovieClip).addEventListener(MouseEvent.CLICK,onMachineClick);
         (_map.depthLevel["cartoonMC"] as MovieClip).visible = false;
         setMachine(0);
         cookieBag = _map.conLevel["cookieBag"] as MovieClip;
         (cookieBag["arrow"] as MovieClip).gotoAndStop(1);
         (cookieBag["arrow"] as MovieClip).buttonMode = true;
         (cookieBag["arrow"] as MovieClip).addEventListener(MouseEvent.CLICK,onArrowClick);
         var _loc4_:uint = 1;
         while(_loc4_ < 4)
         {
            (cookieBag["delCookie_" + _loc4_] as SimpleButton).addEventListener(MouseEvent.CLICK,onDelCookie);
            _loc4_++;
         }
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         SocketConnection.addCmdListener(CommandID.PAITE_PARTY_PET_STATUS_NOTICE,onGetPetStatusNotice);
         SocketConnection.addCmdListener(CommandID.PAITE_PARTY_END,onPartyEnd);
         SocketConnection.addCmdListener(CommandID.PAITE_PARTY_PET_STATUS_CHECK,onGetPetsStatus);
         SocketConnection.send(CommandID.PAITE_PARTY_PET_STATUS_CHECK);
         SocketConnection.addCmdListener(CommandID.PAITE_PARTY_COOKIE_INFO,onItemCountHandler);
         SocketConnection.send(CommandID.PAITE_PARTY_COOKIE_INFO);
         onActivityTime(null);
      }
      
      private static function getFairy(param1:int) : MovieClip
      {
         return _map.depthLevel["fairy_" + param1];
      }
      
      private static function getBlood(param1:int) : MovieClip
      {
         return _map.depthLevel["blood_" + param1];
      }
      
      private static function getBubble(param1:int) : MovieClip
      {
         return _map.depthLevel["bubble_" + param1];
      }
      
      private static function onActivityTime(param1:SocketEvent = null) : void
      {
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(_loc2_.hoursUTC + 8 == PartyMapManager.curHour)
         {
            (_map.depthLevel["bakingMachine"] as MovieClip).visible = true;
         }
         else
         {
            MapManager.changeMap(7);
         }
      }
      
      private static function onGetPetStatusNotice(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:uint = _loc2_.readUnsignedInt();
         var _loc7_:uint = _loc2_.readUnsignedInt();
         DebugTrace.show(_loc3_ + "号位置上的精灵状态：" + "status--" + _loc4_ + ";" + "mon_id--" + _loc5_ + ";" + "need_food--" + _loc6_ + ";" + "progress--" + _loc7_);
         var _loc8_:MovieClip = fairyMCArr[fairyIDArr.indexOf(_loc5_)];
         (pointArr[_loc3_] as PetPartyPosition).setData(_loc6_,_loc5_,_loc4_,_loc7_);
         (pointArr[_loc3_] as PetPartyPosition).setMC(bubbleArr[_loc3_] as MovieClip,_loc8_,bloodArr[_loc3_] as MovieClip);
         _map.depthLevel.addChild(pointArr[_loc3_]);
         (pointArr[_loc3_] as PetPartyPosition).visible = true;
         (pointArr[_loc3_] as PetPartyPosition).buttonMode = true;
         (pointArr[_loc3_] as PetPartyPosition).addEventListener(MouseEvent.CLICK,onFeed);
      }
      
      private static function onGetPetsStatus(param1:SocketEvent) : void
      {
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc7_:uint = 0;
         var _loc8_:uint = 0;
         var _loc9_:uint = 0;
         var _loc10_:MovieClip = null;
         SocketConnection.removeCmdListener(CommandID.PAITE_PARTY_PET_STATUS_CHECK,onGetPetsStatus);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         DebugTrace.show("4334第一个字段：" + _loc3_);
         if(_loc3_ == 1)
         {
            _loc4_ = 0;
            while(_loc4_ < 5)
            {
               _loc5_ = _loc2_.readUnsignedInt();
               _loc6_ = _loc2_.readUnsignedInt();
               _loc7_ = _loc2_.readUnsignedInt();
               _loc8_ = _loc2_.readUnsignedInt();
               _loc9_ = _loc2_.readUnsignedInt();
               DebugTrace.show(_loc5_ + "号位置上的精灵状态：" + "status--" + _loc6_ + ";" + "mon_id--" + _loc7_ + ";" + "need_food--" + _loc8_ + ";" + "progress--" + _loc9_);
               _loc10_ = fairyMCArr[fairyIDArr.indexOf(_loc7_)];
               (pointArr[_loc5_] as PetPartyPosition).setData(_loc8_,_loc7_,_loc6_,_loc9_);
               (pointArr[_loc5_] as PetPartyPosition).setMC(bubbleArr[_loc5_] as MovieClip,_loc10_,bloodArr[_loc5_] as MovieClip);
               _map.depthLevel.addChild(pointArr[_loc5_]);
               (pointArr[_loc5_] as PetPartyPosition).visible = true;
               (pointArr[_loc5_] as PetPartyPosition).buttonMode = true;
               (pointArr[_loc5_] as PetPartyPosition).addEventListener(MouseEvent.CLICK,onFeed);
               _loc4_++;
            }
         }
      }
      
      private static function onFeed(param1:MouseEvent) : void
      {
         var hasCookie:Boolean = false;
         var n:uint = 0;
         var h:uint = 0;
         var e:MouseEvent = param1;
         var t:PetPartyPosition = e.currentTarget as PetPartyPosition;
         var foodIndex:uint = t.food_need - 1;
         var petIndex:uint = uint(fairyIDArr.indexOf(t.mon_id));
         switch(t.status)
         {
            case 1:
               n = 0;
               while(n < 3)
               {
                  if(foodBox[n] == t.food_need)
                  {
                     SocketConnection.send(CommandID.PAITE_PARTY_FEED_FOR_PET,t.food_need,t.index);
                     SocketConnection.addCmdListener(CommandID.PAITE_PARTY_COOKIE_INFO,onItemCountHandler);
                     SocketConnection.send(CommandID.PAITE_PARTY_COOKIE_INFO);
                     hasCookie = true;
                     MainManager.actorModel.execBehavior(new ChatBehavior("$17"));
                     NpcDialog.show(petDialogArr[petIndex],["哇！太好了，那么快就有" + foodName[foodIndex] + "吃了。为了感谢你，这些就送给你吧！"],null,null,false,function():void
                     {
                     });
                     return;
                  }
                  n++;
               }
               if(!hasCookie)
               {
                  MainManager.actorModel.execBehavior(new ChatBehavior("$18"));
                  NpcDialog.show(petDialogArr[petIndex],["你还没有我想要的食物哦！快去制作我想要的" + foodName[foodIndex] + "吧！"],["好的！"]);
               }
               break;
            case 2:
               h = 0;
               while(h < 3)
               {
                  if(foodBox[h] == t.food_need)
                  {
                     SocketConnection.send(CommandID.PAITE_PARTY_FEED_FOR_PET,t.food_need,t.index);
                     SocketConnection.addCmdListener(CommandID.PAITE_PARTY_COOKIE_INFO,onItemCountHandler);
                     SocketConnection.send(CommandID.PAITE_PARTY_COOKIE_INFO);
                     hasCookie = true;
                     MainManager.actorModel.execBehavior(new ChatBehavior("$17"));
                     NpcDialog.show(petDialogArr[petIndex],["哈哈，这不是我要的" + foodName[foodIndex] + "吗？太感谢你了。这个就送给你吧！"],null,null,false,function():void
                     {
                     });
                     return;
                  }
                  h++;
               }
               if(!hasCookie)
               {
                  MainManager.actorModel.execBehavior(new ChatBehavior("$18"));
                  NpcDialog.show(petDialogArr[petIndex],["你还没有我想要的食物哦！快去制作我想要的" + foodName[foodIndex] + "吧！"],["好的！"]);
               }
               break;
            case 3:
               t.bubble.gotoAndStop(4);
               SocketConnection.send(CommandID.USER_PARTY_FIGHT_WITH_BOSS,fairyIDArr.indexOf(t.mon_id) + 6);
         }
      }
      
      private static function onItemCountHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.PAITE_PARTY_COOKIE_INFO,onItemCountHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         foodBox[0] = _loc2_.readUnsignedInt();
         foodBox[1] = _loc2_.readUnsignedInt();
         foodBox[2] = _loc2_.readUnsignedInt();
         DebugTrace.show("饼干盒：" + foodBox);
         setCookieBag(foodBox);
      }
      
      private static function onPartyEnd(param1:SocketEvent) : void
      {
         MapManager.changeMap(7);
      }
      
      public static function setMachine(param1:uint) : void
      {
         switch(param1)
         {
            case 0:
               machineStatus = 0;
               (_map.depthLevel["bakingMachine"] as MovieClip).gotoAndStop(1);
               ToolTipManager.add(_map.depthLevel["bakingMachine"],"请点击，选择要烘焙的饼干……");
               break;
            case 1:
               machineStatus = 1;
               (_map.depthLevel["bakingMachine"] as MovieClip).gotoAndStop(2);
               ToolTipManager.add(_map.depthLevel["bakingMachine"],"请点击，放入原料……");
               break;
            case 2:
               machineStatus = 2;
               (_map.depthLevel["bakingMachine"] as MovieClip).gotoAndStop(3);
               ToolTipManager.add(_map.depthLevel["bakingMachine"],"请点击，开始烘焙……");
               break;
            case 3:
               machineStatus = 3;
               (_map.depthLevel["bakingMachine"] as MovieClip).gotoAndStop(4);
               ToolTipManager.remove(_map.depthLevel["bakingMachine"]);
               break;
            case 4:
               machineStatus = 4;
               (_map.depthLevel["bakingMachine"] as MovieClip).gotoAndStop(5);
               ToolTipManager.add(_map.depthLevel["bakingMachine"],"你的夹心饼干烘焙好了哦！");
               break;
            case 5:
               machineStatus = 5;
               (_map.depthLevel["bakingMachine"] as MovieClip).gotoAndStop(6);
               ToolTipManager.add(_map.depthLevel["bakingMachine"],"你的苏打饼干烘焙好了哦！");
               break;
            case 6:
               machineStatus = 6;
               (_map.depthLevel["bakingMachine"] as MovieClip).gotoAndStop(7);
               ToolTipManager.add(_map.depthLevel["bakingMachine"],"你的曲奇饼干烘焙好了哦！");
         }
      }
      
      private static function onMachineClick(param1:MouseEvent) : void
      {
         var n:uint = 0;
         var e:MouseEvent = param1;
         var isFull:Boolean = true;
         switch(machineStatus)
         {
            case 0:
               n = 0;
               while(n < 3)
               {
                  if(foodBox[n] == 0)
                  {
                     isFull = false;
                     ModuleManager.showModule(ClientConfig.getFestivalModule("userHoldParty/FairyPartySelectCookie"),"正在打开面板……");
                  }
                  n++;
               }
               if(isFull)
               {
                  Alarm.show("你的盒子里已经装满了哦！");
               }
               break;
            case 1:
               (_map.depthLevel["cartoonMC"] as MovieClip).visible = true;
               (_map.depthLevel["bakingMachine"] as MovieClip).gotoAndStop(8);
               AnimateManager.playMcAnimate(_map.depthLevel["cartoonMC"],1,"mc1",function():void
               {
                  (_map.depthLevel["cartoonMC"] as MovieClip).visible = false;
                  setMachine(2);
               });
               break;
            case 2:
               setMachine(3);
               if(timer == null)
               {
                  timer = new Timer(1000);
               }
               timer.addEventListener(TimerEvent.TIMER,onTimer);
               times = 0;
               SocketConnection.send(CommandID.PAITE_PARTY_START_MAKE_COOKIE);
               timer.start();
               break;
            case 3:
               Alarm.show("正在烘焙中哦！烘焙需要10秒，请耐心等待……");
               break;
            case 4:
               DebugTrace.show("发送的饼干是：" + curCookie);
               SocketConnection.addCmdListener(CommandID.PAITE_PARTY_FINISH_MAKE_COOKIE,onFinishMake);
               SocketConnection.send(CommandID.PAITE_PARTY_FINISH_MAKE_COOKIE,curCookie);
               break;
            case 5:
               DebugTrace.show("发送的饼干是：" + curCookie);
               SocketConnection.addCmdListener(CommandID.PAITE_PARTY_FINISH_MAKE_COOKIE,onFinishMake);
               SocketConnection.send(CommandID.PAITE_PARTY_FINISH_MAKE_COOKIE,curCookie);
               break;
            case 6:
               DebugTrace.show("发送的饼干是：" + curCookie);
               SocketConnection.addCmdListener(CommandID.PAITE_PARTY_FINISH_MAKE_COOKIE,onFinishMake);
               SocketConnection.send(CommandID.PAITE_PARTY_FINISH_MAKE_COOKIE,curCookie);
         }
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         ++times;
         if(times == 10)
         {
            timer.stop();
            setMachine(curCookie + 3);
         }
      }
      
      private static function onFinishMake(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.PAITE_PARTY_FINISH_MAKE_COOKIE,onFinishMake);
         var _loc2_:ByteArray = param1.data as ByteArray;
         foodBox[0] = _loc2_.readUnsignedInt();
         foodBox[1] = _loc2_.readUnsignedInt();
         foodBox[2] = _loc2_.readUnsignedInt();
         setMachine(0);
         setCookieBag(foodBox);
      }
      
      private static function setCookieBag(param1:Array) : void
      {
         var _loc2_:uint = 1;
         while(_loc2_ < 4)
         {
            DebugTrace.show(_loc2_ + "号盒子：" + param1[_loc2_ - 1]);
            if(param1[_loc2_ - 1] == 0)
            {
               (cookieBag["grid_" + _loc2_] as MovieClip).visible = false;
               (cookieBag["delCookie_" + _loc2_] as SimpleButton).visible = false;
            }
            else
            {
               (cookieBag["delCookie_" + _loc2_] as SimpleButton).visible = true;
               (cookieBag["grid_" + _loc2_] as MovieClip).visible = true;
               (cookieBag["grid_" + _loc2_] as MovieClip).gotoAndStop(param1[_loc2_ - 1]);
            }
            _loc2_++;
         }
      }
      
      private static function onDelCookie(param1:MouseEvent) : void
      {
         var _loc2_:SimpleButton = param1.currentTarget as SimpleButton;
         var _loc3_:uint = uint(_loc2_.name.split("_")[1]);
         SocketConnection.addCmdListener(CommandID.PAITE_PARTY_DELETE_COOKIE,afterDelCookie);
         SocketConnection.send(CommandID.PAITE_PARTY_DELETE_COOKIE,_loc3_ - 1);
      }
      
      private static function afterDelCookie(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.PAITE_PARTY_FINISH_MAKE_COOKIE,afterDelCookie);
         var _loc2_:ByteArray = param1.data as ByteArray;
         foodBox[0] = _loc2_.readUnsignedInt();
         foodBox[1] = _loc2_.readUnsignedInt();
         foodBox[2] = _loc2_.readUnsignedInt();
         setCookieBag(foodBox);
      }
      
      private static function onArrowClick(param1:MouseEvent) : void
      {
         if((cookieBag["arrow"] as MovieClip).currentFrame == 1)
         {
            (cookieBag["arrow"] as MovieClip).gotoAndStop(2);
            TweenLite.to(cookieBag,0.4,{
               "x":941,
               "ease":Back.easeOut
            });
         }
         else
         {
            (cookieBag["arrow"] as MovieClip).gotoAndStop(1);
            TweenLite.to(cookieBag,0.4,{
               "x":866,
               "ease":Back.easeOut
            });
         }
      }
      
      public static function destroy() : void
      {
         _map = null;
         if(timer)
         {
            timer.stop();
         }
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         SocketConnection.removeCmdListener(CommandID.PAITE_PARTY_PET_STATUS_NOTICE,onGetPetStatusNotice);
         SocketConnection.removeCmdListener(CommandID.PAITE_PARTY_END,onPartyEnd);
         SocketConnection.removeCmdListener(CommandID.PAITE_PARTY_PET_STATUS_CHECK,onGetPetsStatus);
         SocketConnection.removeCmdListener(CommandID.PAITE_PARTY_COOKIE_INFO,onItemCountHandler);
         SocketConnection.removeCmdListener(CommandID.PAITE_PARTY_FINISH_MAKE_COOKIE,onFinishMake);
         SocketConnection.removeCmdListener(CommandID.PAITE_PARTY_DELETE_COOKIE,afterDelCookie);
      }
   }
}
