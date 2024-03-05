package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class TeamTaskXMLInfo
   {
      
      private static var teamTaskMonsterClass:Class = TeamTaskXMLInfo_teamTaskMonsterClass;
      
      private static var monsterXML:XML = XML(new teamTaskMonsterClass());
      
      private static var monsterMap:HashMap = new HashMap();
      
      private static var xmlClass:Class = TeamTaskXMLInfo_xmlClass;
      
      private static var taskXML:XML = XML(new xmlClass());
      
      private static var taskMap:HashMap = new HashMap();
      
      {
         initData();
      }
      
      public function TeamTaskXMLInfo()
      {
         super();
      }
      
      private static function initData() : void
      {
         getTeamtaskXMLInfo();
      }
      
      private static function getTeamtaskXMLInfo() : void
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc6_:String = null;
         var _loc7_:Array = null;
         var _loc8_:int = 0;
         var _loc9_:int = 0;
         var _loc10_:Object = null;
         var _loc11_:Object = null;
         taskMap = new HashMap();
         var _loc1_:XMLList = taskXML.Task;
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = {};
            _loc3_["id"] = int(_loc2_.@ID);
            _loc3_["tName"] = String(_loc2_.@TaskName);
            _loc3_["tDes"] = String(_loc2_.@TaskDes);
            _loc5_ = (_loc4_ = String(_loc2_.@BaseRewards)).split(",");
            _loc7_ = (_loc6_ = String(_loc2_.@ExtrRewards)).split(",");
            _loc3_["reward"] = [];
            _loc3_["exreward"] = [];
            _loc8_ = 0;
            while(_loc8_ < _loc5_.length)
            {
               (_loc10_ = {}).id = int(_loc5_[_loc8_].split("_")[0]);
               _loc10_.num = int(_loc5_[_loc8_].split("_")[1]);
               _loc3_["reward"].push(_loc10_);
               _loc8_++;
            }
            _loc9_ = 0;
            while(_loc9_ < _loc7_.length)
            {
               (_loc11_ = {}).id = int(_loc7_[_loc9_].split("_")[0]);
               _loc11_.num = int(_loc7_[_loc9_].split("_")[1]);
               _loc3_["exreward"].push(_loc11_);
               _loc9_++;
            }
            taskMap.add(_loc3_["id"],_loc3_);
         }
         getTeamTaskMonsterXMlInfo();
      }
      
      private static function getTeamTaskMonsterXMlInfo() : void
      {
         var _loc2_:XML = null;
         monsterMap = new HashMap();
         var _loc1_:XMLList = monsterXML.Type;
         for each(_loc2_ in _loc1_)
         {
            monsterMap.add(int(_loc2_.@ID),_loc2_);
         }
      }
      
      public static function getTaskById(param1:int) : Object
      {
         return taskMap.getValue(param1);
      }
      
      public static function getMonsterById(param1:int) : XML
      {
         return monsterMap.getValue(param1);
      }
   }
}
