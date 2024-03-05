package com.robot.core.config
{
   import com.robot.core.manager.SystemTimerManager;
   
   public class UpdateConfig
   {
      
      private static var _xml:XML;
      
      private static var _protectStart:uint;
      
      private static var _protectEnd:uint;
      
      private static var _broadcastStart:uint;
      
      private static var _broadcastEnd:uint;
      
      private static var _webAlertStart:uint;
      
      private static var _webAlertEnd:uint;
      
      public static var loadingArray:Array = [];
      
      public static var niuChangeMapArray:Array = [];
       
      
      public function UpdateConfig()
      {
         super();
      }
      
      public static function setup(param1:XML) : void
      {
         var _loc2_:XML = null;
         _xml = param1;
         for each(_loc2_ in param1.loading[0].list)
         {
            loadingArray.push(_loc2_.toString());
         }
         for each(_loc2_ in param1.newsChangeMap[0].list)
         {
            niuChangeMapArray.push(_loc2_.@id);
         }
         _protectStart = getTime(_xml.banProtect[0],0);
         _protectEnd = getTime(_xml.banProtect[0],1);
         _broadcastStart = getTime(_xml.banBroadcast[0],0);
         _broadcastEnd = getTime(_xml.banBroadcast[0],1);
         _webAlertStart = getTime(_xml.webAlert[0],0);
         _webAlertEnd = getTime(_xml.webAlert[0],1);
      }
      
      public static function get banProtect() : Boolean
      {
         if(SystemTimerManager.time > _protectStart && SystemTimerManager.time < _protectEnd)
         {
            return true;
         }
         return false;
      }
      
      public static function get banBroadcast() : Boolean
      {
         if(SystemTimerManager.time > _broadcastStart && SystemTimerManager.time < _broadcastEnd)
         {
            return true;
         }
         return false;
      }
      
      public static function get activeAlert() : Boolean
      {
         if(SystemTimerManager.time > _webAlertStart && SystemTimerManager.time < _webAlertEnd)
         {
            return true;
         }
         return false;
      }
      
      public static function get activeString() : String
      {
         var _loc3_:XML = null;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc7_:uint = 0;
         var _loc1_:* = "";
         var _loc2_:XMLList = _xml.webAlert[0].children();
         for each(_loc3_ in _loc2_)
         {
            _loc4_ = getTime(_loc3_,0);
            _loc5_ = getTime(_loc3_,1);
            if(SystemTimerManager.time < _loc4_)
            {
               _loc6_ = getNumber(_loc3_,0,3);
               if((_loc7_ = getNumber(_loc3_,0,4)) == 0)
               {
                  _loc1_ = _loc1_ + "★" + _loc3_.@name + "将于" + _loc6_ + "点开始\n";
               }
               else
               {
                  _loc1_ = _loc1_ + "★" + _loc3_.@name + "将于" + _loc6_ + "点" + _loc7_ + "分开始\n";
               }
            }
            else if(SystemTimerManager.time > _loc4_ && SystemTimerManager.time < _loc5_)
            {
               _loc1_ = _loc1_ + "★" + _loc3_.@name + "正在进行中\n";
            }
         }
         return _loc1_;
      }
      
      private static function getTime(param1:XML, param2:uint) : uint
      {
         var _loc3_:Array = String(param1.@time.split("|")[param2]).split(".");
         return SystemTimerManager.getTimeByDate(uint(_loc3_[0]),uint(_loc3_[1]),uint(_loc3_[2]),uint(_loc3_[3]),uint(_loc3_[4]));
      }
      
      private static function getNumber(param1:XML, param2:uint, param3:uint) : uint
      {
         var _loc4_:Array = String(param1.@time.split("|")[param2]).split(".");
         return uint(_loc4_[param3]);
      }
   }
}
