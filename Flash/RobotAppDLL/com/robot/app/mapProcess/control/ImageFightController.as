package com.robot.app.mapProcess.control
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class ImageFightController
   {
      
      public static const NORMAL:uint = 1;
      
      public static const HARD:uint = 2;
      
      public static var difficulty:uint;
      
      public static var stage:uint;
      
      public static var isEnd:Boolean;
      
      public static var isWin:Boolean;
      
      public static var money:uint;
      
      public static var exp:uint;
       
      
      public function ImageFightController()
      {
         super();
      }
      
      public static function enterMap() : void
      {
         if(PetManager.length < 6)
         {
            Alarm.show("必须携带6只精灵才能进入平行空间！");
            return;
         }
         SocketConnection.addCmdListener(CommandID.IMAGE_FIGHT_ENTER,function(param1:SocketEvent):void
         {
            var by:ByteArray;
            var i:uint;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.IMAGE_FIGHT_ENTER,arguments.callee);
            by = e.data as ByteArray;
            i = by.readUnsignedInt();
            if(i == 0)
            {
               Alarm.show("未能成功进入平行空间！");
            }
            else if(i == 1)
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("imageFight_1"),function():void
               {
                  difficulty = 0;
                  stage = 1;
                  isEnd = false;
                  isWin = false;
                  money = 0;
                  exp = 0;
                  PetFightModel.type = PetFightModel.IMAGE_FIGHT;
                  SocketConnection.addCmdListener(CommandID.IMAGE_FIGHT_END,onEnd);
                  MapManager.changeLocalMap(10015);
               });
            }
         });
         SocketConnection.send(CommandID.IMAGE_FIGHT_ENTER);
      }
      
      public static function choiceDifficulty(param1:uint) : void
      {
         var i:uint = param1;
         SocketConnection.addCmdListener(CommandID.IMAGE_FIGHT_CHOICE_TYPE,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.IMAGE_FIGHT_CHOICE_TYPE,arguments.callee);
            difficulty = i;
            ModuleManager.showModule(ClientConfig.getAppModule("ImageFightChoicePanel"),"正在加载面板....");
         });
         SocketConnection.send(CommandID.IMAGE_FIGHT_CHOICE_TYPE,i);
      }
      
      public static function choicePetQueue(param1:Array, param2:Array) : void
      {
         var user:Array = param1;
         var image:Array = param2;
         SocketConnection.addCmdListener(CommandID.IMAGE_FIGHT_SEER_PET_INDEX,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.IMAGE_FIGHT_SEER_PET_INDEX,arguments.callee);
            SocketConnection.addCmdListener(CommandID.IMAGE_FIGHT_IMAGE_PET_INDEX,function(param1:SocketEvent):void
            {
               var e:SocketEvent = param1;
               SocketConnection.removeCmdListener(CommandID.IMAGE_FIGHT_IMAGE_PET_INDEX,arguments.callee);
               SocketConnection.addCmdListener(CommandID.IMAGE_FIGHT_START_FIGHT,function():void
               {
                  SocketConnection.removeCmdListener(CommandID.IMAGE_FIGHT_START_FIGHT,arguments.callee);
                  ++stage;
               });
               SocketConnection.send(CommandID.IMAGE_FIGHT_START_FIGHT);
            });
            SocketConnection.send(CommandID.IMAGE_FIGHT_IMAGE_PET_INDEX,image[0].catchTime,image[1].catchTime,image[2].catchTime,image[3].catchTime,image[4].catchTime,image[5].catchTime);
         });
         SocketConnection.send(CommandID.IMAGE_FIGHT_SEER_PET_INDEX,user[0].catchTime,user[1].catchTime,user[2].catchTime,user[3].catchTime,user[4].catchTime,user[5].catchTime);
      }
      
      public static function onEnd(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         isEnd = true;
         isWin = Boolean(_loc2_.readUnsignedInt());
         money = _loc2_.readUnsignedInt();
         exp = _loc2_.readUnsignedInt();
      }
      
      public static function leaveMap() : void
      {
         SocketConnection.addCmdListener(CommandID.IMAGE_FIGHT_LEAVE,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.IMAGE_FIGHT_LEAVE,arguments.callee);
            SocketConnection.removeCmdListener(CommandID.IMAGE_FIGHT_END,onEnd);
            PetFightModel.type = 0;
            MapManager.changeMap(14);
         });
         SocketConnection.send(CommandID.IMAGE_FIGHT_LEAVE);
      }
   }
}
