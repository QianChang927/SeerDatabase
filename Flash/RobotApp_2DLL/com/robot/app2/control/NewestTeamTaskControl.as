package com.robot.app2.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.info.pet.PetStorage2015PetInfo;
   import com.robot.core.info.teamTask.NewestTeamDipatchedPetInfo;
   import com.robot.core.info.teamTask.NewestTeamTaskInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class NewestTeamTaskControl
   {
      
      private static var _taskInfos:Array = [];
      
      private static var _curTaskNum:int;
      
      private static var _maxTaskNum:int;
      
      private static var _storagePet:Array;
       
      
      public function NewestTeamTaskControl()
      {
         super();
      }
      
      public static function set taskInfos(param1:Array) : void
      {
         _taskInfos = param1;
      }
      
      public static function get taskInfos() : Array
      {
         return _taskInfos;
      }
      
      public static function set curTaskNum(param1:int) : void
      {
         _curTaskNum = param1;
      }
      
      public static function get curTaskNum() : int
      {
         return _curTaskNum;
      }
      
      public static function set maxTaskNum(param1:int) : void
      {
         _maxTaskNum = param1;
      }
      
      public static function get maxTaskNum() : int
      {
         return _maxTaskNum;
      }
      
      public static function getNotDispatchedPets() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(45805,[]).then(function(param1:SocketEvent):void
         {
            var _loc6_:NewestTeamDipatchedPetInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = [];
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc6_ = new NewestTeamDipatchedPetInfo(_loc2_);
               _loc4_.push(_loc6_);
               _loc5_++;
            }
            deferred.resolve(_loc4_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function setNotDispatchedPets(param1:int, param2:int) : Promise
      {
         var deferred:Deferred = null;
         var operator_type:int = param1;
         var pet_catchtm:int = param2;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(45806,[operator_type,pet_catchtm]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            deferred.resolve(_loc3_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function getTeamTaskInfos() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(45807,[]).then(function(param1:SocketEvent):void
         {
            var _loc6_:NewestTeamTaskInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _curTaskNum = _loc2_.readUnsignedInt();
            _maxTaskNum = _loc2_.readUnsignedInt();
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = [];
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc6_ = new NewestTeamTaskInfo(_loc2_);
               _loc4_.push(_loc6_);
               _loc5_++;
            }
            taskInfos = _loc4_;
            deferred.resolve(_loc4_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function setTaskDispatched(param1:int, param2:Array) : Promise
      {
         var deferred:Deferred = null;
         var taskId:int = param1;
         var petIdArr:Array = param2;
         deferred = new Deferred();
         var arr:Array = [taskId].concat(petIdArr);
         SocketConnection.sendWithPromise(45808,arr).then(function(param1:SocketEvent):void
         {
            var _loc4_:NewestTeamTaskInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _curTaskNum = _loc2_.readUnsignedInt();
            var _loc3_:NewestTeamTaskInfo = new NewestTeamTaskInfo(_loc2_);
            for each(_loc4_ in taskInfos)
            {
               if(_loc4_.team_task_id == _loc3_.team_task_id)
               {
                  _loc4_.team_task_pets = _loc3_.team_task_pets;
                  _loc4_.team_task_finish_timestamp = _loc3_.team_task_finish_timestamp;
                  _loc4_.team_task_succ_rate = _loc3_.team_task_succ_rate;
                  _loc4_.team_task_is_extrea_reward = _loc3_.team_task_is_extrea_reward;
                  _loc4_.team_task_state = _loc3_.team_task_state;
               }
            }
            deferred.resolve(_loc4_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function getTaskReward(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var taskId:int = param1;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(45809,[taskId]).then(function(param1:SocketEvent):void
         {
            var _loc7_:NewestTeamTaskInfo = null;
            var _loc8_:NewestTeamTaskInfo = null;
            var _loc9_:NewestTeamTaskInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = [];
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc7_ = new NewestTeamTaskInfo(_loc2_);
               _loc4_.push(_loc7_);
               _loc5_++;
            }
            var _loc6_:int = 0;
            while(_loc6_ < _loc4_.length)
            {
               _loc8_ = _loc4_[_loc6_] as NewestTeamTaskInfo;
               for each(_loc9_ in taskInfos)
               {
                  if(_loc9_.team_task_id == _loc8_.team_task_id)
                  {
                     _loc9_.team_task_pets = _loc8_.team_task_pets;
                     _loc9_.team_task_finish_timestamp = _loc8_.team_task_finish_timestamp;
                     _loc9_.team_task_succ_rate = _loc8_.team_task_succ_rate;
                     _loc9_.team_task_is_extrea_reward = _loc8_.team_task_is_extrea_reward;
                     _loc9_.team_task_state = _loc8_.team_task_state;
                  }
               }
               _loc6_++;
            }
            deferred.resolve(taskInfos);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function getTaskSucAndCanDispatched(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var taskId:int = param1;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(45810,[taskId]).then(function(param1:SocketEvent):void
         {
            var _loc8_:NewestTeamDipatchedPetInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = int(_loc2_.readUnsignedInt());
            var _loc5_:Array = [];
            var _loc6_:int = 0;
            while(_loc6_ < _loc4_)
            {
               _loc8_ = new NewestTeamDipatchedPetInfo(_loc2_);
               _loc5_.push(_loc8_);
               _loc6_++;
            }
            var _loc7_:Object;
            (_loc7_ = new Object()).team_task_succ_rate = _loc3_;
            _loc7_.NotDipatchedPetInfos = _loc5_;
            deferred.resolve(_loc7_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function updateBagList() : Array
      {
         var _loc1_:Array = new Array(12);
         var _loc2_:Array = PetManager.getBagMap();
         var _loc3_:Array = PetManager.getSecondBagMap();
         var _loc4_:int = 0;
         while(_loc4_ < 6)
         {
            _loc1_[_loc4_] = _loc4_ < _loc2_.length ? _loc2_[_loc4_] : null;
            _loc1_[_loc4_ + 6] = _loc4_ < _loc3_.length ? _loc3_[_loc4_] : null;
            _loc4_++;
         }
         return _loc1_;
      }
      
      public static function getStoragePetInfo(param1:Function = null, param2:int = 1) : void
      {
         var fun:Function = param1;
         var startID:int = param2;
         SocketConnection.sendWithCallback(45543,function(param1:SocketEvent):void
         {
            var _loc4_:PetStorage2015PetInfo = null;
            var _loc5_:PetListInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc6_:int = 0;
            while(_loc6_ < _loc3_)
            {
               _loc4_ = new PetStorage2015PetInfo(_loc2_);
               switch(_loc4_.posi)
               {
                  case 0:
                  case 1:
                  case 2:
                  case 7:
                     (_loc5_ = new PetListInfo()).id = _loc4_.id;
                     _loc5_.catchTime = _loc4_.catchTime;
                     _loc5_.level = _loc4_.level;
                     storagePet.push(_loc5_);
                     break;
               }
               _loc6_++;
            }
            if(_loc3_ == 1000)
            {
               getStoragePetInfo(fun,startID + 1000);
            }
            else
            {
               fun();
            }
         },startID - 1,startID + 998);
      }
      
      public static function updateInfo(param1:Function, param2:Boolean = false) : void
      {
         var fun:Function = param1;
         var refresh:Boolean = param2;
         if(refresh)
         {
            storagePet = [];
            getStoragePetInfo(function():void
            {
               fun();
            });
         }
         else
         {
            fun();
         }
      }
      
      public static function get storagePet() : Array
      {
         return _storagePet;
      }
      
      public static function set storagePet(param1:Array) : void
      {
         _storagePet = param1;
      }
      
      public static function get allPets() : Array
      {
         var _loc1_:Array = null;
         _loc1_ = storagePet;
         _loc1_.sortOn(["id","catchTime"],[Array.NUMERIC | Array.DESCENDING,Array.NUMERIC | Array.DESCENDING]);
         return _loc1_;
      }
   }
}
