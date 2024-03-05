package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class MoneyTaskXMLInfo
   {
      
      private static var xmlClass:Class = MoneyTaskXMLInfo_xmlClass;
      
      private static var _tasksMap:HashMap;
      
      private static var _isSetuped:Boolean = false;
       
      
      public function MoneyTaskXMLInfo()
      {
         super();
      }
      
      private static function setup(param1:Function = null) : void
      {
         var _loc3_:XML = null;
         var _loc2_:XML = XML(new xmlClass());
         _tasksMap = new HashMap();
         for each(_loc3_ in _loc2_.elements("Task"))
         {
            _tasksMap.add(_loc3_.@ID,_loc3_);
         }
         _isSetuped = true;
         if(param1 != null)
         {
            param1();
         }
      }
      
      public static function getTask(param1:int) : XML
      {
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         if(!_isSetuped)
         {
            _loc2_ = XML(new xmlClass());
            _tasksMap = new HashMap();
            for each(_loc3_ in _loc2_.descendants("Task"))
            {
               _tasksMap.add(String(_loc3_.@ID),_loc3_);
            }
            return _tasksMap.getValue(param1.toString());
         }
         return _tasksMap.getValue(param1.toString());
      }
   }
}
