package com.robot.app2.control.tm4years
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class BallGameController
   {
      
      public static var bonusTime:uint = 0;
      
      public static var num_1:uint = 0;
      
      public static var num_2:uint = 0;
      
      public static var num_3:uint = 0;
      
      private static const BONUS_ARR:Array = [3,4,5,6,8,12,15,18];
       
      
      public function BallGameController()
      {
         super();
      }
      
      public static function getBonusTime(param1:Function = null) : void
      {
         var fun:Function = param1;
         ItemManager.upDateCollection(1701043,function():void
         {
            bonusTime = ItemManager.getNumByID(1701043);
            if(fun != null)
            {
               fun(bonusTime);
            }
         });
      }
      
      public static function getBonusAward(param1:uint, param2:Function) : void
      {
         var index:uint = param1;
         var callBackFun:Function = param2;
         SocketConnection.sendByQueue(CommandID.TM4YEARS_BALL_GAME_GET_BONUS_AWARD,[index],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            if(index == 1)
            {
               num_1 = _loc3_;
            }
            if(index == 2)
            {
               num_2 = _loc3_;
            }
            if(index == 3)
            {
               num_3 = _loc3_;
            }
            callBackFun(_loc3_);
         });
      }
      
      public static function getBonusPetFrame(param1:uint) : uint
      {
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         while(_loc3_ < BONUS_ARR.length)
         {
            if(BONUS_ARR[_loc3_] == param1)
            {
               _loc2_ = uint(_loc3_ + 1);
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function destroy() : void
      {
      }
   }
}
