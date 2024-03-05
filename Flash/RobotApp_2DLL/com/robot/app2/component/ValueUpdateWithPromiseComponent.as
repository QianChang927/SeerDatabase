package com.robot.app2.component
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.mode.components.IComponent;
   import flash.utils.Dictionary;
   
   public class ValueUpdateWithPromiseComponent implements IComponent
   {
      
      public static const TYPE_FORVER_DAILY:String = "daily_forver";
      
      public static const TYPE_FORVER_DAILY_BY_DB:String = "daily_forver_by_db";
      
      public static const TYPE_BIT:String = "bit";
      
      public static const TYPE_ITEM:String = "item";
      
      public static const TYPE_PET_CLASS:String = "pet_class";
      
      public static const TYPE_USER_INFO:String = "player_info";
       
      
      private var GET_FUNS:Dictionary;
      
      private var _idsDictionary:Dictionary;
      
      private var _valuesDictionary:Dictionary;
      
      public function ValueUpdateWithPromiseComponent()
      {
         this.GET_FUNS = new Dictionary();
         this._idsDictionary = new Dictionary();
         this._valuesDictionary = new Dictionary();
         super();
         this.GET_FUNS[TYPE_FORVER_DAILY] = KTool.getMultiValue;
         this.GET_FUNS[TYPE_FORVER_DAILY_BY_DB] = KTool.getMultiValueByDB;
         this.GET_FUNS[TYPE_BIT] = KTool.getBitSet;
         this.GET_FUNS[TYPE_ITEM] = ItemManager.updateItems;
         this.GET_FUNS[TYPE_PET_CLASS] = KTool.checkMultiPetClass;
         this.GET_FUNS[TYPE_USER_INFO] = KTool.getPlayerInfo;
      }
      
      public function setIds(param1:String, param2:Array) : void
      {
         this._idsDictionary[param1] = param2;
      }
      
      public function set forverOrDailyValueIds(param1:Array) : void
      {
         this.setIds(TYPE_FORVER_DAILY,param1);
      }
      
      public function set forverOrDailyValueIdsByDB(param1:Array) : void
      {
         this.setIds(TYPE_FORVER_DAILY_BY_DB,param1);
      }
      
      public function set bitSetValueIds(param1:Array) : void
      {
         this.setIds(TYPE_BIT,param1);
      }
      
      public function set playerInfos(param1:Array) : void
      {
         this.setIds(TYPE_USER_INFO,param1);
      }
      
      public function set itemIds(param1:Array) : void
      {
         this.setIds(TYPE_ITEM,param1);
      }
      
      public function set petIds(param1:Array) : void
      {
         this.setIds(TYPE_PET_CLASS,param1);
      }
      
      public function updateValues() : Promise
      {
         var getValuePromises:Array = null;
         var types:Array = null;
         var key:String = null;
         var type:String = null;
         var ids:Array = null;
         var fun:Function = null;
         getValuePromises = [];
         types = [];
         for(key in this.GET_FUNS)
         {
            type = key;
            ids = this._idsDictionary[type];
            if(ids != null && ids.length > 0)
            {
               fun = this.GET_FUNS[type];
               types.push(type);
               getValuePromises.push(fun(ids));
            }
         }
         return Promise.all(getValuePromises).then(function(param1:Array):void
         {
            var _loc3_:* = undefined;
            var _loc2_:* = 0;
            while(_loc2_ < getValuePromises.length)
            {
               if(param1[_loc2_])
               {
                  _loc3_ = types[_loc2_];
                  if(Boolean(_idsDictionary[_loc3_]) && Boolean(param1[_loc2_]) && param1[_loc2_] is Array)
                  {
                     catchValues(_idsDictionary[_loc3_],param1[_loc2_],_loc3_);
                  }
               }
               _loc2_++;
            }
         });
      }
      
      public function getForverOrDailyValue(param1:int) : uint
      {
         return this.getValue(param1,TYPE_FORVER_DAILY);
      }
      
      public function getForverOrDailyValueByDb(param1:int) : uint
      {
         return this.getValue(param1,TYPE_FORVER_DAILY_BY_DB);
      }
      
      public function getBitValue(param1:int) : int
      {
         return this.getValue(param1,TYPE_BIT);
      }
      
      public function getPlayerInfo(param1:int) : int
      {
         return this.getValue(param1,TYPE_USER_INFO);
      }
      
      public function getItemNum(param1:int) : int
      {
         return ItemManager.getNumByID(param1);
      }
      
      public function havePet(param1:int) : Boolean
      {
         return this.getValue(param1,TYPE_PET_CLASS);
      }
      
      public function getValue(param1:int, param2:String) : *
      {
         var _loc3_:Dictionary = this._valuesDictionary[param2];
         if(_loc3_ == null)
         {
            return 0;
         }
         return _loc3_[param1];
      }
      
      private function catchValues(param1:Array, param2:Array, param3:String) : void
      {
         if(this._valuesDictionary[param3] == null)
         {
            this._valuesDictionary[param3] = new Dictionary();
         }
         var _loc4_:Dictionary = this._valuesDictionary[param3];
         var _loc5_:int = 0;
         while(_loc5_ < param1.length)
         {
            if(_loc4_ != null && param2 != null && param1 != null)
            {
               _loc4_[param1[_loc5_]] = param2[_loc5_];
            }
            _loc5_++;
         }
      }
      
      public function getflag(param1:uint, param2:uint, param3:String = "daily_forver") : Boolean
      {
         var _loc4_:uint = this.getValue(param1,param3);
         return KTool.getBit(_loc4_,param2) != 0;
      }
      
      public function destroy() : void
      {
         this._idsDictionary = null;
         this._valuesDictionary = null;
      }
      
      public function getValueById(param1:*) : *
      {
         var _loc2_:String = null;
         var _loc3_:Array = null;
         for(_loc2_ in this._idsDictionary)
         {
            _loc3_ = this._idsDictionary[_loc2_];
            if(Boolean(_loc3_) && _loc3_.indexOf(param1) != -1)
            {
               return this.getValue(param1,_loc2_);
            }
         }
      }
   }
}
