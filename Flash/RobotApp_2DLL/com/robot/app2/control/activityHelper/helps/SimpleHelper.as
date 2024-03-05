package com.robot.app2.control.activityHelper.helps
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app2.component.ValueUpdateWithPromiseComponent;
   import com.robot.app2.control.activityHelper.IAction;
   import com.robot.app2.control.activityHelper.IActivityHelper;
   import com.robot.app2.control.activityHelper.IValue;
   import com.robot.app2.control.activityHelper.actions.ActionsMap;
   import com.robot.app2.control.activityHelper.values.ValuesMap;
   import flash.utils.Dictionary;
   
   public class SimpleHelper implements IActivityHelper
   {
       
      
      private const DATA_SOURCE_TYPES:Array = [ValueUpdateWithPromiseComponent.TYPE_BIT,ValueUpdateWithPromiseComponent.TYPE_FORVER_DAILY,ValueUpdateWithPromiseComponent.TYPE_FORVER_DAILY_BY_DB,ValueUpdateWithPromiseComponent.TYPE_ITEM,ValueUpdateWithPromiseComponent.TYPE_PET_CLASS,ValueUpdateWithPromiseComponent.TYPE_USER_INFO];
      
      private var _valueUpdate:ValueUpdateWithPromiseComponent;
      
      private var _config;
      
      private var _values:Dictionary;
      
      private var _actions:Dictionary;
      
      public function SimpleHelper(param1:*)
      {
         this._valueUpdate = new ValueUpdateWithPromiseComponent();
         this._values = new Dictionary();
         this._actions = new Dictionary();
         super();
         this._config = param1;
         this.init();
      }
      
      public function update() : Promise
      {
         return this._valueUpdate.updateValues();
      }
      
      private function init() : void
      {
         var _loc2_:* = undefined;
         var _loc3_:String = null;
         var _loc4_:String = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc9_:int = 0;
         var _loc10_:* = undefined;
         var _loc11_:int = 0;
         var _loc12_:* = undefined;
         var _loc1_:* = this._config["dataSource"];
         if(null != _loc1_)
         {
            _loc7_ = 0;
            while(_loc7_ < this.DATA_SOURCE_TYPES.length)
            {
               _loc8_ = String(this.DATA_SOURCE_TYPES[_loc7_]);
               this._valueUpdate.setIds(_loc8_,_loc1_[_loc8_]);
               _loc7_++;
            }
         }
         var _loc5_:Array = this._config["values"];
         if(null != _loc5_)
         {
            _loc9_ = 0;
            while(_loc9_ < _loc5_.length)
            {
               _loc2_ = _loc5_[_loc9_];
               _loc3_ = String(_loc2_["name"]);
               _loc4_ = String(_loc2_["type"]);
               if(_loc10_ = ValuesMap.VALUES_MAP[_loc4_])
               {
                  this._values[_loc3_] = new _loc10_(this._valueUpdate,_loc2_);
               }
               _loc9_++;
            }
         }
         var _loc6_:Array = this._config["actions"];
         if(null != _loc6_)
         {
            _loc11_ = 0;
            while(_loc11_ < _loc6_.length)
            {
               _loc2_ = _loc6_[_loc11_];
               _loc3_ = String(_loc2_["name"]);
               _loc4_ = String(_loc2_["type"]);
               if(_loc12_ = ActionsMap.ACTIONS_MAP[_loc4_])
               {
                  this._actions[_loc3_] = new _loc12_(_loc2_);
               }
               _loc11_++;
            }
         }
      }
      
      public function getValue(param1:String) : *
      {
         var _loc2_:IValue = null;
         if(this._values.hasOwnProperty(param1))
         {
            _loc2_ = this._values[param1];
            return _loc2_.getValue();
         }
         return 0;
      }
      
      public function doAction(param1:String, param2:* = null) : Promise
      {
         var _loc3_:IAction = null;
         if(this._actions.hasOwnProperty(param1))
         {
            _loc3_ = this._actions[param1];
            return _loc3_.doAction(param2);
         }
         return Deferred.reject("no action");
      }
      
      public function get config() : *
      {
         return this._config;
      }
      
      public function get _valueUpdateCom() : ValueUpdateWithPromiseComponent
      {
         return this._valueUpdate;
      }
   }
}
