package com.robot.app.task.model
{
   public class MainTaskDetailStep
   {
       
      
      public var stepId:int;
      
      public var mapId:uint;
      
      public var dialogs:Array;
      
      public function MainTaskDetailStep()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : MainTaskDetailStep
      {
         var _loc3_:XML = null;
         if(null == param1)
         {
            return null;
         }
         var _loc2_:MainTaskDetailStep = new MainTaskDetailStep();
         _loc2_.stepId = param1.attribute("id");
         _loc2_.mapId = param1.attribute("mapid");
         _loc2_.dialogs = new Array();
         for each(_loc3_ in param1.child("taskmod"))
         {
            _loc2_.dialogs.push(MainTaskDetailMod.ReadXml(_loc3_));
         }
         return _loc2_;
      }
   }
}
