package com.robot.app.task.model
{
   import com.robot.core.manager.SystemTimerManager;
   
   public class MainTaskDetailGroup
   {
       
      
      public var grpId:int;
      
      public var grpName:String;
      
      public var iconUrl:String;
      
      public var panelFla:String;
      
      public var achievementProtocolId:int;
      
      public var achievementReq:Array;
      
      public var tasks:Array;
      
      public function MainTaskDetailGroup()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : MainTaskDetailGroup
      {
         var _loc3_:XML = null;
         var _loc4_:MainTaskDetailTask = null;
         if(!param1)
         {
            return null;
         }
         var _loc2_:MainTaskDetailGroup = new MainTaskDetailGroup();
         _loc2_.grpId = param1.attribute("grpid");
         _loc2_.grpName = param1.attribute("name");
         _loc2_.iconUrl = param1.attribute("iconurl");
         _loc2_.panelFla = param1.attribute("flaname");
         _loc2_.achievementProtocolId = param1.attribute("archievepro");
         _loc2_.achievementReq = String(param1.attribute("archievereq")).split(",");
         _loc2_.tasks = new Array();
         for each(_loc3_ in param1.child("task"))
         {
            _loc4_ = MainTaskDetailTask.ReadXml(_loc3_);
            if(null != _loc4_ && SystemTimerManager.sysDate.time > _loc4_.onlineTime)
            {
               _loc2_.tasks.push(_loc4_);
            }
         }
         return _loc2_;
      }
   }
}
