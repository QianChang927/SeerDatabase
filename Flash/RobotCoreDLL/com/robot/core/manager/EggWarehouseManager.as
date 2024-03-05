package com.robot.core.manager
{
   import com.robot.core.manager.eggMachine.CrystalNucleusVo;
   import com.robot.core.manager.eggMachine.EggType;
   import com.robot.core.manager.eggMachine.EggVo;
   import com.robot.core.manager.eggMachine.EnlivenerVo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.EventDispatcher;
   import flash.utils.ByteArray;
   import flash.utils.Dictionary;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class EggWarehouseManager extends EventDispatcher
   {
      
      public static const NOTIFY_SOUL_BEAD_CHANGE:String = "notify_soul_bead_change";
      
      public static const NOTIFY_NUCLEUS_CHANGE:String = "notify_nucleus_change";
      
      private static var _instance:com.robot.core.manager.EggWarehouseManager;
       
      
      private var _eggVoDic:Dictionary;
      
      private var _enlivenerVoDic:Dictionary;
      
      private var _nucleusVoDIc:Dictionary;
      
      public function EggWarehouseManager()
      {
         super();
      }
      
      public static function getInstance() : com.robot.core.manager.EggWarehouseManager
      {
         if(!_instance)
         {
            _instance = new com.robot.core.manager.EggWarehouseManager();
         }
         return _instance;
      }
      
      public function initOpenData(param1:int, param2:Function = null) : void
      {
         var initData:Function = null;
         var eggType:int = param1;
         var fun:Function = param2;
         initData = function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = null;
            var _loc6_:* = 0;
            var _loc7_:int = 0;
            var _loc8_:EggVo = null;
            var _loc9_:EnlivenerVo = null;
            var _loc10_:CrystalNucleusVo = null;
            _loc2_ = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = int(_loc2_.readUnsignedInt());
            _eggVoDic = new Dictionary();
            _enlivenerVoDic = new Dictionary();
            _nucleusVoDIc = new Dictionary();
            var _loc5_:int = 0;
            for(; _loc5_ < 4; _loc5_++)
            {
               if((_loc6_ = _loc3_ >> _loc5_ & 1) <= 0)
               {
                  continue;
               }
               _loc7_ = _loc5_ + 1;
               switch(eggType)
               {
                  case EggType.SOUL:
                     _loc8_ = new EggVo(_loc2_,_loc7_);
                     _eggVoDic[_loc7_] = _loc8_;
                     break;
                  case EggType.ENLIVENER:
                     _loc9_ = new EnlivenerVo(_loc2_,_loc7_);
                     _enlivenerVoDic[_loc7_] = _loc9_;
                     break;
                  case EggType.CRYSTAL_NUCLEUS:
                     _loc10_ = new CrystalNucleusVo(_loc2_,_loc7_);
                     _nucleusVoDIc[_loc7_] = _loc10_;
                     break;
               }
            }
            if(fun != null)
            {
               fun();
            }
         };
         switch(eggType)
         {
            case EggType.SOUL:
               SocketConnection.sendWithPromise(42400,[]).then(initData);
               break;
            case EggType.ENLIVENER:
               SocketConnection.sendWithPromise(42401,[]).then(initData);
               break;
            case EggType.CRYSTAL_NUCLEUS:
               SocketConnection.sendWithPromise(42402,[]).then(initData);
         }
      }
      
      public function GetReward(param1:int, param2:int, param3:int, param4:Function = null) : void
      {
         var eggType:int = param1;
         var pos:int = param2;
         var idOrObtm:int = param3;
         var fun:Function = param4;
         switch(eggType)
         {
            case EggType.SOUL:
               SocketConnection.sendWithPromise(2316,[idOrObtm,pos]).then(function(param1:* = null):void
               {
                  initOpenData(eggType);
                  if(fun != null)
                  {
                     fun();
                  }
               });
               break;
            case EggType.ENLIVENER:
               SocketConnection.sendWithPromise(2358,[idOrObtm,pos]).then(function(param1:* = null):void
               {
                  var _loc2_:DynamicEvent = new DynamicEvent(NOTIFY_SOUL_BEAD_CHANGE,idOrObtm);
                  EventManager.dispatchEvent(_loc2_);
                  initOpenData(eggType);
                  if(fun != null)
                  {
                     fun();
                  }
               });
               break;
            case EggType.CRYSTAL_NUCLEUS:
               SocketConnection.sendWithPromise(2392,[idOrObtm,pos]).then(function(param1:* = null):void
               {
                  var _loc2_:DynamicEvent = new DynamicEvent(NOTIFY_NUCLEUS_CHANGE,idOrObtm);
                  EventManager.dispatchEvent(_loc2_);
                  initOpenData(eggType);
                  if(fun != null)
                  {
                     fun();
                  }
               });
         }
      }
      
      public function SetPutEgg(param1:int, param2:int, param3:int, param4:Function = null) : void
      {
         var eggType:int = param1;
         var pos:int = param2;
         var idOrObtm:int = param3;
         var fun:Function = param4;
         switch(eggType)
         {
            case EggType.SOUL:
               SocketConnection.sendWithPromise(2315,[idOrObtm,pos]).then(function(param1:* = null):void
               {
                  initOpenData(eggType,fun);
               });
               break;
            case EggType.ENLIVENER:
               SocketConnection.sendWithPromise(2357,[idOrObtm,pos]).then(function(param1:* = null):void
               {
                  initOpenData(eggType,fun);
               });
               break;
            case EggType.CRYSTAL_NUCLEUS:
               SocketConnection.sendWithPromise(2391,[idOrObtm,pos]).then(function(param1:* = null):void
               {
                  initOpenData(eggType,fun);
               });
         }
      }
      
      public function PutOff(param1:int, param2:int, param3:int, param4:Function = null) : void
      {
         var eggType:int = param1;
         var pos:int = param2;
         var idOrObtm:int = param3;
         var fun:Function = param4;
         switch(eggType)
         {
            case EggType.SOUL:
               SocketConnection.sendWithPromise(42403,[1,idOrObtm,pos]).then(function(param1:* = null):void
               {
                  initOpenData(eggType,fun);
               });
               break;
            case EggType.ENLIVENER:
               SocketConnection.sendWithPromise(42403,[2,idOrObtm,pos]).then(function(param1:* = null):void
               {
                  initOpenData(eggType,fun);
               });
               break;
            case EggType.CRYSTAL_NUCLEUS:
               SocketConnection.sendWithPromise(42403,[3,idOrObtm,pos]).then(function(param1:* = null):void
               {
                  initOpenData(eggType,fun);
               });
         }
      }
      
      public function RightNow(param1:int, param2:int, param3:int, param4:Function = null) : void
      {
         var eggType:int = param1;
         var pos:int = param2;
         var idOrObtm:int = param3;
         var fun:Function = param4;
         switch(eggType)
         {
            case EggType.SOUL:
               SocketConnection.sendWithPromise(2344,[idOrObtm,pos]).then(function(param1:* = null):void
               {
                  initOpenData(eggType,fun);
               });
               break;
            case EggType.ENLIVENER:
               SocketConnection.sendWithPromise(2376,[idOrObtm,pos]).then(function(param1:* = null):void
               {
                  initOpenData(eggType,fun);
               });
               break;
            case EggType.CRYSTAL_NUCLEUS:
               SocketConnection.sendWithPromise(9257,[idOrObtm,pos]).then(function(param1:* = null):void
               {
                  initOpenData(eggType,fun);
               });
               break;
            default:
               if(fun != null)
               {
                  fun();
               }
         }
      }
      
      public function CheckEggunLockState(param1:int, param2:int) : Boolean
      {
         return true;
      }
      
      public function GetEggleftTm(param1:int, param2:int) : int
      {
         switch(param1)
         {
            case EggType.SOUL:
               if(this._eggVoDic[param2])
               {
                  return this._eggVoDic[param2].time_left;
               }
               break;
            case EggType.ENLIVENER:
               if(this._enlivenerVoDic[param2])
               {
                  return this._enlivenerVoDic[param2].left_tm;
               }
               break;
            case EggType.CRYSTAL_NUCLEUS:
               if(this._nucleusVoDIc[param2])
               {
                  return this._nucleusVoDIc[param2].left_time;
               }
               break;
         }
         return 0;
      }
      
      public function GetEggAllData(param1:int) : Array
      {
         var _loc4_:Object = null;
         var _loc2_:Array = [];
         var _loc3_:int = 1;
         while(_loc3_ <= 4)
         {
            (_loc4_ = {}).type = param1;
            _loc4_.pos = _loc3_;
            _loc4_.left_tm = this.GetEggleftTm(_loc4_.type,_loc4_.pos);
            _loc4_.eggId = this.GetEggId(_loc4_.type,_loc4_.pos);
            _loc4_.obtTm = this.GetObtm(_loc4_.type,_loc4_.pos);
            if(!this.CheckEggunLockState(_loc4_.type,_loc4_.pos))
            {
               _loc4_.state = 4;
               _loc2_.push(_loc4_);
            }
            else
            {
               if(_loc4_.eggId <= 0)
               {
                  _loc4_.state = 1;
               }
               else
               {
                  _loc4_.state = _loc4_.left_tm > 0 ? 2 : 3;
               }
               _loc2_.push(_loc4_);
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      public function GetEggId(param1:int, param2:int) : int
      {
         switch(param1)
         {
            case EggType.SOUL:
               if(this._eggVoDic[param2])
               {
                  return this._eggVoDic[param2].id;
               }
            case EggType.ENLIVENER:
               if(this._enlivenerVoDic[param2])
               {
                  return this._enlivenerVoDic[param2].yuanshen_id;
               }
            case EggType.CRYSTAL_NUCLEUS:
               if(this._nucleusVoDIc[param2])
               {
                  return this._nucleusVoDIc[param2].gen_item;
               }
               break;
         }
         return 0;
      }
      
      public function checkItemIsWork(param1:int, param2:int, param3:Boolean = false) : Boolean
      {
         var _loc4_:* = undefined;
         var _loc5_:* = undefined;
         var _loc6_:* = undefined;
         switch(param1)
         {
            case EggType.SOUL:
               for each(_loc4_ in this._eggVoDic)
               {
                  if(_loc4_.id == param2)
                  {
                     if(!param3)
                     {
                        Alarm.show("精元正在孵化中，不可重复放入");
                     }
                     return false;
                  }
               }
               break;
            case EggType.ENLIVENER:
               for each(_loc5_ in this._enlivenerVoDic)
               {
                  if(_loc5_.obtain_tm == param2)
                  {
                     if(!param3)
                     {
                        Alarm.show("元神珠正在孵化中，不可重复放入");
                     }
                     return false;
                  }
               }
               break;
            case EggType.CRYSTAL_NUCLEUS:
               for each(_loc6_ in this._nucleusVoDIc)
               {
                  if(_loc6_.gentm == param2)
                  {
                     if(!param3)
                     {
                        Alarm.show("晶核正在孵化中，不可重复放入");
                     }
                     return false;
                  }
               }
         }
         return true;
      }
      
      public function GetObtm(param1:int, param2:int) : int
      {
         switch(param1)
         {
            case EggType.SOUL:
               return 0;
            case EggType.ENLIVENER:
               if(this._enlivenerVoDic[param2])
               {
                  return this._enlivenerVoDic[param2].obtain_tm;
               }
            case EggType.CRYSTAL_NUCLEUS:
               if(this._nucleusVoDIc[param2])
               {
                  return this._nucleusVoDIc[param2].gentm;
               }
               break;
         }
         return 0;
      }
   }
}
