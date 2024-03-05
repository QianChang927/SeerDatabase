package com.robot.app.spt
{
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.MapConfig;
   
   public class SptXmlInfo
   {
      
      private static var xmlClass:Class = SptXmlInfo_xmlClass;
      
      public static const LEVEL_S:String = "level_s";
      
      public static const LEVEL_COMMON:String = "level_common";
      
      public static const TYPE_GALAXY:String = "galaxy";
      
      public static const TYPE_DIFFICULTY:String = "difficulty";
      
      public static const TYPE_SHOUHU:String = "shouhu";
      
      public static const TYPE_LIANMEN:String = "lianmen";
      
      public static const TYPE_SPECIAL_ACTION:String = "specialAction";
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var xmlList:XMLList;
      
      private static var len:uint;
      
      private static var _taskList:Array;
      
      public static var sptShowList:Array;
      
      private static var _weakenSpts:Array;
      
      private static var _nextWeakenSpts:Array;
      
      private static var _sLevelSpts:Array;
       
      
      public function SptXmlInfo()
      {
         super();
      }
      
      public static function get weakenSpts() : Array
      {
         if(null != _weakenSpts)
         {
            return _weakenSpts;
         }
         var _loc1_:Array = [];
         var _loc2_:XML = xml.descendants("weakenSpts")[0];
         var _loc3_:Array = _loc2_.toString().split(",");
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_.length)
         {
            _loc1_.push(parseInt(_loc3_[_loc4_]));
            _loc4_++;
         }
         _weakenSpts = _loc1_;
         return _loc1_;
      }
      
      public static function get nextWeakenSpts() : Array
      {
         var _loc1_:XML = null;
         var _loc2_:Array = null;
         var _loc3_:int = 0;
         if(null == _nextWeakenSpts)
         {
            _nextWeakenSpts = [];
            _loc1_ = xml.descendants("weakenSptsNextWeek")[0];
            _loc2_ = _loc1_.toString().split(",");
            _loc3_ = 0;
            while(_loc3_ < _loc2_.length)
            {
               _nextWeakenSpts.push(parseInt(_loc2_[_loc3_]));
               _loc3_++;
            }
         }
         return _nextWeakenSpts;
      }
      
      public static function get sLevelSpts() : Array
      {
         var _loc1_:XML = null;
         var _loc2_:Array = null;
         var _loc3_:int = 0;
         if(null == _sLevelSpts)
         {
            _sLevelSpts = [];
            _loc1_ = xml.descendants("sLevelSpts")[0];
            _loc2_ = _loc1_.toString().split(",");
            _loc3_ = 0;
            while(_loc3_ < _loc2_.length)
            {
               _sLevelSpts.push(parseInt(_loc2_[_loc3_]));
               _loc3_++;
            }
         }
         return _sLevelSpts;
      }
      
      public static function getFinshInfo(param1:Array) : int
      {
         var _loc5_:int = 0;
         var _loc2_:Array = param1;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         while(_loc4_ < _loc2_.length)
         {
            _loc5_ = int(_loc2_[_loc4_]);
            if(TasksManager.getTaskStatus(_loc5_) == TasksManager.COMPLETE)
            {
               _loc3_++;
            }
            _loc4_++;
         }
         return _loc3_;
      }
      
      public static function getSptList(param1:String, param2:int = 0) : Array
      {
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc6_:Object = null;
         var _loc7_:int = 0;
         var _loc3_:Array = [];
         if(param1 == TYPE_SHOUHU)
         {
            _loc3_ = [145,146,147,148];
         }
         else if(param1 == TYPE_LIANMEN)
         {
            _loc3_ = [998,329,306,325,997];
         }
         else if(param1 == TYPE_SPECIAL_ACTION)
         {
            _loc3_ = weakenSpts;
         }
         else
         {
            _loc3_ = [];
            if(null == _taskList)
            {
               SptXmlInfo.getSptTaskStatus();
            }
            _loc4_ = SptXmlInfo.taskList;
            _loc5_ = 0;
            while(_loc5_ < _loc4_.length)
            {
               _loc7_ = int((_loc6_ = _loc4_[_loc5_])["taskID"]);
               if(param1 == TYPE_GALAXY)
               {
                  if(_loc6_["galaxy"] == param2)
                  {
                     _loc3_.push(_loc7_);
                  }
               }
               else if(SptXmlInfo.getDifficultyByID(_loc7_) == param2 && _loc6_["galaxy"] > 0 && getSptList(TYPE_LIANMEN).indexOf(_loc7_) == -1)
               {
                  _loc3_.push(_loc7_);
               }
               _loc5_++;
            }
         }
         return _loc3_;
      }
      
      public static function getTaskID(param1:uint) : uint
      {
         var _loc2_:* = undefined;
         xmlList = xml.descendants("spt");
         for each(_loc2_ in xmlList)
         {
            if(_loc2_.@petID == param1)
            {
               return uint(_loc2_.@id);
            }
         }
         return null;
      }
      
      public static function getSptShowList() : void
      {
         getSptTaskStatus();
         sptShowList = _taskList.filter(filterFun);
         sptShowList.sort(sptSortFun);
         sptShowList.length = 3;
      }
      
      private static function sptSortFun(param1:Object, param2:Object) : int
      {
         if(param1["petID"] > param2["petID"])
         {
            return 1;
         }
         return -1;
      }
      
      private static function filterFun(param1:*, param2:uint, param3:Array) : Boolean
      {
         if(param1["taskStatus"] < 3)
         {
            return true;
         }
         return false;
      }
      
      public static function getSptTaskStatus() : void
      {
         var _loc1_:* = undefined;
         var _loc2_:Object = null;
         _taskList = [];
         xmlList = xml.descendants("spt");
         for each(_loc1_ in xmlList)
         {
            if(_loc1_.@id > 0 && _loc1_.@petID > 0)
            {
               _loc2_ = new Object();
               _loc2_["petID"] = uint(_loc1_.@petID);
               _loc2_["taskID"] = uint(_loc1_.@id);
               _loc2_["taskStatus"] = TasksManager.getTaskStatus(_loc2_["taskID"]);
               _loc2_["galaxy"] = uint(_loc1_.@galaxy);
               if(_loc1_.@enterID > 0)
               {
                  _loc2_["mapID"] = uint(_loc1_.@enterID);
                  _loc2_["superID"] = MapConfig.getSuperMapID(_loc2_["mapID"]);
                  _taskList.push(_loc2_);
               }
            }
         }
      }
      
      private static function getGalaxy(param1:uint) : XML
      {
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         xmlList = xml.descendants("spt");
         for each(_loc3_ in xmlList)
         {
            if(_loc3_.@galaxy == param1.toString())
            {
               _loc2_ = _loc3_;
               break;
            }
         }
         return _loc2_;
      }
      
      public static function isClearGalaxy(param1:uint) : Boolean
      {
         var _loc2_:int = 0;
         if(_taskList == null)
         {
            throw new Error("请先查询任务完成情况！");
         }
         _loc2_ = 0;
         while(_loc2_ < _taskList.length)
         {
            if(_taskList[_loc2_]["galaxy"] == param1)
            {
               _taskList[_loc2_]["taskStatus"] != 3;
               return false;
            }
            _loc2_++;
         }
         return true;
      }
      
      public static function getDescriptionByID(param1:int) : String
      {
         var _loc2_:* = undefined;
         xmlList = xml.descendants("spt");
         for each(_loc2_ in xmlList)
         {
            if(_loc2_.@id == param1)
            {
               return _loc2_.@description;
            }
         }
         return "";
      }
      
      public static function getIdByTitle(param1:String) : int
      {
         var _loc2_:* = undefined;
         xmlList = xml.descendants("spt");
         for each(_loc2_ in xmlList)
         {
            if(_loc2_.@title == param1)
            {
               return _loc2_.@id;
            }
         }
         return 0;
      }
      
      public static function getMapByID(param1:int) : int
      {
         var _loc2_:* = undefined;
         xmlList = xml.descendants("spt");
         for each(_loc2_ in xmlList)
         {
            if(_loc2_.@id == param1)
            {
               return _loc2_.@enterID;
            }
         }
         return 0;
      }
      
      public static function getTitleByID(param1:int) : String
      {
         var _loc2_:* = undefined;
         xmlList = xml.descendants("spt");
         for each(_loc2_ in xmlList)
         {
            if(_loc2_.@id == param1)
            {
               return _loc2_.@title;
            }
         }
         return "";
      }
      
      public static function getDifficultyByID(param1:int) : int
      {
         var _loc2_:* = undefined;
         xmlList = xml.descendants("spt");
         for each(_loc2_ in xmlList)
         {
            if(_loc2_.@id == param1)
            {
               return _loc2_.@difficulty;
            }
         }
         return 0;
      }
      
      public static function getPetIdByID(param1:int) : int
      {
         var _loc2_:* = undefined;
         xmlList = xml.descendants("spt");
         for each(_loc2_ in xmlList)
         {
            if(_loc2_.@id == param1)
            {
               return _loc2_.@petID;
            }
         }
         return 0;
      }
      
      public static function getSIDByID(param1:int) : int
      {
         var _loc2_:* = undefined;
         xmlList = xml.descendants("spt");
         for each(_loc2_ in xmlList)
         {
            if(_loc2_.@id == param1)
            {
               return _loc2_.@sID;
            }
         }
         return 0;
      }
      
      public static function get taskList() : Array
      {
         return _taskList;
      }
   }
}
