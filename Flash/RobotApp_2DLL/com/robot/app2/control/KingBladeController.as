package com.robot.app2.control
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class KingBladeController
   {
      
      public static const FEED_TYPE_LEVEL:int = 0;
      
      public static const FEED_TYPE_BEING:int = 1;
      
      public static const FEED_TYPE_NATURE:int = 2;
      
      public static const FEED_TYPE_HP:int = 3;
      
      public static const FEED_TYPE_ATK:int = 4;
      
      public static const FEED_TYPE_DEF:int = 5;
      
      public static const FEED_TYPE_SA:int = 6;
      
      public static const FEED_TYPE_SD:int = 7;
      
      public static const FEED_TYPE_SPEED:int = 8;
      
      public static const FEED_PET:int = 6;
      
      private static const PRE_TASK_BUFF:int = 721;
      
      private static var _map:BaseMapProcess;
      
      public static var isDialogOpen:Boolean = false;
       
      
      public function KingBladeController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         SocketConnection.send(1022,86059943);
         checkPreTask();
      }
      
      private static function checkPreTask() : void
      {
         if(BitBuffSetClass.getState(22437))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("KingBladeMainPanel"));
         }
         else
         {
            playStory(function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("KingBladeMainPanel"));
            });
         }
      }
      
      public static function playStory(param1:Function = null) : void
      {
         var cb:Function = param1;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("king_blade_pre_task"),function():void
         {
            if(!BufferRecordManager.getMyState(PRE_TASK_BUFF))
            {
               SocketConnection.send(1022,86059944);
               BufferRecordManager.setMyState(PRE_TASK_BUFF,true);
            }
            if(null != cb)
            {
               cb();
            }
         },true);
      }
      
      public static function queryFeedInfo(param1:Function = null) : void
      {
         var cb:Function = param1;
         SocketConnection.addCmdListener(CommandID.ELINGSHOU_COME_BACK_GET_CULTIVATE_INFO,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.ELINGSHOU_COME_BACK_GET_CULTIVATE_INFO,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:Array;
            (_loc4_ = new Array())[FEED_TYPE_LEVEL] = _loc3_.readUnsignedInt();
            _loc4_[FEED_TYPE_BEING] = _loc3_.readUnsignedInt();
            _loc4_[FEED_TYPE_NATURE] = _loc3_.readUnsignedInt();
            _loc4_[FEED_TYPE_HP] = _loc3_.readUnsignedInt();
            _loc4_[FEED_TYPE_ATK] = _loc3_.readUnsignedInt();
            _loc4_[FEED_TYPE_DEF] = _loc3_.readUnsignedInt();
            _loc4_[FEED_TYPE_SA] = _loc3_.readUnsignedInt();
            _loc4_[FEED_TYPE_SD] = _loc3_.readUnsignedInt();
            _loc4_[FEED_TYPE_SPEED] = _loc3_.readUnsignedInt();
            if(null != cb)
            {
               cb(_loc4_);
            }
         });
         SocketConnection.send(CommandID.ELINGSHOU_COME_BACK_GET_CULTIVATE_INFO,FEED_PET);
      }
   }
}
