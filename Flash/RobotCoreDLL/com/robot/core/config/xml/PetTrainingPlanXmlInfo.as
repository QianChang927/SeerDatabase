package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class PetTrainingPlanXmlInfo
   {
      
      private static var xmlClass:Class = PetTrainingPlanXmlInfo_xmlClass;
      
      private static var _map:HashMap;
       
      
      public function PetTrainingPlanXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:int = 0;
         _map = new HashMap();
         var _loc1_:XMLList = XML(new xmlClass()).elements("Plan");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = int(_loc2_.@MonId);
            _map.add(_loc3_,_loc2_);
         }
      }
      
      public static function getPlanIdByPetId(param1:int) : int
      {
         if(null == _map)
         {
            setup();
         }
         var _loc2_:XML = _map.getValue(param1);
         if(null != _loc2_)
         {
            return _loc2_.@ID;
         }
         return -1;
      }
   }
}
