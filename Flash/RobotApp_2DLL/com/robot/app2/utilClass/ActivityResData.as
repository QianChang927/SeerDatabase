package com.robot.app2.utilClass
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.Proxy;
   import flash.utils.flash_proxy;
   import flash.utils.getTimer;
   
   public dynamic class ActivityResData extends Proxy
   {
       
      
      private var _data:Object;
      
      private var _tempObj:Object;
      
      private var hasUpdateTime:uint;
      
      private var leftUseTime:uint;
      
      public function ActivityResData(param1:Object)
      {
         this.hasUpdateTime = getTimer();
         super();
         this._data = param1;
      }
      
      private function updateForever(param1:Function) : void
      {
         var i:int = 0;
         var obj:Object = null;
         var func:Function = param1;
         i = 0;
         if(Boolean(this._data["datas"]["forever"]) && Boolean(this._data["datas"]["forever"]["value"]))
         {
            KTool.getMultiValue(this._data["datas"]["forever"]["value"],function(param1:Array):void
            {
               obj = new Object();
               i = 1;
               while(i <= param1.length)
               {
                  obj[_data["datas"]["forever"]["value"][i - 1]] = param1[i - 1];
                  ++i;
               }
               _data["datas"]["forever"]["values"] = obj;
               func();
            });
         }
         else
         {
            func();
         }
      }
      
      private function updateBitSet(param1:Function) : void
      {
         var i:int = 0;
         var obj:Object = null;
         var func:Function = param1;
         i = 0;
         if(Boolean(this._data["datas"]["bitSet"]) && Boolean(this._data["datas"]["bitSet"]["value"]))
         {
            KTool.getBitSet(this._data["datas"]["bitSet"],function(param1:Array):void
            {
               obj = new Object();
               i = 1;
               while(i <= param1.length)
               {
                  obj[_data["datas"]["bitSet"]["value"][i - 1]] = param1[i - 1];
                  ++i;
               }
               _data["datas"]["bitSet"]["values"] = obj;
               func();
            });
         }
         else
         {
            func();
         }
      }
      
      private function updateItems(param1:Function) : void
      {
         var i:int = 0;
         var obj:Object = null;
         var func:Function = param1;
         i = 0;
         if(Boolean(this._data["datas"]["itemNum"]) && Boolean(this._data["datas"]["itemNum"]["value"]))
         {
            ItemManager.updateAndGetItemsNum(this._data["datas"]["itemNum"]["value"],function(param1:Array):void
            {
               obj = new Object();
               i = 1;
               while(i <= param1.length)
               {
                  obj[_data["datas"]["itemNum"]["value"][i - 1]] = param1[i - 1];
                  ++i;
               }
               _data["datas"]["itemNum"]["values"] = obj;
               func();
            });
         }
         else
         {
            func();
         }
      }
      
      public function updateData(param1:Function) : void
      {
         var func:Function = param1;
         if(Boolean(this._data) && Boolean(this._data["datas"]))
         {
            this.updateForever(function():void
            {
               updateBitSet(function():void
               {
                  updateItems(function():void
                  {
                     hasUpdateTime = getTimer();
                     func();
                  });
               });
            });
         }
         else
         {
            this.hasUpdateTime = getTimer();
            func();
         }
      }
      
      public function buyItem(param1:String, param2:Function = null) : void
      {
         var str:String = param1;
         var func:Function = param2;
         this._tempObj = this._data["items"][str];
         if(this._tempObj != null)
         {
            if(this._tempObj.type == "one")
            {
               KTool.buyProductByCallback(this._tempObj.productID,1,function():void
               {
                  if(_tempObj.exchangeID)
                  {
                     KTool.doExchange(_tempObj.exchangeID,func);
                  }
                  else
                  {
                     func();
                  }
               });
            }
            else if(this._tempObj.type == "mul")
            {
               this._tempObj.callFunction = function(param1:int = 0):void
               {
                  if(func.length == 0)
                  {
                     func();
                  }
                  else
                  {
                     func(param1);
                  }
               };
               ModuleManager.showAppModule("MultiBuyPanel",this._tempObj);
            }
         }
      }
      
      public function sendPro(param1:String, param2:Function = null, param3:Array = null, param4:Function = null) : void
      {
         var i:* = undefined;
         var str:String = param1;
         var func:Function = param2;
         var args:Array = param3;
         var errorFunc:Function = param4;
         var argsArr:Array = this._data["sendPros"][str]["value"];
         argsArr = argsArr.concat();
         if(Boolean(this._data.sendPros[str].type) && this._data.sendPros[str].type == "exchange")
         {
            KTool.doExchange(argsArr[0],func,errorFunc);
         }
         else if(argsArr.length != 0)
         {
            for(i in argsArr)
            {
               if(argsArr[i] == "arr")
               {
                  argsArr[i] = args.shift();
               }
               argsArr[i] = int(argsArr[i]);
            }
            SocketConnection.sendByQueue(argsArr.shift(),argsArr,function(param1:*):void
            {
               if(null != func)
               {
                  if(func.length == 0)
                  {
                     func();
                  }
                  else
                  {
                     func(param1);
                  }
               }
            },function(param1:*):void
            {
               if(null != errorFunc)
               {
                  errorFunc();
               }
            });
         }
      }
      
      public function fightBoss(param1:String, param2:Function = null, param3:int = 0) : void
      {
         var _loc6_:String = null;
         var _loc4_:Object;
         if((_loc4_ = this._data.monsters[param1]) == null)
         {
            return;
         }
         var _loc5_:String = String(_loc4_.type);
         if(_loc4_.bossName != null)
         {
            if(_loc4_.bossName is Array)
            {
               _loc6_ = String(_loc4_.bossName[param3 - 1]);
            }
            else if(param3 == 1)
            {
               _loc6_ = String(_loc4_.bossName);
            }
         }
         if(_loc6_ == null)
         {
            _loc6_ = "";
         }
         var _loc7_:int = 0;
         if(_loc4_.value is Array)
         {
            _loc7_ = int(_loc4_.value[param3 - 1]);
         }
         else if(param3 == 1)
         {
            _loc7_ = int(_loc4_.value);
         }
         if(_loc7_ == 0 && _loc5_ != "pro")
         {
            return;
         }
         switch(_loc5_)
         {
            case "fight":
               FightManager.fightNoMapBoss(_loc6_,_loc7_,false,true,param2);
               break;
            case "try":
               FightManager.tryFight(_loc7_,[0,0,0,0],param2);
               break;
            case "pro":
               this.sendPro(this._data.value,param2,[param3]);
         }
      }
      
      override flash_proxy function getProperty(param1:*) : *
      {
         var _loc2_:Object = null;
         var _loc3_:Object = null;
         param1 = String(param1);
         if(this._data == null || !this._data.hasOwnProperty("userValues") || !this._data["userValues"].hasOwnProperty(param1))
         {
            return null;
         }
         if(this.hasUpdateTime > this.leftUseTime)
         {
            this.leftUseTime = getTimer();
            for(_loc3_ in this._data["userValues"])
            {
               this._data["userValues"][_loc3_]["values"] = null;
            }
         }
         if(this._data["userValues"][param1]["values"] == null)
         {
            if(this._data["userValues"][param1]["type"] == "url")
            {
               _loc2_ = this.getUrlValue(this._data["userValues"][param1]["value"]);
            }
            else if(this._data["userValues"][param1]["type"] == "reUse")
            {
               _loc2_ = this[this._data["userValues"][param1]["value"]];
            }
            else
            {
               _loc2_ = this._data["userValues"][param1]["value"];
            }
            if(_loc2_.length > 1)
            {
               this._data["userValues"][param1]["values"] = _loc2_;
            }
            else
            {
               this._data["userValues"][param1]["values"] = _loc2_[0];
            }
         }
         return this._data["userValues"][param1]["values"];
      }
      
      private function getUrlValue(param1:Array) : Object
      {
         var _loc4_:Array = null;
         var _loc5_:Object = null;
         var _loc6_:int = 0;
         var _loc7_:Array = null;
         var _loc8_:* = 0;
         var _loc2_:Array = new Array();
         var _loc3_:int = 1;
         while(_loc3_ <= param1.length)
         {
            _loc4_ = param1[_loc3_ - 1].split(".");
            _loc5_ = this._data;
            _loc6_ = 1;
            while(_loc6_ <= _loc4_.length)
            {
               if(_loc5_.hasOwnProperty(_loc4_[_loc6_ - 1]))
               {
                  _loc5_ = _loc5_[_loc4_[_loc6_ - 1]];
               }
               else if((_loc7_ = _loc4_[_loc6_ - 1].split("~")).length == 2)
               {
                  _loc5_ = _loc8_ = (_loc8_ = int(_loc5_)) >> _loc7_[0] - 1 & Math.pow(2,_loc7_[1] - _loc7_[0] + 1) - 1;
               }
               else
               {
                  _loc5_ = null;
               }
               if(_loc5_ == null)
               {
                  break;
               }
               _loc6_++;
            }
            _loc2_.push(_loc5_);
            _loc3_++;
         }
         return _loc2_;
      }
   }
}
