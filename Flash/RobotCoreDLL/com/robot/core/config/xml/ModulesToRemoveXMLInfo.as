package com.robot.core.config.xml
{
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm2;
   import org.taomee.ds.HashMap;
   
   public class ModulesToRemoveXMLInfo
   {
      
      private static var xmlClass:Class = ModulesToRemoveXMLInfo_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var xmlClass1:Class = ModulesToRemoveXMLInfo_xmlClass1;
      
      private static var xml1:XML = XML(new xmlClass1());
      
      private static var _modulesToReomve:HashMap;
       
      
      public function ModulesToRemoveXMLInfo()
      {
         super();
      }
      
      private static function init() : void
      {
         var _loc1_:XMLList = null;
         var _loc3_:XML = null;
         var _loc4_:String = null;
         var _loc5_:String = null;
         _modulesToReomve = new HashMap();
         if(SystemTimerManager.splitVersion2022(true) == 1)
         {
            _loc1_ = xml1.item;
         }
         else
         {
            _loc1_ = xml.item;
         }
         var _loc2_:int = 0;
         for each(_loc3_ in _loc1_)
         {
            _loc4_ = _loc3_.@moduleName;
            _loc5_ = _loc3_.@tip;
            _modulesToReomve.add(_loc4_,_loc5_);
         }
      }
      
      public static function checkIsModuleToRemove(param1:String) : Boolean
      {
         var _loc2_:String = null;
         if(_modulesToReomve == null)
         {
            init();
         }
         if(_modulesToReomve.getValue(param1) != null)
         {
            _loc2_ = String(_modulesToReomve.getValue(param1));
            Alarm2.show(_loc2_);
            return true;
         }
         return false;
      }
   }
}
