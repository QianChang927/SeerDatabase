package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.HatchTaskXMLInfo;
   import com.robot.core.info.HatchTask.HatchTaskBufInfo;
   import com.robot.core.manager.HatchTask.HatchTaskInfo;
   import com.robot.core.net.SocketConnection;
   import flash.events.EventDispatcher;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class HatchTaskManager
   {
      
      private static var _beadMap:HashMap = new HashMap();
      
      private static var _taskMap:HashMap = new HashMap();
      
      private static var b:Boolean = true;
      
      private static var _instance:EventDispatcher;
       
      
      public function HatchTaskManager()
      {
         super();
      }
      
      public static function getTaskStatusList(param1:Function) : void
      {
         var ts:Array = null;
         var func:Function = param1;
         getSoulBeadList(function(param1:Array):void
         {
            var arr:Array = param1;
            var upLoop:Function = function(param1:int):void
            {
               var catchTime:uint;
               var i:int = param1;
               if(i == ts.length)
               {
                  if(func != null)
                  {
                     func(_beadMap);
                  }
                  ts = null;
                  b = true;
                  return;
               }
               catchTime = uint(ts[i][0]);
               SocketConnection.addCmdListener(CommandID.GET_SOUL_BEAD_BUF,function(param1:SocketEvent):void
               {
                  var _loc7_:uint = 0;
                  var _loc12_:Boolean = false;
                  SocketConnection.removeCmdListener(CommandID.GET_SOUL_BEAD_BUF,arguments.callee);
                  var _loc3_:HatchTaskBufInfo = param1.data as HatchTaskBufInfo;
                  var _loc4_:uint = _loc3_.obtainTm;
                  var _loc5_:ByteArray = _loc3_.buf;
                  var _loc6_:Array = [];
                  while(_loc7_ < 10)
                  {
                     _loc12_ = Boolean(_loc5_.readBoolean());
                     _loc6_.push(_loc12_);
                     _loc7_++;
                  }
                  var _loc8_:HatchTaskInfo = new HatchTaskInfo(_loc4_,ts[i][1],_loc6_,func);
                  var _loc9_:uint = uint(HatchTaskXMLInfo.getTaskProCount(ts[i][1]));
                  var _loc10_:uint = 0;
                  var _loc11_:uint = 0;
                  while(_loc11_ < _loc9_)
                  {
                     if(_loc6_[_loc11_] == true)
                     {
                        _loc10_++;
                     }
                     _loc11_++;
                  }
                  if(_loc10_ == _loc9_)
                  {
                     _loc8_.isComplete = true;
                  }
                  _beadMap.add(_loc4_,_loc8_);
                  ++i;
                  upLoop(i);
               });
               SocketConnection.send(CommandID.GET_SOUL_BEAD_BUF,catchTime);
            };
            if(!b)
            {
               return;
            }
            b = false;
            ts = arr;
            if(ts == null)
            {
               return;
            }
            upLoop(0);
         });
      }
      
      public static function getSoulBeadList(param1:Function) : void
      {
         var arr:Array = null;
         var func:Function = param1;
         arr = [];
         SocketConnection.addCmdListener(CommandID.GET_SOUL_BEAD_List,function(param1:SocketEvent):void
         {
            var _loc6_:uint = 0;
            var _loc7_:uint = 0;
            SocketConnection.removeCmdListener(CommandID.GET_SOUL_BEAD_List,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            var _loc5_:uint = 0;
            while(_loc5_ < _loc4_)
            {
               _loc6_ = _loc3_.readUnsignedInt();
               _loc7_ = _loc3_.readUnsignedInt();
               arr.push([_loc6_,_loc7_]);
               _loc5_++;
            }
            func(arr);
         });
         SocketConnection.send(CommandID.GET_SOUL_BEAD_List);
      }
      
      public static function complete(param1:uint, param2:uint, param3:uint, param4:Function = null) : void
      {
         var arr:Array = null;
         var info:HatchTaskInfo = null;
         var proCnt:uint = 0;
         var i:uint = 0;
         var obtainTm:uint = param1;
         var id:uint = param2;
         var pro:uint = param3;
         var event:Function = param4;
         var hi:HatchTaskInfo = _beadMap.getValue(obtainTm);
         arr = hi.statusList;
         info = new HatchTaskInfo(obtainTm,id,arr,event);
         if(HatchTaskXMLInfo.isDir(id))
         {
            proCnt = uint(HatchTaskXMLInfo.getTaskProCount(id));
            i = 0;
            while(i < proCnt)
            {
               setTaskProStatus(obtainTm,proCnt,true,function(param1:Boolean):void
               {
                  arr.push(param1);
                  info.isComplete = true;
                  _beadMap.add(obtainTm,info);
                  event(info.isComplete);
               });
               i++;
            }
         }
         else
         {
            setTaskProStatus(obtainTm,pro,true,function(param1:Boolean):void
            {
               arr[pro] = param1;
               var _loc2_:HatchTaskInfo = info;
               _beadMap.add(obtainTm,info);
               var _loc3_:uint = uint(HatchTaskXMLInfo.getTaskProCount(id));
               var _loc4_:uint = 0;
               while(_loc4_ < _loc3_)
               {
                  if(HatchTaskManager.getTaskList(obtainTm)[_loc4_] != true)
                  {
                     event(info.isComplete);
                     return;
                  }
                  _loc4_++;
               }
               info.isComplete = true;
               _beadMap.add(obtainTm,info);
               event(info.isComplete);
            });
         }
      }
      
      public static function getTaskProStatus(param1:uint, param2:uint) : Boolean
      {
         var _loc3_:HatchTaskInfo = _beadMap.getValue(param1);
         return _loc3_.statusList[param2];
      }
      
      public static function setTaskProStatus(param1:uint, param2:uint, param3:Boolean, param4:Function = null) : void
      {
         var obtainTime:uint = param1;
         var pro:uint = param2;
         var status:Boolean = param3;
         var func:Function = param4;
         SocketConnection.addCmdListener(CommandID.GET_SOUL_BEAD_BUF,function(param1:SocketEvent):void
         {
            var info:HatchTaskBufInfo;
            var obtainTime:uint;
            var buf:ByteArray;
            var sts:Boolean;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.GET_SOUL_BEAD_BUF,arguments.callee);
            info = e.data as HatchTaskBufInfo;
            obtainTime = info.obtainTm;
            buf = info.buf;
            sts = buf.readBoolean();
            buf.position = pro;
            buf.writeBoolean(status);
            buf.length = 10;
            SocketConnection.addCmdListener(CommandID.SET_SOUL_BEAD_BUF,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.SET_SOUL_BEAD_BUF,arguments.callee);
               if(func != null)
               {
                  func(status);
               }
            });
            SocketConnection.send(CommandID.SET_SOUL_BEAD_BUF,obtainTime,buf);
         });
         SocketConnection.send(CommandID.GET_SOUL_BEAD_BUF,obtainTime);
      }
      
      public static function getProStatus(param1:uint, param2:uint, param3:Function = null) : void
      {
         var obtainTime:uint = param1;
         var pro:uint = param2;
         var func:Function = param3;
         SocketConnection.addCmdListener(CommandID.GET_SOUL_BEAD_BUF,function(param1:SocketEvent):void
         {
            var _loc6_:Boolean = false;
            SocketConnection.removeCmdListener(CommandID.GET_SOUL_BEAD_BUF,arguments.callee);
            var _loc3_:HatchTaskBufInfo = param1.data as HatchTaskBufInfo;
            var _loc4_:uint = _loc3_.obtainTm;
            var _loc5_:ByteArray;
            (_loc5_ = _loc3_.buf).position = pro;
            _loc6_ = _loc5_.readBoolean();
            if(func != null)
            {
               func(_loc6_);
            }
         });
         SocketConnection.send(CommandID.GET_SOUL_BEAD_BUF,obtainTime);
      }
      
      public static function get beadMap() : HashMap
      {
         return _beadMap;
      }
      
      public static function addHeadStatus(param1:uint, param2:HatchTaskInfo) : void
      {
         _beadMap.add(param1,param2);
         HatchTaskMapManager.getSoulBeadStatusMap(_beadMap);
      }
      
      public static function removeHeadStatus(param1:uint) : void
      {
         _beadMap.remove(param1);
         HatchTaskMapManager.getSoulBeadStatusMap(_beadMap);
      }
      
      public static function getTaskList(param1:uint) : Array
      {
         var _loc2_:HatchTaskInfo = _beadMap.getValue(param1);
         return _loc2_.statusList;
      }
      
      private static function getInstance() : EventDispatcher
      {
         if(_instance == null)
         {
            _instance = new EventDispatcher();
         }
         return _instance;
      }
      
      public static function addListener(param1:String, param2:uint, param3:uint, param4:Function) : void
      {
         getInstance().addEventListener(param1 + "_" + param2.toString() + "_" + param3.toString(),param4);
      }
      
      public static function removeListener(param1:String, param2:uint, param3:uint, param4:Function) : void
      {
         getInstance().removeEventListener(param1 + "_" + param2.toString() + "_" + param3.toString(),param4);
      }
      
      public static function dispatchEvent(param1:String, param2:uint, param3:uint, param4:Array = null) : void
      {
      }
      
      public static function hasListener(param1:String, param2:uint, param3:uint) : Boolean
      {
         return getInstance().hasEventListener(param1 + "_" + param2.toString() + "_" + param3.toString());
      }
   }
}
