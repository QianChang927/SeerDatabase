package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class SignInSummaryController
   {
      
      private static var _icon:MovieClip;
      
      private static var _hasAward:Boolean = false;
      
      private static var _hasAwards:Array = [0,0,0,0,0,0,0,0];
       
      
      public function SignInSummaryController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         _icon = param1;
         _icon.name = "NonoVipIcon";
      }
      
      public static function onClickIcon(param1:*) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SignInSummaryPanel"),"正在努力打开面板...");
      }
      
      private static function onCloseModuleHandler(param1:*) : void
      {
         updateIconState();
      }
      
      private static function updateIconState() : void
      {
         _hasAward = false;
         checkSeerVipPanel();
      }
      
      private static function checkSeerVipPanel() : void
      {
         SocketConnection.sendWithCallback(CommandID.TALK_COUNT,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            if(_loc3_ == 0)
            {
               _hasAward = true;
               _hasAwards[0] = 1;
            }
         },1004);
      }
      
      private static function checkLanternLoginSignUp() : void
      {
         var limitObj:Object = null;
         var obj:Object = null;
         limitObj = {
            "today":{
               "limit":10253,
               "value":0
            },
            "level":{
               "limit":469,
               "value":0
            }
         };
         var sendArr:Array = new Array();
         for each(obj in limitObj)
         {
            sendArr.push(obj.limit);
         }
         KTool.getMultiValue(sendArr,function(param1:Array):void
         {
            var _loc3_:String = null;
            var _loc2_:int = 0;
            for(_loc3_ in limitObj)
            {
               limitObj[_loc3_].value = param1[_loc2_];
               _loc2_++;
            }
            if(limitObj["today"]["value"] > 0)
            {
               _hasAward = true;
               _hasAwards[1] = 1;
               return;
            }
            if(limitObj["level"]["value"] >= 50 && TasksManager.getTaskStatus(1493) != TasksManager.COMPLETE)
            {
               _hasAward = true;
               _hasAwards[1] = 1;
               return;
            }
         });
      }
      
      private static function checkDrawGamePanel() : void
      {
         SocketConnection.sendWithCallback(CommandID.FUCK_SHINEHOO_TIMES,function(param1:*):void
         {
            var today:Date;
            var infoArr:Array;
            var e:* = param1;
            var b:ByteArray = e.data as ByteArray;
            b.position = 0;
            today = SystemTimerManager.sysDate;
            infoArr = KTool.readDataByBits(b,32);
            if(infoArr[today.date - 1] == 0)
            {
               _hasAward = true;
               _hasAwards[2] = 1;
               return;
            }
            SocketConnection.sendWithCallback(CommandID.EVERYDAY_DRAW_LAST_TIME,function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               _loc2_.position = 0;
               var _loc3_:int = int(_loc2_.readUnsignedInt());
               if(_loc3_ <= 0)
               {
                  _hasAward = true;
                  _hasAwards[2] = 1;
                  return;
               }
            });
         },30002);
      }
      
      private static function checkPetDevelopPanel() : void
      {
         SocketConnection.sendWithCallback(CommandID.PET_DEV_GET_INFO,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.readUnsignedInt();
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            if(_loc3_ < 2)
            {
               _hasAward = true;
               _hasAwards[3] = 1;
               return;
            }
         });
      }
      
      private static function checkGetStarClothPanel() : void
      {
         if(MainManager.actorInfo.vip > 0)
         {
            SocketConnection.addCmdListener(CommandID.GET_DAILY_VALUE,function(param1:SocketEvent):void
            {
               var data2:ByteArray;
               var num:int;
               var isGetDay:Boolean;
               var event:SocketEvent = param1;
               SocketConnection.removeCmdListener(CommandID.GET_DAILY_VALUE,arguments.callee);
               data2 = event.data as ByteArray;
               num = int(data2.readUnsignedInt());
               isGetDay = Boolean(num);
               if(!isGetDay)
               {
                  SocketConnection.addCmdListener(CommandID.GET_FOREVER_VALUE,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(CommandID.GET_FOREVER_VALUE,arguments.callee);
                     var _loc3_:ByteArray = param1.data as ByteArray;
                     var _loc4_:Array = KTool.readDataByBits(_loc3_,32);
                     var _loc5_:int = 0;
                     while(_loc5_ < 4)
                     {
                        if(_loc4_[_loc5_] == 0)
                        {
                           _hasAward = true;
                           _hasAwards[4] = 1;
                           return;
                        }
                        _loc5_++;
                     }
                  });
                  SocketConnection.send(CommandID.GET_FOREVER_VALUE,1048);
               }
            });
            SocketConnection.send(CommandID.GET_DAILY_VALUE,11059);
         }
      }
      
      private static function checkLuckyNonoPanel() : void
      {
         ItemManager.updateItems([1200019],function():void
         {
            var _loc1_:int = int(ItemManager.getNumByID(1200019));
            if(_loc1_ > 0)
            {
               _hasAward = true;
               _hasAwards[5] = 1;
               return;
            }
         });
      }
      
      private static function checkNonoVipDailySignPanel() : void
      {
      }
      
      private static function checkSuperNoPray20130208() : void
      {
      }
   }
}
