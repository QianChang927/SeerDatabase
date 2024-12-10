package com.robot.core.controller
{
   import com.robot.core.config.xml.ElfAwakeningNewXmlInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class ElfAwakeningNewController
   {
      
      private static var _instance:ElfAwakeningNewController;
       
      
      private var stateArr:HashMap;
      
      private var allInfos:HashMap;
      
      public var itemNum:int;
      
      public var timeStamp:int;
      
      public function ElfAwakeningNewController()
      {
         this.allInfos = new HashMap();
         super();
         ElfAwakeningNewXmlInfo.init();
         this.allInfos = ElfAwakeningNewXmlInfo.getAllInfo();
      }
      
      public static function get instance() : ElfAwakeningNewController
      {
         if(_instance == null)
         {
            _instance = new ElfAwakeningNewController();
         }
         return _instance;
      }
      
      public function curOpen() : Boolean
      {
         var _loc1_:Boolean = false;
         return ElfAwakeningNewXmlInfo.getCurPet() != null;
      }
      
      public function showPanel() : void
      {
         if(this.curOpen())
         {
            ModuleManager.showAppModule("ElfAwakeningNewMainPanel",1);
         }
         else
         {
            ModuleManager.showAppModule("ElfAwakeningNewMainPanel",0);
         }
      }
      
      public function getStateInfoByAid(param1:int) : Object
      {
         return this.stateArr.getValue(param1);
      }
      
      public function getAllState(param1:Function = null) : void
      {
         var fun:Function = param1;
         SocketConnection.sendByQueue(45829,[],function(param1:SocketEvent):void
         {
            var _loc5_:Object = null;
            stateArr = new HashMap();
            var _loc2_:ByteArray = param1.data as ByteArray;
            itemNum = _loc2_.readUnsignedInt();
            timeStamp = _loc2_.readUnsignedInt();
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               (_loc5_ = {}).id = _loc2_.readUnsignedInt();
               _loc5_.type = _loc2_.readUnsignedInt();
               _loc5_.state = _loc2_.readUnsignedInt();
               stateArr.add(_loc5_.id,_loc5_);
               _loc4_++;
            }
            if(fun != null)
            {
               fun(stateArr);
            }
         });
      }
      
      public function getStates() : HashMap
      {
         return this.stateArr;
      }
      
      public function getInfosById(param1:int) : Object
      {
         return this.allInfos.getValue(param1);
      }
      
      public function getLastOpenPetsFree() : Array
      {
         var _loc4_:Object = null;
         var _loc5_:Object = null;
         var _loc1_:Array = [];
         if(this.stateArr == null)
         {
            return null;
         }
         var _loc2_:Array = this.allInfos.getKeys();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            if((Boolean(_loc4_ = this.allInfos.getValue(_loc2_[_loc3_]))) && _loc4_.awakentype == 2)
            {
               if((Boolean(_loc5_ = this.stateArr.getValue(_loc4_.id))) && _loc5_.type == 1)
               {
                  _loc1_.push(_loc4_);
               }
            }
            _loc3_++;
         }
         return _loc1_;
      }
      
      public function getLastOpenPetsMoney() : Array
      {
         var _loc4_:Object = null;
         var _loc5_:Object = null;
         var _loc1_:Array = [];
         if(this.stateArr == null)
         {
            return null;
         }
         var _loc2_:Array = this.allInfos.getKeys();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            if((Boolean(_loc4_ = this.allInfos.getValue(_loc2_[_loc3_]))) && _loc4_.awakentype == 2)
            {
               if((Boolean(_loc5_ = this.stateArr.getValue(_loc4_.id))) && _loc5_.type == 2)
               {
                  _loc1_.push(_loc4_);
               }
            }
            _loc3_++;
         }
         return _loc1_;
      }
   }
}
