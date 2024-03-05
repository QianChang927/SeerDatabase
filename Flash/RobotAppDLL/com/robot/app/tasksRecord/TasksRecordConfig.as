package com.robot.app.tasksRecord
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   
   public class TasksRecordConfig
   {
      
      private static var xmlClass:Class = TasksRecordConfig_xmlClass;
      
      private static var xmlClass0223:Class = TasksRecordConfig_xmlClass0223;
      
      public static var currentId:String = "";
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var _allIdA:Array;
      
      {
         init();
      }
      
      public function TasksRecordConfig()
      {
         super();
      }
      
      public static function getNewMainLineTaskId() : int
      {
         return getCurrentNewTask().children()[0].@id;
      }
      
      private static function init() : void
      {
         xml = XML(new xmlClass());
      }
      
      public static function getNewMainLineZhuangzhiStartDes() : String
      {
         var _loc1_:String = getCurrentNewTask().children()[0].@zhuangzhiStartDes;
         var _loc2_:RegExp = /nick/g;
         return _loc1_.replace(_loc2_,MainManager.actorInfo.formatNick + "，");
      }
      
      public static function getNewMainLineZhuangzhiEndDes() : String
      {
         return getCurrentNewTask().children()[0].@zhuangzhiEndDes;
      }
      
      public static function getSpaceExploreXML() : XML
      {
         var x:XML = null;
         var all:XML = null;
         var branch:XML = null;
         var news:XML = null;
         var task:XML = null;
         var story:XML = null;
         var storyList:XMLList = null;
         x = <config/>;
         all = xml.tasks[0];
         branch = all.children().(@itemtype == 3)[0];
         news = getCurrentNewTask();
         if(null == news)
         {
            return null;
         }
         for each(task in news.children())
         {
            if(TasksManager.getTaskStatus(uint(task.@id)) == TasksManager.COMPLETE)
            {
               delete news.children().(@id == task.@id)[0];
            }
         }
         if(news.children().length() == 0)
         {
            story = all.children().(@itemtype == 2)[0];
            storyList = story.descendants("task");
            for each(task in storyList)
            {
               if(task.hasOwnProperty("@itemtype") && task.@itemtype == "6_1" && TasksManager.getTaskStatus(int(task.@id)) != TasksManager.COMPLETE)
               {
                  news.appendChild(task);
                  break;
               }
            }
         }
         if(news.children().length() > 0)
         {
            x.appendChild(news);
         }
         else
         {
            for each(task in branch.children())
            {
               if(TasksManager.getTaskStatus(uint(task.@id)) != TasksManager.COMPLETE)
               {
                  break;
               }
               delete branch.children().(@id == uint(task.@id))[0];
            }
            while(branch.children().length() > 1)
            {
               delete branch.children()[1];
            }
            if(branch.children().length() > 0)
            {
               x.appendChild(branch);
            }
         }
         return x;
      }
      
      public static function hasUnComTask() : Boolean
      {
         var _loc2_:XML = null;
         var _loc1_:XMLList = xml.descendants("task");
         for each(_loc2_ in _loc1_)
         {
            if(_loc2_.hasOwnProperty("@itemtype") && _loc2_.@itemtype == "6_1" && TasksManager.getTaskStatus(int(_loc2_.@id)) == TasksManager.ALR_ACCEPT)
            {
               return true;
            }
         }
         return false;
      }
      
      private static function getCurrentNewTask() : XML
      {
         var newsList:XMLList = null;
         var news:XML = null;
         var xmlTasks:XML = null;
         var date:Date = null;
         newsList = xml.tasks[0].children().(@itemtype == 1);
         news = null;
         for each(xmlTasks in newsList)
         {
            date = new Date(String(xmlTasks.@date));
            if(date.time > SystemTimerManager.sysBJDate.time)
            {
               return news;
            }
            news = xmlTasks;
         }
         return news;
      }
      
      public static function getStarTasksXML() : XML
      {
         var x:XML = null;
         var all:XML = null;
         var tasks:XML = null;
         var star:XML = null;
         var tall:XML = null;
         var g:XML = null;
         var tsub:XML = null;
         var date:Date = null;
         var s:XML = null;
         x = <config/>;
         all = xml.tasks[0];
         tasks = all.children().(@itemtype == 2)[0];
         star = all.children().(@itemtype == 5)[0];
         for each(tall in tasks.children())
         {
            for each(tsub in tall.children())
            {
               if(tsub.hasOwnProperty("@online"))
               {
                  date = new Date(String(tsub.@online));
                  if(date.time > SystemTimerManager.sysBJDate.time)
                  {
                     delete tall.children().(@id == tsub.@id)[0];
                  }
               }
            }
         }
         x.appendChild(tasks);
         for each(g in star.children())
         {
            for each(s in g.children())
            {
               if(s.hasOwnProperty("@itemtype") && s.@itemtype == "5_1")
               {
                  if(s.children().length() == 0)
                  {
                     delete g.children().(@name == s.@name)[0];
                  }
               }
            }
            if(g.children().length() == 0)
            {
               delete star.children().(@itemtype == g.@itemtype)[0];
            }
         }
         x.appendChild(star);
         return x;
      }
      
      public static function getChapterXML(param1:String) : XML
      {
         var all:XML = null;
         var story:XML = null;
         var task:XML = null;
         var t:XML = null;
         var date:Date = null;
         var cId:String = param1;
         all = xml.tasks[0];
         story = all.children().(@itemtype == 2)[0];
         for each(task in story.children())
         {
            if(task.hasOwnProperty("@itemtype") && task.@itemtype == cId)
            {
               for each(t in task.children())
               {
                  if(t.hasOwnProperty("@online"))
                  {
                     date = new Date(String(t.@online));
                     if(date.time > SystemTimerManager.sysBJDate.time)
                     {
                        delete task.children().(@id == t.@id)[0];
                     }
                  }
               }
               return task;
            }
         }
         return null;
      }
      
      public static function getAcceptXML() : XML
      {
         var task:XML = null;
         var x:XML = <config/>;
         var list:XMLList = xml.descendants("task");
         for each(task in list.children())
         {
            if(task.hasOwnProperty("@itemtype") && task.@itemtype == "6_1" && TasksManager.getTaskStatus(int(task.@id)) == TasksManager.ALR_ACCEPT)
            {
               if(x.children().(@id == xml.@id)[0] == null)
               {
                  x.appendChild(task);
               }
            }
         }
         return x;
      }
      
      public static function getJuQingXML() : XML
      {
         var all:XML = null;
         var tasks:XML = null;
         var tall:XML = null;
         var tsub:XML = null;
         var date:Date = null;
         all = xml.tasks[0];
         tasks = all.children().(@itemtype == 2)[0];
         for each(tall in tasks.children())
         {
            for each(tsub in tall.children())
            {
               if(tsub.hasOwnProperty("@online"))
               {
                  date = new Date(String(tsub.@online));
                  if(date.time > SystemTimerManager.sysBJDate.time)
                  {
                     delete tall.children().(@id == tsub.@id)[0];
                  }
               }
            }
         }
         return tasks;
      }
      
      public static function getAllTasksId() : Array
      {
         var _loc2_:XML = null;
         var _loc3_:Date = null;
         var _loc1_:XMLList = xml.descendants("task");
         _allIdA = new Array();
         for each(_loc2_ in _loc1_)
         {
            if(_loc2_.hasOwnProperty("@id") && _loc2_.@id != "0")
            {
               if(_loc2_.hasOwnProperty("@online"))
               {
                  _loc3_ = new Date(String(_loc2_.@online));
                  if(_loc3_.time > SystemTimerManager.sysBJDate.time)
                  {
                     continue;
                  }
               }
               _allIdA.push(uint(_loc2_.@id));
            }
         }
         return _allIdA;
      }
      
      public static function isAllPTsComplete(param1:uint) : Boolean
      {
         if(TasksManager.getTaskStatus(param1) != TasksManager.COMPLETE)
         {
            return false;
         }
         var _loc2_:uint = getParentId(param1);
         if(_loc2_ != 0)
         {
            return isAllPTsComplete(_loc2_);
         }
         return true;
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = xml.descendants("task");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@id == param1.toString())
            {
               break;
            }
         }
         return _loc3_.@name;
      }
      
      public static function getIsVip(param1:uint) : Boolean
      {
         var xmlList:XMLList = null;
         var xml:XML = null;
         var id:uint = param1;
         xmlList = xml.descendants("task");
         xml = xmlList.(@id == id.toString())[0];
         if(xml.hasOwnProperty("@isVip"))
         {
            return Boolean(xml.@isVip);
         }
         return false;
      }
      
      public static function hasChildren(param1:uint) : Boolean
      {
         var xmlList:XMLList = null;
         var xml:XML = null;
         var b:Boolean = false;
         var id:uint = param1;
         xmlList = xml.descendants("task");
         xml = xmlList.(@parentId == id.toString())[0];
         b = Boolean(xml);
         return b;
      }
      
      public static function getParentId(param1:uint) : uint
      {
         var parentId:uint = 0;
         var xmlList:XMLList = null;
         var list:XMLList = null;
         var xml:XML = null;
         var id:uint = param1;
         parentId = 0;
         xmlList = xml.descendants("task");
         list = xmlList.(@itemtype == "6_1");
         if(null != list.(@id == id.toString()))
         {
            xml = list.(@id == id.toString())[0];
            if(null != xml)
            {
               parentId = uint(xml.@parentId);
            }
         }
         return parentId;
      }
      
      public static function getOnlineData(param1:uint) : Number
      {
         var xmlList:XMLList = null;
         var xml:XML = null;
         var data:Number = NaN;
         var id:uint = param1;
         xmlList = xml.descendants("task");
         xml = xmlList.(@id == id.toString())[0];
         data = Number(xml.@onlineData);
         return data;
      }
      
      public static function getTaskNpcForId(param1:uint) : String
      {
         var xmlList:XMLList = null;
         var xml:XML = null;
         var npcName:String = null;
         var id:uint = param1;
         xmlList = xml.descendants("task");
         xml = xmlList.(@id == id.toString())[0];
         npcName = xml.@npc;
         return npcName;
      }
      
      public static function getTaskNpcTips(param1:uint) : String
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = xml.descendants("task");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.hasOwnProperty("@id") && _loc3_.@id == param1.toString())
            {
               return String(_loc3_.@tip);
            }
         }
         return "";
      }
      
      public static function getTaskOffLineForId(param1:uint) : Boolean
      {
         var xmlList:XMLList = null;
         var xml:XML = null;
         var id:uint = param1;
         xmlList = xml.descendants("task");
         xml = xmlList.(@id == id.toString())[0];
         return Boolean(uint(xml.@offline));
      }
      
      public static function getTaskNewOnlineForId(param1:uint) : Boolean
      {
         var xmlList:XMLList = null;
         var xml:XML = null;
         var id:uint = param1;
         xmlList = xml.descendants("task");
         xml = xmlList.(@id == id.toString())[0];
         return Boolean(uint(xml.@newOnline));
      }
      
      public static function getAltTaskMapId(param1:uint) : uint
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = xml.descendants("task");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.hasOwnProperty("@id") && _loc3_.@id == param1.toString())
            {
               return uint(_loc3_.@mapId);
            }
         }
         return 0;
      }
      
      public static function getTaskType(param1:uint) : uint
      {
         var xmlList:XMLList = null;
         var xml:XML = null;
         var id:uint = param1;
         xmlList = xml.descendants("task");
         xml = xmlList.(@id == id.toString())[0];
         return uint(xml.@type);
      }
      
      public static function getTaskStartDes(param1:uint) : String
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = xml.descendants("task");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.hasOwnProperty("@id") && _loc3_.@id == param1.toString())
            {
               return String(_loc3_.@startDes);
            }
         }
         return "";
      }
      
      public static function getTaskStopDes(param1:uint) : String
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = xml.descendants("task");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.hasOwnProperty("@id") && _loc3_.@id == param1.toString())
            {
               return String(_loc3_.@stopDes);
            }
         }
         return "";
      }
      
      public static function getTaskReward(param1:uint) : String
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = xml.descendants("task");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.hasOwnProperty("@id") && _loc3_.@id == param1.toString())
            {
               return String(_loc3_.@outPut);
            }
         }
         return "";
      }
      
      public static function getMinTask() : String
      {
         var all:XML = null;
         var story:XML = null;
         var list:XMLList = null;
         var task:XML = null;
         var date:Date = null;
         if(MainManager.actorInfo.petMaxLev < 15)
         {
            return "";
         }
         all = xml.tasks[0];
         story = all.children().(@itemtype == 2)[0];
         list = story.descendants("task");
         var _loc2_:int = 0;
         var _loc3_:* = list.children();
         loop1:
         while(true)
         {
            for each(task in _loc3_)
            {
               if(task.hasOwnProperty("@itemtype") && task.@itemtype == "6_1" && TasksManager.getTaskStatus(int(task.@id)) != TasksManager.COMPLETE)
               {
                  if(!task.hasOwnProperty("@online"))
                  {
                     break loop1;
                  }
                  date = new Date(String(task.@online));
                  if(date.time <= SystemTimerManager.sysBJDate.time)
                  {
                     break loop1;
                  }
               }
            }
            currentId = "";
            return "";
         }
         currentId = task.@id;
         return task.@name;
      }
   }
}
