package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.xml.Exp_towerXmlInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class ExpTrainingController
   {
      
      private static var _instance:com.robot.app.control.ExpTrainingController;
      
      public static var REWARD_NEED_TIME:int = 6;
      
      public static var EXP_DATA_REFRESH:String = "exp_data_refresh";
       
      
      public var doubleOpend:Boolean;
      
      public var curFloor:int = -1;
      
      public var floorSweepState:int = -1;
      
      public var floorInfos:Array;
      
      public var time:int;
      
      public var reward:Boolean;
      
      public var lastEnterFloor:int = 0;
      
      public function ExpTrainingController()
      {
         super();
      }
      
      public static function getinstance() : com.robot.app.control.ExpTrainingController
      {
         if(com.robot.app.control.ExpTrainingController._instance == null)
         {
            com.robot.app.control.ExpTrainingController._instance = new com.robot.app.control.ExpTrainingController();
         }
         return com.robot.app.control.ExpTrainingController._instance;
      }
      
      public function setup(param1:Function = null) : void
      {
         this.getData(param1,false);
      }
      
      private function getData(param1:Function = null, param2:Boolean = true) : void
      {
         var fun:Function = param1;
         var needAlert:Boolean = param2;
         KTool.getMultiValue([18717],function(param1:Array):void
         {
            var arr:Array = param1;
            KTool.getBitSet([639,1000571],function(param1:Array):void
            {
               var arr1:Array = param1;
               SocketConnection.sendByQueue(42397,[116],function(param1:SocketEvent):void
               {
                  var _loc7_:int = 0;
                  var _loc8_:int = 0;
                  var _loc9_:Object = null;
                  doubleOpend = arr1[0] == 1;
                  reward = arr1[1] == 1;
                  floorInfos = [];
                  var _loc2_:ByteArray = param1.data as ByteArray;
                  var _loc3_:int = int(_loc2_.readUnsignedInt());
                  if(curFloor != -1 && _loc3_ > curFloor)
                  {
                     if(_loc3_ < getAllFloorinfo().length)
                     {
                        Alarm.show("你解锁了下一层的挑战！");
                     }
                  }
                  curFloor = _loc3_;
                  var _loc4_:int = int(_loc2_.readUnsignedInt());
                  if(floorSweepState != -1 && _loc4_ > floorSweepState)
                  {
                     _loc7_ = _loc4_ - floorSweepState;
                     _loc8_ = log2(_loc7_);
                     Alarm.show("恭喜你开启" + (_loc8_ + 1) + "层的扫荡功能，可以直接扫荡本层获得奖励了！");
                  }
                  floorSweepState = _loc4_;
                  time = _loc2_.readUnsignedInt();
                  var _loc5_:int = int(_loc2_.readUnsignedInt());
                  var _loc6_:int = 0;
                  while(_loc6_ < _loc5_)
                  {
                     (_loc9_ = {})["pro"] = _loc2_.readUnsignedInt();
                     _loc9_["sweepPro"] = _loc2_.readUnsignedInt();
                     floorInfos.push(_loc9_);
                     _loc6_++;
                  }
                  EventManager.dispatchEvent(new Event(com.robot.app.control.ExpTrainingController.EXP_DATA_REFRESH));
                  if(fun != null)
                  {
                     fun();
                  }
               });
            });
         });
      }
      
      private function log2(param1:int) : int
      {
         var _loc2_:int = 0;
         while(param1 > 1)
         {
            param1 >>= 1;
            _loc2_++;
         }
         return _loc2_;
      }
      
      public function getAllFloorinfo() : Array
      {
         return Exp_towerXmlInfo.getItems();
      }
      
      public function getFloorInfoBylevel(param1:int) : Object
      {
         return Exp_towerXmlInfo.getItem(param1);
      }
      
      public function getFloorStateInfoByLevel(param1:int) : Object
      {
         if(Boolean(this.floorInfos) && this.floorInfos.length > param1)
         {
            return this.floorInfos[param1];
         }
         return null;
      }
      
      public function openOrCloseDouble(param1:Boolean) : void
      {
         var open:Boolean = param1;
         SocketConnection.sendWithCallback(42395,function(param1:SocketEvent):void
         {
            if(open)
            {
               doubleOpend = true;
            }
            else
            {
               doubleOpend = false;
            }
         },[116,1,open ? 1 : 0,0]);
      }
      
      public function refresh(param1:Function = null, param2:Boolean = true) : void
      {
         this.getData(param1,param2);
      }
      
      public function getLevelInfos() : Array
      {
         return null;
      }
   }
}