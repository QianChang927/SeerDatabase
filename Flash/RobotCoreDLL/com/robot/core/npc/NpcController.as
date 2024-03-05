package com.robot.core.npc
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.config.xml.NpcXMLInfo;
   import com.robot.core.config.xml.TasksXMLInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.INpcModel;
   import com.robot.core.mode.NpcModel;
   import com.robot.core.mode.SimpleNpcModel;
   import com.robot.core.net.SocketConnection;
   import flash.display.DisplayObjectContainer;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   
   public class NpcController
   {
      
      public static const NPC_INIT:String = "npc_init";
      
      public static const NPC_CLICK:String = "npc_click";
      
      public static const CHECK_TASK_COMPLETE:String = "check_task_complete";
      
      private static var _npc:Array = [];
      
      private static var _npcVisible:Boolean = true;
      
      private static var _hideNpcIds:Array = [];
      
      private static var _instance:EventDispatcher;
       
      
      public function NpcController()
      {
         super();
      }
      
      public static function start() : void
      {
         SocketConnection.addCmdListener(CommandID.ADD_TASK_BUF,onChange);
      }
      
      public static function onChange(param1:SocketEvent) : void
      {
         var npc:INpcModel = null;
         var e:SocketEvent = param1;
         for each(npc in _npc)
         {
            npc.tasks = [];
            NpcXMLInfo.getTaskXml(npc.npcInfo.npcId,function(param1:Array):void
            {
               npc.allTasks = param1;
               checkTaskLoop(npc,npc.allTasks.concat());
            });
         }
      }
      
      public static function set npcVisible(param1:Boolean) : void
      {
         var _loc2_:INpcModel = null;
         _npcVisible = param1;
         if(_npcVisible)
         {
            _hideNpcIds = [];
         }
         for each(_loc2_ in _npc)
         {
            if(_npcVisible)
            {
               _loc2_.show();
            }
            else
            {
               _loc2_.hide();
            }
         }
      }
      
      public static function showNpc(param1:uint) : void
      {
         var _loc2_:INpcModel = null;
         if(_hideNpcIds.indexOf(param1) != -1)
         {
            _hideNpcIds.splice(_hideNpcIds.indexOf(param1),1);
         }
         for each(_loc2_ in _npc)
         {
            if(_loc2_.npcInfo.npcId == param1)
            {
               _loc2_.show();
            }
         }
      }
      
      public static function hideNpc(param1:uint) : void
      {
         var _loc2_:INpcModel = null;
         if(_hideNpcIds.indexOf(param1) == -1)
         {
            _hideNpcIds.push(param1);
         }
         for each(_loc2_ in _npc)
         {
            if(_loc2_.npcInfo.npcId == param1)
            {
               _loc2_.hide();
            }
         }
      }
      
      public static function getNpc(param1:uint) : DisplayObjectContainer
      {
         var _loc2_:INpcModel = null;
         for each(_loc2_ in _npc)
         {
            if(_loc2_.npcInfo.npcId == param1)
            {
               return _loc2_ as DisplayObjectContainer;
            }
         }
         return null;
      }
      
      public static function init() : void
      {
         var array:Array = null;
         var npcCount:int = 0;
         var id:String = null;
         var npc:INpcModel = null;
         _npc = [];
         array = MapXMLInfo.getNpcIdByMapId(MainManager.actorInfo.mapID);
         npcCount = 0;
         for each(id in array)
         {
            NpcXMLInfo.getNpcXml(uint(id),function(param1:XML):void
            {
               var _loc2_:NpcInfo = new NpcInfo(param1);
               if(_loc2_.npcId == 0)
               {
                  ++npcCount;
                  if(array.length <= npcCount)
                  {
                     onChange(null);
                  }
                  return;
               }
               if(_loc2_.isSimple)
               {
                  npc = new SimpleNpcModel(_loc2_);
               }
               else
               {
                  npc = new NpcModel(_loc2_);
               }
               if(_npcVisible && _hideNpcIds.indexOf(_loc2_.npcId) == -1)
               {
                  npc.show();
               }
               else
               {
                  npc.hide();
               }
               _npc.push(npc);
               ++npcCount;
               if(array.length <= npcCount)
               {
                  onChange(null);
               }
            });
         }
         dispatchEvent(new Event(NPC_INIT));
         addEventListener(NPC_CLICK,onNpcClick);
         addEventListener(CHECK_TASK_COMPLETE,onCheckComplete);
      }
      
      private static function onNpcClick(param1:DynamicEvent) : void
      {
         var npc:INpcModel;
         var cls:* = undefined;
         var clss:* = undefined;
         var e:DynamicEvent = param1;
         if(MapManager.currentMap.id == 10014)
         {
            NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，恭喜你成为正式船员。赛尔号发现的神奇精灵，是找到无尽能源的关键。你的使命，就是0xff0000发现更多精灵0xffffff，找到更多无尽能源的线索。"],["我知道我知道！我们要找到雷伊！"],[function():void
            {
               NpcDialog.show(NPC.SHIPER,["呵呵，不要心急。赛尔号已抵达帕诺星系，前方有一颗叫克洛斯的星球。0xff0000新船员指南0xffffff和NoNo会带你踏上星际之旅。你准备好了吗？"],["嗯！NoNo，我们出发！雷伊，我来啦！"],[]);
            }]);
            return;
         }
         npc = e.paramObject as INpcModel;
         if(npc.npcInfo.statisticId)
         {
            SocketConnection.send(1020,npc.npcInfo.statisticId);
         }
         if(npc.tasks == null || npc.tasks.length == 0)
         {
            cls = getDefinitionByName("com.robot.app.npc.npcClass.NpcClass_" + npc.npcInfo.npcId);
            cls.start();
         }
         else if(npc.npcInfo.npcId == 3 && MapManager.currentMap.id == 362)
         {
            NpcDialog.show(NPC.DOCTOR,["欢迎来到赛尔号！"],null,null,false,null);
         }
         else
         {
            clss = getDefinitionByName("com.robot.app.npc.taskPanel.NpcTaskPanel");
            clss.show(npc.tasks,npc.npcInfo);
         }
      }
      
      private static function onCheckComplete(param1:DynamicEvent) : void
      {
         var _loc2_:INpcModel = param1.paramObject as INpcModel;
         _loc2_.setMark(getMarkType(_loc2_));
      }
      
      private static function filtUnlockTasks(param1:Array) : Array
      {
         var _loc3_:int = 0;
         var _loc4_:* = undefined;
         var _loc5_:int = 0;
         var _loc2_:Array = [];
         for each(_loc3_ in param1)
         {
            _loc5_ = int((_loc4_ = getDefinitionByName("com.robot.app.tasksRecord.TasksRecordConfig")).getParentId(_loc3_));
            if(0 != _loc5_)
            {
               if(_loc4_.isAllPTsComplete(_loc5_))
               {
                  _loc2_.push(_loc3_);
               }
            }
            else
            {
               _loc2_.push(_loc3_);
            }
         }
         return _loc2_;
      }
      
      private static function checkTaskLoop(param1:INpcModel, param2:Array) : void
      {
         var xml:XML;
         var tasks:Array = null;
         var id:String = null;
         var pro:Array = null;
         var parent:Array = null;
         var i:uint = 0;
         var npc:INpcModel = param1;
         var array:Array = param2;
         if(array.length == 0)
         {
            npc.tasks = filtUnlockTasks(npc.tasks);
            dispatchEvent(new DynamicEvent(CHECK_TASK_COMPLETE,npc));
            return;
         }
         tasks = npc.tasks;
         xml = array.pop();
         id = xml.@id;
         pro = String(xml.@pro).split("|");
         if(TasksManager.getTaskStatus(uint(id)) == TasksManager.COMPLETE)
         {
            checkTaskLoop(npc,array);
            return;
         }
         if(TasksManager.getTaskStatus(uint(id)) == TasksManager.UN_ACCEPT)
         {
            if(pro.indexOf("-1") == -1)
            {
               checkTaskLoop(npc,array);
               return;
            }
            parent = TasksXMLInfo.getParent(uint(id));
            for each(i in parent)
            {
               if(TasksManager.getTaskStatus(i) != TasksManager.COMPLETE)
               {
                  checkTaskLoop(npc,array);
                  return;
               }
            }
            tasks.push(uint(id));
            checkTaskLoop(npc,array);
            return;
         }
         if(TasksManager.getTaskStatus(uint(id)) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(uint(id),function(param1:Array):void
            {
               var _loc2_:uint = 0;
               var _loc3_:String = "";
               while(_loc2_ != param1.length)
               {
                  if(param1[_loc2_] == false)
                  {
                     _loc3_ = _loc2_.toString();
                     break;
                  }
                  _loc2_++;
               }
               if(pro.indexOf(_loc3_) == -1)
               {
                  checkTaskLoop(npc,array);
               }
               else
               {
                  tasks.push(uint(id));
                  checkTaskLoop(npc,array);
               }
            });
         }
      }
      
      private static function getMarkType(param1:INpcModel) : uint
      {
         var _loc2_:uint = 0;
         if(param1.tasks.length == 0)
         {
            return 0;
         }
         for each(_loc2_ in param1.tasks)
         {
            if(TasksManager.getTaskStatus(_loc2_) == TasksManager.ALR_ACCEPT)
            {
               return 2;
            }
         }
         return 1;
      }
      
      public static function destory() : void
      {
         var _loc1_:INpcModel = null;
         for each(_loc1_ in _npc)
         {
            _loc1_.destroy();
            _loc1_ = null;
         }
         _npc = [];
         _npcVisible = true;
         _hideNpcIds = [];
         removeEventListener(NPC_CLICK,onNpcClick);
         removeEventListener(CHECK_TASK_COMPLETE,onCheckComplete);
      }
      
      private static function getInstance() : EventDispatcher
      {
         if(_instance == null)
         {
            _instance = new EventDispatcher();
         }
         return _instance;
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         getInstance().addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         getInstance().removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:Event) : void
      {
         if(hasEventListener(param1.type))
         {
            getInstance().dispatchEvent(param1);
         }
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return getInstance().hasEventListener(param1);
      }
      
      public static function willTrigger(param1:String) : Boolean
      {
         return getInstance().willTrigger(param1);
      }
   }
}
