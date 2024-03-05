package com.robot.app2.share.platform
{
   import com.robot.app2.share.data.ShareData;
   
   public class PlatForm
   {
       
      
      protected var shareUrl:String;
      
      protected var shareData:ShareData;
      
      public function PlatForm()
      {
         super();
      }
      
      public function set data(param1:ShareData) : void
      {
         this.shareData = param1;
      }
      
      public function get url() : String
      {
         return "";
      }
   }
}
