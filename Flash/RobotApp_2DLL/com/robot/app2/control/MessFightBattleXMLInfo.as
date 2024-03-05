package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.SystemTimerManager;
   import flash.events.Event;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import org.taomee.ds.HashMap;
   
   public class MessFightBattleXMLInfo
   {
      
      private static var _xmlList:XMLList;
      
      private static var _dataHM:HashMap;
      
      private static var _xmlObject:XML = null;
      
      private static var _fun:Function = null;
      
      private static var _urlLoader:URLLoader;
      
      public static var currentPeriodId:int;
       
      
      public function MessFightBattleXMLInfo()
      {
         super();
      }
      
      private static function setup(param1:Function) : void
      {
         _fun = param1;
         _urlLoader = new URLLoader();
         _urlLoader.addEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader.load(new URLRequest(ClientConfig.getResPath("xml/mess_fight_battle.xml")));
      }
      
      private static function onLoadXMLComplete(param1:Event) : void
      {
         var _loc2_:XML = null;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         _xmlObject = XML(param1.target.data);
         _xmlList = _xmlObject.elements("Period");
         _dataHM = new HashMap();
         for each(_loc2_ in _xmlList)
         {
            _dataHM.add(int(_loc2_.@Id),_loc2_);
            if(currentPeriodId == 0)
            {
               _loc3_ = int(_loc2_.@From);
               _loc4_ = int(_loc2_.@To);
               _loc5_ = uint(SystemTimerManager.getTimeByDate(uint(_loc3_ / 10000),uint(int(_loc3_ / 100) - int(_loc3_ / 10000) * 100),uint(_loc3_ - int(_loc3_ / 100) * 100),0));
               _loc6_ = uint(SystemTimerManager.getTimeByDate(uint(_loc4_ / 10000),uint(int(_loc4_ / 100) - int(_loc4_ / 10000) * 100),uint(_loc4_ - int(_loc4_ / 100) * 100),23));
               if(SystemTimerManager.time > _loc5_ && SystemTimerManager.time < _loc6_)
               {
                  currentPeriodId = int(_loc2_.@Id);
               }
            }
         }
         _urlLoader.removeEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader = null;
         if(_fun != null)
         {
            _fun.call();
         }
      }
      
      public static function getTotalPeriod(param1:Function) : void
      {
         var fun:Function = param1;
         if(_dataHM != null)
         {
            if(fun != null)
            {
               fun(_dataHM.length);
            }
         }
         else
         {
            setup(function():void
            {
               if(fun != null)
               {
                  fun(_dataHM.length);
               }
            });
         }
      }
      
      public static function getAllPeriodId(param1:Function) : void
      {
         var fun:Function = param1;
         if(_dataHM != null)
         {
            if(fun != null)
            {
               fun(_dataHM.getKeys());
            }
         }
         else
         {
            setup(function():void
            {
               if(fun != null)
               {
                  fun(_dataHM.getKeys());
               }
            });
         }
      }
      
      public static function getLatestPeriodId(param1:String, param2:Function) : void
      {
         var periodXML:XML = null;
         var k:uint = 0;
         var startStr:String = null;
         var endStr:String = null;
         var currentDate:String = param1;
         var fun:Function = param2;
         if(_dataHM != null)
         {
            k = 0;
            while(k < _dataHM.length)
            {
               periodXML = _dataHM.getValue(k + 1);
               startStr = periodXML.@From.toString();
               endStr = periodXML.@To.toString();
               if(currentDate >= startStr && currentDate <= endStr)
               {
                  if(fun != null)
                  {
                     fun(periodXML.@Id);
                  }
               }
               k++;
            }
         }
         else
         {
            setup(function():void
            {
               var _loc1_:String = null;
               var _loc2_:String = null;
               k = 0;
               while(k < _dataHM.length)
               {
                  periodXML = _dataHM.getValue(k + 1);
                  _loc1_ = periodXML.@From.toString();
                  _loc2_ = periodXML.@To.toString();
                  if(currentDate >= _loc1_ && currentDate <= _loc2_)
                  {
                     if(fun != null)
                     {
                        fun(periodXML.@Id);
                     }
                  }
                  ++k;
               }
            });
         }
      }
      
      public static function getPeriodDuring(param1:uint, param2:Function) : void
      {
         var startDate:String = null;
         var endDate:String = null;
         var id:uint = param1;
         var fun:Function = param2;
         if(_dataHM != null)
         {
            startDate = String(_dataHM.getValue(id).@From.toString());
            endDate = String(_dataHM.getValue(id).@To.toString());
            if(fun != null)
            {
               fun(startDate,endDate);
            }
         }
         else
         {
            setup(function():void
            {
               startDate = _dataHM.getValue(id).@From.toString();
               endDate = _dataHM.getValue(id).@To.toString();
               if(fun != null)
               {
                  fun(startDate,endDate);
               }
            });
         }
      }
      
      public static function getWinGoalGift(param1:uint, param2:uint, param3:Function) : void
      {
         var xlist:XMLList = null;
         var array:Array = null;
         var periodXML:XML = null;
         var winBonusXML:XML = null;
         var bonusXML:XML = null;
         var xx:XML = null;
         var id:uint = param1;
         var index:uint = param2;
         var fun:Function = param3;
         array = [];
         if(_dataHM != null)
         {
            periodXML = XML(_dataHM.getValue(id));
            winBonusXML = periodXML.elements("WinBonus")[0];
            bonusXML = winBonusXML.elements("Bonus")[index];
            xlist = bonusXML.elements("Item");
            for each(xx in xlist)
            {
               array.push(new Array(xx.@Id.toString(),xx.@Count.toString()));
            }
            if(fun != null)
            {
               fun(array);
            }
         }
         else
         {
            setup(function():void
            {
               var _loc4_:XML = null;
               var _loc1_:XML = XML(_dataHM.getValue(id));
               var _loc2_:XML = _loc1_.elements("WinBonus")[0];
               var _loc3_:XML = _loc2_.elements("Bonus")[index];
               xlist = _loc3_.elements("Item");
               for each(_loc4_ in xlist)
               {
                  array.push(new Array(_loc4_.@Id.toString(),_loc4_.@Count.toString()));
               }
               if(fun != null)
               {
                  fun(array);
               }
            });
         }
      }
      
      public static function getRankGift(param1:uint, param2:uint, param3:Function) : void
      {
         var xlist:XMLList = null;
         var array:Array = null;
         var periodXML:XML = null;
         var rankBonusXML:XML = null;
         var bonusXML:XML = null;
         var xx:XML = null;
         var id:uint = param1;
         var index:uint = param2;
         var fun:Function = param3;
         array = [];
         if(_dataHM != null)
         {
            periodXML = XML(_dataHM.getValue(id));
            rankBonusXML = periodXML.elements("RankBonus")[0];
            bonusXML = rankBonusXML.elements("Bonus")[index];
            xlist = bonusXML.elements("Item");
            for each(xx in xlist)
            {
               array.push(new Array(xx.@Id.toString(),xx.@Count.toString()));
            }
            if(fun != null)
            {
               fun(array);
            }
         }
         else
         {
            setup(function():void
            {
               var _loc4_:XML = null;
               var _loc1_:XML = XML(_dataHM.getValue(id));
               var _loc2_:XML = _loc1_.elements("RankBonus")[0];
               var _loc3_:XML = _loc2_.elements("Bonus")[index];
               xlist = _loc3_.elements("Item");
               for each(_loc4_ in xlist)
               {
                  array.push(new Array(_loc4_.@Id.toString(),_loc4_.@Count.toString()));
               }
               if(fun != null)
               {
                  fun(array);
               }
            });
         }
      }
      
      public static function getWinGoal(param1:uint, param2:Function) : void
      {
         var xlist:XMLList = null;
         var array:Array = null;
         var periodXML:XML = null;
         var winBonusXML:XML = null;
         var xx:XML = null;
         var id:uint = param1;
         var fun:Function = param2;
         array = [];
         if(_dataHM != null)
         {
            periodXML = XML(_dataHM.getValue(id));
            winBonusXML = periodXML.elements("WinBonus")[0];
            xlist = winBonusXML.elements("Bonus");
            for each(xx in xlist)
            {
               array.push(int(xx.@WinTimes));
            }
            if(fun != null)
            {
               fun(array);
            }
         }
         else
         {
            setup(function():void
            {
               var _loc3_:XML = null;
               var _loc1_:XML = XML(_dataHM.getValue(id));
               var _loc2_:XML = _loc1_.elements("WinBonus")[0];
               xlist = _loc2_.elements("Bonus");
               for each(_loc3_ in xlist)
               {
                  array.push(int(_loc3_.@WinTimes));
               }
               if(fun != null)
               {
                  fun(array);
               }
            });
         }
      }
   }
}
