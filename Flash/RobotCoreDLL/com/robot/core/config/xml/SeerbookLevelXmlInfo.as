package com.robot.core.config.xml
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class SeerbookLevelXmlInfo
   {
      
      private static var xmlClass:Class = SeerbookLevelXmlInfo_xmlClass;
      
      private static var xml:XML;
      
      private static var levels:HashMap;
      
      private static var rewards:HashMap;
      
      public static var maxLevel:int;
      
      private static var foreverKeys:Array;
      
      private static var foreverValues:Array;
      
      {
         setup();
      }
      
      public function SeerbookLevelXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         xml = XML(new xmlClass());
         parseXml();
      }
      
      private static function parseXml() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         var _loc4_:int = 0;
         levels = new HashMap();
         rewards = new HashMap();
         foreverValues = [];
         foreverKeys = [];
         var _loc1_:XMLList = xml.Level;
         maxLevel = 0;
         for each(_loc2_ in _loc1_)
         {
            levels.add(int(_loc2_.@ID),_loc2_);
            maxLevel = Math.max(maxLevel,int(_loc2_.@ID));
            _loc4_ = int(_loc2_.@UseValue);
            if(foreverKeys.indexOf(_loc4_) == -1)
            {
               foreverKeys.push(_loc4_);
            }
         }
         _loc1_ = xml.Reward;
         for each(_loc3_ in _loc1_)
         {
            rewards.add(int(_loc3_.@ID),_loc3_);
         }
      }
      
      public static function getLevelXml(param1:int) : XML
      {
         return levels.getValue(param1);
      }
      
      public static function getScoreByLevel(param1:int) : int
      {
         var _loc2_:XML = levels.getValue(param1);
         if(_loc2_)
         {
            return int(_loc2_.@ExpNeed);
         }
         return 0;
      }
      
      public static function getLevelRewardState(param1:int) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:XML = levels.getValue(param1);
         var _loc4_:int = int(_loc3_.@UseValue);
         var _loc5_:int = int(_loc3_.@UseBit);
         return Boolean(foreverValues[foreverKeys.indexOf(_loc4_)] >> _loc5_ - 1 & 1);
      }
      
      public static function getRewardStates(param1:Function) : void
      {
         var fun:Function = param1;
         getMultiValueByDB(foreverKeys,function(param1:Array):void
         {
            foreverValues = param1;
            fun();
         });
      }
      
      private static function getMultiValueByDB(param1:Array, param2:Function = null) : Promise
      {
         var paramArr:ByteArray;
         var deferred:Deferred = null;
         var num:int = 0;
         var foreverArr:Array = param1;
         var func:Function = param2;
         deferred = new Deferred();
         if(null == foreverArr || foreverArr.length <= 0)
         {
            if(func != null)
            {
               func([]);
            }
            deferred.resolve([]);
            return deferred.promise;
         }
         paramArr = new ByteArray();
         for each(num in foreverArr)
         {
            paramArr.writeInt(num);
         }
         SocketConnection.sendByQueue(CommandID.GET_MULTI_FOREVER_BY_DB,[foreverArr.length,paramArr],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = new Array();
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedInt());
               _loc5_++;
            }
            if(null != func)
            {
               func(_loc4_);
            }
            deferred.resolve(_loc4_);
         });
         return deferred.promise;
      }
      
      public static function getCurLevel(param1:int) : int
      {
         var _loc3_:int = 0;
         var _loc2_:Array = getLevelXmls();
         var _loc4_:int = 0;
         while(_loc4_ < _loc2_.length)
         {
            if(param1 < int(_loc2_[_loc4_].@ExpNeed))
            {
               if(_loc4_ == 0)
               {
                  return 0;
               }
               return _loc3_;
            }
            _loc3_ = int(_loc2_[_loc4_].@ID);
            _loc4_++;
         }
         return maxLevel;
      }
      
      public static function getRewards(param1:int) : Object
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:XMLList = null;
         var _loc8_:XMLList = null;
         var _loc9_:XML = null;
         var _loc10_:XML = null;
         var _loc2_:Object = {};
         var _loc3_:Array = [];
         var _loc4_:*;
         if(_loc4_ = levels.getValue(param1))
         {
            _loc5_ = int(_loc4_.@RewardID);
            if(_loc6_ = rewards.getValue(_loc5_))
            {
               _loc2_.type = int(_loc6_.@Type);
               _loc2_.kind = int(_loc6_.@Kind);
               _loc2_.ishide = int(_loc6_.@ishide);
               switch(_loc2_.kind)
               {
                  case 1:
                     _loc7_ = _loc6_.Item;
                     break;
                  case 2:
                     _loc7_ = _loc6_.Monster;
                     break;
                  case 3:
                     _loc7_ = _loc6_.Mintmark;
                     break;
                  case 4:
                     _loc7_ = _loc6_.Skin;
                     break;
                  case 5:
                     _loc7_ = _loc6_.ach;
                     break;
                  case 6:
                     _loc7_ = _loc6_.Head;
                     _loc8_ = _loc6_.HeadFrame;
                     break;
                  default:
                     _loc7_ = _loc6_.Item;
               }
               for each(_loc9_ in _loc7_)
               {
                  _loc3_.push(_loc9_);
               }
               if(_loc8_)
               {
                  for each(_loc10_ in _loc8_)
                  {
                     _loc3_.push(_loc10_);
                  }
               }
            }
         }
         _loc2_.arr = _loc3_;
         return _loc2_;
      }
      
      private static function getLevelXmls() : Array
      {
         var _loc1_:Array = levels.getKeys();
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc2_.push(levels.getValue(_loc1_[_loc3_]));
            _loc3_++;
         }
         return _loc2_;
      }
      
      private static function sortFun(param1:int, param2:int) : int
      {
         if(param1 > param2)
         {
            return 1;
         }
         if(param1 < param2)
         {
            return -1;
         }
         return 0;
      }
   }
}
