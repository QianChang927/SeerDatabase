package com.robot.app.task.model
{
   public class MainTaskDetailTask
   {
       
      
      public var taskId:uint;
      
      public var mcName:String;
      
      public var flagName:String;
      
      public var panel:String;
      
      public var tips:String;
      
      public var requirement:String;
      
      public var question:String;
      
      public var codeAfterFinish:String;
      
      private var _online:String;
      
      public var steps:Array;
      
      public function MainTaskDetailTask()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : MainTaskDetailTask
      {
         var _loc3_:XML = null;
         if(!param1)
         {
            return null;
         }
         var _loc2_:MainTaskDetailTask = new MainTaskDetailTask();
         _loc2_.taskId = param1.attribute("id");
         if(_loc2_.taskId <= 0)
         {
            return null;
         }
         _loc2_.mcName = param1.attribute("mcname");
         _loc2_.flagName = param1.attribute("flag");
         _loc2_.panel = param1.attribute("panel");
         _loc2_.tips = param1.attribute("tips");
         _loc2_.requirement = param1.attribute("dialog");
         _loc2_.question = param1.attribute("question");
         _loc2_.codeAfterFinish = param1.attribute("code");
         _loc2_.online = param1.attribute("online");
         _loc2_.steps = new Array();
         for each(_loc3_ in param1.child("steps"))
         {
            _loc2_.steps.push(MainTaskDetailStep.ReadXml(_loc3_));
         }
         return _loc2_;
      }
      
      public function set online(param1:String) : void
      {
         this._online = param1;
      }
      
      public function get onlineTime() : Number
      {
         if(null == this._online || this._online.length <= 0)
         {
            return 0;
         }
         return new Date(this._online).time;
      }
   }
}
