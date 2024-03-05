package com.robot.app2.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.IXmlInfo.IPass_shopInfo;
   import com.robot.core.config.IXmlInfo.IPvp_taskInfo;
   import com.robot.core.config.Ixml.Pass_reward;
   import com.robot.core.config.Ixml.Pass_shop;
   import com.robot.core.config.Ixml.Pvp_task;
   import com.robot.core.info.peakJihad2023.PeakJihadTaskInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SOManager;
   import flash.net.SharedObject;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   
   public class PeakJihadOrderManager
   {
      
      public static var orderLevel:int = 1;
      
      public static var needGetLevel:int = 0;
      
      public static var orderExp:int = 0;
      
      public static var maxLevel:int = 100;
      
      public static var bought:Boolean = false;
      
      public static var boughtOrder:int = 0;
      
      public static var PeakJihadOrderPanelBuyLevelPop_BUY_LEVEL:String = "PeakJihadOrderPanelBuyLevelPop_BUY_LEVEL";
      
      public static var PeakJihadOrderPanelBuy_SHOP_ITEM:String = "PeakJihadOrderPanelBuy_SHOP_ITEM";
      
      public static var PeakJihadOrderPanel_GET_ORDER_REWARD:String = "PeakJihadOrderPanel_GET_ORDER_REWARD";
      
      public static var PeakJihadOrderPanel_UPDATE_REWARD_ITEM:String = "PeakJihadOrderPanel_UPDATE_REWARD_ITEM";
      
      public static var PeakJihadOrderPanel_GOT_TASK_REWARD:String = "PeakJihadOrderPanel_GOT_TASK_REWARD";
      
      public static var taskInfos:HashMap = new HashMap();
      
      public static var orderShopValue:HashMap = new HashMap();
      
      public static var freeForeverArr:HashMap = new HashMap();
      
      public static var payForeverArr:HashMap = new HashMap();
      
      public static var freeState:Array = [];
      
      public static var payState:Array = [];
      
      public static var endTime:String = "2024_4_12";
      
      private static var oriFree:int = 124851;
      
      private static var oriPay:int = 124871;
       
      
      public function PeakJihadOrderManager()
      {
         super();
      }
      
      public static function init() : void
      {
      }
      
      public static function updateOrderValue() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         KTool.getMultiValue([124849,124850]).then(function(param1:Array):void
         {
            orderLevel = KTool.subByte(param1[0],0,16) + 1;
            orderExp = KTool.subByte(param1[0],16,16);
            bought = param1[1] > 0 ? true : false;
            boughtOrder = param1[1];
            deferred.resolve(param1);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function getPassRewardStateById(param1:int) : Array
      {
         return [freeState[param1 - 1],payState[param1 - 1]];
      }
      
      public static function updateOrderRewardAllData() : Promise
      {
         var deferred:Deferred = null;
         var foreverIdx:int = 0;
         deferred = new Deferred();
         needGetLevel = 0;
         var conf:Array = Pass_reward.getItems();
         var i:int = 0;
         while(i < conf.length)
         {
            foreverIdx = oriFree + Math.floor((conf[i].id - 1) / 32);
            if(!freeForeverArr.containsKey(foreverIdx))
            {
               freeForeverArr.add(foreverIdx,0);
            }
            foreverIdx = oriPay + Math.floor((conf[i].id - 1) / 32);
            if(!payForeverArr.containsKey(foreverIdx))
            {
               payForeverArr.add(foreverIdx,0);
            }
            i++;
         }
         free().then(function():Promise
         {
            return pay();
         }).then(function():void
         {
            deferred.resolve(1);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      private static function free() : Promise
      {
         var deferred:Deferred = null;
         var conf:Array = null;
         var keys1:Array = null;
         deferred = new Deferred();
         conf = Pass_reward.getItems();
         keys1 = freeForeverArr.getKeys();
         KTool.getMultiValue(keys1).then(function(param1:Array):void
         {
            var _loc4_:int = 0;
            var _loc5_:int = 0;
            var _loc6_:int = 0;
            var _loc7_:int = 0;
            var _loc8_:* = false;
            var _loc9_:int = 0;
            var _loc2_:int = 0;
            while(_loc2_ < keys1.length)
            {
               freeForeverArr.add(keys1[_loc2_],param1[_loc2_]);
               _loc2_++;
            }
            freeState = [];
            var _loc3_:int = 0;
            while(_loc3_ < conf.length)
            {
               _loc4_ = oriFree + Math.floor((conf[_loc3_].id - 1) / 32);
               _loc5_ = (conf[_loc3_].id - 1) % 32 + 1;
               _loc6_ = int(freeForeverArr.getValue(_loc4_));
               _loc7_ = int(KTool.getBit(_loc6_,_loc5_));
               _loc8_ = conf[_loc3_].freereward.length > 0;
               if((_loc9_ = _loc7_ == 1 ? 2 : (orderLevel >= conf[_loc3_].id ? (_loc8_ ? 1 : 2) : 0)) == 1)
               {
                  if(needGetLevel == 0)
                  {
                     needGetLevel = conf[_loc3_].id;
                  }
                  else
                  {
                     needGetLevel = Math.min(needGetLevel,conf[_loc3_].id);
                  }
               }
               freeState.push(_loc9_);
               _loc3_++;
            }
            deferred.resolve(freeState);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      private static function pay() : Promise
      {
         var deferred:Deferred = null;
         var conf:Array = null;
         var keys2:Array = null;
         deferred = new Deferred();
         conf = Pass_reward.getItems();
         keys2 = payForeverArr.getKeys();
         KTool.getMultiValue(keys2).then(function(param1:Array):void
         {
            var _loc4_:int = 0;
            var _loc5_:int = 0;
            var _loc6_:int = 0;
            var _loc7_:int = 0;
            var _loc8_:int = 0;
            var _loc2_:int = 0;
            while(_loc2_ < keys2.length)
            {
               payForeverArr.add(keys2[_loc2_],param1[_loc2_]);
               _loc2_++;
            }
            payState = [];
            var _loc3_:int = 0;
            while(_loc3_ < conf.length)
            {
               _loc4_ = oriPay + Math.floor((conf[_loc3_].id - 1) / 32);
               _loc5_ = (conf[_loc3_].id - 1) % 32 + 1;
               _loc6_ = int(payForeverArr.getValue(_loc4_));
               _loc8_ = (_loc7_ = int(KTool.getBit(_loc6_,_loc5_))) == 1 ? 2 : (orderLevel >= conf[_loc3_].id ? 1 : 0);
               if(!bought)
               {
                  _loc8_ = 0;
               }
               if(_loc8_ == 1)
               {
                  if(needGetLevel == 0)
                  {
                     needGetLevel = conf[_loc3_].id;
                  }
                  else
                  {
                     needGetLevel = Math.min(needGetLevel,conf[_loc3_].id);
                  }
               }
               payState.push(_loc8_);
               _loc3_++;
            }
            deferred.resolve(payState);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function updateOrderShopValue() : Promise
      {
         var deferred:Deferred = null;
         var conf:Array = null;
         deferred = new Deferred();
         conf = Pass_shop.getItems().filter(function(param1:IPass_shopInfo, param2:int, param3:Array):Boolean
         {
            return param1.userinfo > 0;
         });
         var arr:Array = conf.map(function(param1:IPass_shopInfo, param2:int, param3:Array):int
         {
            return param1.userinfo;
         });
         PeakJihadOrderManager.orderShopValue.clear();
         KTool.getMultiValue(arr).then(function(param1:Array):void
         {
            if(param1.length != conf.length)
            {
               DebugTrace.show("出错啦!数据不对等");
               return;
            }
            var _loc2_:int = 0;
            while(_loc2_ < conf.length)
            {
               PeakJihadOrderManager.orderShopValue.add(conf[_loc2_].id,param1[_loc2_]);
               _loc2_++;
            }
            deferred.resolve(param1);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function showOrder() : void
      {
         var key:String;
         var item:String;
         updateOrderValue().then(function():void
         {
         });
         endTime = new Date(endTime.replace(/_/g,"/")).time();
         key = "PeakJihadOrderManager_endTime_" + endTime + "_" + MainManager.actorInfo.userID;
         item = getItem(key);
         if(!item)
         {
            setItem(key,"1");
         }
      }
      
      public static function updateTaskInfo() : Promise
      {
         var deferred:Deferred = null;
         var weekSeasonValue:Array = null;
         deferred = new Deferred();
         weekSeasonValue = [];
         KTool.getMultiValue([203901,203911,203921,20601,124931]).then(function(param1:Array):void
         {
            var _loc4_:* = undefined;
            var _loc5_:* = undefined;
            var _loc6_:* = undefined;
            var _loc2_:* = [];
            var _loc3_:* = 0;
            while(_loc3_ < 3)
            {
               _loc4_ = KTool.subByte(param1[0],_loc3_ * 8,8);
               _loc5_ = KTool.subByte(param1[1],_loc3_ * 8,8);
               (_loc6_ = new PeakJihadTaskInfo()).id = _loc4_;
               _loc6_.progress = _loc5_;
               _loc6_.max_progress = Pvp_task.getItem(_loc4_).value;
               _loc6_.state = KTool.getBit(param1[2],_loc3_ + 1) == 1 ? 2 : (_loc6_.max_progress <= _loc6_.progress ? 1 : 0);
               _loc2_.push(_loc6_);
               _loc3_++;
            }
            taskInfos.add(1,KTool.clone(_loc2_));
            weekSeasonValue = [param1[3],param1[4]];
         }).then(function():Promise
         {
            var values:*;
            var userinfoArr:*;
            var weekSeasonTasks:* = [];
            var tasks:* = Pvp_task.getItems().filter(function(param1:IPvp_taskInfo, param2:int, param3:Array):Boolean
            {
               return param1.time == 2;
            });
            tasks.sortOn("id",Array.NUMERIC);
            values = tasks.filter(function(param1:IPvp_taskInfo, param2:int, param3:Array):Boolean
            {
               return param1.pos == 0;
            });
            userinfoArr = values.map(function(param1:IPvp_taskInfo, param2:int, param3:Array):int
            {
               return param1.userinfo;
            });
            return setuserinfo(weekSeasonTasks,userinfoArr,tasks,weekSeasonValue,0);
         }).then(function():Promise
         {
            var values:*;
            var userinfoArr:*;
            var weekSeasonTasks:* = [];
            var tasks:* = Pvp_task.getItems().filter(function(param1:IPvp_taskInfo, param2:int, param3:Array):Boolean
            {
               return param1.time == 4;
            });
            tasks.sortOn("id",Array.NUMERIC);
            values = tasks.filter(function(param1:IPvp_taskInfo, param2:int, param3:Array):Boolean
            {
               return param1.pos == 0;
            });
            userinfoArr = values.map(function(param1:IPvp_taskInfo, param2:int, param3:Array):int
            {
               return param1.userinfo;
            });
            return setuserinfo(weekSeasonTasks,userinfoArr,tasks,weekSeasonValue,1);
         }).then(function():void
         {
            deferred.resolve(1);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      private static function setuserinfo(param1:Array, param2:Array, param3:Array, param4:Array, param5:int) : Promise
      {
         var deferred:Deferred = null;
         var arr:Array = null;
         var weekSeasonTasks:Array = param1;
         var userinfoArr:Array = param2;
         var tasks:Array = param3;
         var weekSeasonValue:Array = param4;
         var j:int = param5;
         deferred = new Deferred();
         arr = [2,4];
         KTool.getMultiValue(userinfoArr).then(function(param1:Array):void
         {
            var _loc3_:int = 0;
            var _loc4_:int = 0;
            var _loc5_:PeakJihadTaskInfo = null;
            var _loc6_:int = 0;
            var _loc2_:int = 0;
            while(_loc2_ < param1.length)
            {
               _loc3_ = int(param1[_loc2_]);
               _loc4_ = 0;
               while(_loc4_ < 2)
               {
                  _loc5_ = new PeakJihadTaskInfo();
                  _loc6_ = _loc2_ * 2 + _loc4_;
                  _loc5_.id = tasks[_loc6_].id;
                  _loc5_.progress = KTool.subByte(_loc3_,16 * tasks[_loc6_].pos,16);
                  _loc5_.max_progress = ~~tasks[_loc6_].value;
                  _loc5_.state = KTool.getBit(weekSeasonValue[j],_loc6_ + 1) == 1 ? 2 : (_loc5_.max_progress <= _loc5_.progress ? 1 : 0);
                  weekSeasonTasks.push(_loc5_);
                  _loc4_++;
               }
               _loc2_++;
            }
            taskInfos.add(arr[j],KTool.clone(weekSeasonTasks));
            deferred.resolve(1);
         },function():void
         {
            deferred.resolve(0);
         });
         return deferred.promise;
      }
      
      public static function getTaskInfoById(param1:*) : PeakJihadTaskInfo
      {
         var info:Array;
         var item:Array;
         var conf:IPvp_taskInfo = null;
         var id:* = param1;
         if(typeof id == "int")
         {
            conf = Pvp_task.getItem(id);
         }
         else
         {
            conf = id as IPvp_taskInfo;
         }
         info = taskInfos.getValue(conf.time);
         item = info.filter(function(param1:PeakJihadTaskInfo, param2:int, param3:Array):Boolean
         {
            return param1.id == conf.id;
         });
         if(item.length > 0)
         {
            item[0].progress = Math.min(item[0].progress,conf.value);
            return item[0];
         }
         if(conf)
         {
            DebugTrace.show("task_id_" + conf.id + "没拉到服务器数据");
         }
         return null;
      }
      
      public static function getTaskInfoSortByTime(param1:int) : *
      {
         var time:int = param1;
         var infos:Array = taskInfos.getValue(time);
         var get:Array = infos.filter(function(param1:PeakJihadTaskInfo, param2:int, param3:Array):Boolean
         {
            return param1.state == 1;
         });
         var go:Array = infos.filter(function(param1:PeakJihadTaskInfo, param2:int, param3:Array):Boolean
         {
            return param1.state == 0;
         });
         var got:Array = infos.filter(function(param1:PeakJihadTaskInfo, param2:int, param3:Array):Boolean
         {
            return param1.state == 2;
         });
         var all:Array = get.concat(go).concat(got);
         return KTool.clone(all);
      }
      
      private static function setItem(param1:String, param2:String) : void
      {
         var _loc3_:SharedObject = SOManager.getUserSO("key");
         _loc3_.data["value"] = param2;
         _loc3_.flush();
      }
      
      private static function getItem(param1:String) : String
      {
         var _loc2_:SharedObject = SOManager.getUserSO(param1);
         return String(_loc2_.data["value"]);
      }
   }
}
