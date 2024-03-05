package com.robot.core.info
{
   import flash.utils.ByteArray;
   
   public class EscapedEvilShadowInfo
   {
       
      
      public var gridArr:Array;
      
      public var layer:int;
      
      public var last_position:int;
      
      public var grid_state_ex:int;
      
      public var main_task_id:int;
      
      public var task_progress:int;
      
      public var text_id:int;
      
      public var max_unlock:int;
      
      public function EscapedEvilShadowInfo(param1:ByteArray)
      {
         var _loc3_:int = 0;
         super();
         this.gridArr = [];
         var _loc2_:int = 0;
         while(_loc2_ < 24)
         {
            _loc3_ = int(param1.readUnsignedInt());
            this.gridArr.push(_loc3_);
            _loc2_++;
         }
         this.layer = param1.readUnsignedInt();
         this.last_position = param1.readUnsignedInt();
         this.grid_state_ex = param1.readUnsignedInt();
         this.main_task_id = param1.readUnsignedInt();
         this.task_progress = param1.readUnsignedInt();
         this.text_id = param1.readUnsignedInt();
         this.max_unlock = param1.readUnsignedInt();
      }
   }
}
