package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.EmptySkeletonStrategy;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   
   public class ChangeBodyForExpController
   {
      
      public static var changeTime:uint;
      
      public static var petIndex:int;
      
      public static var clock:uint;
       
      
      public function ChangeBodyForExpController()
      {
         super();
      }
      
      public static function checkStatus() : void
      {
         SocketConnection.sendWithCallback2(45561,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            clock = _loc2_.readUnsignedInt();
            DebugTrace.show(new Date(clock * 1000).toString() + "--day:" + clock + "--现在系统时间：" + SystemTimerManager.time);
            petIndex = _loc2_.readInt();
            if(clock > SystemTimerManager.time)
            {
               changeTime = 0;
            }
            else
            {
               changeTime = SystemTimerManager.time - clock;
            }
            SystemTimerManager.addTickFun(onChangeIng);
         },[4,0]);
      }
      
      private static function onChangeIng() : void
      {
         if(changeTime >= 1200)
         {
            SystemTimerManager.removeTickFun(onChangeIng);
            MainManager.actorModel.hideExpAlarm();
            if(MainManager.actorModel)
            {
               MainManager.actorModel.skeleton = new EmptySkeletonStrategy();
               MainManager.actorModel.clearOldSkeleton();
               MainManager.actorModel.addChild(MainManager.actorModel.clickMc);
            }
            ModuleManager.showModule(ClientConfig.getAppModule("ChangeBodyForExpNoticePanel"));
            SocketConnection.sendWithCallback2(45561,null,[2,0]);
         }
         if(clock > SystemTimerManager.time)
         {
            changeTime = 0;
         }
         else
         {
            changeTime = SystemTimerManager.time - clock;
         }
      }
   }
}
