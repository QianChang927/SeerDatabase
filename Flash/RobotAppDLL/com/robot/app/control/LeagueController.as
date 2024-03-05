package com.robot.app.control
{
   import com.robot.app.panel.TopSelectPanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class LeagueController
   {
      
      public static var fightAIid:uint;
      
      private static var _curScore:int = -1;
      
      private static var _curForever:int;
      
      private static var _preForever:int;
      
      private static var _foreverCredits:Array = [3198,3199,3200,3201,3202,3203,3204,3205,3206,3207];
       
      
      public function LeagueController()
      {
         super();
      }
      
      public static function initCurScore(param1:int) : void
      {
         var curValue:int = param1;
         _curForever = _foreverCredits[curValue - 1];
         KTool.getForeverNum(_curForever,function(param1:int):void
         {
            _curScore = param1;
         });
      }
      
      public static function openMainPanel(param1:MouseEvent = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LeagueFinalPanel"));
      }
      
      public static function showScoreChange() : void
      {
         getCurForever(1,function(param1:int):void
         {
            var onFightComplete:Function = null;
            var value:int = param1;
            onFightComplete = function(param1:*):void
            {
               var e:* = param1;
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
               KTool.getForeverNum(value,function(param1:int):void
               {
                  Alarm.show("恭喜您在战斗中获得" + (param1 - _curScore) + "点积分！");
                  _curScore = param1;
               });
            };
            if(_curScore == -1)
            {
               KTool.getForeverNum(value,function(param1:int):void
               {
                  _curScore = param1;
               });
            }
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         });
      }
      
      public static function getCurForever(param1:int, param2:Function) : void
      {
         var number:int = param1;
         var backFun:Function = param2;
         if(number == 1 && _curForever > 0)
         {
            backFun(_curForever);
            return;
         }
         if(number == 2 && _preForever > 0)
         {
            backFun(_preForever);
            return;
         }
         SocketConnection.sendWithCallback(CommandID.LEAGUE_GET_INFO,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:uint = _loc2_.readUnsignedInt();
            var _loc5_:uint;
            if((_loc5_ = _loc2_.readUnsignedInt()) > 0)
            {
               backFun(_foreverCredits[_loc5_ - 1]);
            }
            else
            {
               backFun(0);
            }
            if(number == 1)
            {
               _curForever = _foreverCredits[_loc5_ - 1];
            }
            else if(number == 2)
            {
               _preForever = _foreverCredits[_loc5_ - 1];
            }
         },number);
      }
      
      public static function onClick1() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PeakImprintShopPanel"));
      }
      
      public static function onClick2() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PeakPetPanel"));
      }
      
      public static function onClick3() : void
      {
         TopSelectPanel.show(function():void
         {
            TopSelectPanel.mode = TopSelectPanel.NORMAL;
            TopSelectPanel.isPlay = false;
         });
      }
      
      public static function onClick4() : void
      {
         TopSelectPanel.show(function():void
         {
            TopSelectPanel.mode = TopSelectPanel.BEYOND;
            TopSelectPanel.isPlay = false;
         });
      }
      
      public static function destroy() : void
      {
      }
   }
}
