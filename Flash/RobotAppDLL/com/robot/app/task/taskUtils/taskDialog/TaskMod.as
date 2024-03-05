package com.robot.app.task.taskUtils.taskDialog
{
   public class TaskMod
   {
       
      
      public var type:int;
      
      public var npcId:int;
      
      public var dialogArr:Array;
      
      public var answerArr:Array;
      
      public var mcArr:Array;
      
      public var handles:Array;
      
      public var isNewDialog:Boolean = false;
      
      public var isNewDialog_1:Boolean = false;
      
      public var useNewHeadPath:Boolean = false;
      
      public function TaskMod(param1:int = 0, param2:int = 1, param3:Array = null, param4:Array = null, param5:Array = null, param6:Array = null)
      {
         this.dialogArr = [];
         this.answerArr = [];
         this.mcArr = [];
         this.handles = [];
         super();
         this.type = param1;
         this.npcId = param2;
         this.dialogArr = param3;
         this.answerArr = param4;
         this.mcArr = param5;
         this.handles = param6;
      }
   }
}
