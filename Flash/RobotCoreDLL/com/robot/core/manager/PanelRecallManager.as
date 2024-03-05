package com.robot.core.manager
{
   import org.taomee.ds.HashMap;
   
   public class PanelRecallManager
   {
      
      private static var _map:HashMap = new HashMap();
      
      public static var MountActive_Recall:Boolean;
      
      public static var TuoLukePanel_Recall:Boolean;
      
      public static var SpringRescue_Recall:Boolean;
      
      public static var addArrowForMap103:Boolean;
      
      public static var addArrorForMap405:Boolean = false;
       
      
      public function PanelRecallManager()
      {
         super();
      }
      
      public static function addKey(param1:String, param2:String) : void
      {
         _map.add(param1,param2);
      }
      
      public static function removeKey(param1:String, param2:String) : void
      {
         _map.remove(param1);
      }
      
      public static function containsKey(param1:String) : void
      {
         _map.containsKey(param1);
      }
   }
}
