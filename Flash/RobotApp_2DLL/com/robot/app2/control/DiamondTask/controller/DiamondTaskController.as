package com.robot.app2.control.DiamondTask.controller
{
   import com.robot.app2.control.DiamondTask.data.DiamondTask;
   import com.robot.app2.control.DiamondTask.data.IDiamondTask;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.SystemTimerManager;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import flash.utils.getDefinitionByName;
   
   public class DiamondTaskController extends EventDispatcher
   {
      
      private static var _instance:com.robot.app2.control.DiamondTask.controller.DiamondTaskController;
      
      public static const INIT:String = "init";
       
      
      private var _urlLoader:URLLoader;
      
      private var _data:XML;
      
      private var _tasks:Vector.<IDiamondTask>;
      
      private var _isLoaded:Boolean = false;
      
      public function DiamondTaskController(param1:SingletonEnforcer)
      {
         super();
         this._urlLoader = new URLLoader();
         this._urlLoader.addEventListener(Event.COMPLETE,this.onLoadedComplete);
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         this._urlLoader.load(new URLRequest(ClientConfig.getAppResource("update/diamondTask/diamond_task_list",".xml")));
         this._tasks = new Vector.<IDiamondTask>();
      }
      
      public static function get Instance() : com.robot.app2.control.DiamondTask.controller.DiamondTaskController
      {
         if(com.robot.app2.control.DiamondTask.controller.DiamondTaskController._instance == null)
         {
            com.robot.app2.control.DiamondTask.controller.DiamondTaskController._instance = new com.robot.app2.control.DiamondTask.controller.DiamondTaskController(new SingletonEnforcer());
         }
         return com.robot.app2.control.DiamondTask.controller.DiamondTaskController._instance;
      }
      
      private function onLoadedComplete(param1:Event) : void
      {
         var _loc3_:XML = null;
         var _loc4_:String = null;
         var _loc5_:Class = null;
         this._urlLoader.removeEventListener(Event.COMPLETE,this.onLoadedComplete);
         this._data = new XML(param1.target.data);
         var _loc2_:XMLList = this._data.children();
         for each(_loc3_ in _loc2_)
         {
            if((_loc4_ = _loc3_.@cls) == "")
            {
               this._tasks.push(new DiamondTask(_loc3_));
            }
            else
            {
               _loc5_ = getDefinitionByName(_loc4_) as Class;
               this._tasks.push(new _loc5_(_loc3_));
            }
         }
         this._isLoaded = true;
         dispatchEvent(new Event(com.robot.app2.control.DiamondTask.controller.DiamondTaskController.INIT,false,false));
      }
      
      public function getUIByTaskId(param1:int) : String
      {
         var str:String = null;
         var id:int = param1;
         str = String(this._data..task.(@id == id).@ui);
         return str;
      }
      
      public function getTask(param1:Function) : void
      {
         var func:Function = param1;
         var callBack:Function = function():void
         {
            sortTask();
            func(_tasks);
         };
         if(!this._isLoaded)
         {
            addEventListener(com.robot.app2.control.DiamondTask.controller.DiamondTaskController.INIT,function(param1:Event):void
            {
               removeEventListener(com.robot.app2.control.DiamondTask.controller.DiamondTaskController.INIT,arguments.callee);
               callBack();
            });
         }
         else
         {
            callBack();
         }
      }
      
      public function sortTask() : void
      {
         var _loc1_:int = int(this._tasks.length);
         var _loc2_:Vector.<IDiamondTask> = new Vector.<IDiamondTask>();
         var _loc3_:Vector.<IDiamondTask> = new Vector.<IDiamondTask>();
         var _loc4_:Vector.<IDiamondTask> = new Vector.<IDiamondTask>();
         var _loc5_:Vector.<IDiamondTask> = new Vector.<IDiamondTask>();
         var _loc6_:int = 1;
         while(_loc6_ <= _loc1_)
         {
            if(this._tasks[_loc6_ - 1].id == 1)
            {
               _loc2_.push(this._tasks[_loc6_ - 1]);
            }
            else if(this._tasks[_loc6_ - 1].hasAward)
            {
               _loc3_.push(this._tasks[_loc6_ - 1]);
            }
            else if(this._tasks[_loc6_ - 1].hasComplete)
            {
               _loc4_.push(this._tasks[_loc6_ - 1]);
            }
            else
            {
               _loc5_.push(this._tasks[_loc6_ - 1]);
            }
            _loc6_++;
         }
         this._tasks = _loc2_.concat(_loc4_,_loc5_,_loc3_);
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
