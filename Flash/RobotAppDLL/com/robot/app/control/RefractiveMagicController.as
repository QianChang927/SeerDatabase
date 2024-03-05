package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class RefractiveMagicController
   {
      
      private static var _hasInit:Boolean = false;
      
      private static var _hasStart:Boolean = false;
      
      private static var _date:Date;
      
      private static var seerBean:uint;
      
      private static var point:uint;
      
      public static var _characterId:uint;
       
      
      public function RefractiveMagicController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:Array = PetManager.getBagMap();
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            if((_loc1_[_loc3_] as PetListInfo).level == 100)
            {
               _loc2_++;
            }
            _loc3_++;
         }
         if(_loc2_ < 6)
         {
            knowAlarm("折光幻阵内可能会有很多变数，背包中需要拥有" + TextFormatUtil.getRedTxt("6只等级100级的精灵") + "才可以进入哦！");
         }
         else
         {
            if(_hasInit == false)
            {
               _hasInit = true;
               SocketConnection.addCmdListener(CommandID.REFRACTIVEMAGIC_FIGHT_OVER,onFightOver);
               SocketConnection.addCmdListener(CommandID.REFRACTIVEMAGIC_START_WAR,onStartHandler);
               SocketConnection.addCmdListener(CommandID.INVITE_FIGHT_CANCEL,onCancelFight);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverAlarmClick);
            }
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onTimeManager);
            onTimeManager(null);
            SocketConnection.send(CommandID.REFRACTIVEMAGIC_START_WAR);
         }
      }
      
      private static function onTimeManager(param1:SocketEvent = null) : void
      {
         _date = SystemTimerManager.sysDate;
         if((_date.minutes + 1) % 5 == 0)
         {
            SystemTimerManager.addTickFun(sendStartCommand);
         }
      }
      
      private static function sendStartCommand() : void
      {
         _date = SystemTimerManager.sysDate;
         if(_date.minutes % 5 == 0)
         {
            SystemTimerManager.removeTickFun(sendStartCommand);
            SocketConnection.removeCmdListener(CommandID.INVITE_FIGHT_CANCEL,onCancelFight);
            SocketConnection.addCmdListener(CommandID.INVITE_FIGHT_CANCEL,onStartResend);
            SocketConnection.send(CommandID.INVITE_FIGHT_CANCEL);
         }
      }
      
      private static function onStartResend(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.INVITE_FIGHT_CANCEL,onStartResend);
         SocketConnection.addCmdListener(CommandID.INVITE_FIGHT_CANCEL,onCancelFight);
         SocketConnection.send(CommandID.REFRACTIVEMAGIC_START_WAR);
      }
      
      public static function removeTimeListen() : void
      {
         SystemTimerManager.removeTickFun(sendStartCommand);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onTimeManager);
      }
      
      private static function onStartHandler(param1:SocketEvent) : void
      {
         _characterId = (param1.data as ByteArray).readUnsignedInt();
         if(_hasStart)
         {
            return;
         }
         _hasStart = true;
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         PetFightModel.type = PetFightModel.REFRACTIVE_MAGIC;
         var _loc2_:* = getDefinitionByName("com.robot.app.panel.FightMatchingPanel");
         _loc2_.show(closeDouFight);
      }
      
      private static function onFightOver(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         seerBean = _loc2_.readUnsignedInt();
         point = _loc2_.readUnsignedInt();
      }
      
      private static function onFightOverAlarmClick(param1:PetFightEvent) : void
      {
         if(MainManager.actorID == (param1.dataObj as FightOverInfo).winnerID)
         {
            showResultAlarm(point,seerBean);
         }
         destroy();
      }
      
      private static function closeDouFight() : void
      {
         SocketConnection.send(CommandID.INVITE_FIGHT_CANCEL);
         removeTimeListen();
      }
      
      private static function onCancelFight(param1:SocketEvent) : void
      {
         destroy();
      }
      
      private static function knowAlarm(param1:String) : void
      {
         var str:String = param1;
         ResourceManager.getResource(ClientConfig.getAppRes("iKnowPanel"),function(param1:DisplayObject):void
         {
            var alarmMc:MovieClip = null;
            var mc:DisplayObject = param1;
            alarmMc = mc as MovieClip;
            LevelManager.closeMouseEvent();
            DisplayUtil.align(alarmMc,null,AlignType.MIDDLE_CENTER);
            LevelManager.appLevel.addChild(alarmMc);
            alarmMc["tipTxt"].htmlText = str;
            alarmMc["close"].addEventListener(MouseEvent.CLICK,function():void
            {
               alarmMc["close"].removeEventListener(MouseEvent.CLICK,arguments.callee);
               alarmMc["ok"].removeEventListener(MouseEvent.CLICK,arguments.callee);
               LevelManager.openMouseEvent();
               DisplayUtil.removeForParent(alarmMc);
               alarmMc = null;
            });
            alarmMc["ok"].addEventListener(MouseEvent.CLICK,function():void
            {
               alarmMc["close"].removeEventListener(MouseEvent.CLICK,arguments.callee);
               alarmMc["ok"].removeEventListener(MouseEvent.CLICK,arguments.callee);
               LevelManager.openMouseEvent();
               DisplayUtil.removeForParent(alarmMc);
               alarmMc = null;
            });
         },"IKnowMc");
      }
      
      private static function showResultAlarm(param1:uint, param2:uint) : void
      {
         var point:uint = param1;
         var bean:uint = param2;
         ResourceManager.getResource(ClientConfig.getAppRes("refractiveWinAlarm"),function(param1:DisplayObject):void
         {
            var alarmMc:MovieClip = null;
            var mc:DisplayObject = param1;
            alarmMc = mc as MovieClip;
            DisplayUtil.align(alarmMc,null,AlignType.MIDDLE_CENTER);
            LevelManager.appLevel.addChild(alarmMc);
            alarmMc["point_txt"].htmlText = "+" + point;
            alarmMc["bean_txt"].htmlText = "+" + bean;
            alarmMc["ok"].addEventListener(MouseEvent.CLICK,function():void
            {
               alarmMc["ok"].removeEventListener(MouseEvent.CLICK,arguments.callee);
               LevelManager.openMouseEvent();
               DisplayUtil.removeForParent(alarmMc);
               alarmMc = null;
            });
         },"RetractiveWinPanel");
      }
      
      public static function destroy() : void
      {
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         PetFightModel.type = 0;
         _hasInit = false;
         _hasStart = false;
         SocketConnection.removeCmdListener(CommandID.REFRACTIVEMAGIC_FIGHT_OVER,onFightOver);
         SocketConnection.removeCmdListener(CommandID.REFRACTIVEMAGIC_START_WAR,onStartHandler);
         SocketConnection.removeCmdListener(CommandID.INVITE_FIGHT_CANCEL,onCancelFight);
         SocketConnection.removeCmdListener(CommandID.INVITE_FIGHT_CANCEL,onStartResend);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverAlarmClick);
      }
   }
}
