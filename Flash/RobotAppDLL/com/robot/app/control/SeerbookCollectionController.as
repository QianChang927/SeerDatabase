package com.robot.app.control
{
   import com.robot.core.info.PictureBookInfo;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class SeerbookCollectionController
   {
      
      private static var _instance:com.robot.app.control.SeerbookCollectionController;
       
      
      private var petMap:HashMap;
      
      private var allPets:Array;
      
      private var inited:Boolean;
      
      private var requesting:Boolean;
      
      private var initRequesting:Boolean = false;
      
      private var curPage:int;
      
      private var totalNumCur:int = 0;
      
      public function SeerbookCollectionController()
      {
         super();
         this.petMap = new HashMap();
         this.allPets = [1,2,3];
         EventManager.addEventListener("newPet_get_nocitce",this.getNewPetHandle);
      }
      
      public static function getinstance() : com.robot.app.control.SeerbookCollectionController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.SeerbookCollectionController();
         }
         return _instance;
      }
      
      private function getNewPetHandle(param1:DynamicEvent) : void
      {
         var _loc2_:int = int(param1.paramObject);
         if(this.petMap)
         {
            this.petMap.add(_loc2_,true);
         }
      }
      
      public function refreshPetState() : void
      {
         if(this.initRequesting || !this.inited || this.requesting)
         {
            return;
         }
         this.petMap = new HashMap();
         this.allPets = [1,2,3];
         this.inited = false;
      }
      
      public function getPetState(param1:Boolean = false, param2:Boolean = false) : void
      {
         var refresh:Boolean = param1;
         var again:Boolean = param2;
         if(this.initRequesting && !again)
         {
            return;
         }
         if(this.requesting)
         {
            return;
         }
         if(this.inited)
         {
            EventManager.dispatchEvent(new Event("seerbookPetStateInited"));
            return;
         }
         this.requesting = true;
         if(!this.inited)
         {
            this.initRequesting = true;
         }
         if(this.allPets.length)
         {
            this.curPage = this.allPets.shift();
            SocketConnection.sendByQueue(41292,[this.curPage],function(param1:SocketEvent):void
            {
               var _loc5_:int = 0;
               requesting = false;
               var _loc2_:ByteArray = param1.data as ByteArray;
               var _loc3_:int = int(_loc2_.readUnsignedInt());
               var _loc4_:int = 0;
               while(_loc4_ < _loc3_)
               {
                  _loc5_ = int(_loc2_.readUnsignedInt());
                  petMap.add(_loc5_,true);
                  _loc4_++;
               }
               getPetState(false,true);
            });
         }
         else
         {
            this.requesting = false;
            this.inited = true;
            this.initRequesting = false;
            EventManager.dispatchEvent(new Event("seerbookPetStateInited"));
         }
      }
      
      public function isInited() : Boolean
      {
         return this.inited;
      }
      
      public function getHavePet(param1:Array, param2:Function) : void
      {
         var par:ByteArray;
         var k:int;
         var arr:Array = null;
         var value:Array = param1;
         var fun:Function = param2;
         arr = [];
         if(value == null || value.length == 0)
         {
            fun(arr);
            return;
         }
         par = new ByteArray();
         par.writeUnsignedInt(value.length);
         k = 0;
         while(k < value.length)
         {
            par.writeUnsignedInt(value[k]);
            k++;
         }
         SocketConnection.sendByQueue(43321,[par],function(param1:SocketEvent):void
         {
            var _loc4_:int = 0;
            var _loc6_:PictureBookInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc6_ = new PictureBookInfo(_loc2_);
               arr.push(_loc6_.isCacth);
               petMap.add(_loc6_.id,_loc6_.isCacth);
               _loc5_++;
            }
            fun(arr);
         },function(param1:SocketEvent):void
         {
            var _loc2_:int = 0;
            while(_loc2_ < value.length)
            {
               arr.push(false);
               _loc2_++;
            }
            fun(arr);
         });
      }
      
      public function havePet(param1:int) : Boolean
      {
         return Boolean(this.petMap.containsKey(param1)) && Boolean(this.petMap.getValue(param1));
      }
   }
}
