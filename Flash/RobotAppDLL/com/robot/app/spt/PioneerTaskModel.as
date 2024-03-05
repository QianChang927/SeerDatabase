package com.robot.app.spt
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   
   public class PioneerTaskModel
   {
      
      private static var xmlClass:Class = PioneerTaskModel_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
      
      public static var currentId:String = "";
      
      public static var currentGalaxy:int;
       
      
      public function PioneerTaskModel()
      {
         super();
      }
      
      public static function getSptXML() : XML
      {
         var _loc1_:XML = <config/>;
         _loc1_.appendChild(xml.elements("spt"));
         return _loc1_;
      }
      
      public static function getTeamSptXML() : XML
      {
         var _loc1_:XML = <config/>;
         _loc1_.appendChild(xml.elements("teamSpt"));
         return _loc1_;
      }
      
      public static function getMapID(param1:int) : uint
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = xml.descendants("spt");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.hasOwnProperty("@id") && uint(_loc3_.@id) == param1)
            {
               return uint(_loc3_.@enterID);
            }
         }
         return 1;
      }
      
      public static function getMinSpt() : String
      {
         var _loc2_:XML = null;
         if(MainManager.actorInfo.petMaxLev < 20)
         {
            return "";
         }
         var _loc1_:XMLList = xml.descendants("spt");
         for each(_loc2_ in _loc1_)
         {
            if(_loc2_.hasOwnProperty("@id"))
            {
               if(MainManager.actorInfo.petMaxLev >= uint(_loc2_.@lv) && TasksManager.getTaskStatus(uint(_loc2_.@id)) != TasksManager.COMPLETE)
               {
                  currentId = _loc2_.@petID;
                  currentGalaxy = _loc2_.@galaxy;
                  return _loc2_.parent().@title + "-" + _loc2_.@title;
               }
            }
         }
         currentId = "";
         return "";
      }
   }
}
