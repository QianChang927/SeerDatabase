package com.robot.app.control
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class JNBZZLGController
   {
       
      
      public function JNBZZLGController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(isInActivity())
         {
            SocketConnection.addCmdListener(41902,cmdHandle);
         }
      }
      
      private static function cmdHandle(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = int(_loc2_.readUnsignedInt());
         if(_loc3_ == 1)
         {
            ModuleManager.showAppModule("JNBZZLGTipPanel",_loc4_);
         }
      }
      
      private static function isInActivity() : Boolean
      {
         var _loc1_:Boolean = false;
         var _loc2_:Date = new Date(2022,8,30);
         var _loc3_:Date = new Date(2022,9,14);
         var _loc4_:Date;
         if((_loc4_ = SystemTimerManager.sysBJDate).time < _loc3_.time && _loc4_.time >= _loc2_.time)
         {
            _loc1_ = true;
         }
         return _loc1_;
      }
   }
}
