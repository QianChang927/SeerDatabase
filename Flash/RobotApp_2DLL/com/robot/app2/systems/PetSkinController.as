package com.robot.app2.systems
{
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetSkinXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xmlInfo.PetSkinInfo;
   import com.robot.core.info.RewardPetSkinInfo;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class PetSkinController extends EventDispatcher
   {
      
      public static var SKIN_CHANGE:String = "skin_change";
      
      private static var _instance:com.robot.app2.systems.PetSkinController;
       
      
      private var _dataMap:HashMap;
      
      public var getSkinCallback:Function = null;
      
      public function PetSkinController()
      {
         this._dataMap = new HashMap();
         super();
      }
      
      public static function get instance() : com.robot.app2.systems.PetSkinController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.systems.PetSkinController();
         }
         return _instance;
      }
      
      public function setUp() : void
      {
         SocketConnection.addCmdListener(47311,this.onPetSkinChange);
         SocketConnection.sendWithCallback2(47309,this.onGetAllSkin);
      }
      
      public function onGetAllSkin(param1:SocketEvent) : void
      {
         var _loc5_:int = 0;
         var _loc6_:uint = 0;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = int(_loc2_.readUnsignedInt());
            _loc6_ = _loc2_.readUnsignedInt();
            this._dataMap.add(_loc5_,_loc6_);
            _loc4_++;
         }
         dispatchEvent(new Event(SKIN_CHANGE));
      }
      
      public function havePermanentSkin(param1:int) : Boolean
      {
         return this._dataMap.getValue(param1) == 4294967295;
      }
      
      public function isSkinOverdue(param1:int) : Boolean
      {
         var _loc2_:int = 0;
         if(this._dataMap.containsKey(param1))
         {
            _loc2_ = int(this._dataMap.getValue(param1));
            if(_loc2_ < SystemTimerManager.time)
            {
               return true;
            }
            return false;
         }
         return false;
      }
      
      public function onPetSkinChange(param1:SocketEvent) : void
      {
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc7_:uint = 0;
         var _loc8_:PetSkinInfo = null;
         var _loc9_:String = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = int(_loc2_.readUnsignedInt());
            _loc6_ = int(_loc2_.readUnsignedInt());
            _loc7_ = _loc2_.readUnsignedInt();
            if((_loc8_ = PetSkinXMLInfo.getSkinInfo(_loc5_)) != null)
            {
               _loc9_ = String(PetXMLInfo.getName(_loc8_.monId));
               this._dataMap.add(_loc5_,_loc7_);
               Alarm2.show("获得" + _loc9_ + "的皮肤：" + PetSkinXMLInfo.getSubSkinName(_loc5_,_loc6_),this.getSkinCallback);
               this.getSkinCallback = null;
            }
            _loc4_++;
         }
         dispatchEvent(new Event(SKIN_CHANGE));
      }
      
      public function onPetSkinChangeByBonus(param1:Array) : void
      {
         var _loc2_:RewardPetSkinInfo = null;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:uint = 0;
         var _loc6_:PetSkinInfo = null;
         var _loc7_:String = null;
         for each(_loc2_ in param1)
         {
            _loc3_ = int(_loc2_.skinId);
            _loc4_ = int(_loc2_.subKindId);
            _loc5_ = uint(_loc2_.dueTime);
            if((_loc6_ = PetSkinXMLInfo.getSkinInfo(_loc3_)) != null)
            {
               _loc7_ = String(PetXMLInfo.getName(_loc6_.monId));
               this._dataMap.add(_loc3_,_loc5_);
               Alarm2.show("获得" + _loc7_ + "的皮肤：" + PetSkinXMLInfo.getSubSkinName(_loc3_,_loc4_),this.getSkinCallback);
               this.getSkinCallback = null;
            }
         }
         if(param1.length != 0)
         {
            dispatchEvent(new Event(SKIN_CHANGE));
         }
      }
      
      public function haveSkin(param1:int) : Boolean
      {
         if(param1 == 0)
         {
            return true;
         }
         if(this._dataMap.containsKey(param1))
         {
            if(this._dataMap.getValue(param1) == -1)
            {
               return true;
            }
            return this._dataMap.getValue(param1) >= SystemTimerManager.time;
         }
         return false;
      }
      
      public function exchangeSkin(param1:int) : Boolean
      {
         var _loc3_:int = 0;
         var _loc2_:Object = ItemXMLInfo.getItemObj(param1);
         if(_loc2_ != null)
         {
            _loc3_ = int(_loc2_["SkinId"]);
            if(_loc3_ > 0)
            {
               SocketConnection.send(47315,param1);
               return true;
            }
            return false;
         }
         return false;
      }
   }
}
