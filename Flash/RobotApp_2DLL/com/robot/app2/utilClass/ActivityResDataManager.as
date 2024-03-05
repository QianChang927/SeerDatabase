package com.robot.app2.utilClass
{
   import com.robot.core.config.ClientConfig;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.IEventDispatcher;
   import flash.events.IOErrorEvent;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   
   public class ActivityResDataManager implements IEventDispatcher
   {
      
      private static var _instance:com.robot.app2.utilClass.ActivityResDataManager;
      
      public static const INIT:String = "init";
      
      public static const UPDATED:String = "updated";
       
      
      private var _eventDispatcher:EventDispatcher;
      
      private var _urlLoader:URLLoader;
      
      private var _dataArr:Object;
      
      public function ActivityResDataManager(param1:SingletonEnforcer)
      {
         super();
         this._eventDispatcher = new EventDispatcher();
         this._dataArr = new Object();
      }
      
      public static function getInstance() : com.robot.app2.utilClass.ActivityResDataManager
      {
         if(com.robot.app2.utilClass.ActivityResDataManager._instance == null)
         {
            com.robot.app2.utilClass.ActivityResDataManager._instance = new com.robot.app2.utilClass.ActivityResDataManager(new SingletonEnforcer());
         }
         return com.robot.app2.utilClass.ActivityResDataManager._instance;
      }
      
      public function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         this._eventDispatcher.addEventListener(param1,param2,param3,param4,param5);
      }
      
      public function dispatchEvent(param1:Event) : Boolean
      {
         return this._eventDispatcher.dispatchEvent(param1);
      }
      
      public function hasEventListener(param1:String) : Boolean
      {
         return this._eventDispatcher.hasEventListener(param1);
      }
      
      public function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         this._eventDispatcher.removeEventListener(param1,param2,param3);
      }
      
      public function willTrigger(param1:String) : Boolean
      {
         return this._eventDispatcher.willTrigger(param1);
      }
      
      public function getContent(param1:String, param2:Function) : void
      {
         var str:String = param1;
         var func:Function = param2;
         var tempFun:Function = function():void
         {
            if(func.length == 1)
            {
               func(_dataArr[str]);
            }
            else
            {
               func();
            }
         };
         if(this._dataArr[str] == null)
         {
            this.loadAppXML(str);
            this.addEventListener(com.robot.app2.utilClass.ActivityResDataManager.INIT,function(param1:Event):void
            {
               removeEventListener(com.robot.app2.utilClass.ActivityResDataManager.INIT,arguments.callee);
               var _loc3_:Object = xmltoObject(XML(_urlLoader.data));
               _dataArr[str] = _loc3_;
               tempFun();
            });
         }
         else
         {
            tempFun();
         }
      }
      
      public function clearContent(param1:String) : void
      {
         this._dataArr[param1] = null;
      }
      
      public function loadAppXML(param1:String = "") : void
      {
         var _loc2_:URLRequest = new URLRequest(ClientConfig.getAppResource(param1,".xml"));
         this._urlLoader = new URLLoader();
         this._urlLoader.addEventListener(Event.COMPLETE,this.onXmlDataLoaded);
         this._urlLoader.addEventListener(IOErrorEvent.IO_ERROR,this.errorHandler);
         this._urlLoader.load(_loc2_);
      }
      
      private function onXmlDataLoaded(param1:Event) : void
      {
         this.dispatchEvent(new Event(com.robot.app2.utilClass.ActivityResDataManager.INIT,true,true));
      }
      
      private function errorHandler(param1:IOErrorEvent) : void
      {
         this.dispatchEvent(new Event(com.robot.app2.utilClass.ActivityResDataManager.INIT,true,true));
      }
      
      private function updatedContent(param1:Event) : void
      {
         this.dispatchEvent(new Event(com.robot.app2.utilClass.ActivityResDataManager.UPDATED,true,true));
      }
      
      private function xmltoObject(param1:XML) : Object
      {
         var _loc5_:String = null;
         var _loc6_:XML = null;
         var _loc7_:String = null;
         var _loc8_:Array = null;
         var _loc9_:Array = null;
         var _loc10_:int = 0;
         var _loc11_:Array = null;
         var _loc12_:int = 0;
         var _loc13_:XML = null;
         var _loc14_:Object = null;
         var _loc15_:String = null;
         var _loc2_:Object = new Object();
         var _loc3_:XMLList = param1.children();
         var _loc4_:XMLList = param1.attributes();
         for each(_loc6_ in _loc4_)
         {
            if((_loc5_ = String(_loc6_.name())) == "value")
            {
               _loc8_ = (_loc7_ = _loc6_.toString()).split("|");
               _loc9_ = new Array();
               _loc10_ = 1;
               while(_loc10_ <= _loc8_.length)
               {
                  if((_loc11_ = _loc8_[_loc10_ - 1].split("-")).length == 2)
                  {
                     _loc12_ = int(_loc11_[0]);
                     while(_loc12_ <= _loc11_[1])
                     {
                        _loc9_.push(_loc12_);
                        _loc12_++;
                     }
                  }
                  else
                  {
                     _loc9_.push(_loc8_[_loc10_ - 1]);
                  }
                  _loc10_++;
               }
               _loc2_[_loc5_] = _loc9_;
            }
            else
            {
               _loc2_[_loc5_] = _loc6_.toString();
            }
         }
         if(_loc3_.length() > 0)
         {
            for each(_loc13_ in _loc3_)
            {
               if((_loc14_ = this.xmltoObject(_loc13_)).name != null)
               {
                  _loc2_[_loc14_.name] = _loc14_;
               }
               else
               {
                  _loc5_ = String(_loc13_.name());
                  if(_loc2_.hasOwnProperty(_loc5_))
                  {
                     if(!(_loc2_[_loc5_] is Array))
                     {
                        _loc15_ = String(_loc2_[_loc5_]);
                        _loc2_[_loc5_] = new Array();
                        _loc2_[_loc5_].push(_loc15_);
                     }
                     _loc2_[_loc5_].push(_loc13_.toString());
                  }
                  else if(_loc5_ == "value")
                  {
                     _loc2_[_loc5_] = _loc13_.toString();
                  }
                  else
                  {
                     _loc2_[_loc5_] = _loc14_;
                  }
               }
            }
         }
         return _loc2_;
      }
   }
}

class SingletonEnforcer
{
    
   
   public function SingletonEnforcer()
   {
      super();
   }
}
