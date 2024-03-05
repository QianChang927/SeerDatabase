package com.robot.app2.control.DiamondTask.data
{
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.net.SocketConnection;
   
   public class DiamondTask implements IDiamondTask
   {
       
      
      protected var _data:XML;
      
      protected var _taskProgress:int;
      
      protected var _taskTotalStep:int;
      
      protected var _hasComplete:Boolean;
      
      protected var _hasAward:Boolean;
      
      protected var _awardDetail:Array;
      
      protected var _taskCompleteDetail:String;
      
      protected var _detailValue:Array;
      
      public function DiamondTask(param1:XML)
      {
         var _loc3_:XML = null;
         super();
         this._data = param1;
         this._detailValue = new Array();
         var _loc2_:XMLList = this._data.children();
         for each(_loc3_ in _loc2_)
         {
            this._detailValue.push(String(_loc3_.@detailValue));
         }
      }
      
      public function award(param1:Function) : void
      {
         var func:Function = param1;
         var str:String = this._data.@award;
         var argsArr:Array = str.split("/");
         var i:int = 1;
         while(i <= argsArr.length)
         {
            argsArr[i - 1] = int(argsArr[i - 1]);
            i++;
         }
         SocketConnection.sendByQueue(argsArr.shift(),argsArr,function(param1:*):void
         {
            func();
         },function(param1:*):void
         {
            func();
         });
      }
      
      public function taskGo() : void
      {
         BtnClick.go(this._data.step[this._taskProgress].@type,this._data.step[this._taskProgress]);
      }
      
      public function updateTaskInfo(param1:Function = null) : void
      {
         var func:Function = param1;
         KTool.getMultiValue(this._detailValue,function(param1:Array):void
         {
            _taskProgress = 0;
            var _loc2_:int = 1;
            while(_loc2_ <= _detailValue.length)
            {
               if(param1[_loc2_ - 1] < _data.step[_loc2_ - 1].@needValue)
               {
                  break;
               }
               ++_taskProgress;
               _loc2_++;
            }
            _taskTotalStep = XMLList(_data.step).length();
            _hasComplete = _taskProgress >= _taskTotalStep;
            if(_hasComplete)
            {
               _taskCompleteDetail = _data.step[_taskProgress - 1].@detail;
               _taskCompleteDetail.replace("arr",param1[_taskProgress - 1]);
            }
            else
            {
               _taskCompleteDetail = _data.step[_taskProgress].@detail;
               _taskCompleteDetail.replace("arr",param1[_taskProgress]);
            }
            var _loc3_:String = _data.@awardDetail;
            _awardDetail = _loc3_.split(" ");
            func();
         });
         KTool.getMultiValue([this._data.@hasAward],function(param1:Array):void
         {
            _hasAward = param1[0];
         });
      }
      
      public function get awardDetail() : Array
      {
         return this._awardDetail;
      }
      
      public function get hasComplete() : Boolean
      {
         return this._hasComplete;
      }
      
      public function get taskCompleteDetail() : String
      {
         return this._taskCompleteDetail;
      }
      
      public function get taskProgress() : int
      {
         return this._taskProgress;
      }
      
      public function get hasAward() : Boolean
      {
         return this._hasAward;
      }
      
      public function get taskTotalStep() : int
      {
         return this._taskTotalStep;
      }
      
      public function get id() : int
      {
         return int(this._data.@id);
      }
      
      public function get taskType() : int
      {
         return int(this._data.@type);
      }
   }
}
