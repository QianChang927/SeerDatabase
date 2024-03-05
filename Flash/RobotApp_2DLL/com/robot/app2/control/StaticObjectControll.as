package com.robot.app2.control
{
   import org.taomee.ds.HashMap;
   
   public class StaticObjectControll
   {
      
      private static var catchMap:HashMap;
       
      
      public function StaticObjectControll()
      {
         super();
      }
      
      public static function getObjectByKey(param1:String) : *
      {
         if(null == catchMap)
         {
            return null;
         }
         return catchMap.getValue(param1);
      }
      
      public static function containKey(param1:String) : Boolean
      {
         if(catchMap == null)
         {
            return false;
         }
         return catchMap.containsKey(param1);
      }
      
      public static function setObjectByKey(param1:String, param2:*) : void
      {
         if(null == catchMap)
         {
            catchMap = new HashMap();
         }
         catchMap.add(param1,param2);
      }
   }
}
