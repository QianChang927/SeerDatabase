package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.TasksXMLInfo;
   import com.robot.core.event.TaskEvent;
   import com.robot.core.info.task.TaskBufInfo;
   import com.robot.core.info.task.novice.NoviceFinishInfo;
   import com.robot.core.manager.task.TaskInfo;
   import com.robot.core.manager.task.TaskType;
   import com.robot.core.net.SocketLoader;
   import com.robot.core.npc.NpcController;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.Utils;
   
   public class TasksManager
   {
      
      public static const CLASS_PATH:String = "com.robot.app.task.tc";
      
      public static const CONTROLLER_PATH:String = "com.robot.app.task.control";
      
      public static const UN_ACCEPT:uint = 0;
      
      public static const ALR_ACCEPT:uint = 1;
      
      public static const COMPLETE:uint = 3;
      
      public static var taskList:Array = [];
      
      private static var bShowPanel:Boolean = false;
      
      private static var _instance:EventDispatcher;
       
      
      public function TasksManager()
      {
         super();
      }
      
      public static function getClassPath(param1:String) : String
      {
         return CLASS_PATH + ".TaskClass_" + param1;
      }
      
      public static function getControllerPath(param1:uint) : String
      {
         return CONTROLLER_PATH + ".TaskController_" + param1.toString();
      }
      
      public static function isParentAccept(param1:uint, param2:Function) : void
      {
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc3_:Array = TasksXMLInfo.getParent(param1);
         var _loc4_:int;
         if((_loc4_ = int(_loc3_.length)) == 0)
         {
            param2(true);
            return;
         }
         if(TasksXMLInfo.isMat(param1))
         {
            for each(_loc5_ in _loc3_)
            {
               switch(getTaskStatus(_loc5_))
               {
                  case UN_ACCEPT:
                  case ALR_ACCEPT:
                     param2(false);
                     return;
               }
            }
            param2(true);
            return;
         }
         for each(_loc6_ in _loc3_)
         {
            if(getTaskStatus(_loc6_) == 3)
            {
               param2(true);
               return;
            }
         }
         param2(false);
      }
      
      private static function getTypeCmd(param1:uint, param2:Array) : uint
      {
         var _loc3_:uint = TasksXMLInfo.getType(param1);
         if(_loc3_ == TaskType.NORMAL || _loc3_ == TaskType.CIRCLE)
         {
            return param2[0];
         }
         if(_loc3_ == TaskType.DAILY)
         {
            return param2[1];
         }
         throw new TypeError("任务ID为：" + param1.toString() + " 的任务类型不正确");
      }
      
      public static function accept(param1:uint, param2:Function = null) : void
      {
         var cmd2:uint = 0;
         var s2:SocketLoader = null;
         var id:uint = param1;
         var event:Function = param2;
         if(id == 0)
         {
            if(event != null)
            {
               event(false);
            }
            return;
         }
         switch(getTaskStatus(id))
         {
            case UN_ACCEPT:
               isParentAccept(id,function(param1:Boolean):void
               {
                  var _loc2_:uint = 0;
                  var _loc3_:SocketLoader = null;
                  if(param1)
                  {
                     _loc2_ = getTypeCmd(id,[CommandID.ACCEPT_TASK,CommandID.ACCEPT_DAILY_TASK]);
                     _loc3_ = new SocketLoader(_loc2_);
                     _loc3_.extData = new TaskInfo(id,0,event);
                     _loc3_.addEventListener(SocketEvent.COMPLETE,onAcceptServer);
                     _loc3_.load(id);
                     return;
                  }
                  if(event != null)
                  {
                     event(false);
                  }
                  dispatchEvent(TaskEvent.ACCEPT,id,0,false);
               });
               return;
            case ALR_ACCEPT:
            case COMPLETE:
               if(TasksXMLInfo.getType(id) == TaskType.CIRCLE)
               {
                  cmd2 = getTypeCmd(id,[CommandID.ACCEPT_TASK,CommandID.ACCEPT_DAILY_TASK]);
                  s2 = new SocketLoader(cmd2);
                  s2.extData = new TaskInfo(id,0,event);
                  s2.addEventListener(SocketEvent.COMPLETE,onAcceptServer);
                  s2.load(id);
                  return;
               }
               if(event != null)
               {
                  event(false);
               }
               dispatchEvent(TaskEvent.ACCEPT,id,0,false);
               return;
               break;
            default:
               return;
         }
      }
      
      private static function onAcceptServer(param1:SocketEvent) : void
      {
         var _loc2_:SocketLoader = param1.target as SocketLoader;
         var _loc3_:TaskInfo = _loc2_.extData as TaskInfo;
         _loc2_.removeEventListener(SocketEvent.COMPLETE,onAcceptServer);
         _loc2_.destroy();
         setTaskStatus(_loc3_.id,ALR_ACCEPT);
         if(_loc3_.callback != null)
         {
            _loc3_.callback(true);
         }
         dispatchEvent(TaskEvent.ACCEPT,_loc3_.id,_loc3_.pro,true);
      }
      
      public static function complete(param1:uint, param2:uint, param3:Function = null, param4:Boolean = false, param5:uint = 1) : void
      {
         var proLen:int = 0;
         var cmd:uint = 0;
         var sl:SocketLoader = null;
         var tInfo:TaskInfo = null;
         var id:uint = param1;
         var pro:uint = param2;
         var event:Function = param3;
         var bShowpanel:Boolean = param4;
         var outType:uint = param5;
         bShowPanel = bShowpanel;
         if(TasksXMLInfo.isDir(id))
         {
            isParentAccept(id,function(param1:Boolean):void
            {
               if(param1)
               {
                  sendCompleteTask(id,pro,outType,event);
                  return;
               }
               if(event != null)
               {
                  event(false);
               }
               dispatchEvent(TaskEvent.COMPLETE,id,pro,false);
            });
            return;
         }
         switch(getTaskStatus(id))
         {
            case UN_ACCEPT:
               if(event != null)
               {
                  event(false);
               }
               dispatchEvent(TaskEvent.COMPLETE,id,pro,false);
               return;
            case ALR_ACCEPT:
               proLen = TasksXMLInfo.getTaskPorCount(id);
               if(proLen <= 1)
               {
                  sendCompleteTask(id,pro,outType,event);
                  return;
               }
               if(pro >= proLen)
               {
                  pro = uint(proLen - 1);
               }
               cmd = getTypeCmd(id,[CommandID.GET_TASK_BUF,CommandID.GET_DAILY_TASK_BUF]);
               sl = new SocketLoader(cmd);
               tInfo = new TaskInfo(id,pro,event);
               tInfo.outType = outType;
               sl.extData = tInfo;
               sl.addEventListener(SocketEvent.COMPLETE,onGetCompServer);
               sl.load(id);
               return;
               break;
            case COMPLETE:
               if(event != null)
               {
                  event(false);
               }
               dispatchEvent(TaskEvent.COMPLETE,id,pro,false);
               return;
            default:
               return;
         }
      }
      
      private static function onGetCompServer(param1:SocketEvent) : void
      {
         var _loc15_:int = 0;
         var _loc16_:uint = 0;
         var _loc17_:uint = 0;
         var _loc2_:SocketLoader = param1.target as SocketLoader;
         var _loc3_:TaskInfo = _loc2_.extData as TaskInfo;
         var _loc4_:uint = _loc3_.id;
         var _loc5_:uint = _loc3_.pro;
         var _loc6_:uint = _loc3_.outType;
         _loc2_.removeEventListener(SocketEvent.COMPLETE,onGetCompServer);
         _loc2_.destroy();
         var _loc7_:TaskBufInfo = param1.data as TaskBufInfo;
         var _loc8_:uint = _loc5_;
         _loc7_.buf.position = _loc5_;
         if(_loc7_.buf.readBoolean())
         {
            if(_loc3_.callback != null)
            {
               _loc3_.callback(false);
            }
            dispatchEvent(TaskEvent.COMPLETE,_loc7_.taskId,_loc5_,false);
            return;
         }
         var _loc9_:int = TasksXMLInfo.getTaskPorCount(_loc4_);
         var _loc10_:Boolean = true;
         var _loc11_:int = 0;
         while(_loc11_ < _loc9_)
         {
            if(_loc11_ != _loc5_)
            {
               _loc7_.buf.position = _loc11_;
               if(!_loc7_.buf.readBoolean())
               {
                  _loc10_ = false;
                  break;
               }
            }
            _loc11_++;
         }
         if(TasksXMLInfo.isEnd(_loc4_))
         {
            if(_loc8_ == _loc9_ - 1)
            {
               _loc10_ = true;
            }
         }
         if(_loc10_)
         {
            sendCompleteTask(_loc4_,_loc5_,_loc6_,_loc3_.callback);
            return;
         }
         var _loc12_:Boolean = true;
         var _loc14_:int;
         var _loc13_:Array;
         if((_loc14_ = int((_loc13_ = TasksXMLInfo.getProParent(_loc4_,_loc5_)).length)) == 0)
         {
            if(!TasksXMLInfo.isProMat(_loc4_,_loc5_))
            {
               sendCompletePro(_loc4_,_loc5_,_loc7_.buf,_loc3_.callback);
               return;
            }
            _loc15_ = 0;
            while(_loc15_ < _loc5_)
            {
               _loc7_.buf.position = _loc15_;
               if(!_loc7_.buf.readBoolean())
               {
                  _loc12_ = false;
                  break;
               }
               _loc15_++;
            }
         }
         else if(TasksXMLInfo.isProMat(_loc4_,_loc5_))
         {
            for each(_loc16_ in _loc13_)
            {
               _loc7_.buf.position = _loc16_;
               if(!_loc7_.buf.readBoolean())
               {
                  _loc12_ = false;
                  break;
               }
            }
         }
         else
         {
            _loc12_ = false;
            for each(_loc17_ in _loc13_)
            {
               _loc7_.buf.position = _loc17_;
               if(_loc7_.buf.readBoolean())
               {
                  _loc12_ = true;
                  break;
               }
            }
         }
         if(_loc12_)
         {
            sendCompletePro(_loc4_,_loc5_,_loc7_.buf,_loc3_.callback);
         }
         else
         {
            if(_loc3_.callback != null)
            {
               _loc3_.callback(false);
            }
            dispatchEvent(TaskEvent.COMPLETE,_loc4_,_loc5_,false);
         }
      }
      
      public static function quit(param1:uint, param2:Function = null) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:SocketLoader = null;
         if(getTaskStatus(param1) == 1)
         {
            _loc3_ = getTypeCmd(param1,[CommandID.DELETE_TASK,CommandID.DELETE_DAILY_TASK]);
            (_loc4_ = new SocketLoader(_loc3_)).extData = new TaskInfo(param1,0,param2);
            _loc4_.addEventListener(SocketEvent.COMPLETE,onQuitServer);
            _loc4_.load(param1);
            return;
         }
         if(param2 != null)
         {
            param2(false);
         }
         dispatchEvent(TaskEvent.QUIT,param1,0,false);
      }
      
      private static function onQuitServer(param1:SocketEvent) : void
      {
         var _loc2_:SocketLoader = param1.target as SocketLoader;
         var _loc3_:TaskInfo = _loc2_.extData as TaskInfo;
         _loc2_.removeEventListener(SocketEvent.COMPLETE,onQuitServer);
         _loc2_.destroy();
         setTaskStatus(_loc3_.id,UN_ACCEPT);
         if(_loc3_.callback != null)
         {
            _loc3_.callback(true);
         }
         dispatchEvent(TaskEvent.QUIT,_loc3_.id,_loc3_.pro,true);
      }
      
      public static function getTaskStatus(param1:uint) : uint
      {
         if(param1 < 1)
         {
            param1 = 1;
         }
         return taskList[param1 - 1];
      }
      
      public static function setTaskStatus(param1:uint, param2:uint) : void
      {
         taskList[param1 - 1] = param2;
         NpcController.onChange(null);
      }
      
      public static function getProStatus(param1:uint, param2:uint, param3:Function = null) : void
      {
         var _loc4_:uint;
         if((_loc4_ = getTaskStatus(param1)) == UN_ACCEPT || _loc4_ == COMPLETE)
         {
            if(param3 != null)
            {
               param3(false);
            }
            dispatchEvent(TaskEvent.GET_PRO_STATUS,param1,param2,false);
            return;
         }
         var _loc5_:uint = getTypeCmd(param1,[CommandID.GET_TASK_BUF,CommandID.GET_DAILY_TASK_BUF]);
         var _loc6_:SocketLoader;
         (_loc6_ = new SocketLoader(_loc5_)).extData = new TaskInfo(param1,param2,param3);
         _loc6_.addEventListener(SocketEvent.COMPLETE,onGetProServer);
         _loc6_.load(param1);
      }
      
      private static function onGetProServer(param1:SocketEvent) : void
      {
         var _loc2_:SocketLoader = param1.target as SocketLoader;
         var _loc3_:TaskInfo = _loc2_.extData as TaskInfo;
         _loc2_.removeEventListener(SocketEvent.COMPLETE,onGetProServer);
         _loc2_.destroy();
         var _loc4_:TaskBufInfo;
         (_loc4_ = param1.data as TaskBufInfo).buf.position = _loc3_.pro;
         var _loc5_:Boolean = _loc4_.buf.readBoolean();
         if(_loc3_.callback != null)
         {
            _loc3_.callback(_loc5_);
         }
         dispatchEvent(TaskEvent.GET_PRO_STATUS,_loc3_.id,_loc3_.pro,_loc5_);
      }
      
      public static function setProStatus(param1:uint, param2:uint, param3:Boolean, param4:Function = null) : void
      {
         var _loc5_:uint;
         if((_loc5_ = getTaskStatus(param1)) == UN_ACCEPT)
         {
            if(param4 != null)
            {
               param4(false);
            }
            dispatchEvent(TaskEvent.SET_PRO_STATUS,param1,param2,false);
            return;
         }
         var _loc6_:uint = getTypeCmd(param1,[CommandID.GET_TASK_BUF,CommandID.GET_DAILY_TASK_BUF]);
         var _loc7_:SocketLoader = new SocketLoader(_loc6_);
         var _loc8_:TaskInfo;
         (_loc8_ = new TaskInfo(param1,param2,param4)).status = param3;
         _loc7_.extData = _loc8_;
         _loc7_.addEventListener(SocketEvent.COMPLETE,onSetProServer);
         _loc7_.load(param1);
      }
      
      private static function onSetProServer(param1:SocketEvent) : void
      {
         var _loc2_:SocketLoader = param1.target as SocketLoader;
         var _loc3_:TaskInfo = _loc2_.extData as TaskInfo;
         _loc2_.removeEventListener(SocketEvent.COMPLETE,onSetProServer);
         _loc2_.destroy();
         var _loc4_:TaskBufInfo = param1.data as TaskBufInfo;
         sendCompletePro(_loc3_.id,_loc3_.pro,_loc4_.buf,_loc3_.callback,_loc3_.status,false);
      }
      
      public static function getProStatusList(param1:uint, param2:Function = null) : void
      {
         var _loc3_:uint = getTaskStatus(param1);
         if(_loc3_ == UN_ACCEPT)
         {
            if(param2 != null)
            {
               param2([]);
            }
            dispatchEvent(TaskEvent.GET_PRO_STATUS_LIST,param1,0,false);
            return;
         }
         var _loc4_:uint = getTypeCmd(param1,[CommandID.GET_TASK_BUF,CommandID.GET_DAILY_TASK_BUF]);
         var _loc5_:SocketLoader;
         (_loc5_ = new SocketLoader(_loc4_)).extData = new TaskInfo(param1,0,param2);
         _loc5_.addEventListener(SocketEvent.COMPLETE,onGetProListServer);
         _loc5_.load(param1);
      }
      
      private static function onGetProListServer(param1:SocketEvent) : void
      {
         var _loc2_:SocketLoader = param1.target as SocketLoader;
         var _loc3_:TaskInfo = _loc2_.extData as TaskInfo;
         _loc2_.removeEventListener(SocketEvent.COMPLETE,onGetProListServer);
         _loc2_.destroy();
         var _loc4_:TaskBufInfo = param1.data as TaskBufInfo;
         var _loc5_:Array = [];
         var _loc6_:int = TasksXMLInfo.getTaskPorCount(_loc4_.taskId);
         var _loc7_:int = 0;
         while(_loc7_ < _loc6_)
         {
            _loc4_.buf.position = _loc7_;
            _loc5_[_loc7_] = _loc4_.buf.readBoolean();
            _loc7_++;
         }
         if(_loc3_.callback != null)
         {
            _loc3_.callback(_loc5_);
         }
         dispatchEvent(TaskEvent.GET_PRO_STATUS_LIST,_loc3_.id,_loc3_.pro,true,_loc5_);
      }
      
      private static function sendCompleteTask(param1:uint, param2:uint, param3:uint, param4:Function) : void
      {
         var _loc5_:uint = getTypeCmd(param1,[CommandID.COMPLETE_TASK,CommandID.COMPLETE_DAILY_TASK]);
         var _loc6_:SocketLoader = new SocketLoader(_loc5_);
         var _loc7_:TaskInfo;
         (_loc7_ = new TaskInfo(param1,param2,param4)).outType = param3;
         _loc6_.extData = _loc7_;
         _loc6_.addEventListener(SocketEvent.COMPLETE,onCompleteTaskServer);
         _loc6_.load(param1,param3);
      }
      
      private static function onCompleteTaskServer(param1:SocketEvent) : void
      {
         var _loc2_:SocketLoader = param1.target as SocketLoader;
         var _loc3_:TaskInfo = _loc2_.extData as TaskInfo;
         _loc2_.removeEventListener(SocketEvent.COMPLETE,onCompleteTaskServer);
         _loc2_.destroy();
         var _loc4_:NoviceFinishInfo = param1.data as NoviceFinishInfo;
         setTaskStatus(_loc4_.taskID,COMPLETE);
         if(_loc3_.callback != null)
         {
            _loc3_.callback(true);
         }
         dispatchEvent(TaskEvent.COMPLETE,_loc3_.id,_loc3_.pro,true);
         EventManager.dispatchEvent(new Event("task_complete"));
      }
      
      private static function sendCompletePro(param1:uint, param2:uint, param3:ByteArray, param4:Function = null, param5:Boolean = true, param6:Boolean = true) : void
      {
         param3.position = param2;
         param3.writeBoolean(param5);
         param3[99] = param2;
         var _loc7_:uint = getTypeCmd(param1,[CommandID.ADD_TASK_BUF,CommandID.ADD_DAILY_TASK_BUF]);
         var _loc8_:SocketLoader = new SocketLoader(_loc7_);
         var _loc9_:TaskInfo;
         (_loc9_ = new TaskInfo(param1,param2,param4)).status = param5;
         _loc9_.isComplete = param6;
         _loc8_.extData = _loc9_;
         _loc8_.addEventListener(SocketEvent.COMPLETE,onCompleteProServer);
         _loc8_.load(param1,param3);
      }
      
      private static function onCompleteProServer(param1:SocketEvent) : void
      {
         var cla:Class = null;
         var p:String = null;
         var cl:Object = null;
         var e:SocketEvent = param1;
         var sl:SocketLoader = e.target as SocketLoader;
         var tInfo:TaskInfo = sl.extData as TaskInfo;
         sl.removeEventListener(SocketEvent.COMPLETE,onCompleteProServer);
         sl.destroy();
         if(tInfo.callback != null)
         {
            tInfo.callback(true);
         }
         if(tInfo.isComplete)
         {
            dispatchEvent(TaskEvent.COMPLETE,tInfo.id,tInfo.pro,true);
            cla = Utils.getClass(getClassPath(tInfo.id.toString() + "_" + tInfo.pro.toString()));
            if(cla)
            {
               new cla();
            }
         }
         else
         {
            dispatchEvent(TaskEvent.SET_PRO_STATUS,tInfo.id,tInfo.pro,true);
         }
         if(bShowPanel)
         {
            try
            {
               p = getControllerPath(tInfo.id);
               cl = getDefinitionByName(p) as Class;
               cl.showPanel();
               bShowPanel = false;
            }
            catch(e:Error)
            {
               DebugTrace.show("error==/==" + e.message);
            }
         }
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
         if(getTaskStatus(param2) == COMPLETE)
         {
            return;
         }
         getInstance().addEventListener(param1 + "_" + param2.toString() + "_" + param3.toString(),param4);
      }
      
      public static function removeListener(param1:String, param2:uint, param3:uint, param4:Function) : void
      {
         getInstance().removeEventListener(param1 + "_" + param2.toString() + "_" + param3.toString(),param4);
      }
      
      public static function dispatchEvent(param1:String, param2:uint, param3:uint, param4:Boolean, param5:Array = null) : void
      {
         if(hasListener(param1,param2,param3))
         {
            getInstance().dispatchEvent(new TaskEvent(param1,param2,param3,param4,param5));
         }
      }
      
      public static function hasListener(param1:String, param2:uint, param3:uint) : Boolean
      {
         return getInstance().hasEventListener(param1 + "_" + param2.toString() + "_" + param3.toString());
      }
   }
}
