package com.robot.core.info.item
{
   import com.robot.core.config.ClientConfig;
   import flash.utils.IDataInput;
   
   public class DoodleInfo
   {
       
      
      public var userID:uint;
      
      public var id:uint;
      
      public var color:uint;
      
      public var texture:uint;
      
      public var URL:String;
      
      public var preURL:String;
      
      public var price:uint;
      
      public var coins:uint;
      
      public function DoodleInfo(param1:IDataInput = null)
      {
         super();
         if(param1)
         {
            this.userID = param1.readUnsignedInt();
            this.color = param1.readUnsignedInt();
            this.texture = param1.readUnsignedInt();
            this.coins = param1.readUnsignedInt();
            this.URL = ClientConfig.getDoodleSwf(this.texture);
            this.preURL = ClientConfig.getDoodlePrev(this.texture);
         }
      }
   }
}
