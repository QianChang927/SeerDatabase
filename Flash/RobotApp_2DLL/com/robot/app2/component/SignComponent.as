package com.robot.app2.component
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.components.EventComponent;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class SignComponent extends EventComponent
   {
       
      
      private var _data:Object;
      
      private var _isInit:Boolean;
      
      private var _btnParent:MovieClip;
      
      private var _btnName:String;
      
      private var _backFun:Function;
      
      private var _isSendSoc:Boolean;
      
      public var initFun:Function;
      
      private var _signValue:int;
      
      private var _signNumber:int;
      
      public function SignComponent(param1:MovieClip, param2:Object, param3:String = "btnSign_", param4:Function = null, param5:Boolean = true)
      {
         super();
         this._btnParent = param1;
         this._data = param2;
         this._btnName = param3;
         this._backFun = param4;
         this._isSendSoc = param5;
         var _loc6_:int;
         if((_loc6_ = String(this._data.d).indexOf("1")) != -1)
         {
            _loc6_++;
         }
         var _loc7_:int;
         if((_loc7_ = String(this._data.d).indexOf("2")) != -1)
         {
            _loc7_++;
         }
         var _loc8_:int = String(this._data.d).indexOf("0") + 1;
         var _loc9_:Date = SystemTimerManager.sysBJDate;
         var _loc10_:Array = String(this._data.start).split(".");
         var _loc11_:Date = new Date(int(_loc10_[0]),int(_loc10_[1]) - 1,int(_loc10_[2]));
         var _loc12_:int = int((_loc9_.time - _loc11_.time) / 86400000) + 1;
         var _loc13_:int = 1;
         while(_loc13_ <= param2.dayNum)
         {
            addClickEvent(param1[param3 + _loc13_],this.onClick);
            if(_loc13_ > _loc12_)
            {
               if(_loc7_ > -1)
               {
                  this._btnParent[this._btnName + _loc13_].gotoAndStop(_loc7_);
               }
               else
               {
                  this._btnParent[this._btnName + _loc13_].gotoAndStop(_loc8_);
                  CommonUI.setEnabled(this._btnParent[this._btnName + _loc13_],false);
               }
            }
            else if(_loc13_ < _loc12_)
            {
               if(_loc6_ > -1)
               {
                  this._btnParent[this._btnName + _loc13_].gotoAndStop(_loc6_);
               }
               else
               {
                  this._btnParent[this._btnName + _loc13_].gotoAndStop(_loc8_);
                  CommonUI.setEnabled(this._btnParent[this._btnName + _loc13_],false);
               }
            }
            else
            {
               this._btnParent[this._btnName + _loc13_].gotoAndStop(_loc8_);
            }
            _loc13_++;
         }
         this.update();
      }
      
      private function update() : void
      {
         this._isInit = false;
         KTool.getMultiValue([this._data.f],function(param1:Array):void
         {
            var _loc4_:* = false;
            _signValue = param1[0];
            _signNumber = 0;
            var _loc2_:int = String(_data.d).indexOf("3") + 1;
            var _loc3_:int = 1;
            while(_loc3_ <= _data.dayNum)
            {
               if(_loc4_ = KTool.getBit(param1[0],_loc3_) > 0)
               {
                  _btnParent[_btnName + _loc3_].gotoAndStop(_loc2_);
                  ++_signNumber;
               }
               _loc3_++;
            }
            if(initFun != null)
            {
               initFun();
            }
            _isInit = true;
         });
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var frame:int;
         var strarr:Array;
         var socStr:String;
         var soc:Array;
         var i:int;
         var index:int = 0;
         var state:int = 0;
         var socId:int = 0;
         var socArg:Array = null;
         var e:MouseEvent = param1;
         if(!this._isInit)
         {
            return;
         }
         frame = (e.currentTarget as MovieClip).currentFrame;
         index = int(String(e.currentTarget.name).replace(this._btnName,""));
         state = int(String(this._data.d).charAt(frame - 1));
         if(!this._isSendSoc)
         {
            if(this._backFun != null)
            {
               this._backFun(index,state);
            }
            return;
         }
         strarr = this._data.s.split(",");
         socStr = String(strarr[frame - 1]);
         soc = String(socStr).split(".");
         socId = int(soc[0]);
         socArg = [];
         i = 1;
         while(i < soc.length)
         {
            if(soc[i] == "i")
            {
               socArg.push(index);
            }
            else
            {
               socArg.push(int(soc[i]));
            }
            i++;
         }
         if(state == 0)
         {
            this.send(socId,socArg,index,state);
         }
         else if(state == 1)
         {
            KTool.buyProductByCallback(this._data.prevpid,1,function():void
            {
               send(socId,socArg,index,state);
            });
         }
         else if(state == 2)
         {
            KTool.buyProductByCallback(this._data.nextpid,1,function():void
            {
               send(socId,socArg,index,state);
            });
         }
      }
      
      private function send(param1:int, param2:Array, param3:int, param4:int) : void
      {
         var socId:int = param1;
         var socArg:Array = param2;
         var index:int = param3;
         var state:int = param4;
         KTool.socketSendCallBack(socId,function(param1:* = null):void
         {
            update();
            if(_backFun != null)
            {
               _backFun(index,int(state));
            }
         },socArg);
      }
      
      override public function destroy() : void
      {
         this._data = null;
         this._btnParent = null;
         this._backFun = null;
         super.destroy();
      }
      
      public function get signValue() : int
      {
         return this._signValue;
      }
      
      public function get signNumber() : int
      {
         return this._signNumber;
      }
   }
}
