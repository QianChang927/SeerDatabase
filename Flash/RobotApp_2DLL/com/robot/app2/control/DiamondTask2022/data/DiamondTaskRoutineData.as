package com.robot.app2.control.DiamondTask2022.data
{
   import com.robot.core.config.xml.DiamondTask2022XMLInfo;
   import flash.utils.ByteArray;
   
   public class DiamondTaskRoutineData
   {
       
      
      protected var taskType:int;
      
      protected var taskId:int;
      
      protected var curProgress:int;
      
      protected var sumProgress:int;
      
      protected var curState:int;
      
      protected var taskTitle:String;
      
      protected var taskDesc:String;
      
      protected var rewardInfo:Array;
      
      protected var jumpStr:String;
      
      public function DiamondTaskRoutineData(param1:int, param2:ByteArray)
      {
         this.rewardInfo = [];
         super();
         this.taskType = param1;
         this.updateData(param2);
      }
      
      public function updateData(param1:ByteArray) : void
      {
         this.taskId = param1.readUnsignedInt();
         this.curProgress = param1.readUnsignedInt();
         this.sumProgress = param1.readUnsignedInt();
         this.curState = param1.readUnsignedInt();
         var _loc2_:XML = DiamondTask2022XMLInfo.getDailyTaskXML(this.taskId);
         this.taskTitle = _loc2_.@title;
         this.taskDesc = _loc2_.@describe;
         this.rewardInfo = _loc2_.@rewardinfo.toString().split("_");
         this.jumpStr = DiamondTask2022XMLInfo.getDailyTaskJump(this.taskId);
      }
      
      public function getTaskType() : int
      {
         return this.taskType;
      }
      
      public function getTaskId() : int
      {
         return this.taskId;
      }
      
      public function getCurProgress() : int
      {
         return this.curProgress;
      }
      
      public function getSumProgress() : int
      {
         return this.sumProgress;
      }
      
      public function getCurState() : int
      {
         return this.curState;
      }
      
      public function getTitle() : String
      {
         return this.taskTitle;
      }
      
      public function getDesc() : String
      {
         return this.taskDesc;
      }
      
      public function getRewardInfo() : Array
      {
         return this.rewardInfo;
      }
      
      public function getJump() : String
      {
         return this.jumpStr;
      }
   }
}
