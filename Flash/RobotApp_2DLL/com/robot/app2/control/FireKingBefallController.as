package com.robot.app2.control
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class FireKingBefallController
   {
      
      public static var itemNum:uint;
       
      
      public function FireKingBefallController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(!BufferRecordManager.getState(MainManager.actorInfo,664))
         {
            CartoonManager.play(ClientConfig.getFullMovie("cartoon/fireKingBefall"),function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20130614_7"),function():void
               {
                  SocketConnection.send(1022,86058530);
                  BufferRecordManager.setState(MainManager.actorInfo,664,true);
                  ModuleManager.showModule(ClientConfig.getAppModule("FireKingBefallMainPanel"));
               });
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("FireKingBefallMainPanel"));
         }
      }
      
      public static function get haveFireKing() : Boolean
      {
         var _loc4_:PetListInfo = null;
         var _loc1_:Array = PetManager.getBagMap();
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < _loc1_.length)
         {
            if((_loc4_ = _loc1_[_loc3_] as PetListInfo).id == 1533 || _loc4_.id == 1534)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function updateItem(param1:Function) : void
      {
         var fun:Function = param1;
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,function(param1:ItemEvent):void
         {
            ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,arguments.callee);
            var _loc3_:SingleItemInfo = ItemManager.getCollectionInfo(1400073);
            if(_loc3_)
            {
               itemNum = _loc3_.itemNum;
            }
            else
            {
               itemNum = 0;
            }
            if(fun != null)
            {
               fun.call();
            }
         });
         ItemManager.upDateCollection(1400073);
      }
      
      public static function canGetPet(param1:Function) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(CommandID.ELINGSHOU_COME_BACK_GET_CULTIVATE_INFO,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.ELINGSHOU_COME_BACK_GET_CULTIVATE_INFO,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            var _loc5_:uint = _loc3_.readUnsignedInt();
            var _loc6_:uint = _loc3_.readUnsignedInt();
            var _loc7_:uint = _loc3_.readUnsignedInt();
            var _loc8_:uint = _loc3_.readUnsignedInt();
            var _loc9_:uint = _loc3_.readUnsignedInt();
            var _loc10_:uint = _loc3_.readUnsignedInt();
            var _loc11_:uint = _loc3_.readUnsignedInt();
            var _loc12_:uint = _loc3_.readUnsignedInt();
            var _loc13_:Boolean = false;
            if(_loc4_ >= 50 && _loc5_ >= 25 && _loc6_ <= 24 && _loc7_ + _loc8_ + _loc9_ + _loc10_ + _loc11_ + _loc12_ >= 300)
            {
               _loc13_ = true;
            }
            if(fun != null)
            {
               fun(_loc13_);
            }
         });
         SocketConnection.send(CommandID.ELINGSHOU_COME_BACK_GET_CULTIVATE_INFO,3);
      }
   }
}
