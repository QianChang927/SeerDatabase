package com.robot.core.config.xml
{
   import com.robot.core.manager.SystemTimerManager;
   import org.taomee.ds.HashMap;
   
   public class RecoveryXMLInfo
   {
      
      private static var xmlClass:Class = RecoveryXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var _exchangeMap1:HashMap;
      
      private static var _global1:uint;
      
      private static var _beanRate1:uint;
      
      private static var _beanRate2:uint;
      
      private static var _exchangeMap2:HashMap;
      
      private static var _global2:uint;
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var _dataId:Array = [];
      
      private static var _curStage:uint;
      
      private static var _curSeason:uint;
      
      private static var _contributionAdd:uint;
      
      private static var _dailyAddMax:uint;
      
      private static var _starttime:String;
      
      private static var _endtime:String;
      
      {
         setup();
      }
      
      public function RecoveryXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc6_:XML = null;
         var _loc7_:XMLList = null;
         var _loc8_:XML = null;
         _dataMap = new HashMap();
         _exchangeMap1 = new HashMap();
         _exchangeMap2 = new HashMap();
         curStage = uint(xml.Recovery[0].@CurStage);
         curSeason = uint(xml.Recovery[0].@CurSeason);
         starttime = String(xml.Recovery[0].@Start);
         endtime = String(xml.Recovery[0].@End);
         _contributionAdd = uint(xml.Recovery[0].Needs[0].@ContributionAdd);
         _dailyAddMax = uint(xml.Recovery[0].Needs[0].@DailyAddMax);
         var _loc1_:XMLList = xml.elements("Recovery").elements("Needs").elements("Need");
         for each(_loc2_ in _loc1_)
         {
            _dataMap.add(int(_loc2_.@ItemID),_loc2_);
         }
         _loc3_ = xml.elements("Recovery").elements("Rewards").elements("Type")[0];
         _loc4_ = _loc3_.elements("Reward");
         global1 = uint(_loc3_.@GlobalKey);
         beanRate1 = uint(_loc3_.@BeanRate);
         for each(_loc5_ in _loc4_)
         {
            _exchangeMap1.add(int(_loc5_.@ItemID),_loc5_);
         }
         _loc7_ = (_loc6_ = xml.elements("Recovery").elements("Rewards").elements("Type")[1]).elements("Reward");
         global2 = uint(_loc6_.@GlobalKey);
         beanRate2 = uint(_loc6_.@BeanRate);
         for each(_loc8_ in _loc7_)
         {
            _exchangeMap2.add(int(_loc8_.@ItemID),_loc8_);
         }
      }
      
      public static function getListItem() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _dataMap.getValues())
         {
            _loc1_.push(int(_loc2_.@ItemID));
         }
         return _loc1_;
      }
      
      public static function getListItemName() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _dataMap.getValues())
         {
            _loc1_.push(_loc2_.@Name);
         }
         return _loc1_;
      }
      
      public static function getExchangeListItem1() : Array
      {
         var _loc3_:XML = null;
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         for each(_loc3_ in _exchangeMap1.getValues())
         {
            _loc1_.push(_loc3_.@ItemID);
         }
         return _loc1_;
      }
      
      public static function getExchangeXML(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap1.getValues())
         {
            if(_loc3_.@ItemID == param1)
            {
               return _loc3_.@CoinNeed;
            }
         }
         return -1;
      }
      
      public static function getIsBeansFlag(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap1.getValues())
         {
            if(_loc3_.@ItemID == param1)
            {
               if(_loc3_.@BeansFlag)
               {
                  return _loc3_.@BeansFlag;
               }
            }
         }
         return -1;
      }
      
      public static function getExchangegGlobalXML1(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap1.getValues())
         {
            if(_loc3_.@ItemID == param1)
            {
               if(_loc3_.@AllMax)
               {
                  return _loc3_.@AllMax;
               }
            }
         }
         return -1;
      }
      
      public static function getExchangegDayCount1(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap1.getValues())
         {
            if(_loc3_.@ItemID == param1)
            {
               if(_loc3_.@DayMax)
               {
                  return _loc3_.@DayMax;
               }
            }
         }
         return -1;
      }
      
      public static function getExchangegCount1(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap1.getValues())
         {
            if(_loc3_.@ItemID == param1)
            {
               if(_loc3_.@PerMax)
               {
                  return _loc3_.@PerMax;
               }
            }
         }
         return -1;
      }
      
      public static function getExchangeID1(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap1.getValues())
         {
            if(_loc3_.@ItemID == param1)
            {
               return _loc3_.@ID;
            }
         }
         return -1;
      }
      
      public static function getExchangeID2(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap1.getValues())
         {
            if(_loc3_.@ID == param1)
            {
               return _loc3_.@ItemID;
            }
         }
         return -1;
      }
      
      public static function getExchangeID3(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap1.getValues())
         {
            if(_loc3_.@ID == param1)
            {
               return _loc3_.@CoinNeed;
            }
         }
         return 0;
      }
      
      public static function getExchangeAllMax(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap1.getValues())
         {
            if(_loc3_.@ID == param1)
            {
               if(_loc3_.@AllMax)
               {
                  return _loc3_.@AllMax;
               }
            }
         }
         return -1;
      }
      
      public static function getExchangePerMax(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap1.getValues())
         {
            if(_loc3_.@ID == param1)
            {
               if(_loc3_.@PerMax)
               {
                  return _loc3_.@PerMax;
               }
            }
         }
         return -1;
      }
      
      public static function getExchangeDayMax(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap1.getValues())
         {
            if(_loc3_.@ID == param1)
            {
               if(_loc3_.@DayMax)
               {
                  return _loc3_.@DayMax;
               }
            }
         }
         return -1;
      }
      
      public static function getExchangeListItem2() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _exchangeMap2.getValues())
         {
            _loc1_.push(_loc2_.@ItemID);
         }
         return _loc1_;
      }
      
      public static function getBaseExchangeXML(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap2.getValues())
         {
            if(_loc3_.@ItemID == param1)
            {
               return _loc3_.@CoinNeed;
            }
         }
         return 0;
      }
      
      public static function getJDExchangeAllMax(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap2.getValues())
         {
            if(_loc3_.@ID == param1)
            {
               if(_loc3_.@AllMax)
               {
                  return _loc3_.@AllMax;
               }
            }
         }
         return -1;
      }
      
      public static function getJDExchangePerMax(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap2.getValues())
         {
            if(_loc3_.@ID == param1)
            {
               return _loc3_.@PerMax;
            }
         }
         return 0;
      }
      
      public static function getJDExchangeDayMax(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap2.getValues())
         {
            if(_loc3_.@ID == param1)
            {
               if(_loc3_.@DayMax)
               {
                  return _loc3_.@DayMax;
               }
            }
         }
         return -1;
      }
      
      public static function getExchangeID4(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap2.getValues())
         {
            if(_loc3_.@ID == param1)
            {
               return _loc3_.@CoinNeed;
            }
         }
         return 0;
      }
      
      public static function getBaseIsBeansFlag(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap2.getValues())
         {
            if(_loc3_.@ItemID == param1)
            {
               if(_loc3_.@BeansFlag)
               {
                  return _loc3_.@BeansFlag;
               }
            }
         }
         return 0;
      }
      
      public static function getBaseExchangegGlobalXML1(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap2.getValues())
         {
            if(_loc3_.@ItemID == param1)
            {
               if(_loc3_.@AllMax)
               {
                  return _loc3_.@AllMax;
               }
            }
         }
         return 0;
      }
      
      public static function getBaseExchangeID1(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _exchangeMap2.getValues())
         {
            if(_loc3_.@ItemID == param1)
            {
               return _loc3_.@ID;
            }
         }
         return 0;
      }
      
      public static function getGoupXML(param1:int) : Array
      {
         var _loc4_:XML = null;
         var _loc2_:Array = [];
         var _loc3_:int = param1;
         for each(_loc4_ in _dataMap.getValues())
         {
            if(_loc4_.@id == param1)
            {
               _loc2_.push(_loc4_.@ItemID);
            }
         }
         return _loc2_;
      }
      
      public static function getRewardXML(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _dataMap.getValues())
         {
            if(_loc3_.@ItemID == param1)
            {
               return _loc3_.@Price;
            }
         }
         return 0;
      }
      
      public static function getNameXML(param1:String) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _dataMap.getValues())
         {
            if(_loc3_.@Name == param1)
            {
               return _loc3_.@ItemID;
            }
         }
         return 0;
      }
      
      public static function getIDXML(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _dataMap.getValues())
         {
            if(_loc3_.@ItemID == param1)
            {
               return _loc3_.@ID;
            }
         }
         return 0;
      }
      
      public static function isintime() : Boolean
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc1_:int = int(SystemTimerManager.time);
         _loc2_ = SystemTimerManager.get0DateByStr(starttime).time / 1000;
         _loc3_ = SystemTimerManager.get24DateByStr(endtime).time / 1000;
         if(_loc1_ > _loc2_ && _loc1_ < _loc3_)
         {
            return true;
         }
         return false;
      }
      
      public static function isintime1() : Boolean
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc1_:int = int(SystemTimerManager.time);
         _loc2_ = SystemTimerManager.get0DateByStr(starttime).time / 1000;
         _loc3_ = SystemTimerManager.get24DateByStr(endtime).time / 1000;
         if(_loc1_ > _loc2_ && _loc1_ < _loc3_ - 86400)
         {
            return true;
         }
         return false;
      }
      
      public static function get curStage() : uint
      {
         return _curStage;
      }
      
      public static function set curStage(param1:uint) : void
      {
         _curStage = param1;
      }
      
      public static function get curSeason() : uint
      {
         return _curSeason;
      }
      
      public static function set curSeason(param1:uint) : void
      {
         _curSeason = param1;
      }
      
      public static function get starttime() : String
      {
         return _starttime;
      }
      
      public static function set starttime(param1:String) : void
      {
         _starttime = param1;
      }
      
      public static function get endtime() : String
      {
         return _endtime;
      }
      
      public static function set endtime(param1:String) : void
      {
         _endtime = param1;
      }
      
      public static function get contributionAdd() : uint
      {
         return _contributionAdd;
      }
      
      public static function set contributionAdd(param1:uint) : void
      {
         _contributionAdd = param1;
      }
      
      public static function get dailyAddMax() : uint
      {
         return _dailyAddMax;
      }
      
      public static function set dailyAddMax(param1:uint) : void
      {
         _dailyAddMax = param1;
      }
      
      public static function get global1() : uint
      {
         return _global1;
      }
      
      public static function set global1(param1:uint) : void
      {
         _global1 = param1;
      }
      
      public static function get global2() : uint
      {
         return _global2;
      }
      
      public static function set global2(param1:uint) : void
      {
         _global2 = param1;
      }
      
      public static function get beanRate1() : uint
      {
         return _beanRate1;
      }
      
      public static function set beanRate1(param1:uint) : void
      {
         _beanRate1 = param1;
      }
      
      public static function get beanRate2() : uint
      {
         return _beanRate2;
      }
      
      public static function set beanRate2(param1:uint) : void
      {
         _beanRate2 = param1;
      }
   }
}
