package com.robot.app2.control
{
   import com.robot.app.buyItem.ProductAction;
   import com.robot.app.darkPortal.DarkPortalModel;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.Bitmap;
   import flash.display.BitmapData;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.utils.ByteArray;
   import gs.TweenLite;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TwelveDoorController
   {
      
      public static var _map:BaseMapProcess;
      
      private static var _curLevel:uint;
      
      private static var _reviveTimes:uint;
      
      public static var preTimes:uint;
      
      private static var _types:Array;
       
      
      public function TwelveDoorController()
      {
         super();
      }
      
      public static function initFor10336(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function initFor110(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      private static function onLeaveMap(param1:MapEvent) : void
      {
         if(param1.mapModel.id != 10336)
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onLeaveMap);
            SocketConnection.send(CommandID.LEAVE_MAZE);
         }
      }
      
      public static function enterGame() : void
      {
         SocketConnection.addCmdListener(CommandID.ENTER_MAZE,onEnterMaze);
         SocketConnection.send(CommandID.ENTER_MAZE);
      }
      
      private static function onEnterMaze(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ENTER_MAZE,onEnterMaze);
         _types = [null,"固执","大胆","急躁","天真","顽皮","勇敢","孤独","狂妄","浮躁"];
         _curLevel = 1;
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMap);
         MapManager.changeLocalMap(10336);
      }
      
      private static function onChangeMap(param1:Event) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMap);
         EventManager.addEventListener(RobotEvent.MONEY_BUY,onBuy);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onLeaveMap);
         DisplayUtil.removeForParent(LevelManager.iconLevel);
         playLevelAni(1);
         MapNamePanel.nameText = "暗黑迷宫第1层";
         SocketConnection.addCmdListener(CommandID.FUCK_SHINEHOO_TIMES,onCheckReviveTimes);
         SocketConnection.send(CommandID.FUCK_SHINEHOO_TIMES,10427);
         _map.depthLevel["boss"].buttonMode = true;
         _map.depthLevel["boss"].addEventListener(MouseEvent.CLICK,onClickBoss);
         _map.depthLevel["boss"].gotoAndStop(1);
         ToolTipManager.add(_map.depthLevel["boss"],_types[_curLevel] + "的暗黑布莱克");
         doorEnabled(false);
      }
      
      private static function onClickBoss(param1:Event) : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         SocketConnection.send(CommandID.MAZE_FIGHT);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         DisplayUtil.removeForParent(LevelManager.iconLevel);
         MapNamePanel.nameText = "暗黑迷宫第" + _curLevel + "层";
         EventManager.addEventListener(RobotEvent.MONEY_BUY,onBuy);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onLeaveMap);
         DisplayUtil.removeForParent(LevelManager.iconLevel);
         if(e.dataObj.winnerID == MainManager.actorID)
         {
            if(_curLevel == 9)
            {
               if(!BufferRecordManager.getState(MainManager.actorInfo,773))
               {
                  BufferRecordManager.setState(MainManager.actorInfo,773,true);
                  DisplayUtil.stopAllMovieClip(_map.conLevel);
                  DisplayUtil.removeAllChild(_map.conLevel);
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20130816_3"),function():void
                  {
                     ItemInBagAlert.show(1500167,"1个" + TextFormatUtil.getRedTxt("诺伊尔的精元") + "已经放入了您的储存箱！",function():void
                     {
                        leaveGame();
                     });
                  });
               }
            }
            else
            {
               AnimateManager.playMcAnimate(_map.depthLevel["boss"],2,"mc2",function():void
               {
                  _map.depthLevel["boss"].visible = false;
                  doorEnabled(true);
               });
            }
         }
         else
         {
            doorEnabled(false);
            AnimateManager.playMcAnimate(_map.depthLevel["boss"],3,"mc3",function():void
            {
               _map.depthLevel["boss"].gotoAndStop(1);
               if(_reviveTimes < 3)
               {
                  Alert.show("今日您还有" + (3 - _reviveTimes) + "次免费复活，是否进行复活？",function():void
                  {
                     freeRevive();
                  },function():void
                  {
                     leaveGame();
                  });
               }
               else
               {
                  SocketConnection.send(1022,86061367);
                  Alert.show("您今日免费复活次数已经用完，是否支付" + TextFormatUtil.getRedTxt("50钻石") + "进行原地复活？",function():void
                  {
                     buyRevive();
                  },function():void
                  {
                     leaveGame();
                  });
               }
            });
         }
      }
      
      private static function freeRevive() : void
      {
         SocketConnection.addCmdListener(CommandID.FREE_REVIVE,onFreeRevive);
         SocketConnection.send(CommandID.FREE_REVIVE);
      }
      
      private static function onFreeRevive(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.FREE_REVIVE,onFreeRevive);
         SocketConnection.send(1022,86061368);
         ++_reviveTimes;
         Alarm.show("恭喜您，复活成功，可以继续挑战了,祝您挑战成功！",function():void
         {
            _map.depthLevel["boss"].buttonMode = true;
            _map.depthLevel["boss"].addEventListener(MouseEvent.CLICK,onClickBoss);
            ToolTipManager.add(_map.depthLevel["boss"],_types[_curLevel] + "的暗黑布莱克");
         });
      }
      
      private static function buyRevive() : void
      {
         ItemManager.upDateCollection(1700005,function():void
         {
            if(ItemManager.getCollectionInfo(1700005))
            {
               SocketConnection.addCmdListener(CommandID.BUY_REVIVE,onBuyRevive);
               SocketConnection.send(CommandID.BUY_REVIVE);
            }
            else
            {
               EventManager.addEventListener(RobotEvent.CANCEL_MONEY_BUY,onCancelBuy);
               ProductAction.buyMoneyProduct(201058);
            }
         });
      }
      
      private static function onCancelBuy(param1:RobotEvent) : void
      {
         leaveGame();
      }
      
      private static function onBuy(param1:DynamicEvent) : void
      {
         SocketConnection.send(1022,86061369);
         SocketConnection.addCmdListener(CommandID.BUY_REVIVE,onBuyRevive);
         SocketConnection.send(CommandID.BUY_REVIVE);
      }
      
      private static function onBuyRevive(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.BUY_REVIVE,onBuyRevive);
         Alarm.show("恭喜您，复活成功，可以继续挑战了,祝您挑战成功！",function():void
         {
            _map.depthLevel["boss"].buttonMode = true;
            _map.depthLevel["boss"].addEventListener(MouseEvent.CLICK,onClickBoss);
            ToolTipManager.add(_map.depthLevel["boss"],_types[_curLevel] + "的暗黑布莱克");
         });
      }
      
      private static function doorEnabled(param1:Boolean) : void
      {
         var _loc2_:int = 0;
         _loc2_ = 1;
         while(_loc2_ < 4)
         {
            _map.conLevel["door" + _loc2_].buttonMode = param1;
            if(param1)
            {
               _map.conLevel["door" + _loc2_].addEventListener(MouseEvent.CLICK,onClickDoor);
               _map.conLevel["door" + _loc2_].visible = true;
            }
            else
            {
               _map.conLevel["door" + _loc2_].removeEventListener(MouseEvent.CLICK,onClickDoor);
               _map.conLevel["door" + _loc2_].visible = false;
            }
            _loc2_++;
         }
      }
      
      private static function onClickDoor(param1:Event) : void
      {
         var index:uint = 0;
         var e:Event = param1;
         index = uint(e.currentTarget.name.slice(4));
         var hit:MovieClip = _map.conLevel["hit" + index];
         MainManager.actorModel.moveAndAction(new Point(hit.x,hit.y),function():void
         {
            Alert.show("勇敢的赛尔，你确定选择这扇门吗？如果选错了将传送进入其他层数哦！",function():void
            {
               goNextLevel(index);
            });
         });
      }
      
      private static function goNextLevel(param1:uint) : void
      {
         SocketConnection.addCmdListener(CommandID.SWITCH_MAZE_LEVEL,onNextLevel);
         SocketConnection.send(CommandID.SWITCH_MAZE_LEVEL,param1);
      }
      
      private static function onNextLevel(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var bmpData1:BitmapData;
         var ba:ByteArray;
         var bmpData2:BitmapData;
         var bmp:Bitmap = null;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.SWITCH_MAZE_LEVEL,onNextLevel);
         data = e.data as ByteArray;
         _curLevel = data.readUnsignedInt();
         MainManager.selfVisible = false;
         doorEnabled(false);
         bmpData1 = new BitmapData(960,560);
         bmpData1.draw(LevelManager.mapLevel);
         ba = bmpData1.getPixels(new Rectangle(0,0,960,560));
         ba.position = 0;
         bmpData2 = new BitmapData(960,1120);
         bmpData2.setPixels(new Rectangle(0,0,960,560),ba);
         ba.position = 0;
         bmpData2.setPixels(new Rectangle(0,560,960,560),ba);
         bmp = new Bitmap(bmpData2);
         bmp.y = -560;
         LevelManager.toolsLevel.addChild(bmp);
         LevelManager.toolsLevel.setChildIndex(bmp,0);
         DisplayUtil.removeForParent(LevelManager.mapLevel);
         TweenLite.to(bmp,1,{
            "y":0,
            "onComplete":function():void
            {
               LevelManager.root.addChildAt(LevelManager.mapLevel,1);
               DisplayUtil.removeForParent(bmp);
               bmp = null;
               bmpData1 = null;
               bmpData2 = null;
               ba = null;
               playLevelAni(_curLevel);
               MapNamePanel.nameText = "暗黑迷宫第" + _curLevel + "层";
               MainManager.selfVisible = true;
               MainManager.actorModel.x = 480;
               MainManager.actorModel.y = 450;
               _map.depthLevel["boss"].gotoAndStop(1);
               _map.depthLevel["boss"].visible = true;
               _map.depthLevel["boss"].buttonMode = true;
               _map.depthLevel["boss"].addEventListener(MouseEvent.CLICK,onClickBoss);
               ToolTipManager.add(_map.depthLevel["boss"],_types[_curLevel] + "的暗黑布莱克");
               SocketConnection.send(1022,86061387 + _curLevel);
            }
         });
      }
      
      private static function addDoorEvents() : void
      {
         SocketConnection.removeCmdListener(CommandID.SWITCH_MAZE_LEVEL,onNextLevel);
      }
      
      private static function onCheckReviveTimes(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FUCK_SHINEHOO_TIMES,onCheckReviveTimes);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _reviveTimes = _loc2_.readUnsignedInt();
      }
      
      private static function playLevelAni(param1:uint) : void
      {
         var index:uint = param1;
         LevelManager.root.mouseEnabled = false;
         LevelManager.root.mouseChildren = false;
         ResourceManager.getResource(ClientConfig.getActiveUrl("darkMaze/num_" + index),function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var obj:DisplayObject = param1;
            mc = obj as MovieClip;
            mc.x = 938;
            mc.y = 271;
            _map.topLevel.addChild(mc);
            AnimateManager.playMcEndHandler(mc,function():void
            {
               DisplayUtil.removeForParent(mc);
               mc = null;
               LevelManager.root.mouseEnabled = true;
               LevelManager.root.mouseChildren = true;
            });
         });
      }
      
      public static function leaveGame() : void
      {
         SocketConnection.addCmdListener(CommandID.LEAVE_MAZE,onLeaveMaze);
         SocketConnection.send(CommandID.LEAVE_MAZE);
      }
      
      private static function onLeaveMaze(param1:SocketEvent) : void
      {
         var _loc2_:int = 0;
         SocketConnection.removeCmdListener(CommandID.LEAVE_MAZE,onLeaveMaze);
         _types = null;
         _curLevel = 0;
         _reviveTimes = 0;
         EventManager.removeEventListener(RobotEvent.MONEY_BUY,onBuy);
         EventManager.removeEventListener(RobotEvent.CANCEL_MONEY_BUY,onCancelBuy);
         SocketConnection.removeCmdListener(CommandID.FUCK_SHINEHOO_TIMES,onCheckReviveTimes);
         SocketConnection.removeCmdListener(CommandID.ENTER_MAZE,onEnterMaze);
         SocketConnection.removeCmdListener(CommandID.LEAVE_MAZE,onLeaveMaze);
         SocketConnection.removeCmdListener(CommandID.SWITCH_MAZE_LEVEL,onNextLevel);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMap);
         _map.depthLevel["boss"].removeEventListener(MouseEvent.CLICK,onClickBoss);
         ToolTipManager.remove(_map.depthLevel["boss"]);
         _loc2_ = 1;
         while(_loc2_ < 4)
         {
            _map.conLevel["door" + _loc2_].removeEventListener(MouseEvent.CLICK,onClickDoor);
            _loc2_++;
         }
         MapManager.changeMap(110);
      }
      
      public static function checkPreTimes(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(MainManager.actorInfo.isVip)
         {
            return;
         }
         ResourceManager.getResource(ClientConfig.getActiveUrl("darkMaze/dark_times"),function(param1:MovieClip):void
         {
            param1.x = 6;
            param1.y = 331;
            param1.name = "times";
            _map.topLevel.addChild(param1);
            param1["nono"].addEventListener(MouseEvent.CLICK,onClickNono);
            KTool.getLimitNum(10426,onCheckPreTimes);
         });
      }
      
      private static function onClickNono(param1:Event) : void
      {
         LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
      }
      
      private static function onCheckPreTimes(param1:uint) : void
      {
         preTimes = param1;
         _map.topLevel.getChildByName("times")["txt"].text = (20 - preTimes).toString();
      }
      
      public static function showDoor(param1:uint) : void
      {
         var index:uint = param1;
         LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
         DarkPortalModel.curDoor = index;
         DarkPortalModel.showDoor(index,function():void
         {
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
         });
      }
      
      public static function destroyFor10336() : void
      {
         var _loc1_:int = 0;
         EventManager.removeEventListener(RobotEvent.MONEY_BUY,onBuy);
         EventManager.removeEventListener(RobotEvent.CANCEL_MONEY_BUY,onCancelBuy);
         SocketConnection.removeCmdListener(CommandID.FUCK_SHINEHOO_TIMES,onCheckReviveTimes);
         SocketConnection.removeCmdListener(CommandID.ENTER_MAZE,onEnterMaze);
         SocketConnection.removeCmdListener(CommandID.LEAVE_MAZE,onLeaveMaze);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMap);
         _map.depthLevel["boss"].removeEventListener(MouseEvent.CLICK,onClickBoss);
         ToolTipManager.remove(_map.depthLevel["boss"]);
         _loc1_ = 1;
         while(_loc1_ < 4)
         {
            _map.conLevel["door" + _loc1_].removeEventListener(MouseEvent.CLICK,onClickDoor);
            _loc1_++;
         }
         _map = null;
      }
      
      public static function destroyFor110() : void
      {
         if(_map.topLevel.getChildByName("times") != null)
         {
            _map.topLevel.getChildByName("times")["nono"].removeEventListener(MouseEvent.CLICK,onClickNono);
            DisplayUtil.removeForParent(_map.topLevel.getChildByName("times"));
            SocketConnection.removeCmdListener(CommandID.FUCK_SHINEHOO_TIMES,onCheckPreTimes);
         }
         _map = null;
      }
   }
}
