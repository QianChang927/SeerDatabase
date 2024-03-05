package com.robot.core.info
{
   import flash.utils.IDataInput;
   
   public class SystemMsgInfo
   {
       
      
      public var npc:uint;
      
      public var msgTime:uint;
      
      public var msg:String;
      
      private var msgLen:uint;
      
      public var broadcast:com.robot.core.info.BroadcastInfo;
      
      public var broadcast2016:com.robot.core.info.Broadcast2016Info;
      
      public var type:uint;
      
      public var buffer:uint;
      
      public var isUseSO:Boolean;
      
      public var moduleName:String;
      
      public var moduleType:String;
      
      public var moduleParam:Object;
      
      public var isSimple:Boolean;
      
      public var msgPriority:int;
      
      public var des:String;
      
      public function SystemMsgInfo(param1:IDataInput = null)
      {
         super();
         if(param1)
         {
            this.npc = param1.readUnsignedInt();
            this.msgTime = param1.readUnsignedInt();
            this.msgLen = param1.readUnsignedInt();
            if(this.npc == 99)
            {
               this.broadcast2016 = new com.robot.core.info.Broadcast2016Info(param1);
            }
            else
            {
               this.msg = param1.readUTFBytes(this.msgLen);
            }
         }
      }
   }
}
