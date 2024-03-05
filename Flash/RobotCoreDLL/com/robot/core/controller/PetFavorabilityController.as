package com.robot.core.controller
{
   import com.robot.core.config.xml.FavorabilityXmlInfo;
   import com.robot.core.info.pet.PetFavorInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class PetFavorabilityController
   {
      
      private static var UPGRADE_CMD:int = 41291;
       
      
      public function PetFavorabilityController()
      {
         super();
      }
      
      public static function upgradePetFavor(param1:int, param2:int = 3, param3:int = 1, param4:Function = null) : void
      {
         var catchTime:int = param1;
         var needItemId:int = param2;
         var needItemCnt:int = param3;
         var func:Function = param4;
         SocketConnection.sendByQueue(UPGRADE_CMD,[catchTime,needItemId,needItemCnt],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            if(func != null)
            {
               func();
            }
         });
      }
      
      public static function increasePetFavor_byItem(param1:int, param2:int, param3:int, param4:Function = null) : void
      {
         var catchTime:int = param1;
         var needItemId:int = param2;
         var needItemCnt:int = param3;
         var func:Function = param4;
         SocketConnection.sendByQueue(UPGRADE_CMD,[catchTime,needItemId,needItemCnt],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            if(func != null)
            {
               func();
            }
         });
      }
      
      public static function GetPetFavorLevelInfo(param1:PetInfo) : PetFavorInfo
      {
         var _loc2_:int = param1.sum_favor;
         var _loc3_:* = param1.is_favor_locked != 0;
         return FavorabilityXmlInfo.getLevelInfo(_loc2_,_loc3_);
      }
      
      public static function GetPetRestFavor(param1:PetInfo) : int
      {
         var _loc2_:PetFavorInfo = GetPetFavorLevelInfo(param1);
         return _loc2_.restFavor(param1.sum_favor);
      }
      
      public static function updatePetFavorLevelInfo(param1:int, param2:Function) : void
      {
         var catchTime:int = param1;
         var callback:Function = param2;
         PetManager.upDateBagPetInfo(catchTime,function(param1:PetInfo):void
         {
            var _loc2_:PetFavorInfo = GetPetFavorLevelInfo(param1);
            callback(_loc2_);
         });
      }
   }
}
