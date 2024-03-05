package com.robot.core.config.xml
{
   public class TasksOfNewStyleXMLInfo
   {
      
      private static var xmlClass:Class = TasksOfNewStyleXMLInfo_xmlClass;
      
      private static var _data:Array;
      
      private static const mainNode:String = "task";
      
      private static const nodeArribute:String = "ID";
       
      
      public function TasksOfNewStyleXMLInfo()
      {
         super();
      }
      
      private static function loadXMLData(param1:Array, param2:String, param3:String) : void
      {
         var _loc5_:XML = null;
         var _loc4_:XMLList = XML(new xmlClass()).elements(param2);
         for each(_loc5_ in _loc4_)
         {
            param1.push(_loc5_.attribute(param3));
         }
      }
      
      public static function getIsOnline(param1:uint) : Boolean
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = XML(new xmlClass()).elements("task");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@ID == param1)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function get data() : Array
      {
         if(_data == null)
         {
            _data = new Array();
            loadXMLData(_data,mainNode,nodeArribute);
         }
         return _data;
      }
      
      public static function IsInArray(param1:*, param2:Array) : int
      {
         if(param2 == null)
         {
            return -1;
         }
         var _loc3_:int = int(param2.length);
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            if(param1 == param2[_loc4_])
            {
               return _loc4_;
            }
            _loc4_++;
         }
         return -1;
      }
      
      public static function getTotalName(param1:int) : String
      {
         var _loc2_:String = getArrName(param1,"total");
         if(_loc2_ == "")
         {
            return "TaskMainTotalComplete_" + param1;
         }
         return _loc2_;
      }
      
      public static function getArrName(param1:int, param2:String) : String
      {
         var taskXml:XML = null;
         var arrValue:String = null;
         var taskId:int = param1;
         var arrName:String = param2;
         taskXml = XML(new xmlClass());
         arrValue = String(taskXml.task.(@ID == taskId.toString()).attribute(arrName));
         return arrValue;
      }
      
      public static function getIsRewardBitbuf(param1:int) : int
      {
         var taskXml:XML = null;
         var arrValue:int = 0;
         var taskId:int = param1;
         if(!getIsOnline(taskId))
         {
            return -1;
         }
         taskXml = XML(new xmlClass());
         arrValue = int(taskXml.task.(@ID == taskId.toString()).attribute("bitbufId"));
         return arrValue;
      }
      
      public static function getRewardvalue(param1:int) : uint
      {
         var taskXml:XML = null;
         var arrValue:uint = 0;
         var taskId:int = param1;
         taskXml = XML(new xmlClass());
         arrValue = uint(taskXml.task.(@ID == taskId.toString()).attribute("rewardId"));
         return arrValue;
      }
      
      public static function getTaskProArName(param1:int, param2:int, param3:String) : String
      {
         var taskXML:XML = null;
         var proXMLList:XMLList = null;
         var taskId:int = param1;
         var pro:int = param2;
         var arrName:String = param3;
         taskXML = XML(new xmlClass());
         proXMLList = taskXML.task.(@ID == taskId.toString()).elements("pro");
         return proXMLList[pro].attribute(arrName);
      }
      
      public static function getPetName(param1:int) : String
      {
         var taskXml:XML = null;
         var arrValue:String = null;
         var petId:int = param1;
         taskXml = XML(new xmlClass());
         arrValue = String(taskXml.petid.pet.(@id == petId).attribute("name"));
         return arrValue;
      }
      
      public static function getPetId(param1:String) : int
      {
         var taskXml:XML = null;
         var arrValue:int = 0;
         var petName:String = param1;
         taskXml = XML(new xmlClass());
         arrValue = int(taskXml.petid.pet.(@name == petName).attribute("id"));
         return arrValue;
      }
   }
}
