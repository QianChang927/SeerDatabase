package com.robot.app2.control.DiamondTask.data
{
   import com.robot.app.task.petstory.util.KTool;
   
   public class BitForeverDiamondTask extends DiamondTask
   {
       
      
      public function BitForeverDiamondTask(param1:XML)
      {
         super(param1);
      }
      
      override public function updateTaskInfo(param1:Function = null) : void
      {
         var bitArr:Array = null;
         var str:String = null;
         var temp:Array = null;
         var i:int = 0;
         var func:Function = param1;
         var multiValue:Array = new Array();
         bitArr = new Array();
         str = "";
         i = 1;
         while(i <= _detailValue.length)
         {
            multiValue.push(_detailValue[i - 1].split(":")[0]);
            str = String(_detailValue[i - 1].split(":")[1]);
            temp = str.split("~");
            if(temp.length == 1)
            {
               bitArr.push(temp[0],temp[0]);
            }
            else if(temp.length == 2)
            {
               bitArr.push(temp[0],temp[1]);
            }
            else
            {
               bitArr.push(1,32);
            }
            i++;
         }
         KTool.getMultiValue(multiValue,function(param1:Array):void
         {
            var tempInt:int;
            var arr:Array = param1;
            _taskProgress = 0;
            i = 1;
            while(i <= arr.length)
            {
               arr[i - 1] = getBitValue(arr[i - 1],bitArr[i * 2 - 2],bitArr[i * 2 - 1]);
               if(arr[i - 1] < _data.step[i - 1].@needValue)
               {
                  break;
               }
               ++_taskProgress;
               ++i;
            }
            _taskTotalStep = XMLList(_data.step).length();
            _hasComplete = _taskProgress >= _taskTotalStep;
            tempInt = _hasComplete ? _taskProgress - 1 : _taskProgress;
            _taskCompleteDetail = _data.step[tempInt].@detail;
            _taskCompleteDetail = _taskCompleteDetail.replace("arr",arr[tempInt]);
            str = _data.@awardDetail;
            _awardDetail = str.split(" ");
            temp = String(_data.@hasAward).split(":");
            KTool.getMultiValue([temp[0]],function(param1:Array):void
            {
               temp = temp[1].split("~");
               if(temp.length == 1)
               {
                  temp.push(temp[0]);
               }
               _hasAward = getBitValue(param1[0],temp[0],temp[1]) == 1;
               func();
            });
         });
      }
      
      public function getBitValue(param1:int, param2:int, param3:int) : int
      {
         if(param2 == 1 && param3 == 32)
         {
            return param1;
         }
         return param1 >> param2 - 1 & Math.pow(2,param3 - param2 + 1) - 1;
      }
   }
}
