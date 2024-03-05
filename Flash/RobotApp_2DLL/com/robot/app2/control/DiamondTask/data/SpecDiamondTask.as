package com.robot.app2.control.DiamondTask.data
{
   import com.robot.app.task.petstory.util.KTool;
   
   public class SpecDiamondTask extends BitForeverDiamondTask
   {
       
      
      public function SpecDiamondTask(param1:XML)
      {
         super(param1);
      }
      
      override public function updateTaskInfo(param1:Function = null) : void
      {
         var func:Function = param1;
         super.updateTaskInfo(function():void
         {
            KTool.getMultiValue([16582],function(param1:Array):void
            {
               var _loc2_:int = 0;
               var _loc3_:int = 1;
               while(_loc3_ <= 10)
               {
                  if(KTool.getBit(param1[0],_loc3_) == 1)
                  {
                     _loc2_++;
                  }
                  _loc3_++;
               }
               _taskProgress = _loc2_;
               _taskTotalStep = 10;
               _hasComplete = _taskProgress >= _taskTotalStep;
               var _loc4_:int = _hasComplete ? _taskProgress - 1 : _taskProgress;
               _taskCompleteDetail = _data.step[0].@detail;
               func();
            });
         });
      }
      
      override public function taskGo() : void
      {
      }
   }
}
