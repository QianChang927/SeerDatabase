package com.robot.core.config.xmlInfo
{
   import com.robot.core.info.userItem.SingleItemInfo;
   import flash.utils.IDataInput;
   
   public class LimitItemInfo extends SingleItemInfo
   {
       
      
      public function LimitItemInfo(param1:IDataInput = null, param2:Boolean = true)
      {
         super();
         if(param1)
         {
            itemID = param1.readUnsignedInt();
            leftTime = param1.readUnsignedInt();
            itemNum = param1.readUnsignedInt();
         }
      }
   }
}
