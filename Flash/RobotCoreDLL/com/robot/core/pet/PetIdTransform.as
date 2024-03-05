package com.robot.core.pet
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class PetIdTransform
   {
      
      private static var _petMap:HashMap;
       
      
      public function PetIdTransform()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_PET_CONST_FORM_LIST,onGetList);
         SocketConnection.send(CommandID.GET_PET_CONST_FORM_LIST);
         SocketConnection.addCmdListener(CommandID.SET_PET_CONST_FORM,onChange);
      }
      
      private static function onGetList(param1:SocketEvent) : void
      {
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         _petMap = new HashMap();
         SocketConnection.removeCmdListener(CommandID.GET_PET_CONST_FORM_LIST,onGetList);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = _loc2_.readUnsignedInt();
            _loc6_ = _loc2_.readUnsignedInt();
            _petMap.add(_loc5_,_loc6_);
            _loc4_++;
         }
      }
      
      private static function onChange(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint;
         if((_loc4_ = _loc2_.readUnsignedInt()) == 0)
         {
            _petMap.remove(_loc3_);
         }
         else
         {
            _petMap.add(_loc3_,_loc4_);
         }
         var _loc5_:*;
         (_loc5_ = getDefinitionByName("com.robot.app.petbag.PetBagController")).panel.refreshItem();
      }
      
      public static function getPetId(param1:uint, param2:uint = 0, param3:Boolean = false) : uint
      {
         if(param1 == 462 && SystemTimerManager.sysDate.getDate() == 12)
         {
            return 5004;
         }
         if(param1 == 904 && SystemTimerManager.sysDate.getDate() == 22)
         {
            return 5034;
         }
         if(param1 == 70 && TasksManager.getTaskStatus(1241) == TasksManager.COMPLETE && param3)
         {
            return 9999;
         }
         if(_petMap == null)
         {
            return param1;
         }
         if(_petMap.containsKey(param2))
         {
            return _petMap.getValue(param2);
         }
         return param1;
      }
      
      public static function getHasTransform(param1:uint) : Boolean
      {
         if(_petMap == null)
         {
            return false;
         }
         return _petMap.containsKey(param1);
      }
   }
}
