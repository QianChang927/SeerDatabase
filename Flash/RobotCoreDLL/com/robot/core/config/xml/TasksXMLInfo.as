package com.robot.core.config.xml
{
   import com.robot.core.manager.MainManager;
   import org.taomee.ds.HashMap;
   
   public class TasksXMLInfo
   {
      
      private static const PRO:String = "pro";
      
      private static var xmlClass:Class = TasksXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var _infoList:Array;
      
      {
         setup();
      }
      
      public function TasksXMLInfo()
      {
         super();
      }
      
      public static function get dataMap() : HashMap
      {
         return _dataMap;
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XMLList = null;
         var _loc4_:XML = null;
         var _loc5_:uint = 0;
         _dataMap = new HashMap();
         var _loc1_:XMLList = XML(new xmlClass()).elements("task");
         for each(_loc2_ in _loc1_)
         {
            _loc5_ = uint(_loc2_.@ID);
            _dataMap.add(_loc5_,_loc2_);
         }
         _infoList = new Array();
         _loc3_ = XML(new xmlClass()).elements("info");
         for each(_loc4_ in _loc3_)
         {
            _infoList.push(_loc4_);
         }
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@name.toString();
         }
         return "";
      }
      
      public static function isMat(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return Boolean(int(_loc2_.@isMat));
         }
         return false;
      }
      
      public static function getType(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@type);
         }
         return 0;
      }
      
      public static function isEnd(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return Boolean(int(_loc2_.@isEnd));
         }
         return false;
      }
      
      public static function isDir(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return Boolean(int(_loc2_.@isDir));
         }
         return false;
      }
      
      public static function getParent(param1:uint) : Array
      {
         var _loc3_:String = null;
         var _loc4_:Array = null;
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            _loc3_ = _loc2_.@parent.toString();
            if(_loc3_ == "")
            {
               return [];
            }
            return _loc3_.split("|");
         }
         return [];
      }
      
      public static function getTaskPorCount(param1:uint) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.elements(PRO).length();
         }
         return 0;
      }
      
      public static function getIsHot(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("@hot") && Boolean(_loc2_.@hot))
            {
               return true;
            }
         }
         return false;
      }
      
      public static function getProName(param1:uint, param2:uint) : String
      {
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            return _loc3_.elements(PRO)[param2].@name.toString();
         }
         return "";
      }
      
      public static function getProDoc(param1:uint, param2:uint) : String
      {
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            return _loc3_.elements(PRO)[param2].@doc.toString();
         }
         return "";
      }
      
      public static function getProAlert(param1:uint, param2:uint) : String
      {
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            return _loc3_.elements(PRO)[param2].@alert.toString();
         }
         return "";
      }
      
      public static function getProParent(param1:uint, param2:uint) : Array
      {
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            if((_loc4_ = String(_loc3_.elements(PRO)[param2].@parent.toString())) == "")
            {
               return [];
            }
            return _loc4_.split("|");
         }
         return [];
      }
      
      public static function isProMat(param1:uint, param2:uint) : Boolean
      {
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            return Boolean(int(_loc3_.elements(PRO)[param2].@isMat));
         }
         return false;
      }
      
      public static function getTaskDes(param1:uint) : String
      {
         var _loc3_:String = null;
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            _loc3_ = String(_loc2_.taskDes);
            if(MainManager.actorInfo.nick.indexOf("$$") != -1)
            {
               return _loc3_.replace(/#nick/g,"");
            }
            return _loc3_.replace(/#nick/g,MainManager.actorInfo.nick);
         }
         return "";
      }
      
      public static function getProDes(param1:uint) : String
      {
         var _loc3_:String = null;
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            _loc3_ = String(_loc2_.proDes);
            return _loc3_.replace(/#nick/g,MainManager.actorInfo.nick);
         }
         return "";
      }
      
      public static function getTaskReward(param1:uint) : String
      {
         var _loc3_:String = null;
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@reward") == true)
         {
            return String(_loc2_.@reward);
         }
         return "";
      }
      
      public static function getTaskOnlineTime(param1:uint) : Number
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@online"))
         {
            return new Date(String(_loc2_.@online)).time;
         }
         return 0;
      }
      
      public static function getCurrentTaskId(param1:Date) : uint
      {
         var _loc2_:XML = getCurrentInfo(param1);
         if(!_loc2_)
         {
            return 0;
         }
         return _loc2_.@taskid;
      }
      
      public static function getCurrentTaskPanel(param1:Date) : String
      {
         var _loc2_:XML = getCurrentInfo(param1);
         if(!_loc2_)
         {
            return "";
         }
         return _loc2_.@panel;
      }
      
      public static function getCurrentTaskMain(param1:Date) : String
      {
         var _loc2_:XML = getCurrentInfo(param1);
         if(!_loc2_)
         {
            return "";
         }
         return _loc2_.@main;
      }
      
      public static function getCurrentTaskTotal(param1:Date) : String
      {
         var _loc2_:XML = getCurrentInfo(param1);
         if(!_loc2_)
         {
            return "";
         }
         return _loc2_.@total;
      }
      
      private static function getCurrentInfo(param1:Date) : XML
      {
         var _loc3_:XML = null;
         var _loc4_:Date = null;
         var _loc2_:XML = null;
         for each(_loc3_ in _infoList)
         {
            if((_loc4_ = new Date(String(_loc3_.@date))).time > param1.time)
            {
               return _loc2_;
            }
            _loc2_ = _loc3_;
         }
         return _loc2_;
      }
   }
}
