package com.robot.core.group.info
{
   import flash.utils.IDataInput;
   
   public class ChgLeaderInfo
   {
       
      
      public var groupIDInfo:com.robot.core.group.info.GroupIDInfo;
      
      public var oldLeaderID:uint;
      
      public var leaderID:uint;
      
      public var leaderNick:String;
      
      public function ChgLeaderInfo(param1:IDataInput = null)
      {
         super();
      }
   }
}
