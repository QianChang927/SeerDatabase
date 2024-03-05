package com.robot.core.manager.eggMachine
{
   import com.robot.core.info.userItem.SingleItemInfo;
   import flash.utils.IDataInput;
   
   public class CrystalCoreItem extends SingleItemInfo
   {
       
      
      public var id:uint;
      
      public var time:uint;
      
      public var remainTime:uint;
      
      public function CrystalCoreItem(param1:IDataInput)
      {
         super();
         this.id = param1.readUnsignedInt();
         this.time = param1.readUnsignedInt();
         this.remainTime = param1.readUnsignedInt();
         updateTime = this.time;
         itemID = this.id;
         itemNum = 1;
      }
   }
}
