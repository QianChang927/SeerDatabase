package com.robot.core.info.userItem
{
   import com.robot.core.utils.ItemType;
   import flash.utils.IDataInput;
   
   public class SoulBeadItemInfo extends SingleItemInfo
   {
       
      
      public var obtainTime:uint;
      
      public function SoulBeadItemInfo(param1:IDataInput = null)
      {
         super();
         type = ItemType.SOULBEAD;
         this.obtainTime = param1.readUnsignedInt();
         itemID = param1.readUnsignedInt();
         updateTime = this.obtainTime;
         itemNum = 1;
      }
   }
}
